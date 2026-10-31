import * as THREE from 'three';
import './style.css';
import { createShark } from './shark.js';
import { World } from './world.js';
import { OceanAudio } from './audio.js';

const $ = (sel) => document.querySelector(sel);
const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;
const isTouch = window.matchMedia('(pointer: coarse)').matches;

const el = {
  app: $('#app'),
  canvas: $('#game'),
  menu: $('#menu'),
  hud: $('#hud'),
  pause: $('#pause'),
  end: $('#end'),
  loading: $('#loading'),
  start: $('#start-btn'),
  sound: $('#sound-btn'),
  soundLabel: $('#sound-label'),
  mute: $('#mute-btn'),
  pauseBtn: $('#pause-btn'),
  resume: $('#resume-btn'),
  restart: $('#restart-btn'),
  again: $('#again-btn'),
  continue: $('#continue-btn'),
  score: $('#score'),
  best: $('#best-score'),
  comboPill: $('#combo-pill'),
  combo: $('#combo'),
  comboBar: $('#combo-bar'),
  missionCount: $('#mission-count'),
  missionTitle: $('#mission-title'),
  missionTrack: $('#mission-track'),
  hungerValue: $('#hunger-value'),
  hungerBar: $('#hunger-bar'),
  vitalityValue: $('#vitality-value'),
  vitalityBar: $('#vitality-bar'),
  depth: $('#depth-value'),
  zone: $('#zone-label'),
  speed: $('#speed-value'),
  boostBar: $('#boost-bar'),
  radar: $('#radar'),
  alert: $('#alert'),
  alertText: $('#alert-text'),
  feed: $('#event-feed'),
  reticle: $('#target-reticle'),
  reticleLabel: $('#reticle-label'),
  biteHint: $('#bite-hint'),
  controlMini: $('#control-mini'),
  damageFlash: $('#damage-flash'),
  surfaceFlash: $('#surface-flash'),
  pauseScore: $('#pause-score'),
  pauseSeals: $('#pause-seals'),
  pauseDepth: $('#pause-depth'),
  endEyebrow: $('#end-eyebrow'),
  endCode: $('#end-code'),
  endTitle: $('#end-title'),
  endCopy: $('#end-copy'),
  endScore: $('#end-score'),
  endSeals: $('#end-seals'),
  endCombo: $('#end-combo'),
  endDepth: $('#end-depth'),
  joystick: $('#joystick'),
  joystickKnob: $('#joystick-knob'),
  rise: $('#rise-btn'),
  dive: $('#dive-btn'),
  boost: $('#boost-btn'),
  bite: $('#bite-btn'),
};

/* ──────────────────────────────────────────────────────────────
   Renderer and scene
   ────────────────────────────────────────────────────────────── */
let renderer;
try {
  renderer = new THREE.WebGLRenderer({
    canvas: el.canvas,
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isTouch ? 1.35 : 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.shadowMap.enabled = false;
} catch (error) {
  document.body.innerHTML = '<div style="display:grid;place-items:center;height:100vh;background:#03151c;color:#edf5ee;font-family:sans-serif;text-align:center;padding:30px"><div><h1>APEX</h1><p>This expedition needs WebGL. Please try a modern browser with hardware acceleration enabled.</p></div></div>';
  throw error;
}

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2('#06333d', 0.014);
const camera = new THREE.PerspectiveCamera(61, window.innerWidth / window.innerHeight, 0.1, 1100);
camera.position.set(9, -6.4, 11);

const world = new World(scene, renderer);
const shark = createShark();
scene.add(shark);

const audio = new OceanAudio();
const lamp = new THREE.PointLight('#b5ffe9', 0.8, 18, 2);
scene.add(lamp);

const sharkState = shark.userData;

/* ──────────────────────────────────────────────────────────────
   Game state and player
   ────────────────────────────────────────────────────────────── */
const game = {
  mode: 'menu',
  score: 0,
  shownScore: 0,
  combo: 1,
  comboCount: 0,
  comboTimer: 0,
  longestCombo: 1,
  seals: 0,
  goal: 6,
  fishEaten: 0,
  hunger: 82,
  vitality: 100,
  boost: 100,
  elapsed: 0,
  depthRecord: 0,
  breaches: 0,
  freeHunt: false,
  finishing: 0,
  warning: 0,
  shake: 0,
  best: Number(localStorage.getItem('apex-best') || 0),
  shipAlertCooldown: 0,
  hungerWarned: false,
  surfaceState: false,
  lastUnderwaterAudio: -1,
};

const player = {
  pos: new THREE.Vector3(0, -8.2, 0),
  yaw: Math.PI / 2,
  targetYaw: Math.PI / 2,
  pitch: -0.02,
  targetPitch: -0.02,
  speed: 5,
  roll: 0,
  airborne: false,
  vy: 0,
  biteCooldown: 0,
  pendingBite: 0,
  breachCooldown: 0,
  boosting: false,
  turn: 0,
};

const keys = new Set();
const touch = {
  active: false,
  x: 0,
  y: 0,
  forward: 0,
  vertical: 0,
  boost: false,
  drag: null,
  pointerId: null,
};

const cameraLook = new THREE.Vector3(-4, -7.3, 0);
const desiredCamera = new THREE.Vector3();
const lookTarget = new THREE.Vector3();
const tempA = new THREE.Vector3();
const tempB = new THREE.Vector3();
const tempC = new THREE.Vector3();

function getForward(yaw = player.yaw, pitch = player.pitch) {
  const cp = Math.cos(pitch);
  return tempA.set(-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp);
}

function forwardCopy(yaw = player.yaw, pitch = player.pitch) {
  const cp = Math.cos(pitch);
  return new THREE.Vector3(-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp);
}

function signedAngle(a) {
  return Math.atan2(Math.sin(a), Math.cos(a));
}

/* ──────────────────────────────────────────────────────────────
   Audio toggles
   ────────────────────────────────────────────────────────────── */
let soundEnabled = true;
function refreshSoundUI() {
  el.sound.classList.toggle('sound-off', !soundEnabled);
  el.sound.setAttribute('aria-pressed', String(soundEnabled));
  el.soundLabel.textContent = soundEnabled ? 'Sound on' : 'Sound off';
  el.mute.classList.toggle('muted', !soundEnabled);
}
function toggleSound(force) {
  audio.init();
  soundEnabled = force === undefined ? !soundEnabled : force;
  audio.setEnabled(soundEnabled);
  refreshSoundUI();
}
el.sound.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleSound();
});
el.mute.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleSound();
});

