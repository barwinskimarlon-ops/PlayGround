import * as THREE from "three";

const _v = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _e = new THREE.Euler();

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function makeWindowTexture(variant = 0, seed = 1) {
  const rand = rng(seed * 73 + variant * 977);
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#0d1116";
  ctx.fillRect(0, 0, 128, 256);

  const floors = 18;
  const cols = 7;
  const fh = 256 / floors;
  const cw = 128 / cols;

  for (let y = 0; y < floors; y++) {
    const floorBias = 0.25 + 0.5 * (y / floors);
    for (let x = 0; x < cols; x++) {
      const lit = rand() < 0.36 * floorBias;
      const w = cw * (0.46 + rand() * 0.22);
      const h = fh * (0.36 + rand() * 0.2);
      const px = x * cw + (cw - w) / 2;
      const py = y * fh + (fh - h) / 2;
      if (lit) {
        const warm = rand() < 0.67;
        const bright = 0.52 + rand() * 0.48;
        const color = warm
          ? `rgba(${Math.round(255 * bright)}, ${Math.round(198 * bright)}, ${Math.round(110 * bright)}, 1)`
          : `rgba(${Math.round(135 * bright)}, ${Math.round(220 * bright)}, ${Math.round(255 * bright)}, 1)`;
        ctx.fillStyle = color;
        ctx.fillRect(px, py, w, h);
        if (rand() < 0.25) {
          ctx.fillStyle = "rgba(255,255,255,0.4)";
          ctx.fillRect(px, py, w, Math.max(1, h * 0.16));
        }
      } else {
        ctx.fillStyle = `rgba(42, 54, 64, ${0.24 + rand() * 0.25})`;
        ctx.fillRect(px, py, w, h);
      }
    }
    ctx.fillStyle = "rgba(0,0,0,0.16)";
    ctx.fillRect(0, y * fh + fh - 1, 128, 1);
  }

  const grime = ctx.createLinearGradient(0, 0, 0, 256);
  grime.addColorStop(0, "rgba(0,0,0,0)");
  grime.addColorStop(0.7, "rgba(0,0,0,0.12)");
  grime.addColorStop(1, "rgba(0,0,0,0.44)");
  ctx.fillStyle = grime;
  ctx.fillRect(0, 0, 128, 256);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  return tex;
}

