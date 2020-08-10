import * as React from 'react';
import Spinner from '@/components/atoms/spinner';
import Icon from '@/components/atoms/icon';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';

export type Appearance = 'basic' | 'primary' | 'success' | 'alert' | 'transparent';

export type Size = 'tiny' | 'regular' | 'large';

export type Alignment = 'left' | 'right';

export interface ButtonProps extends BaseProps {
  /**
   * The size of `Button`
   * @default "regular"
   */
  size?: Size;
  /**
   * Color of the `Button`
   * @default "basic"
   */
  appearance?: Appearance;
  /**
   * Disables the `Button`, making it unable to be pressed
   */
  disabled?: boolean;
  /**
   * Expands the `Button` to full width
   */
  expanded?: boolean;
  /**
   * Adds loader inside `Button` when waiting for an action to complete
   */
  loading?: boolean;
  /**
   * Name of icon that is to be added inside `Button`
   * Material icon name
   */
  icon?: string;
  /**
   * Align icon left or right
   * @default "left"
   */
  iconAlign?: Alignment;
  /**
   * Text to be added inside `Button`
   */
  children?: React.ReactText;
  /**
   * Specifies tab index of `Button`
   */
  tabIndex?: number;
  /**
   * Handler to be called when `Button` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer enters `Button`.
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer leaves `Button`.
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const sizeMapping = {
  tiny: 12,
  regular: 16,
  large: 20,
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    appearance = 'basic',
    size = 'regular',
    iconAlign = 'left',
    tabIndex = 0,
    children,
    icon,
    expanded,
    loading,
    disabled,
    className,
    ...rest
  } = props;

  const buttonClass = classNames({
    ['Button']: true,
    ['Button--expanded']: expanded,
    [`Button--${size}`]: size,
    ['Button--square']: !children,
    [`Button--${appearance}`]: appearance,
    [`Button--iconAlign-${iconAlign}`]: children && iconAlign,
    [`${className}`]: className
  });

  const iconClass = classNames({
    ['Button-icon']: true,
    [`Button-icon--${iconAlign}`]: children && iconAlign
  });

  const spinnerClass = classNames({
    ['Button-spinner']: true,
    [`Button-spinner--${iconAlign}`]: children && iconAlign
  });

  return (
    <button ref={ref} className={buttonClass} disabled={disabled || loading} tabIndex={tabIndex} {...rest} >
      {loading && (
        <span className={spinnerClass}>
          <Spinner size="small" appearance={(appearance === 'basic' || appearance === 'transparent') ? 'secondary' : 'white'} />
        </span>
      )}
      {icon && !loading && (
        <div className={iconClass}>
          <Icon
            name={icon}
            appearance={disabled ? 'disabled' : (appearance === 'basic' || appearance === 'transparent') ? 'default' : 'white'}
            size={sizeMapping[size]}
          />
        </div>
      )}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
