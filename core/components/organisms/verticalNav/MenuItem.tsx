import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon, Pills, Tooltip } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { getNavItemColor, getPillsAppearance, Menu } from '@/utils/navigationHelper';
import Link from '@/components/atoms/_text';
import { TextColor } from '@/common.type';
import styles from '@css/components/verticalNav.module.css';

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
  labelColor: TextColor;
}

interface MenuIconProps {
  isChildrenVisible?: boolean;
}

const MenuIcon = (props: MenuIconProps) => {
  const { isChildrenVisible } = props;
  return <Icon className="mx-4" name={isChildrenVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />;
};

const MenuPills = (props: MenuPillsProps) => {
  const { disabled, isActive, count } = props;

  const PillsClass = classNames({
    [styles['MenuItem-count']]: true,
    [styles['MenuItem-count--disabled']]: disabled,
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

  const [isTextTruncated, setIsTextTruncated] = React.useState(false);
  const { detectTruncation } = Tooltip.useAutoTooltip();
  const contentRef = React.createRef<HTMLElement>();

  React.useEffect(() => {
    const isTruncated = detectTruncation(contentRef);
    setIsTextTruncated(isTruncated);
  }, [contentRef]);

  const MenuLabel = (props: MenuLabelProps) => {
    const { label, labelColor } = props;

    const labelClass = classNames({
      [styles['MenuItem-Text']]: true,
      [styles['MenuItem--overflow']]: true,
      ['mr-5']: !hasSubmenu && menu.count,
      ['ellipsis--noWrap']: true,
    });

    return (
      <Text data-test="DesignSystem-VerticalNav--Text" ref={contentRef} color={labelColor} className={labelClass}>
        {label}
      </Text>
    );
  };

  const onClickHandler = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    if (onClick) onClick(menu);
  };

  const baseProps = {
    onClick: onClickHandler,
    href: menu.link,
    tabIndex: 0,
    ...extractBaseProps(props),
  };

  const itemColor = getNavItemColor(isActive, menu.disabled);

  const ItemClass = classNames({
    [styles['MenuItem']]: true,
    [styles['MenuItem--vertical']]: true,
    [styles['MenuItem--collapsed']]: !expanded,
    [styles['MenuItem--expanded']]: expanded,
    [styles['MenuItem--active']]: isActive,
    [styles['MenuItem--disabled']]: menu.disabled,
    [styles['MenuItem--subMenu']]: isChildren && expanded,
    [styles['MenuItem--rounded']]: rounded && expanded,
    ['pr-5']: !hasSubmenu && menu.count === undefined && expanded,
    [`color-${itemColor}`]: true,
  });

  const renderSubMenu = () => {
    if (hasSubmenu) {
      return <MenuIcon isChildrenVisible={isChildrenVisible} />;
    }

    if (menu.count !== undefined) {
      const count = menu.count && typeof menu.count === 'number' && menu.count > 99 ? '99+' : menu.count;
      return <MenuPills disabled={menu.disabled} isActive={isActive} count={count} />;
    }
    return null;
  };

  if (!expanded && !menu.icon) return null;

  const customItemProps = {
    ...props,
    contentRef,
    MenuIcon: () => MenuIcon({ isChildrenVisible }),
    MenuLabel: () => MenuLabel({ label: menu.label, labelColor: itemColor }),
    MenuPills: () =>
      menu.count !== undefined ? MenuPills({ disabled: menu.disabled, isActive: isActive, count: menu.count }) : <></>,
  };

  return customItemRenderer ? (
    customItemRenderer(customItemProps)
  ) : (
    // TODO(a11y)
    // eslint-disable-next-line
    <Tooltip showTooltip={expanded ? isTextTruncated : true} tooltip={menu.label} position="right">
      <Link componentType="a" className={ItemClass} {...baseProps}>
        <div className="d-flex align-items-center overflow-hidden">
          {menu.icon && (
            <Icon
              data-test="DesignSystem-VerticalNav--Icon"
              className={expanded ? 'mr-4' : ''}
              name={menu.icon}
              type={menu.iconType}
            />
          )}
          {expanded && <MenuLabel label={menu.label} labelColor={itemColor} />}
        </div>
        {expanded && renderSubMenu()}
      </Link>
    </Tooltip>
  );
};

MenuItem.defaultProps = {
  isActive: false,
};

export default MenuItem;
