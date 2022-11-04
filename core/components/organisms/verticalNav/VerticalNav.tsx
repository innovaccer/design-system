import * as React from 'react';
import classNames from 'classnames';
import { Text, Tooltip } from '@/index';
import { MenuItem, MenuItemProps } from './MenuItem';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { getMenu, isMenuActive, ActiveMenu, Menu } from '@/utils/navigationHelper';

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
   * | group | Section of menu | |
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
   * Only one SubMenu visible at a time**(applicable only for type: `vertical`)**
   */
  autoCollapse: boolean;
  /**
   * Option to pass Custom Item Renderer
   */
  customItemRenderer?: (props: MenuItemProps) => JSX.Element;
  /**
   * Determines whether to show tooltip for menu label
   */
  showTooltip: boolean;
}

/**
 * ####NOTE: VerticalNav sets first subMenu(if present) active if the Navigation is collapsed.
 */

export const VerticalNav = (props: VerticalNavProps) => {
  const { menus, active, onClick, expanded, rounded, autoCollapse, className, customItemRenderer, showTooltip } = props;

  const [menuState, setMenuState] = React.useState<Record<string, boolean>>({});
  const baseProps = extractBaseProps(props);

  const [showClosingAnimation, setShowClosingAnimation] = React.useState(false);

  React.useEffect(() => {
    if (props.active) {
      const currMenu = getMenu(menus, props.active);
      console.log('------currMenu function-->', currMenu);
      if (currMenu) updateMenuState(currMenu, true);
    }
  }, [props.active]);

  const updateMenuState = (menu: ActiveMenu, val?: boolean) => {
    const currMenu = getMenu(menus, menu);
    console.log('currMenu', currMenu);
    console.log('menu,val', menu, val);
    if (currMenu) {
      const nameSplit = currMenu.name.split('.');
      console.log('nameSplit', nameSplit);
      if (nameSplit.length > 1 || currMenu.subMenu) {
        const name = nameSplit[0];
        console.log('name', [name]);
        console.log('val', val);
        if (autoCollapse) {
          setMenuState({ [name]: val || !menuState[name] });
          console.log('menuState', menuState);
          // if (!showClosingAnimation) {
          //   setTimeout(() => {
          //     setMenuState({ [name]: val || !menuState[name] });
          //   }, 240);
          // }
        } else {
          const menuData = { ...menuState };
          console.log('menuData', menuData);
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

  const onClickAnimation = (menu: ActiveMenu) => {
    // if (expanded && showClosingAnimation) {
    //   const currMenu = getMenu(menus, menu);
    //   if (currMenu) {
    //     const nameSplit = currMenu.name.split('.');
    //     if (nameSplit.length > 1 || currMenu.subMenu) {
    //       const name = nameSplit[0];
    //       if (autoCollapse) {
    //         setMenuState({ [name]: val || !menuState[name] });
    //       }
    //     }
    //   }
    // }
    if (!expanded && !showClosingAnimation && onClick) {
      updateMenuState && updateMenuState(menu);
    }
  };

  const onClose = (menu: Menu) => {
    console.log('onclick', onClick);
    if (expanded && showClosingAnimation) {
      updateMenuState && updateMenuState(menu);
    }
    // else if (!expanded && !showClosingAnimation) {
    //   updateMenuState && updateMenuState(menu);
    // }
  };

  const onClickHandler = (menu: Menu) => {
    if (menu.subMenu) {
      if (!expanded) {
        if (onClick) onClick(menu.subMenu[0]);
      } else {
        if (customItemRenderer) updateMenuState(menu);
        else setShowClosingAnimation(!showClosingAnimation);
      }
    } else {
      if (onClick) onClick(menu);
    }
  };

  const getAnimationClass = () => {
    if (!customItemRenderer && expanded && showClosingAnimation)
      return `menuItem-close var(--duration--moderate-02) var(--standard-productive-curve)`;
    else if (!customItemRenderer && expanded && !showClosingAnimation)
      return `menuItem-open var(--duration--moderate-02) var(--standard-productive-curve)`;
    return '';
  };

  const renderList = () => {
    const list = menus.map((menu, index) => {
      const isActive = !menuState[menu.name] && isMenuActive(menus, menu, active);
      const hasSubmenu = menu.subMenu && menu.subMenu.length > 0;
      const isChildrenVisible = hasSubmenu && menuState[menu.name];
      const hasGroup = index === 0 || menus[index - 1].group !== menu.group;

      const sectionClass = classNames({
        ['VerticalNav-section']: true,
        ['VerticalNav-section--border']: index !== 0,
      });

      const getSubMenuHeight = () => {
        const length = menu.subMenu && menu.subMenu.length;
        const menuElement = document.getElementById('vertical-nav-menu');
        // const menuElement = document.querySelector('[data-id="vertical-nav-menu"]');
        const itemHeight = menuElement?.getBoundingClientRect().height;
        const subMenuHeight = length && itemHeight && length * itemHeight;
        // console.log('-------------', subMenuHeight);
        return subMenuHeight;
      };

      const menuItemAnimation = `
        @keyframes menuItem-open {
          from { 
            max-height: 0;
          }
          to {
            max-height: ${getSubMenuHeight()}px;
          }
        }
        @keyframes menuItem-close {
          from {
            max-height: ${getSubMenuHeight()}px;
          }
          to {
            max-height: 0;
          }
        }
        `;

      const styles: React.CSSProperties = {
        animation: getAnimationClass(),
      };

      return (
        <React.Fragment key={index}>
          {hasGroup && menu.group && expanded && (
            <div className={sectionClass}>
              <Text data-test="DesignSystem-VerticalNav--Section" size="small" weight="strong" appearance="subtle">
                {menu.group}
              </Text>
            </div>
          )}
          {showTooltip ? (
            <Tooltip tooltip={menu.label} position="right">
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
                onClose={onClose}
                showClosingAnimation={showClosingAnimation}
                onClickAnimation={onClickAnimation}
              />
            </Tooltip>
          ) : (
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
              onClose={onClose}
              showClosingAnimation={showClosingAnimation}
              onClickAnimation={onClickAnimation}
            />
          )}
          {menuState[menu.name] && menu.subMenu && (
            <div style={styles}>
              <style>{menuItemAnimation}</style>
              {menu.subMenu.map((subMenu, id) => {
                return showTooltip ? (
                  <Tooltip tooltip={subMenu.label} position="right">
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
                      onClose={onClose}
                      showClosingAnimation={showClosingAnimation}
                      onClickAnimation={onClickAnimation}
                    />
                  </Tooltip>
                ) : (
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
                    onClose={onClose}
                    showClosingAnimation={showClosingAnimation}
                    onClickAnimation={onClickAnimation}
                  />
                );
              })}
            </div>
          )}
        </React.Fragment>
      );
    });

    return list;
  };

  const classes = classNames(
    {
      VerticalNav: true,
      ['VerticalNav--expanded']: expanded,
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
