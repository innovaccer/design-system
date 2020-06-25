import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon } from '@/index';
const { useState } = React;

export type LayoutType = 'vertical' | 'horizontal';

export type Menu = {
  name: string;
  label: string;
  link?: string;
  icon?: string;
  disabled?: boolean;
  subMenu?: Menu[];
};

type ActiveMenu = ({ name: string } | { link: string }) & Partial<Menu>;

export interface NavigationProps {
  /**
   * `Navigation` component type
   */
  type?: LayoutType;
  /**
   * List of menus to be rendered
   * <pre className="DocPage-codeBlock">
   * Menu: {
   *    name: string;
   *    label: string;
   *    link: string;
   *    disabled?: boolean;
   *    subMenu?: Menu[];
   *    icon?: string;
   * };
   * </pre>
   */
  data: Menu[];
  /**
   * Sets menu as active
   */
  active?: ActiveMenu;
  /**
   * Callback to be called on Menu click**(only if it's not disabled)**
   */
  onClick?: (menu: Menu) => void;
  /**
   * Set expanded state of `Navigation`**(applicable only for type: `vertical`)**
   */
  expanded?: boolean;
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

/**
 * ####NOTE: Navigation(vertical) sets first subMenu(if present) active if the Navigation is collapsed.
 */
export const Navigation = (props: NavigationProps) => {
  const {
    type,
    data,
    active,
    onClick,
    expanded,
    onToggle,
    footer,
    autoCollapse
  } = props;

  const [menuState, setMenuState] = useState<Record<string, boolean>>({});

  React.useEffect(() => {
    if (props.active) {
      const currMenu = getMenu(props.active);
      if (currMenu) updateMenuState(currMenu, true);
    }
  }, [props.active]);

  const getMenu = (menu: ActiveMenu): Menu | null => {
    for (const m of data) {
      if ((menu.name && m.name === menu.name) || (menu.link && m.link === menu.link)) {
        return m;
      }
      if (m.subMenu) {
        const activeMenu = m.subMenu.find(sm => (
          (menu.name && sm.name === menu.name) || (menu.link && sm.link === menu.link)
        ));
        if (activeMenu) return activeMenu;
      }
    }
    return null;
  };

  const updateMenuState = (menu: ActiveMenu, val?: boolean) => {
    const currMenu = getMenu(menu);
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

  const isActive = (menu: Menu): boolean => {
    if (active) {
      const currMenu = getMenu(active);
      return !!currMenu
        && (currMenu === menu
          || currMenu.name.split('.')[0] === menu.name
          || currMenu.name === menu.name
          || (!!currMenu.link && currMenu.link === menu.link)
        );
    }
    return false;
  };

  const getHorizontalMenu = (menuData: Menu[]) => {
    const list = menuData.map((menu, index) => {
      const menuClasses = classNames({
        'Navigation-menu': true,
        [`Navigation-menu--${type}`]: type,
        ['Navigation-menu--active']: isActive(menu)
      });

      return (
        <div key={index} className={menuClasses} onClick={() => onClickHandler(menu)}>
          {menu.icon && (
            <Icon
              className="mr-3"
              name={menu.icon}
              size={16}
              appearance={menu.disabled ? 'disabled' : 'default'}
            />
          )}
          <Text appearance={menu.disabled ? 'subtle' : 'default'}>{menu.label}</Text>
        </div>
      );
    });

    return list;
  };

  const getVerticalMenu = () => {
    const list = data.map((menu, index) => {
      const menuClasses = classNames({
        'Navigation-menu': true,
        [`Navigation-menu--${type}`]: type,
        ['Navigation-menu--active']: expanded && !menuState[menu.name] && isActive(menu)
      });

      const menuIconClasses = classNames({
        'Navigation-menuIcon': true,
        'Navigation-menuIcon--active': !expanded && isActive(menu)
      });

      return (
        <div key={index}>
          <div
            className={menuClasses}
            onClick={() => onClickHandler(menu)}
          >
            {menu.icon && (
              <Icon
                className={menuIconClasses}
                name={menu.icon}
                size={16}
                appearance={menu.disabled ? 'disabled' : 'default'}
              />
            )}
            {expanded && (
              <>
                <span className="Navigation-menuLabel">
                  <Text appearance={menu.disabled ? 'subtle' : 'default'}>{menu.label}</Text>
                </span>
                {menu.subMenu && menu.subMenu.length > 0 && (
                  <Icon
                    className="mx-4"
                    name={menuState[menu.name] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                    size={16}
                    appearance={menu.disabled ? 'disabled' : 'default'}
                  />
                )}
              </>
            )}
          </div>
          <div className="Navigation-subMenu">
            {menuState[menu.name] &&
              menu.subMenu &&
              expanded &&
              menu.subMenu.map((subMenu, ind) => {
                const subMenuClasses = classNames(menuClasses, {
                  ['Navigation-menu--subMenu']: type,
                  ['Navigation-menu--active']: isActive(subMenu)
                });

                return (
                  <div
                    key={ind}
                    className={subMenuClasses}
                    onClick={() => onClickHandler(subMenu)}
                  >
                    <Text appearance={subMenu.disabled ? 'subtle' : 'default'}>{subMenu.label}</Text>
                  </div>
                );
              })}
          </div>
        </div>
      );
    });

    const footerClasses = classNames({
      'Navigation-footer': true,
      ['Navigation-footer--border']: true
    });

    return (
      <>
        <div className="Navigation-body">
          {list}
        </div>
        {footer && (
          <div className={footerClasses}>
            <Icon
              className="Navigation-menuIcon Navigation-menuIcon--footer"
              name="menu_open"
              size={16}
              onClick={() => onToggle && onToggle(!expanded)}
            />
          </div>
        )}
      </>
    );
  };

  const classes = classNames({
    ['Navigation']: true,
    [`Navigation--${type}`]: type,
    ['Navigation--collapsed']: !expanded
  });

  return (
    <div className={classes}>
      {type === 'horizontal'
        ? getHorizontalMenu(data)
        : getVerticalMenu()
      }
    </div>
  );
};

Navigation.defaultProps = {
  type: 'horizontal',
  data: [],
  expanded: true,
  footer: false,
  autoCollapse: true
};

export default Navigation;
