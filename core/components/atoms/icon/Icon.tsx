import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Appearance =
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
   * Color of `Icon`    // 'info' appearance will be deprecated soon.
   */
  appearance?: Appearance;
  /**
   * Handler to be called when icon is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /**
   * DOM node to be passed as child to the component
   */
  children?: React.ReactNode;
}

export const Icon = (props: IconProps) => {
  const { appearance, className, name, size, onClick, children } = props;

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

  const color = appearance && appearance.includes('_') ? getIconAppearance(appearance) : appearance;

  const iconClass = classNames({
    ['material-icons']: true, // change to !type || type === 'filled' after migration
    [`material-icons-${mapper(type)}`]: type && type !== 'filled',
    ['Icon']: true,
    [`Icon--${color}`]: appearance,
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
  // TODO(a11y): fix accessibility
  /* eslint-disable */
  return (
    <i {...baseProps} className={iconClass} style={styles} onClick={onClick}>
      {type ? `${name}_${type}` : name}
    </i>
  );
  /* eslint-enable */
};

Icon.displayName = 'Icon';
Icon.defaultProps = {
  size: 16,
  type: 'round',
};

export default Icon;
