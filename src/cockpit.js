import * as THREE from "three";

function screenMaterial(canvas, texture) {
  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: false,
    toneMapped: false,
  });
  return mat;
}

export function createCockpit(camera, scene) {
  const group = new THREE.Group();
  group.visible = false;
  camera.add(group);
  scene.add(camera);

  const dark = new THREE.MeshBasicMaterial({ color: 0x0b0f13 });
  const mid = new THREE.MeshBasicMaterial({ color: 0x151c23 });
  const edge = new THREE.MeshBasicMaterial({ color: 0x35414c });
  const orange = new THREE.MeshBasicMaterial({ color: 0xff5a2d });
  const cyan = new THREE.MeshBasicMaterial({ color: 0x5ee7ff });
  const dimCyan = new THREE.MeshBasicMaterial({ color: 0x1d6f7e });

  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, rz);
    group.add(m);
    return m;
  };

  // lower dash
  const dash = add(new THREE.BoxGeometry(1.42, 0.24, 0.46), dark, 0, -0.39, -0.56, 0.16);
  const dashTop = add(new THREE.BoxGeometry(1.32, 0.025, 0.42), mid, 0, -0.288, -0.548, 0.16);
  const dashEdge = add(new THREE.BoxGeometry(1.35, 0.018, 0.02), edge, 0, -0.268, -0.768, 0.16);
  add(new THREE.BoxGeometry(0.25, 0.028, 0.02), orange, 0, -0.265, -0.79, 0.16);

  // side console rails: pushed to the canopy edges so the forward view stays clear
  for (const side of [-1, 1]) {
    add(new THREE.BoxGeometry(0.05, 0.44, 0.22), dark, side * 0.775, -0.23, -0.5, 0.14, side * 0.2);
    add(new THREE.BoxGeometry(0.01, 0.3, 0.01), edge, side * 0.74, -0.18, -0.63, 0.14);
    add(new THREE.BoxGeometry(0.014, 0.09, 0.014), orange, side * 0.74, -0.15, -0.64, 0.14);
    add(new THREE.CylinderGeometry(0.016, 0.016, 0.3, 5), mid, side * 0.55, -0.28, -0.38, 0.22, 0, side * 0.24);
    add(new THREE.SphereGeometry(0.041, 7, 5), dark, side * 0.5, -0.17, -0.42);
  }

  // canopy pillars
  for (const side of [-1, 1]) {
    const pillar = add(
      new THREE.BoxGeometry(0.032, 0.83, 0.065),
      dark,
      side * 0.7,
      -0.02,
      -0.54,
      -0.05,
      side * -0.08,
      side * 0.09
    );
    add(new THREE.BoxGeometry(0.011, 0.78, 0.011), edge, side * 0.686, -0.02, -0.577, -0.05, side * -0.08, side * 0.09);
  }
  add(new THREE.BoxGeometry(1.28, 0.04, 0.05), dark, 0, 0.35, -0.57);
  add(new THREE.BoxGeometry(0.95, 0.012, 0.012), edge, 0, 0.329, -0.598);

  // guns / nose housing
  for (const side of [-1, 1]) {
    add(new THREE.CylinderGeometry(0.018, 0.024, 0.46, 6), mid, side * 0.27, -0.44, -0.92, Math.PI / 2);
    add(new THREE.CylinderGeometry(0.01, 0.014, 0.08, 5), edge, side * 0.27, -0.44, -1.18, Math.PI / 2);
  }

  // bolts / accent lights
  const boltGeo = new THREE.CylinderGeometry(0.006, 0.006, 0.004, 5);
  for (let i = 0; i < 12; i++) {
    add(boltGeo, edge, -0.55 + (i % 6) * 0.22, -0.255, -0.797, Math.PI / 2);
  }
  const ledGeo = new THREE.SphereGeometry(0.008, 4, 3);
  add(ledGeo, orange, 0.36, -0.27, -0.78);
  add(ledGeo, cyan, 0.39, -0.27, -0.78);
  add(ledGeo, dimCyan, 0.42, -0.27, -0.78);

  // instrument displays
  const displays = [];
  for (let i = 0; i < 2; i++) {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#040b0d";
    ctx.fillRect(0, 0, 256, 128);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    const mat = screenMaterial(canvas, tex);
    const x = i === 0 ? -0.32 : 0.32;
    const bezel = add(new THREE.BoxGeometry(0.32, 0.176, 0.01), edge, x, -0.285, -0.755, 0.16);
    const screen = add(new THREE.PlaneGeometry(0.285, 0.142), mat, x, -0.285, -0.747, 0.16);
    screen.renderOrder = 5;
    const glow = add(new THREE.PlaneGeometry(0.285, 0.142), new THREE.MeshBasicMaterial({
      color: i === 0 ? 0x5ee7ff : 0xff7d42,
      transparent: true,
      opacity: 0.035,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }), x, -0.285, -0.744, 0.16);
    displays.push({ canvas, ctx, tex, screen, glow, side: i });
  }

  // center compass strip bezel
  const compass = add(new THREE.BoxGeometry(0.31, 0.05, 0.012), mid, 0, -0.245, -0.78, 0.16);
  add(new THREE.BoxGeometry(0.25, 0.008, 0.006), dimCyan, 0, -0.245, -0.788, 0.16);

  let drawTimer = 0;
  let bobT = 0;

  function drawDisplays(data) {
    const { speed, altitude, heat, overheat, missiles, target, hull } = data;
    for (const d of displays) {
      const { ctx, canvas } = d;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#031014";
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(94,231,255,0.14)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 16) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 16) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.font = "10px monospace";
      ctx.fillStyle = "rgba(94,231,255,0.68)";
      ctx.fillText("AH-79 // SYS", 10, 16);

      if (d.side === 0) {
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.font = "9px monospace";
        ctx.fillText("AIR DATA", 10, 34);
        ctx.fillStyle = "#9df2ff";
        ctx.font = "30px monospace";
        ctx.fillText(String(Math.round(speed)).padStart(3, "0"), 10, 67);
        ctx.font = "9px monospace";
        ctx.fillStyle = "rgba(94,231,255,0.7)";
        ctx.fillText("KTS", 78, 66);
        ctx.fillStyle = "#ffce9a";
        ctx.font = "20px monospace";
        ctx.fillText(String(Math.round(altitude)).padStart(3, "0"), 132, 67);
        ctx.fillStyle = "rgba(255,206,154,0.65)";
        ctx.font = "8px monospace";
        ctx.fillText("ALT M", 182, 66);
        ctx.strokeStyle = "rgba(94,231,255,0.32)";
        ctx.strokeRect(10, 79, w - 20, 7);
        ctx.fillStyle = hull > 50 ? "#5ee7ff" : hull > 25 ? "#ff8a45" : "#ff304c";
        ctx.fillRect(10, 79, (w - 20) * (hull / 100), 7);
        ctx.fillStyle = "rgba(255,255,255,0.38)";
        ctx.font = "8px monospace";
        ctx.fillText("HULL INTEGRITY", 10, 102);
      } else {
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.font = "9px monospace";
        ctx.fillText("FIRE CONTROL", 10, 34);
        ctx.fillStyle = overheat ? "#ff304c" : "#ffbd87";
        ctx.font = "12px monospace";
        ctx.fillText(overheat ? "OVERHEAT" : "VULCAN RDY", 10, 54);
        ctx.fillStyle = "rgba(255,255,255,0.32)";
        ctx.font = "8px monospace";
        ctx.fillText("HEAT", 10, 73);
        ctx.fillStyle = overheat ? "#ff304c" : heat > 0.65 ? "#ff8a45" : "#5ee7ff";
        ctx.fillRect(10, 79, (w - 20) * Math.min(1, heat), 7);
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.font = "9px monospace";
        ctx.fillText(`MSL ${String(missiles).padStart(2, "0")}`, 10, 106);
        ctx.fillStyle = target ? "#ff8a45" : "rgba(255,255,255,0.3)";
        ctx.font = "8px monospace";
        ctx.fillText(target ? "THREAT LOCKED" : "NO THREAT LOCK", 94, 106);
      }
      ctx.strokeStyle = "rgba(94,231,255,0.22)";
      ctx.strokeRect(1, 1, w - 2, h - 2);
      d.tex.needsUpdate = true;
    }
  }

  function update(dt, data) {
    bobT += dt;
    group.position.x = Math.sin(bobT * 0.9) * 0.0016;
    group.position.y = Math.sin(bobT * 1.4) * 0.0012;
    drawTimer -= dt;
    if (drawTimer <= 0) {
      drawTimer = 0.08;
      drawDisplays(data);
    }
    const pulse = 0.5 + Math.sin(bobT * 4.2) * 0.5;
    displays[0].glow.material.opacity = 0.025 + pulse * 0.02;
    displays[1].glow.material.opacity = 0.025 + (1 - pulse) * 0.02;
  }

  return {
    group,
    update,
    show() {
      group.visible = true;
    },
    hide() {
      group.visible = false;
    },
  };
}
