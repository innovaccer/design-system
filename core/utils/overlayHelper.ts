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
 *
 * Returns true if the event was handled (focus was redirected or prevented).
 */
export const handleFocusTrapKeyDown = (
  event: KeyboardEvent,
  container: HTMLElement,
  staticFocusTarget?: HTMLElement | null
): boolean => {
  if (event.key !== 'Tab') return false;

  const focusable = getFocusableElements(container);
  const activeElement = document.activeElement as HTMLElement | null;

  if (!activeElement || !container.contains(activeElement)) {
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