/* ──────────────────────────────────────────────────────────────
   Start / reset
   ────────────────────────────────────────────────────────────── */
function resetWorldEntities() {
  for (const seal of world.seals) {
    seal.active = true;
    seal.model.visible = true;
    seal.pos.copy(seal.initial);
    seal.home.copy(seal.initial);
    seal.angle = Math.random() * Math.PI * 2;
    seal.radius = 7 + Math.random() * 10;
    seal.respawn = 0;
  }
  for (const school of world.fishSchools) {
    for (const fish of school.fish) {
      fish.active = true;
      fish.pos.set(
        school.anchor.x + (Math.random() - 0.5) * 12,
        school.anchor.y + (Math.random() - 0.5) * 4,
        school.anchor.z + (Math.random() - 0.5) * 12
      );
      fish.vel.set(0, 0, 0);
    }
  }
}

function resetGame() {
  game.score = 0;
  game.shownScore = 0;
  game.combo = 1;
  game.comboCount = 0;
  game.comboTimer = 0;
  game.longestCombo = 1;
  game.seals = 0;
  game.goal = 6;
  game.fishEaten = 0;
  game.hunger = 82;
  game.vitality = 100;
  game.boost = 100;
  game.elapsed = 0;
  game.depthRecord = 0;
  game.breaches = 0;
  game.freeHunt = false;
  game.finishing = 0;
  game.warning = 0;
  game.shake = 0;
  game.shipAlertCooldown = 0;
  game.hungerWarned = false;
  game.best = Number(localStorage.getItem('apex-best') || 0);

  player.pos.set(0, -12.5, 4);
  player.yaw = 0;
  player.targetYaw = 0;
  player.pitch = -0.055;
  player.targetPitch = -0.055;
  player.speed = 5.5;
  player.roll = 0;
  player.airborne = false;
  player.vy = 0;
  player.biteCooldown = 0;
  player.pendingBite = 0;
  player.breachCooldown = 0;
  player.boosting = false;
  player.turn = 0;

  camera.position.set(0, -8.3, 18);
  cameraLook.set(0, -8.7, -2);
  resetWorldEntities();
  updateMissionUI();
  updateHUD(true);
}

function startGame() {
  audio.init();
  game.mode = 'playing';
  for (const school of world.fishSchools) {
    school.body.visible = true;
    school.tail.visible = true;
  }
  resetGame();
  el.menu.classList.add('hidden');
  el.pause.classList.add('hidden');
  el.end.classList.add('hidden');
  el.app.classList.add('playing');
  el.loading.classList.add('done');
  document.body.classList.add('playing');
  el.controlMini.classList.remove('fade');
  window.setTimeout(() => el.controlMini.classList.add('fade'), 11000);
  showEvent('THE HUNT IS ON', 'small');
  audio.event('ui');
}

el.start.addEventListener('click', startGame);
el.pauseBtn.addEventListener('click', pauseGame);
el.resume.addEventListener('click', resumeGame);
el.restart.addEventListener('click', () => {
  el.pause.classList.add('hidden');
  startGame();
});
el.again.addEventListener('click', () => {
  el.end.classList.add('hidden');
  startGame();
});
el.continue.addEventListener('click', continueHunt);

/* ──────────────────────────────────────────────────────────────
   Pause / end
   ────────────────────────────────────────────────────────────── */
function pauseGame() {
  if (game.mode !== 'playing') return;
  game.mode = 'paused';
  el.pause.classList.remove('hidden');
  el.pauseScore.textContent = Math.round(game.score).toLocaleString('en-US');
  el.pauseSeals.textContent = game.seals;
  el.pauseDepth.textContent = `${Math.round(game.depthRecord)} M`;
  if (document.pointerLockElement) document.exitPointerLock();
  audio.event('ui');
}

function resumeGame() {
  if (game.mode !== 'paused') return;
  game.mode = 'playing';
  el.pause.classList.add('hidden');
  audio.init();
}

function continueHunt() {
  el.end.classList.add('hidden');
  el.app.classList.add('playing');
  game.mode = 'playing';
  game.freeHunt = true;
  game.combo = 1;
  game.comboTimer = 0;
  game.hunger = Math.max(game.hunger, 56);
  game.vitality = 100;
  el.missionTitle.textContent = 'ENDLESS HUNT';
  el.missionCount.textContent = 'OPEN OCEAN';
  document.querySelectorAll('.mission-track i').forEach(bar => bar.classList.add('done'));
}

