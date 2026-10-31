export class SoundEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.engine = null;
    this.muted = false;
    this.started = false;
    this.lastShot = 0;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === "suspended") this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.5;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 18;
    comp.ratio.value = 5;
    comp.attack.value = 0.003;
    comp.release.value = 0.22;
    this.master.connect(comp);
    comp.connect(this.ctx.destination);

    this.noiseBuffer = this._makeNoise(2.2);
    this._startEngine();
    this._startAmbience();
    this.started = true;
  }

  _makeNoise(seconds) {
    const len = Math.floor(this.ctx.sampleRate * seconds);
    const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  _noiseSource(duration = 0.2) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const offset = Math.random() * Math.max(0, this.noiseBuffer.duration - duration - 0.05);
    src.start(this.ctx.currentTime, offset, duration + 0.03);
    return src;
  }

  _startEngine() {
    const ctx = this.ctx;
    const engineGain = ctx.createGain();
    engineGain.gain.value = 0.016;
    engineGain.connect(this.master);

    const low = ctx.createOscillator();
    low.type = "sawtooth";
    low.frequency.value = 48;
    const lowFilter = ctx.createBiquadFilter();
    lowFilter.type = "lowpass";
    lowFilter.frequency.value = 240;
    lowFilter.Q.value = 4;
    low.connect(lowFilter);
    lowFilter.connect(engineGain);

    const high = ctx.createOscillator();
    high.type = "triangle";
    high.frequency.value = 96;
    const highGain = ctx.createGain();
    highGain.gain.value = 0.26;
    high.connect(highGain);
    highGain.connect(engineGain);

    const lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 11.2;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.0065;
    lfo.connect(lfoGain);
    lfoGain.connect(engineGain.gain);

    const turbine = ctx.createOscillator();
    turbine.type = "sine";
    turbine.frequency.value = 630;
    const turbineGain = ctx.createGain();
    turbineGain.gain.value = 0.0032;
    turbine.connect(turbineGain);
    turbineGain.connect(this.master);

    const windSrc = this._noiseSource(2);
    const windFilter = ctx.createBiquadFilter();
    windFilter.type = "lowpass";
    windFilter.frequency.value = 480;
    windFilter.Q.value = 0.3;
    const windGain = ctx.createGain();
    windGain.gain.value = 0.018;
    windSrc.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(this.master);

    low.start();
    high.start();
    lfo.start();
    turbine.start();

    this.engine = {
      gain: engineGain,
      low,
      high,
      turbine,
      wind: windGain,
      windFilter,
    };
  }

  _startAmbience() {
    const ctx = this.ctx;
    const pad = ctx.createGain();
    pad.gain.value = 0.011;
    pad.connect(this.master);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 460;
    filter.connect(pad);
    const frequencies = [55, 82.41, 110, 164.81];
    for (let i = 0; i < frequencies.length; i++) {
      const osc = ctx.createOscillator();
      osc.type = i % 2 ? "triangle" : "sine";
      osc.frequency.value = frequencies[i];
      osc.detune.value = (i - 1.5) * 3;
      const g = ctx.createGain();
      g.gain.value = i === 0 ? 0.65 : 0.18;
      osc.connect(g);
      g.connect(filter);
      osc.start();
    }
    this.ambience = { pad, filter };
  }

  updateEngine(speed, boost, active = true) {
    if (!this.engine || !this.ctx) return;
    const t = this.ctx.currentTime;
    const target = active ? 1 : 0;
    const freq = 48 + speed * 0.9 + (boost ? 16 : 0);
    this.engine.low.frequency.setTargetAtTime(freq, t, 0.08);
    this.engine.high.frequency.setTargetAtTime(freq * 2.02, t, 0.08);
    this.engine.turbine.frequency.setTargetAtTime(560 + speed * 6 + (boost ? 160 : 0), t, 0.1);
    this.engine.gain.gain.setTargetAtTime((0.012 + speed * 0.00014) * target, t, 0.08);
    this.engine.wind.gain.setTargetAtTime((0.013 + speed * 0.00024 + (boost ? 0.017 : 0)) * target, t, 0.08);
    this.engine.windFilter.frequency.setTargetAtTime(330 + speed * 8 + (boost ? 420 : 0), t, 0.1);
  }

  setMuted(muted) {
    this.muted = muted;
    if (!this.master || !this.ctx) return;
    this.master.gain.setTargetAtTime(muted ? 0 : 0.5, this.ctx.currentTime, 0.06);
  }

  toggleMute() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  gun() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    if (t - this.lastShot < 0.018) return;
    this.lastShot = t;

    const src = this._noiseSource(0.08);
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(950 + Math.random() * 500, t);
    filter.Q.value = 0.7;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.17, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.075);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);

    const thump = this.ctx.createOscillator();
    thump.type = "square";
    thump.frequency.setValueAtTime(88, t);
    thump.frequency.exponentialRampToValueAtTime(32, t + 0.06);
    const tg = this.ctx.createGain();
    tg.gain.setValueAtTime(0.075, t);
    tg.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
    thump.connect(tg);
    tg.connect(this.master);
    thump.start(t);
    thump.stop(t + 0.08);
  }

  overheat() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = "square";
    osc.frequency.setValueAtTime(230, t);
    osc.frequency.setValueAtTime(170, t + 0.07);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.04, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
    osc.connect(g);
    g.connect(this.master);
    osc.start(t);
    osc.stop(t + 0.26);
  }

  hit(crit = false) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(crit ? 1600 : 1150, t);
    osc.frequency.exponentialRampToValueAtTime(crit ? 2400 : 1650, t + 0.04);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(crit ? 0.065 : 0.033, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
    osc.connect(g);
    g.connect(this.master);
    osc.start(t);
    osc.stop(t + 0.09);
  }

  missile() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const src = this._noiseSource(0.65);
    const f = this.ctx.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.setValueAtTime(280, t);
    f.frequency.exponentialRampToValueAtTime(2200, t + 0.5);
    f.Q.value = 0.8;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.18, t + 0.06);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.62);
    src.connect(f);
    f.connect(g);
    g.connect(this.master);

    const osc = this.ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(150, t);
    osc.frequency.exponentialRampToValueAtTime(60, t + 0.4);
    const og = this.ctx.createGain();
    og.gain.setValueAtTime(0.045, t);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
    osc.connect(og);
    og.connect(this.master);
    osc.start(t);
    osc.stop(t + 0.42);
  }

  explosion(size = 1) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const src = this._noiseSource(1.2);
    const f = this.ctx.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.setValueAtTime(1900 * size, t);
    f.frequency.exponentialRampToValueAtTime(100, t + 0.8);
    f.Q.value = 0.6;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.31 * Math.min(1.3, size), t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.05);
    src.connect(f);
    f.connect(g);
    g.connect(this.master);

    const sub = this.ctx.createOscillator();
    sub.type = "sine";
    sub.frequency.setValueAtTime(75 * Math.max(0.7, size), t);
    sub.frequency.exponentialRampToValueAtTime(26, t + 0.75);
    const sg = this.ctx.createGain();
    sg.gain.setValueAtTime(0.23 * Math.min(1.4, size), t);
    sg.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    sub.connect(sg);
    sg.connect(this.master);
    sub.start(t);
    sub.stop(t + 0.92);
  }

  enemyShot() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(920, t);
    osc.frequency.exponentialRampToValueAtTime(260, t + 0.22);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.034, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.24);
    osc.connect(g);
    g.connect(this.master);
    osc.start(t);
    osc.stop(t + 0.25);
  }

  playerHit() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const src = this._noiseSource(0.3);
    const f = this.ctx.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.setValueAtTime(500, t);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.22, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
    src.connect(f);
    f.connect(g);
    g.connect(this.master);

    const beep = this.ctx.createOscillator();
    beep.type = "square";
    beep.frequency.setValueAtTime(320, t);
    beep.frequency.setValueAtTime(250, t + 0.1);
    const bg = this.ctx.createGain();
    bg.gain.setValueAtTime(0.04, t);
    bg.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    beep.connect(bg);
    bg.connect(this.master);
    beep.start(t);
    beep.stop(t + 0.31);
  }

  roar(big = false) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const src = this._noiseSource(1.6);
    const f = this.ctx.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.setValueAtTime(420, t);
    f.frequency.exponentialRampToValueAtTime(160, t + 1.2);
    f.Q.value = 2;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(big ? 0.18 : 0.1, t + 0.18);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.35);
    src.connect(f);
    f.connect(g);
    g.connect(this.master);

    const osc = this.ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(big ? 68 : 96, t);
    osc.frequency.exponentialRampToValueAtTime(big ? 32 : 48, t + 1.05);
    const og = this.ctx.createGain();
    og.gain.setValueAtTime(0.0001, t);
    og.gain.exponentialRampToValueAtTime(0.07, t + 0.2);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
    osc.connect(og);
    og.connect(this.master);
    osc.start(t);
    osc.stop(t + 1.35);
  }

  alarm() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    for (let i = 0; i < 2; i++) {
      const osc = this.ctx.createOscillator();
      osc.type = "square";
      osc.frequency.value = 660;
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.0001, t + i * 0.17);
      g.gain.exponentialRampToValueAtTime(0.035, t + i * 0.17 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.17 + 0.12);
      osc.connect(g);
      g.connect(this.master);
      osc.start(t + i * 0.17);
      osc.stop(t + i * 0.17 + 0.13);
    }
  }

  upgrade() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const freqs = [392, 523.25, 659.25, 783.99];
    freqs.forEach((fr, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = fr;
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.0001, t + i * 0.065);
      g.gain.exponentialRampToValueAtTime(0.035, t + i * 0.065 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.065 + 0.35);
      osc.connect(g);
      g.connect(this.master);
      osc.start(t + i * 0.065);
      osc.stop(t + i * 0.065 + 0.36);
    });
  }

  uiClick() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = "square";
    osc.frequency.setValueAtTime(720, t);
    osc.frequency.exponentialRampToValueAtTime(980, t + 0.04);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.018, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);
    osc.connect(g);
    g.connect(this.master);
    osc.start(t);
    osc.stop(t + 0.07);
  }
}
