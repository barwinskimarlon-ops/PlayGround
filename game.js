const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const overlay = document.getElementById('overlay');
const scoreEl = document.getElementById('score');
const healthEl = document.getElementById('health');
const sizeEl = document.getElementById('size');
const timerEl = document.getElementById('timer');
const missionEl = document.getElementById('mission');
const touchControls = document.getElementById('touchControls');

const world = { width: 2400, height: 1800 };
const keys = {};
const prey = [];
const sharks = [];
const particles = [];

const player = {
  x: world.width * 0.5,
  y: world.height * 0.5,
  vx: 0,
  vy: 0,
  radius: 34,
  speed: 260,
  health: 100,
  maxHealth: 100,
  angle: 0,
  growth: 1,
  blink: 0,
  invulnerable: 0,
};

const state = {
  running: false,
  gameOver: false,
  win: false,
  time: 0,
  score: 0,
  lastFrame: 0,
  pointerX: canvas.width / 2,
  pointerY: canvas.height / 2,
  pointerActive: false,
};

function randomRange(min, max) {
  return min + Math.random() * (max - min);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function updateHud() {
  scoreEl.textContent = String(state.score);
  healthEl.textContent = String(Math.max(0, Math.round(player.health)));
  sizeEl.textContent = `${player.growth.toFixed(1)}x`;
  timerEl.textContent = `${Math.floor(state.time / 60)}:${String(Math.floor(state.time % 60)).padStart(2, '0')}`;

  if (state.win) {
    missionEl.textContent = 'Victory! The ocean bows to the apex shark.';
  } else if (state.gameOver) {
    missionEl.textContent = 'The deep was too fierce. Press start to hunt again.';
  } else if (player.health < 25) {
    missionEl.textContent = 'Low health — hunt smaller prey and avoid the giants.';
  } else if (state.time < 60) {
    missionEl.textContent = 'Hunt the reef. Survive the open ocean.';
  } else {
    missionEl.textContent = 'The big ocean is approaching. Stay alive and feed.';
  }
}

function setOverlay(title, message, buttonText) {
  const panel = overlay.querySelector('.panel');
  panel.innerHTML = `
    <h1>${title}</h1>
    <p>${message}</p>
    <button id="startButton">${buttonText}</button>
  `;
  overlay.classList.add('show');
  const button = document.getElementById('startButton');
  button.addEventListener('click', resetGame);
}

function resetGame() {
  state.running = true;
  state.gameOver = false;
  state.win = false;
  state.time = 0;
  state.score = 0;
  state.lastFrame = performance.now();

  player.x = world.width * 0.5;
  player.y = world.height * 0.5;
  player.vx = 0;
  player.vy = 0;
  player.radius = 34;
  player.speed = 260;
  player.health = 100;
  player.maxHealth = 100;
  player.angle = 0;
  player.growth = 1;
  player.blink = 0;
  player.invulnerable = 0;

  prey.length = 0;
  sharks.length = 0;
  particles.length = 0;

  for (let i = 0; i < 22; i += 1) spawnPrey();
  for (let i = 0; i < 7; i += 1) spawnShark();
  overlay.classList.remove('show');
  updateHud();
}

function spawnBurst(x, y, color, count = 12) {
  for (let i = 0; i < count; i += 1) {
    particles.push({
      x,
      y,
      vx: randomRange(-95, 95),
      vy: randomRange(-95, 95),
      radius: randomRange(2, 5),
      life: randomRange(0.4, 1.1),
      color,
    });
  }
}

function spawnPrey() {
  let type = 'fish';
  const roll = Math.random();
  if (roll > 0.85) type = 'turtle';
  else if (roll > 0.62) type = 'ray';
  else if (roll > 0.4) type = 'puffer';

  const radius = type === 'turtle' ? randomRange(22, 34)
    : type === 'ray' ? randomRange(25, 42)
    : type === 'puffer' ? randomRange(14, 22)
    : randomRange(11, 18);

  const x = randomRange(40, world.width - 40);
  const y = randomRange(40, world.height - 40);
  if (distance(player, { x, y }) < 200) return spawnPrey();

  prey.push({
    x,
    y,
    vx: randomRange(-40, 40),
    vy: randomRange(-40, 40),
    radius,
    type,
    drift: randomRange(0.7, 1.8),
    angle: Math.random() * Math.PI * 2,
    color: type === 'turtle' ? '#7ae36d' : type === 'ray' ? '#8dd6ff' : type === 'puffer' ? '#f5d76a' : '#ffef8a',
    value: type === 'turtle' ? 10 : type === 'ray' ? 16 : type === 'puffer' ? 8 : 6,
  });
}

function spawnShark() {
  const x = randomRange(35, world.width - 35);
  const y = randomRange(35, world.height - 35);
  if (distance(player, { x, y }) < 260) return spawnShark();
  const radius = randomRange(22, 46);
  const speed = randomRange(72, 122);
  const large = Math.random() > 0.7;

  sharks.push({
    x,
    y,
    radius,
    speed,
    angle: Math.random() * Math.PI * 2,
    kind: large ? 'orca' : 'hunter',
    color: large ? '#dfeeff' : '#d2e4f7',
    accent: large ? '#8dd0ff' : '#7ea2d5',
  });
}

function handleInput(dt) {
  let moveX = 0;
  let moveY = 0;

  if (keys.ArrowLeft || keys.a) moveX -= 1;
  if (keys.ArrowRight || keys.d) moveX += 1;
  if (keys.ArrowUp || keys.w) moveY -= 1;
  if (keys.ArrowDown || keys.s) moveY += 1;

  if (state.pointerActive) {
    const dx = state.pointerX - canvas.width / 2;
    const dy = state.pointerY - canvas.height / 2;
    if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
      const length = Math.hypot(dx, dy) || 1;
      moveX += (dx / length) * 0.9;
      moveY += (dy / length) * 0.9;
    }
  }

  const len = Math.hypot(moveX, moveY) || 1;
  if (moveX || moveY) {
    player.vx = (moveX / len) * player.speed * 1.08;
    player.vy = (moveY / len) * player.speed * 1.08;
  }

  player.x += player.vx * dt;
  player.y += player.vy * dt;
  player.x = clamp(player.x, player.radius + 12, world.width - player.radius - 12);
  player.y = clamp(player.y, player.radius + 12, world.height - player.radius - 12);

  if (moveX || moveY) {
    player.angle = Math.atan2(player.vy, player.vx);
  }
}

