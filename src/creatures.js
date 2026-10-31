import * as THREE from 'three';
import {
  TAU,
  clamp,
  damp,
  lerp,
  mulberry32,
  range,
  makeCurve,
  createGlowSprite,
  createPointsMaterial,
} from './utils.js';

export const SPECIES = {
  veil: {
    name: 'VEIL SOVEREIGN',
    latin: 'Velifera cathedralis',
    size: '28 M',
    behavior: 'DRIFT / FILTER',
    range: 48,
    color: 0x8dffe3,
    index: 1,
    desc: 'A cathedral-sized filter feeder that drifts on the deep current, singing through the crown of its six translucent sails.',
  },
  rift: {
    name: 'RIFT HUNTER',
    latin: 'Falx abyssi',
    size: '22 M',
    behavior: 'STALK / AMBUSH',
    range: 42,
    color: 0xffa477,
    index: 2,
    desc: 'An apex pursuit predator. It circles before it commits, reading movement through six pressure-sensitive eyes.',
  },
  spire: {
    name: 'SPIRE DRIFTER',
    latin: 'Spiralis aurora',
    size: '4.8 M',
    behavior: 'GRAZE / FLEE',
    range: 18,
    color: 0xffc98f,
    index: 3,
    desc: 'A coiled grazer that farms light with feather arms. When threatened it folds into its spiral and sinks.',
  },
  shoal: {
    name: 'GLASS SHOAL',
    latin: 'Vitreus grex',
    size: '0.6 M',
    behavior: 'SCHOOL / SCATTER',
    range: 20,
    color: 0x8ff9ff,
    index: 4,
    desc: 'A school of transparent shard-fish. Each body is a living lens; together they behave as one nervous animal.',
  },
  bell: {
    name: 'HALO BLOOM',
    latin: 'Corona lucens',
    size: '0.9 M',
    behavior: 'PULSE / DRIFT',
    range: 17,
    color: 0xb0a3ff,
    index: 5,
    desc: 'A drifting colony of ring-shaped organisms that pulse in unison, broadcasting soft light into the water column.',
  },
};

const BODY_VERTEX = `
#include <common>
uniform float uTime;
uniform float uPhase;
varying float vWave;
`;

const BODY_WAVE = `
#include <begin_vertex>
float bodyWave = sin(position.z * 0.32 + uTime * 1.05 + uPhase) * 0.06;
transformed.y += bodyWave;
vWave = bodyWave;
`;

const BODY_FRAGMENT = `
#include <common>
uniform float uTime;
varying float vWave;
`;

const BODY_FRAGMENT_PATCH = `
#include <emissivemap_fragment>
float pulse = 0.5 + 0.5 * sin(uTime * 0.8 + vWave * 24.0);
totalEmissiveRadiance += vec3(0.01, 0.085, 0.075) * pulse;
`;

function bodyMaterial(color = 0x0a252d, seed = 1) {
  const material = new THREE.MeshPhysicalMaterial({
    color,
    vertexColors: true,
    roughness: 0.38,
    metalness: 0.42,
    clearcoat: 0.72,
    clearcoatRoughness: 0.24,
    sheen: 0.5,
    sheenColor: new THREE.Color(0x3bffe0),
    sheenRoughness: 0.62,
    emissive: new THREE.Color(0x021c20),
    emissiveIntensity: 0.7,
    iridescence: 0.65,
    iridescenceIOR: 1.3,
    iridescenceThicknessMinimum: 100,
    iridescenceThicknessMaximum: 420,
  });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = { value: 0 };
    shader.uniforms.uPhase = { value: seed * 2.7 };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', BODY_VERTEX)
      .replace('#include <begin_vertex>', BODY_WAVE);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', BODY_FRAGMENT)
      .replace('#include <emissivemap_fragment>', BODY_FRAGMENT_PATCH);
    material.userData.shader = shader;
  };
  return material;
}

function finMaterial(color, glow, opacity = 0.58, phase = 0) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPhase: { value: phase },
      uColor: { value: new THREE.Color(color) },
      uGlow: { value: new THREE.Color(glow) },
      uOpacity: { value: opacity },
    },
    vertexShader: `
      uniform float uTime;
      uniform float uPhase;
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      void main() {
        vec3 p = position;
        float span = abs(p.x);
        float wave = sin(p.x * 0.34 + p.z * 0.24 + uTime * 0.92 + uPhase) * 0.16 * (0.22 + span * 0.075);
        p.y += wave;
        p.z += cos(p.x * 0.2 + uTime * 0.58 + uPhase) * 0.1 * (0.15 + span * 0.035);
        vec4 wp = modelMatrix * vec4(p, 1.0);
        vWorld = wp.xyz;
        vNormalW = normalize(mat3(modelMatrix) * normal);
        vUv = uv;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColor;
      uniform vec3 uGlow;
      uniform float uOpacity;
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      void main() {
        vec3 N = normalize(vNormalW);
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - abs(dot(N, V)), 2.0);
        float edge = smoothstep(0.43, 0.5, abs(vUv.y - 0.5));
        float tip = smoothstep(0.86, 1.0, vUv.x);
        float veins = pow(abs(sin(vUv.y * 34.0 + vUv.x * 1.5 + uTime * 0.09)), 22.0);
        vec3 col = uColor * (0.3 + 0.66 * fres) + uGlow * (edge * 1.05 + tip * 1.2 + veins * 0.28);
        float alpha = uOpacity * (0.34 + 0.66 * fres) + edge * 0.18 + tip * 0.14;
        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.NormalBlending,
  });
}

function tentacleMaterial(color, glow, opacity = 0.5, phase = 0) {
  const material = new THREE.MeshStandardMaterial({
    color,
    emissive: glow,
    emissiveIntensity: 0.8,
    roughness: 0.45,
    metalness: 0.15,
    transparent: true,
    opacity,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = { value: 0 };
    shader.uniforms.uPhase = { value: phase };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;\nuniform float uPhase;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        float sway = sin(position.z * 0.38 + uTime * 1.3 + uPhase) * 0.15 * (0.25 + abs(position.z) * 0.035);
        transformed.x += sway;
        transformed.y += cos(position.z * 0.22 + uTime * 0.85 + uPhase) * 0.1;`
      );
    material.userData.shader = shader;
  };
  return material;
}

