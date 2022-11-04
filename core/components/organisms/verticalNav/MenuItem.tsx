import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon, Pills } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { getTextColor, getIconAppearance, getPillsAppearance, Menu } from '@/utils/navigationHelper';
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
  showClosingAnimation?: boolean;
  onClose?: (menu: Menu) => void;
  onClickAnimation?: (menu: Menu, val?: boolean) => void;
  // menuState?: (menu: Menu);
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
  expanded?: boolean;
}

interface MenuIconProps {
  isChildrenVisible?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  showClosingAnimation?: boolean;
}

const MenuLabel = (props: MenuLabelProps) => {
  const { label, expanded, disabled, isActive } = props;

  const LabelClass = classNames({
    ['MenuItem-animate']: true,
    ['MenuItem-label--collapsed']: expanded,
    ['MenuItem-label--expanded']: !expanded,
  });

  return (
    <Text data-test="DesignSystem-VerticalNav--Text" color={getTextColor(isActive, disabled)} className={LabelClass}>
      {label}
    </Text>
  );
};

const MenuIcon = (props: MenuIconProps) => {
  const { isChildrenVisible, isActive, disabled, showClosingAnimation } = props;

  const ArrowIconClass = classNames({
    ['Arrow-Icon--up']: isChildrenVisible && !showClosingAnimation,
    ['Arrow-Icon--down']: isChildrenVisible && showClosingAnimation,
  });

  return (
    <Icon
      className={`mx-4 ${ArrowIconClass}`}
      name={'keyboard_arrow_down'}
      appearance={isActive ? 'primary_dark' : disabled ? 'disabled' : 'subtle'}
    />
  );
};

const MenuPills = (props: MenuPillsProps) => {
  const { disabled, isActive, count } = props;

  const PillsClass = classNames({
    ['MenuItem-count']: true,
    ['MenuItem-count--disabled']: disabled,
    ['MenuItem-animate']: true,
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
  const {
    menu,
    isActive,
    expanded,
    rounded,
    hasSubmenu,
    isChildren,
    isChildrenVisible,
    onClick,
    customItemRenderer,
    showClosingAnimation,
    onClose,
    onClickAnimation,
  } = props;

  // const [oldMenu, setOldMenu] = React.useState<Record<string, boolean>>({});
  // const [newMenu, setNewMenu] = React.useState<Record<string, boolean>>({});
  const onClickHandler = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    if (onClick) onClick(menu);
    console.log('-----------> menu', menu);
    onClose && onClose(menu);
    // newMenu = menu;
    // onClickAnimation && onClickAnimation(menu);
  };

  const handleAnimationEnd = (menu: Menu) => {
    console.log('=========> menu', menu);
    // onClose && onClose(menu);
    onClickAnimation && onClickAnimation(menu);
  };

  const baseProps = {
    onClick: onClickHandler,
    href: menu.link,
    tabIndex: 0,
    ...extractBaseProps(props),
    onAnimationEnd: () => handleAnimationEnd(menu),
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
    ['MenuItem-animate']: true,
    ['Item--expand']: expanded && isChildren && !showClosingAnimation,
    ['Item--collapse']: expanded && isChildren && showClosingAnimation,
  });

  const renderSubMenu = () => {
    if (hasSubmenu) {
      return (
        <MenuIcon
          isChildrenVisible={isChildrenVisible}
          isActive={isActive}
          disabled={menu.disabled}
          showClosingAnimation={showClosingAnimation}
        />
      );
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
    MenuIcon: () => MenuIcon({ isChildrenVisible, isActive, disabled: menu.disabled, showClosingAnimation }),
    MenuLabel: () => MenuLabel({ label: menu.label, disabled: menu.disabled, isActive: isActive }),
    MenuPills: () =>
      menu.count !== undefined ? MenuPills({ disabled: menu.disabled, isActive: isActive, count: menu.count }) : <></>,
  };

  return customItemRenderer ? (
    customItemRenderer(customItemProps)
  ) : (
    // TODO(a11y)
    // eslint-disable-next-line
    <div id="vertical-nav-menu">
      <Link componentType="a" className={ItemClass} {...baseProps}>
        <div className="d-flex align-items-center overflow-hidden">
          {menu.icon && (
            <Icon
              data-test="DesignSystem-VerticalNav--Icon"
              className={`MenuItem-animate ${expanded ? 'mr-4 ' : ''}`}
              name={menu.icon}
              appearance={getIconAppearance(isActive, menu.disabled)}
            />
          )}
          {expanded && <MenuLabel label={menu.label} disabled={menu.disabled} isActive={isActive} />}
        </div>
        {expanded && renderSubMenu()}
      </Link>
    </div>
  );
};

MenuItem.defaultProps = {
  isActive: false,
};

export default MenuItem;
