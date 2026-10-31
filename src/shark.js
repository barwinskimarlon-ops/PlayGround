import * as THREE from 'three';

const C = {
  back: new THREE.Color('#0e2025'),
  shoulder: new THREE.Color('#1e3438'),
  flank: new THREE.Color('#4b6361'),
  belly: new THREE.Color('#d7d1c1'),
  fin: new THREE.Color('#293f3e'),
  mouth: new THREE.Color('#220f12'),
  tooth: new THREE.Color('#f4ead0'),
  eye: new THREE.Color('#050d0e'),
};

function smoothstep(a, b, x) {
  const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
}

function makeSkinTexture() {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const x = (i / 4) % size;
    const y = Math.floor(i / 4 / size);
    const n = 126 + Math.sin(x * 0.63) * 8 + Math.sin(y * 0.41) * 6 + Math.random() * 32;
    img.data[i] = n;
    img.data[i + 1] = n;
    img.data[i + 2] = n;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(5, 5);
  return tex;
}

/* ──────────────────────────────────────────────────────────────
   Body
   The body is lofted through elliptical rings from the snout (-Z)
   to the caudal peduncle (+Z). The profile is deliberately leaner
   than a torpedo: a white shark has a pointed snout, deep shoulders
   and a narrow tail stock.
   ────────────────────────────────────────────────────────────── */
function buildBody(skin) {
  const rings = [
    [-3.18, 0.012, 0.016, -0.02],
    [-3.06, 0.075, 0.06, -0.05],
    [-2.9, 0.15, 0.13, -0.07],
    [-2.7, 0.25, 0.22, -0.08],
    [-2.46, 0.36, 0.32, -0.08],
    [-2.18, 0.47, 0.42, -0.07],
    [-1.88, 0.56, 0.51, -0.055],
    [-1.52, 0.64, 0.6, -0.035],
    [-1.08, 0.68, 0.68, -0.015],
    [-0.5, 0.68, 0.71, 0],
    [0.12, 0.62, 0.68, 0.005],
    [0.74, 0.52, 0.58, 0.01],
    [1.34, 0.38, 0.46, 0.015],
    [1.84, 0.25, 0.34, 0.02],
    [2.2, 0.13, 0.22, 0.025],
    [2.46, 0.065, 0.13, 0.03],
    [2.58, 0.035, 0.085, 0.03],
  ];
  const radial = 32;
  const positions = [];
  const colors = [];
  const uvs = [];
  const indices = [];

  for (let r = 0; r < rings.length; r++) {
    const [z, rx, ry, cy] = rings[r];
    for (let i = 0; i < radial; i++) {
      const a = (i / radial) * Math.PI * 2;
      const sin = Math.sin(a);
      const x = Math.cos(a) * rx;

      // A little lateral compression low on the belly keeps the section
      // organic instead of perfectly elliptical.
      const belly = Math.max(0, -sin);
      const y = sin * ry + cy - belly * ry * 0.05;

      positions.push(x, y, z);
      uvs.push(i / radial, r / (rings.length - 1));

      const vertical = (y - cy) / Math.max(0.001, ry);
      const col = C.belly.clone();
      col.lerp(C.flank, smoothstep(-0.88, -0.16, vertical));
      col.lerp(C.shoulder, smoothstep(-0.08, 0.44, vertical) * 0.75);
      col.lerp(C.back, smoothstep(0.3, 0.94, vertical));
      // Fine mottling plus a faint sun-bleached saddle over the shoulders.
      const mottling = (Math.sin(z * 5.1 + x * 8.4) * 0.5 + 0.5) * 0.026;
      const saddle = smoothstep(-1.45, -0.6, z) * (1 - smoothstep(0.2, 1.1, z));
      col.offsetHSL(0, -saddle * 0.02, mottling - 0.012 + saddle * 0.018);
      colors.push(col.r, col.g, col.b);
    }
  }

  for (let r = 0; r < rings.length - 1; r++) {
    for (let i = 0; i < radial; i++) {
      const a = r * radial + i;
      const b = r * radial + ((i + 1) % radial);
      const c = (r + 1) * radial + i;
      const d = (r + 1) * radial + ((i + 1) % radial);
      // Outward winding (verified against the -Z forward axis).
      indices.push(a, b, c, b, d, c);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const mat = new THREE.MeshPhysicalMaterial({
    vertexColors: true,
    roughness: 0.62,
    metalness: 0.0,
    clearcoat: 0.2,
    clearcoatRoughness: 0.56,
    bumpMap: skin,
    bumpScale: 0.014,
    envMapIntensity: 0.5,
    sheen: 0.08,
    sheenRoughness: 0.9,
    sheenColor: new THREE.Color('#8faeaa'),
  });
  return new THREE.Mesh(geo, mat);
}

/* ──────────────────────────────────────────────────────────────
   Fin helpers
   ────────────────────────────────────────────────────────────── */
function smoothFinGeometry(points, thickness = 0.085, bevel = 0.026) {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  shape.splineThru(points.slice(1).map(p => new THREE.Vector2(p[0], p[1])));
  shape.closePath();

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: thickness,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: bevel,
    bevelThickness: bevel,
    curveSegments: 4,
    steps: 1,
  });
  geo.translate(0, 0, -thickness * 0.5);
  // Shape X becomes world +Z; the fin lives in the vertical fore-aft plane.
  geo.rotateY(-Math.PI / 2);
  return geo;
}

