import * as THREE from "three";

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _target = new THREE.Vector3();
const _dir = new THREE.Vector3();
const _quat = new THREE.Quaternion();

const KAIJU_TYPES = {
  behemoth: {
    name: "BEHEMOTH",
    classLabel: "CLASS V",
    color: 0x4f513c,
    color2: 0x2f3225,
    plate: 0x1e2119,
    accent: 0xff5425,
    scale: 1.9,
    speed: 5.4,
    hp: 1850,
  },
  ravager: {
    name: "RAVAGER",
    classLabel: "CLASS IV",
    color: 0x5e4550,
    color2: 0x362a30,
    plate: 0x211b20,
    accent: 0xff2b70,
    scale: 1.7,
    speed: 7.4,
    hp: 1420,
  },
  colossus: {
    name: "COLOSSUS",
    classLabel: "CLASS VI",
    color: 0x46555c,
    color2: 0x2a363c,
    plate: 0x172126,
    accent: 0x58e5ff,
    scale: 2.1,
    speed: 4.4,
    hp: 3600,
  },
  ashwing: {
    name: "ASHWING",
    classLabel: "AIRBORNE",
    color: 0x2c2f3d,
    color2: 0x181b25,
    plate: 0x12141c,
    accent: 0xff4a24,
    scale: 1.0,
    speed: 29,
    hp: 260,
  },
  nightwing: {
    name: "NIGHTWING",
    classLabel: "AIRBORNE",
    color: 0x363147,
    color2: 0x1d1a29,
    plate: 0x151220,
    accent: 0x5ee7ff,
    scale: 1.08,
    speed: 34,
    hp: 340,
  },
};

function standard(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.82,
    metalness: opts.metalness ?? 0.08,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 0,
    flatShading: opts.flatShading ?? true,
    side: opts.side ?? THREE.FrontSide,
  });
}

