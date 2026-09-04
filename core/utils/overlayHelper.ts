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
 * True if `element` is a dialog, or has one nested inside it. Modal/Sidesheet register
 * their *outer* wrapper with `OverlayManager` (the element carrying `role="dialog"` is a
 * descendant — always for Sidesheet, and for Modal whenever `backdropClose` is used), so
 * checking `element`'s own `role` attribute alone misses those cases.
 */
const isOrContainsDialog = (element: Element): boolean =>
  element.getAttribute('role') === 'dialog' || element.querySelector('[role="dialog"]') !== null;

/**
 * Poppers (Dropdown menus, DatePicker calendars, ...) render their content into
 * `document.body` via a portal, so it is never a DOM descendant of the dialog that
 * spawned it even though it's visually layered on top of it. This returns such
 * currently-open portaled overlays — found via {@link OverlayManager}'s stack, which
 * records them in open order — so the dialog's focus trap can be extended to include
 * them instead of losing focus to the trap when it reaches one.
 *
 * Excludes independent nested dialogs (a Modal or Sidesheet opened on top of this one) —
 * see {@link isOrContainsDialog} — since those own their own focus trap and must not be
 * absorbed into this one's.
 *
 * @param ownOverlayEl - The dialog's own element as registered with `OverlayManager`
 *   (e.g. `this.modalRef.current`), used to find overlays opened after it.
 * @param container - The dialog's content container; used to exclude overlays that are
 *   (unexpectedly) DOM descendants/ancestors of it.
 */
export const getNestedOverlayElements = (ownOverlayEl: HTMLElement | null, container: HTMLElement): HTMLElement[] => {
  return OverlayManager.getOverlaysAfter(ownOverlayEl as HTMLDivElement | null).filter(
    (overlay) =>
      overlay.isConnected &&
      !isOrContainsDialog(overlay) &&
      !container.contains(overlay) &&
      !overlay.contains(container)
  );
};

/**
 * Handles Tab/Shift+Tab to trap focus within the container.
 *
 * @param staticFocusTarget - Optional non-tabbable element (tabindex="-1") that received
 *   focus on overlay open (e.g. the dialog heading). It is not in the tabbable focusable
 *   list, so without this parameter Shift+Tab from it would escape the trap.
 * @param nestedOverlays - Currently-open portaled overlays (see {@link getNestedOverlayElements})
 *   that should be treated as part of the trapped region, in the order they were opened.
 *
 * Returns true if the event was handled (focus was redirected or prevented).
 */
export const handleFocusTrapKeyDown = (
  event: KeyboardEvent,
  container: HTMLElement,
  staticFocusTarget?: HTMLElement | null,
  nestedOverlays: HTMLElement[] = []
): boolean => {
  if (event.key !== 'Tab') return false;

  const scopes = [container, ...nestedOverlays];
  const focusable = scopes.reduce<HTMLElement[]>((acc, scope) => acc.concat(getFocusableElements(scope)), []);
  const activeElement = document.activeElement as HTMLElement | null;

  if (!activeElement || !scopes.some((scope) => scope.contains(activeElement))) {
    return false;
  }

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

const NON_CONTENT_TAGS = new Set(['SCRIPT', 'STYLE']);

/**
 * Sets `aria-hidden="true"` on every `<body>` child other than `keepVisible`, so a screen
 * reader's virtual/browse cursor can't wander into the rest of the page while a dialog is
 * open. This is a distinct problem from keyboard focus trapping (arrow-key browse-mode
 * navigation ignores tabindex and DOM focus entirely) and is why `aria-modal` alone isn't
 * sufficient in every screen reader/browser combination — see WAI-ARIA APG dialog pattern.
 *
 * Skips `<script>`/`<style>` tags (never exposed to assistive tech regardless of
 * `aria-hidden`) and anything already `aria-hidden="true"`, so a dialog opened while
 * another is already active doesn't clobber the outer one's state.
 *
 * Returns a restore function that removes `aria-hidden` from exactly the elements this call
 * added it to.
 */
export const hideBackgroundFromScreenReaders = (keepVisible: Element[]): (() => void) => {
  const hidden: Element[] = [];

  Array.from(document.body.children).forEach((child) => {
    if (NON_CONTENT_TAGS.has(child.tagName)) return;
    if (keepVisible.includes(child)) return;
    if (child.getAttribute('aria-hidden') === 'true') return;

    child.setAttribute('aria-hidden', 'true');
    hidden.push(child);
  });

  return () => {
    hidden.forEach((child) => child.removeAttribute('aria-hidden'));
  };
};

let backgroundHideDepth = 0;
let restoreBackgroundFromScreenReaders: (() => void) | null = null;
let pendingActivation: { cancelled: boolean } | null = null;

/**
 * Reference-counted wrapper around {@link hideBackgroundFromScreenReaders} for dialogs that
 * share the same portal root (Modal/Sidesheet both render into the singleton returned by
 * {@link getWrapperElement}). The first dialog to open hides the background; dialogs opened
 * while one is already active are no-ops (the background is already hidden); the background
 * is restored only once the last open dialog calls {@link deactivateBackgroundHiding}.
 *
 * @param getVisibleElements - Lazily computes the elements to keep visible. A Popper
 *   (Dropdown/DatePicker/Popover) that's *already open* on the dialog's first render mounts
 *   its `document.body` portal, as a child, before the dialog's own `componentDidMount` runs
 *   — but registers with `OverlayManager` via a `setTimeout(0)` (see
 *   `PopperWrapper.scheduleOverlayAdd`), queued *before* the one below since children mount
 *   before parents. Deferring this scan the same way means that registration has landed by
 *   the time `getVisibleElements` (typically built with {@link getNestedOverlayElements})
 *   runs, so such a popper is correctly kept visible instead of being hidden as background
 *   for the dialog's entire lifetime.
 */
export const activateBackgroundHiding = (getVisibleElements: () => Element[]): void => {
  backgroundHideDepth += 1;
  if (backgroundHideDepth === 1) {
    const activation = { cancelled: false };
    pendingActivation = activation;
    window.setTimeout(() => {
      if (activation.cancelled) return;
      restoreBackgroundFromScreenReaders = hideBackgroundFromScreenReaders(getVisibleElements());
    }, 0);
  }
};

export const deactivateBackgroundHiding = (): void => {
  backgroundHideDepth = Math.max(0, backgroundHideDepth - 1);
  if (backgroundHideDepth === 0) {
    if (pendingActivation) {
      pendingActivation.cancelled = true;
      pendingActivation = null;
    }
    if (restoreBackgroundFromScreenReaders) {
      restoreBackgroundFromScreenReaders();
      restoreBackgroundFromScreenReaders = null;
    }
  }
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
