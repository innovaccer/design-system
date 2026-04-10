import React from 'react';
import { OptionType } from '@/common.type';

const FOCUSABLE_ELEMENTS_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Returns the next (or previous with shiftKey) focusable element in document order after the trigger.
 * Used when Tab is pressed inside the popover but the focus trap misses (e.g. options have tabindex=-1).
 * Queries from document.body so it works with portaled popovers.
 * Excludes focusables inside excludeContainer (e.g. the popover) so we do not focus an element inside the closing popover.
 */
export const getNextFocusableAfterTrigger = (
  startNode: HTMLElement | null,
  shiftKey: boolean,
  excludeContainer?: HTMLElement | null
): HTMLElement | null => {
  if (!startNode) return null;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node: HTMLElement) => {
      // Skip the container we want to exclude (the popover itself)
      if (excludeContainer && (node === excludeContainer || excludeContainer.contains(node))) {
        return NodeFilter.FILTER_REJECT; // Reject skips this node AND its children
      }

      // Skip descendants of the trigger element to avoid trapping focus in composite triggers
      if (node !== startNode && startNode.contains(node)) {
        return NodeFilter.FILTER_REJECT;
      }

      // Skip inherently hidden elements
      if (node.hasAttribute('disabled') || node.getAttribute('aria-hidden') === 'true') {
        return NodeFilter.FILTER_SKIP;
      }

      // Check if it matches our focusable selector
      if (node.matches(FOCUSABLE_ELEMENTS_SELECTOR)) {
        // Only do the expensive style check if it's actually focusable
        const style = window.getComputedStyle(node);
        if (style.visibility !== 'hidden' && style.display !== 'none') {
          return NodeFilter.FILTER_ACCEPT;
        }
      }

      return NodeFilter.FILTER_SKIP;
    },
  });

  walker.currentNode = startNode;

  if (shiftKey) {
    return (walker.previousNode() as HTMLElement) || null;
  } else {
    return (walker.nextNode() as HTMLElement) || null;
  }
};

/** Returns focusable elements inside container (for focus trap). Excludes elements with tabindex="-1" so e.g. checkboxes inside list options do not get their own tab stop. */
export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const selector =
    'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  return Array.from(container.querySelectorAll<HTMLElement>(selector));
};

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
      event.preventDefault();
      setOpenPopover?.(true);
      setHighlightFirstItem?.(true);
      break;
    case 'ArrowUp':
      event.preventDefault();
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
  const listItems = listRef.current?.querySelectorAll('[data-test="DesignSystem-Select-Option"]');
  let targetOption;

  if (position === 'down') {
    targetOption = searchInput?.[0] || listItems?.[0];
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
  _focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>,
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>,
  listRef?: any,
  withSearch?: boolean,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>,
  triggerRef?: any
) => {
  const currentTarget = event.currentTarget as HTMLElement;

  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      navigateOptions('up', currentTarget, setFocusedOption, listRef, withSearch);
      break;
    case 'ArrowDown':
      event.preventDefault();
      navigateOptions('down', currentTarget, setFocusedOption, listRef, withSearch);
      break;
    case 'Enter':
      event.preventDefault();
      handleEnterKey(event.currentTarget as HTMLElement);
      setHighlightLastItem?.(false);
      setHighlightFirstItem?.(false);
      break;
    case ' ':
    case 'Spacebar':
      event.preventDefault();
      handleEnterKey(event.currentTarget as HTMLElement);
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
  eventTarget: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  listRef?: any,
  withSearch?: boolean
) => {
  const listItems = listRef.current.querySelectorAll('[data-test="DesignSystem-Select-Option"]');
  let index = Array.from(listItems).findIndex((item) => {
    return item == eventTarget;
  });

  if (
    (withSearch && index <= 0 && direction === 'up') ||
    (withSearch && index === listItems.length - 1 && direction === 'down')
  ) {
    const searchInput = listRef.current.querySelector('[data-test="DesignSystem-Select--Input"]') as HTMLElement;
    if (searchInput) {
      searchInput.focus();
      setFocusedOption?.(searchInput);
      return;
    }
  }

  if (index === -1) {
    index = direction === 'up' ? listItems.length - 1 : 0;
  } else {
    index = direction === 'up' ? (index - 1 + listItems.length) % listItems.length : (index + 1) % listItems.length;
  }

  const targetOption = listItems[index] as HTMLElement | undefined;

  if (targetOption) {
    targetOption.focus();
    setFocusedOption && setFocusedOption(targetOption);
    if (typeof targetOption.scrollIntoView === 'function') {
      targetOption.scrollIntoView({ block: 'center' });
    }
  } else {
    setFocusedOption && setFocusedOption(undefined);
  }
};

