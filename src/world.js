import * as THREE from 'three';
import {
  TAU,
  clamp,
  damp,
  fbm,
  lerp,
  makeGlowTexture,
  mulberry32,
  range,
  terrainHeight,
  createGlowSprite,
  createPointsMaterial,
} from './utils.js';

const SUN_DIR = new THREE.Vector3(-0.32, 0.82, 0.47).normalize();
const SHALLOW_FOG = new THREE.Color(0x063943);
const MID_FOG = new THREE.Color(0x031f28);
const DEEP_FOG = new THREE.Color(0x01070b);

function createSkyDome(timeUniform) {
  const geometry = new THREE.SphereGeometry(430, 32, 24);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uTop: { value: new THREE.Color(0x03161e) },
      uBottom: { value: new THREE.Color(0x062e36) },
      uSunDir: { value: SUN_DIR.clone() },
      uGlow: { value: new THREE.Color(0x6bffe3) },
    },
    vertexShader: `
      varying vec3 vPos;
      void main() {
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uTop;
      uniform vec3 uBottom;
      uniform vec3 uSunDir;
      uniform vec3 uGlow;
      varying vec3 vPos;
      void main() {
        vec3 dir = normalize(vPos);
        float h = smoothstep(-0.55, 0.85, dir.y);
        vec3 col = mix(uBottom, uTop, h);
        float sun = pow(max(dot(dir, normalize(uSunDir)), 0.0), 32.0);
        col += uGlow * sun * 0.16;
        float horizon = exp(-abs(dir.y) * 8.0) * 0.12;
        col += uGlow * horizon;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    toneMapped: true,
  });
  const dome = new THREE.Mesh(geometry, material);
  dome.renderOrder = -20;
  return dome;
}

function createOceanSurface(timeUniform) {
  const geometry = new THREE.PlaneGeometry(880, 880, 150, 150);
  geometry.rotateX(-Math.PI / 2);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uSunDir: { value: SUN_DIR.clone() },
      uSkyColor: { value: new THREE.Color(0xb9fff1) },
      uHorizonColor: { value: new THREE.Color(0x4cd5cc) },
      uDeepColor: { value: new THREE.Color(0x02141b) },
      uGlowColor: { value: new THREE.Color(0x8affdf) },
    },
    vertexShader: `
      uniform float uTime;
      varying vec3 vWorldPosition;
      varying vec3 vNormalW;
      varying vec2 vUv;
      void main() {
        vec3 p = position;
        vec4 wp = modelMatrix * vec4(p, 1.0);
        float w1 = sin(wp.x * 0.13 + uTime * 0.56) * 0.42;
        float w2 = sin(wp.z * 0.11 - uTime * 0.41) * 0.36;
        float w3 = sin((wp.x + wp.z) * 0.21 + uTime * 0.84) * 0.11;
        float w4 = sin((wp.x - wp.z) * 0.34 - uTime * 0.63) * 0.055;
        wp.y += w1 + w2 + w3 + w4;
        float dx = cos(wp.x * 0.13 + uTime * 0.56) * 0.13 * 0.42
                 + cos((wp.x + wp.z) * 0.21 + uTime * 0.84) * 0.21 * 0.11
                 + cos((wp.x - wp.z) * 0.34 - uTime * 0.63) * 0.34 * 0.055;
        float dz = cos(wp.z * 0.11 - uTime * 0.41) * 0.11 * 0.36
                 + cos((wp.x + wp.z) * 0.21 + uTime * 0.84) * 0.21 * 0.11
                 - cos((wp.x - wp.z) * 0.34 - uTime * 0.63) * 0.34 * 0.055;
        vNormalW = normalize(vec3(-dx, 1.0, -dz));
        vWorldPosition = wp.xyz;
        vUv = uv;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uSunDir;
      uniform vec3 uSkyColor;
      uniform vec3 uHorizonColor;
      uniform vec3 uDeepColor;
      uniform vec3 uGlowColor;
      varying vec3 vWorldPosition;
      varying vec3 vNormalW;
      varying vec2 vUv;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float caustic(vec2 p, float t) {
        float v = 0.0;
        for (int i = 0; i < 3; i++) {
          p = p * 1.55 + vec2(sin(t * 0.17 + float(i)), cos(t * 0.13 + float(i)));
          v += abs(sin(p.x + sin(p.y + t * 0.33)));
        }
        return pow(1.0 - clamp(v / 3.0, 0.0, 1.0), 4.0);
      }

      void main() {
        vec3 N = normalize(vNormalW);
        vec3 V = normalize(cameraPosition - vWorldPosition);
        vec3 L = normalize(uSunDir);
        bool underwater = cameraPosition.y < 0.0;
        vec3 col;

        if (underwater) {
          float upness = clamp(-V.y, 0.0, 1.0);
          float window = smoothstep(0.015, 0.36, upness);
          float steepness = smoothstep(0.055, 0.4, upness);
          vec3 sky = mix(uHorizonColor, uSkyColor, smoothstep(0.0, 0.72, upness));
          vec2 causticUv = vWorldPosition.xz * 0.042;
          causticUv += vec2(noise(causticUv * 0.7 + uTime * 0.01), noise(causticUv * 0.8 - uTime * 0.008 + 9.0));
          float ripple = caustic(causticUv, uTime);
          float wave = sin(vWorldPosition.x * 0.16 + sin(vWorldPosition.z * 0.11 + uTime * 0.22) * 1.6);
          sky += uGlowColor * ripple * (0.18 + wave * 0.025) * steepness;
          vec3 reflected = mix(uDeepColor * 0.8, uHorizonColor * 0.16, 0.36);
          col = mix(reflected, sky, window);
          float fres = pow(1.0 - abs(dot(N, V)), 3.0);
          col += uGlowColor * fres * 0.1;
          vec3 R = reflect(-L, N);
          float spec = pow(max(dot(R, V), 0.0), 110.0);
          col += vec3(0.72, 1.0, 0.9) * spec * 1.15 * window;
          float shimmer = smoothstep(0.78, 1.0, sin(vWorldPosition.x * 0.52 + sin(vWorldPosition.z * 0.16 + uTime) * 1.3) * 0.5 + 0.5);
          col += uGlowColor * shimmer * 0.012 * steepness;
        } else {
          vec3 R = reflect(-V, N);
          float fresnel = pow(1.0 - max(dot(N, V), 0.0), 3.0);
          col = mix(uDeepColor, uSkyColor, fresnel);
          float spec = pow(max(dot(R, L), 0.0), 220.0);
          col += vec3(1.0, 0.95, 0.82) * spec * 4.0;
        }

        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    side: THREE.DoubleSide,
    depthWrite: true,
    fog: false,
    toneMapped: true,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.renderOrder = -2;
  return mesh;
}

function createTerrain(timeUniform) {
  const size = 520;
  const segments = 140;
  const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
  geometry.rotateX(-Math.PI / 2);
  const position = geometry.attributes.position;
  const colors = [];
  const color = new THREE.Color();

  for (let i = 0; i < position.count; i += 1) {
    const x = position.getX(i);
    const z = position.getZ(i);
    const y = terrainHeight(x, z);
    position.setY(i, y);
    const heightT = clamp((y + 118) / 46, 0, 1);
    const tint = fbm(x * 0.09 + 3, z * 0.09 - 7, 2);
    color.setRGB(
      0.016 + heightT * 0.05 + tint * 0.018,
      0.055 + heightT * 0.19 + tint * 0.05,
      0.07 + heightT * 0.17 + tint * 0.045
    );
    colors.push(color.r, color.g, color.b);
  }
  position.needsUpdate = true;
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uSunDir: { value: SUN_DIR.clone() },
      uFogColor: { value: new THREE.Color(0x031f28) },
      uFogDensity: { value: 0.011 },
      uGlow: { value: new THREE.Color(0x58ffd9) },
    },
    vertexShader: `
      varying vec3 vColor;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      varying float vFogDepth;
      void main() {
        vColor = color;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vNormalW = normalize(mat3(modelMatrix) * normal);
        vec4 mvPosition = viewMatrix * wp;
        vFogDepth = -mvPosition.z;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uSunDir;
      uniform vec3 uFogColor;
      uniform float uFogDensity;
      uniform vec3 uGlow;
      varying vec3 vColor;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      varying float vFogDepth;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      float caustic(vec2 p, float t) {
        float v = 0.0;
        for (int i = 0; i < 3; i++) {
          p = p * 1.63 + vec2(sin(t * 0.14 + float(i)), cos(t * 0.11 + float(i)));
          v += abs(sin(p.x + sin(p.y + t * 0.26)));
        }
        return pow(1.0 - clamp(v / 3.0, 0.0, 1.0), 5.0);
      }

      void main() {
        vec3 N = normalize(vNormalW);
        vec3 L = normalize(uSunDir);
        vec3 V = normalize(cameraPosition - vWorld);
        float diff = max(dot(N, L), 0.0);
        float rim = pow(1.0 - max(dot(N, V), 0.0), 2.4);
        float causticLight = caustic(vWorld.xz * 0.095, uTime);
        float crack = pow(abs(sin(vWorld.x * 0.075 + sin(vWorld.z * 0.052) * 4.0)), 26.0);
        vec3 base = vColor;
        vec3 col = base * (0.16 + diff * 0.75);
        col += vec3(0.055, 0.23, 0.21) * causticLight * (0.22 + diff * 0.3);
        col += uGlow * crack * 0.035;
        col += vec3(0.02, 0.075, 0.08) * rim;
        float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        col = mix(col, uFogColor, clamp(fogFactor, 0.0, 1.0));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    vertexColors: true,
    toneMapped: true,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = 0;
  return mesh;
}

function createRocks(seed = 12) {
  const rng = mulberry32(seed);
  const geometry = new THREE.IcosahedronGeometry(1, 0);
  const material = new THREE.MeshStandardMaterial({
    color: 0x0a2024,
    roughness: 0.86,
    metalness: 0.14,
    flatShading: true,
    emissive: 0x031418,
    emissiveIntensity: 0.35,
  });
  const count = 150;
  const mesh = new THREE.InstancedMesh(geometry, material, count);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i += 1) {
    const angle = rng() * TAU;
    const radius = 20 + Math.sqrt(rng()) * 210;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = terrainHeight(x, z);
    const scale = range(rng, 1.2, 8.5) * (rng() > 0.85 ? 2.3 : 1);
    dummy.position.set(x, y + scale * 0.25, z);
    dummy.rotation.set(rng() * TAU, rng() * TAU, rng() * TAU);
    dummy.scale.set(scale, scale * range(rng, 0.45, 1.2), scale * range(rng, 0.7, 1.5));
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  return mesh;
}

function createKelp(timeUniform, seed = 31) {
  const rng = mulberry32(seed);
  const geometry = new THREE.PlaneGeometry(1.2, 18, 1, 18);
  geometry.translate(0, 9, 0);
  const material = new THREE.MeshStandardMaterial({
    color: 0x0e3b3c,
    emissive: 0x0a4d49,
    emissiveIntensity: 0.55,
    roughness: 0.62,
    metalness: 0.08,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.76,
  });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = timeUniform;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        float bend = sin(transformed.y * 0.23 + uTime * 0.62) * 0.11 * transformed.y;
        transformed.x += bend;
        transformed.z += cos(transformed.y * 0.16 + uTime * 0.44) * 0.06 * transformed.y;`
      );
  };
  const count = 55;
  const mesh = new THREE.InstancedMesh(geometry, material, count);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i += 1) {
    const angle = rng() * TAU;
    const radius = 12 + Math.sqrt(rng()) * 185;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = terrainHeight(x, z);
    const scale = range(rng, 0.55, 1.6);
    dummy.position.set(x, y - 0.2, z);
    dummy.rotation.set(0, rng() * TAU, 0);
    dummy.scale.set(scale, scale * range(rng, 0.6, 1.25), scale);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  return mesh;
}

