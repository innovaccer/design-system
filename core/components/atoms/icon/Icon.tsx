import * as React from 'react';
import classNames from 'classnames';

export type Appearance = 'default' | 'destructive' | 'white' | 'subtle' | 'disabled' | 'info' | 'alert' | 'warning' | 'success';

export type IconType = 'filled' | 'outline' | 'rounded' | 'sharp';

export interface IconProps {
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
  /**
   * Adds className to `Card` component
   */
  className?: string;
}

export const Icon = (props: IconProps) => {
  const {
    appearance = 'default',
    type = 'filled',
    className,
    name,
    size,
    onClick,
  } = props;

  const iconClass = classNames({
    ['material-icons']: true,
    ['Icon']: true,
    [`Icon--${appearance}`]: appearance,
    [`${className}`]: className
  });

  const styles = {
    fontSize: (size) ? `${size}px` : 'var(--font-size)',
    width: (size) ? `${size}px` : 'var(--font-size)',
  };

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  return (
    <i
      className={iconClass}
      style={styles}
      onClick={onClickHandler}
    >
      {`${name}_${type}`}
    </i>
  );
};

Icon.displayName = 'Icon';

export default Icon;
