import React from 'react';
import { MENU_LIST_ITEM_SELECTOR } from '../utils';

export const handleKeyDown = (
  event: React.KeyboardEvent,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean | undefined>>,
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>,
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      setOpenPopover?.(true);
      setHighlightLastItem?.(true);
      break;
    case 'ArrowDown':
      event.preventDefault();
      setOpenPopover?.(true);
      setHighlightFirstItem?.(true);
      break;
    case 'Escape':
    case 'Tab':
      setOpenPopover?.(false);
      break;
    default:
      break;
  }
};

export const focusListItem = (
  position: string,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  listRef?: any
) => {
  const listItems = listRef.current?.querySelectorAll(MENU_LIST_ITEM_SELECTOR);
  if (!listItems?.length) {
    return;
  }

  let targetOption: Element | undefined;

  if (position === 'down') {
    targetOption = listItems[0];
  } else {
    targetOption = listItems[listItems.length - 1];
  }
  (targetOption as HTMLElement)?.focus();

  if (targetOption && typeof targetOption.scrollIntoView === 'function') {
    (targetOption as HTMLElement)?.scrollIntoView({ block: 'end' });
  }
  setFocusedOption && setFocusedOption(targetOption as HTMLElement | undefined);
};
