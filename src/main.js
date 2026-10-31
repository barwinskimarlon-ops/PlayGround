import * as THREE from "three";
import "./styles.css";
import { CityWorld } from "./world.js";
import { Kaiju, Flyer } from "./entities.js";
import { Effects } from "./effects.js";
import { SoundEngine } from "./audio.js";
import { PlayerController } from "./player.js";
import { GameUI } from "./ui.js";
import { getUpgradeChoices } from "./upgrades.js";
import { Missile, EnemyOrb } from "./projectiles.js";

const isTouch = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

class Game {
  constructor() {
    this.canvas = document.getElementById("game-canvas");
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isTouch ? 1.35 : 1.6));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.26;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.09, 1400);
    this.camera.rotation.order = "YXZ";
    this.camera.position.set(16, 40, 112);
    this.camera.lookAt(-12, 18, 7);
    this.scene.add(this.camera);

    this.audio = new SoundEngine();
    this.effects = new Effects(this.scene, this.camera);
    this.world = new CityWorld(this.scene, { lowPower: isTouch });
    for (const b of this.world.buildings) b.mesh.userData.building = b;

    this.player = new PlayerController({
      camera: this.camera,
      canvas: this.canvas,
      world: this.world,
      effects: this.effects,
      audio: this.audio,
      isTouch,
    });
    this.ui = new GameUI();

    this.entities = [];
    this.missiles = [];
    this.orbs = [];
    this.target = null;
    this.state = "menu";
    this.time = 0;
    this.lastFrame = performance.now();
    this.clock = new THREE.Clock();
    this.pauseState = "playing";
    this.menuMouse = { x: 0, y: 0 };
    this.menuTargetMouse = { x: 0, y: 0 };
    this.menuFxTimer = 0;
    this.incomingWarned = false;
    this.menuKaiju = null;
    this.initialized = false;
    this.autoStart = sessionStorage.getItem("rotor-auto-deploy") === "1";
    try {
      sessionStorage.removeItem("rotor-auto-deploy");
    } catch {
      /* ignore */
    }

    this.game = {
      state: "menu",
      wave: 0,
      waveElapsed: 0,
      clearTimer: 0,
      score: 0,
      kills: 0,
      cityIntegrity: 100,
      combo: 1,
      comboTimer: 0,
      upgrades: [],
      entities: this.entities,
      world: this.world,
    };

    this._bindCallbacks();
    this._bindUI();
    this._bindGlobalEvents();
    this._resize();
    this._createMenuActors();
    this._prewarmFires();
    this.ui.showMenu();
    this.camera.fov = 58;
    this.camera.updateProjectionMatrix();

    this._loop = this._loop.bind(this);
    requestAnimationFrame((t) => {
      this.lastFrame = t;
      requestAnimationFrame(this._loop);
    });

    setTimeout(() => {
      document.body.classList.remove("is-loading");
    }, 120);

    this._clockTimer = setInterval(() => this.ui.updateClock(), 1000);
    this.ui.updateClock();
    this.ui.updateMute(this.audio.muted);

    if (this.autoStart) {
      setTimeout(() => this.startMission(true), 750);
    }
  }

  _bindCallbacks() {
    this.player.setCallbacks({
      onShot: (origin, dir, stats) => this._handleShot(origin, dir, stats),
      onMissile: (origin, dir, target, damage, turn) => this._spawnMissile(origin, dir, target, damage, turn),
      onOverheat: () => {
        this.ui.showWarning("VULCAN OVERHEAT", 1700);
        this.ui.feed("<b>WARNING</b> BARREL OVERHEAT", "danger");
      },
      onHeatReady: () => this.ui.feed("VULCAN <b>READY</b>", "ok"),
      onMissileReload: (count) => {
        if (count === this.player.stats.missileCap) this.ui.feed("HELLFIRE <b>RELOADED</b>", "ok");
      },
      onNoMissiles: () => this.ui.showWarning("MISSILE RACK EMPTY", 1300),
      onDamage: (amount, hull) => {
        this.ui.damageFlash(amount > 16);
        this.audio.playerHit();
        this.player.addShake(0.018);
        this.player.lastDamageAt = this.time;
        if (hull > 0 && hull / this.player.maxHull < 0.25 && !this._hullWarningShown) {
          this._hullWarningShown = true;
          this.ui.showWarning("HULL CRITICAL", 2500);
          this.audio.alarm();
        }
      },
      onDeath: () => this.gameOver("airframe"),
      onPointerLockChange: (locked) => {
        if (!locked && this.state === "playing" && this.time > 2.2) this.pauseGame();
      },
    });

    this.player.cockpit.hide();
  }

  _bindUI() {
    document.getElementById("start-btn").addEventListener("click", () => {
      this.audio.uiClick();
      this.player.requestPointerLock();
      this.startMission();
    });
    document.getElementById("briefing-btn").addEventListener("click", () => {
      this.audio.uiClick();
      this.ui.showBriefing();
    });
    document.getElementById("brief-close").addEventListener("click", () => {
      this.audio.uiClick();
      this.ui.hideBriefing();
    });
    this.ui.briefing.addEventListener("click", (e) => {
      if (e.target === this.ui.briefing) this.ui.hideBriefing();
    });

    document.getElementById("mute-btn").addEventListener("click", () => {
      this.audio.init();
      const muted = this.audio.toggleMute();
      this.ui.updateMute(muted);
    });

    document.getElementById("deploy-next-btn").addEventListener("click", () => {
      if (this.state !== "upgrade") return;
      this.audio.uiClick();
      this.audio.init();
      this.ui.hideUpgrade();
      this.state = "playing";
      this.game.state = "playing";
      this.player.start();
      this.player.requestPointerLock();
      this.spawnWave(this.game.wave + 1);
    });

    document.getElementById("resume-btn").addEventListener("click", () => this.resumeGame());
    document.getElementById("quit-btn").addEventListener("click", () => {
      this.audio.uiClick();
      this._reloadToMenu();
    });
    document.getElementById("retry-btn").addEventListener("click", () => {
      this.audio.uiClick();
      try {
        sessionStorage.setItem("rotor-auto-deploy", "1");
      } catch {
        /* ignore */
      }
      this.ui.setTransition(true);
      this.state = "transition";
      setTimeout(() => window.location.reload(), 420);
    });
    document.getElementById("menu-btn").addEventListener("click", () => {
      this.audio.uiClick();
      this._reloadToMenu();
    });

    window.addEventListener(
      "pointerdown",
      () => {
        if (this.audio.ctx && this.audio.ctx.state === "suspended") this.audio.ctx.resume();
      },
      { passive: true }
    );
  }

  _bindGlobalEvents() {
    window.addEventListener("resize", () => this._resize());

    window.addEventListener("keydown", (e) => {
      if (e.code === "KeyM" && !e.repeat) {
        this.audio.init();
        this.ui.updateMute(this.audio.toggleMute());
      }
      if (e.code === "Escape") {
        if (this.state === "playing" || this.state === "clearing") {
          e.preventDefault();
          this.pauseGame();
        } else if (this.state === "paused") {
          e.preventDefault();
          this.resumeGame();
        } else if (this.ui.briefing.classList.contains("hidden") === false) {
          this.ui.hideBriefing();
        }
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden && (this.state === "playing" || this.state === "clearing")) {
        this.pauseGame();
      }
    });

    window.addEventListener("pointermove", (e) => {
      if (this.state !== "menu") return;
      this.menuTargetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.menuTargetMouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    });

    this.canvas.addEventListener("click", () => {
      if (this.state === "playing" && !isTouch && document.pointerLockElement !== this.canvas) {
        this.player.requestPointerLock();
      }
    });
  }

  _resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isTouch ? 1.35 : 1.6));
    this.effects.setScale(h);
  }

  _createMenuActors() {
    this._removeMenuActors();
    this.menuKaiju = new Kaiju(this.scene, null, "behemoth", new THREE.Vector3(16, 0, 38), 1);
    this.menuKaiju.root.rotation.y = 0;
    this.menuKaiju.attackCooldown = 9999;
    this.menuKaiju.speed = 0;
    this.menuDummyPlayer = new THREE.Vector3(20, 28, 15);
    this.menuFxTimer = 0.2;
  }

  _removeMenuActors() {
    if (this.menuKaiju) {
      this.scene.remove(this.menuKaiju.root);
      this.menuKaiju = null;
    }
  }

  _prewarmFires() {
    this.fireTimer = 0;
    if (!this.world.fires?.length) return;
    for (const f of this.world.fires) {
      this.effects.smokePuff(new THREE.Vector3(f.x, f.y + 2, f.z), 7, {
        speed: 2.4,
        life: 6.5,
        size: 3.1,
        color: new THREE.Color("#3c3531"),
        alpha: 0.26,
        gravity: -0.55,
        rise: 2.1,
      });
      this.effects.spark(new THREE.Vector3(f.x, f.y + 1, f.z), 5, {
        speed: 7,
        color: new THREE.Color("#ff9d4f"),
        life: 1.4,
        size: 0.4,
        gravity: 1.2,
        drag: 0.8,
      });
    }
  }

  _updateAmbientFires(dt) {
    const fires = this.world.fires;
    if (!fires || !fires.length) return;
    this.fireTimer -= dt;
    if (this.fireTimer > 0) return;
    this.fireTimer = 0.2 + Math.random() * 0.14;
    const f = fires[Math.floor(Math.random() * fires.length)];
    const p = new THREE.Vector3(f.x + (Math.random() - 0.5) * 4, f.y + 2 + Math.random() * 2, f.z + (Math.random() - 0.5) * 4);
    this.effects.smokePuff(p, 1, {
      speed: 1.3,
      life: 5.6,
      size: 2.8 + Math.random() * 1.5,
      color: new THREE.Color("#38322f"),
      alpha: 0.25,
      gravity: -0.7,
      rise: 2.4,
    });
    if (Math.random() < 0.34) {
      this.effects.spark(p, 1 + Math.floor(Math.random() * 2), {
        speed: 6,
        color: new THREE.Color("#ff9a4c"),
        life: 1.2,
        size: 0.36,
        gravity: 1.4,
        drag: 0.7,
      });
    }
  }

  startMission(auto = false) {
    if (this.state !== "menu") return;
    this.audio.init();
    if (!auto && !isTouch) this.player.requestPointerLock();
    this.ui.hideBriefing();
    this.state = "transition";
    this.game.state = "transition";
    this.ui.setTransition(true);

    setTimeout(() => {
      this.ui.hideMenu();
      this.ui.showHud();
      this._removeMenuActors();
      this.camera.fov = 70;
      this.camera.updateProjectionMatrix();
      this.resetRun();
      this.player.start();
      this.state = "playing";
      this.game.state = "playing";
      this.spawnWave(1);
      this.ui.setTransition(false);
      if (isTouch) {
        const hint = document.getElementById("look-hint");
        if (hint) {
          hint.classList.add("show");
          setTimeout(() => hint.classList.remove("show"), 5200);
        }
      }
    }, 460);
  }

  resetRun() {
    for (const e of this.entities) this.scene.remove(e.root);
    this.entities.length = 0;
    for (const m of this.missiles) m.dispose();
    this.missiles.length = 0;
    for (const o of this.orbs) o.dispose();
    this.orbs.length = 0;
    this.target = null;
    this.player.resetRun();
    this.player.target = null;
    this.player.cockpit.hide();
    this.game.wave = 0;
    this.game.score = 0;
    this.game.kills = 0;
    this.game.cityIntegrity = 100;
    this.game.waveElapsed = 0;
    this.game.clearTimer = 0;
    this.game.combo = 1;
    this.game.comboTimer = 0;
    this.game.upgrades = [];
    this.game.entities = this.entities;
    this.game.world = this.world;
    this.game.state = "playing";
    this._hullWarningShown = false;
    this.ui.resetHud();
    this.ui.updatePerks([]);
    this.ui.updateMute(this.audio.muted);
  }

  spawnWave(wave) {
    // clear the dead and any stragglers
    for (const e of this.entities) this.scene.remove(e.root);
    this.entities.length = 0;
    for (const m of this.missiles) m.dispose();
    this.missiles.length = 0;
    for (const o of this.orbs) o.dispose();
    this.orbs.length = 0;
    this.target = null;
    this.player.target = null;

    this.game.wave = wave;
    this.game.waveElapsed = 0;
    this.game.clearTimer = 0;
    this.game.combo = 1;
    this.game.comboTimer = 0;
    this.game.state = "playing";
    this.state = "playing";
    this._hullWarningShown = false;

    if (wave > 1) {
      this.game.cityIntegrity = Math.min(100, this.game.cityIntegrity + 3);
      this.player.heal(9);
    }

    const kaijuCount = Math.min(4, 1 + Math.floor((wave - 1) / 2) + (wave >= 6 ? 1 : 0));
    const flyerCount = Math.min(5, wave === 1 ? 1 : 1 + Math.floor(wave / 2));
    const spawns = [
      new THREE.Vector3(0, 0, 82),
      new THREE.Vector3(-48, 0, 0),
      new THREE.Vector3(52, 0, -90),
      new THREE.Vector3(0, 0, -164),
    ];

    for (let i = 0; i < kaijuCount; i++) {
      let type = i % 2 === 0 ? "behemoth" : "ravager";
      if (wave % 4 === 0 && i === 0) type = "colossus";
      const pos = spawns[i].clone();
      pos.z += (wave % 3) * 4;
      const kaiju = new Kaiju(this.scene, this.world, type, pos, wave);
      kaiju.speed = kaiju.cfg.speed * (1 + Math.min(0.35, wave * 0.022));
      kaiju.onBuildingHit = (building, destroyed, hitPos) => this._handleBuildingHit(building, destroyed, hitPos);
      this.entities.push(kaiju);
    }

    const flyerTypes = ["ashwing", "nightwing"];
    for (let i = 0; i < flyerCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 90 + Math.random() * 65;
      const pos = new THREE.Vector3(
        this.player.pos.x + Math.cos(angle) * radius,
        48 + Math.random() * 30,
        this.player.pos.z + Math.sin(angle) * radius
      );
      const type = flyerTypes[wave >= 3 ? i % 2 : 0];
      const flyer = new Flyer(this.scene, type, pos, wave);
      flyer.orbitRadius = 38 + Math.random() * 38;
      flyer.fireCallback = (source, mouth, targetPos, color) =>
        this._spawnEnemyOrb(source, mouth, targetPos, color);
      this.entities.push(flyer);
    }

    const total = this.entities.length;
    const bossWave = wave % 4 === 0;
    this.ui.showBanner(
      `WAVE ${String(wave).padStart(2, "0")}`,
      bossWave ? "OMEGA BREACH" : "BREACH DETECTED",
      `${String(total).padStart(2, "0")} HOSTILES // SECTOR 07`,
      3200
    );
    this.ui.feed(`<b>WAVE ${String(wave).padStart(2, "0")}</b> CONTACT IN SECTOR 07`);
    this.ui.showWarning(bossWave ? "CLASS VI KAIJU DETECTED" : "KAIJU SIGNATURES DETECTED", 2500);
    this.audio.roar(bossWave);
    this.audio.updateEngine(0, false, true);
    this.ui.updatePerks(this.game.upgrades);
  }

  _handleShot(origin, dir, stats) {
    if (this.state !== "playing") return;
    const raycaster = new THREE.Raycaster(origin, dir, 0.5, 700);
    const objects = [];
    for (const e of this.entities) {
      if (!e.dead) for (const m of e.hitMeshes) objects.push(m);
    }
    for (const b of this.world.buildings) {
      if (!b.destroyed) objects.push(b.mesh);
    }

    const hits = raycaster.intersectObjects(objects, true);
    let end = origin.clone().addScaledVector(dir, 420);
    for (const hit of hits) {
      const entity = hit.object.userData.entity;
      if (entity) {
        if (entity.dead) continue;
        const part = hit.object.userData.part || "body";
        const crit = part === "head" || Math.random() < stats.critChance;
        const damage = stats.damage * (crit ? 2.15 : 1) * (0.9 + Math.random() * 0.2);
        const result = entity.takeDamage(damage, crit);
        this.player.registerHit();
        this.ui.hitMarker(crit);
        this.audio.hit(crit);
        this.effects.hit(hit.point, entity.cfg.accent, crit);
        this.game.score += Math.round(damage * 0.13 * this.game.combo);
        this.game.combo = Math.min(9, this.game.combo + 1);
        this.game.comboTimer = 2.6;
        end = hit.point.clone();
        if (result?.killed) this._handleKill(entity);
        this.effects.tracer(origin, end);
        return;
      }
      const building = hit.object.userData.building;
      if (building) {
        this.effects.spark(hit.point, 5, {
          speed: 7,
          color: new THREE.Color(0xcbd2d6),
          life: 0.3,
          size: 0.18,
          gravity: 9,
          drag: 1.4,
        });
        this.effects.tracer(origin, hit.point);
        return;
      }
    }
    this.effects.tracer(origin, end);
  }

  _handleKill(entity) {
    if (entity._killedHandled) return;
    entity._killedHandled = true;
    entity.dead = true;
    this.game.kills++;
    const isKaiju = entity.isKaiju;
    const base = isKaiju ? 900 + this.game.wave * 130 : 260 + this.game.wave * 30;
    const bonus = Math.round(base * Math.max(1, this.game.combo * 0.75));
    this.game.score += bonus;
    const pos = entity.center.clone();
    const color = entity.cfg.accent;
    const name = entity.cfg.name;

    if (isKaiju) {
      this.effects.explosion(pos, entity.type === "colossus" ? 3.2 : 2.1, color);
      this.effects.buildingCollapse(pos.clone().setY(8), entity.type === "colossus" ? 45 : 30);
      this.audio.explosion(entity.type === "colossus" ? 1.8 : 1.15);
      this.player.addShake(entity.type === "colossus" ? 0.065 : 0.032);
      this.world.flash(pos, 18);
      this.ui.showWarning(`${name} DOWN`, 1900);
      const extra = entity.type === "colossus" ? 3 : 1;
      for (let i = 0; i < extra; i++) {
        setTimeout(() => {
          if (!entity.root.parent) return;
          const p = entity.center.clone();
          p.x += (Math.random() - 0.5) * 8;
          p.z += (Math.random() - 0.5) * 8;
          p.y = 6 + Math.random() * 13;
          this.effects.explosion(p, 1.5, color);
          this.audio.explosion(1.0);
          this.world.flash(p, 10);
        }, 420 + i * 430);
      }
      this.ui.feed(`<b>+${bonus}</b> KAIJU NEUTRALIZED // ${name}`);
    } else {
      this.effects.explosion(pos, 1.25, color);
      this.audio.explosion(0.8);
      this.player.addShake(0.008);
      this.ui.feed(`<b>+${bonus}</b> AIRBORNE KILL // ${name}`);
    }

    if (this.player.stats.repairPerKill > 0) {
      const healed = this.player.heal(this.player.stats.repairPerKill);
      if (healed > 0) this.ui.feed(`NANO-FORGE <b>+${Math.round(healed)} HULL</b>`, "ok");
    }

    if (this.game.combo >= 4) {
      this.ui.feed(`<b>x${this.game.combo}</b> KILL CHAIN`, "ok");
    }
    this.ui.updatePlayHud(this.game, this.player);
  }

  _handleBuildingHit(building, destroyed, pos) {
    this.game.cityIntegrity = Math.max(0, this.game.cityIntegrity - (destroyed ? 5.5 : 1.7));
    this.player.addShake(destroyed ? 0.032 : 0.011);
    this.effects.smokePuff(pos, destroyed ? 36 : 10, {
      speed: destroyed ? 6 : 3,
      life: destroyed ? 4 : 2.2,
      size: destroyed ? 2.8 : 1.5,
      color: new THREE.Color("#5c5b59"),
      alpha: 0.42,
    });
    this.effects.spark(pos, destroyed ? 24 : 8, {
      speed: destroyed ? 18 : 8,
      color: new THREE.Color("#ff9b52"),
      life: 0.8,
      size: 0.55,
      gravity: 13,
    });
    if (destroyed) {
      this.effects.buildingCollapse(new THREE.Vector3(building.x, 0, building.z), building.height);
      this.audio.explosion(1.2);
      this.world.flash(new THREE.Vector3(building.x, 18, building.z), 15);
      this.ui.feed("<b>CIVILIAN BLOCK LOST</b> CITY INTEGRITY -5%", "danger");
      this.ui.damageFlash(true);
    } else {
      this.audio.explosion(0.36);
    }
    if (this.game.cityIntegrity <= 0 && this.state === "playing") this.gameOver("city");
  }

  _spawnMissile(origin, dir, target, damage, turn) {
    const missile = new Missile(this.scene, this.effects, origin, dir, target, damage, turn);
    this.missiles.push(missile);
    this.ui.feed("<b>HELLFIRE</b> AWAY", "ok");
  }

  _spawnEnemyOrb(source, mouth, targetPos, color) {
    const lead = Math.min(0.8, mouth.distanceTo(targetPos) / 80);
    const aim = targetPos.clone().addScaledVector(this.player.vel, lead * 0.35);
    aim.x += (Math.random() - 0.5) * 3.5;
    aim.y += (Math.random() - 0.5) * 2.5;
    aim.z += (Math.random() - 0.5) * 3.5;
    const dir = aim.sub(mouth).normalize();
    const orb = new EnemyOrb(this.scene, this.effects, mouth, dir, color, 52 + this.game.wave * 2.4);
    this.orbs.push(orb);
    this.audio.enemyShot();
  }

  _updateMissiles(dt) {
    for (let i = this.missiles.length - 1; i >= 0; i--) {
      const m = this.missiles[i];
      const result = m.update(dt, this.entities);
      if (!result) continue;
      this._explodeMissile(m, result);
      m.dispose();
      this.missiles.splice(i, 1);
    }
  }

  _explodeMissile(missile, result) {
    const pos = missile.mesh.position.clone();
    this.effects.explosion(pos, 2.2, 0xff8a45);
    this.effects.debrisBurst(pos, 12, 0.8);
    this.audio.explosion(1.25);
    this.world.flash(pos, 13);
    const dist = this.player.pos.distanceTo(pos);
    if (dist < 110) this.player.addShake(0.035 * (1 - dist / 110));

    let mainTarget = missile.target;
    if (!mainTarget || mainTarget.dead) {
      let best = null;
      let bestD = 30;
      for (const e of this.entities) {
        if (e.dead) continue;
        const d = e.center.distanceTo(pos);
        if (d < bestD) {
          bestD = d;
          best = e;
        }
      }
      mainTarget = best;
    }
    if (mainTarget && !mainTarget.dead && mainTarget.center.distanceTo(pos) < 30) {
      const res = mainTarget.takeDamage(missile.damage, true);
      this.player.registerHit();
      this.ui.hitMarker(true);
      this.game.score += Math.round(missile.damage * 0.16 * this.game.combo);
      if (res?.killed) this._handleKill(mainTarget);
    }
    for (const e of this.entities) {
      if (e.dead || e === mainTarget) continue;
      if (e.center.distanceTo(pos) < 22) {
        const res = e.takeDamage(missile.damage * 0.32, false);
        if (res?.killed) this._handleKill(e);
      }
    }
    if (result === "expire") {
      this.effects.smokePuff(pos, 5, {
        speed: 1.6,
        life: 1.2,
        size: 1.1,
        alpha: 0.2,
      });
    }
  }

  _updateOrbs(dt) {
    for (let i = this.orbs.length - 1; i >= 0; i--) {
      const orb = this.orbs[i];
      const result = orb.update(dt, this.player.pos);
      if (!result) continue;
      const pos = orb.mesh.position.clone();
      if (result === "player") {
        this.effects.explosion(pos, 0.8, orb.color.getHex());
        this.player.damage(8 + this.game.wave * 1.1, "plasma");
        this.ui.damageFlash(false);
      } else if (result === "ground") {
        this.effects.explosion(pos, 0.55, orb.color.getHex());
        if (pos.distanceTo(this.player.pos) < 35) this.player.addShake(0.004);
      }
      orb.dispose();
      this.orbs.splice(i, 1);
    }

    const threat = this.orbs.some((o) => o.mesh.position.distanceTo(this.player.pos) < 48);
    if (threat && !this.incomingWarned) {
      this.incomingWarned = true;
      this.ui.showWarning("PLASMA INBOUND", 1200);
    } else if (!threat) {
      this.incomingWarned = false;
    }
  }

  _updateTarget() {
    if (this.state !== "playing" && this.state !== "clearing") {
      this.target = null;
      this.player.target = null;
      return;
    }
    const forward = new THREE.Vector3();
    this.camera.getWorldDirection(forward);
    let best = null;
    let bestScore = Infinity;
    const tmp = new THREE.Vector3();

    for (const e of this.entities) {
      if (e.dead) continue;
      tmp.copy(e.center);
      const dist = this.camera.position.distanceTo(tmp);
      if (dist > 520) continue;
      const dirTo = tmp.clone().sub(this.camera.position).normalize();
      const dot = dirTo.dot(forward);
      if (dot < 0.55) continue;
      const ndc = tmp.clone().project(this.camera);
      if (ndc.z < -1 || ndc.z > 1) continue;
      const score = Math.hypot(ndc.x, ndc.y);
      const limit = e.isFlyer ? 0.16 : 0.28;
      if (score < limit && score < bestScore) {
        bestScore = score;
        best = e;
      }
    }

    this.target = best;
    this.player.target = best;
  }

  _updateEntities(dt) {
    for (let i = this.entities.length - 1; i >= 0; i--) {
      const e = this.entities[i];
      e.update(dt, this.time, this.player.pos);
      if (e.remove) {
        this.scene.remove(e.root);
        this.entities.splice(i, 1);
      }
    }
  }

  _beginWaveClear() {
    if (this.state !== "playing") return;
    this.state = "clearing";
    this.game.state = "clearing";
    this.game.clearTimer = 2.7;
    this.game.score += 500 + this.game.wave * 210;
    this.player.firing = false;
    this.player.heal(8);
    this.game.cityIntegrity = Math.min(100, this.game.cityIntegrity + 2.5);
    this.target = null;
    this.player.target = null;
    this.ui.showBanner("SECTOR 07", "AREA SECURED", "CIVIL DEFENSE CREWS MOVING IN", 2600);
    this.ui.feed("<b>SECTOR CLEAR</b> SALVAGE SECURED", "ok");
    this.audio.upgrade();
  }

  _openUpgrade() {
    if (this.state !== "clearing") return;
    this.state = "upgrade";
    this.game.state = "upgrade";
    this.player.stop();
    this.audio.updateEngine(0, false, false);
    try {
      document.exitPointerLock?.();
    } catch {
      /* ignore */
    }
    const choices = getUpgradeChoices();
    this.ui.showUpgrade(this.game, this.player, choices, (u) => {
      u.apply(this.player);
      this.player.applyStats();
      this.game.upgrades.push(u);
      this.ui.updatePerks(this.game.upgrades);
      this.audio.upgrade();
    });
  }

  _updatePlaying(dt) {
    this.player.update(dt, this.time);
    this._updateTarget();
    this._updateEntities(dt);
    this._updateMissiles(dt);
    this._updateOrbs(dt);

    if (this.state === "playing") {
      this.game.waveElapsed += dt;
      this.game.comboTimer -= dt;
      if (this.game.comboTimer <= 0 && this.game.combo > 1) {
        this.game.combo = 1;
      }
      const allDead = this.entities.length > 0 && this.entities.every((e) => e.dead);
      if (allDead) this._beginWaveClear();
      if (this.entities.length === 0) {
        // protection against a wave with no spawns
        this._beginWaveClear();
      }
    } else if (this.state === "clearing") {
      this.game.comboTimer -= dt;
      this.game.clearTimer -= dt;
      this.player.firing = false;
      if (this.game.clearTimer <= 0) this._openUpgrade();
    }

    this.ui.updatePlayHud(this.game, this.player);
    this.ui.updateTarget(this.target, this.player);
  }

  _updateMenu(dt) {
    this.menuMouse.x += (this.menuTargetMouse.x - this.menuMouse.x) * Math.min(1, dt * 2.2);
    this.menuMouse.y += (this.menuTargetMouse.y - this.menuMouse.y) * Math.min(1, dt * 2.2);
    const t = this.time;
    const driftX = this.menuMouse.x * 3.2;
    const driftY = this.menuMouse.y * 1.8;
    this.camera.position.x = 16 + Math.sin(t * 0.08) * 1.1 + driftX;
    this.camera.position.y = 40 + Math.sin(t * 0.17) * 0.55 - driftY * 0.5;
    this.camera.position.z = 112 + Math.cos(t * 0.06) * 1.2;
    this.camera.lookAt(-12 + this.menuMouse.x * 2.2, 18 - this.menuMouse.y * 1.2, 7);
    this.camera.updateMatrixWorld();

    if (this.menuKaiju) {
      this.menuKaiju.update(dt, t, this.menuDummyPlayer || this.player.pos);
      this.menuKaiju.root.rotation.y = Math.sin(t * 0.12) * 0.06;
    }

    this.menuFxTimer -= dt;
    if (this.menuFxTimer <= 0) {
      this.menuFxTimer = 1.6 + Math.random() * 1.8;
      const p = new THREE.Vector3((Math.random() - 0.5) * 65, 3 + Math.random() * 11, 5 + (Math.random() - 0.5) * 68);
      this.effects.smokePuff(p, 5, {
        speed: 2.2,
        life: 4.5,
        size: 2.5,
        color: new THREE.Color("#4b4a48"),
        alpha: 0.27,
        gravity: -0.4,
        rise: 1.2,
      });
      this.effects.spark(p, 4, {
        speed: 4,
        color: new THREE.Color("#ff7e3d"),
        life: 1.2,
        size: 0.5,
        gravity: 1,
      });
      this.world.flash(p, 5);
      if (Math.random() < 0.35) this.effects.explosion(p, 0.5, 0xff6a2e);
    }
  }

  pauseGame() {
    if (this.state !== "playing" && this.state !== "clearing") return;
    this.pauseState = this.state;
    this.state = "paused";
    this.game.state = "paused";
    this.player.stop();
    this.audio.updateEngine(0, false, false);
    this.ui.hideWarning();
    this.ui.showPause();
    try {
      document.exitPointerLock?.();
    } catch {
      /* ignore */
    }
  }

  resumeGame() {
    if (this.state !== "paused") return;
    this.audio.init();
    this.audio.uiClick();
    this.state = this.pauseState;
    this.game.state = this.pauseState;
    this.ui.hidePause();
    this.player.start();
    this.player.requestPointerLock();
    this.audio.updateEngine(this.player.vel.length(), false, true);
  }

  gameOver(reason) {
    if (this.state === "gameover" || this.state === "transition") return;
    this.state = "gameover";
    this.game.state = "gameover";
    this.player.stop();
    this.audio.updateEngine(0, false, false);
    this.audio.explosion(reason === "city" ? 1.5 : 2);
    try {
      document.exitPointerLock?.();
    } catch {
      /* ignore */
    }
    const cleared = Math.max(0, this.game.wave - 1);
    const newBest = this.ui.saveBest(Math.floor(this.game.score), cleared);
    this.ui.showGameOver(reason, this.game, this.player, newBest);
    this.ui.hideWarning();
    this.target = null;
    this.player.target = null;
  }

  _reloadToMenu() {
    this.ui.setTransition(true);
    this.state = "transition";
    setTimeout(() => window.location.reload(), 420);
  }

  _loop(now) {
    const dt = Math.min(0.05, Math.max(0, (now - this.lastFrame) / 1000));
    this.lastFrame = now;
    this.time += dt;

    this.world.update(dt, this.time);
    this.effects.update(dt, this.time);
    this._updateAmbientFires(dt);

    if (this.state === "menu") {
      this._updateMenu(dt);
    } else if (this.state === "playing" || this.state === "clearing") {
      this._updatePlaying(dt);
    }

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this._loop);
  }
}

window.addEventListener("error", (event) => {
  console.error("ROTOR//TITAN runtime error", event.error || event.message);
});

const boot = () => {
  try {
    window.__rotorGame = new Game();
  } catch (err) {
    console.error(err);
    document.body.classList.remove("is-loading");
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
