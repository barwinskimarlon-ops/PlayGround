export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.muted = false;
    this.started = false;
    this.droneNodes = [];
    this.lastCall = 0;
    this.ambientTimer = null;
  }

  start() {
    if (this.started) {
      if (this.ctx?.state === 'suspended') this.ctx.resume();
      return;
    }
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.55;
    this.master.connect(this.ctx.destination);
    this.started = true;
    this.buildAmbience();
    this.scheduleCall();
  }

  buildAmbience() {
    const ctx = this.ctx;
    const now = ctx.currentTime;

    const low = ctx.createGain();
    low.gain.value = 0.038;
    low.connect(this.master);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 180;
    filter.Q.value = 1.4;
    filter.connect(low);

    [43.65, 55, 65.41].forEach((frequency, index) => {
      const osc = ctx.createOscillator();
      osc.type = index === 2 ? 'sine' : 'triangle';
      osc.frequency.value = frequency;
      osc.detune.value = index === 1 ? 7 : -5;
      const gain = ctx.createGain();
      gain.gain.value = index === 2 ? 0.22 : 0.4;
      osc.connect(gain);
      gain.connect(filter);
      osc.start(now);
      this.droneNodes.push(osc);
    });

    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.055;
    lfoGain.gain.value = 70;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start(now);
    this.droneNodes.push(lfo);

    // Filtered noise: distant current / pressure.
    const length = ctx.sampleRate * 6;
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i += 1) {
      const white = Math.random() * 2 - 1;
      last = last * 0.985 + white * 0.015;
      data[i] = last;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 320;
    noiseFilter.Q.value = 0.45;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.028;
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.master);
    noise.start(now);
    this.noise = noise;

    const currentLfo = ctx.createOscillator();
    const currentGain = ctx.createGain();
    currentLfo.frequency.value = 0.085;
    currentGain.gain.value = 0.014;
    currentLfo.connect(currentGain);
    currentGain.connect(noiseGain.gain);
    currentLfo.start(now);
    this.droneNodes.push(currentLfo);
  }

  scheduleCall() {
    if (!this.started) return;
    const delay = 14000 + Math.random() * 22000;
    this.ambientTimer = window.setTimeout(() => {
      this.creatureCall();
      this.scheduleCall();
    }, delay);
  }

  creatureCall() {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = 'sine';
    const base = 92 + Math.random() * 80;
    osc.frequency.setValueAtTime(base, now);
    osc.frequency.exponentialRampToValueAtTime(base * 1.55, now + 1.2);
    osc.frequency.exponentialRampToValueAtTime(base * 0.62, now + 5.5);
    filter.type = 'lowpass';
    filter.frequency.value = 520;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.035, now + 1.4);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 6);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    osc.start(now);
    osc.stop(now + 6.2);
  }

  tone(frequency, duration, volume = 0.05, type = 'sine', slide = 1) {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);
    if (slide !== 1) osc.frequency.exponentialRampToValueAtTime(frequency * slide, now + duration);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(now);
    osc.stop(now + duration + 0.03);
  }

  ping() {
    this.tone(1280, 1.7, 0.06, 'sine', 0.36);
    window.setTimeout(() => this.tone(860, 2.2, 0.022, 'sine', 0.5), 120);
  }

  scanTick() {
    this.tone(640, 0.08, 0.018, 'square');
  }

  discovered() {
    this.tone(392, 0.5, 0.04, 'sine');
    window.setTimeout(() => this.tone(587.33, 0.7, 0.032, 'sine'), 130);
    window.setTimeout(() => this.tone(783.99, 1.1, 0.025, 'sine'), 280);
  }

  collect() {
    this.tone(1046.5, 0.25, 0.028, 'sine', 1.45);
    window.setTimeout(() => this.tone(1568, 0.4, 0.018, 'sine', 1.1), 80);
  }

  hurt() {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.exponentialRampToValueAtTime(36, now + 0.7);
    gain.gain.setValueAtTime(0.07, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(now);
    osc.stop(now + 0.82);
  }

  toggle() {
    this.muted = !this.muted;
    if (this.master) {
      const target = this.muted ? 0 : 0.55;
      this.master.gain.setTargetAtTime(target, this.ctx.currentTime, 0.08);
    }
    return this.muted;
  }

  suspend() {
    if (this.ctx?.state === 'running') this.ctx.suspend();
  }
}