function createSpire(timeUniform, glowTexture) {
  const group = new THREE.Group();
  group.position.set(2, -122, -78);
  const profile = [];
  for (let i = 0; i <= 28; i += 1) {
    const t = i / 28;
    const y = t * 91;
    const radius = 4 + Math.sin(t * Math.PI) * 9.5 + Math.sin(t * 19) * 1.3 + Math.sin(t * 7.2) * 2.6;
    profile.push(new THREE.Vector2(Math.max(0.5, radius), y));
  }
  const material = new THREE.MeshStandardMaterial({
    color: 0x0a252a,
    roughness: 0.74,
    metalness: 0.28,
    emissive: 0x031d20,
    emissiveIntensity: 0.7,
    flatShading: true,
  });
  const spire = new THREE.Mesh(new THREE.LatheGeometry(profile, 18), material);
  spire.rotation.y = 0.4;
  group.add(spire);

  const glowMat = new THREE.MeshBasicMaterial({ color: 0x7affe2, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
  for (let i = 0; i < 4; i += 1) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(11 - i * 1.2, 0.06, 4, 64), glowMat);
    ring.rotation.x = Math.PI / 2;
    ring.rotation.z = i * 0.4;
    ring.position.y = 37 + i * 12;
    group.add(ring);
  }

  const top = createGlowSprite(glowTexture, 0x9bffe8, 22, 0.48);
  top.position.y = 92;
  group.add(top);

  const topCore = new THREE.Mesh(new THREE.IcosahedronGeometry(1.4, 1), new THREE.MeshBasicMaterial({ color: 0xb4fff1, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
  topCore.position.y = 92;
  group.add(topCore);

  const light = new THREE.PointLight(0x69ffe0, 55, 80, 2);
  light.position.y = 88;
  group.add(light);

  const rng = mulberry32(33);
  const tendrilMat = new THREE.MeshStandardMaterial({ color: 0x0c3336, emissive: 0x0b8e80, emissiveIntensity: 0.5, roughness: 0.45, metalness: 0.2, transparent: true, opacity: 0.72, depthWrite: false });
  for (let i = 0; i < 8; i += 1) {
    const a = (i / 8) * TAU + 0.2;
    const points = [];
    for (let s = 0; s < 8; s += 1) {
      const t = s / 7;
      const radius = 11 + t * 9 + Math.sin(t * 7 + i) * 2;
      points.push(new THREE.Vector3(Math.cos(a + t * 1.6) * radius, 30 + t * 52, Math.sin(a + t * 1.6) * radius));
    }
    const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 34, 0.09 + rng() * 0.08, 4, false), tendrilMat);
    group.add(tube);
  }

  const motesGeo = new THREE.BufferGeometry();
  const positions = [];
  for (let i = 0; i < 60; i += 1) {
    const a = rng() * TAU;
    const r = 6 + rng() * 16;
    positions.push(Math.cos(a) * r, 30 + rng() * 60, Math.sin(a) * r);
  }
  motesGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const motes = new THREE.Points(motesGeo, createPointsMaterial(glowTexture, 0x8affdf, 1.15, 0.7));
  group.add(motes);

  group.userData.topCore = topCore;
  group.userData.topGlow = top;
  group.userData.rings = group.children.filter((child) => child.geometry?.type === 'TorusGeometry');
  return group;
}

function createShafts(timeUniform, seed = 9) {
  const rng = mulberry32(seed);
  const geometry = new THREE.PlaneGeometry(20, 128, 1, 1);
  const group = new THREE.Group();
  const shafts = [];
  for (let i = 0; i < 20; i += 1) {
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: timeUniform,
        uPhase: { value: rng() * TAU },
        uOpacity: { value: range(rng, 0.35, 0.9) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uPhase;
        uniform float uOpacity;
        varying vec2 vUv;
        void main() {
          float edge = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x);
          float fade = smoothstep(0.0, 0.1, vUv.y) * (1.0 - smoothstep(0.5, 1.0, vUv.y));
          float bands = 0.58 + 0.42 * sin(vUv.x * 13.0 + uTime * 0.38 + uPhase);
          float fine = 0.55 + 0.45 * sin(vUv.y * 28.0 - uTime * 0.62 + uPhase * 2.1);
          float alpha = edge * fade * (0.35 + 0.65 * bands * fine) * uOpacity * 0.12;
          gl_FragColor = vec4(vec3(0.57, 1.0, 0.84), alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      fog: false,
      toneMapped: false,
    });
    const shaft = new THREE.Mesh(geometry, material);
    const angle = rng() * TAU;
    const radius = 15 + Math.sqrt(rng()) * 115;
    shaft.position.set(Math.cos(angle) * radius, -56, Math.sin(angle) * radius);
    shaft.rotation.y = rng() * TAU;
    shaft.renderOrder = 2;
    group.add(shaft);
    shafts.push(shaft);
  }
  return { group, shafts };
}

function createSnow(timeUniform) {
  const count = 1900;
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const phases = new Float32Array(count);
  const rng = mulberry32(72);
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = range(rng, -130, 130);
    positions[i * 3 + 1] = range(rng, -70, 70);
    positions[i * 3 + 2] = range(rng, -130, 130);
    sizes[i] = range(rng, 0.45, 2.3);
    phases[i] = rng() * TAU;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uPlayer: { value: new THREE.Vector3() },
    },
    vertexShader: `
      uniform float uTime;
      uniform vec3 uPlayer;
      attribute float aSize;
      attribute float aPhase;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.x = mod(p.x - uPlayer.x + 130.0, 260.0) - 130.0 + uPlayer.x;
        p.y = mod(p.y - uPlayer.y + 70.0, 140.0) - 70.0 + uPlayer.y;
        p.z = mod(p.z - uPlayer.z + 130.0, 260.0) - 130.0 + uPlayer.z;
        p.y += sin(uTime * 0.22 + aPhase) * 0.7;
        p.x += cos(uTime * 0.15 + aPhase * 1.3) * 0.4;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = aSize * (115.0 / max(1.0, -mv.z));
        gl_Position = projectionMatrix * mv;
        vAlpha = smoothstep(190.0, 18.0, -mv.z) * (0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * 0.8 + aPhase)));
      }
    `,
    fragmentShader: `
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        float alpha = smoothstep(0.5, 0.05, d) * vAlpha * 0.56;
        gl_FragColor = vec4(vec3(0.66, 1.0, 0.9), alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  return points;
}

class Bubbles {
  constructor(glowTexture) {
    this.count = 100;
    this.positions = new Float32Array(this.count * 3);
    this.velocities = Array.from({ length: this.count }, () => new THREE.Vector3());
    this.life = new Float32Array(this.count);
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.material = new THREE.PointsMaterial({
      map: glowTexture,
      color: 0xb9fff4,
      size: 0.17,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.48,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
    this.rng = mulberry32(101);
    this.next = 0;
    this.spawnTimer = 0;
  }

  spawn(player) {
    const i = this.next;
    this.next = (this.next + 1) % this.count;
    this.positions[i * 3] = player.x + range(this.rng, -0.7, 0.7);
    this.positions[i * 3 + 1] = player.y - 0.35 + range(this.rng, -0.3, 0.3);
    this.positions[i * 3 + 2] = player.z + range(this.rng, -0.7, 0.7);
    this.velocities[i].set(range(this.rng, -0.22, 0.22), range(this.rng, 0.35, 1.2), range(this.rng, -0.22, 0.22));
    this.life[i] = range(this.rng, 1.4, 3.2);
  }

  update(dt, player, moving) {
    this.spawnTimer -= dt;
    if (moving && this.spawnTimer <= 0) {
      this.spawn(player);
      this.spawnTimer = 0.055;
    }
    for (let i = 0; i < this.count; i += 1) {
      if (this.life[i] > 0) {
        this.life[i] -= dt;
        this.positions[i * 3] += this.velocities[i].x * dt;
        this.positions[i * 3 + 1] += this.velocities[i].y * dt;
        this.positions[i * 3 + 2] += this.velocities[i].z * dt;
        this.velocities[i].y += dt * 0.06;
      } else {
        this.positions[i * 3 + 1] = -1000;
      }
    }
    this.geometry.attributes.position.needsUpdate = true;
  }
}

class Motes {
  constructor(scene, glowTexture) {
    this.scene = scene;
    this.items = [];
    const positions = [
      [4, -9.5, 30], [-10, -15.5, 23], [1, -22, 8], [-16, -27, 15],
      [22, -20, 2], [14, -35, -18], [-35, -44, -10], [30, -47, -38],
      [-3, -60, -40], [44, -40, -62], [-24, -58, -48], [9, -74, -36],
      [52, -58, -24], [-48, -70, 14], [20, -84, -70], [-10, -92, -90],
    ];
    const coreGeo = new THREE.OctahedronGeometry(0.23, 0);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xc9fff3, transparent: true, opacity: 0.92, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
    for (const [x, y, z] of positions) {
      const group = new THREE.Group();
      group.position.set(x, y, z);
      const core = new THREE.Mesh(coreGeo, coreMat);
      group.add(core);
      const glow = createGlowSprite(glowTexture, 0x8dffe2, 2.2, 0.72);
      group.add(glow);
      group.userData = { base: new THREE.Vector3(x, y, z), phase: x * 0.4 + z * 0.2, collected: false, core, glow };
      scene.add(group);
      this.items.push(group);
    }
  }

  update(dt, time, player, onCollect) {
    for (const mote of this.items) {
      if (mote.userData.collected) continue;
      const { base, phase } = mote.userData;
      mote.position.set(
        base.x + Math.sin(time * 0.34 + phase) * 0.6,
        base.y + Math.sin(time * 0.72 + phase) * 0.45,
        base.z + Math.cos(time * 0.27 + phase) * 0.6
      );
      mote.rotation.y += dt * 0.7;
      mote.rotation.x += dt * 0.22;
      const scale = 1 + Math.sin(time * 1.6 + phase) * 0.12;
      mote.scale.setScalar(scale);
      if (mote.position.distanceTo(player) < 3.4) {
        mote.userData.collected = true;
        mote.visible = false;
        onCollect?.(mote);
      }
    }
  }
}

export class World {
  constructor(canvas) {
    this.canvas = canvas;
    this.time = 0;
    this.timeUniform = { value: 0 };
    this.glowTexture = makeGlowTexture(128);
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x031f28, 0.012);
    this.camera = new THREE.PerspectiveCamera(58, 1, 0.12, 460);
    this.camera.rotation.order = 'YXZ';
    this.camera.position.set(0, -13.5, 43);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.setClearColor(0x03151b, 1);
    this.renderer.autoClear = true;

    this.hemi = new THREE.HemisphereLight(0x9bfff0, 0x021014, 1.18);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xd5fff5, 2.25);
    this.sun.position.set(-30, 110, 40);
    this.scene.add(this.sun);
    this.fill = new THREE.DirectionalLight(0x3be9d0, 0.48);
    this.fill.position.set(30, -10, -60);
    this.scene.add(this.fill);
    this.scene.add(new THREE.AmbientLight(0x0c3b42, 0.3));

    this.sky = createSkyDome(this.timeUniform);
    this.scene.add(this.sky);

    this.surface = createOceanSurface(this.timeUniform);
    this.scene.add(this.surface);

    this.surfaceGlow = new THREE.Group();
    const glowA = createGlowSprite(this.glowTexture, 0x72ffe1, 155, 0.085);
    glowA.position.set(2, -1.2, 16);
    const glowB = createGlowSprite(this.glowTexture, 0x48e9d1, 92, 0.05);
    glowB.position.set(-52, -1.4, -24);
    const glowC = createGlowSprite(this.glowTexture, 0x9bffe7, 110, 0.045);
    glowC.position.set(54, -1.4, -58);
    this.surfaceGlow.add(glowA, glowB, glowC);
    this.scene.add(this.surfaceGlow);

    this.terrain = createTerrain(this.timeUniform);
    this.scene.add(this.terrain);

    this.rocks = createRocks();
    this.scene.add(this.rocks);

    this.kelp = createKelp(this.timeUniform);
    this.scene.add(this.kelp);

    this.spire = createSpire(this.timeUniform, this.glowTexture);
    this.scene.add(this.spire);

    const shafts = createShafts(this.timeUniform);
    this.shafts = shafts.shafts;
    this.scene.add(shafts.group);

    this.snow = createSnow(this.timeUniform);
    this.scene.add(this.snow);

    this.bubbles = new Bubbles(this.glowTexture);
    this.scene.add(this.bubbles.points);

    this.motes = new Motes(this.scene, this.glowTexture);
    this.onMote = null;

    this.pulseRing = new THREE.Mesh(
      new THREE.RingGeometry(0.985, 1.0, 96),
      new THREE.MeshBasicMaterial({ color: 0x8dffe5, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false })
    );
    this.pulseRing.visible = false;
    this.scene.add(this.pulseRing);
    this.pulseAge = 0;
    this.pulseActive = false;

    this.pulseRingFlat = new THREE.Mesh(
      new THREE.RingGeometry(0.975, 1.0, 96),
      new THREE.MeshBasicMaterial({ color: 0x6bffe0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false })
    );
    this.pulseRingFlat.rotation.x = -Math.PI / 2;
    this.pulseRingFlat.visible = false;
    this.scene.add(this.pulseRingFlat);

    this.scanRing = new THREE.Mesh(
      new THREE.RingGeometry(0.86, 0.92, 48),
      new THREE.MeshBasicMaterial({ color: 0x8dffe5, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false })
    );
    this.scanRing.visible = false;
    this.scene.add(this.scanRing);

    this.scanLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]),
      new THREE.LineBasicMaterial({ color: 0x8dffe5, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
    );
    this.scanLine.visible = false;
    this.scene.add(this.scanLine);

    this.depthFactor = 0;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.setSize(width, height, false);
  }

  setScanTarget(target, active) {
    if (!target) {
      this.scanRing.visible = false;
      this.scanLine.visible = false;
      return;
    }
    this.scanRing.visible = true;
    this.scanLine.visible = true;
    const radius = target.species.range > 30 ? 3.4 : target.species.range > 18 ? 1.5 : 0.75;
    this.scanRing.position.copy(target.position);
    this.scanRing.quaternion.copy(this.camera.quaternion);
    const pulse = 1 + Math.sin(this.time * 3.2) * 0.12;
    this.scanRing.scale.setScalar(radius * pulse);
    this.scanRing.material.opacity = active ? 0.75 : 0.2;

    const positions = this.scanLine.geometry.attributes.position;
    positions.setXYZ(0, this.camera.position.x, this.camera.position.y - 0.6, this.camera.position.z);
    positions.setXYZ(1, target.position.x, target.position.y, target.position.z);
    positions.needsUpdate = true;
    this.scanLine.material.opacity = active ? 0.32 : 0.08;
  }

  firePulse(position) {
    this.pulseActive = true;
    this.pulseAge = 0;
    this.pulseRing.visible = true;
    this.pulseRingFlat.visible = true;
    this.pulseRing.position.copy(position);
    this.pulseRingFlat.position.copy(position);
    this.pulseRingFlat.position.y = Math.max(position.y - 0.5, -115);
  }

  collectMote() {
    // The visual pop is handled by the mote itself. Kept as a hook for effects.
  }

  update(dt, time, player, playerVelocity, scanTarget, scanActive) {
    this.time = time;
    this.timeUniform.value = time;
    this.depthFactor = clamp((-player.y - 5) / 100, 0, 1);

    const fog = this.scene.fog;
    if (this.depthFactor < 0.42) {
      fog.color.lerpColors(SHALLOW_FOG, MID_FOG, this.depthFactor / 0.42);
    } else {
      fog.color.lerpColors(MID_FOG, DEEP_FOG, (this.depthFactor - 0.42) / 0.58);
    }
    fog.density = lerp(0.0095, 0.0155, this.depthFactor);
    this.terrain.material.uniforms.uFogColor.value.copy(fog.color);
    this.terrain.material.uniforms.uFogDensity.value = fog.density;
    this.renderer.toneMappingExposure = lerp(1.0, 0.7, this.depthFactor);
    this.hemi.intensity = lerp(1.18, 0.42, this.depthFactor);
    this.sun.intensity = lerp(2.25, 0.36, this.depthFactor);
    this.fill.intensity = lerp(0.48, 0.22, this.depthFactor);
    this.sky.material.uniforms.uTop.value.lerpColors(new THREE.Color(0x03161e), new THREE.Color(0x01070b), this.depthFactor);
    this.sky.material.uniforms.uBottom.value.lerpColors(new THREE.Color(0x07353e), new THREE.Color(0x021017), this.depthFactor);

    this.snow.material.uniforms.uPlayer.value.copy(player);
    this.bubbles.update(dt, player, playerVelocity.lengthSq() > 0.6);
    this.motes.update(dt, time, player, (mote) => {
      this.collectMote();
      this.onMote?.(mote);
    });

    for (const shaft of this.shafts) {
      shaft.rotation.y = Math.atan2(this.camera.position.x - shaft.position.x, this.camera.position.z - shaft.position.z) + Math.sin(time * 0.03 + shaft.position.x) * 0.05;
    }

    const top = this.spire.userData.topCore;
    top.rotation.y += dt * 0.2;
    top.rotation.x += dt * 0.07;
    this.spire.userData.topGlow.material.opacity = 0.38 + Math.sin(time * 0.7) * 0.1;

    if (this.pulseActive) {
      this.pulseAge += dt;
      const t = this.pulseAge / 1.55;
      const scale = 1.5 + t * 64;
      this.pulseRing.scale.setScalar(scale);
      this.pulseRingFlat.scale.setScalar(scale * 0.82);
      this.pulseRing.material.opacity = Math.max(0, (1 - t) * 0.7);
      this.pulseRingFlat.material.opacity = Math.max(0, (1 - t) * 0.5);
      this.pulseRing.quaternion.copy(this.camera.quaternion);
      if (t >= 1) {
        this.pulseActive = false;
        this.pulseRing.visible = false;
        this.pulseRingFlat.visible = false;
      }
    }

    this.setScanTarget(scanTarget, scanActive);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
