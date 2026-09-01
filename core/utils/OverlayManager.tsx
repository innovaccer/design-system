interface OverlayAddOptions {
  /**
   * Marks this overlay as one that traps keyboard focus within itself (Modal, Sidesheet,
   * FullscreenModal). Used to decide when background siblings (and inactive stacked
   * dialogs) should be hidden from AT (see `syncBackgroundVisibility` in
   * `overlayHelper.ts`), and as the reference point non-trapping overlays are recorded
   * against in `owner` (see `getOwnedOverlays`).
   */
  trapsFocus?: boolean;
}

class OverlayManager {
  overlays: HTMLDivElement[];
  private trapping: WeakSet<HTMLDivElement>;
  // Recorded once, at registration time, for every *non-trapping* overlay (Popover,
  // Dropdown, Select, Menu, Calendar/DatePicker, Tooltip): which trapping overlay was
  // active (topmost) at that moment. This is a direct fact, not something re-derived later
  // by scanning `overlays` — so it can't be thrown off by *other* trapping overlays
  // registering afterwards, in any order, regardless of whether they're marked `trapsFocus`.
  private owner: WeakMap<HTMLDivElement, HTMLDivElement>;

  constructor() {
    this.overlays = [];
    this.trapping = new WeakSet();
    this.owner = new WeakMap();
  }

  add(overlay: HTMLDivElement | null, options?: OverlayAddOptions) {
    if (overlay === null) return;

    const alreadyRegistered = this.overlays.indexOf(overlay) !== -1;

    if (options?.trapsFocus) {
      this.trapping.add(overlay);
    } else if (!alreadyRegistered) {
      const activeTrappingOverlay = this.getActiveTrappingOverlay();
      if (activeTrappingOverlay) this.owner.set(overlay, activeTrappingOverlay);
    }

    if (alreadyRegistered) {
      return this.overlays.indexOf(overlay);
    }

    const overlayIdx = this.overlays.length;
    this.overlays.push(overlay);

    return overlayIdx;
  }

  remove(overlay: HTMLDivElement | null) {
    if (overlay === null) return;

    this.trapping.delete(overlay);
    this.owner.delete(overlay);

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
   * Currently-registered overlays that trap focus (Modal, Sidesheet, FullscreenModal), in
   * open order — the last entry is the topmost/active one. Used to hide inactive stacked
   * dialogs from AT (see `syncBackgroundVisibility` in `overlayHelper.ts`) and to know when
   * the last one has closed.
   */
  getTrappingOverlays(): HTMLDivElement[] {
    return this.overlays.filter((overlay) => this.trapping.has(overlay));
  }

  /**
   * The currently topmost/active trapping overlay, if any.
   */
  getActiveTrappingOverlay(): HTMLDivElement | null {
    const trapping = this.getTrappingOverlays();
    return trapping.length ? trapping[trapping.length - 1] : null;
  }

  /**
   * Non-trapping overlays (Popover/Calendar/Dropdown/Select/Menu/Tooltip) owned by
   * `owner` — i.e. opened while `owner` was the active trapping overlay. Used to widen a
   * focus trap's Tab boundary, and to know which background overlays should stay visible
   * while `owner` is the active dialog.
   */
  getOwnedOverlays(owner: HTMLDivElement | null): HTMLDivElement[] {
    if (owner === null) return [];
    return this.overlays.filter((candidate) => this.owner.get(candidate) === owner);
  }
}

const instance = new OverlayManager();
Object.freeze(instance);

export default instance;