function wingGeometry(points, thickness = 0.065, bevel = 0.02) {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  shape.splineThru(points.slice(1).map(p => new THREE.Vector2(p[0], p[1])));
  shape.closePath();

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: thickness,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: bevel,
    bevelThickness: bevel,
    curveSegments: 4,
    steps: 1,
  });
  geo.translate(0, 0, -thickness * 0.5);
  // Lay the wing into the horizontal X/Z plane.
  geo.rotateX(-Math.PI / 2);
  return geo;
}

function tube(points, radius, color, opacity = 1) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
  const geo = new THREE.TubeGeometry(curve, 16, radius, 5, false);
  const mat = new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    depthWrite: opacity >= 1,
  });
  return new THREE.Mesh(geo, mat);
}

/* ──────────────────────────────────────────────────────────────
   Mouth
   ────────────────────────────────────────────────────────────── */
function buildJaw(materials) {
  const jaw = new THREE.Group();

  const mouthMat = new THREE.MeshPhysicalMaterial({
    color: C.mouth,
    roughness: 0.86,
    clearcoat: 0.08,
    side: THREE.DoubleSide,
  });

  // Recessed gape, tucked under the snout so it cannot read as a hole
  // in the body from above.
  const gape = new THREE.Mesh(new THREE.SphereGeometry(1, 22, 14), mouthMat);
  gape.scale.set(0.31, 0.055, 0.24);
  gape.position.set(0, -0.43, -2.49);
  jaw.add(gape);

  const throat = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8), mouthMat);
  throat.scale.set(0.18, 0.05, 0.13);
  throat.position.set(0, -0.46, -2.37);
  jaw.add(throat);

  // The lower jaw is a shallow, muscular scoop that hinges down and back.
  const lower = new THREE.Mesh(new THREE.SphereGeometry(1, 18, 10), materials.fin);
  lower.scale.set(0.3, 0.058, 0.19);
  lower.position.set(0, -0.49, -2.5);
  jaw.add(lower);

  // Dark lip line gives the closed mouth a clean silhouette from the side.
  for (const side of [-1, 1]) {
    jaw.add(tube([
      [side * 0.012, -0.415, -2.72],
      [side * 0.16, -0.405, -2.66],
      [side * 0.29, -0.36, -2.5],
      [side * 0.38, -0.22, -2.27],
    ], 0.016, '#1b2626', 0.95));
  }

  // Teeth: a row on the upper jaw and a slightly staggered lower row.
  const teeth = new THREE.Group();
  for (let i = 0; i < 14; i++) {
    const upper = i < 7;
    const k = upper ? i : i - 7;
    const side = k < 4 ? -1 : 1;
    const j = k % 4;
    const x = side * (0.045 + j * 0.061);
    const z = -2.66 + Math.abs(x) * 0.3 + j * 0.018;
    const baseY = upper ? -0.408 : -0.475;
    const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.015, upper ? 0.063 : 0.052, 5), materials.tooth);
    tooth.position.set(x, baseY, z);
    tooth.rotation.x = upper ? Math.PI - 0.14 : -0.14;
    tooth.rotation.z = side * -0.12;
    teeth.add(tooth);
  }
  jaw.add(teeth);

  // A few corner teeth sit higher than the ventral rows, so the gape
  // reads from the game's above-the-shoulder camera.
  for (const side of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.05, 5), materials.tooth);
      tooth.position.set(side * (0.315 - i * 0.032), -0.235, -2.31 - i * 0.055);
      tooth.rotation.x = Math.PI - 0.18;
      tooth.rotation.z = side * 0.1;
      jaw.add(tooth);
    }
  }

  // Hinge at the rear of the gape. Opening rotates the snout tip down,
  // never up through the roof of the mouth.
  const pivot = new THREE.Vector3(0, -0.34, -2.06);
  jaw.position.copy(pivot);
  jaw.children.forEach(child => child.position.sub(pivot));
  jaw.userData.pivot = pivot;
  return jaw;
}

/* ──────────────────────────────────────────────────────────────
   Shark
   ────────────────────────────────────────────────────────────── */