function updatePrey(dt) {
  for (let i = prey.length - 1; i >= 0; i -= 1) {
    const fish = prey[i];
    fish.x += Math.cos(fish.angle) * fish.drift * 30 * dt;
    fish.y += Math.sin(fish.angle) * fish.drift * 30 * dt;
    fish.angle += randomRange(-0.8, 0.8) * dt;

    fish.x += fish.vx * dt;
    fish.y += fish.vy * dt;
    fish.x = clamp(fish.x, 14, world.width - 14);
    fish.y = clamp(fish.y, 14, world.height - 14);

    if (Math.random() < 0.02) {
      fish.vx = randomRange(-45, 45);
      fish.vy = randomRange(-45, 45);
    }

    if (distance(player, fish) < player.radius + fish.radius * 0.85) {
      if (player.radius > fish.radius * 1.2 || fish.type === 'puffer') {
        player.growth = clamp(player.growth + 0.04, 1, 4.8);
        player.radius = 34 + (player.growth - 1) * 18;
        player.health = clamp(player.health + (fish.type === 'turtle' ? 12 : 7), 0, player.maxHealth);
        state.score += fish.value;
        spawnBurst(fish.x, fish.y, fish.color, 16);
        prey.splice(i, 1);
        spawnPrey();
      } else if (player.invulnerable <= 0) {
        player.health -= 8;
        player.invulnerable = 0.85;
        player.blink = 0.5;
        spawnBurst(player.x, player.y, '#ff7b72', 18);
      }
    }
  }
}

function updateSharks(dt) {
  for (let i = sharks.length - 1; i >= 0; i -= 1) {
    const shark = sharks[i];
    const dx = player.x - shark.x;
    const dy = player.y - shark.y;
    const dist = Math.hypot(dx, dy) || 1;

    if (dist < 340) {
      shark.angle = Math.atan2(dy, dx);
      shark.x += Math.cos(shark.angle) * shark.speed * dt;
      shark.y += Math.sin(shark.angle) * shark.speed * dt;
    } else {
      shark.x += Math.cos(shark.angle) * 24 * dt;
      shark.y += Math.sin(shark.angle) * 24 * dt;
      if (Math.random() < 0.02) shark.angle += randomRange(-1.5, 1.5);
    }
    shark.x = clamp(shark.x, 18, world.width - 18);
    shark.y = clamp(shark.y, 18, world.height - 18);

    if (dist < player.radius + shark.radius * 0.8) {
      if (player.radius > shark.radius * 1.2) {
        player.growth = clamp(player.growth + 0.02, 1, 4.8);
        player.radius = 34 + (player.growth - 1) * 18;
        state.score += 12;
        sharks.splice(i, 1);
        spawnBurst(shark.x, shark.y, '#a7e3ff', 22);
        spawnShark();
      } else if (player.invulnerable <= 0) {
        player.health -= shark.kind === 'orca' ? 14 : 9;
        player.invulnerable = 1;
        player.blink = 0.4;
        const retreat = Math.atan2(shark.y - player.y, shark.x - player.x);
        shark.x += Math.cos(retreat) * 58;
        shark.y += Math.sin(retreat) * 58;
        spawnBurst(player.x, player.y, '#ff7b72', 12);
      }
    }
  }
}

