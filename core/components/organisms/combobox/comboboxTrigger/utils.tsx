import React from 'react';

export const handleKeyDown = (
  event: React.KeyboardEvent,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>,
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>,
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  switch (event.key) {
    case 'ArrowUp':
      setOpenPopover?.(true);
      setHighlightLastItem?.(true);
      break;
    case 'ArrowDown':
      setOpenPopover?.(true);
      setHighlightFirstItem?.(true);
      break;
    case 'Escape':
      setOpenPopover?.(false);
      break;
    default:
      break;
  }
};

export const focusListItem = (
  position: string,
  setFocusedOption?: React.Dispatch<React.SetStateAction<Element | undefined>>
) => {
  const listItems = document.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  let targetOption;

  if (position === 'down') {
    targetOption = listItems[0];
  } else {
    targetOption = listItems[listItems.length - 1];
  }
  (targetOption as HTMLElement)?.focus();
  targetOption?.scrollIntoView({ block: 'center' });
  setFocusedOption && setFocusedOption(targetOption);
};
