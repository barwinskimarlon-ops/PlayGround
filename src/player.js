import * as THREE from "three";
import { createCockpit } from "./cockpit.js";

const _forward = new THREE.Vector3();
const _right = new THREE.Vector3();
const _desired = new THREE.Vector3();
const _prev = new THREE.Vector3();
const _muzzle = new THREE.Vector3();
const _dir = new THREE.Vector3();

export const BASE_STATS = {
  speed: 46,
  damage: 22,
  fireInterval: 0.095,
  heatPerShot: 0.05,
  coolRate: 0.38,
  missileCap: 2,
  missileDamage: 470,
  missileTurn: 2.8,
  critChance: 0.04,
  maxHull: 100,
  repairPerKill: 0,
  regen: 0,
  spread: 0.0032,
};

export class PlayerController {
  constructor({ camera, canvas, world, effects, audio, isTouch }) {
    this.camera = camera;
    this.canvas = canvas;
    this.world = world;
    this.effects = effects;
    this.audio = audio;
    this.isTouch = isTouch;
    this.showCockpit = !isTouch;
    this.cockpit = createCockpit(camera, camera.parent || camera);

    // Forward floodlight makes the night battlefield readable and sells the
    // attack-helicopter fantasy. No shadows: it must stay cheap.
    this.searchlight = new THREE.SpotLight(0xcfe0ff, 130, 230, 0.24, 0.8, 1.0);
    this.searchlight.position.set(0, -0.12, 0.1);
    this.searchlight.target.position.set(0, -2.6, -24);
    this.searchlight.castShadow = false;
    camera.add(this.searchlight);
    camera.add(this.searchlight.target);

    this.pos = new THREE.Vector3(5, 46, 200);
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = -0.04;
    this.roll = 0;
    this.shake = 0;
    this.recoil = 0;
    this.yawKick = 0;
    this.bobT = 0;
    this.altitudeInput = 0;
    this.keys = new Set();
    this.enabled = false;
    this.firing = false;
    this.locked = false;
    this.target = null;
    this.callbacks = {};
    this.lastCollision = 0;
    this.boundaryWarn = 0;
    this.overheatWarned = false;
    this.muzzleSide = 1;
    this.touchDrag = null;
    this.touchMove = { x: 0, y: 0 };
    this.touchAlt = 0;
    this.stats = { ...BASE_STATS };
    this.maxHull = this.stats.maxHull;
    this.hull = this.maxHull;
    this.heat = 0;
    this.overheat = false;
    this.fireTimer = 0;
    this.missiles = this.stats.missileCap;
    this.missileTimer = 0;
    this.missileLaunchCd = 0;
    this.shots = 0;
    this.hits = 0;
    this.scanActive = false;
    this.lastDamageAt = -100;
    this.statsDirty = true;

    this._bindInput();
  }

  setCallbacks(callbacks) {
    this.callbacks = callbacks;
  }

  resetRun() {
    this.stats = { ...BASE_STATS };
    this.maxHull = this.stats.maxHull;
    this.hull = this.maxHull;
    this.heat = 0;
    this.overheat = false;
    this.fireTimer = 0;
    this.missiles = this.stats.missileCap;
    this.missileTimer = 0;
    this.missileLaunchCd = 0;
    this.shots = 0;
    this.hits = 0;
    this.pos.set(5, 46, 200);
    this.vel.set(0, 0, 0);
    this.yaw = 0;
    this.pitch = -0.04;
    this.roll = 0;
    this.shake = 0;
    this.recoil = 0;
    this.lastDamageAt = -100;
    this.enabled = false;
    this.firing = false;
    this.target = null;
    this.statsDirty = true;
  }

  applyStats() {
    this.maxHull = this.stats.maxHull;
    this.hull = Math.min(this.hull, this.maxHull);
    this.missiles = Math.min(this.missiles, this.stats.missileCap);
    this.statsDirty = false;
  }

  start() {
    this.enabled = true;
    if (this.showCockpit) this.cockpit.show();
    else this.cockpit.hide();
    this.firing = false;
  }