function endGame(reason) {
  if (game.mode === 'ended') return;
  game.mode = 'ended';
  if (document.pointerLockElement) document.exitPointerLock();
  if (game.score > game.best) {
    game.best = Math.round(game.score);
    localStorage.setItem('apex-best', String(game.best));
  }
  game.best = Math.max(game.best, Math.round(game.score));
  el.best.textContent = `BEST ${game.best.toLocaleString('en-US')}`;

  if (reason === 'win') {
    el.endEyebrow.textContent = 'THE OCEAN REMEMBERS';
    el.endCode.textContent = 'APEX / 001';
    el.endTitle.innerHTML = 'APEX<br /><em>ACHIEVED.</em>';
    el.endCopy.textContent = 'Six seals. One perfect hunt. The surface belongs to you.';
    el.continue.style.display = '';
    audio.event('complete');
  } else if (reason === 'hunger') {
    el.endEyebrow.textContent = 'THE CURRENT TAKES ALL';
    el.endCode.textContent = 'SIGNAL LOST';
    el.endTitle.innerHTML = 'THE HUNGER<br /><em>WINS.</em>';
    el.endCopy.textContent = 'You waited too long between strikes. The deep goes quiet.';
    el.continue.style.display = 'none';
    audio.event('danger');
  } else {
    el.endEyebrow.textContent = 'A SHADOW IN THE WASH';
    el.endCode.textContent = 'HULL CONTACT';
    el.endTitle.innerHTML = 'CAST<br /><em>ADRIFT.</em>';
    el.endCopy.textContent = 'The propellers found you before the school did. The hunt ends here.';
    el.continue.style.display = 'none';
    audio.event('danger');
  }

  el.endScore.textContent = Math.round(game.score).toLocaleString('en-US');
  el.endSeals.textContent = game.seals;
  el.endCombo.textContent = `×${game.longestCombo}`;
  el.endDepth.textContent = `${Math.round(game.depthRecord)} M`;
  el.end.classList.remove('hidden');
  el.app.classList.remove('playing');
}

/* ──────────────────────────────────────────────────────────────
   HUD helpers
   ────────────────────────────────────────────────────────────── */
function updateMissionUI() {
  el.missionCount.textContent = game.freeHunt ? 'OPEN OCEAN' : `${game.seals} / ${game.goal} SEALS`;
  const bars = el.missionTrack.querySelectorAll('i');
  bars.forEach((bar, i) => bar.classList.toggle('done', game.freeHunt || i < game.seals));
  el.missionTitle.textContent = game.freeHunt ? 'ENDLESS HUNT' : 'FEED THE APEX';
}

function updateHUD(force = false) {
  game.shownScore += (game.score - game.shownScore) * 0.2;
  if (Math.abs(game.score - game.shownScore) < 1) game.shownScore = game.score;
  el.score.textContent = Math.round(game.shownScore).toLocaleString('en-US');
  el.best.textContent = `BEST ${Math.max(game.best, Math.round(game.score)).toLocaleString('en-US')}`;

  el.combo.textContent = `×${game.combo}`;
  el.comboPill.classList.toggle('on', game.combo > 1);
  el.comboBar.style.transform = `scaleX(${clamp(game.comboTimer / 5, 0, 1)})`;

  el.hungerValue.textContent = Math.round(game.hunger);
  el.hungerBar.style.width = `${clamp(game.hunger, 0, 100)}%`;
  el.vitalityValue.textContent = Math.round(game.vitality);
  el.vitalityBar.style.width = `${clamp(game.vitality, 0, 100)}%`;
  el.hungerBar.closest('.meter-block').classList.toggle('low', game.hunger < 25);
  el.vitalityBar.closest('.meter-block').classList.toggle('low', game.vitality < 30);

  const depth = Math.max(0, -player.pos.y);
  el.depth.textContent = Math.round(depth);
  el.zone.textContent = depth < 2 ? 'SURFACE' : depth < 16 ? 'SUNLIT ZONE' : depth < 38 ? 'TWILIGHT' : 'THE ABYSS';
  el.speed.textContent = String(Math.round(player.speed * 1.55)).padStart(2, '0');
  el.boostBar.style.width = `${clamp(game.boost, 0, 100)}%`;
  el.boostBar.style.background = game.boost < 20 ? '#ff6a4d' : '';
}

function showEvent(html, className = '') {
  const node = document.createElement('div');
  node.className = `event ${className}`.trim();
  node.innerHTML = html;
  el.feed.appendChild(node);
  window.setTimeout(() => node.remove(), 2200);
}

function alert(text) {
  el.alertText.textContent = text;
  el.alert.classList.add('on');
}

function clearAlert() {
  el.alert.classList.remove('on');
}

/* ──────────────────────────────────────────────────────────────
   Feeding, combo, scoring
   ────────────────────────────────────────────────────────────── */
function addCombo(amount) {
  game.comboCount += amount;
  game.comboTimer = 5;
  game.combo = Math.min(6, 1 + Math.floor(game.comboCount / 3));
  game.longestCombo = Math.max(game.longestCombo, game.combo);
}

function takeFood(result) {
  if (result.fish > 0) {
    game.fishEaten += result.fish;
    const points = 45 * result.fish * game.combo;
    game.score += points;
    game.hunger = Math.min(100, game.hunger + 1.8 * result.fish);
    addCombo(result.fish);
    audio.crunch();
    if (result.fish > 1) {
      showEvent(`SCHOOL TAKEN <b>+${Math.round(points)}</b>`, 'small');
    }
  }
  if (result.seal) {
    game.seals += 1;
    const points = 820 * game.combo;
    game.score += points;
    game.hunger = Math.min(100, game.hunger + 27);
    addCombo(2);
    audio.crunch();
    audio.event('seal');
    showEvent(`SEAL TAKEN <b>+${Math.round(points)}</b>`, 'gold');
    updateMissionUI();
    game.shake = 0.28;
    if (!game.freeHunt && game.seals >= game.goal && game.finishing <= 0) {
      game.finishing = 1.8;
      showEvent('APEX ACHIEVED', 'gold');
      audio.event('complete');
      setTimeout(() => {
        if (game.mode === 'playing') endGame('win');
      }, 2100);
    }
  }
  if (game.combo > 1 && (result.fish || result.seal)) {
    // A tiny pulse reward for maintaining the streak.
    el.comboPill.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.14)' }, { transform: 'scale(1)' }],
      { duration: 260, easing: 'ease-out' }
    );
  }
}

function triggerBite() {
  if (game.mode !== 'playing' || player.biteCooldown > 0 || player.airborne) return;
  player.biteCooldown = 0.52;
  player.pendingBite = 0.075;
  sharkState.bite();
  audio.bite();
}

