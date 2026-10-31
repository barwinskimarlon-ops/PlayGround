import * as THREE from 'three';

const rand = (a, b) => a + Math.random() * (b - a);
const clamp = THREE.MathUtils.clamp;
const TAU = Math.PI * 2;

/* ──────────────────────────────────────────────────────────────
   Small procedural texture helpers
   ────────────────────────────────────────────────────────────── */
function canvasTexture(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function softCircleTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  return canvasTexture(64, 64, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, inner);
    g.addColorStop(0.32, inner);
    g.addColorStop(1, outer);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

function ringTexture() {
  return canvasTexture(128, 128, (ctx, w, h) => {
    ctx.translate(w / 2, h / 2);
    ctx.strokeStyle = 'rgba(255,255,255,.9)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, 48, 0, TAU);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,.28)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, 0, 35, 0, TAU);
    ctx.stroke();
    for (let i = 0; i < 4; i++) {
      ctx.save();
      ctx.rotate((i * TAU) / 4);
      ctx.fillStyle = 'rgba(255,255,255,.85)';
      ctx.fillRect(-1.5, -57, 3, 9);
      ctx.restore();
    }
  });
}

function beamTexture() {
  return canvasTexture(128, 512, (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(206,255,244,.58)');
    grad.addColorStop(0.4, 'rgba(155,235,219,.17)');
    grad.addColorStop(1, 'rgba(120,220,205,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    const side = ctx.createLinearGradient(0, 0, w, 0);
    side.addColorStop(0, 'rgba(0,0,0,1)');
    side.addColorStop(0.25, 'rgba(0,0,0,0)');
    side.addColorStop(0.75, 'rgba(0,0,0,0)');
    side.addColorStop(1, 'rgba(0,0,0,1)');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = side;
    ctx.fillRect(0, 0, w, h);
  });
}

function foamTexture() {
  return canvasTexture(256, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 1200; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const alpha = Math.random() * 0.38;
      const r = Math.random() * 3.2 + 0.5;
      ctx.fillStyle = `rgba(228,255,248,${alpha})`;
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.8, r * 0.55, Math.random() * Math.PI, 0, TAU);
      ctx.fill();
    }
  });
}

function makeEnvironment() {
  return canvasTexture(1024, 512, (ctx, w, h) => {
    const sky = ctx.createLinearGradient(0, 0, 0, h * 0.56);
    sky.addColorStop(0, '#1b5b74');
    sky.addColorStop(0.48, '#78b3bd');
    sky.addColorStop(0.72, '#efc7a8');
    sky.addColorStop(1, '#f8ddbf');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h * 0.56);
    const sea = ctx.createLinearGradient(0, h * 0.56, 0, h);
    sea.addColorStop(0, '#1e5961');
    sea.addColorStop(1, '#031b22');
    ctx.fillStyle = sea;
    ctx.fillRect(0, h * 0.56, w, h * 0.44);
    const sun = ctx.createRadialGradient(w * 0.77, h * 0.39, 0, w * 0.77, h * 0.39, 105);
    sun.addColorStop(0, 'rgba(255,250,222,1)');
    sun.addColorStop(0.15, 'rgba(255,228,178,.9)');
    sun.addColorStop(0.5, 'rgba(255,190,130,.25)');
    sun.addColorStop(1, 'rgba(255,180,120,0)');
    ctx.fillStyle = sun;
    ctx.fillRect(0, 0, w, h);
  });
}

/* ──────────────────────────────────────────────────────────────
   Sky
   ────────────────────────────────────────────────────────────── */
function createSky() {
  const geo = new THREE.SphereGeometry(780, 40, 22);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      uTime: { value: 0 },
      uSun: { value: new THREE.Vector3(-0.66, 0.4, -0.64).normalize() },
      uTop: { value: new THREE.Color('#276b89') },
      uMid: { value: new THREE.Color('#8bb8c1') },
      uHorizon: { value: new THREE.Color('#f6c8a2') },
      uSunColor: { value: new THREE.Color('#fff1ce') },
    },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform vec3 uSun;
      uniform vec3 uTop;
      uniform vec3 uMid;
      uniform vec3 uHorizon;
      uniform vec3 uSunColor;
      varying vec3 vDir;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.55;
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p *= 2.03;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        float h = normalize(vDir).y;
        vec3 col = mix(uHorizon, uMid, smoothstep(-0.02, 0.28, h));
        col = mix(col, uTop, smoothstep(0.2, 0.82, h));

        float sunDot = max(dot(normalize(vDir), uSun), 0.0);
        float glow = pow(sunDot, 12.0) * 0.32 + pow(sunDot, 140.0) * 0.7;
        col += uSunColor * glow;
        float disk = smoothstep(0.9992, 0.9997, sunDot);
        col += uSunColor * disk * 2.6;

        vec3 dir = normalize(vDir);
        vec2 cloudUv = dir.xz / max(dir.y + 0.32, 0.08) * 1.25;
        float cloud = fbm(cloudUv * 1.25 + vec2(uTime * 0.004, uTime * 0.0015));
        cloud = smoothstep(0.53, 0.8, cloud) * smoothstep(0.02, 0.24, h) * (1.0 - smoothstep(0.62, 0.9, h));
        vec3 cloudCol = mix(vec3(0.97, 0.84, 0.72), vec3(0.98, 0.94, 0.86), h);
        col = mix(col, cloudCol, cloud * 0.62);

        float haze = 1.0 - smoothstep(0.0, 0.085, abs(h + 0.005));
        col = mix(col, vec3(0.95, 0.82, 0.7), haze * 0.45);
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = -20;
  mesh.frustumCulled = false;
  return mesh;
}

/* ──────────────────────────────────────────────────────────────
   Ocean surface
   ────────────────────────────────────────────────────────────── */
