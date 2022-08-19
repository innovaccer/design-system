import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon, Pills } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { getTextAppearance, getIconAppearance, getPillsAppearance, Menu } from '@/utils/navigationHelper';
import Link from '@/components/atoms/_text';
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
interface MenuPillsProps {
  isActive: boolean;
  disabled?: boolean;
  count: number | string;
}

interface MenuLabelProps {
  label: string;
  disabled?: boolean;
  isActive: boolean;
}

interface MenuIconProps {
  isChildrenVisible?: boolean;
}

const MenuLabel = (props: MenuLabelProps) => {
  const { label, disabled, isActive } = props;
  return (
    <Text data-test="DesignSystem-VerticalNav--Text" appearance={getTextAppearance(isActive, disabled)}>
      {label}
    </Text>
  );
};

const MenuIcon = (props: MenuIconProps) => {
  const { isChildrenVisible } = props;
  return (
    <Icon className="mx-4" name={isChildrenVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} appearance="subtle" />
  );
};

const MenuPills = (props: MenuPillsProps) => {
  const { disabled, isActive, count } = props;

  const PillsClass = classNames({
    ['MenuItem-count']: true,
    ['MenuItem-count--disabled']: disabled,
  });

  return (
    <Pills
      subtle={disabled}
      className={PillsClass}
      appearance={getPillsAppearance(isActive)}
      data-test="DesignSystem-VerticalNav--Pills"
    >
      {count}
    </Pills>
  );
};

export const MenuItem = (props: MenuItemProps) => {
  const { menu, isActive, expanded, rounded, hasSubmenu, isChildren, isChildrenVisible, onClick, customItemRenderer } =
    props;

  const onClickHandler = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    if (onClick) onClick(menu);
  };

  const baseProps = {
    onClick: onClickHandler,
    href: menu.link,
    ...extractBaseProps(props),
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
      return <MenuIcon isChildrenVisible={isChildrenVisible} />;
    }

    if (menu.count !== undefined) {
      const count = menu.count > 99 ? '99+' : menu.count;
      return <MenuPills disabled={menu.disabled} isActive={isActive} count={count} />;
    }
    return null;
  };

  if (!expanded && !menu.icon) return null;

  const customItemProps = {
    ...props,
    MenuIcon: () => MenuIcon({ isChildrenVisible }),
    MenuLabel: () => MenuLabel({ label: menu.label, disabled: menu.disabled, isActive: isActive }),
    MenuPills: () =>
      menu.count !== undefined ? MenuPills({ disabled: menu.disabled, isActive: isActive, count: menu.count }) : <></>,
  };

  return customItemRenderer ? (
    customItemRenderer(customItemProps)
  ) : (
    // TODO(a11y)
    // eslint-disable-next-line
    <Link componentType="a" className={ItemClass} {...baseProps}>
      <div className="d-flex align-items-center overflow-hidden">
        {menu.icon && (
          <Icon
            data-test="DesignSystem-VerticalNav--Icon"
            className={expanded ? 'mr-4' : ''}
            name={menu.icon}
            appearance={getIconAppearance(isActive, menu.disabled)}
          />
        )}
        {expanded && <MenuLabel label={menu.label} disabled={menu.disabled} isActive={isActive} />}
      </div>
      {expanded && renderSubMenu()}
    </Link>
  );
};

MenuItem.defaultProps = {
  isActive: false,
};

export default MenuItem;
