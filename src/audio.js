export class OceanAudio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.enabled = true;
    this.started = false;
    this.shipGain = null;
    this.underwaterGain = null;
    this.drone = [];
    this.noiseBuffer = null;
    this.lastWhale = 0;
    this.lastPing = 0;
  }

  init() {
    if (this.started) {
      if (this.ctx?.state === 'suspended') this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.started = true;
    this.master = this.ctx.createGain();
    this.master.gain.value = this.enabled ? 0.7 : 0;
    const compressor = this.ctx.createDynamicsCompressor();
    compressor.threshold.value = -18;
    compressor.knee.value = 18;
    compressor.ratio.value = 5;
    compressor.attack.value = 0.01;
    compressor.release.value = 0.35;
    this.master.connect(compressor).connect(this.ctx.destination);

    this.noiseBuffer = this.createNoise(4);

    // Deep-water pressure and current.
    this.underwaterGain = this.ctx.createGain();
    this.underwaterGain.gain.value = 0.14;
    this.underwaterGain.connect(this.master);
    const low = this.loopNoise(0.12);
    const lowFilter = this.ctx.createBiquadFilter();
    lowFilter.type = 'lowpass';
    lowFilter.frequency.value = 210;
    lowFilter.Q.value = 0.4;
    low.connect(lowFilter).connect(this.underwaterGain);

    const current = this.loopNoise(0.06);
    const currentFilter = this.ctx.createBiquadFilter();
    currentFilter.type = 'bandpass';
    currentFilter.frequency.value = 620;
    currentFilter.Q.value = 0.35;
    current.connect(currentFilter).connect(this.underwaterGain);

    // A pair of clean sub drones.
    for (const [freq, gainValue] of [[43, 0.035], [64.5, 0.018], [86, 0.009]]) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.value = gainValue;
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.value = 0.045 + Math.random() * 0.03;
      lfoGain.gain.value = gainValue * 0.38;
      lfo.connect(lfoGain).connect(gain.gain);
      osc.connect(gain).connect(this.master);
      osc.start();
      lfo.start();
      this.drone.push(osc, lfo);
    }

    // Engine rumble for nearby ships.
    this.shipGain = this.ctx.createGain();
    this.shipGain.gain.value = 0;
    this.shipGain.connect(this.master);
    const engine = this.ctx.createOscillator();
    engine.type = 'sawtooth';
    engine.frequency.value = 36;
    const engineFilter = this.ctx.createBiquadFilter();
    engineFilter.type = 'lowpass';
    engineFilter.frequency.value = 105;
    const engineAmp = this.ctx.createGain();
    engineAmp.gain.value = 0.2;
    engine.connect(engineFilter).connect(engineAmp).connect(this.shipGain);
    engine.start();
    this.engineOsc = engine;

    const hum = this.ctx.createOscillator();
    hum.type = 'sine';
    hum.frequency.value = 72;
    const humGain = this.ctx.createGain();
    humGain.gain.value = 0.06;
    hum.connect(humGain).connect(this.shipGain);
    hum.start();
  }

  createNoise(seconds) {
    const len = Math.floor(this.ctx.sampleRate * seconds);
    const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.2 + white * 0.5;
    }
    return buffer;
  }

  loopNoise(rate) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    src.playbackRate.value = rate;
    src.start();
    return src;
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (this.master) {
      this.master.gain.cancelScheduledValues(this.ctx.currentTime);
      this.master.gain.setTargetAtTime(enabled ? 0.7 : 0, this.ctx.currentTime, 0.08);
    }
  }

  setUnderwater(amount) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.underwaterGain.gain.setTargetAtTime(0.12 + 0.08 * amount, t, 0.35);
    this.shipGain.gain.setTargetAtTime(0.04 + 0.32 * (1 - amount), t, 0.2);
  }

  setShipProximity(value) {
    if (!this.ctx || !this.shipGain) return;
    this.shipGain.gain.setTargetAtTime(0.02 + Math.pow(value, 1.6) * 0.16, this.ctx.currentTime, 0.2);
    if (this.engineOsc) this.engineOsc.frequency.setTargetAtTime(34 + value * 10, this.ctx.currentTime, 0.3);
  }

  tone(freq, dur, type = 'sine', vol = 0.1, when = 0, slideTo = null) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + when;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(vol, t + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain).connect(this.master);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  noiseBurst(dur, filterType, freq, vol, q = 1, when = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + when;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.playbackRate.value = 1.4;
    const filter = this.ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.value = freq;
    filter.Q.value = q;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(vol, t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filter).connect(gain).connect(this.master);
    src.start(t, Math.random() * 2);
    src.stop(t + dur + 0.05);
  }

  bite() {
    this.noiseBurst(0.18, 'bandpass', 760, 0.5, 0.7);
    this.tone(66, 0.26, 'sine', 0.27, 0.01, 38);
    this.tone(145, 0.08, 'triangle', 0.1, 0.01, 90);
  }

  crunch() {
    this.noiseBurst(0.1, 'bandpass', 1300, 0.26, 1.4, 0.02);
    this.noiseBurst(0.16, 'lowpass', 420, 0.24, 0.5, 0.06);
    this.tone(88, 0.12, 'triangle', 0.14, 0.02, 61);
  }

  boost() {
    this.noiseBurst(0.55, 'bandpass', 420, 0.19, 0.5);
    this.noiseBurst(0.8, 'lowpass', 220, 0.16, 0.4, 0.04);
  }

  splash() {
    this.noiseBurst(0.75, 'highpass', 430, 0.42, 0.7);
    this.noiseBurst(0.5, 'bandpass', 1100, 0.28, 0.5, 0.02);
    this.tone(58, 0.55, 'sine', 0.18, 0, 34);
  }

  seal() {
    this.tone(510, 0.15, 'triangle', 0.11, 0, 690);
    this.tone(770, 0.11, 'sine', 0.07, 0.08, 560);
  }

  sonar() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (now - this.lastPing < 8) return;
    this.lastPing = now;
    this.tone(980, 1.4, 'sine', 0.055, 0, 720);
    this.tone(1470, 0.9, 'sine', 0.018, 0.03, 1220);
  }

  whale() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (now - this.lastWhale < 24) return;
    this.lastWhale = now;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 380;
    osc.type = 'sine';
    const t = now + 0.1;
    osc.frequency.setValueAtTime(92, t);
    osc.frequency.linearRampToValueAtTime(142, t + 1.4);
    osc.frequency.linearRampToValueAtTime(106, t + 3.2);
    osc.frequency.linearRampToValueAtTime(72, t + 5.6);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.045, t + 1.2);
    gain.gain.linearRampToValueAtTime(0.0001, t + 6);
    osc.connect(filter).connect(gain).connect(this.master);
    osc.start(t);
    osc.stop(t + 6.2);
  }

  event(type) {
    if (!this.ctx) return;
    if (type === 'seal') {
      this.tone(220, 0.5, 'sine', 0.06, 0, 440);
      this.tone(440, 0.35, 'sine', 0.045, 0.08, 660);
    } else if (type === 'danger') {
      this.tone(140, 0.22, 'square', 0.035);
      this.tone(140, 0.22, 'square', 0.035, 0.25);
    } else if (type === 'complete') {
      [261, 329, 392, 523].forEach((f, i) => this.tone(f, 0.8, 'sine', 0.055, i * 0.12));
    } else if (type === 'ui') {
      this.tone(680, 0.06, 'sine', 0.035, 0, 540);
    }
  }
}
