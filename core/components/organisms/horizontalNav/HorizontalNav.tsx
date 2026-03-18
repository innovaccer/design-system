import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon, Pills } from '@/index';
import { VerticalNavProps } from '@/index.type';
import { extractBaseProps, BaseProps } from '@/utils/types';
import { getNavItemColor, getPillsAppearance, isMenuActive, Menu, formatCount } from '@/utils/navigationHelper';
import styles from '@css/components/horizontalNav.module.css';

export type HorizontalNavProps = BaseProps &
  Pick<VerticalNavProps, 'menus' | 'active' | 'onClick'> & {
    'aria-label'?: string;
  };
export type Align = 'left' | 'center';

export const HorizontalNav = (props: HorizontalNavProps) => {
  const { menus, active, onClick, className, 'aria-label': ariaLabel = 'Horizontal Navigation' } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles['HorizontalNav']]: true,
    },
    className
  );

  const onClickHandler = (event: React.MouseEvent<HTMLElement>, menu: Menu) => {
    if (menu.disabled) {
      event.preventDefault();
      return;
    }

    // Preserve link navigation when no callback is provided.
    if (onClick) {
      event.preventDefault();
      onClick(menu);
    }
  };

  const getPillsClass = (disabled?: boolean) =>
    classNames({
      [styles['HorizontalNav-pills']]: true,
      [styles['HorizontalNav-pills--disabled']]: disabled,
      [styles['HorizontalNav-animate']]: true,
    });

  const renderIcon = (menu: Menu, isActive: boolean) => {
    if (menu.count !== undefined) {
      const count = formatCount(menu.count);
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

    const commonProps = {
      'data-test': 'DesignSystem-HorizontalNav',
      className: menuClasses,
    };

    const content = (
      <>
        {renderIcon(menu, isActive)}
        <Text color={itemColor} weight="medium" data-test="DesignSystem-HorizontalNav--Text" className={textClasses}>
          {menu.label}
        </Text>
      </>
    );

    if (menu.disabled) {
      return (
        <span key={index} {...commonProps} aria-disabled="true">
          {content}
        </span>
      );
    }

    if (menu.link) {
      return (
        <a
          key={index}
          {...commonProps}
          href={menu.link}
          aria-current={isActive ? 'page' : undefined}
          onClick={(event) => onClickHandler(event, menu)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        type="button"
        key={index}
        {...commonProps}
        aria-current={isActive ? 'page' : undefined}
        onClick={(event) => onClickHandler(event, menu)}
      >
        {content}
      </button>
    );
  });

  return (
    <nav {...baseProps} className={classes} aria-label={ariaLabel}>
      {list}
    </nav>
  );
};

export default HorizontalNav;
