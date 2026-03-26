import React from 'react';
import { getAllFocusableElements } from '@/utils/overlayHelper';

export const handleKeyDown = (
  event: React.KeyboardEvent,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>,
  inputTriggerRef?: any,
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>,
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>,
  multiSelect?: boolean,
  listRef?: any
) => {
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      navigateOptions('up', focusedOption, setFocusedOption, listRef);
      break;
    case 'ArrowDown':
      event.preventDefault();
      navigateOptions('down', focusedOption, setFocusedOption, listRef);
      break;
    case 'Enter':
      handleEnterKey(focusedOption, multiSelect, inputTriggerRef, listRef, setFocusedOption);
      setHighlightLastItem?.(false);
      setHighlightFirstItem?.(false);
      break;
    case 'Escape':
      setOpenPopover?.(false);
      inputTriggerRef.current.focus();
      setFocusedOption?.(undefined);
      break;
    case 'Tab':
      event.preventDefault();
      setOpenPopover?.(false);
      setFocusedOption?.(undefined);
      inputTriggerRef.current?.focus();
      break;
    default:
      break;
  }
};

const handleEnterKey = (
  focusedOption: Element | undefined,
  multiSelect?: boolean,
  inputTriggerRef?: any,
  listRef?: any,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>
) => {
  (focusedOption as HTMLElement)?.click();
  if (!multiSelect) {
    inputTriggerRef.current.focus();
  } else {
    // to focus first option by default when last option is selected
    if (!listRef?.current) return;

    // Scope to 'listbox' role to exclude nested elements
    const focusables = getAllFocusableElements(listRef.current, 'listbox');
    const index = focusables.findIndex((item) => item === focusedOption);

    if (index === focusables.length - 1 && focusables.length > 0) {
      focusables[0].focus({ preventScroll: true });
      setFocusedOption && setFocusedOption(focusables[0]);
      focusables[0].scrollIntoView({ block: 'center' });
    }
  }
};

const navigateOptions = (
  direction: string,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  listRef?: any
) => {
  if (!listRef?.current) return;

  // Scope to 'listbox' role to exclude nested elements
  const focusables = getAllFocusableElements(listRef.current, 'listbox');
  if (focusables.length === 0) return;

  let index = focusables.findIndex((item) => item === focusedOption || item === document.activeElement);

  if (index === -1) {
    index = direction === 'up' ? focusables.length - 1 : 0;
  } else {
    index = direction === 'up' ? (index - 1 + focusables.length) % focusables.length : (index + 1) % focusables.length;
  }

  const targetOption = focusables[index];
  targetOption.focus({ preventScroll: true });
  setFocusedOption && setFocusedOption(targetOption);
  targetOption.scrollIntoView?.({ block: 'center' });
};