function resolveBite() {
  const forward = forwardCopy();
  const mouth = player.pos.clone().addScaledVector(forward, 2.75);
  mouth.y -= 0.24;
  const result = world.bite(mouth, forward);
  if (result.fish || result.seal) {
    takeFood(result);
  } else {
    world.particles.spawn('bubble', mouth, 3, 0.6);
  }
}

/* ──────────────────────────────────────────────────────────────
   Player update
   ────────────────────────────────────────────────────────────── */
function triggerBreach() {
  if (player.airborne || player.breachCooldown > 0) return;
  player.airborne = true;
  player.vy = 5.8 + player.speed * 0.32;
  player.breachCooldown = 5.5;
  game.breaches += 1;
  game.boost = Math.max(0, game.boost - 10);
  game.shake = 0.34;
  world.splash(player.pos, 1.1 + player.speed * 0.015);
  audio.splash();
  flashSurface();
  showEvent('BREACH', 'small');
  if (player.pos.y > -2.2) player.pos.y = -2.2;
}

function flashSurface() {
  el.surfaceFlash.animate(
    [{ opacity: 0.0 }, { opacity: 0.72 }, { opacity: 0 }],
    { duration: 720, easing: 'ease-out' }
  );
}

function updatePlayer(dt) {
  player.biteCooldown = Math.max(0, player.biteCooldown - dt);
  player.breachCooldown = Math.max(0, player.breachCooldown - dt);
  if (player.pendingBite > 0) {
    player.pendingBite -= dt;
    if (player.pendingBite <= 0) resolveBite();
  }

  const keyTurn = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0);
  const keyForward = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0);
  const turnInput = clamp(keyTurn + touch.x, -1, 1);
  const forwardInput = clamp(keyForward + touch.forward, -1, 1);
  player.turn += (turnInput - player.turn) * Math.min(1, dt * 7);

  if (!player.airborne) {
    player.targetYaw -= turnInput * 1.25 * dt;
  } else {
    player.targetYaw -= turnInput * 0.45 * dt;
  }

  const rise = keys.has('Space') || touch.vertical > 0;
  const dive = keys.has('KeyC') || keys.has('ControlLeft') || touch.vertical < 0;
  if (!player.airborne) {
    if (rise) player.targetPitch += dt * 0.95;
    if (dive) player.targetPitch -= dt * 0.95;
    if (!rise && !dive) player.targetPitch += (-0.03 - player.targetPitch) * dt * 0.14;
  }
  player.targetPitch = clamp(player.targetPitch, -0.98, 0.98);

  const boostHeld = keys.has('ShiftLeft') || keys.has('ShiftRight') || touch.boost;
  player.boosting = boostHeld && game.boost > 0.5 && !player.airborne;
  if (player.boosting) {
    game.boost -= 26 * dt;
    if (game.boost < 0) game.boost = 0;
  } else {
    game.boost = Math.min(100, game.boost + 12 * dt);
  }

  let targetSpeed = 5.2 + Math.max(0, forwardInput) * 8.4 + Math.min(0, forwardInput) * 2.3;
  if (player.boosting) targetSpeed += 8.8;
  targetSpeed = clamp(targetSpeed, 2.6, 22.5);
  player.speed += (targetSpeed - player.speed) * Math.min(1, dt * 1.7);

  const yawDelta = signedAngle(player.targetYaw - player.yaw);
  player.yaw += yawDelta * Math.min(1, dt * (player.airborne ? 2.6 : 5.4));
  player.pitch += (player.targetPitch - player.pitch) * Math.min(1, dt * 5.2);
  player.roll += (-turnInput * 0.28 - player.roll) * Math.min(1, dt * 4);

  const forward = forwardCopy();
  if (player.airborne) {
    player.pos.addScaledVector(forward, player.speed * dt);
    player.pos.y += player.vy * dt;
    player.vy -= 9.8 * dt;
    player.targetPitch = clamp(Math.atan2(player.vy, Math.max(5, player.speed)), -0.9, 0.9);
    player.pitch += (player.targetPitch - player.pitch) * Math.min(1, dt * 2.2);
    if (player.pos.y <= -1.2 && player.vy < 0) {
      player.pos.y = -1.2;
      player.airborne = false;
      player.vy = 0;
      player.targetPitch = -0.12;
      player.speed *= 0.78;
      game.shake = 0.42;
      world.splash(player.pos, 1.25);
      audio.splash();
      flashSurface();
      showEvent('SPLASH DOWN', 'small');
    }
  } else {
    player.pos.addScaledVector(forward, player.speed * dt);
    if (player.pos.y > -1.35) {
      if (player.pitch > 0.18 && player.speed > 10.5 && player.breachCooldown <= 0 && (player.boosting || player.speed > 16)) {
        triggerBreach();
      } else {
        player.pos.y = -1.35;
        if (player.pitch > 0) {
          player.pitch = -0.02;
          player.targetPitch = Math.min(player.targetPitch, -0.08);
        }
      }
    }
  }

  if (player.pos.y < -57.5) {
    player.pos.y = -57.5;
    player.pitch = Math.max(0.08, player.pitch);
    player.targetPitch = Math.max(0.08, player.targetPitch);
  }
  if (player.pos.y > 9) {
    player.pos.y = 9;
    player.vy = Math.min(player.vy, 0);
  }

  // The open shelf curves back on itself; turn the animal gently inland.
  const edge = 330;
  if (Math.abs(player.pos.x) > edge || Math.abs(player.pos.z) > edge) {
    const toCenter = new THREE.Vector3(-player.pos.x, 0, -player.pos.z).normalize();
    const current = forwardCopy(player.yaw, 0);
    const cross = current.x * toCenter.z - current.z * toCenter.x;
    player.targetYaw += Math.sign(cross) * dt * 0.8;
    if (game.shipAlertCooldown <= 0) {
      alert('THE SHELF ENDS — TURN BACK');
      game.shipAlertCooldown = 5;
    }
  }

  const depth = Math.max(0, -player.pos.y);
  game.depthRecord = Math.max(game.depthRecord, depth);

  // Hunger and the danger of the surface traffic.
  game.hunger -= (0.55 + (player.boosting ? 0.6 : 0)) * dt;
  if (game.hunger < 22 && !game.hungerWarned) {
    game.hungerWarned = true;
    showEvent('HUNGER CRITICAL', 'small');
    audio.event('danger');
  }
  if (game.hunger < 40) game.hungerWarned = false;

  const shipDanger = world.shipDanger(player.pos);
  const nearSurface = player.pos.y > -9;
  if (shipDanger.danger > 0 && nearSurface) {
    const drain = shipDanger.danger * (player.airborne ? 25 : 15) * dt;
    game.vitality -= drain;
    game.shake = Math.max(game.shake, 0.18 + shipDanger.danger * 0.16);
    el.damageFlash.style.opacity = String(0.12 + shipDanger.danger * 0.25);
    if (game.shipAlertCooldown <= 0) {
      alert(player.airborne ? 'HULL STRIKE — TOO CLOSE' : 'PROPELLER WASH — DIVE DEEP');
      audio.event('danger');
      game.shipAlertCooldown = 4.5;
    }
  } else {
    game.vitality = Math.min(100, game.vitality + 2.2 * dt);
    el.damageFlash.style.opacity = '0';
    if (game.shipAlertCooldown <= 0) clearAlert();
  }

  if (game.shipAlertCooldown > 0) {
    game.shipAlertCooldown -= dt;
    if (game.shipAlertCooldown <= 0 && shipDanger.danger <= 0) clearAlert();
  }

  if (game.comboTimer > 0) {
    game.comboTimer -= dt;
    if (game.comboTimer <= 0) {
      game.combo = 1;
      game.comboCount = 0;
    }
  }

  if (game.hunger <= 0) {
    game.hunger = 0;
    endGame('hunger');
  } else if (game.vitality <= 0) {
    game.vitality = 0;
    endGame('danger');
  }

  if (game.finishing > 0) {
    game.finishing -= dt;
    if (game.finishing <= 0) endGame('win');
  }

  game.shake = Math.max(0, game.shake - dt * 1.8);

  // Sync the model.
  shark.position.copy(player.pos);
  shark.rotation.set(player.pitch, player.yaw, player.roll, 'YXZ');
  sharkState.update(dt, time, player.speed, player.turn);

  // Keep a soft key light above the animal for readable silhouettes in the deep.
  lamp.position.copy(player.pos);
  lamp.position.y += 1.9;
  lamp.position.z += 1.4;
  lamp.intensity = 0.3 + Math.sin(time * 2.1) * 0.05;

  // Audio space.
  const above = camera.position.y > 0.12;
  if ((above ? 0 : 1) !== game.lastUnderwaterAudio) {
    game.lastUnderwaterAudio = above ? 0 : 1;
    audio.setUnderwater(above ? 0 : 1);
  }
  const nearShip = world.nearestShip(player.pos);
  audio.setShipProximity(clamp(1 - nearShip.distance / 130, 0, 1));
  audio.sonar();
  audio.whale();
}

