import React from 'react';

export const handleKeyDown = (
  event: React.KeyboardEvent,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<Element | undefined>>,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>,
  inputTriggerRef?: any
) => {
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      navigateOptions('up', focusedOption, setFocusedOption);
      break;
    case 'ArrowDown':
      event.preventDefault();
      navigateOptions('down', focusedOption, setFocusedOption);
      break;
    case 'Enter':
      handleEnterKey(focusedOption);
      break;
    case 'Escape':
      setOpenPopover?.(false);
      console.log('inputTriggerRef.current', inputTriggerRef.current);
      inputTriggerRef.current.focus();
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
  setFocusedOption?: React.Dispatch<React.SetStateAction<Element | undefined>>
) => {
  const listItems = document.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  let index = Array.from(listItems).findIndex((item) => {
    return item == focusedOption;
  });

  if (index === -1) {
    index = direction === 'up' ? listItems.length - 1 : 0;
  } else {
    index = direction === 'up' ? (index - 1 + listItems.length) % listItems.length : (index + 1) % listItems.length;
  }

  const targetOption = listItems[index];
  console.log('targetOptiontargetOption', targetOption);
  (targetOption as HTMLElement).focus();
  setFocusedOption && setFocusedOption(targetOption);
  targetOption.scrollIntoView({ block: 'center' });
};
