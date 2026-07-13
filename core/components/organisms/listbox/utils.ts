import * as React from 'react';
import isSpaceKey from '@/accessibility/utils/isSpaceKey';
import { getAllFocusableElements } from '@/utils/overlayHelper';

const elementFromEventTarget = (target: EventTarget | null): Element | null => {
  if (target instanceof Element) return target;
  if (target instanceof Text && target.parentElement) return target.parentElement;
  return null;
};

/**
 * Resolves the listbox option row (`[role="option"]`) for pointer/focus events when the
 * interaction target is nested inside the row. Falls back to `fallback` (typically `currentTarget`).
 */
export const resolveListboxOptionFromEvent = (event: React.SyntheticEvent, fallback: HTMLElement): HTMLElement => {
  const listRoot = fallback.closest<HTMLElement>('[role="listbox"]');
  const el = elementFromEventTarget(event.target);
  if (el) {
    const option = el.closest<HTMLElement>('[role="option"]');
    if (option && listRoot?.contains(option)) {
      return option;
    }
  }
  return fallback;
};

export const isListboxOptionDisabled = (optionElement: HTMLElement): boolean => {
  const inner = optionElement.matches('[data-test="DesignSystem-Listbox-ItemWrapper"]')
    ? optionElement
    : optionElement.querySelector<HTMLElement>('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  return inner?.getAttribute('data-disabled') === 'true' || optionElement.getAttribute('data-disabled') === 'true';
};

const focusAdjacentOption = (sourceElement: HTMLElement, direction: 'down' | 'up') => {
  const listRoot = sourceElement.closest<HTMLElement>('[role="listbox"]');
  if (!listRoot) return;

  const options = getAllFocusableElements(listRoot, 'listbox');
  const currentIndex = options.indexOf(sourceElement);
  if (currentIndex < 0) return;

  const delta = direction === 'down' ? 1 : -1;
  let nextIndex = currentIndex + delta;

  while (nextIndex >= 0 && nextIndex < options.length) {
    const candidate = options[nextIndex];
    if (!isListboxOptionDisabled(candidate)) {
      candidate.focus({ preventScroll: true });
      if (typeof candidate.scrollIntoView === 'function') {
        candidate.scrollIntoView({ block: 'nearest' });
      }
      break;
    }
    nextIndex += delta;
  }
};

const activateOptionRow = (sourceElement: HTMLElement) => {
  if (isListboxOptionDisabled(sourceElement)) return;
  sourceElement.click();
};

export const onKeyDown = (event: React.KeyboardEvent) => {
  // currentTarget is the interactive list row (`ListBody`); target may be nested content inside it.
  const sourceElement = event.currentTarget as HTMLElement;

  if (isSpaceKey(event)) {
    event.preventDefault();
    activateOptionRow(sourceElement);
    return;
  }

  switch (event.key) {
    case 'Enter':
      event.preventDefault();
      activateOptionRow(sourceElement);
      break;
    case 'ArrowDown':
      event.preventDefault();
      focusAdjacentOption(sourceElement, 'down');
      break;
    case 'ArrowUp':
      event.preventDefault();
      focusAdjacentOption(sourceElement, 'up');
      break;
    default:
      break;
  }
};
