import React from 'react';
import { Menu, ActiveMenu, getMenu } from '@/utils/navigationHelper';

const VERTICAL_NAV_ITEM_SELECTOR = '[data-menu-name]';

/**
 * Get all visible (focusable, non-disabled) menu items from the VerticalNav container.
 * Items are returned in DOM order.
 */
export const getVisibleMenuItems = (container: HTMLElement | null): HTMLElement[] => {
  if (!container) return [];
  const items = Array.from(container.querySelectorAll<HTMLElement>(VERTICAL_NAV_ITEM_SELECTOR));
  return items.filter((el) => el.getAttribute('data-disabled') !== 'true');
};

/**
 * Get the index of the currently focused item within the visible items list.
 */
const getFocusedIndex = (items: HTMLElement[]): number => {
  const active = document.activeElement as HTMLElement | null;
  if (!active) return -1;
  const focused = active.closest?.('[data-menu-name]') as HTMLElement | null;
  if (!focused) return -1;
  return items.findIndex((el) => el === focused);
};

/**
 * Focus an item and scroll it into view.
 */
const focusItem = (item: HTMLElement): void => {
  item.focus({ preventScroll: true });
  if (typeof item.scrollIntoView === 'function') {
    item.scrollIntoView({ block: 'nearest' });
  }
};

export interface VerticalNavKeyDownOptions {
  containerRef: React.RefObject<HTMLElement | null>;
  setFocusedItemName: React.Dispatch<React.SetStateAction<string | null>>;
  menuState: Record<string, boolean>;
  subMenuExpandedState: Record<string, boolean>;
  setMenuState: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  setSubMenuExpandedState: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  menus: Menu[];
  expanded: boolean;
  autoCollapse: boolean;
}

export const handleVerticalNavKeyDown = (event: React.KeyboardEvent, options: VerticalNavKeyDownOptions): void => {
  const {
    containerRef,
    setFocusedItemName,
    menuState,
    subMenuExpandedState,
    setMenuState,
    setSubMenuExpandedState,
    menus,
    expanded,
    autoCollapse,
  } = options;

  const items = getVisibleMenuItems(containerRef.current);
  if (items.length === 0) return;

  const currentIndex = getFocusedIndex(items);
  const isFocusedInside = currentIndex >= 0;

  const getParentMenuName = (menuName: string): string | null => {
    const dotIndex = menuName.indexOf('.');
    return dotIndex > 0 ? menuName.slice(0, dotIndex) : null;
  };

  const hasSubmenu = (menuName: string): boolean => {
    const menu = menus.find((m) => m.name === menuName);
    return !!(menu?.subMenu && menu.subMenu.length > 0);
  };

  const isSubmenuExpanded = (menuName: string): boolean => {
    return !!(menuState[menuName] || subMenuExpandedState[menuName]);
  };

  const expandSubmenu = (menuName: string): void => {
    if (!expanded || !hasSubmenu(menuName)) return;
    if (autoCollapse) {
      setMenuState({ [menuName]: true });
      setSubMenuExpandedState({ [menuName]: true });
    } else {
      setSubMenuExpandedState((prev) => ({ ...prev, [menuName]: true }));
    }
  };

  const collapseSubmenu = (menuName: string): void => {
    if (!expanded || !hasSubmenu(menuName)) return;
    setMenuState((prev) => ({ ...prev, [menuName]: false }));
    setSubMenuExpandedState((prev) => ({ ...prev, [menuName]: false }));
  };

  switch (event.key) {
    case 'ArrowDown': {
      event.preventDefault();
      if (!isFocusedInside) {
        focusItem(items[0]);
        setFocusedItemName(items[0].getAttribute('data-menu-name'));
      } else {
        const nextIndex = Math.min(currentIndex + 1, items.length - 1);
        focusItem(items[nextIndex]);
        setFocusedItemName(items[nextIndex].getAttribute('data-menu-name'));
      }
      break;
    }

    case 'ArrowUp': {
      event.preventDefault();
      if (!isFocusedInside) {
        focusItem(items[items.length - 1]);
        setFocusedItemName(items[items.length - 1].getAttribute('data-menu-name'));
      } else {
        const prevIndex = Math.max(currentIndex - 1, 0);
        focusItem(items[prevIndex]);
        setFocusedItemName(items[prevIndex].getAttribute('data-menu-name'));
      }
      break;
    }

    case 'ArrowRight': {
      event.preventDefault();
      if (!isFocusedInside) break;
      const currentName = items[currentIndex].getAttribute('data-menu-name');
      if (!currentName) break;
      const parentName = getParentMenuName(currentName);
      if (parentName) {
        // ArrowRight on a submenu item is a no-op (leaf node)
        break;
      } else if (hasSubmenu(currentName) && !isSubmenuExpanded(currentName)) {
        expandSubmenu(currentName);
      } else if (hasSubmenu(currentName) && isSubmenuExpanded(currentName)) {
        // Move to first child if parent has submenu and is expanded
        const firstChildIndex = currentIndex + 1;
        if (firstChildIndex < items.length) {
          const childName = items[firstChildIndex].getAttribute('data-menu-name');
          if (childName && getParentMenuName(childName) === currentName) {
            focusItem(items[firstChildIndex]);
            setFocusedItemName(childName);
          }
        }
      }
      break;
    }

    case 'ArrowLeft': {
      event.preventDefault();
      if (!isFocusedInside) break;
      const currentName = items[currentIndex].getAttribute('data-menu-name');
      if (!currentName) break;
      const parentName = getParentMenuName(currentName);
      if (parentName) {
        const parentIndex = items.findIndex((el) => el.getAttribute('data-menu-name') === parentName);
        if (parentIndex >= 0) {
          focusItem(items[parentIndex]);
          setFocusedItemName(parentName);
        }
      } else if (hasSubmenu(currentName) && isSubmenuExpanded(currentName)) {
        collapseSubmenu(currentName);
      }
      break;
    }

    case 'Home': {
      event.preventDefault();
      focusItem(items[0]);
      setFocusedItemName(items[0].getAttribute('data-menu-name'));
      break;
    }

    case 'End': {
      event.preventDefault();
      focusItem(items[items.length - 1]);
      setFocusedItemName(items[items.length - 1].getAttribute('data-menu-name'));
      break;
    }

    case ' ':
    case 'Space':
    case 'Spacebar': {
      event.preventDefault();
      if (isFocusedInside) {
        (items[currentIndex] as HTMLElement).click();
      }
      break;
    }

    case 'Enter': {
      if (isFocusedInside) {
        event.preventDefault();
        (items[currentIndex] as HTMLElement).click();
      }
      break;
    }

    case 'Tab':
      break;

    default:
      break;
  }
};

