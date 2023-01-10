import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { useAccessibilityProps } from '@/accessibility/utils';
import { Color as IconColor } from '@/common.type';

export type IconAppearance =
  | 'default'
  | 'destructive'
  | 'white'
  | 'subtle'
  | 'disabled'
  | 'info'
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
export type IconType = 'filled' | 'outlined' | 'outline' | 'rounded' | 'round' | 'two-tone' | 'sharp'; // 'outline', 'rounded' to be deprecated soon.

export interface IconProps extends BaseProps {
  /**
   * Material icon name
   */
  name?: string;
  /**
   * Size of `Icon`
   */
  size: number;
  /**
   * Type of material `Icon`
   *
   * ** `'outline' | 'rounded'` will be deprecated**
   */
  type?: IconType;
  /**
   * State of `Icon`    // 'info' appearance will be deprecated soon.
   */
  appearance?: IconAppearance;
  /**
   * Color of `Icon`
   */
  color?: IconColor;
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
  const { appearance, className, name, size, children, color } = props;
  const accessibilityProps = useAccessibilityProps(props);

  const baseProps = extractBaseProps(props);

  const mapper = (val: IconProps['type']) => {
    if (val === 'outline') return 'outlined';
    if (val === 'rounded') return 'round';
    return val;
  };

  const type = mapper(props.type);

  const getIconAppearance = (iconColor: string) => {
    const x = iconColor.indexOf('_');
    return iconColor.slice(0, x) + iconColor.charAt(x + 1).toUpperCase() + iconColor.slice(x + 2);
  };

  const iconAppearance = appearance && appearance.includes('_') ? getIconAppearance(appearance) : appearance;

  const iconClass = classNames({
    ['material-icons']: true, // change to !type || type === 'filled' after migration
    [`material-icons-${mapper(type)}`]: type && type !== 'filled',
    ['Icon']: true,
    [`Icon--${iconAppearance}`]: !color && appearance,
    [`color-${color}`]: color,
    [`${className}`]: className,
  });

  const styles = {
    fontSize: `${size}px`,
    width: `${size}px`,
  };

  // change `children` to {name} after migration
  if (children && React.isValidElement(children)) {
    return (
      <span {...baseProps} className={className}>
        {children}
      </span>
    );
  }
  return (
    <i data-test="DesignSystem-Icon" {...baseProps} className={iconClass} style={styles} {...accessibilityProps}>
      {type ? `${name}_${type}` : name}
    </i>
  );
};

Icon.displayName = 'Icon';
Icon.defaultProps = {
  size: 16,
  type: 'round',
};

export default Icon;
