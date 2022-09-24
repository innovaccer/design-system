import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon, Pills } from '@/index';
import { VerticalNavProps } from '@/index.type';
import { extractBaseProps, BaseProps } from '@/utils/types';
import { getTextColor, getIconAppearance, getPillsAppearance, isMenuActive, Menu } from '@/utils/navigationHelper';

export type HorizontalNavProps = BaseProps & Pick<VerticalNavProps, 'menus' | 'active' | 'onClick'>;
export type Align = 'left' | 'center';

export const HorizontalNav = (props: HorizontalNavProps) => {
  const { menus, active, onClick, className } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      ['HorizontalNav']: true,
    },
    className
  );

  const onClickHandler = (menu: Menu) => () => {
    if (onClick) onClick(menu);
  };

  const getPillsClass = (disabled?: boolean) =>
    classNames({
      ['HorizontalNav-pills']: true,
      ['HorizontalNav-pills--disabled']: disabled,
    });

  const renderIcon = (menu: Menu, isActive: boolean) => {
    if (menu.count !== undefined) {
      const count = menu.count > 99 ? '99+' : menu.count;
      return (
        <Pills
          subtle={menu.disabled}
          className={getPillsClass(menu.disabled)}
          appearance={getPillsAppearance(isActive)}
          data-test="DesignSystem-HorizontalNav--Pills"
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
          data-test="DesignSystem-HorizontalNav--Icon"
        />
      );
    }

    return null;
  };

  const list = menus.map((menu, index) => {
    const isActive = isMenuActive(menus, menu, active);

    const menuClasses = classNames({
      'HorizontalNav-menu': true,
      'HorizontalNav-menu--default': !isActive,
      ['HorizontalNav-menu--active']: isActive,
      ['HorizontalNav-menu--disabled']: menu.disabled,
    });

    return (
      // TODO(a11y)
      // eslint-disable-next-line
      <div tabIndex={0} data-test="DesignSystem-HorizontalNav" key={index} className={menuClasses} onClick={onClickHandler(menu)}>
        {renderIcon(menu, isActive)}
        <Text
          color={getTextColor(isActive, menu.disabled)}
          data-test="DesignSystem-HorizontalNav--Text"
          className="HorizontalNav-menuText"
        >
          {menu.label}
        </Text>
      </div>
    );
  });

  return (
    <div {...baseProps} className={classes}>
      {list}
    </div>
  );
};

export default HorizontalNav;
