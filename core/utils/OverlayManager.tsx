class OverlayManager {
  overlays: HTMLDivElement[];

  constructor() {
    this.overlays = [];
  }

  add(overlay: HTMLDivElement | null) {
    if (overlay === null) return;

    let overlayIdx = this.overlays.indexOf(overlay);

    if (overlayIdx !== -1) {
      return overlayIdx;
    }

    overlayIdx = this.overlays.length;
    this.overlays.push(overlay);

    return overlayIdx;
  }

  remove(overlay: HTMLDivElement | null) {
    if (overlay === null) return;

    const overlayIdx = this.overlays.indexOf(overlay);

    if (overlayIdx === -1) {
      return;
    }

    this.overlays.splice(overlayIdx, 1);
  }

  isTopOverlay(overlay: HTMLDivElement | null) {
    if (overlay === null) return;

    return !!this.overlays.length && this.overlays[this.overlays.length - 1] === overlay;
  }

  /**
   * Overlays registered after `overlay` in the stack — i.e. opened while `overlay` was
   * already displayed (e.g. a Dropdown/DatePicker popper opened from within a Modal).
   * Used to extend a dialog's focus trap to portaled content that visually belongs to it
   * but isn't a DOM descendant (Poppers render into `document.body`, not the dialog).
   */
  getOverlaysAfter(overlay: HTMLDivElement | null): HTMLDivElement[] {
    if (overlay === null) return [];

    const idx = this.overlays.indexOf(overlay);
    if (idx === -1) return [];

    return this.overlays.slice(idx + 1);
  }
}

const instance = new OverlayManager();
Object.freeze(instance);

export default instance;
