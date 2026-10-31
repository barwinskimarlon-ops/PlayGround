import * as THREE from 'three';
import './style.css';
import { World } from './world.js';
import { CreatureWorld, SPECIES } from './creatures.js';
import { Input } from './input.js';
import { AudioEngine } from './audio.js';
import { clamp, damp, terrainHeight } from './utils.js';

const isCoarse = window.matchMedia?.('(pointer: coarse)').matches || window.innerWidth < 820;
const canvas = document.getElementById('scene');
const titleScreen = document.getElementById('title-screen');
const hud = document.getElementById('hud');
const startButton = document.getElementById('start-btn');
const loading = document.getElementById('loading');
const endScreen = document.getElementById('end-screen');
const endKicker = document.getElementById('end-kicker');
const endTitle = document.getElementById('end-title');
const endCopy = document.getElementById('end-copy');
const endSpecies = document.getElementById('end-species');
const endMotes = document.getElementById('end-motes');
const endDepth = document.getElementById('end-depth');
const restartButton = document.getElementById('restart-btn');
const soundButton = document.getElementById('sound-btn');

const depthValue = document.getElementById('depth-value');
const zoneName = document.getElementById('zone-name');
const rulerMarker = document.getElementById('ruler-marker');
const speciesPips = [...document.querySelectorAll('#species-pips i')];
const speciesCount = document.getElementById('species-count');
const moteCount = document.getElementById('mote-count');
const integrityText = document.getElementById('integrity-text');
const integrityFill = document.getElementById('integrity-fill');
const pulseText = document.getElementById('pulse-text');
const pulseFill = document.getElementById('pulse-fill');
const radarState = document.getElementById('radar-state');
const radarCanvas = document.getElementById('radar');
const radarCtx = radarCanvas.getContext('2d');
const specimenCard = document.getElementById('specimen-card');
const specimenIndex = document.getElementById('specimen-index');
const specimenStatus = document.getElementById('specimen-status');
const specimenName = document.getElementById('specimen-name');
const specimenLatin = document.getElementById('specimen-latin');
const specimenDesc = document.getElementById('specimen-desc');
const specimenSize = document.getElementById('specimen-size');
const specimenBehavior = document.getElementById('specimen-behavior');
const scanPercent = document.getElementById('scan-percent');
const scanFill = document.getElementById('scan-fill');
const scanHint = document.getElementById('scan-hint');
const scanPrompt = document.getElementById('scan-prompt');
const promptName = document.getElementById('prompt-name');
const promptDistance = document.getElementById('prompt-distance');
const controlsHint = document.getElementById('controls-hint');
const statusToast = document.getElementById('status-toast');
const damageFlash = document.getElementById('damage-flash');
const pulseFlash = document.getElementById('pulse-flash');

const world = new World(canvas);
const input = new Input(canvas);
const audio = new AudioEngine();

const player = {
  position: new THREE.Vector3(0, -13.5, 43),
  velocity: new THREE.Vector3(),
  yaw: 0.252,
  pitch: -0.3,
};

const game = {
  started: false,
  over: false,
  won: false,
  integrity: 100,
  pulseCooldown: 0,
  pulseMax: 8.5,
  lastDamage: -20,
  motes: 0,
  maxDepth: 0,
  catalogued: new Set(),
  scanProgress: new Map(),
  scanTarget: null,
  cardTimer: 0,
  radarReveal: 0,
  shake: 0,
  scanTickAt: 0,
  elapsed: 0,
  winTimer: 0,
};

let toastTimer = 0;
let creatures;

function handleAttack(rift) {
  if (!game.started || game.over) return;
  if (game.elapsed - game.lastDamage < 2.4) return;
  game.lastDamage = game.elapsed;
  game.integrity = Math.max(0, game.integrity - 27);
  game.shake = 1.1;
  audio.hurt();
  flash(damageFlash, 'hit');
  showToast('HULL BREACH / RIFT HUNTER');
  const away = player.position.clone().sub(rift.position);
  if (away.lengthSq() < 0.001) away.set(0, 0, 1);
  player.velocity.addScaledVector(away.normalize(), 18);
  if (game.integrity <= 0) finishExpedition(false);
}

creatures = new CreatureWorld(world.scene, world.timeUniform, world.glowTexture, { onAttack: handleAttack });

world.onMote = () => {
  if (!game.started || game.over) return;
  game.motes += 1;
  audio.collect();
  showToast('BIO-SIGNAL HARVESTED / +1 MOTE');
};