function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.life -= dt;
    if (p.life <= 0) particles.splice(i, 1);
  }
}

function update(dt) {
  if (!state.running) return;

  state.time += dt;
  player.invulnerable = Math.max(0, player.invulnerable - dt);
  handleInput(dt);
  updatePrey(dt);
  updateSharks(dt);
  updateParticles(dt);

  player.health = clamp(player.health, 0, 100);

  if (state.time >= 90) {
    state.running = false;
    state.win = true;
    setOverlay('Victory!', `The ocean is yours. Final score: <strong>${state.score}</strong>`, 'Play Again');
  } else if (player.health <= 0) {
    state.running = false;
    state.gameOver = true;
    setOverlay('Shark Down', `The ocean was too hungry. Final score: <strong>${state.score}</strong>`, 'Try Again');
  }

  updateHud();
}

function drawBackground(cameraX, cameraY) {
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#0c6aa4');
  gradient.addColorStop(0.4, '#0f5d8d');
  gradient.addColorStop(1, '#021d2b');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 90; i += 1) {
    const x = ((i * 173.7) % (world.width + 200)) - (cameraX * 0.6) % 200;
    const y = ((i * 97.4) + (state.time * 18)) % (canvas.height + 50);
    ctx.fillStyle = 'rgba(255,255,255,0.14)';
    ctx.fillRect(x, y, 2, 2);
  }

  ctx.strokeStyle = 'rgba(162, 224, 255, 0.12)';
  ctx.lineWidth = 1;
  for (let y = 0; y < world.height; y += 120) {
    const sy = y - cameraY + canvas.height / 2;
    ctx.beginPath();
    ctx.moveTo(0, sy);
    ctx.lineTo(canvas.width, sy);
    ctx.stroke();
  }
}

