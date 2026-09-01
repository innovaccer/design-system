import OverlayManager from '@/utils/OverlayManager';
import {
  handleFocusTrapKeyDown,
  revealOverlayFromHiddenBackground,
  syncBackgroundVisibility,
} from '@/utils/overlayHelper';

describe('syncBackgroundVisibility', () => {
  it('hides a body-level node added after the first trapping overlay opened, once synced again', () => {
    const overlayA = document.createElement('div');
    document.body.appendChild(overlayA);
    OverlayManager.add(overlayA, { trapsFocus: true });
    syncBackgroundVisibility();

    // A new body-level node mounts later (e.g. a toast portal) while A is still open — the
    // first sync's one-shot sweep wouldn't have known about it.
    const lateNode = document.createElement('div');
    document.body.appendChild(lateNode);
    expect(lateNode).not.toHaveAttribute('aria-hidden');

    // A second trapping overlay opens, triggering another sync call.
    const overlayB = document.createElement('div');
    document.body.appendChild(overlayB);
    OverlayManager.add(overlayB, { trapsFocus: true });
    syncBackgroundVisibility();

    expect(lateNode).toHaveAttribute('aria-hidden', 'true');

    OverlayManager.remove(overlayB);
    OverlayManager.remove(overlayA);
    syncBackgroundVisibility();
    overlayA.remove();
    overlayB.remove();
    lateNode.remove();
  });
});

describe('revealOverlayFromHiddenBackground', () => {
  it('does not reveal a large container that merely contains the overlay — only an exact body-child match', () => {
    const trappingOverlay = document.createElement('div');
    document.body.appendChild(trappingOverlay);
    OverlayManager.add(trappingOverlay, { trapsFocus: true });

    // An inline (appendToBody={false}) overlay nested inside a larger body-level container
    // (e.g. the app's own root), not yet registered — simulates PopperWrapper's registration
    // race (a zero-delay timer) losing to the trapping overlay's own mount.
    const appRoot = document.createElement('div');
    const inlineOverlay = document.createElement('div');
    appRoot.appendChild(inlineOverlay);
    document.body.appendChild(appRoot);

    syncBackgroundVisibility();
    expect(appRoot).toHaveAttribute('aria-hidden', 'true');

    // Registration now completes — reveal is attempted for the overlay's own element, which
    // is nested inside appRoot rather than being a body child itself.
    OverlayManager.add(inlineOverlay);
    revealOverlayFromHiddenBackground(inlineOverlay);

    // appRoot (and everything else inside it) must stay hidden.
    expect(appRoot).toHaveAttribute('aria-hidden', 'true');

    OverlayManager.remove(inlineOverlay);
    OverlayManager.remove(trappingOverlay);
    syncBackgroundVisibility();
    trappingOverlay.remove();
    appRoot.remove();
  });

  it('reveals a genuinely portaled overlay — its own dedicated body child', () => {
    const trappingOverlay = document.createElement('div');
    document.body.appendChild(trappingOverlay);
    OverlayManager.add(trappingOverlay, { trapsFocus: true });

    const portaledOverlay = document.createElement('div');
    document.body.appendChild(portaledOverlay);

    syncBackgroundVisibility();
    expect(portaledOverlay).toHaveAttribute('aria-hidden', 'true');

    OverlayManager.add(portaledOverlay);
    revealOverlayFromHiddenBackground(portaledOverlay);

    expect(portaledOverlay).not.toHaveAttribute('aria-hidden');

    OverlayManager.remove(portaledOverlay);
    OverlayManager.remove(trappingOverlay);
    syncBackgroundVisibility();
    trappingOverlay.remove();
    portaledOverlay.remove();
  });
});

describe('handleFocusTrapKeyDown', () => {
  it('does not duplicate focusables for a nested overlay already inside the container, and still intercepts Tab from the true last control', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    // An inline (appendToBody={false}) popover nested inside the dialog itself.
    const inlineOverlayRoot = document.createElement('div');
    const popoverOption = document.createElement('button');
    popoverOption.textContent = 'Inline popover option';
    inlineOverlayRoot.appendChild(popoverOption);
    container.appendChild(inlineOverlayRoot);

    // A footer control that comes after the inline popover in DOM order — the true last
    // focusable element in the dialog.
    const footerButton = document.createElement('button');
    footerButton.textContent = 'Footer action';
    container.appendChild(footerButton);

    OverlayManager.add(container, { trapsFocus: true });
    OverlayManager.add(inlineOverlayRoot); // registered, but physically inside `container`

    footerButton.focus();
    const event = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true });
    const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

    const handled = handleFocusTrapKeyDown(event, container, null, container);

    expect(handled).toBe(true);
    expect(preventDefaultSpy).toHaveBeenCalled();
    // Wraps to the true first focusable (the popover option), not a duplicate of itself.
    expect(document.activeElement).toBe(popoverOption);

    OverlayManager.remove(inlineOverlayRoot);
    OverlayManager.remove(container);
    container.remove();
  });
});
