import * as THREE from "three";

const _project = new THREE.Vector3();

function $(id) {
  return document.getElementById(id);
}

function formatScore(n) {
  return Math.max(0, Math.floor(n)).toString().padStart(6, "0");
}

function formatTime(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

export class GameUI {
  constructor() {
    this.menu = $("menu");
    this.hud = $("hud");
    this.upgrade = $("upgrade");
    this.pause = $("pause");
    this.gameover = $("gameover");
    this.briefing = $("briefing");
    this.transition = $("transition");
    this.healthFlash = $("damage-vignette");
    this.hitmarker = $("hitmarker");
    this.reticle = $("reticle");
    this.targetPanel = $("target-panel");
    this.lockbox = $("lockbox");
    this.killFeed = $("kill-feed");
    this.warningBanner = $("warning-banner");
    this.warningText = $("warning-text");
    this.banner = $("wave-banner");
    this.combo = $("combo");
    this.radar = $("radar");
    this.radarCtx = this.radar.getContext("2d");
    this.perksLine = $("perks-line");
    this.deployNextBtn = $("deploy-next-btn");
    this.upgradeCards = $("upgrade-cards");
    this.upgradeTip = $("upgrade-tip");
    this.selectedUpgrade = null;
    this._warningToken = 0;
    this._bannerTimer = 0;
    this._feedTimers = [];
    this._radarTimer = 0;
    this._damageTimer = 0;
    this._hitTimer = 0;
    this._targetName = "";
    this._lastHull = 100;
    this._lastCity = 100;
    this._lastScore = -1;
    this._lastTime = "";
    this._lastMissiles = -1;
    this._lastHeatState = "";
    this._lastTargetHp = -1;
    this._best = this.loadBest();
    this.updateMenuBest();
  }

  loadBest() {
    try {
      const raw = localStorage.getItem("rotor-titan-best");
      if (!raw) return { score: 0, wave: 0 };
      const data = JSON.parse(raw);
      return { score: Number(data.score) || 0, wave: Number(data.wave) || 0 };
    } catch {
      return { score: 0, wave: 0 };
    }
  }

  saveBest(score, wave) {
    if (score > this._best.score) {
      this._best = { score, wave };
      try {
        localStorage.setItem("rotor-titan-best", JSON.stringify(this._best));
      } catch {
        /* storage may be unavailable */
      }
      this.updateMenuBest();
      return true;
    }
    return false;
  }

  updateMenuBest() {
    const score = $("menu-best");
    const wave = $("menu-best-wave");
    if (score) score.textContent = this._best.score > 0 ? this._best.score.toLocaleString("en-US") : "0";
    if (wave) wave.textContent = this._best.wave > 0 ? `WAVE ${String(this._best.wave).padStart(2, "0")} CLEARED` : "NO RECORD";
  }

  showMenu() {
    this.menu.classList.remove("hidden");
    this.hud.classList.add("hidden");
    this.upgrade.classList.add("hidden");
    this.pause.classList.add("hidden");
    this.gameover.classList.add("hidden");
    this.menu.setAttribute("aria-hidden", "false");
    this.hud.setAttribute("aria-hidden", "true");
    this.clearFeed();
  }

  hideMenu() {
    this.menu.classList.add("hidden");
    this.menu.setAttribute("aria-hidden", "true");
  }

  showHud() {
    this.hud.classList.remove("hidden");
    this.hud.setAttribute("aria-hidden", "false");
  }

  hideHud() {
    this.hud.classList.add("hidden");
    this.hud.setAttribute("aria-hidden", "true");
  }

  showBriefing() {
    this.briefing.classList.remove("hidden");
    this.briefing.setAttribute("aria-hidden", "false");
  }

  hideBriefing() {
    this.briefing.classList.add("hidden");
    this.briefing.setAttribute("aria-hidden", "true");
  }

  showPause() {
    this.pause.classList.remove("hidden");
    this.pause.setAttribute("aria-hidden", "false");
  }

  hidePause() {
    this.pause.classList.add("hidden");
    this.pause.setAttribute("aria-hidden", "true");
  }

  showGameOver(reason, game, player, isNewBest) {
    const title = $("gameover-title");
    const kicker = $("gameover-kicker");
    const text = $("gameover-text");
    if (reason === "city") {
      kicker.textContent = "SECTOR 07 OVERRUN";
      title.innerHTML = "CITY<br><span>LOST</span>";
      text.textContent = "The kaiju have flattened the evacuation corridor. All rotor units are ordered to withdraw.";
    } else {
      kicker.textContent = "SIGNAL LOST";
      title.innerHTML = "AIRFRAME<br><span>LOST</span>";
      text.textContent = "The AH-79 is down. Sector 07 remains under kaiju control. Sky Control is scrambling another crew.";
    }
    $("final-score").textContent = Math.floor(game.score).toLocaleString("en-US");
    $("final-wave").textContent = Math.max(0, game.wave - 1);
    $("final-kills").textContent = game.kills;
    $("final-accuracy").textContent = `${player.shots > 0 ? Math.min(100, Math.round((player.hits / player.shots) * 100)) : 0}%`;
    $("gameover-best").textContent = isNewBest ? "NEW PERSONAL BEST" : `PERSONAL BEST ${this._best.score.toLocaleString("en-US")}`;
    this.gameover.classList.remove("hidden");
    this.gameover.setAttribute("aria-hidden", "false");
    this.lockbox.classList.remove("active");
    this.targetPanel.classList.remove("active");
    this.reticle.classList.remove("target");
  }

  setTransition(active) {
    this.transition.classList.toggle("active", active);
  }

  resetHud() {
    this.clearFeed();
    this.hideWarning();
    this.combo.classList.remove("active");
    this.targetPanel.classList.remove("active");
    this.lockbox.classList.remove("active");
    this.banner.classList.remove("show");
    this._lastScore = -1;
    this._lastHull = -1;
    this._lastCity = -1;
    this._lastMissiles = -1;
    this._targetName = "";
  }

  updatePlayHud(game, player) {
    const score = Math.floor(game.score);
    if (score !== this._lastScore) {
      this._lastScore = score;
      $("score").textContent = formatScore(score);
    }
    if ($("wave").textContent !== String(game.wave).padStart(2, "0")) {
      $("wave").textContent = String(game.wave).padStart(2, "0");
    }

    const city = Math.max(0, Math.min(100, Math.round(game.cityIntegrity)));
    if (city !== this._lastCity) {
      this._lastCity = city;
      $("city-pct").textContent = `${city}%`;
      const fill = $("city-bar-fill");
      fill.style.width = `${city}%`;
      fill.classList.toggle("warn", city <= 55 && city > 28);
      fill.classList.toggle("critical", city <= 28);
      const state = $("city-state");
      state.textContent = city > 70 ? "STABLE" : city > 35 ? "DAMAGED" : "CRITICAL";
      state.classList.toggle("warn", city <= 70 && city > 35);
      state.classList.toggle("critical", city <= 35);
    }

    const alt = Math.round(player.pos.y);
    const speed = Math.round(player.vel.length() * 1.95);
    $("alt").textContent = String(alt).padStart(3, "0");
    $("spd").textContent = String(speed).padStart(3, "0");
    const hull = Math.max(0, Math.round((player.hull / player.maxHull) * 100));
    if (hull !== this._lastHull) {
      this._lastHull = hull;
      $("hull-pct").textContent = String(hull).padStart(3, "0");
      const fill = $("hull-fill");
      fill.style.width = `${hull}%`;
      fill.classList.toggle("warn", hull <= 55 && hull > 25);
      fill.classList.toggle("critical", hull <= 25);
    }

    const heading = ((player.yaw * 180) / Math.PI + 360) % 360;
    $("heading").textContent = `HDG ${String(Math.round(heading)).padStart(3, "0")}`;

    const heat = Math.round(player.heat * 100);
    const heatFill = $("heat-fill");
    heatFill.style.width = `${heat}%`;
    heatFill.classList.toggle("hot", heat > 55 && heat < 100);
    heatFill.classList.toggle("over", player.overheat);
    let heatState = "NOMINAL";
    if (player.overheat) heatState = "OVERHEAT";
    else if (heat > 70) heatState = "CRITICAL";
    else if (heat > 40) heatState = "WARM";
    if (heatState !== this._lastHeatState) {
      this._lastHeatState = heatState;
      $("heat-state").textContent = heatState;
    }

    const missiles = player.missiles;
    if (missiles !== this._lastMissiles) {
      this._lastMissiles = missiles;
      $("missile-count").textContent = String(missiles).padStart(2, "0");
      const touch = $("touch-missile-count");
      if (touch) touch.textContent = String(missiles).padStart(2, "0");
      document.querySelector(".missile-line")?.classList.toggle("empty", missiles <= 0);
    }
    const mslState = $("missile-state");
    mslState.textContent = missiles > 0 ? (player.missileTimer > 0 && missiles < player.stats.missileCap ? "RELOAD" : "READY") : "EMPTY";

    const hostiles = game.entities.filter((e) => !e.dead).length;
    $("hostiles").textContent = `${String(hostiles).padStart(2, "0")} HOSTILE${hostiles === 1 ? "" : "S"}`;
    const t = formatTime(game.waveElapsed);
    if (t !== this._lastTime) {
      this._lastTime = t;
      $("objective-time").textContent = t;
    }
    const objective = $("objective-main");
    if (game.state === "clearing") objective.textContent = "SECTOR CLEAR";
    else if (game.entities.some((e) => !e.dead && e.isFlyer)) objective.textContent = "NEUTRALIZE ALL KAIJU";
    else objective.textContent = "NEUTRALIZE ALL KAIJU";

    const warning = $("boundary-warning");
    if (warning) warning.classList.toggle("show", player.boundaryWarn > 0);

    const retOverheat = player.overheat;
    this.reticle.classList.toggle("overheat", retOverheat);
    $("reticle-label").textContent = retOverheat ? "BARREL OVERHEAT" : player.target ? "TARGET LOCKED" : "30MM VULCAN";

    this.updateCombo(game);
    this.updateRadar(game, player);
  }

  updateCombo(game) {
    if (game.combo > 1) {
      this.combo.classList.add("active");
      $("combo-value").textContent = `x${game.combo}`;
      $("combo-fill").style.width = `${Math.max(0, Math.min(1, game.comboTimer / 2.6)) * 100}%`;
    } else {
      this.combo.classList.remove("active");
    }
  }

  updateTarget(target, player) {
    if (!target || target.dead) {
      this.targetPanel.classList.remove("active");
      this.lockbox.classList.remove("active");
      this.reticle.classList.remove("target");
      this._targetName = "";
      return;
    }

    const center = target.center;
    this.targetPanel.classList.add("active");
    this.reticle.classList.add("target");

    if (target.name !== this._targetName) {
      this._targetName = target.name;
      $("target-name").textContent = target.cfg.name;
      $("target-class").textContent = target.cfg.classLabel;
    }
    const hp = Math.max(0, Math.round((target.hp / target.maxHp) * 100));
    if (hp !== this._lastTargetHp) {
      this._lastTargetHp = hp;
      $("target-hp-fill").style.width = `${hp}%`;
      $("target-hp-text").textContent = `${hp}%`;
    }

    const distance = player.camera.position.distanceTo(center);
    $("target-range").textContent = `${Math.round(distance).toString().padStart(3, "0")} M`;

    _project.copy(center).project(player.camera);
    const inFront = _project.z > -1 && _project.z < 1;
    if (!inFront) {
      this.lockbox.classList.remove("active");
      return;
    }
    const x = (_project.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-_project.y * 0.5 + 0.5) * window.innerHeight;
    if (x < -120 || y < -120 || x > window.innerWidth + 120 || y > window.innerHeight + 120) {
      this.lockbox.classList.remove("active");
      return;
    }
    const pxPerUnit = window.innerHeight / (2 * Math.tan((player.camera.fov * Math.PI) / 360));
    const size = Math.max(42, Math.min(300, (target.radius * 2 * pxPerUnit) / Math.max(1, distance) * 1.15));
    this.lockbox.style.left = `${x}px`;
    this.lockbox.style.top = `${y}px`;
    this.lockbox.style.width = `${size}px`;
    this.lockbox.style.height = `${size}px`;
    this.lockbox.classList.add("active");
    this.lockbox.classList.toggle("ready", player.missiles > 0);
    $("lock-tag").textContent = player.missiles > 0 ? "LOCK" : "TRACK";
  }

  updateRadar(game, player) {
    this._radarTimer -= 1 / 60;
    if (this._radarTimer > 0) return;
    this._radarTimer = 0.075;

    const ctx = this.radarCtx;
    const w = 220;
    const h = 220;
    const cx = w / 2;
    const cy = h / 2;
    const radius = 99;
    const range = 230;
    const scale = radius / range;
    const yaw = player.yaw;
    const cos = Math.cos(yaw);
    const sin = Math.sin(yaw);

    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();

    const bg = ctx.createRadialGradient(cx, cy, 3, cx, cy, radius);
    bg.addColorStop(0, "rgba(10,25,30,0.52)");
    bg.addColorStop(0.7, "rgba(4,11,15,0.52)");
    bg.addColorStop(1, "rgba(2,6,8,0.7)");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // city grid
    if (game.world) {
      for (const b of game.world.buildings) {
        if (b.destroyed) continue;
        const dx = b.x - player.pos.x;
        const dz = b.z - player.pos.z;
        const sx = cx + (dx * cos - dz * sin) * scale;
        const sy = cy + (dx * sin + dz * cos) * scale;
        if ((sx - cx) ** 2 + (sy - cy) ** 2 > radius * radius) continue;
        ctx.fillStyle = "rgba(105,132,144,0.13)";
        const bw = Math.max(1.1, b.width * scale * 0.55);
        const bh = Math.max(1.1, b.depth * scale * 0.55);
        ctx.fillRect(sx - bw / 2, sy - bh / 2, bw, bh);
      }
    }

    // rings
    ctx.strokeStyle = "rgba(94,231,255,0.14)";
    ctx.lineWidth = 1;
    for (let i = 1; i <= 3; i++) {
      ctx.beginPath();
      ctx.arc(cx, cy, (radius / 3) * i, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(cx - radius, cy);
    ctx.lineTo(cx + radius, cy);
    ctx.moveTo(cx, cy - radius);
    ctx.lineTo(cx, cy + radius);
    ctx.stroke();
    ctx.strokeStyle = "rgba(94,231,255,0.3)";
    ctx.beginPath();
    ctx.arc(cx, cy, radius - 1, 0, Math.PI * 2);
    ctx.stroke();

    // enemies
    for (const e of game.entities) {
      if (e.dead) continue;
      const p = e.center;
      const dx = p.x - player.pos.x;
      const dz = p.z - player.pos.z;
      let sx = cx + (dx * cos - dz * sin) * scale;
      let sy = cy + (dx * sin + dz * cos) * scale;
      let outside = false;
      const d = Math.hypot(sx - cx, sy - cy);
      if (d > radius - 5) {
        const f = (radius - 5) / d;
        sx = cx + (sx - cx) * f;
        sy = cy + (sy - cy) * f;
        outside = true;
      }
      const color = e.isFlyer ? "#5ee7ff" : "#ff5a2d";
      ctx.fillStyle = outside ? `${color}99` : color;
      ctx.beginPath();
      ctx.arc(sx, sy, e.isFlyer ? 2.4 : 3.8, 0, Math.PI * 2);
      ctx.fill();
      if (!outside && e === player.target) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(sx, sy, 7 + Math.sin(performance.now() / 180) * 1.4, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // player arrow
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = "#f3f7fa";
    ctx.shadowColor = "#5ee7ff";
    ctx.shadowBlur = 7;
    ctx.beginPath();
    ctx.moveTo(0, -6);
    ctx.lineTo(4.5, 5);
    ctx.lineTo(0, 2.6);
    ctx.lineTo(-4.5, 5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    ctx.restore();

    // compass ticks
    ctx.fillStyle = "rgba(255,255,255,0.32)";
    ctx.font = "7px monospace";
    ctx.textAlign = "center";
    ctx.fillText("N", cx, 9);
    ctx.fillText("E", w - 8, cy + 3);
    ctx.fillText("S", cx, h - 3);
    ctx.fillText("W", 8, cy + 3);
  }

  hitMarker(crit = false) {
    const hm = this.hitmarker;
    hm.classList.remove("show", "crit");
    void hm.offsetWidth;
    hm.classList.add("show");
    if (crit) hm.classList.add("crit");
    clearTimeout(this._hitTimer);
    this._hitTimer = setTimeout(() => hm.classList.remove("show", "crit"), 300);
  }

  damageFlash(strong = false) {
    if (performance.now() - this._damageTimer < 140) return;
    this._damageTimer = performance.now();
    this.healthFlash.classList.remove("flash");
    void this.healthFlash.offsetWidth;
    this.healthFlash.style.opacity = strong ? "1" : "0.65";
    this.healthFlash.classList.add("flash");
  }

  feed(text, tone = "kill") {
    const item = document.createElement("div");
    item.className = "feed-item";
    item.innerHTML = text;
    if (tone === "danger") item.style.borderColor = "#ff304c";
    this.killFeed.prepend(item);
    while (this.killFeed.children.length > 5) this.killFeed.lastElementChild.remove();
    const timer = setTimeout(() => {
      item.classList.add("out");
      setTimeout(() => item.remove(), 620);
    }, 3400);
    this._feedTimers.push(timer);
  }

  clearFeed() {
    this.killFeed.innerHTML = "";
    for (const t of this._feedTimers) clearTimeout(t);
    this._feedTimers = [];
  }

  showBanner(kicker, main, sub, duration = 3000) {
    const el = this.banner;
    $("banner-kicker").textContent = kicker;
    $("banner-main").textContent = main;
    $("banner-sub").textContent = sub;
    el.classList.remove("show");
    void el.offsetWidth;
    el.classList.add("show");
    clearTimeout(this._bannerTimer);
    this._bannerTimer = setTimeout(() => el.classList.remove("show"), duration);
  }

  showWarning(text, duration = 1800) {
    this._warningToken++;
    const token = this._warningToken;
    this.warningText.textContent = text;
    this.warningBanner.classList.add("show");
    setTimeout(() => {
      if (token === this._warningToken) this.warningBanner.classList.remove("show");
    }, duration);
  }

  hideWarning() {
    this._warningToken++;
    this.warningBanner.classList.remove("show");
  }

  showUpgrade(game, player, choices, onSelect) {
    this.upgrade.classList.remove("hidden");
    this.upgrade.setAttribute("aria-hidden", "false");
    $("upgrade-wave-cleared").textContent = String(game.wave).padStart(2, "0");
    $("upgrade-next-label").textContent = `NEXT: WAVE ${String(game.wave + 1).padStart(2, "0")}`;
    this.setUpgradeStats(game, player);
    this.selectedUpgrade = null;
    this.upgradeTip.textContent = "SELECT ONE UPGRADE";
    this.deployNextBtn.disabled = true;
    this.deployNextBtn.querySelector(".btn-label").textContent = `DEPLOY WAVE ${String(game.wave + 1).padStart(2, "0")}`;

    this.upgradeCards.innerHTML = "";
    choices.forEach((u, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "upgrade-card";
      card.dataset.cat = u.cat;
      card.innerHTML = `
        <div class="upgrade-card-top">
          <span class="upgrade-cat">${u.cat}</span>
          <span class="upgrade-index">0${index + 1}</span>
        </div>
        <div class="upgrade-icon">${u.icon}</div>
        <div class="upgrade-name">${u.name}</div>
        <div class="upgrade-desc">${u.desc}</div>
        <div class="upgrade-delta">${u.delta}</div>
      `;
      card.addEventListener("click", () => {
        if (this.selectedUpgrade || game.state !== "upgrade") return;
        this.selectedUpgrade = u;
        this.upgradeCards.querySelectorAll(".upgrade-card").forEach((c) => c.classList.add("taken"));
        card.classList.remove("taken");
        card.classList.add("selected");
        this.upgradeTip.textContent = `${u.name} INSTALLED — READY TO DEPLOY`;
        this.deployNextBtn.disabled = false;
        onSelect(u);
        this.setUpgradeStats(game, player);
      });
      this.upgradeCards.appendChild(card);
    });
  }

  setUpgradeStats(game, player) {
    $("upgrade-city").textContent = `${Math.round(game.cityIntegrity)}%`;
    $("upgrade-hull").textContent = `${Math.round((player.hull / player.maxHull) * 100)}%`;
    $("upgrade-kills").textContent = game.kills;
    $("upgrade-score").textContent = Math.floor(game.score).toLocaleString("en-US");
  }

  hideUpgrade() {
    this.upgrade.classList.add("hidden");
    this.upgrade.setAttribute("aria-hidden", "true");
  }

  updatePerks(upgrades) {
    this.perksLine.innerHTML = "";
    if (!upgrades.length) {
      const span = document.createElement("span");
      span.className = "perk-chip";
      span.textContent = "STOCK AIRFRAME";
      this.perksLine.appendChild(span);
      return;
    }
    for (const u of upgrades.slice(-3)) {
      const span = document.createElement("span");
      span.className = "perk-chip";
      span.textContent = u.name;
      this.perksLine.appendChild(span);
    }
  }

  updateMute(muted) {
    const b = $("mute-btn");
    if (b) b.textContent = muted ? "SOUND OFF" : "SOUND ON";
  }

  updateClock() {
    const el = $("menu-clock");
    if (!el) return;
    const d = new Date();
    el.textContent = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(
      d.getSeconds()
    ).padStart(2, "0")}`;
  }
}
