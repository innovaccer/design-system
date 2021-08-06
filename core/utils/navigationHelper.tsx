export type Menu = {
  name: string;
  label: string;
  link?: string;
  icon?: string;
  group?: string;
  count?: number;
  disabled?: boolean;
  subMenu?: Menu[];
};

export type ActiveMenu = ({ name: string } | { link: string }) & Partial<Menu>;

export const getTextAppearance = (isActive: boolean, disabled?: boolean) => {
  return disabled ? 'disabled' : isActive ? 'link' : 'default';
};

export const getIconAppearance = (isActive: boolean, disabled?: boolean) => {
  return disabled ? 'disabled' : isActive ? 'info' : 'default';
};

export const getPillsAppearance = (isActive: boolean) => {
  return isActive ? 'primary' : 'secondary';
};

export const getMenu = (menus: Menu[], active: ActiveMenu): Menu | null => {
  for (const menu of menus) {
    if ((active.name && menu.name === active.name) || (active.link && menu.link === active.link)) {
      return menu;
    }
    if (menu.subMenu) {
      const activeMenu = menu.subMenu.find(
        (submenu) => (active.name && submenu.name === active.name) || (active.link && submenu.link === active.link)
      );
      if (activeMenu) return activeMenu;
    }
  }
  return null;
};

export const isMenuActive = (menus: Menu[], menu: Menu, active?: ActiveMenu): boolean => {
  if (active) {
    const currActiveMenu = getMenu(menus, active);
    return (
      !!currActiveMenu &&
      (currActiveMenu === menu ||
        currActiveMenu.name.split('.')[0] === menu.name ||
        currActiveMenu.name === menu.name ||
        (!!currActiveMenu.link && currActiveMenu.link === menu.link))
    );
  }
  return false;
};
