import * as React from 'react';
import classNames from 'classnames';
import { Text } from '@/index';
import { MenuItem, MenuItemProps } from './MenuItem';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { getMenu, isMenuActive, ActiveMenu, Menu, getExpandedMenus } from '@/utils/navigationHelper';
import styles from '@css/components/verticalNav.module.css';

export interface VerticalNavProps extends BaseProps {
  /**
   * List of menus to be rendered
   *
   * <pre className="DocPage-codeBlock">
   * Menu: {
   *    name: string;
   *    label: string;
   *    link?: string;
   *    group?: string;
   *    disabled?: boolean;
   *    count?: number | string;
   *    subMenu?: Menu[];
   *    icon?: string;
   *    iconType?: 'rounded' | 'outlined';
   *    expanded?: boolean;
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
   * | group | Section of menu | |
   * | subMenu | Menu submenus of type `Menu[]` | |
   * | icon | Menu icon | |
   * | iconType | Set type of Icon ||
   * | expanded | Set expanded state of menu | |
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
   * Only one SubMenu visible at a time**(applicable only for type: `vertical`)**
   */
  autoCollapse: boolean;
  /**
   * Option to pass Custom Item Renderer
   */
  customItemRenderer?: (props: MenuItemProps) => JSX.Element;
  /**
   * Determines whether to show tooltip for menu label
   * **This prop is DEPRECATED now,**
   * **Auto tooltip feature is enable now on text truncation,**
   * **Please don't use this prop.**
   */
  showTooltip: boolean;
}

/**
 * ####NOTE: VerticalNav sets first subMenu(if present) active if the Navigation is collapsed.
 */

export const VerticalNav = (props: VerticalNavProps) => {
  const { menus, active, onClick, expanded, rounded, autoCollapse, className, customItemRenderer } = props;

  const [subMenuExpandedState, setSubMenuExpandedState] = React.useState<Record<string, boolean>>({});
  const [menuState, setMenuState] = React.useState<Record<string, boolean>>({});
  const baseProps = extractBaseProps(props);

  React.useEffect(() => {
    if (props.active) {
      const currMenu = getMenu(menus, props.active);
      if (currMenu) updateMenuState(currMenu, true);
    }
  }, [props.active]);

  React.useEffect(() => {
    const expandedMenus = getExpandedMenus(menus, active);
    setSubMenuExpandedState(expandedMenus);
  }, []);

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
    if (menu.subMenu) {
      if (!expanded) {
        if (onClick) onClick(menu.subMenu[0]);
      } else {
        if (!subMenuExpandedState[menu.name]) {
          updateMenuState(menu);
        }
        setMenuState({ ...menuState, [menu.name]: false });
        setSubMenuExpandedState({ ...subMenuExpandedState, [menu.name]: !subMenuExpandedState[menu.name] });
      }
    } else {
      if (onClick) onClick(menu);
    }
  };

  const renderList = () => {
    const list = menus.map((menu, index) => {
      const isActive = !menuState[menu.name] && isMenuActive(menus, menu, active);
      const hasSubmenu = menu.subMenu && menu.subMenu.length > 0;
      const isChildrenVisible = hasSubmenu && (menuState[menu.name] || subMenuExpandedState[menu.name]);
      const hasGroup = index === 0 || menus[index - 1].group !== menu.group;

      const sectionClass = classNames({
        [styles['VerticalNav-section']]: true,
        [styles['VerticalNav-section--border']]: index !== 0,
      });

      return (
        <React.Fragment key={index}>
          {hasGroup && menu.group && expanded && (
            <div className={sectionClass}>
              <Text data-test="DesignSystem-VerticalNav--Section" size="small" weight="strong" appearance="subtle">
                {menu.group}
              </Text>
            </div>
          )}
          {
            <MenuItem
              data-test="DesignSystem-VerticalNav--Item"
              menu={menu}
              expanded={expanded}
              isActive={isActive}
              hasSubmenu={hasSubmenu}
              isChildren={false}
              rounded={rounded}
              isChildrenVisible={isChildrenVisible}
              onClick={onClickHandler}
              customItemRenderer={customItemRenderer}
            />
          }
          {isChildrenVisible &&
            menu.subMenu!.map((subMenu, id) => {
              return (
                <MenuItem
                  key={id}
                  menu={subMenu}
                  expanded={expanded}
                  hasSubmenu={false}
                  isChildren={true}
                  rounded={rounded}
                  onClick={onClickHandler}
                  isActive={isMenuActive(menus, subMenu, active)}
                  customItemRenderer={customItemRenderer}
                />
              );
            })}
        </React.Fragment>
      );
    });

    return list;
  };

  const classes = classNames(
    {
      [styles.VerticalNav]: true,
      [styles['VerticalNav--expanded']]: expanded,
    },
    className
  );

  return (
    <div {...baseProps} className={classes}>
      {renderList()}
    </div>
  );
};

VerticalNav.defaultProps = {
  expanded: true,
  autoCollapse: true,
  rounded: false,
  showTooltip: false,
};

export default VerticalNav;