function addMesh(parent, geo, mat, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function mark(meshes, entity, part = "body") {
  for (const m of meshes) {
    m.userData.entity = entity;
    m.userData.part = part;
  }
}

export class Kaiju {
  constructor(scene, world, type, position, wave = 1) {
    this.scene = scene;
    this.world = world;
    this.type = type;
    this.cfg = { ...KAIJU_TYPES[type] };
    this.isKaiju = true;
    this.isFlyer = false;
    this.maxHp = Math.round(this.cfg.hp * (1 + (wave - 1) * 0.13));
    this.hp = this.maxHp;
    this.dead = false;
    this.deathT = 0;
    this.remove = false;
    this.flash = 0;
    this.phase = Math.random() * 10;
    this.attackCooldown = 1.8 + Math.random() * 1.8;
    this.attackT = -1;
    this.attackDidHit = false;
    this.targetBuilding = null;
    this.targetRetry = 0;
    this.stepT = 0;
    this.hitMeshes = [];
    this.flashMats = [];
    this.active = true;
    this.speed = this.cfg.speed;
    this.anchor = new THREE.Vector3(0, 21, 0);

    this.root = new THREE.Group();
    this.root.position.copy(position);
    this.root.scale.setScalar(this.cfg.scale);
    scene.add(this.root);

    this._build();
    mark(this.hitMeshes, this);
    this.head.traverse((o) => {
      if (o.isMesh) o.userData.part = "head";
    });
  }

  _build() {
    const c = this.cfg;
    const skin = standard(c.color, { roughness: 0.87 });
    const skin2 = standard(c.color2, { roughness: 0.9 });
    const plate = standard(c.plate, { roughness: 0.65, metalness: 0.25 });
    const accent = new THREE.MeshStandardMaterial({
      color: c.accent,
      emissive: c.accent,
      emissiveIntensity: 2.4,
      roughness: 0.35,
      flatShading: true,
    });
    const eye = new THREE.MeshBasicMaterial({ color: 0xff7a33 });
    const tooth = standard(0xc9c1a8, { roughness: 0.7 });
    const claw = standard(0x181b1b, { roughness: 0.55, metalness: 0.3 });
    this.flashMats.push(skin, skin2, plate);

    const body = new THREE.Group();
    body.position.y = 13.7;
    this.root.add(body);
    this.body = body;

    const pelvis = addMesh(body, new THREE.DodecahedronGeometry(1, 0), skin, 0, 0.5, 0);
    pelvis.scale.set(3.9, 2.4, 2.8);
    this.hitMeshes.push(pelvis);

    const torso = addMesh(body, new THREE.IcosahedronGeometry(1, 1), skin, 0, 6.5, 0.2);
    torso.scale.set(4.55, 5.6, 3.45);
    this.hitMeshes.push(torso);

    const belly = addMesh(body, new THREE.IcosahedronGeometry(1, 1), skin2, 0, 4.7, 1.4);
    belly.scale.set(3.5, 3.8, 2.4);
    this.hitMeshes.push(belly);

    // chest / rib armor
    for (let i = 0; i < 3; i++) {
      const rib = addMesh(
        body,
        new THREE.BoxGeometry(6.9 - i * 0.75, 0.72, 0.55),
        plate,
        0,
        8.4 - i * 1.65,
        3.02 - i * 0.16
      );
      rib.rotation.x = -0.08;
      this.hitMeshes.push(rib);
    }
    const chestCore = addMesh(body, new THREE.OctahedronGeometry(0.7, 0), accent, 0, 7.15, 3.23);
    this.hitMeshes.push(chestCore);

    // dorsal plates
    this.spines = [];
    for (let i = 0; i < 6; i++) {
      const s = addMesh(
        body,
        new THREE.ConeGeometry(0.85 - i * 0.06, 3.8 + i * 0.25, 4),
        plate,
        0,
        7.6 + i * 0.55,
        -2.9 - Math.sin(i * 0.8) * 0.35
      );
      s.rotation.x = -0.56;
      this.spines.push(s);
      this.hitMeshes.push(s);
      const glow = addMesh(body, new THREE.ConeGeometry(0.23, 1.5, 4), accent, 0, 8.5 + i * 0.55, -3.55);
      glow.rotation.x = -0.56;
      this.hitMeshes.push(glow);
    }

    // neck + head
    const neck = addMesh(body, new THREE.CylinderGeometry(1.6, 2.3, 3.1, 7), skin2, 0, 12.4, 2.1);
    neck.rotation.x = 0.34;
    this.hitMeshes.push(neck);

    const head = new THREE.Group();
    head.position.set(0, 14.55, 2.45);
    body.add(head);
    this.head = head;

    const skull = addMesh(head, new THREE.DodecahedronGeometry(1, 0), skin, 0, 0.4, 0.35);
    skull.scale.set(2.55, 2.0, 2.75);
    this.hitMeshes.push(skull);

    const snout = addMesh(head, new THREE.BoxGeometry(3.35, 1.6, 2.7), skin2, 0, -0.28, 2.25);
    snout.rotation.x = 0.08;
    this.hitMeshes.push(snout);
    const brow = addMesh(head, new THREE.BoxGeometry(4.4, 0.6, 1.4), plate, 0, 1.42, 1.1);
    brow.rotation.x = -0.16;
    this.hitMeshes.push(brow);

    const jaw = addMesh(head, new THREE.BoxGeometry(3.2, 0.72, 2.9), skin2, 0, -1.25, 2.35);
    jaw.rotation.x = -0.08;
    this.hitMeshes.push(jaw);

    for (let i = 0; i < 5; i++) {
      const t = addMesh(head, new THREE.ConeGeometry(0.13, 0.75, 4), tooth, -1.2 + i * 0.6, -0.95, 3.5);
      t.rotation.x = Math.PI;
      this.hitMeshes.push(t);
    }

    const eyeL = addMesh(head, new THREE.SphereGeometry(0.33, 7, 5), eye, -1.35, 0.78, 2.62);
    const eyeR = addMesh(head, new THREE.SphereGeometry(0.33, 7, 5), eye, 1.35, 0.78, 2.62);
    eyeL.scale.set(1.2, 0.5, 0.72);
    eyeR.scale.set(1.2, 0.5, 0.72);
    this.hitMeshes.push(eyeL, eyeR);

    for (const sx of [-1, 1]) {
      const horn = addMesh(head, new THREE.ConeGeometry(0.42, 3.6, 5), plate, sx * 1.72, 1.95, 0.1);
      horn.rotation.z = sx * 0.48;
      horn.rotation.x = -0.18;
      this.hitMeshes.push(horn);
    }

    // arms
    this.arms = [];
    for (const side of [-1, 1]) {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 4.75, 10.0, 0.5);
      body.add(shoulder);
      const upper = addMesh(
        shoulder,
        new THREE.CylinderGeometry(0.95, 1.45, 6.2, 6),
        skin2,
        0,
        -2.8,
        0
      );
      this.hitMeshes.push(upper);
      const elbow = new THREE.Group();
      elbow.position.y = -5.9;
      shoulder.add(elbow);
      const fore = addMesh(
        elbow,
        new THREE.CylinderGeometry(0.72, 1.2, 5.5, 6),
        skin,
        0,
        -2.6,
        0.12
      );
      fore.rotation.x = 0.12;
      this.hitMeshes.push(fore);
      const hand = addMesh(elbow, new THREE.DodecahedronGeometry(1, 0), skin2, 0, -5.35, 0.45);
      hand.scale.set(1.15, 0.95, 1.35);
      this.hitMeshes.push(hand);

      for (let i = 0; i < 3; i++) {
        const finger = addMesh(elbow, new THREE.ConeGeometry(0.21, 1.8, 4), claw, (i - 1) * 0.55, -6.25, 1.16);
        finger.rotation.x = 2.75;
        this.hitMeshes.push(finger);
      }

      shoulder.rotation.z = side * 0.09;
      this.arms.push({ shoulder, elbow, side });
    }

    // legs
    this.legs = [];
    for (const side of [-1, 1]) {
      const hip = new THREE.Group();
      hip.position.set(side * 2.55, 0.65, 0);
      body.add(hip);
      const thigh = addMesh(
        hip,
        new THREE.CylinderGeometry(1.35, 1.85, 6.5, 6),
        skin2,
        0,
        -3.15,
        0
      );
      this.hitMeshes.push(thigh);
      const knee = new THREE.Group();
      knee.position.y = -6.25;
      hip.add(knee);
      const shin = addMesh(
        knee,
        new THREE.CylinderGeometry(0.9, 1.4, 6.5, 6),
        skin,
        0,
        -3.15,
        0.08
      );
      this.hitMeshes.push(shin);
      const foot = addMesh(knee, new THREE.BoxGeometry(3.15, 1.12, 5.1), skin2, 0, -6.6, 1.5);
      this.hitMeshes.push(foot);
      for (let i = 0; i < 3; i++) {
        const toe = addMesh(knee, new THREE.ConeGeometry(0.3, 1.3, 4), claw, (i - 1) * 0.95, -6.84, 4.12);
        toe.rotation.x = Math.PI / 2;
        this.hitMeshes.push(toe);
      }
      this.legs.push({ hip, knee, side });
    }

    // tail
    this.tail = [];
    const tailRoot = new THREE.Group();
    tailRoot.position.set(0, 4.2, -2.65);
    body.add(tailRoot);
    let parent = tailRoot;
    for (let i = 0; i < 6; i++) {
      const seg = new THREE.Group();
      seg.position.z = i === 0 ? 0 : -2.1;
      parent.add(seg);
      const radius = 1.15 - i * 0.14;
      const mesh = addMesh(
        seg,
        new THREE.CylinderGeometry(Math.max(0.16, radius * 0.7), radius, 2.45, 6),
        i % 2 === 0 ? skin2 : skin,
        0,
        0,
        -1.1
      );
      mesh.rotation.x = Math.PI / 2;
      this.hitMeshes.push(mesh);
      if (i === 5) {
        const spike = addMesh(seg, new THREE.ConeGeometry(0.55, 3.1, 5), plate, 0, 0, -3.4);
        spike.rotation.x = -Math.PI / 2;
        this.hitMeshes.push(spike);
      }
      this.tail.push(seg);
      parent = seg;
    }

    this.body = body;
    this.accent = accent;
    this.skin = skin;
    this.skin2 = skin2;
    this.plate = plate;

    // Warm internal glow: makes the monster read against the dark skyline.
    const glow = new THREE.PointLight(c.accent, 11, 32, 2);
    glow.position.set(0, 20, 5);
    this.root.add(glow);
    this.glowLight = glow;
  }

  get center() {
    this.root.updateMatrixWorld();
    this.anchor.set(0, 21, 0);
    return this.root.localToWorld(this.anchor);
  }

  get headWorld() {
    this.root.updateMatrixWorld();
    return this.head.localToWorld(new THREE.Vector3(0, 2, 1));
  }

  get radius() {
    return 10 * this.cfg.scale;
  }

  takeDamage(amount, crit = false) {
    if (this.dead) return null;
    this.hp -= amount;
    this.flash = 0.09;
    if (this.hp <= 0) {
      this.hp = 0;
      this.die();
      return { killed: true, crit };
    }
    return { killed: false, crit };
  }

  die() {
    if (this.dead) return;
    this.dead = true;
    this.deathT = 0;
    this.active = false;
    if (this.onDeath) this.onDeath(this);
  }

  _chooseTarget() {
    if (!this.world) return null;
    const candidates = this.world.getNearbyBuildings(this.root.position, 95);
    if (!candidates.length) return null;
    let best = null;
    let bestD = Infinity;
    for (const b of candidates) {
      const d = (b.x - this.root.position.x) ** 2 + (b.z - this.root.position.z) ** 2;
      if (d < bestD) {
        bestD = d;
        best = b;
      }
    }
    return best;
  }

  update(dt, time, player) {
    if (this.dead) {
      this.deathT += dt;
      const t = this.deathT;
      if (t > 0.55) {
        this.root.rotation.z = Math.min(1.35, (t - 0.55) * 0.55);
        this.root.position.y -= dt * Math.min(2.2, (t - 0.55) * 1.3);
      }
      this.body.position.y = 13.7 - Math.max(0, t - 1.4) * 1.3;
      this.body.rotation.x = Math.min(0.32, t * 0.1);
      if (t > 4.8) this.remove = true;
      return;
    }

    if (this.flash > 0) {
      this.flash -= dt;
      const f = Math.max(0, this.flash / 0.09);
      for (const m of this.flashMats) {
        m.emissive.setRGB(f * 0.9, f * 0.14, f * 0.03);
      }
    } else {
      for (const m of this.flashMats) m.emissive.setRGB(0, 0, 0);
    }

    this.attackCooldown -= dt;
    let moving = false;

    if (this.attackT >= 0) {
      this.attackT += dt;
      const t = Math.min(1, this.attackT / 1.15);
      const swing = Math.sin(t * Math.PI);
      const arm = this.arms[1];
      arm.shoulder.rotation.x = -2.1 * swing;
      arm.shoulder.rotation.z = 0.09 + Math.sin(t * Math.PI) * 0.45;
      arm.elbow.rotation.x = -0.5 * swing;
      this.body.rotation.x = 0.06 * swing;
      if (!this.attackDidHit && this.attackT > 0.56) {
        this.attackDidHit = true;
        if (this.targetBuilding && !this.targetBuilding.destroyed) {
          const destroyed = this.world.damageBuilding(this.targetBuilding, 1);
          const pos = new THREE.Vector3(
            this.targetBuilding.x,
            6 + Math.random() * Math.min(25, this.targetBuilding.height),
            this.targetBuilding.z
          );
          if (this.onBuildingHit) this.onBuildingHit(this.targetBuilding, destroyed, pos);
          if (destroyed) {
            this.targetBuilding = null;
            this.targetRetry = 0.6;
          }
        }
      }
      if (this.attackT > 1.35) {
        this.attackT = -1;
        this.attackCooldown = Math.max(0.7, 2.5 - (this.world?.difficulty || 0) * 0.12);
      }
    } else {
      if (!this.targetBuilding || this.targetBuilding.destroyed) {
        this.targetBuilding = this._chooseTarget();
        this.targetRetry = 0;
      }

      if (this.targetBuilding) {
        const bx = this.targetBuilding.x;
        const bz = this.targetBuilding.z;
        const dx = bx - this.root.position.x;
        const dz = bz - this.root.position.z;
        const dist = Math.hypot(dx, dz);
        const reach = Math.max(this.targetBuilding.width, this.targetBuilding.depth) / 2 + 7.4 * this.cfg.scale;
        if (dist > reach) {
          const nx = dx / Math.max(0.001, dist);
          const nz = dz / Math.max(0.001, dist);
          this.root.position.x += nx * this.speed * dt;
          this.root.position.z += nz * this.speed * dt;
          this.root.rotation.y = Math.atan2(nx, nz);
          moving = true;
        } else if (this.attackCooldown <= 0) {
          this.attackT = 0;
          this.attackDidHit = false;
          this.root.rotation.y = Math.atan2(dx, dz);
        }
      }
    }

    this.root.position.x = THREE.MathUtils.clamp(this.root.position.x, -238, 238);
    this.root.position.z = THREE.MathUtils.clamp(this.root.position.z, -238, 238);

    this.phase += dt * (moving ? this.speed * 0.47 : 0.5);
    const s = Math.sin(this.phase);
    const c = Math.cos(this.phase);
    const walkAmp = moving ? 0.53 : 0.09;
    const bob = moving ? Math.abs(Math.sin(this.phase)) * 0.24 : Math.sin(time * 1.4) * 0.08;
    this.body.position.y = 13.7 + bob;
    this.body.rotation.z = moving ? s * 0.035 : Math.sin(time * 0.8) * 0.01;
    this.body.rotation.y = moving ? c * 0.025 : 0;

    const l = this.legs[0];
    const r = this.legs[1];
    l.hip.rotation.x = s * walkAmp;
    r.hip.rotation.x = -s * walkAmp;
    l.knee.rotation.x = Math.max(0, -s) * 0.65;
    r.knee.rotation.x = Math.max(0, s) * 0.65;

    if (this.attackT < 0) {
      const armAmp = moving ? 0.24 : 0.05;
      this.arms[0].shoulder.rotation.x = -s * armAmp;
      this.arms[1].shoulder.rotation.x = s * armAmp;
      this.arms[0].shoulder.rotation.z = -0.09;
      this.arms[1].shoulder.rotation.z = 0.09;
      this.arms[0].elbow.rotation.x = 0.08 + Math.max(0, s) * 0.12;
      this.arms[1].elbow.rotation.x = 0.08 + Math.max(0, -s) * 0.12;
      this.body.rotation.x *= 0.9;
    }

    for (let i = 0; i < this.tail.length; i++) {
      this.tail[i].rotation.y = Math.sin(time * 1.4 + i * 0.62 + this.phase * 0.1) * 0.105;
      this.tail[i].rotation.x = i === 0 ? -0.12 : 0.025;
    }

    this.head.rotation.y = Math.sin(time * 0.65 + this.phase * 0.03) * 0.11;
    this.head.rotation.x = Math.sin(time * 0.9 + 1) * 0.025;

    for (let i = 0; i < this.spines.length; i++) {
      this.spines[i].material.emissiveIntensity = 0.04;
    }
  }
}