function createOcean() {
  const geo = new THREE.PlaneGeometry(1500, 1500, 190, 190);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: false,
    uniforms: {
      uTime: { value: 0 },
      uSun: { value: new THREE.Vector3(-0.66, 0.4, -0.64).normalize() },
      uShallow: { value: new THREE.Color('#2b8c8d') },
      uDeep: { value: new THREE.Color('#052c39') },
      uSky: { value: new THREE.Color('#a9cfd2') },
      uSunColor: { value: new THREE.Color('#ffedc5') },
      uFogColor: { value: new THREE.Color('#073743') },
      uFogDensity: { value: 0.012 },
    },
    vertexShader: /* glsl */ `
      uniform float uTime;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      varying float vHeight;

      float wave(vec2 p) {
        float t = uTime;
        float w = sin(p.x * 0.23 + t * 0.72) * 0.42;
        w += sin(p.y * 0.31 - t * 0.54) * 0.33;
        w += sin((p.x + p.y) * 0.15 + t * 0.4) * 0.66;
        w += sin((p.x * 0.7 - p.y * 0.5) * 0.13 - t * 0.86) * 0.44;
        w += sin(p.x * 0.95 + p.y * 0.82 + t * 1.22) * 0.11;
        w += sin(p.x * 1.65 - p.y * 1.2 - t * 1.7) * 0.045;
        return w;
      }

      void main() {
        vec3 p = position;
        float h = wave(p.xz);
        p.y += h;
        float e = 1.25;
        float hx = wave(p.xz + vec2(e, 0.0));
        float hz = wave(p.xz + vec2(0.0, e));
        vec3 n = normalize(vec3(h - hx, e, h - hz));
        vHeight = h;
        vec4 world = modelMatrix * vec4(p, 1.0);
        vWorld = world.xyz;
        vNormalW = normalize(mat3(modelMatrix) * n);
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform vec3 uSun;
      uniform vec3 uShallow;
      uniform vec3 uDeep;
      uniform vec3 uSky;
      uniform vec3 uSunColor;
      uniform vec3 uFogColor;
      uniform float uFogDensity;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      varying float vHeight;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }

      void main() {
        vec3 toCam = normalize(cameraPosition - vWorld);
        vec3 n = normalize(vNormalW);
        float dist = distance(cameraPosition, vWorld);
        float fog = 1.0 - exp(-pow(dist * uFogDensity, 2.0));
        bool above = cameraPosition.y > 0.12;

        if (above) {
          float fres = pow(1.0 - max(dot(n, toCam), 0.0), 2.6);
          vec3 col = mix(uDeep, uSky, fres * 0.82);
          col = mix(col, uShallow, smoothstep(0.38, 0.95, fres) * 0.32);
          vec3 refl = reflect(-toCam, n);
          float spec = pow(max(dot(refl, uSun), 0.0), 240.0);
          float glint = pow(max(dot(refl, uSun), 0.0), 18.0) * 0.12;
          col += uSunColor * (spec * 5.2 + glint);
          float foamNoise = noise(vWorld.xz * 0.45 + uTime * 0.05);
          float crest = smoothstep(1.2, 1.62, vHeight + foamNoise * 0.22);
          vec3 foam = vec3(0.74, 0.9, 0.86);
          col = mix(col, foam, crest * 0.38);
          float shimmer = noise(vWorld.xz * 1.4 - uTime * 0.14);
          col += uSky * shimmer * 0.018;
          col = mix(col, uFogColor, fog * 0.94);
          gl_FragColor = vec4(col, 1.0);
        } else {
          float upness = abs(toCam.y);
          float window = smoothstep(0.18, 0.95, upness);
          vec3 deepCol = vec3(0.038, 0.195, 0.22);
          vec3 windowCol = vec3(0.4, 0.78, 0.77);
          vec3 col = mix(deepCol, windowCol, window * 0.88);
          float ripple = sin(vWorld.x * 0.75 + uTime * 0.7 + sin(vWorld.z * 0.45)) *
                         sin(vWorld.z * 0.96 - uTime * 0.52);
          ripple = ripple * 0.5 + 0.5;
          float caustic = smoothstep(0.58, 0.94, ripple);
          col += vec3(0.24, 0.62, 0.55) * caustic * window * 0.36;
          col += uSunColor * pow(max(toCam.y, 0.0), 5.0) * 0.04;
          float rim = pow(1.0 - upness, 4.0);
          col = mix(col, vec3(0.07, 0.34, 0.38), rim * 0.38);
          col += vec3(0.05, 0.18, 0.19) * (0.45 + 0.55 * sin(vWorld.x * 0.03 + vWorld.z * 0.025));
          col = mix(col, uFogColor, fog * 0.96);
          gl_FragColor = vec4(col, 1.0);
        }
      }
    `,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = 0;
  mesh.renderOrder = -1;
  mesh.frustumCulled = false;
  return mesh;
}

/* ──────────────────────────────────────────────────────────────
   Sea floor, rocks and kelp
   ────────────────────────────────────────────────────────────── */
