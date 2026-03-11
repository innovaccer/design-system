import React from 'react';
import { OptionType } from '@/common.type';

export const mapInitialValue = (multiSelect: boolean, selectedValue: OptionType | OptionType[] | undefined) => {
  if (multiSelect) {
    return selectedValue && !Array.isArray(selectedValue) ? [selectedValue] : selectedValue || [];
  } else {
    return selectedValue || { label: '', value: '' };
  }
};

const compareOptions = (option1?: OptionType, option2?: OptionType): boolean => {
  if (!option1 || !option2) {
    return false;
  }

  // If both options have optionIDs, compare by id
  if (option1.id && option2.id) {
    return option1.id === option2.id;
  }

  // Otherwise, always compare by label for backward compatibility
  // This handles cases where:
  // - Both have no id (legacy behavior)
  // - One has id and other doesn't (mixed legacy/new code)
  return option1.label === option2.label;
};

export const elementExist = (targetObject: OptionType, mainList: OptionType | OptionType[] | undefined) => {
  if (!Array.isArray(mainList)) {
    return compareOptions(targetObject, mainList) ? 0 : -1;
  }

  return mainList.findIndex((item) => compareOptions(targetObject, item));
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
    case ' ':
    case 'Spacebar':
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
    targetOption = listItems?.[0] ?? searchInput?.[0];
  } else {
    targetOption = listItems?.[listItems.length - 1];
  }

  (targetOption as HTMLElement)?.focus();
  if (typeof (targetOption as HTMLElement)?.scrollIntoView === 'function') {
    (targetOption as HTMLElement).scrollIntoView({ block: 'center' });
  }
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
  triggerRef?: any,
  setRovingIndex?: React.Dispatch<React.SetStateAction<number>>
) => {
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      navigateOptions('up', focusedOption, setFocusedOption, listRef, withSearch, setRovingIndex);
      break;
    case 'ArrowDown':
      event.preventDefault();
      navigateOptions('down', focusedOption, setFocusedOption, listRef, withSearch, setRovingIndex);
      break;
    case 'Enter':
      event.preventDefault();
      handleEnterKey(focusedOption);
      setHighlightLastItem?.(false);
      setHighlightFirstItem?.(false);
      break;
    case ' ':
    case 'Spacebar':
      event.preventDefault();
      handleEnterKey(focusedOption);
      setHighlightLastItem?.(false);
      setHighlightFirstItem?.(false);
      break;
    case 'Home':
      event.preventDefault();
      focusListItem('down', setFocusedOption, listRef);
      break;
    case 'End':
      event.preventDefault();
      focusListItem('up', setFocusedOption, listRef);
      break;
    case 'Tab':
      setHighlightLastItem?.(false);
      setHighlightFirstItem?.(false);
      break;
    case 'Escape':
      event.preventDefault();
      setOpenPopover?.(false);
      if (triggerRef?.current) {
        triggerRef.current.focus();
      }
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
  withSearch?: boolean,
  setRovingIndex?: React.Dispatch<React.SetStateAction<number>>
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
    setRovingIndex?.(-1);
  } else {
    index = direction === 'up' ? (index - 1 + listItems.length) % listItems.length : (index + 1) % listItems.length;

    const targetOption = listItems[index];

    (targetOption as HTMLElement).focus();
    setFocusedOption && setFocusedOption(targetOption);
    // Synchronous roving index update eliminates the Tab-timing race where tabIndex
    // is still -1 in the DOM while keyboard events fire immediately after arrow navigation.
    setRovingIndex?.(index);
    if (typeof (targetOption as HTMLElement).scrollIntoView === 'function') {
      (targetOption as HTMLElement).scrollIntoView({ block: 'center' });
    }
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
  if (typeof (targetOption as HTMLElement)?.scrollIntoView === 'function') {
    (targetOption as HTMLElement).scrollIntoView({ block: 'center' });
  }
  setFocusedOption && setFocusedOption(targetOption);
};

export const LISTBOX_ITEM_SELECTOR = '[data-test="DesignSystem-Listbox-ItemWrapper"]';