export class Flyer {
  constructor(scene, type, position, wave = 1) {
    this.scene = scene;
    this.type = type;
    this.cfg = { ...KAIJU_TYPES[type] };
    this.isKaiju = false;
    this.isFlyer = true;
    this.maxHp = Math.round(this.cfg.hp * (1 + (wave - 1) * 0.15));
    this.hp = this.maxHp;
    this.dead = false;
    this.deathT = 0;
    this.remove = false;
    this.flash = 0;
    this.phase = Math.random() * 10;
    this.orbitAngle = Math.random() * Math.PI * 2;
    this.orbitDir = Math.random() < 0.5 ? 1 : -1;
    this.orbitRadius = 42 + Math.random() * 35;
    this.attackTimer = 2 + Math.random() * 3;
    this.hoverOffset = Math.random() * 22;
    this.hitMeshes = [];
    this.flashMats = [];
    this.velocity = new THREE.Vector3();
    this.active = true;
    this.speed = this.cfg.speed;
    this.anchor = new THREE.Vector3(0, 0, 0);
    this.fireCallback = null;

    this.root = new THREE.Group();
    this.root.position.copy(position);
    scene.add(this.root);

    this._build();
    mark(this.hitMeshes, this);
    this.head.traverse((o) => {
      if (o.isMesh) o.userData.part = "head";
    });
  }