  stop() {
    this.enabled = false;
    this.firing = false;
    this.keys.clear();
    this.touchMove.x = this.touchMove.y = 0;
    this.touchAlt = 0;
    this.resetJoystick();
  }

  requestPointerLock() {
    if (this.isTouch) return;
    try {
      const p = this.canvas.requestPointerLock?.();
      if (p?.catch) p.catch(() => {});
    } catch {
      /* pointer lock is optional */
    }
  }

  _bindInput() {
    const canvas = this.canvas;

    window.addEventListener("keydown", (e) => {
      if (!this.enabled) return;
      const code = e.code;
      if (["KeyW", "KeyA", "KeyS", "KeyD", "KeyR", "KeyF", "ShiftLeft", "ShiftRight", "Space"].includes(code)) {
        e.preventDefault();
      }
      this.keys.add(code);
    });
    window.addEventListener("keyup", (e) => {
      this.keys.delete(e.code);
    });

    canvas.addEventListener("mousedown", (e) => {
      if (!this.enabled) return;
      if (e.button === 0) {
        this.firing = true;
        if (!this.isTouch && document.pointerLockElement !== canvas) this.requestPointerLock();
      } else if (e.button === 2) {
        this.launchMissile();
      }
    });

    window.addEventListener("mouseup", (e) => {
      if (e.button === 0) this.firing = false;
    });
    window.addEventListener("blur", () => {
      this.firing = false;
      this.keys.clear();
      this.touchMove.x = this.touchMove.y = 0;
      this.touchAlt = 0;
      this.resetJoystick();
    });

    window.addEventListener("contextmenu", (e) => {
      if (this.enabled) e.preventDefault();
    });

    window.addEventListener("mousemove", (e) => {
      if (!this.enabled) return;
      const locked = document.pointerLockElement === canvas;
      if (!locked && e.buttons !== 1 && e.buttons !== 2) return;
      const mx = e.movementX || 0;
      const my = e.movementY || 0;
      this.yaw -= mx * 0.00215;
      this.pitch -= my * 0.00215;
      this.pitch = THREE.MathUtils.clamp(this.pitch, -1.25, 1.25);
      this.yawKick = THREE.MathUtils.clamp(this.yawKick - mx * 0.00005, -0.015, 0.015);
    });

    document.addEventListener("pointerlockchange", () => {
      this.locked = document.pointerLockElement === canvas;
      if (this.callbacks.onPointerLockChange) this.callbacks.onPointerLockChange(this.locked);
    });

    // touch look
    canvas.addEventListener(
      "pointerdown",
      (e) => {
        if (e.pointerType !== "touch" || !this.enabled) return;
        this.touchDrag = { id: e.pointerId, x: e.clientX, y: e.clientY };
        canvas.setPointerCapture?.(e.pointerId);
        const hint = document.getElementById("look-hint");
        if (hint) hint.classList.remove("show");
      },
      { passive: true }
    );
    canvas.addEventListener(
      "pointermove",
      (e) => {
        if (!this.touchDrag || e.pointerId !== this.touchDrag.id || !this.enabled) return;
        const dx = e.clientX - this.touchDrag.x;
        const dy = e.clientY - this.touchDrag.y;
        this.touchDrag.x = e.clientX;
        this.touchDrag.y = e.clientY;
        this.yaw -= dx * 0.0041;
        this.pitch -= dy * 0.0041;
        this.pitch = THREE.MathUtils.clamp(this.pitch, -1.25, 1.25);
      },
      { passive: true }
    );
    const endTouch = (e) => {
      if (this.touchDrag && e.pointerId === this.touchDrag.id) this.touchDrag = null;
    };
    canvas.addEventListener("pointerup", endTouch);
    canvas.addEventListener("pointercancel", endTouch);

    this._bindTouchControls();
  }

