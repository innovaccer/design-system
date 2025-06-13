declare class OverlayManager {
    overlays: HTMLDivElement[];
    constructor();
    add(overlay: HTMLDivElement | null): number | undefined;
    remove(overlay: HTMLDivElement | null): void;
    isTopOverlay(overlay: HTMLDivElement | null): boolean | undefined;
}
declare const instance: OverlayManager;
export default instance;
