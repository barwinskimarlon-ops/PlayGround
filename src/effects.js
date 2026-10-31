import * as THREE from "three";

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _m = new THREE.Matrix4();
const _s = new THREE.Vector3();
const _up = new THREE.Vector3(0, 0, 1);

function makeParticleTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 31);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.28, "rgba(255,255,255,0.82)");
  g.addColorStop(0.62, "rgba(255,255,255,0.18)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

class ParticleSystem {
  constructor(scene, { capacity = 900, blending = THREE.AdditiveBlending, texture }) {
    this.capacity = capacity;
    this.particles = [];
    this.geometry = new THREE.BufferGeometry();
    this.positions = new Float32Array(capacity * 3);
    this.colors = new Float32Array(capacity * 3);
    this.sizes = new Float32Array(capacity);
    this.alphas = new Float32Array(capacity);
    this.geometry.setAttribute("position", new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage));
    this.geometry.setAttribute("aColor", new THREE.BufferAttribute(this.colors, 3).setUsage(THREE.DynamicDrawUsage));
    this.geometry.setAttribute("aSize", new THREE.BufferAttribute(this.sizes, 1).setUsage(THREE.DynamicDrawUsage));
    this.geometry.setAttribute("aAlpha", new THREE.BufferAttribute(this.alphas, 1).setUsage(THREE.DynamicDrawUsage));
    this.geometry.setDrawRange(0, 0);
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: texture },
        uScale: { value: 900 },
      },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        uniform float uScale;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(aSize * uScale / max(1.0, -mv.z), 1.0, 110.0);
          vColor = aColor;
          vAlpha = aAlpha;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          float a = tex.a * vAlpha;
          if (a < 0.008) discard;
          gl_FragColor = vec4(vColor, a);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending,
    });
    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 6;
    scene.add(this.points);
  }

  add(p) {
    if (this.particles.length >= this.capacity) {
      // recycle the oldest particle
      this.particles.shift();
    }
    this.particles.push(p);
  }

  update(dt, camera) {
    let n = 0;
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.life -= dt;
      if (p.life <= 0) continue;

      p.vel.y -= (p.gravity || 0) * dt;
      const drag = Math.exp(-(p.drag || 0) * dt);
      p.vel.multiplyScalar(drag);
      p.pos.addScaledVector(p.vel, dt);

      p.size += (p.grow || 0) * dt;
      const t = p.life / p.maxLife;
      const alpha = p.fade === "in" ? (1 - t) * p.alpha : t * p.alpha;

      this.positions[n * 3] = p.pos.x;
      this.positions[n * 3 + 1] = p.pos.y;
      this.positions[n * 3 + 2] = p.pos.z;
      this.colors[n * 3] = p.color.r;
      this.colors[n * 3 + 1] = p.color.g;
      this.colors[n * 3 + 2] = p.color.b;
      this.sizes[n] = Math.max(0.01, p.size);
      this.alphas[n] = Math.max(0, alpha);
      n++;
    }
    this.particles.length = n;
    this.geometry.setDrawRange(0, n);
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.aColor.needsUpdate = true;
    this.geometry.attributes.aSize.needsUpdate = true;
    this.geometry.attributes.aAlpha.needsUpdate = true;
  }
}

export class Effects {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.texture = makeParticleTexture();
    this.sparks = new ParticleSystem(scene, {
      capacity: 1400,
      blending: THREE.AdditiveBlending,
      texture: this.texture,
    });
    this.smoke = new ParticleSystem(scene, {
      capacity: 650,
      blending: THREE.NormalBlending,
      texture: this.texture,
    });

    this.tracers = [];
    this.tracerGeo = new THREE.BoxGeometry(1, 1, 1);
    for (let i = 0; i < 46; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffddaa,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(this.tracerGeo, mat);
      mesh.visible = false;
      mesh.frustumCulled = false;
      mesh.renderOrder = 7;
      scene.add(mesh);
      this.tracers.push({ mesh, life: 0, maxLife: 0.2 });
    }

