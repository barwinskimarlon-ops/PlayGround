import * as THREE from "three";

const _z = new THREE.Vector3(0, 0, 1);
const _desired = new THREE.Vector3();
const _dir = new THREE.Vector3();
const _center = new THREE.Vector3();

export class Missile {
  constructor(scene, effects, origin, direction, target, damage, turnRate) {
    this.scene = scene;
    this.effects = effects;
    this.damage = damage;
    this.turnRate = turnRate;
    this.target = target;
    this.vel = direction.clone().normalize();
    this.speed = 95;
    this.life = 6;
    this.dead = false;
    this.trailTimer = 0;

    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x66707a,
      roughness: 0.42,
      metalness: 0.65,
    });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.14, 1.5, 7), bodyMat);
    body.rotation.x = Math.PI / 2;
    group.add(body);
    const nose = new THREE.Mesh(
      new THREE.ConeGeometry(0.14, 0.55, 7),
      new THREE.MeshStandardMaterial({ color: 0x2f363c, roughness: 0.4, metalness: 0.75 })
    );
    nose.rotation.x = Math.PI / 2;
    nose.position.z = 1.0;
    group.add(nose);
    for (let i = 0; i < 4; i++) {
      const fin = new THREE.Mesh(
        new THREE.BoxGeometry(0.03, 0.42, 0.4),
        new THREE.MeshStandardMaterial({ color: 0x252b31, roughness: 0.55, metalness: 0.4 })
      );
      fin.position.z = -0.55;
      fin.rotation.z = (i * Math.PI) / 2;
      fin.position.x = Math.cos((i * Math.PI) / 2) * 0.18;
      fin.position.y = Math.sin((i * Math.PI) / 2) * 0.18;
      group.add(fin);
    }
    const flame = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: effects.texture,
        color: 0xffb25e,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    flame.position.z = -1.1;
    flame.scale.setScalar(1.9);
    group.add(flame);
    this.flame = flame;

    group.position.copy(origin);
    group.quaternion.setFromUnitVectors(_z, this.vel);
    scene.add(group);
    this.mesh = group;
    this.origin = origin;
  }

  update(dt, entities) {
    if (this.dead) return null;
    this.life -= dt;
    if (this.life <= 0) return "expire";

    if (this.target && !this.target.dead) {
      _center.copy(this.target.center);
      _desired.subVectors(_center, this.mesh.position);
      const dist = _desired.length();
      if (dist < Math.max(7, this.target.radius * 0.55)) return "hit";
      _desired.multiplyScalar(1 / Math.max(0.001, dist));
      const before = this.vel.clone();
      this.vel.lerp(_desired, Math.min(1, dt * this.turnRate)).normalize();
      // keep the missile from snapping too violently
      if (before.angleTo(this.vel) > 0.28) {
        this.vel.lerpVectors(before, this.vel, 0.4).normalize();
      }
    }

    this.mesh.position.addScaledVector(this.vel, this.speed * dt);
    this.mesh.quaternion.setFromUnitVectors(_z, this.vel);
    this.flame.material.opacity = 0.72 + Math.random() * 0.28;
    this.flame.scale.setScalar(1.55 + Math.random() * 0.7);

    this.trailTimer -= dt;
    if (this.trailTimer <= 0) {
      this.trailTimer = 0.024;
      this.effects.missileTrail(this.mesh.position);
    }

    if (this.mesh.position.y < 2.2) return "ground";
    if (Math.abs(this.mesh.position.x) > 300 || Math.abs(this.mesh.position.z) > 300) return "expire";

    // proximity fuse against non-locked targets
    for (const e of entities) {
      if (e.dead) continue;
      const d = this.mesh.position.distanceTo(e.center);
      if (d < Math.min(e.radius * 0.72, 11)) return "hit";
    }
    return null;
  }

  dispose() {
    this.dead = true;
    this.scene.remove(this.mesh);
    this.mesh.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material && o.material !== this.effects.texture && !Array.isArray(o.material)) {
        if (!o.material.map || o.material.map !== this.effects.texture) o.material.dispose();
      }
    });
  }
}

export class EnemyOrb {
  constructor(scene, effects, origin, direction, color = 0xff5a2d, speed = 52) {
    this.scene = scene;
    this.effects = effects;
    this.vel = direction.clone().normalize();
    this.speed = speed;
    this.life = 5.5;
    this.dead = false;
    this.trailTimer = 0;
    this.color = new THREE.Color(color);

    const group = new THREE.Group();
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.52, 1),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(color).lerp(new THREE.Color("#ffffff"), 0.35) })
    );
    group.add(core);
    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: effects.texture,
        color,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: 0.95,
      })
    );
    glow.scale.setScalar(4.6);
    group.add(glow);
    this.core = core;
    this.glow = glow;

    group.position.copy(origin);
    scene.add(group);
    this.mesh = group;
  }

  update(dt, playerPos) {
    if (this.dead) return null;
    this.life -= dt;
    if (this.life <= 0) return "expire";
    this.mesh.position.addScaledVector(this.vel, this.speed * dt);
    this.core.rotation.x += dt * 4;
    this.core.rotation.y += dt * 3;
    const pulse = 0.9 + Math.sin(performance.now() / 90) * 0.12;
    this.glow.scale.setScalar(4.5 * pulse);

    this.trailTimer -= dt;
    if (this.trailTimer <= 0) {
      this.trailTimer = 0.038;
      this.effects.spark(this.mesh.position, 1, {
        speed: 1.6,
        color: this.color.clone().lerp(new THREE.Color("#ffffff"), 0.3),
        life: 0.35,
        size: 0.42,
        gravity: 0,
        drag: 2.2,
      });
    }

    if (this.mesh.position.distanceTo(playerPos) < 3.1) return "player";
    if (this.mesh.position.y < 1.6) return "ground";
    if (Math.abs(this.mesh.position.x) > 300 || Math.abs(this.mesh.position.z) > 300) return "expire";
    return null;
  }

  dispose() {
    this.dead = true;
    this.scene.remove(this.mesh);
    this.core.geometry.dispose();
    this.core.material.dispose();
    this.glow.material.dispose();
  }
}
