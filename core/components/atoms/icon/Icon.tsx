import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Appearance = 'default' | 'destructive' | 'white' | 'subtle' | 'disabled' | 'info' | 'alert' | 'warning' | 'success';
export type IconType = 'filled'
  | 'outlined'
  | 'outline'
  | 'rounded'
  | 'round'
  | 'two-tone'
  | 'sharp';      // 'outline', 'rounded' to be deprecated soon.

export interface IconProps extends BaseProps {
  /**
   * Material icon name
   */
  name: string;
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
   * Color of `Icon`
   */
  appearance: Appearance;
  /**
   * Handler to be called when icon is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const Icon = (props: IconProps) => {
  const {
    appearance,
    className,
    name,
    size,
    onClick
  } = props;

  const baseProps = extractBaseProps(props);

  const mapper = (val: IconProps['type']) => {
    if (val === 'outline') return 'outlined';
    if (val === 'rounded') return 'round';
    return val;
  };

  const type = mapper(props.type);

  const iconClass = classNames({
    ['material-icons']: true,       // change to !type || type === 'filled' after migration
    [`material-icons-${mapper(type)}`]: type && type !== 'filled',
    ['Icon']: true,
    [`Icon--${appearance}`]: appearance,
    [`${className}`]: className
  });

  const styles = {
    fontSize: `${size}px`,
    width: `${size}px`,
  };

  // change `children` to {name} after migration
  return (
    <i
      {...baseProps}
      className={iconClass}
      style={styles}
      onClick={onClick}
    >
      {type ? `${name}_${type}` : name}
    </i>
  );
};

Icon.displayName = 'Icon';
Icon.defaultProps = {
  appearance: 'default',
  size: 16
};

export default Icon;
