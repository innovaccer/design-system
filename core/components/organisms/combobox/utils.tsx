import React from 'react';
import { getAllFocusableElements } from '@/utils/overlayHelper';
import isSpaceKey from '@/accessibility/utils/isSpaceKey';

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
  if (isSpaceKey(event)) {
    event.preventDefault();
    handleEnterKey(event.currentTarget as HTMLElement, multiSelect, inputTriggerRef, listRef, setFocusedOption);
    setHighlightLastItem?.(false);
    setHighlightFirstItem?.(false);
    return;
  }

  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      navigateOptions('up', focusedOption, setFocusedOption, listRef, inputTriggerRef);
      break;
    case 'ArrowDown':
      event.preventDefault();
      navigateOptions('down', focusedOption, setFocusedOption, listRef, inputTriggerRef);
      break;
    case 'Enter':
      event.preventDefault();
      handleEnterKey(event.currentTarget as HTMLElement, multiSelect, inputTriggerRef, listRef, setFocusedOption);
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

      if (inputTriggerRef?.current && inputTriggerRef.current instanceof HTMLElement) {
        import('@/components/organisms/select/utils').then(({ getNextFocusableAfterTrigger }) => {
          const next = getNextFocusableAfterTrigger(inputTriggerRef.current, event.shiftKey);
          if (next) {
            next.focus({ preventScroll: true });
          } else {
            inputTriggerRef.current.focus();
          }
        });
      } else if (inputTriggerRef?.current) {
        inputTriggerRef.current.focus();
      }
      break;
    default:
      if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
        if (inputTriggerRef?.current) {
          inputTriggerRef.current.focus();
        }
      }
      break;
  }
};

const handleEnterKey = (
  activationTarget: HTMLElement | undefined,
  multiSelect?: boolean,
  inputTriggerRef?: any,
  listRef?: any,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>
) => {
  activationTarget?.click();
  if (!multiSelect) {
    inputTriggerRef.current.focus();
  } else {
    // to focus first option by default when last option is selected
    if (!listRef?.current) return;

    // Scope to 'listbox' role to exclude nested elements
    const focusables = getAllFocusableElements(listRef.current, 'listbox');
    const index = focusables.findIndex((item) => item === activationTarget);

    if (index === focusables.length - 1 && focusables.length > 0) {
      focusables[0].focus({ preventScroll: true });
      setFocusedOption && setFocusedOption(focusables[0]);
      focusables[0].scrollIntoView?.({ block: 'center' });
    }
  }
};

const navigateOptions = (
  direction: string,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  listRef?: any,
  inputTriggerRef?: any
) => {
  if (!listRef?.current) return;

  // Scope to 'listbox' role to exclude nested elements
  const focusables = getAllFocusableElements(listRef.current, 'listbox');
  if (focusables.length === 0) return;

  let index = focusables.findIndex((item) => item === focusedOption || item === document.activeElement);

  if (index === -1) {
    index = direction === 'up' ? focusables.length - 1 : 0;
  } else if (direction === 'up' && index === 0) {
    // If we're on the first item and pressing up, return focus to the input
    if (inputTriggerRef?.current) {
      inputTriggerRef.current.focus();
      setFocusedOption && setFocusedOption(undefined);
      return;
    }
    index = focusables.length - 1; // Fallback to wrap-around if no input ref
  } else {
    index = direction === 'up' ? (index - 1 + focusables.length) % focusables.length : (index + 1) % focusables.length;
  }

  const targetOption = focusables[index];
  targetOption.focus({ preventScroll: true });
  setFocusedOption && setFocusedOption(targetOption);
  targetOption.scrollIntoView?.({ block: 'center' });
};
