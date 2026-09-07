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
 * Stops at the first nested dialog (a Modal or Sidesheet opened on top of this one — see
 * {@link isOrContainsDialog}) and excludes everything from that point on, not just the
 * dialog itself: a popper the nested dialog opens (e.g. its own DatePicker) is registered
 * with `OverlayManager` *after* that dialog too, so without stopping there it would also
 * be picked up here and wrongly absorbed into *this* (outer) trap — whose capture-phase
 * listener runs first and would hijack Tab away from the inner dialog's own trap.
 *
 * @param ownOverlayEl - The dialog's own element as registered with `OverlayManager`
 *   (e.g. `this.modalRef.current`), used to find overlays opened after it.
 * @param container - The dialog's content container; used to exclude overlays that are
 *   (unexpectedly) DOM descendants/ancestors of it.
 */
export const getNestedOverlayElements = (ownOverlayEl: HTMLElement | null, container: HTMLElement): HTMLElement[] => {
  const nested: HTMLElement[] = [];

  for (const overlay of OverlayManager.getOverlaysAfter(ownOverlayEl as HTMLDivElement | null)) {
    if (isOrContainsDialog(overlay)) break;
    if (!overlay.isConnected) continue;
    if (container.contains(overlay) || overlay.contains(container)) continue;
    nested.push(overlay);
  }

  return nested;
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

/**
 * Ordered stack of currently-open dialog *content* elements (the one carrying
 * `role="dialog"` — e.g. `this.modalContentRef.current`) that share the singleton portal
 * returned by {@link getWrapperElement} (Modal/Sidesheet both render into it). Because they
 * share that one `document.body` child, hiding background siblings of the portal (see
 * {@link hideBackgroundFromScreenReaders}) can't by itself tell one stacked dialog's content
 * apart from another's — per the WAI-ARIA dialog pattern, only the *topmost* dialog should
 * stay exposed to a screen reader's browse cursor; every dialog underneath it must also be
 * `aria-hidden` until it's topmost again.
 */
const dialogRootStack: HTMLElement[] = [];
let restorePageBackground: (() => void) | null = null;

/**
 * All currently-open Popper-portaled overlays (Dropdown/DatePicker/Popover, ...) anywhere
 * in the `OverlayManager` stack, regardless of which dialog opened them. Used to build the
 * page-level "keep visible" set for {@link activateBackgroundHiding}: every one of them
 * shares the same `document.body`-level portal as the dialogs' own wrapper and must stay
 * exposed no matter how many dialogs are stacked or which one owns it.
 *
 * Unlike {@link getNestedOverlayElements} — which stops at the next dialog boundary to
 * scope one *specific* dialog's own focus trap — this deliberately keeps scanning past
 * dialog boundaries: dialog elements themselves are excluded, but a nested dialog's own
 * poppers must still be included.
 */
const getAllOpenPopperOverlays = (): HTMLElement[] =>
  OverlayManager.overlays.filter((overlay) => overlay.isConnected && !isOrContainsDialog(overlay));

/**
 * Marks `dialogRoot` as the new topmost dialog: `aria-hidden`s whichever dialog was
 * previously on top (if any), and — the first time the stack goes from empty to
 * non-empty — hides the rest of the page too.
 *
 * No-op if `dialogRoot` is already the topmost entry, so a duplicate activation call for
 * the same dialog can't push it twice or double-hide the previous top.
 *
 * @param dialogRoot - This dialog's own `role="dialog"` element.
 * @param portalRoot - The shared portal root to keep visible (e.g. `this.element`, from
 *   {@link getWrapperElement}).
 */
export const activateBackgroundHiding = (dialogRoot: HTMLElement, portalRoot: Element): void => {
  if (dialogRootStack[dialogRootStack.length - 1] === dialogRoot) return;

  const previousTop = dialogRootStack[dialogRootStack.length - 1];
  if (previousTop) previousTop.setAttribute('aria-hidden', 'true');

  // Undo a stale `aria-hidden` from a past cycle where this same dialog element got
  // covered and then closed without being reopened in between — the element persists
  // across opens/closes (only its content unmounts), so nothing else would clear it.
  dialogRoot.removeAttribute('aria-hidden');
  dialogRootStack.push(dialogRoot);

  if (dialogRootStack.length === 1) {
    // A Popper (Dropdown/DatePicker/Popover) that's already open on first render mounts its
    // `document.body` portal, as a child, before registering with `OverlayManager` via its
    // own `setTimeout(0)` (see `PopperWrapper.scheduleOverlayAdd`). Whether that registration
    // is queued *before* or *after* this one depends on whether the popper sits inside *this*
    // dialog (mounts first, so its timer is queued first) or a later-mounting nested dialog
    // (mounts after this dialog's own componentDidMount already queued this timer, so its
    // registration timer is queued after). A second deferred tick guarantees every such
    // registration made during the same synchronous commit has landed either way, so the
    // scan below never misses one and hides it as background for the dialog's whole lifetime.
    window.setTimeout(() => {
      window.setTimeout(() => {
        // This dialog closed (and possibly another opened) before the deferral elapsed;
        // whichever dialog is now at the bottom of the stack owns the page-background scan.
        if (dialogRootStack[0] !== dialogRoot) return;
        restorePageBackground = hideBackgroundFromScreenReaders([portalRoot, ...getAllOpenPopperOverlays()]);
      }, 0);
    }, 0);
  }
};

/**
 * Reverses {@link activateBackgroundHiding} for `dialogRoot`: removes it from the stack
 * and exposes whichever dialog is now topmost, or the page background if none remain.
 *
 * Idempotent — a dialog whose `open` prop flips to `false` can call this once from
 * `componentDidUpdate` and again from `componentWillUnmount` if it unmounts mid
 * close-animation (`state.open` hasn't settled to `false` yet); the second call finds
 * `dialogRoot` no longer in the stack and does nothing.
 */
export const deactivateBackgroundHiding = (dialogRoot: HTMLElement): void => {
  const index = dialogRootStack.indexOf(dialogRoot);
  if (index === -1) return;
  dialogRootStack.splice(index, 1);

  const newTop = dialogRootStack[dialogRootStack.length - 1];
  if (newTop) {
    newTop.removeAttribute('aria-hidden');
    return;
  }

  if (restorePageBackground) {
    restorePageBackground();
    restorePageBackground = null;
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
