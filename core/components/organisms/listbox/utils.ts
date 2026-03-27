import * as React from 'react';
import isSpaceKey from '@/accessibility/utils/isSpaceKey';
import { getAllFocusableElements } from '@/utils/overlayHelper';

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
