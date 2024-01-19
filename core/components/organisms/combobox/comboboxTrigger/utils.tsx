import React from 'react';

export const handleKeyDown = (
  event: React.KeyboardEvent,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>,
  setFocusedOption?: React.Dispatch<React.SetStateAction<Element | undefined>>
) => {
  console.log('handle key down e.key', event.key);

  switch (event.key) {
    case 'ArrowUp':
      setOpenPopover?.(true);
      focusListItem('up', setFocusedOption);
      break;
    case 'ArrowDown':
      setOpenPopover?.(true);
      focusListItem('down', setFocusedOption);
      break;
    case 'Escape':
      setOpenPopover?.(false);
      break;
    default:
      break;
  }
};

const focusListItem = (
  position: string,
  setFocusedOption?: React.Dispatch<React.SetStateAction<Element | undefined>>
) => {
  const listItems = document.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  let targetOption;
  // if (position === 'down') {
  //   targetOption = listItems[0];
  //   (listItems[0] as HTMLElement)?.focus();
  // } else {
  //   (listItems[listItems.length - 1] as HTMLElement)?.focus();
  // }

  if (position === 'down') {
    targetOption = listItems[0];
  } else {
    targetOption = listItems[listItems.length - 1];
  }
  (targetOption as HTMLElement).focus();
  targetOption.scrollIntoView({ block: 'center' });
  setFocusedOption && setFocusedOption(targetOption);
};
