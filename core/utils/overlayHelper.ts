import OverlayManager from './OverlayManager';

export const getWrapperElement = (): Element => {
  let element = document.querySelector('.Overlay-wrapper');
  if (element === null) {
    element = document.createElement('div');
    element.classList.add('Overlay-wrapper');
    document.body.appendChild(element);
  }
  return element;
};

interface elementData {
  element: Element;
  containerClassName: string;
  elementRef: React.RefObject<HTMLDivElement>;
}

export const getUpdatedZIndex = (ele: elementData): number | undefined => {
  const { containerClassName, elementRef, element } = ele;

  if (element === null) return;

  const elements = element.querySelectorAll(containerClassName);
  if (elements.length < 1) return;

  const siblings = Array.from(elements).filter((el) => el !== elementRef.current);
  let zIndex = -1;

  siblings.forEach((element) => {
    const prevZIndex = parseInt(window.getComputedStyle(element).zIndex || '0', 10);
    zIndex = Math.max(zIndex, prevZIndex + 10);
  });

  return zIndex > 0 ? zIndex : undefined;
};

// keyboard event, boolean?, (event: Event) => void
export const closeOnEscapeKeypress = (
  event: KeyboardEvent,
  isTopOverlay: boolean | undefined,
  onClose: (event: Event) => void
) => {
  if (event.key === 'Escape' && isTopOverlay) {
    onClose(event);

    // prevent browser-specific escape key behavior (Safari exits fullscreen)
    event.preventDefault();
  }
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [contenteditable="true"], summary, area[href], [tabindex]:not([tabindex="-1"])';

/**
 * Returns focusable elements within a container, in DOM order.
 * Excludes elements with `visibility: hidden`, `display: none`, `aria-hidden="true"`,
 * `aria-disabled="true"`, or inside an `[inert]` subtree.
 */
export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const elements = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
  return Array.from(elements).filter((el) => {
    const style = window.getComputedStyle(el);
    const isVisible = style.visibility !== 'hidden' && style.display !== 'none';
    const isAriaHidden = el.getAttribute('aria-hidden') === 'true';
    const isAriaDisabled = el.getAttribute('aria-disabled') === 'true';
    const isInert = el.closest('[inert]') !== null;
    const isExplicitlyNonFocusable = el.getAttribute('tabindex') === '-1';
    return isVisible && !isAriaHidden && !isAriaDisabled && !isInert && !isExplicitlyNonFocusable;
  });
};

const LISTBOX_OPTION_SELECTOR = '[role="option"]';

/**
 * Returns enabled, visible listbox options (`[role="option"]`) under a listbox root, in DOM order.
 * Matches combobox items that use roving `tabIndex={-1}` (excluded by {@link getFocusableElements}).
 */
const getListboxOptionElements = (listboxRoot: HTMLElement): HTMLElement[] => {
  const options: HTMLElement[] = [];

  for (const node of Array.from(listboxRoot.children)) {
    if (!(node instanceof HTMLElement)) continue;

    let optionNode: HTMLElement | null = null;
    if (node.matches(LISTBOX_OPTION_SELECTOR)) {
      optionNode = node;
    } else {
      for (const child of Array.from(node.children)) {
        if (child.matches(LISTBOX_OPTION_SELECTOR) || child.matches('[data-test="DesignSystem-Listbox-ItemWrapper"]')) {
          optionNode = child as HTMLElement;
          break;
        }
      }
    }

    if (!optionNode) continue;

    const styleOuter = window.getComputedStyle(node);
    const styleInner = optionNode !== node ? window.getComputedStyle(optionNode) : styleOuter;

    const isVisible =
      styleOuter.visibility !== 'hidden' &&
      styleOuter.display !== 'none' &&
      styleInner.visibility !== 'hidden' &&
      styleInner.display !== 'none';
    const isAriaHidden =
      node.getAttribute('aria-hidden') === 'true' || optionNode.getAttribute('aria-hidden') === 'true';
    const isAriaDisabled =
      node.getAttribute('aria-disabled') === 'true' || optionNode.getAttribute('aria-disabled') === 'true';
    const isInert = optionNode.closest('[inert]') !== null;
    const isDataDisabled =
      optionNode.getAttribute('data-disabled') === 'true' || node.getAttribute('data-disabled') === 'true';

    if (isVisible && !isAriaHidden && !isAriaDisabled && !isInert && !isDataDisabled) {
      options.push(optionNode);
    }
  }

  return options;
};

/**
 * Focusable/interactive list descendants for keyboard navigation.
 * With `roleHint` `"listbox"`, returns `[role="option"]` elements under the listbox root(s), not generic tabbables
 * (listbox options often use `tabindex="-1"`).
 */
