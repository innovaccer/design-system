interface OverlayAddOptions {
  /**
   * Marks this overlay as one that traps keyboard focus within itself (Modal, Sidesheet).
   * Used to decide when background siblings should be hidden from AT (see
   * `hideBackgroundForOverlay`/`restoreBackgroundIfNoTrappingOverlay` in `overlayHelper.ts`),
   * to detect stacked trapping overlays so the background isn't restored too early, and to
   * widen a trap's own Tab boundary to its nested overlays (see `getNestedOverlays`).
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

  /**
   * Overlays registered after `overlay` (e.g. a Popover/Calendar/Dropdown opened from
   * inside it), stopping before the next entry that itself traps focus — so a separately
   * stacked Modal/Sidesheet (and whatever it opens) isn't absorbed into `overlay`'s scope.
   * Used to widen a focus trap's boundary to cover its own nested overlays.
   */
  getNestedOverlays(overlay: HTMLDivElement | null): HTMLDivElement[] {
    if (overlay === null) return [];

    const idx = this.overlays.indexOf(overlay);
    if (idx === -1) return [];

    const after = this.overlays.slice(idx + 1);
    const nextTrappingIdx = after.findIndex((candidate) => this.trapping.has(candidate));

    return nextTrappingIdx === -1 ? after : after.slice(0, nextTrappingIdx);
  }
}

const instance = new OverlayManager();
Object.freeze(instance);

export default instance;
