import * as React from 'react';
import Spinner from '@/components/atoms/spinner';
import classNames from 'classnames';

type ReactMouseEvent = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

export type Appearance = 'basic' | 'primary' | 'success' | 'alert' | 'transparent';

export type Size = 'tiny' | 'regular' | 'large';

export type Alignment = 'left' | 'right';

export interface IButtonProps {
  size?: Size;
  appearance?: Appearance;
  disabled?: boolean;
  expanded?: boolean;
  loading?: boolean;
  icon?: string;
  iconAlign?: Alignment;
  children?: string;
  onClick?: ReactMouseEvent;
  onMouseEnter?: ReactMouseEvent;
  onMouseLeave?: ReactMouseEvent;
}

const Button: React.FunctionComponent<IButtonProps> = props => {
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