/* ──────────────────────────────────────────────────────────────
   Camera
   ────────────────────────────────────────────────────────────── */
function updateCamera(dt) {
  const forward = forwardCopy();
  const side = tempB.set(Math.cos(player.yaw), 0, -Math.sin(player.yaw));
  const portrait = camera.aspect < 0.82;
  let damping;

  if (player.airborne) {
    // Keep the breach in frame: the animal clears the ceiling in a hurry.
    desiredCamera.copy(player.pos).addScaledVector(forward, -10.6);
    desiredCamera.y = Math.max(desiredCamera.y + 4.4, 2.4);
    desiredCamera.addScaledVector(side, portrait ? 3.8 : 6.1);
    lookTarget.copy(player.pos).addScaledVector(forward, 1.9);
    lookTarget.y += 0.45;
    damping = 1 - Math.exp(-8.4 * dt);
  } else {
    desiredCamera.copy(player.pos).addScaledVector(forward, portrait ? -9.7 : -7.6);
    desiredCamera.y += portrait ? 2.25 : 1.45;
    desiredCamera.addScaledVector(side, (portrait ? 2.35 : 4.6) + Math.sin(time * 0.55) * 0.11);
    desiredCamera.y = Math.min(desiredCamera.y, -0.85);
    desiredCamera.y = Math.max(desiredCamera.y, -55.5);

    lookTarget.copy(player.pos).addScaledVector(forward, portrait ? 8.1 : 7.0);
    lookTarget.y += portrait ? 1.75 : 1.15;
    lookTarget.y = Math.min(lookTarget.y, -0.4);
    damping = 1 - Math.exp(-5.2 * dt);
  }

  camera.position.lerp(desiredCamera, damping);
  cameraLook.lerp(lookTarget, 1 - Math.exp(-7.5 * dt));

  // Subtle camera shake from speed, danger and impacts.
  const speedShake = Math.max(0, player.speed - 11) * 0.006;
  const shake = game.shake;
  if (shake > 0 || speedShake > 0) {
    camera.position.x += (Math.random() - 0.5) * (shake * 0.22 + speedShake);
    camera.position.y += (Math.random() - 0.5) * (shake * 0.17 + speedShake * 0.7);
    camera.position.z += (Math.random() - 0.5) * (shake * 0.18 + speedShake);
  }
  camera.lookAt(cameraLook);
  camera.rotation.z += player.roll * 0.12 + Math.sin(time * 0.7) * 0.003;

  let fovTarget = (camera.aspect < 0.82 ? 67 : 60) + (player.speed - 5) * 0.65;
  if (player.boosting) fovTarget += 4;
  if (camera.position.y > 0.1) fovTarget += 2.5;
  camera.fov += (fovTarget - camera.fov) * Math.min(1, dt * 3.5);
  camera.updateProjectionMatrix();

  const above = camera.position.y > 0.12;
  if (above !== game.surfaceState) {
    game.surfaceState = above;
    document.body.classList.toggle('above', above);
    el.app.classList.toggle('above', above);
  }
}