function drawCreature(obj, style, cameraX, cameraY) {
  ctx.save();
  ctx.translate(obj.x - cameraX + canvas.width / 2, obj.y - cameraY + canvas.height / 2);
  ctx.rotate(obj.angle || 0);
  ctx.fillStyle = style.main;

  if (style.type === 'shark') {
    ctx.beginPath();
    ctx.moveTo(-obj.radius, 0);
    ctx.quadraticCurveTo(-obj.radius * 0.35, -obj.radius * 0.8, 0, -obj.radius * 0.55);
    ctx.quadraticCurveTo(obj.radius * 0.9, 0, 0, obj.radius * 0.8);
    ctx.quadraticCurveTo(-obj.radius * 0.6, obj.radius * 0.9, -obj.radius, 0);
    ctx.fill();

    ctx.fillStyle = style.accent;
    ctx.beginPath();
    ctx.moveTo(-obj.radius * 0.3, 0);
    ctx.lineTo(obj.radius * 0.8, -obj.radius * 0.3);
    ctx.lineTo(obj.radius * 0.8, obj.radius * 0.3);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#0b1d23';
    ctx.beginPath();
    ctx.arc(obj.radius * 0.16, -obj.radius * 0.14, 3, 0, Math.PI * 2);
    ctx.fill();
  } else if (style.type === 'fish') {
    ctx.beginPath();
    ctx.moveTo(obj.radius, 0);
    ctx.quadraticCurveTo(obj.radius * 1.2, -obj.radius * 0.7, 0, -obj.radius * 0.5);
    ctx.quadraticCurveTo(-obj.radius * 1.2, 0, 0, obj.radius * 0.5);
    ctx.quadraticCurveTo(obj.radius * 1.2, obj.radius * 0.7, obj.radius, 0);
    ctx.fill();

    ctx.fillStyle = style.accent;
    ctx.beginPath();
    ctx.moveTo(-obj.radius * 0.45, 0);
    ctx.lineTo(-obj.radius * 1.3, -obj.radius * 0.35);
    ctx.lineTo(-obj.radius * 1.3, obj.radius * 0.35);
    ctx.closePath();
    ctx.fill();
  } else if (style.type === 'turtle') {
    ctx.fillRect(-obj.radius * 1.1, -obj.radius * 0.55, obj.radius * 2.2, obj.radius * 1.1);
    ctx.beginPath();
    ctx.arc(-obj.radius * 0.6, 0, obj.radius * 0.42, 0, Math.PI * 2);
    ctx.arc(obj.radius * 0.6, 0, obj.radius * 0.42, 0, Math.PI * 2);
    ctx.fill();
  } else if (style.type === 'ray') {
    ctx.beginPath();
    ctx.moveTo(-obj.radius * 1.6, 0);
    ctx.quadraticCurveTo(-obj.radius * 0.5, -obj.radius * 1.1, obj.radius * 1.2, 0);
    ctx.quadraticCurveTo(-obj.radius * 0.5, obj.radius * 1.1, -obj.radius * 1.6, 0);
    ctx.fill();
  } else if (style.type === 'puffer') {
    ctx.beginPath();
    ctx.arc(0, 0, obj.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = style.accent;
    ctx.fillRect(-obj.radius * 0.4, -obj.radius * 0.4, obj.radius * 0.8, obj.radius * 0.8);
  }

  ctx.restore();
}

function render() {
  const cameraX = clamp(player.x - canvas.width / 2, 0, world.width - canvas.width);
  const cameraY = clamp(player.y - canvas.height / 2, 0, world.height - canvas.height);

  drawBackground(cameraX, cameraY);

  for (const fish of prey) {
    const style = fish.type === 'turtle' ? { type: 'turtle', main: '#7ae36d', accent: '#437d25' }
      : fish.type === 'ray' ? { type: 'ray', main: '#8dd6ff', accent: '#4da7de' }
      : fish.type === 'puffer' ? { type: 'puffer', main: '#f5d76a', accent: '#d78b23' }
      : { type: 'fish', main: '#ffef8a', accent: '#ffb703' };
    drawCreature(fish, style, cameraX, cameraY);
  }

  for (const shark of sharks) {
    const style = shark.kind === 'orca'
      ? { type: 'shark', main: '#dfeeff', accent: '#82c8ff' }
      : { type: 'shark', main: '#d3e2f7', accent: '#7ea1d0' };
    drawCreature(shark, style, cameraX, cameraY);
  }

  drawCreature(player, { type: 'shark', main: '#f2f7ff', accent: '#7ae3ff' }, cameraX, cameraY);

  for (const p of particles) {
    const x = p.x - cameraX + canvas.width / 2;
    const y = p.y - cameraY + canvas.height / 2;
    ctx.fillStyle = p.color;
    ctx.globalAlpha = clamp(p.life, 0, 1);
    ctx.beginPath();
    ctx.arc(x, y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  if (player.blink > 0) {
    player.blink = Math.max(0, player.blink - 0.05);
    ctx.fillStyle = `rgba(255, 123, 114, ${0.5 * player.blink})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function animate(time) {
  const dt = Math.min((time - state.lastFrame) / 1000 || 0.016, 0.033);
  state.lastFrame = time;
  update(dt);
  render();
  requestAnimationFrame(animate);
}

function bindUI() {
  document.addEventListener('keydown', (event) => {
    const code = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    keys[code] = true;
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '].includes(event.key)) {
      event.preventDefault();
    }
  });

  document.addEventListener('keyup', (event) => {
    const code = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    keys[code] = false;
  });

  canvas.addEventListener('pointerdown', (event) => {
    state.pointerActive = true;
    const rect = canvas.getBoundingClientRect();
    state.pointerX = event.clientX - rect.left;
    state.pointerY = event.clientY - rect.top;
  });

  canvas.addEventListener('pointermove', (event) => {
    if (state.pointerActive) {
      const rect = canvas.getBoundingClientRect();
      state.pointerX = event.clientX - rect.left;
      state.pointerY = event.clientY - rect.top;
    }
  });

  canvas.addEventListener('pointerup', () => {
    state.pointerActive = false;
  });

  canvas.addEventListener('pointerleave', () => {
    state.pointerActive = false;
  });

  for (const button of document.querySelectorAll('.dir-btn')) {
    const key = button.dataset.key;
    button.addEventListener('pointerdown', () => {
      keys[key] = true;
    });
    button.addEventListener('pointerup', () => {
      keys[key] = false;
    });
    button.addEventListener('pointerleave', () => {
      keys[key] = false;
    });
  }

  if (window.matchMedia('(pointer: coarse)').matches) {
    touchControls.classList.add('visible');
  }
}

bindUI();
state.lastFrame = performance.now();
updateHud();
setOverlay('Shark Apex', 'Swim through the blue, devour smaller prey, and avoid the giants of the deep.', 'Start Hunt');
requestAnimationFrame(animate);