function makeGlowTexture() {
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.16, "rgba(255,255,255,0.9)");
  g.addColorStop(0.42, "rgba(255,255,255,0.26)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeCloudTexture() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 192;
  const ctx = c.getContext("2d");
  const rand = rng(944);
  ctx.clearRect(0, 0, c.width, c.height);
  for (let i = 0; i < 58; i++) {
    const x = 30 + rand() * 450;
    const y = 60 + rand() * 80;
    const r = 22 + rand() * 55;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(255,255,255,${0.05 + rand() * 0.09})`);
    g.addColorStop(0.6, `rgba(255,255,255,${0.02 + rand() * 0.04})`);
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeNeonTexture(text, color, sub = "") {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 512;
  const ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle = "rgba(3,6,9,0.4)";
  ctx.fillRect(28, 38, 200, 428);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.strokeRect(34, 44, 188, 416);
  ctx.fillStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = 24;
  ctx.font = "700 45px 'Arial Narrow', sans-serif";
  ctx.textAlign = "center";
  const chars = text.split("");
  chars.forEach((ch, i) => {
    ctx.fillText(ch, 128, 112 + i * 51);
  });
  ctx.shadowBlur = 10;
  ctx.font = "400 12px monospace";
  ctx.fillText(sub, 128, 448);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class CityWorld {
  constructor(scene, callbacks = {}) {
    this.scene = scene;
    this.buildings = [];
    this.cars = [];
    this.callbacks = callbacks;
    this.lowPower = !!callbacks.lowPower;
    this.rand = rng(177013);
    this.time = 0;
    this.trafficEnabled = true;
    this.beaconMaterial = null;
    this.clouds = [];
    this.sun = null;

    this._createSky();
    this._createLights();
    this._createGround();
    this._createCity();
    this._createRuins();
    this._createTraffic();
    this._createAtmosphere();
    this._createDistantSkyline();
  }

  _createSky() {
    const geo = new THREE.SphereGeometry(780, 48, 32);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        uTop: { value: new THREE.Color("#02040a") },
        uMid: { value: new THREE.Color("#101a2c") },
        uHorizon: { value: new THREE.Color("#8a3d37") },
        uLow: { value: new THREE.Color("#d1663f") },
        uSun: { value: new THREE.Color("#ffb36b") },
        uSunDir: { value: new THREE.Vector3(-0.42, 0.09, -0.9).normalize() },
      },
      vertexShader: /* glsl */ `
        varying vec3 vWorld;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          vWorld = world.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uTop;
        uniform vec3 uMid;
        uniform vec3 uHorizon;
        uniform vec3 uLow;
        uniform vec3 uSun;
        uniform vec3 uSunDir;
        varying vec3 vWorld;

        float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }

        void main() {
          vec3 dir = normalize(vWorld);
          float h = dir.y;
          float skyMix = smoothstep(-0.015, 0.62, h);
          vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.34, h));
          col = mix(col, uTop, smoothstep(0.24, 0.86, h));
          col = mix(col, uLow, smoothstep(-0.03, -0.2, h) * 0.55);

          float sunDot = max(dot(dir, uSunDir), 0.0);
          float disc = pow(sunDot, 720.0);
          float halo = pow(sunDot, 14.0);
          float bloom = pow(sunDot, 3.2);
          col += uSun * disc * 2.2;
          col += uSun * halo * 0.3;
          col += uSun * bloom * 0.08;

          float band = smoothstep(0.0, 0.018, abs(h - 0.012));
          col += vec3(0.18, 0.05, 0.025) * (1.0 - band) * 0.4;

          vec2 starUV = floor(dir.xz * 440.0 / max(0.35, dir.y + 0.2));
          float star = step(0.9986, hash(starUV)) * smoothstep(0.2, 0.8, h);
          col += vec3(0.9, 0.94, 1.0) * star * 0.65;

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    this.sky = new THREE.Mesh(geo, mat);
    this.sky.frustumCulled = false;
    this.scene.add(this.sky);

    const sunCanvas = document.createElement("canvas");
    sunCanvas.width = sunCanvas.height = 128;
    const sctx = sunCanvas.getContext("2d");
    const sg = sctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    sg.addColorStop(0, "rgba(255,238,204,1)");
    sg.addColorStop(0.15, "rgba(255,183,107,0.88)");
    sg.addColorStop(0.45, "rgba(255,110,58,0.18)");
    sg.addColorStop(1, "rgba(255,90,40,0)");
    sctx.fillStyle = sg;
    sctx.fillRect(0, 0, 128, 128);
    const sunTex = new THREE.CanvasTexture(sunCanvas);
    sunTex.colorSpace = THREE.SRGBColorSpace;
    this.sun = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: sunTex,
        color: "#ffd3a0",
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false,
      })
    );
    this.sun.scale.set(170, 170, 1);
    this.sun.position.set(-300, 80, -600);
    this.scene.add(this.sun);
  }

  _createLights() {
    this.scene.fog = new THREE.FogExp2(0x151b26, 0.00195);

    const hemi = new THREE.HemisphereLight(0x6f88ad, 0x331d13, 2.15);
    this.scene.add(hemi);

    const key = new THREE.DirectionalLight(0xffb37a, 2.4);
    key.position.set(-180, 140, -180);
    key.castShadow = true;
    key.shadow.mapSize.set(this.lowPower ? 1024 : 2048, this.lowPower ? 1024 : 2048);
    key.shadow.camera.left = -250;
    key.shadow.camera.right = 250;
    key.shadow.camera.top = 250;
    key.shadow.camera.bottom = -250;
    key.shadow.camera.near = 20;
    key.shadow.camera.far = 600;
    key.shadow.bias = -0.00035;
    key.shadow.normalBias = 0.45;
    this.scene.add(key);
    this.keyLight = key;

    const rim = new THREE.DirectionalLight(0x5caeff, 1.6);
    rim.position.set(120, 80, 200);
    this.scene.add(rim);

    // Low warm fill from the burning city so facades facing the player are
    // readable instead of collapsing into pure silhouette.
    const fill = new THREE.DirectionalLight(0xb9c8df, 1.05);
    fill.position.set(60, 55, 260);
    this.scene.add(fill);

    const cityGlow = new THREE.AmbientLight(0xff6b3d, 0.24);
    this.scene.add(cityGlow);

    this.flashLight = new THREE.PointLight(0xff7a35, 0, 90, 2);
    this.flashLight.position.set(0, 25, 0);
    this.scene.add(this.flashLight);
  }

  _createGround() {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(1300, 1300),
      new THREE.MeshStandardMaterial({ color: 0x080b0e, roughness: 0.93, metalness: 0.08 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.02;
    ground.receiveShadow = true;
    this.scene.add(ground);

    const central = new THREE.Mesh(
      new THREE.PlaneGeometry(25, 500),
      new THREE.MeshStandardMaterial({ color: 0x0c1015, roughness: 0.88, metalness: 0.1 })
    );
    central.rotation.x = -Math.PI / 2;
    central.position.y = 0.005;
    central.receiveShadow = true;
    this.scene.add(central);

    const cross = new THREE.Mesh(
      new THREE.PlaneGeometry(500, 25),
      new THREE.MeshStandardMaterial({ color: 0x0b0f14, roughness: 0.88, metalness: 0.1 })
    );
    cross.rotation.x = -Math.PI / 2;
    cross.position.y = 0.006;
    cross.receiveShadow = true;
    this.scene.add(cross);

    this._createRoadMarkings();

    const baseTex = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => makeWindowTexture(i, i + 2));
    this.windowTextures = baseTex;

    this.blockMaterial = new THREE.MeshStandardMaterial({
      color: 0x151b21,
      roughness: 0.94,
      metalness: 0.03,
    });
    this.sidewalkMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a2026,
      roughness: 0.92,
      metalness: 0.06,
    });
    this.wallMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x7c858e, roughness: 0.72, metalness: 0.12 }),
      new THREE.MeshStandardMaterial({ color: 0x6d7680, roughness: 0.78, metalness: 0.08 }),
      new THREE.MeshStandardMaterial({ color: 0x515c66, roughness: 0.68, metalness: 0.18 }),
      new THREE.MeshStandardMaterial({ color: 0x8a7f73, roughness: 0.8, metalness: 0.06 }),
    ];
    this.roofMaterial = new THREE.MeshStandardMaterial({ color: 0x12171c, roughness: 0.88 });
    this.metalMaterial = new THREE.MeshStandardMaterial({
      color: 0x323a42,
      roughness: 0.52,
      metalness: 0.65,
    });
  }

  _createRoadMarkings() {
    const dashGeo = new THREE.BoxGeometry(0.24, 0.03, 3.2);
    const dashMat = new THREE.MeshBasicMaterial({ color: 0xb6a580 });
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xff7a3d });
    const count = 900;
    const dashes = new THREE.InstancedMesh(dashGeo, dashMat, count);
    let i = 0;
    const roads = [-246, -198, -150, -102, -54, 0, 54, 102, 150, 198, 246];

    for (const road of roads) {
      const isCentral = road === 0;
      for (let z = -246; z <= 246; z += 13) {
        if (i >= count) break;
        if (!isCentral && Math.abs(z % 54) < 15) continue;
        _m.makeTranslation(road + (isCentral ? 0 : 4.2), 0.03, z);
        dashes.setMatrixAt(i++, _m);
      }
    }
    for (const road of roads) {
      const isCentral = road === 0;
      for (let x = -246; x <= 246; x += 13) {
        if (i >= count) break;
        if (!isCentral && Math.abs(x % 54) < 15) continue;
        _e.set(0, Math.PI / 2, 0);
        _q.setFromEuler(_e);
        _m.compose(new THREE.Vector3(x, 0.031, road + (isCentral ? 0 : 4.2)), _q, new THREE.Vector3(1, 1, 1));
        dashes.setMatrixAt(i++, _m);
      }
    }
    dashes.count = i;
    dashes.instanceMatrix.needsUpdate = true;
    this.scene.add(dashes);

    const edgeGeo = new THREE.BoxGeometry(0.08, 0.05, 3);
    const edge = new THREE.InstancedMesh(edgeGeo, glowMat, 300);
    let j = 0;
    for (let z = -238; z <= 238; z += 9) {
      if (j >= 300) break;
      _m.makeTranslation(-11.4, 0.04, z);
      edge.setMatrixAt(j++, _m);
      if (j < 300) {
        _m.makeTranslation(11.4, 0.04, z);
        edge.setMatrixAt(j++, _m);
      }
    }
    edge.count = j;
    edge.instanceMatrix.needsUpdate = true;
    this.scene.add(edge);
  }

  _createCity() {
    const blocks = [];
    for (let ix = -5; ix <= 5; ix++) {
      for (let iz = -5; iz <= 5; iz++) {
        if (ix === 0 || iz === 0) continue;
        const cx = Math.sign(ix) * (30 + (Math.abs(ix) - 1) * 48);
        const cz = Math.sign(iz) * (30 + (Math.abs(iz) - 1) * 48);
        blocks.push({ cx, cz, ix, iz });
      }
    }
    // sparse outer ring, read as distant city instead of playable blocks
    for (let i = 0; i < 44; i++) {
      const side = Math.floor(this.rand() * 4);
      const t = (this.rand() - 0.5) * 520;
      const edge = 270 + this.rand() * 60;
      const cx = side < 2 ? t : (side === 2 ? -1 : 1) * edge;
      const cz = side < 2 ? (side === 0 ? -1 : 1) * edge : t;
      blocks.push({ cx, cz, ix: 99, iz: 99, outer: true });
    }

    const blockGeo = new THREE.BoxGeometry(36, 1.2, 36);
    const sidewalkGeo = new THREE.BoxGeometry(37.4, 0.24, 37.4);
    const roofGeo = new THREE.BoxGeometry(1, 1, 1);
    const antennaGeo = new THREE.CylinderGeometry(0.12, 0.22, 1, 5);
    const beaconPositions = [];

    for (const block of blocks) {
      if (block.outer) {
        const groundBlock = new THREE.Mesh(blockGeo, this.blockMaterial);
        groundBlock.position.set(block.cx, 0.6, block.cz);
        groundBlock.receiveShadow = true;
        this.scene.add(groundBlock);
        const sw = new THREE.Mesh(sidewalkGeo, this.sidewalkMaterial);
        sw.position.set(block.cx, 1.16, block.cz);
        sw.receiveShadow = true;
        this.scene.add(sw);

        // sparse outer buildings
        if (this.rand() < 0.7) {
          this._addBuilding(block.cx, block.cz, this.rand() * 8 + 4, 10 + this.rand() * 30, roofGeo, antennaGeo, beaconPositions, true);
        }
        continue;
      }

      const blockMesh = new THREE.Mesh(blockGeo, this.blockMaterial);
      blockMesh.position.set(block.cx, 0.6, block.cz);
      blockMesh.receiveShadow = true;
      this.scene.add(blockMesh);

      const sidewalk = new THREE.Mesh(sidewalkGeo, this.sidewalkMaterial);
      sidewalk.position.set(block.cx, 1.17, block.cz);
      sidewalk.receiveShadow = true;
      this.scene.add(sidewalk);

      const centralDist = Math.hypot(block.cx, block.cz);
      const tallBias = centralDist < 110 ? 1.35 : centralDist > 185 ? 0.66 : 1;
      const layoutRoll = this.rand();

      if (layoutRoll < 0.17) {
        // plaza / low-rise lot
        if (this.rand() < 0.55) {
          this._addBuilding(block.cx + (this.rand() - 0.5) * 7, block.cz + (this.rand() - 0.5) * 7, 8 + this.rand() * 7, 7 + this.rand() * 12 * tallBias, roofGeo, antennaGeo, beaconPositions);
        }
        this._addPlazaProp(block.cx, block.cz);
      } else if (layoutRoll < 0.55) {
        this._addBuilding(
          block.cx + (this.rand() - 0.5) * 5,
          block.cz + (this.rand() - 0.5) * 5,
          20 + this.rand() * 8,
          (22 + this.rand() * 35) * tallBias,
          roofGeo,
          antennaGeo,
          beaconPositions
        );
      } else {
        const splitX = this.rand() < 0.5;
        const off = 7.6;
        const w1 = splitX ? 15.5 : 23.5;
        const d1 = splitX ? 23.5 : 15.5;
        this._addBuilding(
          block.cx + (splitX ? -off : 0),
          block.cz + (splitX ? 0 : -off),
          w1,
          (16 + this.rand() * 28) * tallBias,
          roofGeo,
          antennaGeo,
          beaconPositions
        );
        this._addBuilding(
          block.cx + (splitX ? off : 0),
          block.cz + (splitX ? 0 : off),
          14 + this.rand() * 6,
          (10 + this.rand() * 23) * tallBias,
          roofGeo,
          antennaGeo,
          beaconPositions
        );
      }

      if (this.rand() < 0.3) this._addNeon(block);
    }

    const beaconGeo = new THREE.BufferGeometry();
    beaconGeo.setAttribute("position", new THREE.Float32BufferAttribute(beaconPositions.flat(), 3));
    this.beaconMaterial = new THREE.PointsMaterial({
      color: 0xff3a2a,
      size: 1.65,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: makeGlowTexture(),
      alphaTest: 0.04,
    });
    this.beacons = new THREE.Points(beaconGeo, this.beaconMaterial);
    this.scene.add(this.beacons);

    this._createStreetLights();
    this._createSearchlight();
  }

  _createRuins() {
    this.fires = [];
    const candidates = this.buildings.filter(
      (b) => Math.abs(b.x) > 18 && Math.abs(b.x) < 95 && b.z > -165 && b.z < 150 && b.height > 16
    );
    if (!candidates.length) return;

    const glowTex = makeGlowTexture();
    const sites = 5;
    for (let i = 0; i < sites && candidates.length; i++) {
      const pick = Math.floor(this.rand() * candidates.length);
      const building = candidates.splice(pick, 1)[0];
      building.hp = 0;
      this._destroyBuilding(building);

      const size = 7 + this.rand() * 7;
      const fire = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTex,
          color: i % 3 === 0 ? 0xffd08a : 0xff6a2c,
          transparent: true,
          opacity: 0.72,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          fog: false,
        })
      );
      fire.position.set(building.x + (this.rand() - 0.5) * 5, 4.5 + this.rand() * 3.5, building.z + (this.rand() - 0.5) * 5);
      fire.scale.set(size, size * 0.82, 1);
      this.scene.add(fire);

      const core = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTex,
          color: 0xffe1a6,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          fog: false,
        })
      );
      core.position.copy(fire.position).add(new THREE.Vector3(0, 1.2, 0.2));
      core.scale.set(size * 0.36, size * 0.46, 1);
      this.scene.add(core);

      if (i < 1 && !this.lowPower) {
        const light = new THREE.PointLight(0xff7438, 18, 55, 2);
        light.position.copy(fire.position).add(new THREE.Vector3(0, 4, 0));
        this.scene.add(light);
      }

      this.fires.push({
        sprite: fire,
        core,
        x: fire.position.x,
        y: fire.position.y,
        z: fire.position.z,
        base: size,
        phase: this.rand() * Math.PI * 2,
      });
    }

    // Street fires along the central corridor guarantee an obvious burning-city
    // read from the player's approach even when side blocks occlude the ruins.
    const streetSites = [
      [-8, 5.5, 58, 13],
      [8, 6.5, -14, 11],
      [-7, 5.5, -96, 14],
      [9, 7, -152, 10],
    ];
    for (let i = 0; i < streetSites.length; i++) {
      const [x, y, z, size] = streetSites[i];
      const fire = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTex,
          color: i % 2 === 0 ? 0xff7430 : 0xffa04e,
          transparent: true,
          opacity: 0.78,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          fog: false,
        })
      );
      fire.position.set(x, y, z);
      fire.scale.set(size, size * 0.85, 1);
      this.scene.add(fire);
      const core = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTex,
          color: 0xffe9b8,
          transparent: true,
          opacity: 0.65,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          fog: false,
        })
      );
      core.position.set(x, y + 1, z + 0.3);
      core.scale.set(size * 0.34, size * 0.44, 1);
      this.scene.add(core);
      this.fires.push({ sprite: fire, core, x, y, z, base: size, phase: this.rand() * Math.PI * 2 });
    }

    // Burning high-rises: flames on the facades stay visible above the rooftops.
    for (let i = 0; i < 3 && candidates.length; i++) {
      let bestIndex = 0;
      for (let j = 1; j < candidates.length; j++) {
        if (candidates[j].height > candidates[bestIndex].height) bestIndex = j;
      }
      const building = candidates.splice(bestIndex, 1)[0];
      if (building.height < 26) break;
      const size = 7 + this.rand() * 6;
      const fire = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTex,
          color: 0xff7c34,
          transparent: true,
          opacity: 0.62,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          fog: false,
        })
      );
      const fx = building.x + (this.rand() - 0.5) * building.width * 0.55;
      const fy = 1.28 + building.height * (0.52 + this.rand() * 0.2);
      const fz = building.z + building.depth / 2 + 0.45;
      fire.position.set(fx, fy, fz);
      fire.scale.set(size, size * 0.8, 1);
      this.scene.add(fire);
      const core = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTex,
          color: 0xffdca2,
          transparent: true,
          opacity: 0.55,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          fog: false,
        })
      );
      core.position.set(fx, fy + 0.8, fz + 0.2);
      core.scale.set(size * 0.32, size * 0.4, 1);
      this.scene.add(core);
      if (i === 0 && !this.lowPower) {
        const light = new THREE.PointLight(0xff6a30, 26, 70, 2);
        light.position.set(fx, fy + 5, fz + 2);
        this.scene.add(light);
      }
      this.fires.push({ sprite: fire, core, x: fx, y: fy, z: fz, base: size, phase: this.rand() * Math.PI * 2 });
    }
  }

  _addBuilding(x, z, width, height, roofGeo, antennaGeo, beaconPositions, outer = false) {
    width = Math.max(6, Math.min(27, width));
    height = Math.max(6, height);
    const depth = width * (0.68 + this.rand() * 0.5);
    const variant = Math.floor(this.rand() * this.windowTextures.length);
    const tex = this.windowTextures[variant].clone();
    tex.needsUpdate = true;
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(Math.max(1, Math.round(width / 6.5)), Math.max(2, Math.round(height / 7.5)));
    tex.anisotropy = 8;

    const base = this.wallMaterials[Math.floor(this.rand() * this.wallMaterials.length)];
    const mat = new THREE.MeshStandardMaterial({
      color: base.color.clone().multiplyScalar(0.82 + this.rand() * 0.3),
      map: tex,
      emissive: 0xffffff,
      emissiveMap: tex,
      emissiveIntensity: outer ? 0.5 : 0.9,
      roughness: 0.7,
      metalness: 0.1,
    });

    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), mat);
    const y = 1.28 + height / 2;
    mesh.position.set(x, y, z);
    mesh.castShadow = !outer && height > 12;
    mesh.receiveShadow = true;
    this.scene.add(mesh);

    // roof slab
    const roof = new THREE.Mesh(roofGeo, this.roofMaterial);
    roof.position.set(x, 1.28 + height + 0.35, z);
    roof.scale.set(width + 0.5, 0.7, depth + 0.5);
    roof.castShadow = true;
    this.scene.add(roof);

    // roof equipment
    if (!outer && this.rand() < 0.75) {
      const count = 1 + Math.floor(this.rand() * 3);
      for (let i = 0; i < count; i++) {
        const ac = new THREE.Mesh(
          new THREE.BoxGeometry(1.1 + this.rand() * 2.5, 0.8 + this.rand() * 1.8, 1.1 + this.rand() * 2.4),
          this.metalMaterial
        );
        ac.position.set(
          x + (this.rand() - 0.5) * (width - 4),
          1.28 + height + 0.8,
          z + (this.rand() - 0.5) * (depth - 4)
        );
        ac.castShadow = true;
        this.scene.add(ac);
      }
    }

    if (!outer && this.rand() < 0.36) {
      const h = 4 + this.rand() * 12;
      const antenna = new THREE.Mesh(antennaGeo, this.metalMaterial);
      antenna.scale.y = h;
      antenna.position.set(x + (this.rand() - 0.5) * width * 0.5, 1.28 + height + h / 2, z + (this.rand() - 0.5) * depth * 0.5);
      antenna.castShadow = true;
      this.scene.add(antenna);
      beaconPositions.push(antenna.position.x, antenna.position.y + h / 2 + 0.25, antenna.position.z);
    }

    if (!outer && this.rand() < 0.25) {
      const trimMat = new THREE.MeshBasicMaterial({
        color: this.rand() < 0.5 ? 0x5ee7ff : 0xff5a2d,
        transparent: true,
        opacity: 0.72,
      });
      const trim = new THREE.Mesh(new THREE.BoxGeometry(width + 0.14, 0.12, 0.12), trimMat);
      trim.position.set(x, 1.28 + height - 1.2, z + depth / 2 + 0.07);
      this.scene.add(trim);
    }

    if (!outer) {
      this.buildings.push({
        mesh,
        roof,
        x,
        z,
        width,
        depth,
        height,
        y: y,
        hp: 3,
        destroyed: false,
        rubble: null,
      });
    }
  }

  _addPlazaProp(x, z) {
    const material = new THREE.MeshStandardMaterial({ color: 0x232a30, roughness: 0.82 });
    const count = 2 + Math.floor(this.rand() * 3);
    for (let i = 0; i < count; i++) {
      const crate = new THREE.Mesh(
        new THREE.BoxGeometry(1.4 + this.rand() * 2.5, 0.7 + this.rand() * 1.6, 1.4 + this.rand() * 2.5),
        material
      );
      crate.position.set(x + (this.rand() - 0.5) * 22, 1.9, z + (this.rand() - 0.5) * 22);
      crate.rotation.y = this.rand() * Math.PI;
      this.scene.add(crate);
    }
  }

  _addNeon(block) {
    const side = this.rand() < 0.5 ? -1 : 1;
    const color = this.rand() < 0.5 ? "#5ee7ff" : "#ff6338";
    const text = ["SHELTER", "SECTOR 7", "NEO-K", "DANGER", "EVAC"][Math.floor(this.rand() * 5)];
    const tex = makeNeonTexture(text, color, "CIVIL DEFENSE");
    const mat = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.67,
    });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(3.5, 7), mat);
    plane.position.set(block.cx + side * 18.9, 6.5, block.cz + (this.rand() - 0.5) * 13);
    plane.rotation.y = side < 0 ? Math.PI / 2 : -Math.PI / 2;
    this.scene.add(plane);
  }

  _createStreetLights() {
    const poleGeo = new THREE.CylinderGeometry(0.12, 0.18, 7, 4);
    const armGeo = new THREE.BoxGeometry(2.1, 0.12, 0.12);
    const lampGeo = new THREE.SphereGeometry(0.22, 5, 4);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x252c33, roughness: 0.7, metalness: 0.5 });
    const lampMat = new THREE.MeshBasicMaterial({ color: 0xffc37a });

    for (let i = 0; i < 26; i++) {
      const angle = (i / 26) * Math.PI * 2;
      const radius = 58 + this.rand() * 166;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const g = new THREE.Group();
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.y = 3.5;
      g.add(pole);
      const arm = new THREE.Mesh(armGeo, poleMat);
      arm.position.set(1, 6.9, 0);
      g.add(arm);
      const lamp = new THREE.Mesh(lampGeo, lampMat);
      lamp.position.set(1.9, 6.75, 0);
      g.add(lamp);
      g.position.set(x, 1.28, z);
      g.rotation.y = angle + Math.PI;
      this.scene.add(g);

      if (i % 7 === 0) {
        const light = new THREE.PointLight(0xffa35b, 4.5, 23, 2);
        light.position.set(x, 7.6, z);
        this.scene.add(light);
      }
    }
  }

  _createSearchlight() {
    const mat = new THREE.MeshBasicMaterial({
      color: 0x9ebcff,
      transparent: true,
      opacity: 0.035,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.searchlights = [];
    for (let i = 0; i < 3; i++) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(19, 115, 22, 1, true), mat.clone());
      cone.geometry.translate(0, -57.5, 0);
      cone.position.set(-110 + i * 110, 25, -130 + i * 70);
      cone.material.opacity = 0.026 + i * 0.006;
      this.scene.add(cone);
      this.searchlights.push(cone);
    }
  }

  _createTraffic() {
    const bodyMats = [
      new THREE.MeshStandardMaterial({ color: 0x232a31, roughness: 0.55, metalness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x4a2525, roughness: 0.5, metalness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x1d3040, roughness: 0.5, metalness: 0.55 }),
      new THREE.MeshStandardMaterial({ color: 0x4a4238, roughness: 0.65, metalness: 0.3 }),
    ];
    const lightMat = new THREE.MeshBasicMaterial({ color: 0xffe3b0 });
    const tailMat = new THREE.MeshBasicMaterial({ color: 0xff2f25 });
    const bodyGeo = new THREE.BoxGeometry(2.8, 0.62, 1.25);
    const roofGeo = new THREE.BoxGeometry(1.4, 0.42, 1.05);
    const lightGeo = new THREE.BoxGeometry(0.35, 0.16, 0.11);
    const rand = rng(4901);
    const roads = [-198, -150, -102, -54, 0, 54, 102, 150, 198];

    for (let i = 0; i < 34; i++) {
      const axis = rand() < 0.5 ? "x" : "z";
      const road = roads[Math.floor(rand() * roads.length)];
      const dir = rand() < 0.5 ? 1 : -1;
      const body = new THREE.Mesh(bodyGeo, bodyMats[Math.floor(rand() * bodyMats.length)]);
      const roof = new THREE.Mesh(roofGeo, bodyMats[Math.floor(rand() * bodyMats.length)]);
      roof.position.y = 0.45;
      body.add(roof);
      const headlight = new THREE.Mesh(lightGeo, lightMat);
      const taillight = new THREE.Mesh(lightGeo, tailMat);
      headlight.position.set(1.39, 0.06, 0);
      taillight.position.set(-1.39, 0.06, 0);
      body.add(headlight, taillight);
      body.position.y = 1.78;
      const lane = (rand() < 0.5 ? -1 : 1) * 2.5;
      const speed = 7 + rand() * 10;
      if (axis === "x") {
        body.position.set(-250 + rand() * 500, 1.78, road + lane);
        body.rotation.y = dir > 0 ? 0 : Math.PI;
      } else {
        body.position.set(road + lane, 1.78, -250 + rand() * 500);
        body.rotation.y = dir > 0 ? -Math.PI / 2 : Math.PI / 2;
      }
      this.scene.add(body);
      this.cars.push({ mesh: body, axis, dir, speed, road, lane });
    }
  }

  _createAtmosphere() {
    const cloudTex = makeCloudTexture();
    const rand = rng(5882);
    for (let i = 0; i < 17; i++) {
      const mat = new THREE.SpriteMaterial({
        map: cloudTex,
        color: i % 3 === 0 ? 0x5c3b4d : i % 3 === 1 ? 0x423d4f : 0x7a4a3c,
        transparent: true,
        opacity: 0.1 + rand() * 0.13,
        depthWrite: false,
        fog: false,
      });
      const cloud = new THREE.Sprite(mat);
      const angle = rand() * Math.PI * 2;
      const radius = 300 + rand() * 230;
      cloud.position.set(Math.cos(angle) * radius, 55 + rand() * 125, Math.sin(angle) * radius);
      const s = 120 + rand() * 170;
      cloud.scale.set(s, s * (0.24 + rand() * 0.2), 1);
      cloud.material.rotation = (rand() - 0.5) * 0.35;
      this.scene.add(cloud);
      this.clouds.push({ sprite: cloud, drift: 0.16 + rand() * 0.2, angle, radius });
    }

    // drifting embers / ash in the lower city
    const count = this.lowPower ? 260 : 680;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rand() - 0.5) * 430;
      positions[i * 3 + 1] = 2 + rand() * 80;
      positions[i * 3 + 2] = (rand() - 0.5) * 430;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xff8d4d,
      size: 0.42,
      map: makeGlowTexture(),
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    this.embers = new THREE.Points(geo, mat);
    this.scene.add(this.embers);
  }

  _createDistantSkyline() {
    const rand = rng(88734);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x0c1117,
      roughness: 0.93,
      metalness: 0.1,
      emissive: 0x101b26,
      emissiveIntensity: 0.4,
    });
    const geo = new THREE.BoxGeometry(1, 1, 1);
    for (let i = 0; i < (this.lowPower ? 58 : 95); i++) {
      const angle = rand() * Math.PI * 2;
      const radius = 290 + rand() * 280;
      const w = 12 + rand() * 32;
      const h = 22 + rand() * 78;
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(Math.cos(angle) * radius, h / 2, Math.sin(angle) * radius);
      mesh.scale.set(w, h, w * (0.6 + rand() * 0.7));
      mesh.rotation.y = rand() * Math.PI;
      this.scene.add(mesh);
    }

    // outer flood wall / fog line
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x080b0f, roughness: 1 });
    const wall = new THREE.Mesh(new THREE.CylinderGeometry(360, 360, 16, 64, 1, true), wallMat);
    wall.position.y = 8;
    this.scene.add(wall);
  }

  damageBuilding(building, amount = 1) {
    if (!building || building.destroyed) return false;
    building.hp -= amount;
    if (building.hp > 0) {
      building.mesh.material.emissiveIntensity = 0.3;
      return false;
    }
    this._destroyBuilding(building);
    return true;
  }

  _destroyBuilding(building) {
    building.destroyed = true;
    building.mesh.visible = false;
    building.roof.visible = false;
    const rand = rng(Math.floor(building.x * 37 + building.z * 73) + 99);
    const rubbleMat = new THREE.MeshStandardMaterial({ color: 0x171b1f, roughness: 0.98 });
    const rubbleGroup = new THREE.Group();
    rubbleGroup.position.set(building.x, 1.34, building.z);
    for (let i = 0; i < 12; i++) {
      const chunk = new THREE.Mesh(
        new THREE.BoxGeometry(
          1.3 + rand() * Math.max(2, building.width * 0.3),
          0.7 + rand() * 3.5,
          1.3 + rand() * Math.max(2, building.depth * 0.3)
        ),
        rubbleMat
      );
      chunk.position.set((rand() - 0.5) * building.width * 0.7, rand() * 3.2, (rand() - 0.5) * building.depth * 0.7);
      chunk.rotation.set(rand() * 2, rand() * 3, rand() * 2);
      chunk.castShadow = true;
      rubbleGroup.add(chunk);
    }
    this.scene.add(rubbleGroup);
    building.rubble = rubbleGroup;
    if (this.callbacks.onBuildingDestroyed) {
      this.callbacks.onBuildingDestroyed(building);
    }
  }

  getNearbyBuildings(position, radius = 80) {
    const out = [];
    const r2 = radius * radius;
    for (const b of this.buildings) {
      if (b.destroyed) continue;
      const dx = b.x - position.x;
      const dz = b.z - position.z;
      if (dx * dx + dz * dz < r2) out.push(b);
    }
    return out;
  }

  getBuildingAt(x, z, margin = 0) {
    for (const b of this.buildings) {
      if (b.destroyed) continue;
      if (
        Math.abs(x - b.x) < b.width / 2 + margin &&
        Math.abs(z - b.z) < b.depth / 2 + margin
      ) {
        return b;
      }
    }
    return null;
  }

  flash(position, intensity = 5) {
    this.flashLight.position.copy(position);
    this.flashLight.intensity = intensity;
  }

  update(dt, time) {
    this.time = time;

    if (this.beaconMaterial) {
      this.beaconMaterial.opacity = 0.42 + Math.sin(time * 3.2) * 0.32;
      this.beaconMaterial.size = 1.45 + Math.sin(time * 4.5) * 0.25;
    }

    for (const car of this.cars) {
      const p = car.mesh.position;
      if (car.axis === "x") {
        p.x += car.dir * car.speed * dt;
        if (p.x > 255) p.x = -255;
        if (p.x < -255) p.x = 255;
      } else {
        p.z += car.dir * car.speed * dt;
        if (p.z > 255) p.z = -255;
        if (p.z < -255) p.z = 255;
      }
    }

    for (let i = 0; i < this.searchlights.length; i++) {
      const c = this.searchlights[i];
      c.rotation.z = Math.sin(time * 0.15 + i * 2.2) * 0.16;
      c.rotation.x = Math.cos(time * 0.11 + i * 1.3) * 0.19;
    }

    if (this.fires) {
      for (const f of this.fires) {
        const flicker = 0.82 + Math.sin(time * 7.4 + f.phase) * 0.11 + Math.sin(time * 13.1 + f.phase * 2) * 0.07;
        f.sprite.scale.set(f.base * flicker, f.base * 0.82 * flicker, 1);
        f.sprite.material.opacity = 0.56 + flicker * 0.2;
        f.core.scale.set(f.base * 0.34 * flicker, f.base * 0.46 * flicker, 1);
      }
    }

    for (const cloud of this.clouds) {
      cloud.angle += dt * 0.0018 * cloud.drift;
      cloud.sprite.position.x = Math.cos(cloud.angle) * cloud.radius;
      cloud.sprite.position.z = Math.sin(cloud.angle) * cloud.radius;
    }

    if (this.embers) {
      this.embers.rotation.y += dt * 0.006;
      const pos = this.embers.geometry.attributes.position;
      for (let i = 0; i < pos.count; i += 4) {
        let y = pos.getY(i) + dt * (0.5 + (i % 7) * 0.1);
        if (y > 92) y = 3;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;
    }

    if (this.flashLight.intensity > 0) {
      this.flashLight.intensity = Math.max(0, this.flashLight.intensity - dt * 32);
    }
  }
}