/* ──────────────────────────────────────────────────────────────
   Menu camera
   ────────────────────────────────────────────────────────────── */
function updateMenu(dt) {
  const t = time;
  const bob = Math.sin(t * 0.18);
  player.pos.set(Math.sin(t * 0.09) * 0.9, -8.35 + Math.sin(t * 0.31) * 0.22, Math.cos(t * 0.07) * 0.6);
  player.yaw = Math.PI / 2 + Math.sin(t * 0.11) * 0.08;
  player.pitch = Math.sin(t * 0.2) * 0.025;
  player.speed = 4.4;
  player.turn = Math.sin(t * 0.3) * 0.1;
  shark.position.copy(player.pos);
  shark.rotation.set(player.pitch, player.yaw, Math.sin(t * 0.23) * 0.03, 'YXZ');
  sharkState.update(dt, t, 4.4, 0);

  const portrait = camera.aspect < 0.82;
  if (portrait) {
    camera.position.set(8.4 + Math.sin(t * 0.06) * 0.8, -5.05 + bob * 0.18, 12.3 + Math.cos(t * 0.06) * 0.6);
    cameraLook.set(-1.25 + Math.sin(t * 0.09) * 0.45, -5.85 + bob * 0.08, 0);
  } else {
    camera.position.set(7.7 + Math.sin(t * 0.06) * 0.95, -6.62 + bob * 0.22, 9.5 + Math.cos(t * 0.06) * 0.7);
    cameraLook.set(-3.35 + Math.sin(t * 0.09) * 0.6, -7.55 + bob * 0.1, 0);
  }
  camera.lookAt(cameraLook);
  camera.rotation.z += Math.sin(t * 0.11) * 0.006;
  const targetFov = camera.aspect < 0.82 ? 72 : window.innerWidth < 720 ? 68 : 57;
  camera.fov += (targetFov - camera.fov) * Math.min(1, dt * 1.5);
  camera.updateProjectionMatrix();

  world.fishSchools.forEach((school, index) => {
    school.body.visible = index === 0;
    school.tail.visible = index === 0;
  });
  world.update(dt, t, shark.position, camera, 4.4);
  audio.setUnderwater(1);
}

/* ──────────────────────────────────────────────────────────────
   Targeting and radar
   ────────────────────────────────────────────────────────────── */
function isVisibleTarget(pos) {
  const forward = camera.getWorldDirection(tempC);
  const to = pos.clone().sub(camera.position);
  const dist = to.length();
  to.normalize();
  return dist > 0.1 && to.dot(forward) > 0.25;
}

