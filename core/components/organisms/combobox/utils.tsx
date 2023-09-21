import React from 'react';

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
    const listItems = listRef.current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
    const listArr = Array.from(listItems);
    const index = listArr.findIndex((item) => {
      return item == focusedOption;
    });

    if (index === listArr.length - 1) {
      (listItems[0] as HTMLElement).focus();
      setFocusedOption && setFocusedOption(listItems[0]);
      listItems[0].scrollIntoView({ block: 'center' });
    }
  }
};

const navigateOptions = (
  direction: string,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  listRef?: any
) => {
  const listItems = listRef.current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  let index = Array.from(listItems).findIndex((item) => {
    return item == focusedOption;
  });

  if (index === -1) {
    index = direction === 'up' ? listItems.length - 1 : 0;
  } else {
    index = direction === 'up' ? (index - 1 + listItems.length) % listItems.length : (index + 1) % listItems.length;
  }

  const targetOption = listItems[index];

  (targetOption as HTMLElement).focus();
  setFocusedOption && setFocusedOption(targetOption);
  targetOption?.scrollIntoView?.({ block: 'center' });
};