  _bindTouchControls() {
    const zone = document.getElementById("joystick-zone");
    const knob = document.getElementById("joystick-knob");
    const fire = document.getElementById("touch-fire");
    const missile = document.getElementById("touch-missile");
    const up = document.getElementById("touch-up");
    const down = document.getElementById("touch-down");

    if (zone) {
      let joystickId = null;
      let centerX = 0;
      let centerY = 0;
      let radius = 42;

      const updateStick = (e) => {
        let dx = e.clientX - centerX;
        let dy = e.clientY - centerY;
        const len = Math.hypot(dx, dy);
        if (len > radius) {
          dx = (dx / len) * radius;
          dy = (dy / len) * radius;
        }
        this.touchMove.x = dx / radius;
        this.touchMove.y = -dy / radius;
        if (knob) knob.style.transform = `translate(${dx}px, ${dy}px)`;
      };

      zone.addEventListener("pointerdown", (e) => {
        if (!this.enabled) return;
        e.preventDefault();
        const rect = zone.querySelector(".joystick-ring").getBoundingClientRect();
        centerX = rect.left + rect.width / 2;
        centerY = rect.top + rect.height / 2;
        radius = rect.width * 0.36;
        joystickId = e.pointerId;
        zone.setPointerCapture?.(e.pointerId);
        updateStick(e);
        const hint = document.getElementById("look-hint");
        if (hint) hint.classList.remove("show");
      });
      zone.addEventListener("pointermove", (e) => {
        if (e.pointerId !== joystickId) return;
        e.preventDefault();
        updateStick(e);
      });
      const end = (e) => {
        if (e.pointerId !== joystickId) return;
        joystickId = null;
        this.touchMove.x = this.touchMove.y = 0;
        this.resetJoystick();
      };
      zone.addEventListener("pointerup", end);
      zone.addEventListener("pointercancel", end);
    }

    if (fire) {
      fire.addEventListener("pointerdown", (e) => {
        if (!this.enabled) return;
        e.preventDefault();
        fire.setPointerCapture?.(e.pointerId);
        this.firing = true;
        fire.classList.add("pressed");
      });
      const release = () => {
        this.firing = false;
        fire.classList.remove("pressed");
      };
      fire.addEventListener("pointerup", release);
      fire.addEventListener("pointercancel", release);
      fire.addEventListener("pointerleave", (e) => {
        if (e.buttons === 0) release();
      });
    }

    if (missile) {
      missile.addEventListener("pointerdown", (e) => {
        if (!this.enabled) return;
        e.preventDefault();
        this.launchMissile();
      });
    }

    for (const [el, value] of [
      [up, 1],
      [down, -1],
    ]) {
      if (!el) continue;
      el.addEventListener("pointerdown", (e) => {
        if (!this.enabled) return;
        e.preventDefault();
        this.touchAlt = value;
        el.setPointerCapture?.(e.pointerId);
        el.classList.add("pressed");
      });
      const release = () => {
        if (this.touchAlt === value) this.touchAlt = 0;
        el.classList.remove("pressed");
      };
      el.addEventListener("pointerup", release);
      el.addEventListener("pointercancel", release);
      el.addEventListener("pointerleave", release);
    }
  }

  resetJoystick() {
    const knob = document.getElementById("joystick-knob");
    if (knob) knob.style.transform = "translate(0px, 0px)";
  }

  addShake(amount) {
    this.shake = Math.min(0.065, this.shake + amount);
  }

  damage(amount, source = "hit") {
    if (this.hull <= 0) return;
    this.hull = Math.max(0, this.hull - amount);
    this.addShake(0.018);
    if (this.callbacks.onDamage) this.callbacks.onDamage(amount, this.hull, source);
    if (this.hull <= 0 && this.callbacks.onDeath) this.callbacks.onDeath();
  }

  heal(amount) {
    if (amount <= 0) return 0;
    const before = this.hull;
    this.hull = Math.min(this.maxHull, this.hull + amount);
    return this.hull - before;
  }

