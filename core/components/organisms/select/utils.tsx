import React from 'react';
import { OptionType } from '@/common.type';

export const mapInitialValue = (multiSelect: boolean, selectedValue: OptionType | OptionType[] | undefined) => {
  if (multiSelect) {
    return selectedValue && !Array.isArray(selectedValue) ? [selectedValue] : selectedValue || [];
  } else {
    return selectedValue || { label: '', value: '' };
  }
};

export const elementExist = (targetObject: OptionType, mainList: OptionType | OptionType[] | undefined) => {
  if (!Array.isArray(mainList)) {
    return targetObject.label === mainList?.label ? 0 : -1;
  }
  return mainList.findIndex((item) => item.label === targetObject.label);
};

export const removeOrAddToList = (targetObject: OptionType, prevList: OptionType[]) => {
  const newList = [...prevList];
  const existingIndex = elementExist(targetObject, newList);
  if (existingIndex !== -1) {
    newList.splice(existingIndex, 1);
  } else {
    newList.push(targetObject);
  }
  return newList;
};

export const computeValue = (
  multiSelect: boolean | undefined,
  selectValue: any,
  setLabel?: (count: number) => string | undefined
) => {
  if (!multiSelect) {
    return selectValue?.label?.trim() || '';
  }
  const label = setLabel?.(selectValue.length);

  if (label) {
    return label;
  }

  if (selectValue.length <= 2) {
    return selectValue.map((pair: any) => `${pair.label}`).join(', ');
  } else {
    return `${selectValue.length} Selected`;
  }
};

export const handleKeyDownTrigger = (
  event: React.KeyboardEvent,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>,
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>,
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  switch (event.key) {
    case 'Enter':
      event.preventDefault();
      setOpenPopover?.(true);
      setHighlightFirstItem?.(true);
      break;
    case 'ArrowDown':
      setOpenPopover?.(true);
      setHighlightFirstItem?.(true);
      break;
    case 'ArrowUp':
      setOpenPopover?.(true);
      setHighlightLastItem?.(true);
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
  const searchInput = listRef.current?.querySelectorAll('[data-test="DesignSystem-Select--Input"]');
  const listItems = listRef.current?.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  let targetOption;

  if (position === 'down') {
    targetOption = searchInput?.[0] || listItems?.[0];
  } else {
    targetOption = listItems?.[listItems.length - 1];
  }

  (targetOption as HTMLElement)?.focus();
  targetOption?.scrollIntoView({ block: 'center' });
  setFocusedOption && setFocusedOption(targetOption);
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
    case 'Tab':
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

export const handleEnterKey = (focusedOption: Element | undefined) => {
  (focusedOption as HTMLElement)?.click();
};

export const navigateOptions = (
  direction: string,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  listRef?: any,
  withSearch?: boolean
) => {
  const listItems = listRef.current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  let index = Array.from(listItems).findIndex((item) => {
    return item == focusedOption;
  });

  if (index === -1) {
    index = direction === 'up' ? listItems.length - 1 : 0;
  } else if (
    (withSearch && index === 0 && direction === 'up') ||
    (withSearch && index === listItems.length - 1 && direction === 'down')
  ) {
    const searchInput = listRef.current.querySelector('[data-test="DesignSystem-Select--Input"]');
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
  targetOption?.scrollIntoView({ block: 'center' });
  setFocusedOption && setFocusedOption(targetOption);
};
