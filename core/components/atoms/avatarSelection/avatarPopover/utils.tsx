import React from 'react';

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
      event.preventDefault();
      navigateOptions('up', focusedOption, setFocusedOption, listRef, withSearch);
      break;
    case 'ArrowDown':
      event.preventDefault();
      navigateOptions('down', focusedOption, setFocusedOption, listRef, withSearch);
      break;
    case 'Enter':
      handleEnterKey(focusedOption);
      setHighlightLastItem?.(false);
      setHighlightFirstItem?.(false);
      break;
    case 'Escape':
      setOpenPopover?.(false);
      triggerRef.current.focus();
      setFocusedOption?.(undefined);
      break;
    default:
      break;
  }
};

const handleEnterKey = (focusedOption: Element | undefined) => {
  (focusedOption as HTMLElement)?.click();
};

const navigateOptions = (
  direction: string,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  listRef?: any,
  withSearch?: boolean
) => {
  const listItems = listRef?.current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  let index = Array.from(listItems).findIndex((item) => {
    return item == focusedOption;
  });

  if (index === -1) {
    index = direction === 'up' ? listItems.length - 1 : 0;
  } else if (
    (withSearch && index === 0 && direction === 'up') ||
    (withSearch && index === listItems.length - 1 && direction === 'down')
  ) {
    const searchInput = listRef.current.querySelector('[data-test="DesignSystem-AvatarSelection--Input"]');
    searchInput.focus();
    setFocusedOption && setFocusedOption(searchInput);
  } else {
    index = direction === 'up' ? (index - 1 + listItems.length) % listItems.length : (index + 1) % listItems.length;

    const targetOption = listItems[index];

    (targetOption as HTMLElement).focus();
    setFocusedOption && setFocusedOption(targetOption);
    targetOption.scrollIntoView({ block: 'center' });
  }
};

export const handleInputKeyDown = (
  event: React.KeyboardEvent,
  listRef: any,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>,
  triggerRef?: any
) => {
  const listItems = listRef.current?.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  let targetOption;

  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      targetOption = listItems[listItems.length - 1];
      break;
    case 'ArrowDown':
      event.preventDefault();
      targetOption = listItems[0];
      break;
    case 'Escape':
      setOpenPopover?.(false);
      triggerRef.current.focus();
      setFocusedOption?.(undefined);
      break;
    default:
      break;
  }

  (targetOption as HTMLElement)?.focus();
  targetOption?.scrollIntoView?.({ block: 'center' });
  setFocusedOption && setFocusedOption(targetOption);
};
