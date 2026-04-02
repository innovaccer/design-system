import React from 'react';
import { getNextFocusableAfterTrigger } from '@/components/organisms/select/utils';

const handleTabExit = (
  event: React.KeyboardEvent,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  triggerRef?: any,
  listRef?: any
) => {
  event.preventDefault();
  setOpenPopover?.(false);
  setFocusedOption?.(undefined);

  if (event.shiftKey) {
    // Shift+Tab: focus the counter trigger
    triggerRef?.current?.focus({ preventScroll: true });
  } else {
    // Tab: focus next focusable after trigger, excluding the popover
    const next = getNextFocusableAfterTrigger(triggerRef?.current, false, listRef?.current);
    if (next) {
      next.focus({ preventScroll: true });
    } else {
      triggerRef?.current?.focus({ preventScroll: true });
    }
  }
};

export const handleKeyDown = (
  event: React.KeyboardEvent,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>,
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>,
  listRef?: any,
  withSearch?: boolean,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>,
  triggerRef?: any
) => {
  switch (event.key) {
    case 'ArrowUp':
    case 'ArrowLeft':
      event.preventDefault();
      navigateOptions('up', focusedOption, setFocusedOption, listRef, withSearch);
      break;
    case 'ArrowDown':
    case 'ArrowRight':
      event.preventDefault();
      navigateOptions('down', focusedOption, setFocusedOption, listRef, withSearch);
      break;
    case 'Enter':
    case ' ':
      event.preventDefault();
      handleEnterKey(focusedOption);
      setHighlightLastItem?.(false);
      setHighlightFirstItem?.(false);
      break;
    case 'Escape':
      setOpenPopover?.(false);
      triggerRef?.current?.focus();
      setFocusedOption?.(undefined);
      break;
    case 'Tab':
      if (event.shiftKey && withSearch) {
        event.preventDefault();
        const searchInput = listRef.current?.querySelector('[data-test="DesignSystem-AvatarSelection--Input"]');
        if (searchInput) {
          (searchInput as HTMLElement).focus();
          setFocusedOption?.(searchInput as HTMLElement);
        } else {
          handleTabExit(event, setOpenPopover, setFocusedOption, triggerRef, listRef);
        }
      } else {
        handleTabExit(event, setOpenPopover, setFocusedOption, triggerRef, listRef);
      }
      break;
    default:
      break;
  }
};

const handleEnterKey = (focusedOption: Element | undefined) => {
  (focusedOption as HTMLElement)?.click();
};

const AVATAR_SELECTION_OPTION_SELECTOR = '[data-test="DesignSystem-AvatarSelection--Option"]';

const navigateOptions = (
  direction: string,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  listRef?: any,
  withSearch?: boolean
) => {
  const listItems = listRef?.current?.querySelectorAll(AVATAR_SELECTION_OPTION_SELECTOR);
  if (!listItems?.length) {
    return;
  }

  let index = Array.from(listItems).findIndex((item) => {
    return item == focusedOption;
  });

  if (index === -1) {
    index = direction === 'up' ? listItems.length - 1 : 0;
  } else if (
    (withSearch && index === 0 && direction === 'up') ||
    (withSearch && index === listItems.length - 1 && direction === 'down')
  ) {
    const searchInput = listRef.current?.querySelector('[data-test="DesignSystem-AvatarSelection--Input"]');
    (searchInput as HTMLElement | undefined)?.focus();
    setFocusedOption && setFocusedOption(searchInput as HTMLElement | undefined);
  } else {
    index = direction === 'up' ? (index - 1 + listItems.length) % listItems.length : (index + 1) % listItems.length;

    const targetOption = listItems[index] as HTMLElement | undefined;

    targetOption?.focus();
    setFocusedOption && setFocusedOption(targetOption);
    targetOption?.scrollIntoView?.({ block: 'center' });
  }
};

export const handleInputKeyDown = (
  event: React.KeyboardEvent,
  listRef: any,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>,
  triggerRef?: any
) => {
  const listItems = listRef.current?.querySelectorAll(AVATAR_SELECTION_OPTION_SELECTOR);
  let targetOption: Element | undefined;

  switch (event.key) {
    case 'ArrowUp':
    case 'ArrowLeft':
      event.preventDefault();
      targetOption = listItems?.length ? listItems[listItems.length - 1] : undefined;
      break;
    case 'ArrowDown':
    case 'ArrowRight':
      event.preventDefault();
      targetOption = listItems?.length ? listItems[0] : undefined;
      break;
    case 'Escape':
      setOpenPopover?.(false);
      triggerRef?.current?.focus();
      setFocusedOption?.(undefined);
      break;
    case 'Tab':
      handleTabExit(event, setOpenPopover, setFocusedOption, triggerRef, listRef);
      return; // Early return to skip focus logic below
    default:
      break;
  }

  (targetOption as HTMLElement)?.focus();
  targetOption?.scrollIntoView?.({ block: 'center' });
  setFocusedOption && setFocusedOption(targetOption);
};
