import * as React from 'react';
import Spinner from '@/components/atoms/spinner';
import classNames from 'classnames';

export type Appearance = 'basic' | 'primary' | 'success' | 'alert' | 'transparent';

export type Size = 'tiny' | 'regular' | 'large';

export type Alignment = 'left' | 'right';

export interface ButtonProps {
  /**
   * The size of `button`
   * @default "regular"
   */
  size?: Size;
  /**
   * Color of the `button`
   * @default "basic"
   */
  appearance?: Appearance;
  /**
   * Disables the `button`, making it unable to be pressed
   */
  disabled?: boolean;
  /**
   * Expands the `button` to full width
   */
  expanded?: boolean;
  /**
   * Adds loader inside `button` when waiting for an action to complete
   */
  loading?: boolean;
  /**
   * Name of icon that is to be added inside `button`
   * Material icon name
   */
  icon?: string;
  /**
   * Align icon left or right
   * @default "left"
   */
  iconAlign?: Alignment;
  /**
   * Text to be added inside `button`
   */
  children?: string;
  /**
   * Handler to be called when `button` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FunctionComponent<ButtonProps> = props => {
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
    ['material-icons']: true,
    ['Button-icon']: true,
    [`Button-icon--${iconAlign}`]: children && iconAlign
  });

  return (
    <button className={buttonClass} disabled={disabled || loading} {...rest} >
      {loading && <Spinner size="small" appearance={(appearance === 'basic' || appearance === 'transparent') ? 'secondary' : 'white'} />}
      {icon && !loading && <i className={iconClass}>{icon}</i>}
      {children && `${children.charAt(0).toUpperCase()}${children.slice(1)}`}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
