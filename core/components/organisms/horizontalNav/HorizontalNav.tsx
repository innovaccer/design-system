import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon, Pills } from '@/index';
import { VerticalNavProps } from '@/index.type';
import { extractBaseProps, BaseProps } from '@/utils/types';
import { getNavItemColor, getPillsAppearance, isMenuActive, Menu } from '@/utils/navigationHelper';
import styles from '@css/components/horizontalNav.module.css';

export type HorizontalNavProps = BaseProps & Pick<VerticalNavProps, 'menus' | 'active' | 'onClick'>;
export type Align = 'left' | 'center';

export const HorizontalNav = (props: HorizontalNavProps) => {
  const { menus, active, onClick, className } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles['HorizontalNav']]: true,
    },
    className
  );

  const onClickHandler = (menu: Menu) => () => {
    if (onClick) onClick(menu);
  };

  const getPillsClass = (disabled?: boolean) =>
    classNames({
      [styles['HorizontalNav-pills']]: true,
      [styles['HorizontalNav-pills--disabled']]: disabled,
      [styles['HorizontalNav-animate']]: true,
    });

  const renderIcon = (menu: Menu, isActive: boolean) => {
    if (menu.count !== undefined) {
      const count = (menu.count as number) > 99 ? '99+' : menu.count;
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

    const IconClassName = classNames('mr-3', styles['HorizontalNav-animate']);

    if (menu.icon) {
      return (
        <Icon
          className={IconClassName}
          name={menu.icon}
          type={menu.iconType}
          data-test="DesignSystem-HorizontalNav--Icon"
        />
      );
    }

    return null;
  };

  const onKeyDownHandler = (event: React.KeyboardEvent, menu: Menu) => {
    if (event.key === 'Enter' && onClick) {
      onClick(menu);
    }
  };

  const list = menus.map((menu, index) => {
    const isActive = isMenuActive(menus, menu, active);
    const itemColor = getNavItemColor(isActive, menu.disabled);

    const menuClasses = classNames({
      [styles['HorizontalNav-menu']]: true,
      [styles['HorizontalNav-menu--default']]: !isActive && !menu.disabled,
      [styles['HorizontalNav-menu--active']]: isActive,
      [styles['HorizontalNav-menu--disabled']]: menu.disabled,
      [styles[`HorizontalNav-animate`]]: true,
      [`color-${itemColor}`]: true,
    });

    const textClasses = classNames(styles['HorizontalNav-menuText'], styles['HorizontalNav-animate']);

    return (
      // TODO(a11y)
      // eslint-disable-next-line
      <div
        tabIndex={0}
        data-test="DesignSystem-HorizontalNav"
        key={index}
        className={menuClasses}
        onClick={onClickHandler(menu)}
        onKeyDown={(e) => onKeyDownHandler(e, menu)}
        role="button"
      >
        {renderIcon(menu, isActive)}
        <Text color={itemColor} weight="medium" data-test="DesignSystem-HorizontalNav--Text" className={textClasses}>
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