export const getAllFocusableElements = (container: HTMLElement, roleHint?: string): HTMLElement[] => {
  if (roleHint !== 'listbox') {
    return getFocusableElements(container);
  }

  const roots: HTMLElement[] = [];
  if (container.getAttribute('role') === 'listbox') {
    roots.push(container);
  } else {
    roots.push(...Array.from(container.querySelectorAll<HTMLElement>('[role="listbox"]')));
  }

  if (roots.length === 0) {
    return [];
  }

  const seen = new Set<HTMLElement>();
  const out: HTMLElement[] = [];
  for (const root of roots) {
    for (const el of getListboxOptionElements(root)) {
      if (!seen.has(el)) {
        seen.add(el);
        out.push(el);
      }
    }
  }
  return out;
};

/**
 * Handles Tab/Shift+Tab to trap focus within the container.
 *
 * @param staticFocusTarget - Optional non-tabbable element (tabindex="-1") that received
 *   focus on overlay open (e.g. the dialog heading). It is not in the tabbable focusable
 *   list, so without this parameter Shift+Tab from it would escape the trap.
 * @param registeredOverlay - The element this overlay passed to `OverlayManager.add`. When
 *   given, the trap's boundary widens to include any of its own nested overlays (see
 *   `OverlayManager.getNestedOverlays`) — a Popover/Calendar/Dropdown/Select opened from
 *   inside it. Those portal to `document.body` directly (via `PopperWrapper`), so they live
 *   outside `container`'s own DOM subtree and would otherwise let Tab escape the trap the
 *   moment focus moves into one.
 *
 * Returns true if the event was handled (focus was redirected or prevented).
 */
export const handleFocusTrapKeyDown = (
  event: KeyboardEvent,
  container: HTMLElement,
  staticFocusTarget?: HTMLElement | null,
  registeredOverlay?: HTMLDivElement | null
): boolean => {
  if (event.key !== 'Tab') return false;

  const activeElement = document.activeElement as HTMLElement | null;
  if (!activeElement) return false;

  // Exclude any nested overlay that's already inside `container` (e.g. a `PopperWrapper`
  // with `appendToBody={false}`, rendered inline). Its focusables are already found via
  // `container` itself, in correct DOM order; including it again would duplicate them and
  // put the duplicate after every other control in `container` — including ones that
  // actually come later in the DOM — which corrupts the computed "last" focusable and lets
  // Tab from the true last control escape uncaught.
  const nestedOverlays = registeredOverlay
    ? OverlayManager.getNestedOverlays(registeredOverlay).filter((overlay) => !container.contains(overlay))
    : [];
  const isInsideTrap =
    container.contains(activeElement) || nestedOverlays.some((overlay) => overlay.contains(activeElement));
  if (!isInsideTrap) return false;

  const focusable = [container, ...nestedOverlays].reduce<HTMLElement[]>(
    (acc, scope) => acc.concat(getFocusableElements(scope)),
    []
  );

  if (focusable.length === 0) {
    event.preventDefault();
    container.focus({ preventScroll: true });
    return true;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey) {
    const staticTargetPrecedesFirst =
      !!staticFocusTarget &&
      activeElement === staticFocusTarget &&
      !!(staticFocusTarget.compareDocumentPosition(first) & Node.DOCUMENT_POSITION_FOLLOWING);
    if (activeElement === first || staticTargetPrecedesFirst) {
      event.preventDefault();
      last.focus({ preventScroll: true });
      return true;
    }
  } else {
    if (activeElement === last) {
      event.preventDefault();
      first.focus({ preventScroll: true });
      return true;
    }
  }

  return false;
};

/**
 * Returns focus to a previously focused element after an overlay closes.
 * When {@link closingOverlay} is provided, restoration is skipped if focus
 * is currently inside a *different* dialog — preventing a background
 * overlay from stealing focus away from the topmost focus-trapping dialog.
 */
export const restoreFocusToElementIfConnected = (
  element: HTMLElement | null | undefined,
  closingOverlay?: HTMLElement | null
): void => {
  if (!element?.focus || !element.isConnected) return;

  window.requestAnimationFrame(() => {
    if (!element.isConnected) return;

    if (closingOverlay) {
      const activeDialog = document.activeElement?.closest('[role="dialog"]');
      if (activeDialog && activeDialog !== closingOverlay) {
        return;
      }
    }

    element.focus({ preventScroll: true });
  });
};

// Module-level rather than a DOM marker: keeps our own bookkeeping out of the DOM/snapshots,
// and lets us restore each element's exact prior `aria-hidden` value (including an explicit
// `"false"`), not just "present or not". Holds both true background body-children AND any
// stacked trapping overlay that's currently inactive (see `syncBackgroundVisibility`).
let hiddenBackground: Map<Element, string | null> | null = null;

const restoreAriaHidden = (el: Element, priorValue: string | null) => {
  if (priorValue === null) el.removeAttribute('aria-hidden');
  else el.setAttribute('aria-hidden', priorValue);
};