export function createShark() {
  const group = new THREE.Group();
  group.name = 'Great White';
  const model = new THREE.Group();
  group.add(model);

  const skin = makeSkinTexture();
  const body = buildBody(skin);
  model.add(body);

  const finMat = new THREE.MeshPhysicalMaterial({
    color: C.fin,
    roughness: 0.6,
    metalness: 0.0,
    clearcoat: 0.12,
    clearcoatRoughness: 0.6,
    bumpMap: skin,
    bumpScale: 0.008,
    envMapIntensity: 0.45,
  });
  const darkFinMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#293d3c'),
    roughness: 0.64,
    clearcoat: 0.08,
    envMapIntensity: 0.4,
  });
  const toothMat = new THREE.MeshPhysicalMaterial({
    color: C.tooth,
    roughness: 0.34,
    clearcoat: 0.35,
    emissive: new THREE.Color('#2b2413'),
    emissiveIntensity: 0.04,
  });
  const eyeMat = new THREE.MeshPhysicalMaterial({
    color: C.eye,
    roughness: 0.05,
    metalness: 0.15,
    clearcoat: 1,
    clearcoatRoughness: 0.015,
    envMapIntensity: 1.15,
  });

  // Main dorsal fin: swept back, broad at the base, iconic tip.
  const dorsal = new THREE.Mesh(smoothFinGeometry([
    [0.58, 0.02],
    [0.48, 0.25],
    [0.35, 0.54],
    [0.22, 0.83],
    [0.06, 0.92],
    [-0.1, 0.78],
    [-0.3, 0.48],
    [-0.48, 0.18],
    [-0.6, 0.0],
  ], 0.1), finMat);
  dorsal.position.set(0, 0.55, 0.1);
  model.add(dorsal);

  // Second dorsal.
  const dorsal2 = new THREE.Mesh(smoothFinGeometry([
    [0.3, 0.0],
    [0.22, 0.11],
    [0.12, 0.26],
    [0.01, 0.3],
    [-0.12, 0.22],
    [-0.24, 0.07],
    [-0.3, 0.0],
  ], 0.058), darkFinMat);
  dorsal2.position.set(0, 0.28, 1.66);
  model.add(dorsal2);

  // Pectoral wings: long, tapered and swept back, with a slight droop.
  const pectoralGeo = wingGeometry([
    [0.0, 0.0],
    [0.46, -0.08],
    [0.92, -0.28],
    [1.3, -0.6],
    [1.46, -0.81],
    [1.39, -0.96],
    [1.08, -0.83],
    [0.68, -0.62],
    [0.28, -0.37],
    [-0.04, -0.14],
  ], 0.06, 0.018);
  const leftFin = new THREE.Mesh(pectoralGeo, finMat);
  leftFin.scale.x = -1;
  leftFin.position.set(-0.52, -0.25, -0.82);
  leftFin.rotation.z = 0.14;
  leftFin.rotation.x = -0.04;
  const rightFin = new THREE.Mesh(pectoralGeo, finMat);
  rightFin.position.set(0.52, -0.25, -0.82);
  rightFin.rotation.z = -0.14;
  rightFin.rotation.x = -0.04;
  model.add(leftFin, rightFin);

  // Pelvic fins.
  const pelvicGeo = wingGeometry([
    [0, 0],
    [0.2, -0.05],
    [0.38, -0.22],
    [0.42, -0.34],
    [0.34, -0.36],
    [0.18, -0.25],
    [0.04, -0.11],
  ], 0.04, 0.012);
  for (const side of [-1, 1]) {
    const pelvic = new THREE.Mesh(pelvicGeo, darkFinMat);
    pelvic.scale.x = side * 0.72;
    pelvic.position.set(side * 0.22, -0.46, 1.22);
    pelvic.rotation.z = -side * 0.18;
    model.add(pelvic);
  }

  // Anal fin.
  const anal = new THREE.Mesh(smoothFinGeometry([
    [0.18, 0],
    [0.1, 0.08],
    [0.02, 0.24],
    [-0.1, 0.2],
    [-0.2, 0.06],
    [-0.22, 0],
  ], 0.045), darkFinMat);
  anal.position.set(0, -0.55, 1.76);
  model.add(anal);

  // Caudal keel at the tail stock.
  for (const side of [-1, 1]) {
    const keel = new THREE.Mesh(wingGeometry([
      [0, 0],
      [0.2, -0.02],
      [0.34, -0.12],
      [0.2, -0.16],
      [0.02, -0.08],
    ], 0.035, 0.008), darkFinMat);
    keel.scale.x = side;
    keel.position.set(side * 0.06, 0.0, 2.14);
    model.add(keel);
  }

  // Tail group and crescent caudal fin.
  const tail = new THREE.Group();
  tail.position.set(0, 0.02, 2.37);
  const tailFin = new THREE.Mesh(smoothFinGeometry([
    [0.0, 0.15],
    [0.22, 0.42],
    [0.4, 0.79],
    [0.55, 1.11],
    [0.72, 1.22],
    [0.66, 0.96],
    [0.46, 0.55],
    [0.28, 0.21],
    [0.3, -0.02],
    [0.48, -0.34],
    [0.62, -0.58],
    [0.55, -0.73],
    [0.34, -0.55],
    [0.13, -0.24],
    [0.01, -0.02],
  ], 0.095), finMat);
  tail.add(tailFin);
  model.add(tail);

  // Jaw.
  const jaw = buildJaw({ fin: finMat, tooth: toothMat });
  model.add(jaw);

  // Eyes and sockets, set wide on the head.
  for (const side of [-1, 1]) {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 12), darkFinMat);
    socket.scale.set(1, 0.9, 1.05);
    socket.position.set(side * 0.475, 0.13, -2.23);
    model.add(socket);

    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.055, 18, 14), eyeMat);
    eye.position.set(side * 0.52, 0.135, -2.2);
    model.add(eye);

    const glint = new THREE.Mesh(
      new THREE.SphereGeometry(0.009, 6, 5),
      new THREE.MeshBasicMaterial({ color: '#dffaf2' })
    );
    glint.position.set(side * 0.548, 0.162, -2.185);
    model.add(glint);
  }

  // Gill slits, curved to follow the flank.
  for (const side of [-1, 1]) {
    for (let i = 0; i < 5; i++) {
      const z = -1.46 + i * 0.16;
      const gill = tube([
        [side * 0.575, 0.24, z],
        [side * 0.635, 0.02, z - 0.028],
        [side * 0.585, -0.2, z - 0.042],
      ], 0.009, '#1b2929', 0.82);
      model.add(gill);
    }
  }

  // Nostrils and lateral line.
  for (const side of [-1, 1]) {
    const nostril = new THREE.Mesh(
      new THREE.SphereGeometry(0.021, 8, 6),
      new THREE.MeshBasicMaterial({ color: '#192626' })
    );
    nostril.position.set(side * 0.15, -0.17, -2.86);
    nostril.scale.set(1, 0.65, 0.55);
    model.add(nostril);
  }
  model.add(tube([
    [-0.57, 0.23, -1.8],
    [-0.62, 0.16, -1.2],
    [-0.59, 0.11, -0.6],
    [-0.5, 0.09, 0.2],
  ], 0.007, '#9cb4ab', 0.25));
  model.add(tube([
    [0.57, 0.23, -1.8],
    [0.62, 0.16, -1.2],
    [0.59, 0.11, -0.6],
    [0.5, 0.09, 0.2],
  ], 0.007, '#9cb4ab', 0.25));

  // Old scars.
  model.add(tube([
    [0.54, 0.47, -0.15],
    [0.59, 0.33, 0.15],
    [0.5, 0.18, 0.45],
  ], 0.01, '#c2cdc4', 0.38));
  model.add(tube([
    [-0.53, 0.4, 0.55],
    [-0.58, 0.24, 0.78],
  ], 0.008, '#bdc9c1', 0.3));

  const state = {
    jawOpen: 0,
    bite: 0,
    tailPhase: 0,
    roll: 0,
    speed: 0,
  };

  function update(dt, time, speed, turn) {
    state.speed += (speed - state.speed) * Math.min(1, dt * 4);
    state.tailPhase += dt * (2.45 + speed * 0.4);
    const wag = 0.2 + Math.min(0.26, speed * 0.012);
    tail.rotation.y = Math.sin(state.tailPhase) * wag;
    tail.rotation.z = Math.sin(state.tailPhase * 0.5) * 0.03;

    // A tiny amount of body flex keeps the animal from feeling rigid.
    model.rotation.y = Math.sin(state.tailPhase - 0.5) * 0.012 + turn * 0.025;
    model.rotation.z = Math.sin(time * 0.9) * 0.01 - turn * 0.05;
    model.rotation.x = Math.sin(time * 0.7) * 0.006;
    model.position.y = Math.sin(time * 1.65) * 0.03;

    leftFin.rotation.z = 0.14 + Math.sin(state.tailPhase * 0.5 + 0.6) * 0.025;
    rightFin.rotation.z = -0.14 - Math.sin(state.tailPhase * 0.5) * 0.025;

    state.jawOpen += ((state.bite > 0 ? 1 : 0) - state.jawOpen) * Math.min(1, dt * 14);
    state.bite = Math.max(0, state.bite - dt);
    jaw.rotation.x = -0.14 - state.jawOpen * 0.56;
    jaw.rotation.z = Math.sin(state.tailPhase * 0.3) * 0.007;
  }

  function bite() {
    state.bite = 0.38;
  }

  function setRoll(r) {
    state.roll = r;
  }

  group.userData = { model, tail, jaw, bite, update, setRoll };
  return group;
}
