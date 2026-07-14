import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon, Pills, Tooltip } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { getNavItemColor, getPillsAppearance, Menu, formatCount } from '@/utils/navigationHelper';
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
  customOptionRenderer?: (props: MenuItemProps) => JSX.Element;
  tabIndex?: number;
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

const MenuWrapper = (props?: any) => {
  const { children } = props;
  return (
    <div
      data-test="DesignSystem-VerticalNav--MenuWrapper"
      className="d-flex align-items-center overflow-hidden"
      {...props}
    >
      {children}
    </div>
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
    customOptionRenderer,
    tabIndex,
  } = props;

  const [isTextTruncated, setIsTextTruncated] = React.useState(false);
  const { detectTruncation } = Tooltip.useAutoTooltip();
  const contentRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const isTruncated = detectTruncation(contentRef);
    setIsTextTruncated(isTruncated);
  }, [menu.label, expanded, menu.count, hasSubmenu, menu.icon]);

  const MenuLabel = React.useCallback(
    (props: MenuLabelProps) => {
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
    },
    [hasSubmenu, menu.count]
  );

  const onClickHandler = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    if (onClick) onClick(menu);
  };

  const baseProps = {
    onClick: onClickHandler,
    href: menu.link,
    tabIndex: tabIndex !== undefined ? tabIndex : 0,
    role: 'treeitem',
    'aria-level': isChildren ? 2 : 1,
    'aria-expanded': hasSubmenu ? (isChildrenVisible ? 'true' : 'false') : undefined,
    'aria-label': !expanded && menu.icon ? menu.label : undefined,
    'data-menu-name': menu.name,
    'data-disabled': menu.disabled ? 'true' : undefined,
    ...extractBaseProps(props),
  };

  const itemColor = getNavItemColor(isActive, menu.disabled);

  const ItemClass = classNames({
    [styles['MenuItem']]: true,
    [styles['MenuItem--vertical']]: true,
    [styles['MenuItem--collapsed']]: !expanded,
    [styles['MenuItem--expanded']]: expanded,
    [styles['MenuItem--expandedRounded']]: expanded && rounded,
    [styles['MenuItem--active']]: isActive,
    [styles['MenuItem--activeExpanded']]: isActive && expanded,
    [styles['MenuItem--activeExpandedRounded']]: isActive && expanded && rounded,
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
      const count = formatCount(menu.count);
      return <MenuPills disabled={menu.disabled} isActive={isActive} count={count} />;
    }
    return null;
  };

  const MenuIconFn = React.useCallback(() => MenuIcon({ isChildrenVisible }), [isChildrenVisible]);

  const MenuLabelFn = React.useCallback(
    () => MenuLabel({ label: menu.label, labelColor: itemColor }),
    [MenuLabel, menu.label, itemColor]
  );

  const MenuWrapperFn = React.useCallback((wrapperProps: any) => MenuWrapper(wrapperProps), []);

  const MenuPillsFn = React.useCallback(
    () =>
      menu.count !== undefined ? MenuPills({ disabled: menu.disabled, isActive: isActive, count: menu.count }) : <></>,
    [menu.count, menu.disabled, isActive]
  );

  if (!expanded && !menu.icon) return null;

  const customItemProps = {
    ...props,
    contentRef,
    MenuIcon: MenuIconFn,
    MenuLabel: MenuLabelFn,
    MenuWrapper: MenuWrapperFn,
    MenuPills: MenuPillsFn,
  };

  return customItemRenderer ? (
    customItemRenderer(customItemProps)
  ) : (
    <Tooltip showTooltip={expanded ? isTextTruncated : true} tooltip={menu.label} position="right">
      <Link componentType="a" className={ItemClass} {...baseProps}>
        {customOptionRenderer ? (
          customOptionRenderer(customItemProps)
        ) : (
          <>
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
          </>
        )}
      </Link>
    </Tooltip>
  );
};

MenuItem.defaultProps = {
  isActive: false,
};

export default MenuItem;
