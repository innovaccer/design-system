import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { useAccessibilityProps } from '@/accessibility/utils';

export type IconAppearance =
  | 'default'
  | 'destructive'
  | 'white'
  | 'subtle'
  | 'disabled'
  | 'alert'
  | 'warning'
  | 'success'
  | 'primary_lighter'
  | 'primary'
  | 'primary_dark'
  | 'alert_lighter'
  | 'alert_dark'
  | 'warning_lighter'
  | 'warning_dark'
  | 'success_lighter'
  | 'success_dark'
  | 'accent1'
  | 'accent1_lighter'
  | 'accent1_dark'
  | 'accent2'
  | 'accent2_lighter'
  | 'accent2_dark'
  | 'accent3'
  | 'accent3_lighter'
  | 'accent3_dark'
  | 'accent4'
  | 'accent4_lighter'
  | 'accent4_dark'
  | 'inverse';
export type IconType = 'filled' | 'outlined' | 'rounded' | 'two-tone' | 'sharp';

export interface IconProps extends BaseProps {
  /**
   * Size of `Icon`
   */
  size: number;
  /**
   * Type of material `Icon`
   *
   */
  type?: IconType;
  /**
   * Color of `Icon`
   */
  appearance?: IconAppearance;
  /**
   * Handler to be called when icon is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * Handler to be called when key is pressed on icon
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  /**
   * DOM node to be passed as child to the component
   */
  children?: React.ReactNode;
  /**
   * The tabindex global attribute indicates that its element can be focused, and
   * where it participates in sequential keyboard navigation.
   */
  tabIndex?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>['tabIndex'];
}

export const Icon = (props: IconProps) => {
  const { appearance, className, size, children, type, tabIndex } = props;
  const accessibilityProps = useAccessibilityProps(props);

  const baseProps = extractBaseProps(props);

  const getIconAppearance = (iconColor: string) => {
    const x = iconColor.indexOf('_');
    return iconColor.slice(0, x) + iconColor.charAt(x + 1).toUpperCase() + iconColor.slice(x + 2);
  };

  const color = appearance && appearance.includes('_') ? getIconAppearance(appearance) : appearance;

  const iconClass = classNames(
    {
      ['material-icons']: true, // change to !type || type === 'filled' after migration
      [`material-icons-${type}`]: type && type !== 'filled',
      ['Mds-Icon']: true,
      [`Mds-Icon--${color}`]: appearance,
    },
    className
  );

  const styles = {
    fontSize: `${size}px`,
    width: `${size}px`,
  };

  return (
    <i {...baseProps} className={iconClass} style={styles} {...accessibilityProps} tabIndex={tabIndex}>
      {type ? `${children}_${type}` : children}
    </i>
  );
};

Icon.displayName = 'Icon';
Icon.defaultProps = {
  size: 16,
  type: 'round',
};

export default Icon;