/**
 * Get the first visible (non-disabled, would-render) menu item name.
 * Used for roving tabindex when no active/focused item is set.
 */
export const getFirstVisibleMenuItemName = (menus: Menu[], expanded: boolean): string | null => {
  for (const menu of menus) {
    if (menu.disabled) continue;
    if (!expanded && !menu.icon) continue;
    return menu.name;
  }
  return null;
};

/**
 * Get the initial focused item name for roving tabindex.
 * Prefers the active menu; otherwise the first focusable item.
 * Only returns items that are actually rendered, visible, and enabled.
 * Supports both active.name and active.link.
 */
export const getInitialFocusedItemName = (
  menus: Menu[],
  active: { name?: string; link?: string } | undefined,
  menuState: Record<string, boolean>,
  subMenuExpandedState: Record<string, boolean>,
  expanded: boolean
): string | null => {
  if (!active) return null;

  // Use getMenu to support both active.name and active.link
  const activeMenu = getMenu(menus, active as ActiveMenu);
  if (!activeMenu) return null;

  // Skip disabled items - they can't be keyboard navigated
  if (activeMenu.disabled) return null;

  // Check if the active menu is a top-level menu item
  const isTopLevel = menus.some((m) => m.name === activeMenu.name);

  if (isTopLevel) {
    // In collapsed mode, only return if it has an icon (otherwise not rendered)
    if (!expanded && !activeMenu.icon) return null;
    return activeMenu.name;
  }

  // Active is a submenu item - find its parent
  for (const menu of menus) {
    if (menu.subMenu) {
      const activeSubMenu = menu.subMenu.find((s) => s.name === activeMenu.name);
      if (activeSubMenu) {
        // Submenu items are only rendered when parent is expanded
        const isParentExpanded = menuState[menu.name] || subMenuExpandedState[menu.name];
        // In collapsed mode, submenu items need an icon to render
        const isRenderedInCollapsed = !expanded && activeSubMenu.icon;

        if (!isParentExpanded || (!expanded && !isRenderedInCollapsed)) {
          // Active submenu item is not rendered; fallback to parent if it's visible and enabled
          if (menu.disabled) return null;
          if (!expanded && !menu.icon) return null;
          return menu.name;
        }
        // Submenu is rendered and enabled, return it
        return activeMenu.name;
      }
    }
  }

  return null;
};
