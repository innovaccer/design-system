import React from 'react';

export const handleKeyDown = (
  event: React.KeyboardEvent,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean | undefined>>,
  menuTriggerRef?: React.RefObject<HTMLButtonElement>,
  listRef?: React.RefObject<HTMLDivElement>,
  subListRef?: React.RefObject<HTMLDivElement> | null,
  isSubMenuTrigger?: boolean,
  triggerRef?: React.RefObject<HTMLDivElement> | React.MutableRefObject<HTMLDivElement>,
  menuID?: string,
  triggerID?: string,
  parentListRef?: React.RefObject<HTMLDivElement> | null
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
    case ' ':
      event.preventDefault();
      (focusedOption as HTMLElement)?.click();
      setOpenPopover?.(false);
      if (!isSubMenuTrigger) {
        menuTriggerRef?.current?.focus();
      }
      setFocusedOption?.(undefined);
      break;
    case 'Escape':
      setOpenPopover?.(false);
      if (triggerRef && !isSubMenuTrigger) {
        if (triggerRef.current) {
          triggerRef.current.focus();
        } else if (parentListRef?.current && triggerID) {
          const triggerEl = parentListRef.current.querySelector(`#${triggerID}`) as HTMLElement | null;
          triggerEl?.focus();
        }
      } else {
        menuTriggerRef?.current?.focus();
      }
      setFocusedOption?.(undefined);
      break;
    case 'Tab':
      setOpenPopover?.(false);
      setFocusedOption?.(undefined);
      break;
    case 'Home':
      event.preventDefault();
      navigateOptions('down', undefined, setFocusedOption, listRef);
      break;
    case 'End':
      event.preventDefault();
      navigateOptions('up', undefined, setFocusedOption, listRef);
      break;
    case 'ArrowRight':
      if (!isSubMenuTrigger && triggerID && parentListRef?.current) {
        // Inside a left-placed submenu ArrowRight is the close direction.
        const placementR = document.querySelector(`[data-name="${menuID}"]`)?.getAttribute('data-placement');
        if (placementR?.includes('left')) {
          setOpenPopover?.(false);
          const triggerEl = parentListRef.current.querySelector(`#${triggerID}`) as HTMLElement | null;
          triggerEl?.focus();
          setFocusedOption?.(undefined);
          break;
        }
      }
      navigateSubMenu(isSubMenuTrigger, 'right', subListRef, menuID, triggerID, parentListRef);
      break;
    case 'ArrowLeft':
      if (!isSubMenuTrigger && triggerID && parentListRef?.current) {
        // Inside a right-placed submenu ArrowLeft is the close direction.
        const placementL = document.querySelector(`[data-name="${menuID}"]`)?.getAttribute('data-placement');
        if (!placementL || placementL.includes('right')) {
          setOpenPopover?.(false);
          const triggerEl = parentListRef.current.querySelector(`#${triggerID}`) as HTMLElement | null;
          triggerEl?.focus();
          setFocusedOption?.(undefined);
          break;
        }
      }
      navigateSubMenu(isSubMenuTrigger, 'left', subListRef, menuID, triggerID, parentListRef);
      break;
    default:
      break;
  }
};

const MENU_LIST_ITEM_SELECTOR = '[data-test="DesignSystem-Menu-ListItem"]';

const navigateOptions = (
  direction: string,
  focusedOption: Element | undefined,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  listRef?: any
) => {
  const listItems = listRef.current?.querySelectorAll(MENU_LIST_ITEM_SELECTOR);
  if (!listItems?.length) {
    return;
  }

  let index = Array.from(listItems).findIndex((item) => {
    return item == focusedOption;
  });

  if (index === -1) {
    index = direction === 'up' ? listItems.length - 1 : 0;
  } else {
    index = direction === 'up' ? (index - 1 + listItems.length) % listItems.length : (index + 1) % listItems.length;
  }

  const targetOption = listItems[index] as HTMLElement | undefined;
  targetOption?.focus();
  setFocusedOption && setFocusedOption(targetOption);
  targetOption?.scrollIntoView?.({ block: 'center' });
};

const navigateSubMenu = (
  isSubMenuTrigger?: boolean,
  direction?: string,
  subListRef?: React.RefObject<HTMLDivElement> | null,
  menuID?: string,
  triggerID?: string,
  parentListRef?: React.RefObject<HTMLDivElement> | null
) => {
  const element = document.querySelector(`[data-name="${menuID}"]`);
  const menuPlacement = element?.getAttribute('data-placement');

  if (isSubMenuTrigger) {
    if (
      (direction === 'right' && menuPlacement?.includes('right')) ||
      (direction === 'left' && menuPlacement?.includes('left'))
    ) {
      const listItems = subListRef?.current?.querySelectorAll(MENU_LIST_ITEM_SELECTOR);
      (listItems?.[0] as HTMLElement | undefined)?.focus();
    }
  } else if (
    (direction === 'left' && menuPlacement?.includes('right')) ||
    (direction === 'right' && menuPlacement?.includes('left'))
  ) {
    const triggerElement = parentListRef?.current?.querySelector(`#${triggerID}`)?.firstChild;
    (triggerElement as HTMLElement)?.focus();
  }
};
