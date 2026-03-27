import * as React from 'react';
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
      break;
    }
    nextIndex += delta;
  }
};

export const onKeyDown = (event: React.KeyboardEvent) => {
  // currentTarget is the Listbox.Item root (`li`/`div`); target may be inner row content.
  const sourceElement = event.currentTarget as HTMLElement;

  switch (event.key) {
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