function createLoftGeometry({ length = 16, segments = 36, radial = 18, profile, seed = 1, ridge = 0.055 }) {
  const positions = [];
  const uvs = [];
  const colors = [];
  const indices = [];
  const rng = mulberry32(seed);
  const twist = range(rng, -0.1, 0.1);

  for (let i = 0; i <= segments; i += 1) {
    const t = i / segments;
    const z = -length / 2 + t * length;
    const [rx, ry] = profile(t);
    for (let j = 0; j <= radial; j += 1) {
      const angle = (j / radial) * TAU;
      const ripple = 1 + Math.sin(angle * 7 + t * 12 + seed) * ridge + Math.sin(angle * 3 - t * 8) * ridge * 0.48;
      const x = Math.cos(angle) * rx * ripple;
      const y = Math.sin(angle) * ry * ripple;
      positions.push(x, y, z);
      uvs.push(j / radial, t);
      const topness = clamp(y / Math.max(ry, 0.001), -1, 1);
      const shade = 0.4 + topness * 0.19 + Math.sin(t * 19 + seed) * 0.035 + twist;
      colors.push(shade * 0.57, shade * 0.93, shade * 0.88);
    }
  }

  for (let i = 0; i < segments; i += 1) {
    for (let j = 0; j < radial; j += 1) {
      const a = i * (radial + 1) + j;
      const b = a + radial + 1;
      const c = b + 1;
      const d = a + 1;
      indices.push(a, b, d, b, c, d);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function createFinGeometry({
  span = 10,
  chord = 5,
  sweep = 1.2,
  lift = 1.1,
  droop = 0.7,
  segments = 30,
  chordSegments = 8,
  scallop = 0,
}) {
  const positions = [];
  const uvs = [];
  const indices = [];

  for (let i = 0; i <= segments; i += 1) {
    const u = i / segments;
    const x = span * u;
    const widthBase = chord * (0.3 + 0.7 * Math.pow(Math.sin(Math.PI * Math.min(1, u * 1.04)), 0.72)) * (1 - u * 0.22);
    const width = widthBase * (1 + Math.sin(u * Math.PI * 7) * scallop);
    const y = Math.sin(u * Math.PI * 0.52) * lift - u * u * droop;
    const centerZ = -sweep * u * u;
    for (let j = 0; j <= chordSegments; j += 1) {
      const v = (j / chordSegments) * 2 - 1;
      const z = centerZ + v * width * 0.5;
      const y2 = y - v * v * width * 0.1;
      positions.push(x, y2, z);
      uvs.push(u, j / chordSegments);
    }
  }

  for (let i = 0; i < segments; i += 1) {
    for (let j = 0; j < chordSegments; j += 1) {
      const a = i * (chordSegments + 1) + j;
      const b = a + chordSegments + 1;
      const c = b + 1;
      const d = a + 1;
      indices.push(a, b, d, b, c, d);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function createPetalGeometry(length = 2.4, width = 2.1) {
  const segments = 12;
  const across = 7;
  const positions = [];
  const uvs = [];
  const indices = [];
  for (let i = 0; i <= segments; i += 1) {
    const u = i / segments;
    const z = u * length;
    const w = Math.pow(Math.sin(Math.PI * u), 0.7) * width;
    for (let j = 0; j <= across; j += 1) {
      const v = (j / across) * 2 - 1;
      positions.push(v * w * 0.5, Math.sin(u * Math.PI) * 0.45 + v * v * 0.22, z);
      uvs.push(u, j / across);
    }
  }
  for (let i = 0; i < segments; i += 1) {
    for (let j = 0; j < across; j += 1) {
      const a = i * (across + 1) + j;
      const b = a + across + 1;
      const c = b + 1;
      const d = a + 1;
      indices.push(a, b, d, b, c, d);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function createGlowPoints(points, color, size, texture, opacity = 0.9) {
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = createPointsMaterial(texture, color, size, opacity);
  const cloud = new THREE.Points(geometry, material);
  cloud.frustumCulled = false;
  return cloud;
}

function attachGlow(root, texture, color, scale, position, opacity = 0.8) {
  const glow = createGlowSprite(texture, color, scale, opacity);
  glow.position.copy(position);
  root.add(glow);
  return glow;
}

function buildVeil(timeUniform, glowTexture, seed = 3) {
  const root = new THREE.Group();
  const bank = new THREE.Group();
  root.add(bank);

  const bodyMat = bodyMaterial(0x09262e, seed);
  bodyMat.color.setHex(0x041b21);
  bodyMat.emissive.setHex(0x011114);
  bodyMat.emissiveIntensity = 0.48;
  bodyMat.metalness = 0.34;
  bodyMat.roughness = 0.46;
  bodyMat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = timeUniform;
    shader.uniforms.uPhase = { value: 1.2 };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', BODY_VERTEX)
      .replace('#include <begin_vertex>', BODY_WAVE);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', BODY_FRAGMENT)
      .replace('#include <emissivemap_fragment>', BODY_FRAGMENT_PATCH);
    bodyMat.userData.shader = shader;
  };

  const bodyGeometry = createLoftGeometry({
    length: 19,
    segments: 46,
    radial: 22,
    seed,
    ridge: 0.07,
    profile: (t) => {
      const bell = Math.pow(Math.sin(Math.PI * t), 0.62);
      return [0.3 + bell * 2.7, 0.36 + bell * 3.05];
    },
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMat);
  body.rotation.z = 0.04;
  bank.add(body);

  const crown = new THREE.Group();
  crown.position.z = 1.8;
  bank.add(crown);

  const sailData = [
    { angle: Math.PI / 2, span: 13.2, chord: 8.2, sweep: 2.8, lift: 2.0, droop: 2.4, color: 0x061f25, glow: 0x48e9c7, opacity: 0.52 },
    { angle: Math.PI * 0.17, span: 11.2, chord: 6.8, sweep: 2.3, lift: 1.5, droop: 3.0, color: 0x061d23, glow: 0x51efd1, opacity: 0.46 },
    { angle: Math.PI * 0.83, span: 11.6, chord: 7.2, sweep: 2.5, lift: 1.6, droop: 2.7, color: 0x061d23, glow: 0x51efd1, opacity: 0.46 },
    { angle: -Math.PI / 2, span: 8.8, chord: 5.4, sweep: 2.2, lift: 1.0, droop: 2.3, color: 0x051b20, glow: 0x36d6b9, opacity: 0.38 },
    { angle: Math.PI * 0.5 + 0.38, span: 7.8, chord: 4.8, sweep: 2.7, lift: 1.2, droop: 2.2, color: 0x061d22, glow: 0x3de0c4, opacity: 0.36 },
  ];

  sailData.forEach((sail, index) => {
    const material = finMaterial(sail.color, sail.glow, sail.opacity, index * 1.7);
    material.uniforms.uTime = timeUniform;
    const geometry = createFinGeometry({
      span: sail.span,
      chord: sail.chord,
      sweep: sail.sweep,
      lift: sail.lift,
      droop: sail.droop,
      segments: 34,
      chordSegments: 10,
      scallop: 0.09,
    });
    const fin = new THREE.Mesh(geometry, material);
    fin.rotation.z = sail.angle;
    fin.rotation.y = -0.08 + index * 0.025;
    fin.position.set(Math.cos(sail.angle) * 1.5, Math.sin(sail.angle) * 1.7, 0);
    crown.add(fin);
  });

  const haloGeometry = new THREE.TorusGeometry(3.55, 0.04, 5, 84);
  const haloMat = new THREE.MeshBasicMaterial({ color: 0x5fe8cb, transparent: true, opacity: 0.36, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
  const halo = new THREE.Mesh(haloGeometry, haloMat);
  halo.position.z = 6.2;
  halo.rotation.x = 0.05;
  bank.add(halo);

  const halo2 = halo.clone();
  halo2.scale.setScalar(1.16);
  halo2.material = haloMat.clone();
  halo2.material.opacity = 0.12;
  halo2.position.z = 5.8;
  bank.add(halo2);

  const head = new THREE.Mesh(new THREE.SphereGeometry(1.62, 20, 14), bodyMat);
  head.scale.set(1.0, 0.82, 1.55);
  head.position.z = 8.15;
  bank.add(head);

  const mouthMat = new THREE.MeshBasicMaterial({ color: 0x020b0d, transparent: true, opacity: 0.94 });
  const mouth = new THREE.Mesh(new THREE.CircleGeometry(1.18, 32), mouthMat);
  mouth.position.z = 9.86;
  mouth.rotation.x = Math.PI;
  bank.add(mouth);

  const lip = new THREE.Mesh(new THREE.TorusGeometry(1.26, 0.07, 6, 48), new THREE.MeshBasicMaterial({ color: 0x73f5d4, transparent: true, opacity: 0.52, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
  lip.position.z = 9.88;
  bank.add(lip);

  const glowPositions = [];
  for (let i = 0; i < 16; i += 1) {
    const a = i * 2.39;
    const z = -6 + (i / 16) * 13.2;
    const radius = 1.5 + Math.sin(i * 1.2) * 0.55;
    glowPositions.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius * 1.2, z));
  }
  glowPositions.push(new THREE.Vector3(0, 0, 8.8), new THREE.Vector3(1.8, 1.4, 6.3), new THREE.Vector3(-1.8, -1.2, 6.2));
  bank.add(createGlowPoints(glowPositions, 0x8dffe6, 0.78, glowTexture, 0.92));

  const tentacles = new THREE.Group();
  tentacles.position.z = -2.2;
  bank.add(tentacles);
  const rng = mulberry32(seed + 21);
  for (let i = 0; i < 9; i += 1) {
    const a = (i / 11) * TAU;
    const length = range(rng, 9, 18);
    const points = [];
    for (let s = 0; s < 6; s += 1) {
      const t = s / 5;
      points.push(new THREE.Vector3(
        Math.cos(a) * (1.2 + Math.sin(t * 3.2 + i) * 1.4) * (1 - t * 0.22),
        Math.sin(a) * (1.1 + Math.cos(t * 2.6 + i) * 0.8) * (1 - t * 0.2) - t * length * 0.5,
        -t * length
      ));
    }
    const curve = makeCurve(points);
    const material = tentacleMaterial(0x07282b, 0x31cfb4, range(rng, 0.2, 0.4), i * 0.9);
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = timeUniform;
      shader.uniforms.uPhase = { value: i * 0.9 };
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uTime;\nuniform float uPhase;')
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          float sway = sin(position.z * 0.38 + uTime * 1.3 + uPhase) * 0.15 * (0.25 + abs(position.z) * 0.035);
          transformed.x += sway;
          transformed.y += cos(position.z * 0.22 + uTime * 0.85 + uPhase) * 0.1;`
        );
      material.userData.shader = shader;
    };
    const tentacle = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, range(rng, 0.035, 0.09), 5, false), material);
    tentacles.add(tentacle);
  }

  const hornMat = new THREE.MeshStandardMaterial({ color: 0x102d33, roughness: 0.3, metalness: 0.55, emissive: 0x052226, emissiveIntensity: 0.5 });
  for (let i = 0; i < 4; i += 1) {
    const angle = Math.PI * 0.5 + (i - 1.5) * 0.38;
    const points = [];
    for (let s = 0; s < 5; s += 1) {
      const t = s / 4;
      points.push(new THREE.Vector3(Math.cos(angle) * (2.1 + t * 5.2), Math.sin(angle) * (2.1 + t * 4.3), 4.6 - t * 1.2 - Math.abs(t - 0.5) * 1.8));
    }
    const horn = new THREE.Mesh(new THREE.TubeGeometry(makeCurve(points), 18, 0.14, 5, false), hornMat);
    bank.add(horn);
  }

  attachGlow(bank, glowTexture, 0x74ffdf, 1.15, new THREE.Vector3(0, 0, 9.95), 0.14);
  attachGlow(bank, glowTexture, 0x6cffd7, 1.7, new THREE.Vector3(2.8, 2.2, 5.1), 0.22);
  attachGlow(bank, glowTexture, 0x6cffd7, 1.5, new THREE.Vector3(-3, -2.4, 5.5), 0.2);

  const tailMat = finMaterial(0x051c21, 0x3adfc1, 0.42, 4.4);
  tailMat.uniforms.uTime = timeUniform;
  const tailGeo = createFinGeometry({ span: 6.8, chord: 2.7, sweep: 0.4, lift: 0.5, droop: 0.5, segments: 22, chordSegments: 6 });
  for (let side = -1; side <= 1; side += 2) {
    const tail = new THREE.Mesh(tailGeo, tailMat);
    tail.position.set(0, side * 0.35, -8.8);
    tail.rotation.y = Math.PI / 2;
    tail.rotation.z = side * 0.42;
    bank.add(tail);
  }

  const ridge = [];
  for (let i = 0; i < 9; i += 1) {
    const t = i / 8;
    ridge.push(new THREE.Vector3(0, 2.8 + Math.sin(t * Math.PI) * 0.6, 5.2 - t * 13));
  }
  bank.add(createGlowPoints(ridge, 0x8dffe6, 0.38, glowTexture, 0.85));

  return { root, bank, body, crown, halo, lip };
}

class VeilSovereign {
  constructor(scene, timeUniform, glowTexture) {
    this.species = 'veil';
    this.scene = scene;
    this.center = new THREE.Vector3(-5.2, -26, 27.5);
    this.radius = 24;
    this.angle = 4.51;
    this.speed = 0.82;
    this.position = new THREE.Vector3();
    this.direction = new THREE.Vector3(0, 0, 1);
    this.lookTarget = new THREE.Vector3();
    const built = buildVeil(timeUniform, glowTexture, 3);
    this.root = built.root;
    this.bank = built.bank;
    this.crown = built.crown;
    this.halo = built.halo;
    this.lip = built.lip;
    this.root.scale.setScalar(1.13);
    scene.add(this.root);
    this.update(0, 0, new THREE.Vector3());
  }

  get scanPosition() {
    return this.root.position;
  }

  update(dt, time, player) {
    this.angle += dt * (this.speed / this.radius);
    const y = -26 + Math.sin(time * 0.17) * 1.4 + Math.sin(time * 0.41 + 1.2) * 0.35;
    this.position.set(
      this.center.x + Math.cos(this.angle) * this.radius,
      y,
      this.center.z + Math.sin(this.angle) * this.radius
    );
    this.direction.set(-Math.sin(this.angle), Math.cos(time * 0.21) * 0.035, Math.cos(this.angle)).normalize();
    this.root.position.copy(this.position);
    this.lookTarget.copy(this.position).add(this.direction);
    this.root.lookAt(this.lookTarget);
    this.bank.rotation.z = Math.sin(time * 0.23) * 0.13;
    this.bank.rotation.x = Math.sin(time * 0.31 + 1.5) * 0.045;
    this.bank.position.y = Math.sin(time * 0.55) * 0.5;
    this.crown.rotation.z = Math.sin(time * 0.27) * 0.06;
    this.halo.scale.setScalar(1 + Math.sin(time * 0.6) * 0.025);
    this.lip.material.opacity = 0.65 + Math.sin(time * 0.9) * 0.2;
  }
}

class RiftHunter {
  constructor(scene, timeUniform, glowTexture, onAttack) {
    this.species = 'rift';
    this.scene = scene;
    this.onAttack = onAttack;
    this.root = new THREE.Group();
    this.bank = new THREE.Group();
    this.root.add(this.bank);
    this.position = new THREE.Vector3(18, -44, -34);
    this.center = new THREE.Vector3(32, -44, -54);
    this.radius = 27;
    this.angle = 1.9;
    this.patrolSpeed = 2.3;
    this.state = 'patrol';
    this.stateTime = 0;
    this.chargeCooldown = 7;
    this.fleeTime = 0;
    this.direction = new THREE.Vector3(0, 0, 1);
    this.target = new THREE.Vector3();
    this.attackFlash = 0;
    this.jaw = null;
    this.petals = [];
    this.eyes = [];
    this.mouthGlow = null;
    this.glowTexture = glowTexture;
    this.build(timeUniform, glowTexture);
    this.root.scale.setScalar(1.16);
    this.root.position.copy(this.position);
    scene.add(this.root);
  }

  get scanPosition() {
    return this.root.position;
  }

  build(timeUniform, glowTexture) {
    const mat = bodyMaterial(0x07171c, 8);
    mat.color = new THREE.Color(0x07171c);
    mat.metalness = 0.58;
    mat.roughness = 0.34;
    mat.emissive = new THREE.Color(0x100603);
    mat.emissiveIntensity = 0.48;
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = timeUniform;
      shader.uniforms.uPhase = { value: 4.1 };
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', BODY_VERTEX)
        .replace('#include <begin_vertex>', BODY_WAVE);
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', BODY_FRAGMENT)
        .replace('#include <emissivemap_fragment>', BODY_FRAGMENT_PATCH);
      mat.userData.shader = shader;
    };

    const geometry = createLoftGeometry({
      length: 14.5,
      segments: 38,
      radial: 16,
      seed: 8,
      ridge: 0.085,
      profile: (t) => {
        const head = Math.pow(Math.sin(Math.PI * Math.min(1, t * 1.06)), 0.48);
        const taper = 0.35 + head * 2.15;
        return [taper * (1.15 - t * 0.3), taper * (0.72 - t * 0.1)];
      },
    });
    const body = new THREE.Mesh(geometry, mat);
    this.bank.add(body);

    const armorMat = new THREE.MeshStandardMaterial({ color: 0x06171c, roughness: 0.32, metalness: 0.55, emissive: 0x210b05, emissiveIntensity: 0.55 });
    for (let i = 0; i < 7; i += 1) {
      const t = i / 6;
      const z = -5.2 + t * 11.5;
      const bell = Math.pow(Math.sin(Math.PI * Math.min(1, ((z + 7.25) / 14.5) * 1.06)), 0.48);
      const rx = (0.35 + bell * 2.15) * (1.15 - ((z + 7.25) / 14.5) * 0.3);
      const ry = (0.35 + bell * 2.15) * (0.72 - ((z + 7.25) / 14.5) * 0.1);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.055, 4, 28), armorMat);
      ring.position.z = z;
      ring.scale.set(rx * 0.96, ry * 0.96, 1);
      this.bank.add(ring);
    }

    const seamMat = new THREE.MeshBasicMaterial({ color: 0xff8056, transparent: true, opacity: 0.48, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
    for (let side = -1; side <= 1; side += 2) {
      const seam = [];
      for (let i = 0; i < 7; i += 1) {
        const t = i / 6;
        const z = -6 + t * 12.5;
        const bell = Math.pow(Math.sin(Math.PI * Math.min(1, ((z + 7.25) / 14.5) * 1.06)), 0.48);
        const x = (0.35 + bell * 2.15) * (1.15 - ((z + 7.25) / 14.5) * 0.3) * 0.92;
        seam.push(new THREE.Vector3(side * x, 0.2, z));
      }
      this.bank.add(new THREE.Mesh(new THREE.TubeGeometry(makeCurve(seam), 22, 0.035, 4, false), seamMat));
    }

    const wingMat = finMaterial(0x061b21, 0xe9895d, 0.56, 1.2);
    wingMat.uniforms.uTime = timeUniform;
    const wingGeo = createFinGeometry({ span: 10.5, chord: 6.2, sweep: 3.8, lift: 1.35, droop: 1.6, segments: 30, chordSegments: 9, scallop: 0.08 });
    const wingR = new THREE.Mesh(wingGeo, wingMat);
    wingR.position.set(1.4, 0.3, 1.1);
    wingR.rotation.z = -0.06;
    wingR.rotation.y = 0.15;
    this.bank.add(wingR);
    const wingL = new THREE.Mesh(wingGeo, wingMat);
    wingL.scale.x = -1;
    wingL.position.set(-1.4, 0.3, 1.1);
    wingL.rotation.z = 0.06;
    wingL.rotation.y = -0.15;
    this.bank.add(wingL);

    const lowerMat = finMaterial(0x05181e, 0xd96446, 0.44, 2.4);
    lowerMat.uniforms.uTime = timeUniform;
    const lowerGeo = createFinGeometry({ span: 6.8, chord: 3.2, sweep: 2.2, lift: 0.55, droop: 1.0, segments: 22, chordSegments: 7 });
    const dorsalMat = finMaterial(0x05161c, 0xe5a06b, 0.5, 0.6);
    dorsalMat.uniforms.uTime = timeUniform;
    const dorsalGeo = createFinGeometry({ span: 5.2, chord: 3.2, sweep: 2.2, lift: 0.6, droop: 0.2, segments: 24, chordSegments: 7 });
    const dorsal = new THREE.Mesh(dorsalGeo, dorsalMat);
    dorsal.position.set(0, 1.1, 2.1);
    dorsal.rotation.z = Math.PI / 2;
    dorsal.rotation.y = Math.PI;
    this.bank.add(dorsal);

    const lowerR = new THREE.Mesh(lowerGeo, lowerMat);
    lowerR.position.set(1.0, -0.8, -2.4);
    lowerR.rotation.z = -0.42;
    lowerR.rotation.y = 0.3;
    this.bank.add(lowerR);
    const lowerL = new THREE.Mesh(lowerGeo, lowerMat);
    lowerL.scale.x = -1;
    lowerL.position.set(-1.0, -0.8, -2.4);
    lowerL.rotation.z = 0.42;
    lowerL.rotation.y = -0.3;
    this.bank.add(lowerL);

    const tailMat = tentacleMaterial(0x061a20, 0xd87954, 0.5, 3.2);
    tailMat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = timeUniform;
      shader.uniforms.uPhase = { value: 2.6 };
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uTime;\nuniform float uPhase;')
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          float sway = sin(position.z * 0.3 + uTime * 1.15 + uPhase) * 0.2 * (0.2 + abs(position.z) * 0.06);
          transformed.x += sway;
          transformed.y += cos(position.z * 0.25 + uTime * 0.72 + uPhase) * 0.12;`
        );
    };
    for (let side = -1; side <= 1; side += 2) {
      const points = [];
      for (let i = 0; i < 6; i += 1) {
        const t = i / 5;
        points.push(new THREE.Vector3(side * (0.3 + t * 2.4), Math.sin(t * 2.2) * 0.5 - t * 0.6, -7 - t * 9));
      }
      this.bank.add(new THREE.Mesh(new THREE.TubeGeometry(makeCurve(points), 30, 0.13, 5, false), tailMat));
    }

    const mouth = new THREE.Group();
    mouth.position.z = 7.25;
    this.bank.add(mouth);
    this.jaw = mouth;

    const inner = new THREE.Mesh(new THREE.CircleGeometry(1.25, 28), new THREE.MeshBasicMaterial({ color: 0x02090b, transparent: true, opacity: 0.92 }));
    inner.position.z = 0.03;
    mouth.add(inner);

    const petalGeo = createPetalGeometry(2.7, 1.8);
    const petalMat = finMaterial(0x1a0c0b, 0xff8c5e, 0.55, 3.7);
    petalMat.uniforms.uTime = timeUniform;
    for (let i = 0; i < 4; i += 1) {
      const angle = (i / 4) * TAU + Math.PI * 0.25;
      const pivot = new THREE.Group();
      pivot.position.set(Math.cos(angle) * 1.05, Math.sin(angle) * 0.86, 0);
      const petal = new THREE.Mesh(petalGeo, petalMat);
      petal.rotation.z = angle;
      pivot.add(petal);
      mouth.add(pivot);
      this.petals.push({ pivot, angle, base: new THREE.Vector3(Math.cos(angle) * 1.05, Math.sin(angle) * 0.86, 0) });
    }

    const teethGeo = new THREE.ConeGeometry(0.09, 0.7, 5);
    const teethMat = new THREE.MeshStandardMaterial({ color: 0xd2d9ca, roughness: 0.38, metalness: 0.1, emissive: 0x2c0d04, emissiveIntensity: 0.35 });
    const teeth = new THREE.InstancedMesh(teethGeo, teethMat, 18);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < 18; i += 1) {
      const a = (i / 18) * TAU;
      dummy.position.set(Math.cos(a) * 1.05, Math.sin(a) * 0.86, 0.2);
      dummy.rotation.set(Math.PI / 2, 0, -a);
      dummy.updateMatrix();
      teeth.setMatrixAt(i, dummy.matrix);
    }
    teeth.instanceMatrix.needsUpdate = true;
    mouth.add(teeth);

    const eyePositions = [];
    for (let side = -1; side <= 1; side += 2) {
      for (let i = 0; i < 3; i += 1) {
        eyePositions.push(new THREE.Vector3(side * (0.8 + i * 0.34), 1.25 - i * 0.17, 4.8 - i * 0.9));
      }
    }
    this.eyes = eyePositions;
    this.bank.add(createGlowPoints(eyePositions, 0xff9a66, 0.52, glowTexture, 0.9));

    const ridgePositions = [];
    for (let i = 0; i < 8; i += 1) {
      const t = i / 7;
      ridgePositions.push(new THREE.Vector3(0, 1.3 + Math.sin(t * Math.PI) * 0.8, 3.8 - t * 10));
    }
    this.bank.add(createGlowPoints(ridgePositions, 0xffb27f, 0.28, glowTexture, 0.55));

    const hornMat = new THREE.MeshStandardMaterial({ color: 0x0a1b1f, roughness: 0.32, metalness: 0.5, emissive: 0x1a0804, emissiveIntensity: 0.4 });
    for (let side = -1; side <= 1; side += 2) {
      const points = [];
      for (let i = 0; i < 5; i += 1) {
        const t = i / 4;
        points.push(new THREE.Vector3(side * (0.8 + t * 2.0), 1.2 - t * 0.5, 5.8 + t * 4.2));
      }
      const horn = new THREE.Mesh(new THREE.TubeGeometry(makeCurve(points), 18, 0.09, 5, false), hornMat);
      this.bank.add(horn);
    }

    this.mouthGlow = attachGlow(mouth, glowTexture, 0xff8459, 2.8, new THREE.Vector3(0, 0, 0.4), 0.3);
    attachGlow(this.bank, glowTexture, 0xff6b45, 1.8, new THREE.Vector3(0, 1.4, 2.2), 0.18);
  }

  scare() {
    this.fleeTime = 5.5;
    this.state = 'flee';
    this.stateTime = 0;
    this.chargeCooldown = Math.max(this.chargeCooldown, 4.5);
  }

  update(dt, time, player, playerVelocity) {
    this.stateTime += dt;
    this.chargeCooldown -= dt;
    this.fleeTime -= dt;
    const toPlayer = new THREE.Vector3().subVectors(player, this.position);
    const distance = toPlayer.length();

    if (this.fleeTime > 0) {
      this.state = 'flee';
    } else if (this.state === 'flee' && this.fleeTime <= 0) {
      this.state = 'patrol';
      this.stateTime = 0;
      this.chargeCooldown = 6;
    } else if (this.state === 'patrol' && distance < 54 && this.chargeCooldown <= 0) {
      this.state = 'stalk';
      this.stateTime = 0;
    } else if (this.state === 'stalk') {
      if (distance > 75) {
        this.state = 'patrol';
        this.stateTime = 0;
      } else if (this.stateTime > 4.8 && distance < 55) {
        this.state = 'charge';
        this.stateTime = 0;
        this.chargeTarget = player.clone();
        this.chargeFrom = this.position.clone();
      }
    } else if (this.state === 'charge') {
      if (this.stateTime > 3.2) {
        this.state = 'retreat';
        this.stateTime = 0;
        this.chargeCooldown = 9;
      }
      if (distance < 4.4 && this.stateTime < 2.8) {
        this.onAttack?.(this);
        this.state = 'retreat';
        this.stateTime = 0;
        this.chargeCooldown = 10;
      }
    } else if (this.state === 'retreat' && this.stateTime > 3.5) {
      this.state = 'patrol';
      this.stateTime = 0;
      this.chargeCooldown = 6.5;
    }

    let desired = new THREE.Vector3();
    let speed = this.patrolSpeed;
    if (this.state === 'patrol') {
      this.angle += dt * (this.patrolSpeed / this.radius);
      desired.set(
        this.center.x + Math.cos(this.angle) * this.radius,
        this.center.y + Math.sin(time * 0.23) * 5,
        this.center.z + Math.sin(this.angle) * this.radius
      );
      desired.sub(this.position);
      speed = 3.3;
    } else if (this.state === 'stalk') {
      const tangent = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x).normalize();
      const orbit = player.clone().add(tangent.multiplyScalar(24)).add(new THREE.Vector3(0, 4, 0));
      desired.subVectors(orbit, this.position);
      speed = 5.2;
    } else if (this.state === 'charge') {
      const target = player.clone();
      if (this.stateTime < 0.8) {
        target.copy(this.chargeTarget);
      }
      desired.subVectors(target, this.position);
      speed = 15.5;
    } else if (this.state === 'retreat') {
      const away = new THREE.Vector3().subVectors(this.position, player).normalize();
      desired.copy(away).multiplyScalar(18);
      speed = 9;
    } else if (this.state === 'flee') {
      const away = new THREE.Vector3().subVectors(this.position, player).normalize();
      desired.copy(away).multiplyScalar(24);
      speed = 13;
    }

    if (desired.lengthSq() > 0.001) desired.normalize();
    const targetVelocity = desired.multiplyScalar(speed);
    this.position.addScaledVector(targetVelocity, dt);
    this.position.y = clamp(this.position.y, -102, -8);

    const lookDirection = targetVelocity.lengthSq() > 0.1 ? targetVelocity.clone().normalize() : toPlayer.normalize();
    this.direction.lerp(lookDirection, 1 - Math.exp(-3.2 * dt)).normalize();
    this.root.position.copy(this.position);
    this.root.lookAt(this.position.clone().add(this.direction));

    const banking = clamp(-this.direction.x * 0.45 + Math.sin(time * 0.9) * 0.04, -0.55, 0.55);
    this.bank.rotation.z = damp(this.bank.rotation.z, banking, 2.2, dt);
    this.bank.rotation.x = damp(this.bank.rotation.x, this.state === 'charge' ? -0.16 : Math.sin(time * 0.4) * 0.035, 2, dt);

    const jawOpen = this.state === 'charge' ? 1 : this.state === 'stalk' ? 0.24 + Math.sin(time * 2) * 0.08 : 0.08;
    const jawAmount = damp(this.jaw.rotation.x, jawOpen, 4, dt);
    this.petals.forEach(({ pivot, angle, base }, i) => {
      const direction = new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0.25).normalize();
      pivot.position.copy(base).addScaledVector(direction, jawAmount * 0.7);
      pivot.rotation.z = angle + jawAmount * 0.3 * Math.sin(angle);
      pivot.rotation.x = jawAmount * 0.72;
      pivot.rotation.y = jawAmount * 0.2 * Math.cos(angle);
    });
    if (this.mouthGlow) this.mouthGlow.material.opacity = 0.25 + jawAmount * 0.55;

    this.attackFlash = Math.max(0, this.attackFlash - dt);
  }
}

function buildSpireDrifter(timeUniform, glowTexture, seed = 4) {
  const root = new THREE.Group();
  const bank = new THREE.Group();
  root.add(bank);
  const rng = mulberry32(seed);

  const shellPoints = [];
  for (let i = 0; i <= 74; i += 1) {
    const t = i / 74;
    const a = t * Math.PI * 6.2;
    const r = 0.1 + t * 2.25;
    shellPoints.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r * 0.82, t * 0.9 - 0.45));
  }
  const shellMat = new THREE.MeshPhysicalMaterial({
    color: 0x1c4144,
    roughness: 0.2,
    metalness: 0.44,
    clearcoat: 0.85,
    clearcoatRoughness: 0.18,
    emissive: 0x1d0b07,
    emissiveIntensity: 0.5,
    iridescence: 0.8,
    iridescenceIOR: 1.35,
    iridescenceThicknessMinimum: 140,
    iridescenceThicknessMaximum: 460,
  });
  const shell = new THREE.Mesh(new THREE.TubeGeometry(makeCurve(shellPoints), 90, 0.28, 7, false), shellMat);
  shell.scale.set(1, 1, 0.9);
  bank.add(shell);

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x8c4e42, roughness: 0.5, metalness: 0.12, emissive: 0x45110c, emissiveIntensity: 0.5 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 12), bodyMat);
  body.scale.set(1, 0.8, 1.2);
  body.position.set(2.2, 0, 0.35);
  bank.add(body);

  const armMat = tentacleMaterial(0xb66e54, 0xffb37b, 0.7, seed);
  armMat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = timeUniform;
    shader.uniforms.uPhase = { value: seed * 1.1 };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;\nuniform float uPhase;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        float sway = sin(position.z * 1.2 + uTime * 2.0 + uPhase) * 0.09;
        transformed.x += sway;
        transformed.y += cos(position.z * 0.9 + uTime * 1.6 + uPhase) * 0.06;`
      );
  };
  for (let i = 0; i < 7; i += 1) {
    const a = (i / 7) * TAU;
    const points = [];
    for (let s = 0; s < 5; s += 1) {
      const t = s / 4;
      points.push(new THREE.Vector3(2.3 + Math.cos(a) * t * 1.8 + Math.sin(t * 3 + i) * 0.25, Math.sin(a) * t * 1.4 + Math.sin(t * 4 + i) * 0.2, 0.6 + t * 2.1));
    }
    const arm = new THREE.Mesh(new THREE.TubeGeometry(makeCurve(points), 20, 0.035, 4, false), armMat);
    bank.add(arm);
  }

  const core = attachGlow(bank, glowTexture, 0xffa56f, 2.3, new THREE.Vector3(2.3, 0, 0.9), 0.65);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(2.45, 0.025, 4, 48), new THREE.MeshBasicMaterial({ color: 0xffc48e, transparent: true, opacity: 0.42, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
  rim.rotation.y = Math.PI / 2;
  rim.position.x = 0.4;
  bank.add(rim);

  return { root, bank, shell, core, rim, rng };
}

class SpireDrifters {
  constructor(scene, timeUniform, glowTexture) {
    this.species = 'spire';
    this.items = [];
    this.center = new THREE.Vector3(-35, -55, -15);
    this.root = new THREE.Group();
    scene.add(this.root);
    const rng = mulberry32(17);
    for (let i = 0; i < 5; i += 1) {
      const built = buildSpireDrifter(timeUniform, glowTexture, 40 + i);
      const angle = (i / 5) * TAU;
      const radius = range(rng, 2, 8);
      built.root.position.set(
        this.center.x + Math.cos(angle) * radius,
        this.center.y + range(rng, -3, 5),
        this.center.z + Math.sin(angle) * radius
      );
      built.root.scale.setScalar(range(rng, 0.72, 1.25));
      built.base = built.root.position.clone();
      built.phase = range(rng, 0, TAU);
      built.speed = range(rng, 0.08, 0.2);
      built.flee = 0;
      this.root.add(built.root);
      this.items.push(built);
    }
  }

  get scanPosition() {
    return this.center;
  }

  update(dt, time, player) {
    for (const item of this.items) {
      const toPlayer = new THREE.Vector3().subVectors(player, item.root.position);
      const distance = toPlayer.length();
      item.flee = Math.max(0, item.flee - dt);
      if (distance < 8) item.flee = 2.2;
      const fleeDirection = toPlayer.clone().normalize().multiplyScalar(-1);
      if (item.flee > 0) {
        item.root.position.addScaledVector(fleeDirection, dt * 2.3);
      } else {
        item.root.position.x = item.base.x + Math.sin(time * item.speed + item.phase) * 1.7;
        item.root.position.y = item.base.y + Math.sin(time * item.speed * 1.7 + item.phase) * 1.3;
        item.root.position.z = item.base.z + Math.cos(time * item.speed * 0.8 + item.phase) * 1.5;
      }
      item.root.rotation.y += dt * 0.15;
      item.root.rotation.z = Math.sin(time * 0.4 + item.phase) * 0.12;
      item.bank.position.y = Math.sin(time * 0.8 + item.phase) * 0.15;
      item.core.material.opacity = 0.45 + Math.sin(time * 0.9 + item.phase) * 0.18;
      item.rim.rotation.z += dt * 0.22;
    }
  }
}

function createShardGeometry() {
  const geometry = new THREE.TetrahedronGeometry(0.32, 0);
  geometry.scale(1.0, 0.45, 2.6);
  return geometry;
}

class GlassShoals {
  constructor(scene, glowTexture) {
    this.species = 'shoal';
    this.schools = [];
    this.root = new THREE.Group();
    scene.add(this.root);
    const anchors = [
      new THREE.Vector3(15, -7, 21),
      new THREE.Vector3(-29, -24, 8),
      new THREE.Vector3(43, -40, -54),
    ];
    const counts = [64, 54, 46];
    const shardGeo = createShardGeometry();
    const shardMat = new THREE.MeshStandardMaterial({
      color: 0xa7ffff,
      emissive: 0x2be0d8,
      emissiveIntensity: 1.4,
      roughness: 0.1,
      metalness: 0.22,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    });
    const rng = mulberry32(51);

    anchors.forEach((anchor, schoolIndex) => {
      const count = counts[schoolIndex];
      const mesh = new THREE.InstancedMesh(shardGeo, shardMat, count);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      this.root.add(mesh);

      const positions = [];
      const velocities = [];
      for (let i = 0; i < count; i += 1) {
        const pos = anchor.clone().add(new THREE.Vector3(range(rng, -6, 6), range(rng, -3, 3), range(rng, -6, 6)));
        positions.push(pos);
        velocities.push(new THREE.Vector3(range(rng, -0.4, 0.4), range(rng, -0.15, 0.15), range(rng, -0.4, 0.4)));
      }
      const glowGeo = new THREE.BufferGeometry().setFromPoints(positions);
      const glow = new THREE.Points(glowGeo, createPointsMaterial(glowTexture, 0x9bffff, 0.48, 0.55));
      glow.frustumCulled = false;
      this.root.add(glow);
      this.schools.push({
        anchor,
        mesh,
        glow,
        positions,
        velocities,
        count,
        phase: schoolIndex * 2.1,
        dummy: new THREE.Object3D(),
        glowPositions: glowGeo.attributes.position,
      });
    });
  }

  get scanPosition() {
    return this.schools[0].anchor;
  }

  update(dt, time, player, predator) {
    for (const school of this.schools) {
      const { anchor, mesh, positions, velocities, count, dummy } = school;
      const toPlayer = new THREE.Vector3().subVectors(player, anchor);
      const playerDistance = toPlayer.length();
      const flee = playerDistance < 13 ? (13 - playerDistance) / 13 : 0;
      const predatorDistance = predator ? predator.position.distanceTo(anchor) : 999;
      const predatorFlee = predatorDistance < 34 ? 1 : 0;
      const swarmTarget = anchor.clone().add(new THREE.Vector3(
        Math.sin(time * 0.16 + school.phase) * 5,
        Math.sin(time * 0.23 + school.phase * 1.7) * 2,
        Math.cos(time * 0.13 + school.phase) * 5
      ));

      for (let i = 0; i < count; i += 1) {
        const pos = positions[i];
        const vel = velocities[i];
        const cohesion = swarmTarget.clone().sub(pos).multiplyScalar(0.09);
        const noise = new THREE.Vector3(
          Math.sin(time * 1.2 + i * 2.4) * 0.7,
          Math.cos(time * 1.7 + i * 1.3) * 0.35,
          Math.cos(time * 1.1 + i * 1.7) * 0.7
        );
        vel.add(cohesion).addScaledVector(noise, dt);
        if (flee > 0) {
          const away = pos.clone().sub(player).normalize();
          vel.addScaledVector(away, flee * dt * 11);
        }
        if (predatorFlee && predator) {
          const away = pos.clone().sub(predator.position).normalize();
          vel.addScaledVector(away, predatorFlee * dt * 9);
        }
        const separation = new THREE.Vector3();
        for (let j = 0; j < 4; j += 1) {
          const other = positions[(i + j * 7 + 3) % count];
          const delta = pos.clone().sub(other);
          const d = delta.length();
          if (d > 0.01 && d < 1.2) separation.addScaledVector(delta.normalize(), (1.2 - d) * 0.7);
        }
        vel.add(separation);
        vel.clampLength(0.8, 9.5);
        pos.addScaledVector(vel, dt);
        const dist = pos.distanceTo(anchor);
        if (dist > 15) {
          pos.lerp(anchor, dt * 0.5);
          vel.multiplyScalar(0.98);
        }
        dummy.position.copy(pos);
        dummy.lookAt(pos.clone().add(vel));
        dummy.scale.set(1, 0.7 + Math.sin(i + time) * 0.06, 1.6);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        school.glowPositions.setXYZ(i, pos.x, pos.y, pos.z);
      }
      mesh.instanceMatrix.needsUpdate = true;
      school.glowPositions.needsUpdate = true;
    }
  }
}

class BellBlooms {
  constructor(scene, glowTexture) {
    this.species = 'bell';
    this.clusters = [];
    this.root = new THREE.Group();
    scene.add(this.root);
    const anchors = [
      new THREE.Vector3(-18, -18, 25),
      new THREE.Vector3(31, -32, -12),
      new THREE.Vector3(-6, -64, -55),
    ];
    const bellGeo = new THREE.TorusGeometry(0.46, 0.095, 6, 18);
    bellGeo.scale(1, 1.1, 0.9);
    const bellMat = new THREE.MeshStandardMaterial({
      color: 0xc2b7ff,
      emissive: 0x6c4bff,
      emissiveIntensity: 1.2,
      roughness: 0.18,
      metalness: 0.1,
      transparent: true,
      opacity: 0.52,
      depthWrite: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    });
    const rng = mulberry32(88);
    const palette = [new THREE.Color(0xb8a8ff), new THREE.Color(0x87f7e4), new THREE.Color(0xffb6dc), new THREE.Color(0x8ea6ff)];

    anchors.forEach((anchor, clusterIndex) => {
      const count = 26;
      const mesh = new THREE.InstancedMesh(bellGeo, bellMat, count);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      this.root.add(mesh);
      const data = [];
      for (let i = 0; i < count; i += 1) {
        data.push({
          offset: new THREE.Vector3(range(rng, -4.5, 4.5), range(rng, -3.5, 3.5), range(rng, -4.5, 4.5)),
          phase: range(rng, 0, TAU),
          speed: range(rng, 0.25, 0.7),
          scale: range(rng, 0.7, 1.4),
        });
      }
      const glowGeo = new THREE.BufferGeometry();
      glowGeo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(count * 3), 3));
      const glow = new THREE.Points(glowGeo, createPointsMaterial(glowTexture, 0xbb9dff, 0.9, 0.55));
      glow.frustumCulled = false;
      this.root.add(glow);

      const tentacleGeo = new THREE.BufferGeometry();
      tentacleGeo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(count * 18), 3));
      const tentacles = new THREE.LineSegments(tentacleGeo, new THREE.LineBasicMaterial({ color: 0xa596ff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
      tentacles.frustumCulled = false;
      this.root.add(tentacles);

      for (let i = 0; i < count; i += 1) mesh.setColorAt(i, palette[Math.floor(rng() * palette.length)]);
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;

      this.clusters.push({
        anchor,
        mesh,
        glow,
        tentacles,
        tentaclePositions: tentacleGeo.attributes.position,
        data,
        count,
        dummy: new THREE.Object3D(),
        glowPositions: glowGeo.attributes.position,
        phase: clusterIndex * 1.8,
      });
    });
  }

  get scanPosition() {
    return this.clusters[0].anchor;
  }

  update(dt, time) {
    for (const cluster of this.clusters) {
      const { anchor, mesh, data, count, dummy } = cluster;
      for (let i = 0; i < count; i += 1) {
        const item = data[i];
        const pulse = 1 + Math.sin(time * item.speed * 2.2 + item.phase) * 0.14;
        dummy.position.set(
          anchor.x + item.offset.x + Math.sin(time * 0.18 + item.phase) * 0.6,
          anchor.y + item.offset.y + Math.sin(time * item.speed + item.phase) * 1.4,
          anchor.z + item.offset.z + Math.cos(time * 0.15 + item.phase) * 0.6
        );
        dummy.rotation.set(Math.sin(time * 0.2 + item.phase) * 0.2, time * 0.08 + item.phase, Math.cos(time * 0.18 + item.phase) * 0.2);
        dummy.scale.setScalar(item.scale * pulse);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        cluster.glowPositions.setXYZ(i, dummy.position.x, dummy.position.y + 0.2, dummy.position.z);
        for (let t = 0; t < 3; t += 1) {
          const idx = (i * 3 + t) * 6;
          const angle = t * 2.094 + item.phase;
          cluster.tentaclePositions.array[idx] = dummy.position.x + Math.cos(angle) * 0.16;
          cluster.tentaclePositions.array[idx + 1] = dummy.position.y - 0.15;
          cluster.tentaclePositions.array[idx + 2] = dummy.position.z + Math.sin(angle) * 0.16;
          cluster.tentaclePositions.array[idx + 3] = dummy.position.x + Math.cos(angle) * 0.48;
          cluster.tentaclePositions.array[idx + 4] = dummy.position.y - 1.55 - item.scale * 0.2;
          cluster.tentaclePositions.array[idx + 5] = dummy.position.z + Math.sin(angle) * 0.48;
        }
      }
      mesh.instanceMatrix.needsUpdate = true;
      cluster.glowPositions.needsUpdate = true;
      cluster.tentaclePositions.needsUpdate = true;
    }
  }
}

export class CreatureWorld {
  constructor(scene, timeUniform, glowTexture, { onAttack } = {}) {
    this.scene = scene;
    this.veil = new VeilSovereign(scene, timeUniform, glowTexture);
    this.rift = new RiftHunter(scene, timeUniform, glowTexture, onAttack);
    this.spires = new SpireDrifters(scene, timeUniform, glowTexture);
    this.shoals = new GlassShoals(scene, glowTexture);
    this.bells = new BellBlooms(scene, glowTexture);
    this.all = [this.veil, this.rift, this.spires, this.shoals, this.bells];
    this.registry = {
      veil: this.veil,
      rift: this.rift,
      spire: this.spires,
      shoal: this.shoals,
      bell: this.bells,
    };
  }

  update(dt, time, player, playerVelocity) {
    this.veil.update(dt, time, player);
    this.rift.update(dt, time, player, playerVelocity);
    this.spires.update(dt, time, player);
    this.shoals.update(dt, time, player, this.rift);
    this.bells.update(dt, time);
  }

  pulse(playerPosition) {
    this.rift.scare();
    const targets = [];
    for (const [key, value] of Object.entries(this.registry)) {
      targets.push({ key, position: value.scanPosition.clone(), species: SPECIES[key] });
    }
    return targets;
  }

  getTargets() {
    return Object.entries(this.registry).map(([key, value]) => ({
      key,
      species: SPECIES[key],
      position: value.scanPosition.clone(),
    }));
  }
}