const hideElement = (el: Element) => {
  if (el.getAttribute('aria-hidden') === 'true') return; // already hidden (by us or otherwise)
  hiddenBackground!.set(el, el.getAttribute('aria-hidden'));
  el.setAttribute('aria-hidden', 'true');
};

const revealElement = (el: Element) => {
  if (!hiddenBackground!.has(el)) return;
  restoreAriaHidden(el, hiddenBackground!.get(el) ?? null);
  hiddenBackground!.delete(el);
};

/**
 * Keeps everything except the *active* trapping overlay — and that overlay's own nested
 * overlays — hidden from screen readers. `aria-modal` alone isn't honored consistently
 * across AT/browser combinations, so this marks `aria-hidden` on:
 *  - every `document.body`-level sibling, except the shared portal root (`.Overlay-wrapper`),
 *    any open `Backdrop`, and any Popover-based widget (Dropdown, Select, Menu,
 *    Calendar/DatePicker, Tooltip) *owned by the topmost trapping overlay* — i.e. one of
 *    `OverlayManager.getNestedOverlays(topmost)`. A Dropdown left open inside an now-inactive
 *    stacked Modal underneath is background too, not just the inactive Modal itself.
 *  - any *other* currently-registered trapping overlay (Modal, Sidesheet) that isn't the
 *    topmost one — e.g. a Modal opened on top of another Modal — since they share the same
 *    `.Overlay-wrapper` root and would otherwise both stay exposed to AT at once.
 *
 * Keyboard focus is handled separately by {@link handleFocusTrapKeyDown} — this only
 * affects screen reader browse-mode navigation, which isn't gated by DOM focus at all.
 *
 * Call this after registering or unregistering a trapping overlay with `OverlayManager`
 * (on open *and* close) — it's idempotent and re-syncs to whatever is currently open.
 */
export const syncBackgroundVisibility = (): void => {
  const trapping = OverlayManager.getTrappingOverlays();

  if (trapping.length === 0) {
    if (!hiddenBackground) return;
    hiddenBackground.forEach((priorValue, el) => restoreAriaHidden(el, priorValue));
    hiddenBackground = null;
    return;
  }

  if (!hiddenBackground) hiddenBackground = new Map();

  const topmost = trapping[trapping.length - 1];
  // Exact match only — NOT `el.contains(overlay)`. A body-level container (e.g. the app's
  // own root) can legitimately contain a registered overlay that renders inline via
  // `PopperWrapper`'s `appendToBody={false}` anywhere in the app, unrelated to the active
  // trapping overlay. `.contains()` would exempt that entire container — and everything
  // else inside it — from hiding.
  const activeOverlays: HTMLDivElement[] = [topmost, ...OverlayManager.getNestedOverlays(topmost)];

  // Re-scan on every call, not just the first: a body-level node (e.g. a toast portal) can
  // mount after the first trapping overlay opened, and would otherwise stay exposed to AT
  // until the last one closes. Also reveals anything hidden by an earlier call that's now
  // owned by the (new) topmost overlay — e.g. a Dropdown inside a Modal that just became
  // active again after an outer stacked Modal closed. Both directions are idempotent.
  Array.from(document.body.children).forEach((child) => {
    const isKept =
      child.classList.contains('Overlay-wrapper') ||
      child.classList.contains('Backdrop') ||
      activeOverlays.some((overlay) => overlay === child);
    if (isKept) revealElement(child);
    else hideElement(child);
  });

  trapping.forEach((overlay) => (overlay === topmost ? revealElement(overlay) : hideElement(overlay)));
};

/**
 * Un-hides a single overlay root from the background-hidden state, if it got caught by
 * {@link syncBackgroundVisibility} before it had a chance to register with `OverlayManager`.
 *
 * `PopperWrapper` registers via a zero-delay timer (see `scheduleOverlayAdd`), so a
 * Popover/Select/Menu/DatePicker that's already open when a Modal/Sidesheet mounts can
 * exist in the DOM (and get swept up as "background") a tick before it's registered.
 * Called right after registration to correct that retroactively — a no-op once the
 * overlay was never hidden in the first place.
 */
export const revealOverlayFromHiddenBackground = (overlayEl: HTMLElement | null): void => {
  if (!overlayEl || !hiddenBackground) return;

  // Exact match only — same reasoning as `isKeptFromBackgroundHiding`. An inline
  // (`appendToBody={false}`) overlay nested inside a large body-level container (e.g. the
  // app's own root) isn't itself a `document.body` child, so there's nothing of its own to
  // reveal here; un-hiding the container that merely contains it would re-expose everything
  // else inside that container too.
  const bodyChild = Array.from(document.body.children).find((child) => child === overlayEl);
  if (bodyChild) revealElement(bodyChild);
};
