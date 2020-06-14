import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon } from '@/index';
const { useState, useEffect, useRef } = React;

export type LayoutType = 'vertical' | 'horizontal';

type Menu = {
  id: string;
  name: string;
  disabled?: boolean;
  subMenu?: Menu[];
  icon?: string;
};

export interface NavigationProps {
  type?: LayoutType;
  data: Menu[];
  onClick?: (id: string) => void;
  active?: string;
  collapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
}

export const Navigation = (props: NavigationProps) => {
  const [menuState, setMenuState] = useState<any>({});
  const ref = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);
  const { type, data = [], onClick, active, collapsed, onToggle } = props;

  const isSubMenuActive = (isActive: string | undefined, subMenu: Menu[] | undefined) => {
    if (!isActive || !subMenu || (subMenu && subMenu.length === 0)) {
      return false;
    }

    let result = false;

    for (const item of subMenu) {
      if (item.id === active) {
        result = true;
        break;
      }
    }

    return result;
  };

  const updateMenuState = (id: string) => {
    const menuData = { ...menuState };
    menuData[id] = !menuData[id];
    setMenuState(menuData);
  };

  useEffect(() => {
    if (props.data && props.data.length > 0) {
      props.data
        .filter(menu => {
          return menu.subMenu && menu.subMenu.length > 0;
        })
        .forEach(menu => {
          if (isSubMenuActive(active, menu.subMenu)) {
            updateMenuState(menu.id);
          }
        });
    }
    const scrollHeight = ref && ref.current ? ref.current.scrollHeight : 0;
    const clientHeight = ref && ref.current ? ref.current.clientHeight : 0;
    if (scrollHeight > clientHeight) {
      setScroll(true);
    }
  }, [props.data, collapsed, ref]);

  const classes = classNames({
    Navigation: true,
    [`Navigation-${type}`]: type
  });

  const footerClasses = classNames({
    'Navigation-vertical-footer': true,
    ['Navigation-vertical-footer--border']: scroll
  });

  const wrapperClasses = classNames({
    Navigation: true,
    [`Navigation-wrapper-${type}`]: type,
    ['Navigation--collapsed']: collapsed
  });

  const truncateName = (name: string) => {
    const limit = 25;
    return name.length > 25 ? name.slice(0, limit).concat('...') : name;
  };

  const getHorizontalMenu = (menuData: Menu[]) => {
    const list = menuData.map((item, index) => {
      const menuClasses = classNames({
        'Navigation-horizontal-menu': true,
        ['Navigation-horizontal-menu--active']: active === item.id
      });

      return (
        <div key={index} className={menuClasses} onClick={() => !item.disabled && onClick && onClick(item.id)}>
          {item.icon && <Icon name={item.icon} size={16} appearance={item.disabled ? 'disabled' : 'default'} />}
          <Text appearance={item.disabled ? 'subtle' : 'default'}>{truncateName(item.name)}</Text>
        </div>
      );
    });

    return list;
  };

  const getverticalMenu = () => {
    const list = data.map((item, index) => {
      const menuClasses = classNames({
        'Navigation-vertical-menu-wrapper': true,
        ['Navigation-vertical-menu--active']:
          active === item.id || (collapsed && item.subMenu && isSubMenuActive(active, item.subMenu)),
        ['Navigation-vertical-menu-collapsed--active']:
          (active === item.id && collapsed) || (collapsed && item.subMenu && isSubMenuActive(active, item.subMenu))
      });

      return (
        <div className={`${collapsed ? 'm-3' : 'mt-3 mb-3'}`} key={index}>
          <div className={menuClasses}>
            <div
              className={`Navigation-vertical-menu ${collapsed ? 'Navigation-vertical-menu--collapsed' : ''}`}
              onClick={() => !item.disabled && onClick && onClick(item.id)}
            >
              {item.icon && <Icon name={item.icon} size={16} appearance={item.disabled ? 'disabled' : 'default'} />}
              {!collapsed && <Text appearance={item.disabled ? 'subtle' : 'default'}>{truncateName(item.name)}</Text>}
            </div>
            {!collapsed && (
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                {item.subMenu && item.subMenu.length > 0 && (
                  <Icon
                    onClick={() => updateMenuState(item.id)}
                    name={menuState[item.id] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                    size={16}
                    appearance={item.disabled ? 'disabled' : 'default'}
                  />
                )}
              </div>
            )}
          </div>
          {menuState[item.id] &&
            item.subMenu &&
            !collapsed &&
            item.subMenu.map((menu, ind) => {
              return (
                <div
                  className={`Navigation-vertical-menu Navigation-vertical-submenu ${
                    collapsed ? 'Navigation-vertical-menu--collapsed' : ''
                  } ${menu.id === active ? 'Navigation-vertical-menu--active' : ''}`}
                  key={ind}
                >
                  <Text appearance={menu.disabled ? 'subtle' : 'default'}>{truncateName(menu.name)}</Text>
                </div>
              );
            })}
        </div>
      );
    });
    return list;
  };

  const menus = type === 'horizontal' ? getHorizontalMenu(data) : getverticalMenu();

  return (
    <div className={wrapperClasses}>
      <div className={classes} ref={ref}>
        {menus}
      </div>
      {type === 'vertical' && (
        <div className={footerClasses}>
          <Icon name="menu_open" size={16} onClick={() => onToggle && onToggle(!collapsed)} />
        </div>
      )}
    </div>
  );
};

Navigation.defaultProps = {
  type: 'horizontal',
  onClick: () => null,
  onToggle: () => null,
  collapsed: false
};

export default Navigation;
