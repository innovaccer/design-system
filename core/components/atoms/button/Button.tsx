import * as React from 'react';
import Spinner from '@/components/atoms/spinner';
import Icon from '@/components/atoms/icon';
import classNames from 'classnames';

export type Appearance = 'basic' | 'primary' | 'success' | 'alert' | 'transparent';

export type Size = 'tiny' | 'regular' | 'large';

export type Alignment = 'left' | 'right';

export interface ButtonProps {
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
  children?: string;
  /**
   * Handler to be called when `Button` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const sizeMapping = {
  tiny: 12,
  regular: 16,
  large: 20,
};

export const Button = (props: ButtonProps) => {
  const {
    appearance = 'basic',
    size = 'regular',
    iconAlign = 'left',
    children,
    icon,
    expanded,
    loading,
    disabled,
    ...rest
  } = props;

  const buttonClass = classNames({
    ['Button']: true,
    ['Button--expanded']: expanded,
    [`Button--${size}`]: size,
    ['Button--square']: !children,
    [`Button--${appearance}`]: appearance,
    [`Button--iconAlign-${iconAlign}`]: children && iconAlign,
  });

  const iconClass = classNames({
    ['Button-icon']: true,
    [`Button-icon--${iconAlign}`]: children && iconAlign
  });

  return (
    <button className={buttonClass} disabled={disabled || loading} {...rest} >
      {loading && <Spinner size="small" appearance={(appearance === 'basic' || appearance === 'transparent') ? 'secondary' : 'white'} />}
      {icon && !loading && (
        <div className={iconClass}>
          <Icon
            name={icon}
            appearance={disabled ? 'disabled' : (appearance === 'basic' || appearance === 'transparent') ? 'default' : 'white'}
            size={sizeMapping[size]}
          />
        </div>
      )}
      {children && `${children.charAt(0).toUpperCase()}${children.slice(1)}`}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
