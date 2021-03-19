import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon, Pills } from '@/index';
import { NavigationProps } from '@/index.type';
import {
  getTextAppearance,
  getIconAppearance,
  getPillsAppearance,
  isMenuActive,
  Menu,
} from './utils';

export type HorizontalNavigationProps = Pick<NavigationProps, 'menus' | 'active' | 'onClick'>;

export const HorizontalNavigation = (props: HorizontalNavigationProps) => {
  const {
    menus,
    active,
    onClick,
  } = props;

  const onClickHandler = (menu: Menu) => () => {
    if (onClick) onClick(menu);
  };

  const getPillsClass = (disabled?: boolean) => (
    classNames({
      ['Navigation-horizontalPills']: true,
      ['Navigation-horizontalPills--disabled']: disabled
    })
  );

  const renderIcon = (menu: Menu, isActive: boolean) => {
    if (menu.count !== undefined) {
      const count = menu.count > 99 ? '99+' : menu.count;
      return (
        <Pills
          subtle={menu.disabled}
          className={getPillsClass(menu.disabled)}
          appearance={getPillsAppearance(isActive)}
          data-test="DesignSystem-HorizontalNavigation--Pills"
        >
          {count}
        </Pills>
      );
    }

    if (menu.icon) {
      return (
        <Icon
          className="mr-3"
          name={menu.icon}
          appearance={getIconAppearance(isActive, menu.disabled)}
          data-test="DesignSystem-HorizontalNavigation--Icon"
        />
      );
    }

    return null;
  };

  const list = menus.map((menu, index) => {
    const isActive = isMenuActive(menus, menu, active);

    const menuClasses = classNames({
      'Navigation-menu': true,
      ['Navigation-menu--horizontal']: true,
      ['Navigation-menu--active']: isActive,
      ['Navigation-menu--disabled']: menu.disabled
    });

    return (
      <div
        data-test="DesignSystem-HorizontalNavigation"
        key={index}
        className={menuClasses}
        onClick={onClickHandler(menu)}
      >
        {renderIcon(menu, isActive)}
        <Text
          appearance={getTextAppearance(isActive, menu.disabled)}
          data-test="DesignSystem-HorizontalNavigation--Text"
        >
          {menu.label}
        </Text>
      </div>
    );
  });

  return <>{list}</>;
};

export default HorizontalNavigation;
