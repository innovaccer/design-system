import React from 'react';

export const handleKeyDown = (
  event: React.KeyboardEvent,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  console.log('handle key down e.key', event.key);

  switch (event.key) {
    case 'ArrowUp':
      setOpenPopover?.(true);
      focusListItem('up');
      break;
    case 'ArrowDown':
      setOpenPopover?.(true);
      focusListItem('down');
      break;
    case 'Escape':
      setOpenPopover?.(false);
      break;
    default:
      break;
  }
};

const focusListItem = (position: string) => {
  const listItems = document.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  if (position === 'down') {
    (listItems[0] as HTMLElement)?.focus();
  } else {
    (listItems[listItems.length - 1] as HTMLElement)?.focus();
  }
};