  update(dt, time) {
    if (!this.enabled) {
      this.audio.updateEngine(0, false, false);
      return;
    }

    this.bobT += dt;
    this.fireTimer -= dt;
    this.missileLaunchCd -= dt;

    const boost = this.keys.has("ShiftLeft") || this.keys.has("ShiftRight");
    let thrust = 0;
    let strafe = 0;
    if (this.keys.has("KeyW")) thrust += 1;
    if (this.keys.has("KeyS")) thrust -= 0.65;
    if (this.keys.has("KeyA")) strafe -= 1;
    if (this.keys.has("KeyD")) strafe += 1;
    if (this.isTouch) {
      thrust += this.touchMove.y;
      strafe += this.touchMove.x;
    }
    thrust = THREE.MathUtils.clamp(thrust, -1, 1);
    strafe = THREE.MathUtils.clamp(strafe, -1, 1);
    this.altitudeInput = 0;
    if (this.keys.has("KeyR") || this.keys.has("Space")) this.altitudeInput += 1;
    if (this.keys.has("KeyF")) this.altitudeInput -= 1;
    if (this.isTouch) this.altitudeInput += this.touchAlt;
    this.altitudeInput = THREE.MathUtils.clamp(this.altitudeInput, -1, 1);

    const speed = this.stats.speed * (boost ? 1.58 : 1);

    const cp = Math.cos(this.pitch * 0.58);
    _forward.set(
      -Math.sin(this.yaw) * cp,
      Math.sin(this.pitch * 0.58) * 0.85,
      -Math.cos(this.yaw) * cp
    );
    _right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    _desired.set(0, 0, 0);
    _desired.addScaledVector(_forward, thrust * speed);
    _desired.addScaledVector(_right, strafe * speed * 0.74);
    _desired.y += this.altitudeInput * speed * 0.64;

    const accel = thrust !== 0 || strafe !== 0 || this.altitudeInput !== 0 ? (boost ? 2.7 : 3.6) : 2.1;
    this.vel.lerp(_desired, 1 - Math.exp(-dt * accel));
    if (Math.abs(thrust) < 0.01 && Math.abs(strafe) < 0.01 && Math.abs(this.altitudeInput) < 0.01) {
      this.vel.multiplyScalar(Math.exp(-dt * 0.72));
    }

    _prev.copy(this.pos);
    this.pos.addScaledVector(this.vel, dt);

    const bX = 246;
    const bZ = 246;
    const beforeX = this.pos.x;
    const beforeZ = this.pos.z;
    this.pos.x = THREE.MathUtils.clamp(this.pos.x, -bX, bX);
    this.pos.z = THREE.MathUtils.clamp(this.pos.z, -bZ, bZ);
    this.pos.y = THREE.MathUtils.clamp(this.pos.y, 6.5, 105);
    const atBoundary = beforeX !== this.pos.x || beforeZ !== this.pos.z || this.pos.y === 105 || this.pos.y === 6.5;
    this.boundaryWarn = atBoundary ? 0.45 : Math.max(0, this.boundaryWarn - dt);

    const building = this.world.getBuildingAt(this.pos.x, this.pos.z, 1.35);
    if (building && this.pos.y < 1.28 + building.height + 1.6) {
      this.pos.copy(_prev);
      this.vel.multiplyScalar(-0.12);
      if (time - this.lastCollision > 0.9) {
        this.lastCollision = time;
        this.damage(8, "collision");
        this.addShake(0.035);
      }
    }

    const targetRoll = -strafe * 0.12 - this.yawKick * 2.2;
    this.roll += (targetRoll - this.roll) * Math.min(1, dt * 4.6);
    this.yawKick *= Math.exp(-dt * 3.8);
    this.shake *= Math.exp(-dt * 5.4);
    this.recoil *= Math.exp(-dt * 11);

    this.heat = Math.max(0, this.heat - this.stats.coolRate * dt);
    if (this.overheat && this.heat <= 0.24) {
      this.overheat = false;
      this.overheatWarned = false;
      if (this.callbacks.onHeatReady) this.callbacks.onHeatReady();
    }

    if (this.missiles < this.stats.missileCap) {
      if (this.missileTimer <= 0) this.missileTimer = 5.1;
      this.missileTimer -= dt;
      if (this.missileTimer <= 0) {
        this.missiles++;
        if (this.missiles < this.stats.missileCap) this.missileTimer = 5.1;
        else this.missileTimer = 0;
        if (this.callbacks.onMissileReload) this.callbacks.onMissileReload(this.missiles);
      }
    } else {
      this.missileTimer = 0;
    }

    this._updateCamera(dt, time);
    if (this.showCockpit) this._updateCockpit(dt);

    if (time - this.lastDamageAt > 7.5) {
      if (this.stats.regen > 0) this.heal(this.stats.regen * dt);
    }

    if (this.firing) this._tryFire(time);

    this.audio.updateEngine(this.vel.length(), boost, true);
  }