    this.flashes = [];
    for (let i = 0; i < 14; i++) {
      const mat = new THREE.SpriteMaterial({
        map: this.texture,
        color: 0xffb060,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.visible = false;
      sprite.renderOrder = 8;
      scene.add(sprite);
      this.flashes.push({ sprite, life: 0, maxLife: 0.3, target: 10 });
    }

    this.rings = [];
    const ringGeo = new THREE.RingGeometry(0.86, 1, 48);
    for (let i = 0; i < 10; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xff8a46,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const ring = new THREE.Mesh(ringGeo, mat);
      ring.visible = false;
      ring.renderOrder = 7;
      scene.add(ring);
      this.rings.push({ mesh: ring, life: 0, maxLife: 0.5, target: 16 });
    }

    this.debris = [];
    this.debrisMesh = new THREE.InstancedMesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: 0x20262b, roughness: 0.92, metalness: 0.08 }),
      190
    );
    this.debrisMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.debrisMesh.frustumCulled = false;
    this.debrisMesh.castShadow = false;
    scene.add(this.debrisMesh);
    for (let i = 0; i < 190; i++) {
      this.debris.push(null);
      this._hideDebris(i);
    }

    this.debrisCursor = 0;
    this._tracerCursor = 0;
    this._flashCursor = 0;
    this._ringCursor = 0;
    this._debrisActive = false;
  }

  _hideDebris(i) {
    _s.set(0.0001, 0.0001, 0.0001);
    _v.set(0, -500, 0);
    _q.identity();
    _m.compose(_v, _q, _s);
    this.debrisMesh.setMatrixAt(i, _m);
    if (i === 0) this.debrisMesh.instanceMatrix.needsUpdate = true;
  }

  setScale(height) {
    const s = Math.min(2.2, Math.max(0.8, height / 900));
    this.sparks.material.uniforms.uScale.value = 900 * s;
    this.smoke.material.uniforms.uScale.value = 900 * s;
  }

  spark(pos, count, opts = {}) {
    const {
      speed = 18,
      spread = 1,
      color = new THREE.Color("#ff9a4f"),
      life = 0.65,
      size = 0.55,
      gravity = 18,
      drag = 1.2,
      directional = null,
    } = opts;
    for (let i = 0; i < count; i++) {
      const c = color.clone();
      if (Math.random() < 0.35) c.lerp(new THREE.Color("#fff3cb"), 0.7);
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize();
      if (directional) vel.lerp(directional, 0.45).normalize();
      vel.multiplyScalar(speed * (0.3 + Math.random() * 0.85) * spread);
      this.sparks.add({
        pos: pos.clone(),
        vel,
        life: life * (0.5 + Math.random() * 0.8),
        maxLife: life,
        size: size * (0.5 + Math.random() * 0.85),
        color: c,
        alpha: 0.92,
        gravity,
        drag,
        grow: -0.15,
      });
    }
  }

  smokePuff(pos, count = 10, opts = {}) {
    const {
      speed = 4,
      life = 2.8,
      size = 1.9,
      color = new THREE.Color("#57616a"),
      alpha = 0.32,
      gravity = -0.6,
      rise = 0,
    } = opts;
    for (let i = 0; i < count; i++) {
      const c = color.clone().offsetHSL(0, 0, (Math.random() - 0.5) * 0.08);
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        rise + Math.random() * 1.6,
        (Math.random() - 0.5) * 2
      ).multiplyScalar(speed * (0.4 + Math.random() * 0.7));
      this.smoke.add({
        pos: pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 1.5, (Math.random() - 0.5) * 2)),
        vel,
        life: life * (0.65 + Math.random() * 0.65),
        maxLife: life,
        size: size * (0.65 + Math.random() * 0.9),
        color: c,
        alpha,
        gravity,
        drag: 0.7,
        grow: 1.9,
        fade: "out",
      });
    }
  }

  explosion(pos, scale = 1, color = 0xff7a3c) {
    const c = new THREE.Color(color);
    this.spark(pos, Math.round(30 + 28 * scale), {
      speed: 24 * scale,
      color: c,
      life: 0.85,
      size: 0.9 * scale,
      gravity: 17,
      drag: 1.5,
    });
    this.spark(pos, Math.round(10 + 10 * scale), {
      speed: 50 * scale,
      color: new THREE.Color("#ffe6ad"),
      life: 0.4,
      size: 0.42,
      gravity: 4,
      drag: 0.4,
    });
    this.smokePuff(pos, Math.round(12 + 8 * scale), {
      speed: 4.5 * scale,
      life: 2.6,
      size: 2.2 * scale,
      color: new THREE.Color("#3a4148"),
      alpha: 0.42,
      gravity: -0.3,
      rise: 1.0,
    });
    this.flashAt(pos, c, 20 * scale, 0.38);
    this.ringAt(pos, c, 16 * scale, 0.5);
  }

  hit(pos, color = 0xffb066, crit = false) {
    this.spark(pos, crit ? 16 : 9, {
      speed: crit ? 20 : 12,
      color: new THREE.Color(color),
      life: 0.42,
      size: 0.35,
      gravity: 10,
      drag: 1.3,
    });
    this.flashAt(pos, new THREE.Color(color), 3.8, 0.14);
  }

  buildingCollapse(pos, height = 30) {
    const center = pos.clone();
    center.y = Math.min(height * 0.45, 18);
    this.smokePuff(center, 30, {
      speed: 7,
      life: 4.2,
      size: 3.4,
      color: new THREE.Color("#4b4d4d"),
      alpha: 0.48,
      gravity: -0.7,
      rise: 2.2,
    });
    this.spark(center, 45, {
      speed: 20,
      color: new THREE.Color("#ff8f45"),
      life: 1.2,
      size: 0.8,
      gravity: 12,
      drag: 1.1,
    });
    this.debrisBurst(center, 32, 1.5);
    this.flashAt(center, new THREE.Color("#ff8b48"), 30, 0.6);
    this.ringAt(center, new THREE.Color("#ff7b3a"), 32, 0.9);
  }

  muzzle(pos, direction, color = 0xffd08a) {
    this.flashAt(pos, new THREE.Color(color), 2.4, 0.06);
    this.spark(pos, 3, {
      speed: 8,
      color: new THREE.Color(color),
      life: 0.12,
      size: 0.2,
      gravity: 0,
      drag: 0,
      directional: direction,
    });
  }

  tracer(from, to, color = 0xffd293) {
    const t = this.tracers[this._tracerCursor];
    this._tracerCursor = (this._tracerCursor + 1) % this.tracers.length;
    _v.subVectors(to, from);
    const len = _v.length();
    if (len < 0.01) return;
    _v.multiplyScalar(1 / len);
    t.mesh.position.copy(from).addScaledVector(_v, len / 2);
    t.mesh.quaternion.setFromUnitVectors(_up, _v);
    t.mesh.scale.set(0.045, 0.045, len);
    t.mesh.material.color.set(color);
    t.mesh.material.opacity = 0.95;
    t.mesh.visible = true;
    t.life = 0.14;
    t.maxLife = 0.14;
  }

  missileTrail(pos) {
    if (Math.random() < 0.75) {
      this.smokePuff(pos, 1, {
        speed: 1.2,
        life: 1.1,
        size: 0.45,
        color: new THREE.Color("#7f858a"),
        alpha: 0.26,
        gravity: -0.1,
        rise: 0.2,
      });
    }
    this.spark(pos, 1, {
      speed: 5,
      color: new THREE.Color("#ffc16d"),
      life: 0.22,
      size: 0.32,
      gravity: 0,
      drag: 2,
    });
  }

  flashAt(pos, color, size = 8, life = 0.2) {
    const f = this.flashes[this._flashCursor];
    this._flashCursor = (this._flashCursor + 1) % this.flashes.length;
    f.sprite.position.copy(pos);
    f.sprite.material.color.copy(color);
    f.sprite.material.opacity = 1;
    f.sprite.scale.setScalar(0.1);
    f.sprite.visible = true;
    f.life = life;
    f.maxLife = life;
    f.target = size;
  }

  ringAt(pos, color, size = 12, life = 0.4) {
    const r = this.rings[this._ringCursor];
    this._ringCursor = (this._ringCursor + 1) % this.rings.length;
    r.mesh.position.copy(pos);
    r.mesh.material.color.copy(color);
    r.mesh.material.opacity = 0.5;
    r.mesh.scale.setScalar(0.4);
    r.mesh.visible = true;
    r.mesh.quaternion.copy(this.camera.quaternion);
    r.life = life;
    r.maxLife = life;
    r.target = size;
  }

  debrisBurst(pos, count = 24, scale = 1) {
    for (let i = 0; i < count; i++) {
      const index = this.debrisCursor;
      this.debrisCursor = (this.debrisCursor + 1) % this.debris.length;
      let d = this.debris[index];
      if (!d) {
        d = {
          pos: new THREE.Vector3(),
          vel: new THREE.Vector3(),
          rot: new THREE.Euler(),
          spin: new THREE.Vector3(),
          scale: new THREE.Vector3(),
          life: 0,
          maxLife: 0,
        };
        this.debris[index] = d;
      }
      d.pos.copy(pos).add(
        new THREE.Vector3((Math.random() - 0.5) * 4, (Math.random() - 0.4) * 3, (Math.random() - 0.5) * 4)
      );
      d.vel.set(
        (Math.random() - 0.5) * 18,
        6 + Math.random() * 15,
        (Math.random() - 0.5) * 18
      );
      d.rot.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
      d.spin.set((Math.random() - 0.5) * 7, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 7);
      const s = (0.5 + Math.random() * 2.6) * scale;
      d.scale.set(s, s * (0.35 + Math.random() * 1.5), s);
      d.life = 2.3 + Math.random() * 2.2;
      d.maxLife = d.life;
      this.debrisMesh.setColorAt(index, new THREE.Color().setHSL(0.09, 0.03, 0.09 + Math.random() * 0.13));
    }
    if (this.debrisMesh.instanceColor) this.debrisMesh.instanceColor.needsUpdate = true;
    this._debrisActive = true;
  }

  update(dt, time) {
    this.sparks.update(dt, this.camera);
    this.smoke.update(dt, this.camera);

    for (const t of this.tracers) {
      if (t.life <= 0) continue;
      t.life -= dt;
      const f = Math.max(0, t.life / t.maxLife);
      t.mesh.material.opacity = f * 0.95;
      if (t.life <= 0) t.mesh.visible = false;
    }

    for (const f of this.flashes) {
      if (f.life <= 0) continue;
      f.life -= dt;
      const t = 1 - Math.max(0, f.life / f.maxLife);
      f.sprite.scale.setScalar(0.1 + f.target * Math.min(1, t * 1.8));
      f.sprite.material.opacity = Math.max(0, 1 - t) * (1 - t);
      if (f.life <= 0) f.sprite.visible = false;
    }

    for (const r of this.rings) {
      if (r.life <= 0) continue;
      r.life -= dt;
      const t = 1 - Math.max(0, r.life / r.maxLife);
      r.mesh.scale.setScalar(0.4 + r.target * Math.sqrt(t));
      r.mesh.material.opacity = Math.max(0, 1 - t) * 0.55;
      r.mesh.quaternion.copy(this.camera.quaternion);
      if (r.life <= 0) r.mesh.visible = false;
    }

    if (this._debrisActive) {
      let any = false;
      for (let i = 0; i < this.debris.length; i++) {
        const d = this.debris[i];
        if (!d || d.life <= 0) {
          if (d && d.life > -1) {
            this._hideDebris(i);
            d.life = -2;
          }
          continue;
        }
        any = true;
        d.life -= dt;
        d.vel.y -= 24 * dt;
        d.pos.addScaledVector(d.vel, dt);
        if (d.pos.y < 1.2) {
          d.pos.y = 1.2;
          d.vel.y *= -0.22;
          d.vel.x *= 0.72;
          d.vel.z *= 0.72;
          d.spin.multiplyScalar(0.7);
        }
        d.rot.x += d.spin.x * dt;
        d.rot.y += d.spin.y * dt;
        d.rot.z += d.spin.z * dt;
        _q.setFromEuler(d.rot);
        const fade = Math.min(1, d.life / 0.4);
        _s.copy(d.scale).multiplyScalar(fade);
        _m.compose(d.pos, _q, _s);
        this.debrisMesh.setMatrixAt(i, _m);
        if (d.life <= 0) {
          d.life = -2;
          this._hideDebris(i);
        }
      }
      this.debrisMesh.instanceMatrix.needsUpdate = true;
      if (!any) this._debrisActive = false;
    }
  }
}