  _build() {
    const c = this.cfg;
    const skin = standard(c.color, { roughness: 0.82 });
    const skin2 = standard(c.color2, { roughness: 0.88 });
    const plate = standard(c.plate, { roughness: 0.68, metalness: 0.18 });
    const membrane = new THREE.MeshStandardMaterial({
      color: c.color2,
      emissive: c.accent,
      emissiveIntensity: 0.12,
      roughness: 0.9,
      metalness: 0.03,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.94,
      flatShading: true,
    });
    const accent = new THREE.MeshStandardMaterial({
      color: c.accent,
      emissive: c.accent,
      emissiveIntensity: 3,
      roughness: 0.4,
    });
    const eye = new THREE.MeshBasicMaterial({ color: 0xffd3a0 });
    const claw = standard(0x16181b, { roughness: 0.5, metalness: 0.3 });
    this.flashMats.push(skin, skin2, plate);

    const body = addMesh(this.root, new THREE.IcosahedronGeometry(1, 1), skin, 0, 0, 0);
    body.scale.set(2.3, 1.85, 3.9);
    this.hitMeshes.push(body);

    const chest = addMesh(this.root, new THREE.OctahedronGeometry(0.62, 0), accent, 0, -0.2, 2.1);
    this.hitMeshes.push(chest);

    const neck = addMesh(this.root, new THREE.CylinderGeometry(0.75, 1.15, 2.35, 6), skin2, 0, 0.55, 3.25);
    neck.rotation.x = 0.9;
    this.hitMeshes.push(neck);

    const head = new THREE.Group();
    head.position.set(0, 1.45, 4.45);
    this.root.add(head);
    this.head = head;
    const skull = addMesh(head, new THREE.DodecahedronGeometry(1, 0), skin, 0, 0, 0);
    skull.scale.set(1.35, 1.15, 1.8);
    this.hitMeshes.push(skull);
    const beak = addMesh(head, new THREE.ConeGeometry(0.62, 2.2, 5), plate, 0, -0.16, 1.9);
    beak.rotation.x = Math.PI / 2;
    this.hitMeshes.push(beak);
    const eyeL = addMesh(head, new THREE.SphereGeometry(0.2, 6, 4), eye, -0.55, 0.38, 0.95);
    const eyeR = addMesh(head, new THREE.SphereGeometry(0.2, 6, 4), eye, 0.55, 0.38, 0.95);
    this.hitMeshes.push(eyeL, eyeR);
    for (const sx of [-1, 1]) {
      const horn = addMesh(head, new THREE.ConeGeometry(0.24, 1.7, 4), plate, sx * 0.7, 0.9, -0.15);
      horn.rotation.z = sx * 0.55;
      this.hitMeshes.push(horn);
    }

    const wingVerts = new Float32Array([
      0, 0, 1.4, 8.5, 0, 2.4, 12.0, 0, -1.6,
      0, 0, 1.4, 12.0, 0, -1.6, 7.0, 0, -3.9,
      0, 0, 1.4, 7.0, 0, -3.9, 2.2, 0, -2.9,
    ]);
    const wingGeo = new THREE.BufferGeometry();
    wingGeo.setAttribute("position", new THREE.BufferAttribute(wingVerts, 3));
    wingGeo.computeVertexNormals();

    this.wings = [];
    for (const side of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set(side * 1.65, 0.3, 0.2);
      pivot.scale.x = side;
      this.root.add(pivot);
      const wing = new THREE.Mesh(wingGeo, membrane);
      wing.castShadow = true;
      pivot.add(wing);
      this.hitMeshes.push(wing);

      const bone = addMesh(pivot, new THREE.CylinderGeometry(0.1, 0.15, 11.5, 4), plate, 5.4, 0, 0.1);
      bone.rotation.z = Math.PI / 2;
      bone.rotation.y = -0.08;
      this.hitMeshes.push(bone);
      this.wings.push({ pivot, side, base: side * 0.16 });
    }

    // tail
    this.tail = [];
    let parent = this.root;
    for (let i = 0; i < 5; i++) {
      const seg = new THREE.Group();
      seg.position.z = i === 0 ? -3.2 : -1.55;
      parent.add(seg);
      const m = addMesh(
        seg,
        new THREE.CylinderGeometry(Math.max(0.08, 0.58 - i * 0.09), 0.62 - i * 0.09, 1.8, 5),
        i % 2 ? skin2 : skin,
        0,
        0,
        -0.75
      );
      m.rotation.x = Math.PI / 2;
      this.hitMeshes.push(m);
      this.tail.push(seg);
      parent = seg;
    }
    const tailBlade = addMesh(parent, new THREE.ConeGeometry(0.35, 2.4, 4), accent, 0, 0, -2.8);
    tailBlade.rotation.x = -Math.PI / 2;
    this.hitMeshes.push(tailBlade);

    this.bodyMat = skin;
    this.membrane = membrane;
    this.accent = accent;
    this.skin = skin;
    this.skin2 = skin2;
    this.plate = plate;
    this.claw = claw;
  }