function createSeafloor() {
  const group = new THREE.Group();
  const geo = new THREE.PlaneGeometry(900, 900, 110, 110);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = [];
  const colorA = new THREE.Color('#1b3534');
  const colorB = new THREE.Color('#3e493c');
  const colorC = new THREE.Color('#665846');
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const y = -62
      + Math.sin(x * 0.055) * 2.2
      + Math.cos(z * 0.041) * 1.8
      + Math.sin((x + z) * 0.023) * 3.2
      + Math.sin(x * 0.16 + z * 0.11) * 0.55;
    pos.setY(i, y);
    const n = (Math.sin(x * 0.14 + z * 0.08) * 0.5 + 0.5) * 0.65
      + (Math.sin(x * 0.4 - z * 0.27) * 0.5 + 0.5) * 0.35;
    const col = colorA.clone().lerp(colorB, n).lerp(colorC, Math.max(0, n - 0.68) * 1.5);
    colors.push(col.r, col.g, col.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 1,
    metalness: 0,
    color: '#a0a392',
  });
  const floor = new THREE.Mesh(geo, mat);
  floor.position.y = 0;
  group.add(floor);

  // Soft moving caustic light on the sand.
  const causticMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 } },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      varying vec3 vWorld;
      void main() {
        vUv = uv;
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      varying vec2 vUv;
      varying vec3 vWorld;
      void main() {
        float c1 = sin(vWorld.x * 0.5 + uTime * 0.75 + sin(vWorld.z * 0.4)) * sin(vWorld.z * 0.55 - uTime * 0.5);
        float c2 = sin((vWorld.x + vWorld.z) * 0.34 - uTime * 0.62 + sin(vWorld.x * 0.2)) * sin((vWorld.z - vWorld.x) * 0.37 + uTime * 0.45);
        float c = smoothstep(0.12, 0.92, c1 * 0.5 + 0.5) * 0.55 + smoothstep(0.4, 0.95, c2 * 0.5 + 0.5) * 0.45;
        float edge = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x) * smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);
        gl_FragColor = vec4(vec3(0.35, 0.85, 0.74) * c, c * edge * 0.22);
      }
    `,
  });
  const caustic = new THREE.Mesh(new THREE.PlaneGeometry(800, 800, 1, 1), causticMat);
  caustic.rotation.x = -Math.PI / 2;
  caustic.position.y = -58.5;
  group.add(caustic);

  // Rocks.
  const rockGeo = new THREE.IcosahedronGeometry(1, 1);
  const rockMat = new THREE.MeshStandardMaterial({
    color: '#263d3a',
    roughness: 0.94,
    flatShading: true,
  });
  const rocks = new THREE.InstancedMesh(rockGeo, rockMat, 36);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < 36; i++) {
    const angle = Math.random() * TAU;
    const radius = 18 + Math.random() * 220;
    const s = rand(1.8, 8.5);
    dummy.position.set(Math.cos(angle) * radius, -61 + s * 0.28, Math.sin(angle) * radius);
    dummy.rotation.set(rand(0, TAU), rand(0, TAU), rand(0, TAU));
    dummy.scale.set(s * rand(0.7, 1.4), s * rand(0.45, 1.0), s * rand(0.7, 1.35));
    dummy.updateMatrix();
    rocks.setMatrixAt(i, dummy.matrix);
  }
  group.add(rocks);

  // Kelp forest. A single merged mesh with a custom swaying shader.
  const kPositions = [];
  const kColors = [];
  const kPhases = [];
  const kIndices = [];
  let vertexOffset = 0;
  const baseColor = new THREE.Color('#0b3b35');
  const tipColor = new THREE.Color('#4f9d72');
  for (let k = 0; k < 64; k++) {
    const angle = Math.random() * TAU;
    const radius = 18 + Math.random() * 210;
    const bx = Math.cos(angle) * radius;
    const bz = Math.sin(angle) * radius;
    const height = rand(5, 18);
    const width = rand(0.16, 0.48);
    const segments = 9;
    const phase = Math.random() * TAU;
    for (let s = 0; s <= segments; s++) {
      const t = s / segments;
      const w = width * (1 - t * 0.82) * (0.6 + Math.sin(t * 7 + phase) * 0.12);
      const y = -60 + t * height;
      kPositions.push(bx - w, y, bz);
      kPositions.push(bx + w, y, bz);
      const c = baseColor.clone().lerp(tipColor, Math.pow(t, 0.7));
      kColors.push(c.r, c.g, c.b, c.r, c.g, c.b);
      kPhases.push(phase, phase);
    }
    for (let s = 0; s < segments; s++) {
      const a = vertexOffset + s * 2;
      kIndices.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
    }
    vertexOffset += (segments + 1) * 2;
  }
  const kelpGeo = new THREE.BufferGeometry();
  kelpGeo.setAttribute('position', new THREE.Float32BufferAttribute(kPositions, 3));
  kelpGeo.setAttribute('color', new THREE.Float32BufferAttribute(kColors, 3));
  kelpGeo.setAttribute('aPhase', new THREE.Float32BufferAttribute(kPhases, 1));
  kelpGeo.setIndex(kIndices);
  const kelpMat = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false,
    vertexColors: true,
    uniforms: { uTime: { value: 0 } },
    vertexShader: /* glsl */ `
      uniform float uTime;
      attribute float aPhase;
      varying vec3 vColor;
      varying float vY;
      void main() {
        vColor = color;
        vY = position.y;
        float height = clamp((position.y + 60.0) / 16.0, 0.0, 1.0);
        float sway = sin(uTime * 0.55 + aPhase + position.y * 0.11) * pow(height, 1.6);
        vec3 p = position;
        p.x += sway * 0.62;
        p.z += cos(uTime * 0.42 + aPhase * 0.7 + position.y * 0.09) * pow(height, 1.6) * 0.36;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vColor;
      varying float vY;
      void main() {
        float fade = smoothstep(-60.0, -46.0, vY);
        gl_FragColor = vec4(vColor * (0.72 + fade * 0.33), 0.82);
      }
    `,
  });
  const kelp = new THREE.Mesh(kelpGeo, kelpMat);
  group.add(kelp);

  group.userData.causticMat = causticMat;
  group.userData.kelpMat = kelpMat;
  return group;
}

/* ──────────────────────────────────────────────────────────────
   Light shafts, marine snow, bubbles, blood, splash
   ────────────────────────────────────────────────────────────── */
function createShafts() {
  const group = new THREE.Group();
  const tex = beamTexture();
  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    transparent: true,
    opacity: 0.13,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    color: '#bff8e8',
  });
  const shafts = [];
  for (let i = 0; i < 24; i++) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(rand(12, 34), rand(58, 86)), mat.clone());
    const angle = Math.random() * TAU;
    const radius = i < 8 ? Math.random() * 42 : Math.random() * 150;
    mesh.position.set(Math.cos(angle) * radius, -35, Math.sin(angle) * radius);
    mesh.rotation.y = Math.random() * TAU;
    mesh.rotation.z = rand(-0.18, 0.18);
    mesh.material.opacity = rand(0.055, 0.16);
    mesh.userData.baseOpacity = mesh.material.opacity;
    mesh.userData.phase = Math.random() * TAU;
    group.add(mesh);
    shafts.push(mesh);
  }
  group.userData.shafts = shafts;
  return group;
}

function createMarineSnow() {
  const count = 950;
  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = rand(-140, 140);
    positions[i * 3 + 1] = rand(-62, -1);
    positions[i * 3 + 2] = rand(-140, 140);
    speeds[i] = rand(0.05, 0.3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.19,
    map: softCircleTexture(),
    color: '#b6e8df',
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geo, mat);
  points.userData.speeds = speeds;
  return points;
}

function createParticlePool(count, color, size, texture, blending = THREE.AdditiveBlending) {
  const positions = new Float32Array(count * 3);
  const life = new Float32Array(count);
  const vel = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) positions[i * 3 + 1] = -999;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    size,
    map: texture,
    color,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
    blending,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  points.userData = { positions, life, vel, cursor: 0, count };
  return points;
}

class Particles {
  constructor(scene) {
    this.tex = softCircleTexture();
    this.bubbles = createParticlePool(220, '#c8fff5', 0.18, this.tex);
    this.splash = createParticlePool(180, '#eafffb', 0.34, this.tex);
    this.blood = createParticlePool(130, '#9c1c12', 0.34, this.tex, THREE.NormalBlending);
    this.snow = createMarineSnow();
    scene.add(this.bubbles, this.splash, this.blood, this.snow);

    this.cloudTex = canvasTexture(128, 128, (ctx, w, h) => {
      const g = ctx.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2);
      g.addColorStop(0, 'rgba(115,11,7,.9)');
      g.addColorStop(0.45, 'rgba(79,8,4,.42)');
      g.addColorStop(1, 'rgba(35,3,2,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    });
    this.clouds = [];
    for (let i = 0; i < 5; i++) {
      const mat = new THREE.SpriteMaterial({
        map: this.cloudTex,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        color: '#ff5b40',
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(1, 1, 1);
      sp.visible = false;
      scene.add(sp);
      this.clouds.push({ sprite: sp, life: 0, maxLife: 1 });
    }

    this.ringTex = ringTexture();
    this.rings = [];
    for (let i = 0; i < 4; i++) {
      const mat = new THREE.MeshBasicMaterial({
        map: this.ringTex,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
        color: '#d9fff6',
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.visible = false;
      scene.add(mesh);
      this.rings.push({ mesh, life: 0, maxLife: 1 });
    }
    this.bubbleClock = 0;
  }

  spawn(kind, pos, count, speed = 1) {
    const pool = kind === 'bubble' ? this.bubbles : kind === 'splash' ? this.splash : this.blood;
    const d = pool.userData;
    for (let n = 0; n < count; n++) {
      const i = d.cursor;
      d.cursor = (d.cursor + 1) % d.count;
      d.life[i] = rand(0.5, 1.8) * (kind === 'splash' ? 1.15 : 1);
      d.positions[i * 3] = pos.x + rand(-0.55, 0.55);
      d.positions[i * 3 + 1] = pos.y + rand(-0.4, 0.4);
      d.positions[i * 3 + 2] = pos.z + rand(-0.55, 0.55);
      if (kind === 'bubble') {
        d.vel[i * 3] = rand(-0.25, 0.25);
        d.vel[i * 3 + 1] = rand(0.7, 1.9) * speed;
        d.vel[i * 3 + 2] = rand(-0.25, 0.25);
      } else if (kind === 'splash') {
        d.vel[i * 3] = rand(-2.4, 2.4) * speed;
        d.vel[i * 3 + 1] = rand(2.5, 7.5) * speed;
        d.vel[i * 3 + 2] = rand(-2.4, 2.4) * speed;
      } else {
        d.vel[i * 3] = rand(-1.2, 1.2);
        d.vel[i * 3 + 1] = rand(-0.6, 0.9);
        d.vel[i * 3 + 2] = rand(-1.2, 1.2);
      }
    }
    pool.geometry.attributes.position.needsUpdate = true;
  }

  bloodCloud(pos) {
    const cloud = this.clouds.find(c => c.life <= 0) || this.clouds[0];
    cloud.life = 1.7;
    cloud.maxLife = 1.7;
    cloud.sprite.position.copy(pos);
    cloud.sprite.scale.setScalar(1);
    cloud.sprite.visible = true;
  }

  surfaceRing(pos, scale = 1) {
    const ring = this.rings.find(r => r.life <= 0) || this.rings[0];
    ring.life = 1.5;
    ring.maxLife = 1.5;
    ring.mesh.position.set(pos.x, 0.1, pos.z);
    ring.mesh.scale.setScalar(scale * 2);
    ring.mesh.visible = true;
  }

  update(dt, time, camera, shark, speed) {
    for (const [pool, isSplash] of [[this.bubbles, false], [this.splash, true], [this.blood, false]]) {
      const d = pool.userData;
      for (let i = 0; i < d.count; i++) {
        if (d.life[i] <= 0) continue;
        d.life[i] -= dt;
        if (d.life[i] <= 0) {
          d.positions[i * 3 + 1] = -999;
          continue;
        }
        d.positions[i * 3] += d.vel[i * 3] * dt;
        d.positions[i * 3 + 1] += d.vel[i * 3 + 1] * dt;
        d.positions[i * 3 + 2] += d.vel[i * 3 + 2] * dt;
        if (pool === this.bubbles) {
          d.vel[i * 3] += Math.sin(time * 2 + i) * 0.08 * dt;
        }
        if (isSplash) d.vel[i * 3 + 1] -= 9.8 * dt;
        else if (pool === this.blood) {
          d.vel[i * 3] *= 0.98;
          d.vel[i * 3 + 2] *= 0.98;
        }
      }
      pool.geometry.attributes.position.needsUpdate = true;
    }
    for (const c of this.clouds) {
      if (c.life <= 0) { c.sprite.visible = false; continue; }
      c.life -= dt;
      const t = 1 - c.life / c.maxLife;
      c.sprite.scale.setScalar(1.5 + t * 8);
      c.sprite.material.opacity = (1 - t) * 0.65;
      if (c.life <= 0) c.sprite.visible = false;
    }
    for (const r of this.rings) {
      if (r.life <= 0) { r.mesh.visible = false; continue; }
      r.life -= dt;
      const t = 1 - r.life / r.maxLife;
      r.mesh.scale.setScalar(2 + t * 26);
      r.mesh.material.opacity = (1 - t) * 0.5;
      if (r.life <= 0) r.mesh.visible = false;
    }
    const sp = this.snow.userData.speeds;
    const arr = this.snow.geometry.attributes.position.array;
    for (let i = 0; i < sp.length; i++) {
      arr[i * 3 + 1] -= sp[i] * dt;
      arr[i * 3] += Math.sin(time * 0.2 + i) * 0.02 * dt;
      if (arr[i * 3 + 1] < -64) arr[i * 3 + 1] = -1;
    }
    this.snow.geometry.attributes.position.needsUpdate = true;
    if (this.snow.position.y > 0) this.snow.position.y = 0;

    if (shark && speed > 2) {
      this.bubbleClock -= dt;
      if (this.bubbleClock <= 0) {
        this.bubbleClock = 0.18 + Math.random() * 0.3;
        this.spawn('bubble', shark, Math.random() > 0.65 ? 3 : 1, 0.7 + speed * 0.025);
      }
    }
  }
}

/* ──────────────────────────────────────────────────────────────
   Fish schools
   ────────────────────────────────────────────────────────────── */
function fishBodyGeometry() {
  const rings = [
    [-0.58, 0.012, 0.014],
    [-0.46, 0.06, 0.055],
    [-0.3, 0.12, 0.105],
    [-0.08, 0.17, 0.16],
    [0.15, 0.15, 0.145],
    [0.33, 0.1, 0.105],
    [0.46, 0.05, 0.06],
    [0.55, 0.012, 0.022],
  ];
  const radial = 10;
  const positions = [];
  const colors = [];
  const indices = [];
  const dark = new THREE.Color('#344f53');
  const mid = new THREE.Color('#7b9997');
  const belly = new THREE.Color('#c4d3ca');

  for (let r = 0; r < rings.length; r++) {
    const [z, rx, ry] = rings[r];
    for (let i = 0; i < radial; i++) {
      const a = (i / radial) * TAU;
      const sin = Math.sin(a);
      positions.push(Math.cos(a) * rx, sin * ry, z);
      const v = (sin + 1) / 2;
      const col = belly.clone().lerp(mid, smoothstep(0.12, 0.52, v));
      col.lerp(dark, smoothstep(0.48, 0.94, v));
      colors.push(col.r, col.g, col.b);
    }
  }
  for (let r = 0; r < rings.length - 1; r++) {
    for (let i = 0; i < radial; i++) {
      const a = r * radial + i;
      const b = r * radial + ((i + 1) % radial);
      const c = (r + 1) * radial + i;
      const d = (r + 1) * radial + ((i + 1) % radial);
      indices.push(a, b, c, b, d, c);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function smoothstep(a, b, x) {
  const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
}

function fishTailGeometry() {
  const geo = new THREE.BufferGeometry();
  const verts = new Float32Array([
    0, 0.01, 0.05, 0, 0.17, 0.42, 0, -0.01, 0.29,
    0, 0.01, 0.05, 0, -0.01, 0.29, 0, -0.17, 0.42,
  ]);
  geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
  geo.computeVertexNormals();
  return geo;
}

class FishSchool {
  constructor(scene, center, count, tint) {
    this.center = center.clone();
    this.anchor = center.clone();
    this.count = count;
    this.fish = [];
    this.body = new THREE.InstancedMesh(
      fishBodyGeometry(),
      new THREE.MeshPhysicalMaterial({
        color: '#ffffff',
        vertexColors: true,
        roughness: 0.34,
        metalness: 0.28,
        clearcoat: 0.25,
        clearcoatRoughness: 0.38,
        envMapIntensity: 0.7,
      }),
      count
    );
    this.tail = new THREE.InstancedMesh(
      fishTailGeometry(),
      new THREE.MeshBasicMaterial({ color: '#8ba8a5', side: THREE.DoubleSide, transparent: true, opacity: 0.72 }),
      count
    );
    this.body.frustumCulled = false;
    this.tail.frustumCulled = false;
    const palette = [tint, '#d7e1da', '#b7cbc4', '#e2e9df', '#a9c2bc'];
    for (let i = 0; i < count; i++) {
      const f = {
        pos: new THREE.Vector3(
          center.x + rand(-9, 9),
          center.y + rand(-3.2, 3.2),
          center.z + rand(-9, 9)
        ),
        vel: new THREE.Vector3(rand(-0.2, 0.2), 0, rand(-0.2, 0.2)),
        phase: Math.random() * TAU,
        rate: rand(0.5, 1.2),
        active: true,
        respawn: 0,
      };
      this.fish.push(f);
      this.body.setColorAt(i, new THREE.Color(palette[Math.floor(Math.random() * palette.length)]));
      this.tail.setColorAt(i, new THREE.Color(palette[Math.floor(Math.random() * palette.length)]));
    }
    this.body.instanceColor.needsUpdate = true;
    this.tail.instanceColor.needsUpdate = true;
    this.dummy = new THREE.Object3D();
    this.wander = Math.random() * TAU;
    scene.add(this.body, this.tail);
  }

  update(dt, time, shark) {
    this.center.x = this.anchor.x + Math.sin(time * 0.11 + this.wander) * 12;
    this.center.z = this.anchor.z + Math.cos(time * 0.09 + this.wander) * 12;
    this.center.y = this.anchor.y + Math.sin(time * 0.3 + this.wander) * 1.2;
    const sharkDist = shark.distanceTo(this.center);
    const escape = sharkDist < 11;
    for (let i = 0; i < this.count; i++) {
      const f = this.fish[i];
      if (!f.active) {
        f.respawn -= dt;
        if (f.respawn <= 0) {
          f.active = true;
          f.pos.set(this.center.x + rand(-7, 7), this.center.y + rand(-2, 2), this.center.z + rand(-7, 7));
          f.vel.set(0, 0, 0);
        }
        this.dummy.position.copy(f.pos);
        this.dummy.scale.setScalar(0.001);
        this.dummy.updateMatrix();
        this.body.setMatrixAt(i, this.dummy.matrix);
        this.tail.setMatrixAt(i, this.dummy.matrix);
        continue;
      }
      const orbit = time * f.rate + f.phase;
      const target = new THREE.Vector3(
        this.center.x + Math.cos(orbit) * 7 + Math.sin(orbit * 2.1) * 2.3,
        this.center.y + Math.sin(orbit * 0.8) * 2.2,
        this.center.z + Math.sin(orbit) * 7 + Math.cos(orbit * 1.7) * 2.1
      );
      const desired = target.sub(f.pos);
      if (escape) {
        const away = f.pos.clone().sub(shark).normalize();
        f.vel.addScaledVector(away, dt * 22);
        f.vel.x += Math.sin(time * 4 + f.phase) * dt * 7;
        f.vel.z += Math.cos(time * 3.2 + f.phase) * dt * 7;
      } else {
        f.vel.addScaledVector(desired, dt * 0.55);
      }
      f.vel.multiplyScalar(0.965);
      const maxSpeed = escape ? 8.6 : 3.6;
      if (f.vel.length() > maxSpeed) f.vel.setLength(maxSpeed);
      f.pos.addScaledVector(f.vel, dt);
      const dir = f.vel.lengthSq() > 0.0001 ? f.vel.clone().normalize() : new THREE.Vector3(0, 0, 1);
      this.dummy.position.copy(f.pos);
      this.dummy.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), dir);
      const s = 0.9 + Math.sin(f.phase) * 0.12;
      this.dummy.scale.setScalar(s);
      this.dummy.updateMatrix();
      this.body.setMatrixAt(i, this.dummy.matrix);
      const tailPos = f.pos.clone().addScaledVector(dir, -0.38);
      this.dummy.position.copy(tailPos);
      this.dummy.updateMatrix();
      this.tail.setMatrixAt(i, this.dummy.matrix);
    }
    this.body.instanceMatrix.needsUpdate = true;
    this.tail.instanceMatrix.needsUpdate = true;
  }

  eat(pos, forward, radius) {
    let eaten = 0;
    for (let i = 0; i < this.count && eaten < 3; i++) {
      const f = this.fish[i];
      if (!f.active) continue;
      const d = f.pos.clone().sub(pos);
      if (d.length() < radius && d.normalize().dot(forward) > 0.12) {
        f.active = false;
        f.respawn = rand(14, 24);
        eaten++;
      }
    }
    return eaten;
  }
}

/* ──────────────────────────────────────────────────────────────
   Seals
   ────────────────────────────────────────────────────────────── */
function createSealModel(markerTex) {
  const group = new THREE.Group();
  const fur = new THREE.MeshPhysicalMaterial({
    color: '#5a554b',
    roughness: 0.7,
    clearcoat: 0.15,
  });
  const dark = new THREE.MeshStandardMaterial({ color: '#2b2823', roughness: 0.75 });
  const light = new THREE.MeshStandardMaterial({ color: '#b6a98f', roughness: 0.65 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.32, 1.05, 5, 12), fur);
  body.rotation.x = Math.PI / 2;
  body.scale.set(1, 1.25, 0.9);
  group.add(body);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.31, 14, 10), fur);
  head.scale.set(0.92, 0.92, 1.12);
  head.position.set(0, 0.1, -0.94);
  group.add(head);
  const snout = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8), light);
  snout.scale.set(0.85, 0.66, 1.35);
  snout.position.set(0, 0.02, -1.2);
  group.add(snout);
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), dark);
    eye.position.set(side * 0.18, 0.22, -1.17);
    group.add(eye);
    const glint = new THREE.Mesh(
      new THREE.SphereGeometry(0.012, 5, 4),
      new THREE.MeshBasicMaterial({ color: '#cdeee5' })
    );
    glint.position.set(side * 0.19, 0.235, -1.2);
    group.add(glint);
    const flipper = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), fur);
    flipper.scale.set(1.9, 0.25, 1.1);
    flipper.position.set(side * 0.42, -0.16, -0.35);
    flipper.rotation.z = side * -0.3;
    flipper.userData.side = side;
    group.add(flipper);
  }
  const fluke = new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 6), fur);
  fluke.scale.set(1.9, 0.16, 0.8);
  fluke.position.set(0, 0, 0.85);
  group.add(fluke);

  const marker = new THREE.Sprite(new THREE.SpriteMaterial({
    map: markerTex,
    color: '#f5c978',
    transparent: true,
    opacity: 0.45,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  marker.scale.set(1.25, 1.25, 1);
  marker.position.set(0, 1.45, 0);
  group.add(marker);
  group.userData.marker = marker;
  group.userData.flippers = group.children.filter(c => c.userData.side);
  return group;
}

class Seal {
  constructor(scene, markerTex, position) {
    this.model = createSealModel(markerTex);
    this.initial = position.clone();
    this.home = position.clone();
    this.pos = position.clone();
    this.heading = Math.random() * TAU;
    this.angle = Math.random() * TAU;
    this.radius = rand(7, 17);
    this.speed = rand(2.2, 3.2);
    this.active = true;
    this.respawn = 0;
    this.fleeing = false;
    this.phase = Math.random() * TAU;
    this.model.position.copy(position);
    scene.add(this.model);
  }

  update(dt, time, shark) {
    if (!this.active) {
      this.respawn -= dt;
      if (this.respawn <= 0) {
        const angle = Math.random() * TAU;
        const dist = rand(60, 100);
        this.pos.set(shark.x + Math.cos(angle) * dist, -1.25, shark.z + Math.sin(angle) * dist);
        this.home.copy(this.pos);
        this.active = true;
        this.model.visible = true;
      }
      return;
    }
    const d = this.pos.distanceTo(shark);
    this.fleeing = d < 26;
    if (this.fleeing) {
      const away = this.pos.clone().sub(shark);
      away.y = 0;
      away.normalize();
      const target = this.pos.clone().addScaledVector(away, 30);
      this.pos.lerp(new THREE.Vector3(target.x, -1.1, target.z), dt * 0.38);
      this.heading = Math.atan2(away.x, away.z);
    } else {
      this.angle += dt * 0.22;
      const tx = this.home.x + Math.cos(this.angle) * this.radius;
      const tz = this.home.z + Math.sin(this.angle) * this.radius;
      this.pos.x += (tx - this.pos.x) * dt * 0.22;
      this.pos.z += (tz - this.pos.z) * dt * 0.22;
      this.heading = Math.atan2(tx - this.pos.x, tz - this.pos.z);
    }
    this.pos.y = -1.15 + Math.sin(time * 1.4 + this.phase) * 0.23;
    this.model.position.copy(this.pos);
    this.model.rotation.y = this.heading + Math.PI;
    this.model.rotation.z = Math.sin(time * 2.1 + this.phase) * 0.1;
    this.model.rotation.x = Math.sin(time * 1.7 + this.phase) * 0.06;
    for (const flipper of this.model.userData.flippers) {
      flipper.rotation.y = Math.sin(time * 4 + this.phase) * 0.35 * flipper.userData.side;
    }
    this.model.userData.marker.material.opacity = 0.28 + Math.sin(time * 2 + this.phase) * 0.08;
    if (d < 55) {
      this.model.userData.marker.visible = true;
    } else {
      this.model.userData.marker.visible = false;
    }
  }

  eat() {
    this.active = false;
    this.model.visible = false;
    this.respawn = rand(8, 13);
  }
}

/* ──────────────────────────────────────────────────────────────
   Ships
   ────────────────────────────────────────────────────────────── */
function hullGeometry(length, beam, depth) {
  const sections = 18;
  const positions = [];
  const sideIndices = [];
  const bottomIndices = [];
  const deckIndices = [];
  const rows = [];
  for (let s = 0; s < sections; s++) {
    const t = s / (sections - 1);
    const z = -length / 2 + t * length;
    const bow = Math.pow(Math.min(1, t * 3.7), 0.58);
    const stern = 1 - 0.12 * Math.max(0, (t - 0.88) / 0.12);
    const w = Math.max(0.05, beam * 0.5 * bow * stern);
    const deckY = 0.55 + Math.pow(1 - t, 1.8) * 0.85;
    const keel = -depth * (0.45 + 0.55 * Math.min(1, t * 2.5)) + 0.2;
    const chine = deckY - depth * 0.4;
    const ring = [
      [-w, deckY, z],
      [-w * 0.84, chine, z],
      [0, keel, z],
      [w * 0.84, chine, z],
      [w, deckY, z],
    ];
    rows.push(ring);
  }
  for (const ring of rows) {
    for (const p of ring) positions.push(...p);
  }
  for (let s = 0; s < sections - 1; s++) {
    const a = s * 5;
    const b = (s + 1) * 5;
    // left side
    sideIndices.push(a, a + 1, b, b, a + 1, b + 1);
    // right side
    sideIndices.push(a + 3, a + 4, b + 3, b + 3, a + 4, b + 4);
    // bottom
    bottomIndices.push(a + 1, a + 2, b + 1, b + 1, a + 2, b + 2);
    bottomIndices.push(a + 2, a + 3, b + 2, b + 2, a + 3, b + 3);
    // deck
    deckIndices.push(a + 4, a, b + 4, b + 4, a, b);
  }
  const index = [...sideIndices, ...bottomIndices, ...deckIndices];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(index);
  geo.addGroup(0, sideIndices.length, 0);
  geo.addGroup(sideIndices.length, bottomIndices.length, 1);
  geo.addGroup(sideIndices.length + bottomIndices.length, deckIndices.length, 2);
  geo.computeVertexNormals();
  return geo;
}

const METAL = new THREE.MeshStandardMaterial({ color: '#3a4445', roughness: 0.55, metalness: 0.35 });

function makeWindow(width, height, depth, color = '#ffd99a') {
  return new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.82 })
  );
}

function createCargoShip() {
  const group = new THREE.Group();
  const length = 54;
  const beam = 11.5;
  const depth = 5.2;
  const hull = new THREE.Mesh(hullGeometry(length, beam, depth), [
    new THREE.MeshStandardMaterial({ color: '#2b3f47', roughness: 0.6, metalness: 0.15 }),
    new THREE.MeshStandardMaterial({ color: '#632b28', roughness: 0.7, metalness: 0.12 }),
    new THREE.MeshStandardMaterial({ color: '#6a6c61', roughness: 0.85 }),
  ]);
  group.add(hull);

  // Hull stripe.
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.28, length * 0.75), new THREE.MeshStandardMaterial({ color: '#a4563f', roughness: 0.5 }));
  stripe.position.set(beam / 2 + 0.04, 0.5, 0);
  const stripe2 = stripe.clone();
  stripe2.position.x = -beam / 2 - 0.04;
  group.add(stripe, stripe2);

  // Cargo stacks.
  const colors = ['#b1573e', '#426a68', '#c79758', '#3d515b', '#7e8c73', '#8b4735'];
  let idx = 0;
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 2; col++) {
      for (let level = 0; level < (row > 4 ? 2 : 1); level++) {
        const box = new THREE.Mesh(
          new THREE.BoxGeometry(3.4, 2.35, 4.3),
          new THREE.MeshStandardMaterial({ color: colors[idx++ % colors.length], roughness: 0.64, metalness: 0.18 })
        );
        box.position.set(-2.2 + col * 4.4, 2.0 + level * 2.45, -14 + row * 5.1);
        group.add(box);
        const ridge = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.1, 0.08), METAL);
        ridge.position.set(box.position.x, box.position.y + 0.9, box.position.z - 2.15);
        group.add(ridge);
      }
    }
  }

  // Bridge and accommodation.
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(8.5, 4.8, 5), new THREE.MeshStandardMaterial({ color: '#d9d8ca', roughness: 0.55 }));
  bridge.position.set(0, 3.3, 18);
  group.add(bridge);
  const bridgeTop = new THREE.Mesh(new THREE.BoxGeometry(7.2, 2.1, 3.8), new THREE.MeshStandardMaterial({ color: '#c9c8b9', roughness: 0.55 }));
  bridgeTop.position.set(0, 6.4, 17.6);
  group.add(bridgeTop);
  const windows = makeWindow(6.6, 0.62, 0.08, '#bde6dd');
  windows.position.set(0, 6.65, 15.66);
  group.add(windows);
  const lowerWindows = windows.clone();
  lowerWindows.position.set(0, 3.8, 15.42);
  group.add(lowerWindows);
  for (const side of [-1, 1]) {
    const sideWin = makeWindow(0.08, 0.55, 2.6, '#bde6dd');
    sideWin.position.set(side * 4.09, 6.6, 17.5);
    group.add(sideWin);
  }

  // Yellow funnel.
  const funnel = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.88, 2.6, 10), new THREE.MeshStandardMaterial({ color: '#c6893f', roughness: 0.5 }));
  funnel.position.set(0, 8.2, 18.6);
  group.add(funnel);
  const funnelCap = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.2, 10), METAL);
  funnelCap.position.set(0, 9.55, 18.6);
  group.add(funnelCap);

  // Foremast.
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 8, 7), METAL);
  mast.position.set(0, 6.1, -22);
  group.add(mast);
  const yard = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 5.2, 6), METAL);
  yard.rotation.z = Math.PI / 2;
  yard.position.set(0, 8.7, -22);
  group.add(yard);

  // Railings along the deck edges.
  const railMat = new THREE.LineBasicMaterial({ color: '#8a9894', transparent: true, opacity: 0.65 });
  for (const side of [-1, 1]) {
    const pts = [];
    for (let z = -length / 2 + 2; z < length / 2 - 4; z += 2.2) {
      pts.push(new THREE.Vector3(side * beam * 0.48, 1.4, z));
      pts.push(new THREE.Vector3(side * beam * 0.48, 2.1, z));
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    group.add(new THREE.LineSegments(geo, railMat));
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(side * beam * 0.48, 2.05, -length / 2 + 2),
        new THREE.Vector3(side * beam * 0.48, 2.05, length / 2 - 4),
      ]),
      railMat
    );
    group.add(line);
  }

  const wake = createWake(beam * 2.4, 58, 1.2);
  wake.position.set(0, 0.15, length / 2 + 29);
  group.add(wake);

  return { group, type: 'cargo', length, beam, speed: 3.0, wake };
}

function createTrawler() {
  const group = new THREE.Group();
  const length = 21;
  const beam = 5.4;
  const depth = 3.4;
  const hull = new THREE.Mesh(hullGeometry(length, beam, depth, 0.8), [
    new THREE.MeshStandardMaterial({ color: '#7a2e2a', roughness: 0.58, metalness: 0.12 }),
    new THREE.MeshStandardMaterial({ color: '#4f1b1b', roughness: 0.68 }),
    new THREE.MeshStandardMaterial({ color: '#8e8a79', roughness: 0.8 }),
  ]);
  group.add(hull);

  const deck = new THREE.Mesh(new THREE.BoxGeometry(4.7, 0.18, 12), new THREE.MeshStandardMaterial({ color: '#72736a', roughness: 0.9 }));
  deck.position.set(0, 0.72, 1.4);
  group.add(deck);

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(3.9, 3.1, 5.2), new THREE.MeshStandardMaterial({ color: '#e4e3d5', roughness: 0.52 }));
  cabin.position.set(0, 2.35, 2.4);
  group.add(cabin);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.2, 5.7), new THREE.MeshStandardMaterial({ color: '#b7b8aa', roughness: 0.7 }));
  roof.position.set(0, 3.95, 2.4);
  group.add(roof);
  const windows = makeWindow(3.35, 0.63, 0.08, '#d4f4e8');
  windows.position.set(0, 3.05, 5.02);
  group.add(windows);
  for (const side of [-1, 1]) {
    const sideWin = makeWindow(0.08, 0.6, 2.1, '#d4f4e8');
    sideWin.position.set(side * 1.96, 3.02, 2.5);
    group.add(sideWin);
  }

  // A-frame and gear.
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 7.5, 6), METAL);
  mast.position.set(0, 6.7, 2.6);
  group.add(mast);
  const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 8, 6), METAL);
  boom.rotation.x = Math.PI / 2.5;
  boom.position.set(0, 5.8, -1.4);
  group.add(boom);
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 5.5, 6), METAL);
  bar.rotation.z = Math.PI / 2;
  bar.position.set(0, 3.3, -6.4);
  group.add(bar);

  // Net drum.
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 2.3, 14), new THREE.MeshStandardMaterial({ color: '#6f7d73', roughness: 0.8 }));
  drum.rotation.z = Math.PI / 2;
  drum.position.set(0, 1.35, -5.1);
  group.add(drum);
  for (let i = 0; i < 3; i++) {
    const buoy = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 6), new THREE.MeshStandardMaterial({ color: '#e17e35', roughness: 0.45 }));
    buoy.position.set(-1.8 + i * 1.8, 1.9, -7.1);
    group.add(buoy);
  }

  const wake = createWake(beam * 2.8, 25, 0.85);
  wake.position.set(0, 0.14, length / 2 + 12.5);
  group.add(wake);

  return { group, type: 'trawler', length, beam, speed: 6.0, wake };
}

function createYacht() {
  const group = new THREE.Group();
  const length = 17;
  const beam = 4.6;
  const depth = 2.1;
  const hull = new THREE.Mesh(hullGeometry(length, beam, depth), [
    new THREE.MeshStandardMaterial({ color: '#e2e5dd', roughness: 0.32, metalness: 0.25 }),
    new THREE.MeshStandardMaterial({ color: '#233b45', roughness: 0.4, metalness: 0.25 }),
    new THREE.MeshStandardMaterial({ color: '#b8b9aa', roughness: 0.7 }),
  ]);
  group.add(hull);

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.4, 7), new THREE.MeshStandardMaterial({ color: '#f0f1e8', roughness: 0.32, metalness: 0.12 }));
  cabin.position.set(0, 1.65, 1.2);
  group.add(cabin);
  const cabinTop = new THREE.Mesh(new THREE.BoxGeometry(3.15, 1.15, 4.8), new THREE.MeshStandardMaterial({ color: '#e3e5dc', roughness: 0.35 }));
  cabinTop.position.set(0, 2.9, 1.9);
  group.add(cabinTop);
  const windshield = makeWindow(2.9, 0.72, 0.1, '#173d4a');
  windshield.rotation.x = -0.4;
  windshield.position.set(0, 2.85, -0.6);
  group.add(windshield);
  for (const side of [-1, 1]) {
    const sideGlass = makeWindow(0.08, 0.64, 3.8, '#173d4a');
    sideGlass.position.set(side * 1.59, 2.95, 1.9);
    group.add(sideGlass);
    const window = makeWindow(0.08, 0.5, 2.8, '#ffd79a');
    window.position.set(side * 1.71, 1.65, 1.4);
    group.add(window);
  }
  const arch = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.08, 5, 14, Math.PI), METAL);
  arch.rotation.y = Math.PI / 2;
  arch.position.set(0, 3.5, 3.6);
  group.add(arch);
  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.3, 4), METAL);
  antenna.position.set(0, 5, 3.6);
  group.add(antenna);

  const wake = createWake(beam * 3.2, 30, 0.95);
  wake.position.set(0, 0.13, length / 2 + 15);
  group.add(wake);

  return { group, type: 'yacht', length, beam, speed: 8.0, wake };
}

function createWake(width, length, opacity) {
  const tex = foamTexture();
  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    color: '#d5f3e8',
    transparent: true,
    opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
  const geo = new THREE.PlaneGeometry(width, length, 1, 1);
  geo.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 2;
  return mesh;
}

function createWakeShadow(beam, length) {
  const tex = softCircleTexture('rgba(0,16,20,.45)', 'rgba(0,16,20,0)');
  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
    blending: THREE.NormalBlending,
    side: THREE.DoubleSide,
    color: '#021b21',
  });
  const geo = new THREE.PlaneGeometry(beam * 2.1, length * 1.15);
  geo.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = -0.09;
  mesh.renderOrder = 3;
  return mesh;
}

class Ship {
  constructor(scene, type, angle, radius, speedScale = 1) {
    const built = type === 'cargo' ? createCargoShip() : type === 'trawler' ? createTrawler() : createYacht();
    this.group = built.group;
    this.type = type;
    this.length = built.length;
    this.beam = built.beam;
    this.baseSpeed = built.speed * speedScale;
    this.speed = this.baseSpeed;
    this.radius = radius;
    this.angle = angle;
    this.wake = built.wake;
    this.wakeShadow = createWakeShadow(built.beam, built.length);
    this.group.add(this.wakeShadow);
    this.group.rotation.order = 'YXZ';
    this.bobPhase = Math.random() * TAU;
    scene.add(this.group);
    this.update(0, 0);
  }

  update(dt, time) {
    this.angle += (this.speed / this.radius) * dt;
    const x = Math.cos(this.angle) * this.radius;
    const z = Math.sin(this.angle) * this.radius;
    this.group.position.set(x, 0.15 + Math.sin(time * 0.9 + this.bobPhase) * 0.06, z);
    const tangent = this.angle + Math.PI / 2;
    this.group.rotation.y = Math.PI - this.angle;
    this.group.rotation.z = Math.sin(time * 0.7 + this.bobPhase) * 0.012;
    this.group.rotation.x = Math.sin(time * 0.55 + this.bobPhase * 0.9) * 0.009;
    this.wake.position.y = 0.15 - this.group.position.y + 0.02;
    if (this.wake.material.map) {
      this.wake.material.map.offset.y -= dt * 0.05;
    }
  }
}

/* ──────────────────────────────────────────────────────────────
   World
   ────────────────────────────────────────────────────────────── */
export class World {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.time = 0;
    this.fishSchools = [];
    this.seals = [];
    this.ships = [];
    this.markerTex = ringTexture();
    this.underwaterMix = 1;
    this.fogUnder = new THREE.Color('#073743');
    this.fogAbove = new THREE.Color('#b7cccb');

    const env = makeEnvironment();
    env.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = env;
    scene.environmentIntensity = 0.8;
    scene.background = new THREE.Color('#031a22');

    this.sky = createSky();
    scene.add(this.sky);

    this.ocean = createOcean();
    scene.add(this.ocean);

    this.floor = createSeafloor();
    scene.add(this.floor);

    this.shafts = createShafts();
    scene.add(this.shafts);

    // Pools of refracted sunlight on the underside of the ceiling.
    this.surfaceGlow = new THREE.Group();
    const glowTex = softCircleTexture('rgba(190,255,241,.95)', 'rgba(90,210,200,0)');
    for (let i = 0; i < 5; i++) {
      const mat = new THREE.MeshBasicMaterial({
        map: glowTex,
        color: i % 2 ? '#75d7ce' : '#d8fff5',
        transparent: true,
        opacity: 0.045 + Math.random() * 0.055,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });
      const patch = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
      patch.rotation.x = -Math.PI / 2;
      patch.position.set(rand(-65, 65), -0.35 - Math.random() * 0.4, rand(-80, 55));
      patch.scale.setScalar(rand(28, 58));
      patch.renderOrder = 1;
      this.surfaceGlow.add(patch);
    }
    scene.add(this.surfaceGlow);

    this.particles = new Particles(scene);

    this.lights = new THREE.Group();
    const hemi = new THREE.HemisphereLight('#a4f2eb', '#031517', 1.15);
    this.lights.add(hemi);
    const sun = new THREE.DirectionalLight('#c9fff4', 1.75);
    sun.position.set(-35, 60, -20);
    this.lights.add(sun);
    const fill = new THREE.DirectionalLight('#348d9b', 1.15);
    fill.position.set(30, -15, 20);
    this.lights.add(fill);
    const surfaceGlow = new THREE.PointLight('#9bffe9', 24, 80, 2);
    surfaceGlow.position.set(0, -3, -15);
    this.lights.add(surfaceGlow);
    scene.add(this.lights);

    // Fish schools at different depths.
    const schoolData = [
      [new THREE.Vector3(0, -14.5, -13), 54, '#9fbcb8'],
      [new THREE.Vector3(17, -21, -41), 58, '#9dbab8'],
      [new THREE.Vector3(-32, -13, -66), 62, '#a9c8c5'],
      [new THREE.Vector3(48, -27, -36), 55, '#809fa4'],
      [new THREE.Vector3(-76, -7, 24), 58, '#b7ccc7'],
      [new THREE.Vector3(18, -44, 40), 50, '#70959a'],
      [new THREE.Vector3(82, -12, -84), 54, '#a4c0c0'],
      [new THREE.Vector3(-26, -33, -105), 48, '#88aaa9'],
      [new THREE.Vector3(110, -28, 60), 52, '#97b4b2'],
    ];
    for (const [pos, count, tint] of schoolData) {
      this.fishSchools.push(new FishSchool(scene, pos, count, tint));
    }

    // Seals, kept within a comfortable hunting radius.
    const sealSpots = [
      new THREE.Vector3(-19, -1.2, -32),
      new THREE.Vector3(31, -1.2, -49),
      new THREE.Vector3(-52, -1.2, 18),
      new THREE.Vector3(68, -1.2, 35),
      new THREE.Vector3(6, -1.2, 58),
      new THREE.Vector3(-28, -1.2, 76),
    ];
    for (const pos of sealSpots) this.seals.push(new Seal(scene, this.markerTex, pos));

    // Ships, each on a long, slow patrol.
    this.ships.push(new Ship(scene, 'cargo', Math.PI * 0.42, 178, 0.85));
    this.ships.push(new Ship(scene, 'trawler', Math.PI * 1.37, 88, 1.0));
    this.ships.push(new Ship(scene, 'yacht', Math.PI * 0.95, 132, 1.15));

    this.tempVec = new THREE.Vector3();
    this.tempVec2 = new THREE.Vector3();
  }

  update(dt, time, sharkPos, camera, speed) {
    this.time = time;
    this.ocean.material.uniforms.uTime.value = time;
    this.sky.material.uniforms.uTime.value = time;
    this.floor.userData.causticMat.uniforms.uTime.value = time;
    this.floor.userData.kelpMat.uniforms.uTime.value = time;

    for (const ship of this.ships) ship.update(dt, time);
    for (const school of this.fishSchools) school.update(dt, time, sharkPos);
    for (const seal of this.seals) seal.update(dt, time, sharkPos);
    this.particles.update(dt, time, camera, sharkPos, speed);

    for (const shaft of this.shafts.userData.shafts) {
      shaft.material.opacity = shaft.userData.baseOpacity * (0.72 + Math.sin(time * 0.34 + shaft.userData.phase) * 0.28);
      shaft.rotation.z += Math.sin(time * 0.08 + shaft.userData.phase) * 0.0002;
    }

    // Fog and water tint follow the camera across the waterline.
    const above = camera.position.y > 0;
    this.underwaterMix += ((above ? 0 : 1) - this.underwaterMix) * Math.min(1, dt * 2.2);
    const fogCol = this.fogAbove.clone().lerp(this.fogUnder, this.underwaterMix);
    const fogDensity = 0.0017 + this.underwaterMix * 0.0125;
    if (!this.scene.fog) this.scene.fog = new THREE.FogExp2(fogCol, fogDensity);
    this.scene.fog.color.copy(fogCol);
    this.scene.fog.density = fogDensity;
    const oceanFog = fogCol.clone().lerp(new THREE.Color('#105b67'), this.underwaterMix * 0.72);
    this.ocean.material.uniforms.uFogColor.value.copy(oceanFog);
    this.ocean.material.uniforms.uFogDensity.value = fogDensity;
    this.sky.position.copy(camera.position);
    this.sky.position.y = 0;
    this.sky.visible = camera.position.y > 0.1;

    this.lights.children[1].intensity = 1.75 * (0.4 + this.underwaterMix * 0.6);
    this.lights.children[3].intensity = 15 + this.underwaterMix * 12;
  }

  nearestSeal(pos, maxDist = 65) {
    let best = null;
    let bestDist = maxDist;
    for (const seal of this.seals) {
      if (!seal.active) continue;
      const d = seal.pos.distanceTo(pos);
      if (d < bestDist) {
        bestDist = d;
        best = seal;
      }
    }
    return best ? { seal: best, distance: bestDist } : null;
  }

  nearestFish(pos, maxDist = 15) {
    let best = null;
    let bestDist = maxDist;
    for (const school of this.fishSchools) {
      for (const fish of school.fish) {
        if (!fish.active) continue;
        const d = fish.pos.distanceTo(pos);
        if (d < bestDist) {
          bestDist = d;
          best = fish;
        }
      }
    }
    return best ? { fish: best, distance: bestDist } : null;
  }

  nearestShip(pos) {
    let best = null;
    let bestDist = Infinity;
    for (const ship of this.ships) {
      const d = ship.group.position.distanceTo(pos);
      if (d < bestDist) {
        bestDist = d;
        best = ship;
      }
    }
    return { ship: best, distance: bestDist };
  }

  bite(mouth, forward) {
    const result = { fish: 0, seal: null };
    for (const school of this.fishSchools) {
      const eaten = school.eat(mouth, forward, 4.8);
      if (eaten) {
        result.fish += eaten;
        this.particles.spawn('bubble', mouth, 3, 1.4);
      }
      if (result.fish >= 3) break;
    }
    if (result.fish > 0) {
      this.particles.spawn('blood', mouth, 8, 1);
      this.particles.bloodCloud(mouth);
    }

    // Seal has to be close to the jaws, not merely near the body.
    let nearest = null;
    let nearestDist = 6.1;
    for (const seal of this.seals) {
      if (!seal.active) continue;
      const d = seal.pos.distanceTo(mouth);
      if (d < nearestDist) {
        nearest = seal;
        nearestDist = d;
      }
    }
    if (nearest) {
      const toSeal = nearest.pos.clone().sub(mouth).normalize();
      if (toSeal.dot(forward) > -0.15) {
        result.seal = nearest;
        nearest.eat();
        this.particles.spawn('blood', nearest.pos, 24, 1.2);
        this.particles.bloodCloud(nearest.pos);
        this.particles.spawn('bubble', nearest.pos, 12, 1.6);
      }
    }
    return result;
  }

  splash(pos, strength = 1) {
    this.particles.spawn('splash', new THREE.Vector3(pos.x, 0.1, pos.z), 65, strength);
    this.particles.surfaceRing(pos, strength);
  }

  blood(pos) {
    this.particles.spawn('blood', pos, 20, 1.2);
    this.particles.bloodCloud(pos);
  }

  shipDanger(pos) {
    let danger = 0;
    let nearest = null;
    for (const ship of this.ships) {
      const dx = ship.group.position.x - pos.x;
      const dz = ship.group.position.z - pos.z;
      const d = Math.sqrt(dx * dx + dz * dz);
      const radius = ship.beam * 2.4 + ship.length * 0.32;
      if (d < radius) {
        const amount = 0.35 + (1 - d / radius) * 0.65;
        if (amount > danger) {
          danger = amount;
          nearest = ship;
        }
      }
    }
    return { danger, ship: nearest };
  }
}
