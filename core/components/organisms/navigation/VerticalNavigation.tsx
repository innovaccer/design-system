import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon } from '@/index';
import {
  getTextAppearance,
  getIconAppearance,
  getMenu,
  isMenuActive,
  Menu,
  ActiveMenu,
} from '@/utils/navigationHelper';
import styles from '@css/components/navigation.module.css';

const { useState } = React;

export type LayoutType = 'vertical' | 'horizontal';
export type Align = 'left' | 'center';

export interface VerticalNavigationProps {
  /**
   * List of menus to be rendered
   *
   * <pre className="DocPage-codeBlock">
   * Menu: {
   *    name: string;
   *    label: string;
   *    link?: string;
   *    disabled?: boolean;
   *    count?: number;
   *    subMenu?: Menu[];
   *    icon?: string;
   * };
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | name | Menu name | |
   * | label | Menu display name | |
   * | link | Menu link | |
   * | disabled | Set menu as disabled | false |
   * | count | Value of Count (Max value 99) | |
   * | subMenu | Menu submenus of type `Menu[]` | |
   * | icon | Menu icon | |
   */
  menus: Menu[];
  /**
   * Sets menu as active
   */
  active?: ActiveMenu;
  /**
   * Callback to be called on Menu click**(only if it's not disabled)**
   */
  onClick?: (menu: Menu) => void;
  /**
   * Makes active menu rounded **(applicable only for type: `vertical` and `expanded` menu)**
   */
  rounded: boolean;
  /**
   * Set expanded state of `Navigation`**(applicable only for type: `vertical`)**
   */
  expanded: boolean;
  /**
   * Shows footer**(applicable only for type: `vertical`)**
   */
  footer?: boolean;
  /**
   * Callback to be called on Menu click**(only if it's not disabled)**
   */
  onToggle?: (expanded: boolean) => void;
  /**
   * Only one SubMenu visible at a time**(applicable only for type: `vertical`)**
   */
  autoCollapse: boolean;
}

export const VerticalNavigation = (props: VerticalNavigationProps) => {
  const { menus, active, onClick, expanded, rounded, onToggle, footer, autoCollapse } = props;

  const [menuState, setMenuState] = useState<Record<string, boolean>>({});

  React.useEffect(() => {
    if (props.active) {
      const currMenu = getMenu(menus, props.active);
      if (currMenu) updateMenuState(currMenu, true);
    }
  }, [props.active]);

  const updateMenuState = (menu: ActiveMenu, val?: boolean) => {
    const currMenu = getMenu(menus, menu);
    if (currMenu) {
      const nameSplit = currMenu.name.split('.');
      if (nameSplit.length > 1 || currMenu.subMenu) {
        const name = nameSplit[0];
        if (autoCollapse) {
          setMenuState({ [name]: val || !menuState[name] });
        } else {
          const menuData = { ...menuState };
          menuData[name] = val !== undefined ? val : !menuData[name];
          setMenuState(menuData);
        }
      } else {
        if (autoCollapse) {
          if (!expanded) setMenuState({});
        }
      }
    }
  };

  const onClickHandler = (menu: Menu) => {
    if (!menu.disabled) {
      if (menu.subMenu) {
        if (!expanded) {
          if (onClick) onClick(menu.subMenu[0]);
        } else {
          updateMenuState(menu);
        }
      } else {
        if (onClick) onClick(menu);
      }
    }
  };

  const list = menus.map((menu, index) => {
    const activeMenu = expanded && !menuState[menu.name] && isMenuActive(menus, menu, active);
    const activeMenuIcon = (!expanded && isMenuActive(menus, menu, active)) || activeMenu;

    const menuClasses = classNames({
      [styles['Navigation-menu']]: true,
      [styles['Navigation-menu--vertical']]: true,
      [styles['Navigation-menu--active']]: activeMenu,
      [styles['Navigation-menu--rounded']]: expanded && rounded,
    });

    const menuIconClasses = classNames({
      [styles['Navigation-menuIcon']]: true,
      [styles['Navigation-menuIcon--active']]: activeMenuIcon,
    });

    return (
      <div key={index} data-test="DesignSystem-Navigation-VerticalNavigation--menuWrapper">
        {/* TODO(a11y) */}
        {/* eslint-disable-next-line */}
        <div
          data-test="DesignSystem-Navigation-VerticalNavigation--menuItem"
          className={menuClasses}
          onClick={() => onClickHandler(menu)}
        >
          {menu.icon && (
            <Icon
              data-test="DesignSystem-Navigation-VerticalNavigation--menuIcon"
              className={menuIconClasses}
              name={menu.icon}
              appearance={getIconAppearance(activeMenuIcon, menu.disabled)}
            />
          )}
          {expanded && (
            <>
              <span className={styles['Navigation-menuLabel']}>
                <Text appearance={getTextAppearance(activeMenu, menu.disabled)} className="ellipsis--noWrap">
                  {menu.label}
                </Text>
              </span>
              {menu.subMenu && menu.subMenu.length > 0 && (
                <Icon
                  data-test="DesignSystem-Navigation-VerticalNavigation--expandedSubMenuIcon"
                  className="mx-4"
                  name={menuState[menu.name] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                  appearance="subtle"
                />
              )}
            </>
          )}
        </div>
        <div className={styles['Navigation-subMenu']}>
          {menuState[menu.name] &&
            menu.subMenu &&
            expanded &&
            menu.subMenu.map((subMenu, ind) => {
              const isActive = isMenuActive(menus, subMenu, active);

              const subMenuClasses = classNames(menuClasses, {
                [styles['Navigation-menu--subMenu']]: true,
                [styles['Navigation-menu--active']]: isActive,
              });

              return (
                // TODO(a11y)
                // eslint-disable-next-line
                <div
                  data-test="DesignSystem-Navigation-VerticalNavigation--subMenu"
                  key={ind}
                  className={subMenuClasses}
                  onClick={() => onClickHandler(subMenu)}
                >
                  <Text appearance={getTextAppearance(isActive, subMenu.disabled)} className="ellipsis--noWrap">
                    {subMenu.label}
                  </Text>
                </div>
              );
            })}
        </div>
      </div>
    );
  });

  const footerClasses = classNames(styles['Navigation-footer'], styles['Navigation-footer--border']);

  const IconClassName = classNames(styles['Navigation-menuIcon'], styles['Navigation-menuIcon--footer']);

  return (
    <>
      <div className={styles['Navigation-body']}>{list}</div>
      {footer && (
        <div className={footerClasses}>
          <Icon className={IconClassName} name="menu_open" size={16} onClick={() => onToggle && onToggle(!expanded)} />
        </div>
      )}
    </>
  );
};

VerticalNavigation.defaultProps = {
  expanded: true,
  autoCollapse: true,
  rounded: false,
};

export default VerticalNavigation;