  get center() {
    this.root.updateMatrixWorld();
    this.anchor.set(0, 0.7, 0);
    return this.root.localToWorld(this.anchor);
  }

  get radius() {
    return 7.4;
  }

  takeDamage(amount, crit = false) {
    if (this.dead) return null;
    this.hp -= amount;
    this.flash = 0.08;
    if (this.hp <= 0) {
      this.hp = 0;
      this.dead = true;
      this.deathT = 0;
      this.active = false;
      return { killed: true, crit };
    }
    return { killed: false, crit };
  }

  update(dt, time, playerPos) {
    if (this.dead) {
      this.deathT += dt;
      this.velocity.y -= 24 * dt;
      this.root.position.addScaledVector(this.velocity, dt);
      this.root.rotation.z += dt * 2.4;
      this.root.rotation.x += dt * 0.7;
      this.root.rotation.y += dt * 1.1;
      this.root.position.addScaledVector(this.velocity, dt);
      if (this.deathT > 4.2) this.remove = true;
      return;
    }

    if (this.flash > 0) {
      this.flash -= dt;
      const f = Math.max(0, this.flash / 0.08);
      for (const m of this.flashMats) m.emissive.setRGB(f * 0.9, f * 0.12, f * 0.05);
    } else {
      for (const m of this.flashMats) m.emissive.setRGB(0, 0, 0);
    }

    this.phase += dt * 6.5;
    this.orbitAngle += dt * 0.48 * this.orbitDir;
    const targetAlt = THREE.MathUtils.clamp(playerPos.y + 8 + Math.sin(time * 0.4 + this.hoverOffset) * 12, 22, 92);
    const r = this.orbitRadius + Math.sin(time * 0.27 + this.hoverOffset) * 8;
    _target.set(
      playerPos.x + Math.cos(this.orbitAngle) * r,
      targetAlt,
      playerPos.z + Math.sin(this.orbitAngle) * r
    );
    _dir.subVectors(_target, this.root.position);
    const dist = _dir.length();
    const maxSpeed = this.speed * (dist > 80 ? 1.45 : 1);
    if (dist > 0.01) _dir.multiplyScalar(1 / dist);
    _v.copy(_dir).multiplyScalar(maxSpeed);
    this.velocity.lerp(_v, 1 - Math.exp(-dt * 1.3));
    this.root.position.addScaledVector(this.velocity, dt);
    this.root.position.y = Math.max(9, this.root.position.y);

    if (this.velocity.lengthSq() > 1) {
      _v2.copy(this.velocity).normalize();
      const targetYaw = Math.atan2(_v2.x, _v2.z);
      let diff = ((targetYaw - this.root.rotation.y + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      this.root.rotation.y += diff * Math.min(1, dt * 4.2);
      const targetPitch = -Math.asin(THREE.MathUtils.clamp(_v2.y, -0.8, 0.8));
      this.root.rotation.x += (targetPitch - this.root.rotation.x) * Math.min(1, dt * 3.5);
      this.root.rotation.z = -this.velocity.x * 0.004 * this.orbitDir;
    }

    const flap = Math.sin(this.phase) * 0.52 + 0.08;
    this.wings[0].pivot.rotation.z = flap;
    this.wings[1].pivot.rotation.z = -flap;
    this.root.position.y += Math.sin(this.phase) * 0.005;
    this.bodyMat.emissiveIntensity = 0;
    this.membrane.emissiveIntensity = 0.12 + Math.sin(time * 2 + this.hoverOffset) * 0.04;

    for (let i = 0; i < this.tail.length; i++) {
      this.tail[i].rotation.y = Math.sin(time * 2.8 - i * 0.7) * 0.14;
    }

    this.attackTimer -= dt;
    const flatDist = Math.hypot(this.root.position.x - playerPos.x, this.root.position.z - playerPos.z);
    if (this.attackTimer <= 0 && dist < 115 && flatDist > 14) {
      this.attackTimer = 3.6 + Math.random() * 2.6;
      if (this.fireCallback) {
        this.root.updateMatrixWorld();
        const mouth = this.head.localToWorld(new THREE.Vector3(0, -0.3, 2.8));
        this.fireCallback(this, mouth, playerPos.clone(), this.cfg.accent);
      }
    }
  }

  explode() {
    this.remove = true;
  }
}

export { KAIJU_TYPES };