function updateTargeting() {
  if (game.mode !== 'playing') {
    el.reticle.classList.remove('on', 'ready');
    el.biteHint.classList.remove('ready');
    return;
  }
  let target = null;
  let label = '';
  let distance = Infinity;
  const sealInfo = world.nearestSeal(player.pos, 58);
  if (sealInfo && isVisibleTarget(sealInfo.seal.pos)) {
    target = sealInfo.seal.pos;
    distance = sealInfo.distance;
    label = 'SEAL';
  }
  if (!target) {
    const fishInfo = world.nearestFish(player.pos, 13);
    if (fishInfo && isVisibleTarget(fishInfo.fish.pos)) {
      target = fishInfo.fish.pos;
      distance = fishInfo.distance;
      label = 'BAIT BALL';
    }
  }
  if (!target) {
    el.reticle.classList.remove('on', 'ready');
    el.biteHint.classList.remove('ready');
    return;
  }
  const projected = target.clone().project(camera);
  if (projected.z > 1 || Math.abs(projected.x) > 0.96 || Math.abs(projected.y) > 0.94) {
    el.reticle.classList.remove('on', 'ready');
    el.biteHint.classList.remove('ready');
    return;
  }
  el.reticle.style.left = `${(projected.x * 0.5 + 0.5) * 100}%`;
  el.reticle.style.top = `${(-projected.y * 0.5 + 0.5) * 100}%`;
  el.reticle.classList.add('on');
  const inRange = distance < 7;
  el.reticle.classList.toggle('ready', inRange);
  el.reticleLabel.textContent = inRange ? 'BITE RANGE' : label;
  el.biteHint.classList.toggle('ready', inRange);
}

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawRadar() {
  const c = el.radar;
  const ctx = c.getContext('2d');
  const w = c.width;
  const h = c.height;
  const cx = w / 2;
  const cy = h / 2;
  const r = w / 2 - 4;
  const scale = (w / 2 - 18) / 120;
  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.clip();
  const bg = ctx.createRadialGradient(cx, cy, 5, cx, cy, r);
  bg.addColorStop(0, 'rgba(6,35,39,.76)');
  bg.addColorStop(1, 'rgba(2,15,20,.42)');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  // Rotating sonar sweep.
  const sweep = (time * 0.55) % (Math.PI * 2);
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(sweep);
  const grad = ctx.createLinearGradient(0, 0, 0, -r);
  grad.addColorStop(0, 'rgba(138,255,235,.0)');
  grad.addColorStop(1, 'rgba(138,255,235,.2)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, r, -Math.PI / 2 - 0.55, -Math.PI / 2);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(143,247,229,.58)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -r);
  ctx.stroke();
  ctx.restore();

  // Rings and cross.
  ctx.strokeStyle = 'rgba(190,237,227,.15)';
  ctx.lineWidth = 1;
  for (const rr of [r * 0.34, r * 0.67, r * 0.98]) {
    ctx.beginPath();
    ctx.arc(cx, cy, rr, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(cx - r, cy); ctx.lineTo(cx + r, cy);
  ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy + r);
  ctx.strokeStyle = 'rgba(190,237,227,.08)';
  ctx.stroke();

  const right = { x: Math.cos(player.yaw), z: -Math.sin(player.yaw) };
  const fwd = { x: -Math.sin(player.yaw), z: -Math.cos(player.yaw) };
  const project = (x, z) => {
    const dx = x - player.pos.x;
    const dz = z - player.pos.z;
    const rx = dx * right.x + dz * right.z;
    const fy = dx * fwd.x + dz * fwd.z;
    return [cx + rx * scale, cy - fy * scale];
  };

  // Fish schools as loose bait clouds.
  for (const school of world.fishSchools) {
    let active = 0;
    for (const fish of school.fish) {
      if (!fish.active) continue;
      active++;
      if (active % 9 !== 0) continue;
      const [x, y] = project(fish.pos.x, fish.pos.z);
      if (Math.hypot(x - cx, y - cy) > r - 7) continue;
      ctx.fillStyle = 'rgba(201,234,227,.5)';
      ctx.beginPath();
      ctx.arc(x, y, 1.25, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Seals.
  for (const seal of world.seals) {
    if (!seal.active) continue;
    const [x, y] = project(seal.pos.x, seal.pos.z);
    if (Math.hypot(x - cx, y - cy) > r - 8) continue;
    ctx.strokeStyle = 'rgba(245,201,120,.65)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x, y, 5.5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#f5c978';
    ctx.beginPath();
    ctx.arc(x, y, 2.3, 0, Math.PI * 2);
    ctx.fill();
  }

  // Ships with orientation.
  for (const ship of world.ships) {
    const [x, y] = project(ship.group.position.x, ship.group.position.z);
    if (Math.hypot(x - cx, y - cy) > r - 9) continue;
    const rot = ship.group.rotation.y + player.yaw;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.fillStyle = 'rgba(255,106,77,.86)';
    const len = ship.type === 'cargo' ? 8 : 5;
    roundedRect(ctx, -2, -len / 2, 4, len, 1.4);
    ctx.fill();
    ctx.restore();
  }

  // Player.
  ctx.save();
  ctx.translate(cx, cy);
  ctx.fillStyle = '#ecfff9';
  ctx.shadowColor = 'rgba(154,255,235,.7)';
  ctx.shadowBlur = 9;
  ctx.beginPath();
  ctx.moveTo(0, -8);
  ctx.lineTo(5.5, 6);
  ctx.lineTo(0, 3.5);
  ctx.lineTo(-5.5, 6);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  ctx.restore();

  // Outer ticks.
  ctx.strokeStyle = 'rgba(190,237,227,.28)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.stroke();
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    const len = i % 6 === 0 ? 5 : 2.5;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * (r - len), cy + Math.sin(a) * (r - len));
    ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    ctx.stroke();
  }
}

/* ──────────────────────────────────────────────────────────────
   Controls
   ────────────────────────────────────────────────────────────── */
function requestControl() {
  if (isTouch) return;
  if (document.pointerLockElement) return;
  if (!el.canvas.requestPointerLock) return;
  try {
    const val = el.canvas.requestPointerLock({ unadjustedMovement: true });
    if (val && typeof val.catch === 'function') val.catch(() => {});
  } catch {
    try { el.canvas.requestPointerLock(); } catch { /* drag fallback remains active */ }
  }
}

window.addEventListener('keydown', (e) => {
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  if (e.code === 'Escape') {
    if (game.mode === 'playing') pauseGame();
    else if (game.mode === 'paused') resumeGame();
    return;
  }
  if (e.code === 'KeyM') {
    toggleSound();
    return;
  }
  if (e.code === 'KeyB' || e.code === 'KeyF') {
    triggerBite();
    return;
  }
  if (e.code === 'Enter' && game.mode === 'menu') {
    startGame();
    return;
  }
  keys.add(e.code);
});

window.addEventListener('keyup', (e) => keys.delete(e.code));
window.addEventListener('blur', () => keys.clear());

el.canvas.addEventListener('mousedown', (e) => {
  if (game.mode !== 'playing' || e.button !== 0) return;
  if (!document.pointerLockElement && !isTouch) requestControl();
  triggerBite();
});

document.addEventListener('mousemove', (e) => {
  if (game.mode !== 'playing') return;
  if (document.pointerLockElement === el.canvas) {
    player.targetYaw -= e.movementX * 0.0021;
    player.targetPitch -= e.movementY * 0.0017;
    player.targetPitch = clamp(player.targetPitch, -0.98, 0.98);
  }
});

document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement === el.canvas) {
    el.controlMini.innerHTML = '<span>MOVE TO STEER</span><i></i><span>CLICK TO BITE</span><i></i><span>SHIFT TO BOOST</span>';
  }
});

// Drag fallback for browsers that deny pointer lock.
let dragState = null;
el.canvas.addEventListener('pointerdown', (e) => {
  if (game.mode !== 'playing') return;
  if (e.pointerType === 'mouse') {
    dragState = { x: e.clientX, y: e.clientY, id: e.pointerId, moved: 0 };
    el.canvas.setPointerCapture?.(e.pointerId);
  } else if (e.pointerType === 'touch' && !isTouch) {
    dragState = { x: e.clientX, y: e.clientY, id: e.pointerId, moved: 0 };
  }
});
el.canvas.addEventListener('pointermove', (e) => {
  if (game.mode !== 'playing' || !dragState || dragState.id !== e.pointerId) return;
  if (document.pointerLockElement === el.canvas) return;
  const dx = e.clientX - dragState.x;
  const dy = e.clientY - dragState.y;
  if (Math.abs(dx) + Math.abs(dy) > 2) {
    player.targetYaw -= dx * 0.004;
    player.targetPitch -= dy * 0.0032;
    player.targetPitch = clamp(player.targetPitch, -0.98, 0.98);
    dragState.x = e.clientX;
    dragState.y = e.clientY;
    dragState.moved += Math.abs(dx) + Math.abs(dy);
  }
});
const endDrag = (e) => {
  if (dragState && dragState.id === e.pointerId) dragState = null;
};
el.canvas.addEventListener('pointerup', endDrag);
el.canvas.addEventListener('pointercancel', endDrag);

