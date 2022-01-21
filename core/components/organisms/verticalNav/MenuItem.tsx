import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon, Pills } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { getTextAppearance, getIconAppearance, getPillsAppearance, Menu } from '@/utils/navigationHelper';

export interface MenuItemProps extends BaseProps {
  menu: Menu;
  isActive: boolean;
  rounded?: boolean;
  expanded?: boolean;
  hasSubmenu?: boolean;
  isChildren?: boolean;
  isChildrenVisible?: boolean;
  onClick?: (menu: Menu) => void;
  customItemRenderer?: (props: MenuItemProps) => JSX.Element;
}

export const MenuItem = (props: MenuItemProps) => {
  const { menu, isActive, expanded, rounded, hasSubmenu, isChildren, isChildrenVisible, onClick, customItemRenderer } =
    props;

  const baseProps = extractBaseProps(props);

  const onClickHandler = () => {
    if (onClick) onClick(menu);
  };

  const ItemClass = classNames({
    ['MenuItem']: true,
    ['MenuItem--vertical']: true,
    ['MenuItem--collapsed']: !expanded,
    ['MenuItem--expanded']: expanded,
    ['MenuItem--active']: isActive,
    ['MenuItem--disabled']: menu.disabled,
    ['MenuItem--subMenu']: isChildren && expanded,
    ['MenuItem--rounded']: rounded && expanded,
  });

  const renderSubMenu = () => {
    if (hasSubmenu) {
      return (
        <Icon
          className="mx-4"
          name={isChildrenVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          appearance="subtle"
        />
      );
    }

    if (menu.count !== undefined) {
      const count = menu.count > 99 ? '99+' : menu.count;
      const PillsClass = classNames({
        ['MenuItem-count']: true,
        ['MenuItem-count--disabled']: menu.disabled,
      });

      return (
        <Pills
          subtle={menu.disabled}
          className={PillsClass}
          appearance={getPillsAppearance(isActive)}
          data-test="DesignSystem-VerticalNav--Pills"
        >
          {count}
        </Pills>
      );
    }

    return null;
  };

  if (!expanded && !menu.icon) return null;

  return customItemRenderer ? (
    customItemRenderer(props)
  ) : (
    // TODO(a11y)
    // eslint-disable-next-line
    <div className={ItemClass} {...baseProps} onClick={onClickHandler}>
      <div className="d-flex align-items-center overflow-hidden">
        {menu.icon && (
          <Icon
            data-test="DesignSystem-VerticalNav--Icon"
            className={expanded ? 'mr-4' : ''}
            name={menu.icon}
            appearance={getIconAppearance(isActive, menu.disabled)}
          />
        )}
        {expanded && (
          <Text data-test="DesignSystem-VerticalNav--Text" appearance={getTextAppearance(isActive, menu.disabled)}>
            {menu.label}
          </Text>
        )}
      </div>
      {expanded && renderSubMenu()}
    </div>
  );
};

MenuItem.defaultProps = {
  isActive: false,
};

export default MenuItem;