function isOptionFocusable(el: Element): boolean {
  return el.getAttribute('data-disabled') !== 'true';
}

/**
 * Returns the index of the selected option from React state (option values in DOM order).
 * Avoids DOM timing issues where aria-selected is not yet flushed on re-open.
 */
function getSelectedIndexFromState(
  selectValue: OptionType | OptionType[] | undefined,
  optionValuesOrder: OptionType[]
): number {
  if (!selectValue || optionValuesOrder.length === 0) return -1;
  if (Array.isArray(selectValue)) {
    return optionValuesOrder.findIndex((opt) => elementExist(opt, selectValue) !== -1);
  }
  return optionValuesOrder.findIndex((opt) => compareOptions(opt, selectValue));
}

/**
 * Returns the index of the option that should have tabindex=0 (roving tabstop).
 * If focusedOption is in the list, that option's index; otherwise the first selected
 * option (from state when optionValuesOrder is provided, else from DOM aria-selected),
 * or the first focusable option; -1 if list is empty or no focusable.
 */
export const getRovingIndex = (
  listRef: React.RefObject<HTMLDivElement | null> | null,
  focusedOption: HTMLElement | undefined,
  selectValue?: OptionType | OptionType[] | undefined,
  optionValuesOrder?: OptionType[]
): number => {
  const list = listRef?.current?.querySelectorAll(LISTBOX_ITEM_SELECTOR);
  if (!list?.length) return -1;

  const items = Array.from(list) as HTMLElement[];

  if (focusedOption) {
    const focusedIdx = items.indexOf(focusedOption);
    if (focusedIdx !== -1 && isOptionFocusable(focusedOption)) return focusedIdx;
  }

  const focusableIndices = items.map((el, i) => (isOptionFocusable(el) ? i : -1)).filter((i) => i !== -1);
  if (focusableIndices.length === 0) return -1;

  if (selectValue && optionValuesOrder && optionValuesOrder.length > 0) {
    const selectedIdx = getSelectedIndexFromState(selectValue, optionValuesOrder);
    if (selectedIdx >= 0 && selectedIdx < items.length && isOptionFocusable(items[selectedIdx])) {
      return selectedIdx;
    }
  }

  const firstSelectedIdx = items.findIndex(
    (el) => isOptionFocusable(el) && el.getAttribute('aria-selected') === 'true'
  );
  if (firstSelectedIdx !== -1) return firstSelectedIdx;

  return focusableIndices[0];
};

/**
 * Focus the initial element when popover opens: search input if present, otherwise the option at roving index (first or first-selected).
 * Returns the roving index for the list (or -1 if search was focused or list empty).
 * optionValuesOrder (from state/ref) is used to compute selected index so focus lands on the selected option on re-open.
 */
export const focusPopoverInitial = (
  listRef: React.RefObject<HTMLDivElement | null> | null,
  setFocusedOption: React.Dispatch<React.SetStateAction<HTMLElement | undefined>> | undefined,
  selectValue: OptionType | OptionType[] | undefined,
  optionValuesOrder?: OptionType[]
): number => {
  const container = listRef?.current;
  if (!container) return -1;

  const searchInput = container.querySelector<HTMLElement>('[data-test="DesignSystem-Select--Input"]');
  if (searchInput) {
    searchInput.focus();
    setFocusedOption?.(searchInput);
    if (typeof searchInput.scrollIntoView === 'function') {
      searchInput.scrollIntoView({ block: 'center' });
    }
    return -1;
  }

  const idx = getRovingIndex(listRef, undefined, selectValue, optionValuesOrder);
  if (idx >= 0) {
    const list = container.querySelectorAll(LISTBOX_ITEM_SELECTOR);
    const option = list?.[idx] as HTMLElement | undefined;
    if (option) {
      option.focus();
      setFocusedOption?.(option);
      if (typeof option.scrollIntoView === 'function') {
        option.scrollIntoView({ block: 'center' });
      }
    }
  }
  return idx;
};
