import React from 'react';

export const handleKeyDown = (
  event: React.KeyboardEvent,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>,
  menuTriggerRef?: any,
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>,
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>,
  listRef?: any,
  isSubMenuTrigger?: boolean
) => {
  // console.log('inside handlekeydownn', event.key, 'listReffff', listRef);

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
      handleEnterKey(focusedOption, menuTriggerRef);
      setHighlightLastItem?.(false);
      setHighlightFirstItem?.(false);
      break;
    case 'Escape':
      setOpenPopover?.(false);
      menuTriggerRef.current.focus();
      setFocusedOption?.(undefined);
      break;
    case 'Tab':
      setOpenPopover?.(false);
      break;
    case 'ArrowRight':
      navigateSubMenu(isSubMenuTrigger, 'right', listRef);
      break;
    case 'ArrowLeft':
      navigateSubMenu(isSubMenuTrigger, 'left', listRef);
      break;
    default:
      break;
  }
};

const handleEnterKey = (focusedOption: Element | undefined, menuTriggerRef?: any) => {
  (focusedOption as HTMLElement)?.click();
  menuTriggerRef.current.focus();
};

const navigateOptions = (
  direction: string,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  listRef?: any
) => {
  console.log('nesting navigate optionbbbss', direction, 'listRef', listRef);
  const listItems = listRef.current?.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
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

const navigateSubMenu = (isSubMenuTrigger?: boolean, direction?: string, listRef?: any) => {
  console.log('navigateeeeer option', listRef, 'current', listRef.current);
  if (isSubMenuTrigger) {
    if (direction === 'right') {
      const listItems = listRef.current?.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
      (listItems[0] as HTMLElement).focus();
    }
  } else if (direction === 'left') {
    const trigger = document?.querySelector('[data-name="user-admin"]');
    (trigger as HTMLElement)?.focus();
  }
};
