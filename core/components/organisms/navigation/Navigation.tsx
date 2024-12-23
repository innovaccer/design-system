import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { HorizontalNav } from '@/index';
import { VerticalNavigation, VerticalNavigationProps } from './VerticalNavigation';
import styles from '@css/components/navigation.module.css';

export type LayoutType = 'vertical' | 'horizontal';
export type Align = 'left' | 'center';

export type Menu = {
  name: string;
  label: string;
  link?: string;
  icon?: string;
  count?: number;
  disabled?: boolean;
  subMenu?: Menu[];
};

export interface NavigationProps extends BaseProps, VerticalNavigationProps {
  /**
   * `Navigation` component type
   *
   * `LayoutType: 'horizontal' | 'vertical'`
   */
  type: LayoutType;
  /**
   * Alignment of `Navigation` component
   *
   * **Applicable only in case of type: `horizontal`**
   *
   * `Align: 'left' | 'center'`
   */
  align: Align;
}

/**
 * ####NOTE: Navigation will be deprecated soon. VerticalNav and HorizontalNav will be supported.
 */

export const Navigation = (props: NavigationProps) => {
  const { type, align, menus, active, onClick, expanded, rounded, onToggle, footer, autoCollapse, className } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles['Navigation']]: true,
      [styles[`Navigation--${type}`]]: type,
      ['justify-content-center']: type === 'horizontal' && align === 'center',
      ['justify-content-start']: type === 'horizontal' && align === 'left',
      [styles['Navigation--collapsed']]: !expanded,
    },
    className
  );

  const renderNavigation = () => {
    return type === 'horizontal' ? (
      <HorizontalNav menus={menus} active={active} onClick={onClick} />
    ) : (
      <VerticalNavigation
        menus={menus}
        active={active}
        autoCollapse={autoCollapse}
        expanded={expanded}
        rounded={rounded}
        footer={footer}
        onToggle={onToggle}
        onClick={onClick}
      />
    );
  };

  return (
    <div {...baseProps} className={classes}>
      {renderNavigation()}
    </div>
  );
};

Navigation.defaultProps = {
  type: 'horizontal',
  align: 'center',
  expanded: true,
  autoCollapse: true,
  rounded: false,
};

export default Navigation;