// Mobile dual-stick style steering.
function setupJoystick() {
  let joystickId = null;
  const radius = 45;
  const update = (e) => {
    const rect = el.joystick.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    let dx = e.clientX - cx;
    let dy = e.clientY - cy;
    const len = Math.hypot(dx, dy);
    if (len > radius) {
      dx = (dx / len) * radius;
      dy = (dy / len) * radius;
    }
    touch.x = dx / radius;
    touch.forward = -dy / radius;
    touch.active = true;
    el.joystickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
  };
  el.joystick.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    joystickId = e.pointerId;
    el.joystick.setPointerCapture(e.pointerId);
    update(e);
  });
  el.joystick.addEventListener('pointermove', (e) => {
    if (e.pointerId !== joystickId) return;
    e.preventDefault();
    update(e);
  });
  const release = (e) => {
    if (e.pointerId !== joystickId) return;
    joystickId = null;
    touch.x = 0;
    touch.forward = 0;
    touch.active = false;
    el.joystickKnob.style.transform = 'translate(-50%, -50%)';
  };
  el.joystick.addEventListener('pointerup', release);
  el.joystick.addEventListener('pointercancel', release);
}

function bindHold(button, onDown, onUp) {
  button.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDown();
  });
  const release = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onUp();
  };
  button.addEventListener('pointerup', release);
  button.addEventListener('pointercancel', release);
  button.addEventListener('pointerleave', (e) => {
    if (e.buttons === 0) onUp();
  });
}

setupJoystick();
bindHold(el.rise, () => { touch.vertical = 1; }, () => { touch.vertical = 0; });
bindHold(el.dive, () => { touch.vertical = -1; }, () => { touch.vertical = 0; });
bindHold(el.boost, () => { touch.boost = true; }, () => { touch.boost = false; });
el.bite.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  e.stopPropagation();
  triggerBite();
});

el.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('visibilitychange', () => {
  if (document.hidden && game.mode === 'playing') pauseGame();
});

window.addEventListener('resize', () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isTouch ? 1.35 : 1.5));
  renderer.setSize(w, h);
});

/* ──────────────────────────────────────────────────────────────
   Frame loop
   ────────────────────────────────────────────────────────────── */
let lastTime = performance.now();
let time = 0;
let frameCount = 0;

function animate(now) {
  requestAnimationFrame(animate);
  const raw = Math.min((now - lastTime) / 1000, 0.05);
  lastTime = now;
  if (game.mode === 'paused') {
    renderer.render(scene, camera);
    return;
  }
  const dt = raw;
  time += dt;
  frameCount++;

  if (game.mode === 'menu') {
    updateMenu(dt);
    updateTargeting();
  } else if (game.mode === 'playing') {
    game.elapsed += dt;
    updatePlayer(dt);
    updateCamera(dt);
    world.update(dt, time, player.pos, camera, player.speed);
    updateTargeting();
    updateHUD();
    if (frameCount % 2 === 0) drawRadar();
  } else if (game.mode === 'ended') {
    // Keep the ocean alive under the results screen, but do not move the shark.
    sharkState.update(dt, time, 3.2, 0);
    camera.position.x += Math.sin(time * 0.2) * 0.0008;
    world.update(dt, time, player.pos, camera, 3.2);
  }

  renderer.render(scene, camera);
}

/* ──────────────────────────────────────────────────────────────
   Boot
   ────────────────────────────────────────────────────────────── */
updateMissionUI();
el.best.textContent = `BEST ${game.best.toLocaleString('en-US')}`;
refreshSoundUI();
resetWorldEntities();
updateHUD(true);
drawRadar();

// Prime the scene with the menu composition before revealing it.
for (let i = 0; i < 2; i++) {
  updateMenu(1 / 60);
  renderer.render(scene, camera);
}

requestAnimationFrame(animate);
window.setTimeout(() => el.loading.classList.add('done'), 620);

// Keep the browser from restoring stale pointer state after focus changes.
window.addEventListener('focus', () => {
  if (game.mode === 'playing' && document.pointerLockElement !== el.canvas) {
    // Nothing to do: drag and keyboard controls remain available.
  }
});

// Expose a tiny read-only debug surface for automated verification.
window.__APEX__ = {
  get state() {
    return {
      mode: game.mode,
      score: Math.round(game.score),
      seals: game.seals,
      hunger: Number(game.hunger.toFixed(1)),
      vitality: Number(game.vitality.toFixed(1)),
      depth: Number(Math.max(0, -player.pos.y).toFixed(1)),
      speed: Number(player.speed.toFixed(1)),
      above: camera.position.y > 0,
      fishSchools: world.fishSchools.length,
      sealsAlive: world.seals.filter(s => s.active).length,
      ships: world.ships.length,
      drawCalls: renderer.info.render.calls,
      camera: { x: Number(camera.position.x.toFixed(1)), y: Number(camera.position.y.toFixed(1)), z: Number(camera.position.z.toFixed(1)) },
      shark: { x: Number(shark.position.x.toFixed(1)), y: Number(shark.position.y.toFixed(1)), z: Number(shark.position.z.toFixed(1)), yaw: Number(player.yaw.toFixed(2)), pitch: Number(player.pitch.toFixed(2)) },
    };
  },
  start: startGame,
  bite: triggerBite,
  breach: triggerBreach,
  inspect: { camera, shark, player, scene, renderer, world },
};
