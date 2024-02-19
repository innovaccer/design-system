import React from 'react';

export const handleKeyDown = (
  event: React.KeyboardEvent,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<Element | undefined>>,
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>,
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>,
  listRef?: any,
  withSearch?: boolean
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
    default:
      break;
  }
};

const handleEnterKey = (focusedOption: Element | undefined) => {
  (focusedOption as HTMLElement)?.click();
};

const navigateSelectedOption = (
  index: number,
  withSearch?: boolean,
  listItems?: any,
  direction?: string,
  listRef?: any,
  setFocusedOption?: React.Dispatch<React.SetStateAction<Element | undefined>>
) => {
  console.log('tttindexxx', index);
  // if (withSearch) {
  //   const searchInput = listRef.current.querySelector('[data-test="DesignSystem-SelectionAvatar--Input"]');
  //   console.log('ttt inside iff');
  //   if ((index === 0 && direction === 'up') || (index === listItems.length - 2 && direction === 'down')) {
  //     console.log('tttfocus search');
  //     searchInput.focus();
  //     setFocusedOption && setFocusedOption(searchInput);
  //     return;
  //   }
  // }
  const searchInput = listRef.current.querySelector('[data-test="DesignSystem-SelectionAvatar--Input"]');
  searchInput.focus();
  setFocusedOption && setFocusedOption(searchInput);
};

const navigateOptions = (
  direction: string,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<Element | undefined>>,
  listRef?: any,
  withSearch?: boolean
) => {
  const listItems = listRef.current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  let index = Array.from(listItems).findIndex((item) => {
    return item == focusedOption;
  });

  console.log('tttwithSearchwithSearch', withSearch, 'index', index, 'listItems[index]', listItems[index]);

  if (index === -1) {
    console.log('ttt11');
    index = direction === 'up' ? listItems.length - 1 : 0;
  } else if (
    (withSearch && index === 0 && direction === 'up') ||
    (withSearch && index === listItems.length - 1 && direction === 'down')
  ) {
    console.log('ttt22');

    navigateSelectedOption(index, withSearch, listItems, direction, listRef, setFocusedOption);
    // return;
  } else {
    console.log('ttt333');

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
  setFocusedOption: React.Dispatch<React.SetStateAction<Element | undefined>>
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
    default:
      break;
  }

  (targetOption as HTMLElement)?.focus();
  targetOption?.scrollIntoView({ block: 'center' });
  setFocusedOption && setFocusedOption(targetOption);
};
