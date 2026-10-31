import { clamp } from './utils.js';

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.yawDelta = 0;
    this.pitchDelta = 0;
    this.scanHeld = false;
    this.pulseRequested = false;
    this.pointerLocked = false;
    this.dragging = false;
    this.lastPointer = { x: 0, y: 0 };
    this.touchStick = { x: 0, y: 0, active: false };
    this.touchLook = { active: false, id: null, x: 0, y: 0 };
    this.onFirstInteraction = null;
    this.interacted = false;
    this.boost = false;

    this.bindKeyboard();
    this.bindPointer();
    this.bindTouch();
  }

  bindKeyboard() {
    window.addEventListener('keydown', (event) => {
      const code = event.code;
      if (['Space', 'KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyQ', 'KeyE', 'KeyC', 'ShiftLeft', 'ShiftRight', 'Tab'].includes(code)) {
        event.preventDefault();
      }
      this.keys.add(code);
      if (code === 'KeyQ' && !event.repeat) this.pulseRequested = true;
      if (code === 'KeyE') this.scanHeld = true;
      this.interact();
    });

    window.addEventListener('keyup', (event) => {
      this.keys.delete(event.code);
      if (event.code === 'KeyE') this.scanHeld = false;
    });

    window.addEventListener('blur', () => {
      this.keys.clear();
      this.scanHeld = false;
    });
  }

  bindPointer() {
    this.canvas.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'touch') return;
      this.dragging = true;
      this.lastPointer.x = event.clientX;
      this.lastPointer.y = event.clientY;
      this.interact();
      if (document.pointerLockElement !== this.canvas) {
        this.canvas.requestPointerLock?.();
      }
    });

    window.addEventListener('pointerup', (event) => {
      if (event.pointerType !== 'touch') this.dragging = false;
    });

    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.canvas;
    });

    window.addEventListener('mousemove', (event) => {
      if (this.pointerLocked) {
        this.yawDelta -= event.movementX * 0.00185;
        this.pitchDelta -= event.movementY * 0.00185;
      } else if (this.dragging) {
        this.yawDelta -= (event.clientX - this.lastPointer.x) * 0.0032;
        this.pitchDelta -= (event.clientY - this.lastPointer.y) * 0.0032;
        this.lastPointer.x = event.clientX;
        this.lastPointer.y = event.clientY;
      }
    });
  }

  bindTouch() {
    const stickZone = document.getElementById('stick-zone');
    const knob = document.getElementById('stick-knob');
    const lookZone = document.getElementById('look-zone');

    if (stickZone) {
      const resetStick = () => {
        this.touchStick.active = false;
        this.touchStick.x = 0;
        this.touchStick.y = 0;
        if (knob) knob.style.transform = 'translate(0px, 0px)';
      };

      stickZone.addEventListener('pointerdown', (event) => {
        event.preventDefault();
        this.touchStick.active = true;
        stickZone.setPointerCapture?.(event.pointerId);
        this.updateStick(event, stickZone, knob);
        this.interact();
      });
      stickZone.addEventListener('pointermove', (event) => {
        if (!this.touchStick.active) return;
        event.preventDefault();
        this.updateStick(event, stickZone, knob);
      });
      stickZone.addEventListener('pointerup', resetStick);
      stickZone.addEventListener('pointercancel', resetStick);
    }

    if (lookZone) {
      lookZone.addEventListener('pointerdown', (event) => {
        event.preventDefault();
        this.touchLook.active = true;
        this.touchLook.id = event.pointerId;
        this.touchLook.x = event.clientX;
        this.touchLook.y = event.clientY;
        lookZone.setPointerCapture?.(event.pointerId);
        this.interact();
      });
      lookZone.addEventListener('pointermove', (event) => {
        if (!this.touchLook.active || event.pointerId !== this.touchLook.id) return;
        event.preventDefault();
        this.yawDelta -= (event.clientX - this.touchLook.x) * 0.0052;
        this.pitchDelta -= (event.clientY - this.touchLook.y) * 0.0052;
        this.touchLook.x = event.clientX;
        this.touchLook.y = event.clientY;
      });
      const endLook = () => {
        this.touchLook.active = false;
        this.touchLook.id = null;
      };
      lookZone.addEventListener('pointerup', endLook);
      lookZone.addEventListener('pointercancel', endLook);
    }

    document.querySelectorAll('[data-action]').forEach((button) => {
      const action = button.dataset.action;
      const press = (event) => {
        event.preventDefault();
        this.interact();
        if (action === 'pulse') this.pulseRequested = true;
        if (action === 'scan') this.scanHeld = true;
        if (action === 'up') this.keys.add('Space');
        if (action === 'down') this.keys.add('KeyC');
        button.classList.add('pressed');
      };
      const release = (event) => {
        event.preventDefault();
        if (action === 'scan') this.scanHeld = false;
        if (action === 'up') this.keys.delete('Space');
        if (action === 'down') this.keys.delete('KeyC');
        button.classList.remove('pressed');
      };
      button.addEventListener('pointerdown', press);
      button.addEventListener('pointerup', release);
      button.addEventListener('pointercancel', release);
      button.addEventListener('pointerleave', release);
    });
  }

  updateStick(event, zone, knob) {
    const rect = zone.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    let dx = event.clientX - cx;
    let dy = event.clientY - cy;
    const max = rect.width * 0.34;
    const length = Math.hypot(dx, dy);
    if (length > max) {
      dx = (dx / length) * max;
      dy = (dy / length) * max;
    }
    this.touchStick.x = clamp(dx / max, -1, 1);
    this.touchStick.y = clamp(-dy / max, -1, 1);
    if (knob) knob.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  interact() {
    if (!this.interacted) {
      this.interacted = true;
      this.onFirstInteraction?.();
    }
  }

  consumeLook() {
    const result = { yaw: this.yawDelta, pitch: this.pitchDelta };
    this.yawDelta = 0;
    this.pitchDelta = 0;
    return result;
  }

  consumePulse() {
    const result = this.pulseRequested;
    this.pulseRequested = false;
    return result;
  }

  get forward() {
    return (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0);
  }

  get right() {
    return (this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0);
  }

  get vertical() {
    return (this.keys.has('Space') ? 1 : 0) - (this.keys.has('KeyC') || this.keys.has('ControlLeft') ? 1 : 0);
  }

  get sprinting() {
    return this.keys.has('ShiftLeft') || this.keys.has('ShiftRight');
  }
}
