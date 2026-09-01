interface OverlayAddOptions {
  /**
   * Marks this overlay as one that traps keyboard focus within itself (Modal, Sidesheet).
   * Used to decide when background siblings should be hidden from AT/keyboard (see
   * `hideBackgroundForOverlay`/`restoreBackgroundIfNoTrappingOverlay` in `overlayHelper.ts`)
   * and to detect stacked trapping overlays so the background isn't restored too early.
   */
  trapsFocus?: boolean;
}

class OverlayManager {
  overlays: HTMLDivElement[];
  private trapping: WeakSet<HTMLDivElement>;

  constructor() {
    this.overlays = [];
    this.trapping = new WeakSet();
  }

  add(overlay: HTMLDivElement | null, options?: OverlayAddOptions) {
    if (overlay === null) return;

    if (options?.trapsFocus) this.trapping.add(overlay);

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

    this.trapping.delete(overlay);

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

  hasTrappingOverlay(): boolean {
    return this.overlays.some((overlay) => this.trapping.has(overlay));
  }
}

const instance = new OverlayManager();
Object.freeze(instance);

export default instance;
