import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Appearance = 'default' | 'destructive' | 'white' | 'subtle' | 'disabled' | 'info' | 'alert' | 'warning' | 'success';

export type IconType = 'filled' | 'outline' | 'rounded' | 'sharp';

export interface IconProps extends BaseProps {
  /**
   * Material icon name
   */
  name: string;
  /**
   * Size of `Icon`
   */
  size?: number;
  /**
   * Type of material `Icon`
   * @default "filled"
   */
  type?: IconType;
  /**
   * Color of `Icon`
   * @default "default"
   */
  appearance?: Appearance;
  /**
   * Handler to be called when icon is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const Icon = (props: IconProps) => {
  const {
    appearance,
    type,
    className,
    name,
    size,
    onClick
  } = props;

  const baseProps = extractBaseProps(props);

  const iconClass = classNames({
    ['material-icons']: true,
    ['Icon']: true,
    [`Icon--${appearance}`]: appearance,
    [`${className}`]: className
  });

  const styles = {
    fontSize: `${size}px`,
    width: `${size}px`,
  };

  return (
    <i
      {...baseProps}
      className={iconClass}
      style={styles}
      onClick={onClick}
    >
      {`${name}_${type}`}
    </i>
  );
};

Icon.defaultProps = {
  appearance: 'default',
  type: 'filled',
  size: 16
};

Icon.displayName = 'Icon';

export default Icon;