export const handleInputKeyDown = (
  event: React.KeyboardEvent,
  listRef: any,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>,
  triggerRef?: any
) => {
  const listItems = listRef.current?.querySelectorAll('[data-test="DesignSystem-Select-Option"]');

  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      if (listItems?.length) {
        const targetOption = listItems[listItems.length - 1] as HTMLElement;
        targetOption.focus();
        if (typeof targetOption.scrollIntoView === 'function') {
          targetOption.scrollIntoView({ block: 'center' });
        }
        setFocusedOption?.(targetOption);
      } else if (listRef.current) {
        const focusables = getFocusableElements(listRef.current);
        // Exclude the search input itself from the focusables we want to focus
        const validFocusables = focusables.filter((f) => f !== event.target);
        if (validFocusables.length > 0) {
          const lastFocusable = validFocusables[validFocusables.length - 1];
          lastFocusable.focus();
        }
      }
      break;
    case 'ArrowDown':
      event.preventDefault();
      if (listItems?.length) {
        const targetOption = listItems[0] as HTMLElement;
        targetOption.focus();
        if (typeof targetOption.scrollIntoView === 'function') {
          targetOption.scrollIntoView({ block: 'center' });
        }
        setFocusedOption?.(targetOption);
      } else if (listRef.current) {
        const focusables = getFocusableElements(listRef.current);
        const currentIndex = focusables.indexOf(event.target as HTMLElement);
        const nextFocusable = focusables[currentIndex + 1];
        if (nextFocusable) nextFocusable.focus();
      }
      break;
    case 'Escape':
      setOpenPopover?.(false);
      triggerRef?.current?.focus();
      setFocusedOption?.(undefined);
      break;
    default:
      break;
  }
};

export const LISTBOX_ITEM_SELECTOR = '[data-test="DesignSystem-Select-Option"]';

function isOptionFocusable(el: Element): boolean {
  const inner = el.querySelector('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  return inner?.getAttribute('data-disabled') !== 'true' && el.getAttribute('disabled') === null;
}

/**
 * Returns the index of the option that should have tabindex=0 (roving tabstop).
 * If focusedOption is in the list, that option's index; otherwise the first selected
 * option among focusable options, or the first focusable option; -1 if list is empty or no focusable.
 */
export const getRovingIndex = (
  listRef: React.RefObject<HTMLDivElement | null> | null,
  focusedOption: HTMLElement | undefined
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

  const firstSelectedIdx = items.findIndex(
    (el) => isOptionFocusable(el) && el.getAttribute('aria-selected') === 'true'
  );
  if (firstSelectedIdx !== -1) return firstSelectedIdx;

  return focusableIndices[0];
};

/**
 * Focus the initial element when popover opens: search input if present, otherwise the option at roving index (first or first-selected).
 * Returns the roving index for the list (or -1 if search was focused or list empty).
 */
export const focusPopoverInitial = (
  listRef: React.RefObject<HTMLDivElement | null> | null,
  setFocusedOption: React.Dispatch<React.SetStateAction<HTMLElement | undefined>> | undefined
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

  const idx = getRovingIndex(listRef, undefined);
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