function showToast(message, duration = 2700) {
  statusToast.textContent = message;
  statusToast.classList.add('visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => statusToast.classList.remove('visible'), duration);
}

function flash(element, className) {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}

function startGame() {
  if (game.started) return;
  game.started = true;
  game.elapsed = 0;
  audio.start();
  titleScreen.classList.add('leaving');
  window.setTimeout(() => titleScreen.classList.add('hidden'), 850);
  hud.classList.remove('hidden');
  document.body.classList.add('playing');
  if (!isCoarse) {
    showToast('DIVE LOG 07 / THE DRIFT', 2200);
    window.setTimeout(() => {
      if (!game.over) showToast('CLICK THE WATER TO LOOK · WASD TO SWIM', 3400);
    }, 2600);
  }
  window.setTimeout(() => {
    controlsHint.style.opacity = '0';
  }, 23000);
  window.__HALOVALE__?.onStart?.();
}

function finishExpedition(success) {
  if (game.over) return;
  game.over = true;
  game.won = success;
  if (document.pointerLockElement) document.exitPointerLock?.();
  endKicker.textContent = success ? 'EXPEDITION 07 / SURVEY CLOSED' : 'EXPEDITION 07 / SIGNAL LOST';
  endTitle.textContent = success ? 'SURVEY COMPLETE' : 'SIGNAL LOST';
  endCopy.textContent = success
    ? 'The Drift has been catalogued. Somewhere below, something larger is still awake.'
    : 'Your signal folded into the dark. The Drift keeps what it finds.';
  endSpecies.textContent = `${game.catalogued.size} / 5`;
  endMotes.textContent = String(game.motes);
  endDepth.textContent = `${Math.round(game.maxDepth)} M`;
  endScreen.classList.remove('hidden');
}

function updateMissionUI() {
  speciesPips.forEach((pip, index) => pip.classList.toggle('on', index < game.catalogued.size));
  speciesCount.textContent = String(game.catalogued.size);
  moteCount.textContent = String(game.motes);
}

function catalogue(target) {
  if (!target || game.catalogued.has(target.key)) return;
  game.catalogued.add(target.key);
  game.scanProgress.set(target.key, 1);
  audio.discovered();
  flash(pulseFlash, 'fire');
  showToast(`SPECIMEN LOGGED / ${target.species.name}`, 3600);
  updateMissionUI();
  if (game.catalogued.size >= 5 && !game.winTimer) {
    game.winTimer = window.setTimeout(() => finishExpedition(true), 2800);
  }
}

function firePulse() {
  if (!game.started || game.over) return;
  if (game.pulseCooldown > 0) return;
  game.pulseCooldown = game.pulseMax;
  game.radarReveal = 7;
  world.firePulse(player.position);
  creatures.pulse(player.position);
  audio.ping();
  flash(pulseFlash, 'fire');
  showToast('ECHO PULSE / CONTACTS REVEALED', 2200);
}

function getForward(out = new THREE.Vector3()) {
  const cosPitch = Math.cos(player.pitch);
  return out.set(
    -Math.sin(player.yaw) * cosPitch,
    Math.sin(player.pitch),
    -Math.cos(player.yaw) * cosPitch
  ).normalize();
}

const targetDirection = new THREE.Vector3();

function findScanTarget() {
  const forward = getForward();
  let best = null;
  let bestScore = -Infinity;
  const targets = creatures.getTargets();
  for (const target of targets) {
    if (game.catalogued.has(target.key)) continue;
    targetDirection.subVectors(target.position, world.camera.position);
    const distance = targetDirection.length();
    if (distance > target.species.range * 1.18) continue;
    targetDirection.normalize();
    const alignment = forward.dot(targetDirection);
    if (alignment < 0.06) continue;
    const score = alignment * 3.2 - distance / target.species.range;
    if (score > bestScore) {
      bestScore = score;
      best = { ...target, distance };
    }
  }
  return best;
}

function updateScan(scanDt, time) {
  const target = game.started && !game.over ? findScanTarget() : null;
  game.scanTarget = target;

  if (target) {
    game.cardTimer = 1.35;
    const species = target.species;
    const progress = game.catalogued.has(target.key) ? 1 : (game.scanProgress.get(target.key) || 0);
    const percent = Math.round(progress * 100);

    specimenIndex.textContent = `SPECIMEN / ${String(species.index).padStart(2, '0')}`;
    specimenStatus.textContent = progress >= 1 ? 'CATALOGUED' : 'IN RANGE';
    specimenName.textContent = species.name;
    specimenLatin.textContent = species.latin;
    specimenDesc.textContent = species.desc;
    specimenSize.textContent = species.size;
    specimenBehavior.textContent = species.behavior;
    scanPercent.textContent = `${percent}%`;
    scanFill.style.width = `${percent}%`;
    specimenCard.classList.add('visible');

    const scanning = input.scanHeld && progress < 1;
    if (scanning) {
      // Scan progress follows real time even when the renderer is slow.
      const next = Math.min(1, progress + scanDt / 3.15);
      game.scanProgress.set(target.key, next);
      scanPercent.textContent = `${Math.round(next * 100)}%`;
      scanFill.style.width = `${next * 100}%`;
      if (time - game.scanTickAt > 0.24) {
        game.scanTickAt = time;
        audio.scanTick();
      }
      if (next >= 1) catalogue(target);
    }

    scanPrompt.classList.toggle('hidden', scanning || progress >= 1);
    promptName.textContent = species.name;
    promptDistance.textContent = `${Math.round(target.distance)} M · ${isCoarse ? 'HOLD SCAN TO CATALOGUE' : 'HOLD E TO CATALOGUE'}`;
    scanHint.innerHTML = scanning ? 'CATALOGUING…' : isCoarse ? 'HOLD SCAN' : 'HOLD <kbd>E</kbd> TO SCAN';
    world.setScanTarget(target, scanning);
  } else {
    game.cardTimer = Math.max(0, game.cardTimer - scanDt);
    if (game.cardTimer <= 0) {
      specimenCard.classList.remove('visible');
      scanPrompt.classList.add('hidden');
    }
    world.setScanTarget(null, false);
  }
}

function drawRadar(time) {
  const size = radarCanvas.width;
  const center = size / 2;
  const radius = size * 0.44;
  radarCtx.clearRect(0, 0, size, size);

  radarCtx.save();
  radarCtx.translate(center, center);
  radarCtx.strokeStyle = 'rgba(116, 255, 224, 0.16)';
  radarCtx.lineWidth = 1;
  [0.34, 0.67, 1].forEach((ring) => {
    radarCtx.beginPath();
    radarCtx.arc(0, 0, radius * ring, 0, Math.PI * 2);
    radarCtx.stroke();
  });
  radarCtx.beginPath();
  radarCtx.moveTo(-radius, 0);
  radarCtx.lineTo(radius, 0);
  radarCtx.moveTo(0, -radius);
  radarCtx.lineTo(0, radius);
  radarCtx.strokeStyle = 'rgba(116, 255, 224, 0.08)';
  radarCtx.stroke();

  const sweep = time * 0.65;
  radarCtx.save();
  radarCtx.rotate(sweep);
  const gradient = radarCtx.createLinearGradient(0, 0, radius, 0);
  gradient.addColorStop(0, 'rgba(116, 255, 224, 0.22)');
  gradient.addColorStop(1, 'rgba(116, 255, 224, 0)');
  radarCtx.fillStyle = gradient;
  radarCtx.beginPath();
  radarCtx.moveTo(0, 0);
  radarCtx.arc(0, 0, radius, -0.22, 0.22);
  radarCtx.closePath();
  radarCtx.fill();
  radarCtx.restore();

  const range = game.radarReveal > 0 ? 155 : 118;
  const targets = creatures.getTargets();
  for (const target of targets) {
    const delta = target.position.clone().sub(player.position);
    const distance = delta.length();
    if (distance > range) continue;
    const x = (delta.x / range) * radius;
    const y = (delta.z / range) * radius;
    const catalogued = game.catalogued.has(target.key);
    const color = `#${target.species.color.toString(16).padStart(6, '0')}`;
    radarCtx.globalAlpha = catalogued ? 0.28 : clamp(1 - distance / (range * 1.2), 0.35, 1);
    radarCtx.fillStyle = color;
    radarCtx.shadowColor = color;
    radarCtx.shadowBlur = game.radarReveal > 0 ? 12 : 6;
    radarCtx.beginPath();
    radarCtx.arc(x, y, game.radarReveal > 0 ? 4.1 : 3.1, 0, Math.PI * 2);
    radarCtx.fill();
    radarCtx.shadowBlur = 0;
  }
  radarCtx.globalAlpha = 1;

  radarCtx.save();
  radarCtx.rotate(-player.yaw);
  radarCtx.fillStyle = 'rgba(220, 255, 247, 0.9)';
  radarCtx.beginPath();
  radarCtx.moveTo(0, -8);
  radarCtx.lineTo(5.5, 5);
  radarCtx.lineTo(0, 2.5);
  radarCtx.lineTo(-5.5, 5);
  radarCtx.closePath();
  radarCtx.fill();
  radarCtx.restore();

  radarCtx.restore();

  if (game.radarReveal > 0) {
    radarState.textContent = `ACTIVE ${Math.ceil(game.radarReveal)}S`;
    radarState.style.color = 'rgba(255, 199, 134, 0.85)';
  } else {
    radarState.textContent = 'PASSIVE';
    radarState.style.color = '';
  }
}

function updateHUD(dt, time) {
  const depth = clamp(-world.camera.position.y, 0, 120);
  game.maxDepth = Math.max(game.maxDepth, depth);
  depthValue.textContent = depth.toFixed(1).padStart(5, '0');
  rulerMarker.style.top = `${clamp((depth / 120) * 100, 2, 98)}%`;
  zoneName.textContent = depth < 32 ? 'SUNLIT DRIFT' : depth < 62 ? 'TWILIGHT COLUMN' : depth < 92 ? 'PRESSURE FIELD' : 'THE HOLLOW';

  if (time - game.lastDamage > 9 && game.integrity < 100) {
    game.integrity = Math.min(100, game.integrity + dt * 2.2);
  }
  integrityText.textContent = `${Math.round(game.integrity)}%`;
  integrityFill.style.width = `${game.integrity}%`;
  integrityFill.style.background = game.integrity < 34
    ? 'linear-gradient(90deg, rgba(255, 92, 67, 0.5), #ff9d72)'
    : 'linear-gradient(90deg, rgba(87, 255, 219, 0.42), #74ffe0)';

  const pulseReady = game.pulseCooldown <= 0;
  pulseText.textContent = pulseReady ? 'READY' : `${game.pulseCooldown.toFixed(1)}S`;
  pulseFill.style.width = pulseReady ? '100%' : `${(1 - game.pulseCooldown / game.pulseMax) * 100}%`;
  pulseFill.style.background = pulseReady ? '#74ffe0' : 'rgba(255, 199, 134, 0.9)';

  if (game.radarReveal > 0) game.radarReveal = Math.max(0, game.radarReveal - dt);
  if (game.pulseCooldown > 0) game.pulseCooldown = Math.max(0, game.pulseCooldown - dt);
  drawRadar(time);
}

const lookVector = new THREE.Vector3();
const rightVector = new THREE.Vector3();
const moveVector = new THREE.Vector3();
const upVector = new THREE.Vector3(0, 1, 0);

function updatePlayer(dt, time) {
  if (!game.started) {
    const drift = Math.sin(time * 0.18) * 0.006;
    world.camera.position.set(
      player.position.x + Math.sin(time * 0.2) * 0.55,
      player.position.y + Math.sin(time * 0.34) * 0.18,
      player.position.z
    );
    world.camera.rotation.set(player.pitch + Math.sin(time * 0.23) * 0.006, player.yaw + drift, Math.sin(time * 0.17) * 0.003);
    return;
  }

  if (game.over) {
    world.camera.rotation.set(player.pitch, player.yaw, 0);
    return;
  }

  const look = input.consumeLook();
  player.yaw += look.yaw;
  player.pitch = clamp(player.pitch + look.pitch, -1.32, 1.24);

  const stickForward = input.touchStick.active ? input.touchStick.y : 0;
  const stickRight = input.touchStick.active ? input.touchStick.x : 0;
  const forwardInput = clamp(input.forward + stickForward, -1, 1);
  const rightInput = clamp(input.right + stickRight, -1, 1);
  const verticalInput = input.vertical;
  const boost = input.sprinting ? 1.9 : 1;
  const speed = 7.2 * boost;

  lookVector.set(
    -Math.sin(player.yaw) * Math.cos(player.pitch),
    Math.sin(player.pitch),
    -Math.cos(player.yaw) * Math.cos(player.pitch)
  ).normalize();
  rightVector.set(Math.cos(player.yaw), 0, -Math.sin(player.yaw)).normalize();

  moveVector.set(0, 0, 0);
  moveVector.addScaledVector(lookVector, forwardInput);
  moveVector.addScaledVector(rightVector, rightInput);
  moveVector.addScaledVector(upVector, verticalInput * 0.78);
  if (moveVector.lengthSq() > 1) moveVector.normalize();
  moveVector.multiplyScalar(speed);

  player.velocity.x = damp(player.velocity.x, moveVector.x, 3.2, dt);
  player.velocity.y = damp(player.velocity.y, moveVector.y, 3.2, dt);
  player.velocity.z = damp(player.velocity.z, moveVector.z, 3.2, dt);

  const current = new THREE.Vector3(
    Math.sin(time * 0.13 + player.position.z * 0.02) * 0.42,
    Math.sin(time * 0.09) * 0.12,
    Math.cos(time * 0.11 + player.position.x * 0.02) * 0.42
  );
  player.position.addScaledVector(player.velocity, dt);
  player.position.addScaledVector(current, dt);

  const radius = Math.hypot(player.position.x, player.position.z);
  if (radius > 232) {
    const scale = 232 / radius;
    player.position.x *= scale;
    player.position.z *= scale;
  }
  const floor = terrainHeight(player.position.x, player.position.z) + 2.8;
  player.position.y = clamp(player.position.y, Math.max(-112, floor), -1.1);

  const bobAmount = clamp(player.velocity.length() / 7.2, 0, 1);
  const bob = Math.sin(time * 2.1) * 0.075 * bobAmount;
  const sway = Math.sin(time * 1.3) * 0.035 * bobAmount;
  const shake = game.shake;
  if (shake > 0) game.shake = Math.max(0, shake - dt * 1.8);
  const shakeX = (Math.random() - 0.5) * shake * 0.38;
  const shakeY = (Math.random() - 0.5) * shake * 0.3;
  const shakeZ = (Math.random() - 0.5) * shake * 0.18;

  world.camera.position.set(
    player.position.x + sway + shakeX,
    player.position.y + bob + shakeY,
    player.position.z + shakeZ
  );
  world.camera.rotation.set(
    player.pitch + Math.sin(time * 1.7) * 0.0025,
    player.yaw,
    -rightInput * 0.018 + Math.sin(time * 1.1) * 0.003 + Math.sin(time * 62) * shake * 0.035
  );

  if (input.consumePulse()) firePulse();
}

function updateIdleTitle() {
  // The title screen sits over a live feed of the Drift.
  if (game.started) return;
  if (input.consumePulse()) {
    // Input is intentionally inert before the dive begins.
  }
}

let last = performance.now();
let lastTitleRender = 0;

function animate(now) {
  requestAnimationFrame(animate);
  const rawDt = Math.min((now - last) / 1000, 0.25);
  const dt = Math.min(rawDt, 0.1);
  last = now;
  game.elapsed += rawDt;
  const time = game.elapsed;

  if (game.started && !game.over) updatePlayer(dt, time);
  else updatePlayer(dt, time);
  updateIdleTitle();

  creatures.update(dt, time, player.position, player.velocity);
  updateScan(rawDt, time);
  world.update(dt, time, world.camera.position, player.velocity, game.scanTarget, input.scanHeld && !!game.scanTarget);
  updateHUD(rawDt, time);

  if (!game.started) {
    // Keep the title feed alive but leave the input layer untouched.
  }

  if (game.started || now - lastTitleRender > 140) {
    world.render();
    lastTitleRender = now;
  }
}

// Expose a tiny, explicit debug surface for capture tooling and remixes.
window.__HALOVALE__ = {
  world,
  creatures,
  player,
  game,
  input,
  startGame,
  firePulse,
  get ready() { return game.started; },
};

startButton.addEventListener('pointerdown', startGame);
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', () => window.location.reload());
soundButton.addEventListener('click', () => {
  const muted = audio.toggle();
  soundButton.classList.toggle('muted', muted);
  soundButton.setAttribute('aria-label', muted ? 'Unmute sound' : 'Toggle sound');
});
input.onFirstInteraction = () => {
  if (!audio.started) audio.start();
};

if (isCoarse) {
  const titleHint = document.querySelector('.title-bottom p');
  if (titleHint) titleHint.innerHTML = 'DRAG TO LOOK <span>·</span> TAP TO DIVE';
  titleScreen.addEventListener('pointerdown', (event) => {
    if (event.target.closest('button, a, input')) return;
    startGame();
  });
}

// First frame: resolve the title composition immediately, then lift the loader.
world.camera.position.copy(player.position);
world.camera.rotation.set(player.pitch, player.yaw, 0);
creatures.update(0, 0, player.position, player.velocity);
world.update(0, 0, world.camera.position, player.velocity, null, false);
world.render();
updateHUD(0, 0);
updateMissionUI();
requestAnimationFrame(animate);
window.setTimeout(() => loading.classList.add('done'), 260);

window.addEventListener('keydown', (event) => {
  if (event.code === 'Enter' && !game.started) startGame();
  if (event.code === 'Escape' && document.pointerLockElement) document.exitPointerLock?.();
});