  _updateCamera(dt, time) {
    const shakeX = this.shake * (Math.sin(time * 61.3) * 0.6 + Math.sin(time * 37.7) * 0.4);
    const shakeY = this.shake * (Math.sin(time * 53.1) * 0.55 + Math.sin(time * 29.2) * 0.45);
    const shakeZ = this.shake * Math.sin(time * 43.5) * 0.9;
    const hover = Math.sin(this.bobT * 1.25) * 0.06;

    this.camera.position.set(
      this.pos.x + shakeX * 0.16,
      this.pos.y + hover + shakeY * 0.16,
      this.pos.z
    );
    this.camera.rotation.set(
      this.pitch + this.recoil + shakeY * 0.45,
      this.yaw + shakeX * 0.45,
      this.roll + shakeZ,
      "YXZ"
    );
    this.camera.updateMatrixWorld(true);
  }

  _updateCockpit(dt) {
    this.cockpit.update(dt, {
      speed: this.vel.length() * 1.95,
      altitude: this.pos.y,
      heat: this.heat,
      overheat: this.overheat,
      missiles: this.missiles,
      target: this.target,
      hull: (this.hull / this.maxHull) * 100,
    });
  }

  _tryFire(time) {
    if (this.overheat || this.fireTimer > 0 || !this.enabled) return;
    this.fireTimer = this.stats.fireInterval;
    this.heat = Math.min(1, this.heat + this.stats.heatPerShot);
    if (this.heat >= 1) {
      this.heat = 1;
      this.overheat = true;
      this.audio.overheat();
      if (this.callbacks.onOverheat) this.callbacks.onOverheat();
    }

    this.muzzleSide *= -1;
    _muzzle.set(this.muzzleSide * 0.27, -0.4, -1.1);
    this.camera.localToWorld(_muzzle);
    this.camera.getWorldDirection(_dir);
    const spread = this.stats.spread + this.heat * 0.0035 + this.vel.length() * 0.00002;
    _dir.x += (Math.random() - 0.5) * spread * 2;
    _dir.y += (Math.random() - 0.5) * spread * 2;
    _dir.z += (Math.random() - 0.5) * spread * 2;
    _dir.normalize();

    this.shots++;
    this.recoil += 0.0018 + Math.random() * 0.0012;
    this.addShake(0.0018);
    this.effects.muzzle(_muzzle, _dir);
    this.audio.gun();
    if (this.callbacks.onShot) this.callbacks.onShot(_muzzle.clone(), _dir.clone(), this.stats);
  }

  launchMissile() {
    if (!this.enabled) return false;
    if (this.missileLaunchCd > 0) return false;
    if (this.missiles <= 0) {
      if (this.callbacks.onNoMissiles) this.callbacks.onNoMissiles();
      return false;
    }
    this.missiles--;
    this.shots++;
    this.missileLaunchCd = 0.38;
    if (this.missiles < this.stats.missileCap && this.missileTimer <= 0) this.missileTimer = 5.1;
    this.addShake(0.014);
    this.audio.missile();
    _muzzle.set(0.34, -0.31, -0.95);
    this.camera.localToWorld(_muzzle);
    this.camera.getWorldDirection(_dir);
    if (this.callbacks.onMissile) {
      this.callbacks.onMissile(
        _muzzle.clone(),
        _dir.clone(),
        this.target,
        this.stats.missileDamage,
        this.stats.missileTurn
      );
    }
    return true;
  }

  registerHit() {
    this.hits++;
  }

  addUpgradeStats(mutator) {
    mutator(this.stats, this);
    this.applyStats();
  }

  get isMoving() {
    return this.vel.lengthSq() > 4;
  }
}
