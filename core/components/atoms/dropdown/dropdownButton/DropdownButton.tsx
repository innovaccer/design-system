import * as React from 'react';
import classNames from 'classnames';
import Icon from '@/components/atoms/icon';

type ReactMouseEvent = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

export type Size = 'tiny' | 'regular';

export interface DropdownButtonProps {
  /**
   * @default "regular"
   */
  size?: Size;
  disabled?: boolean;
  menu?: boolean;
  icon?: string;
  inlineLabel?: string;
  placeholder?: string;
  children?: string;
  width?: React.ReactText;
  onClick?: ReactMouseEvent;
  onMouseEnter?: ReactMouseEvent;
  onMouseLeave?: ReactMouseEvent;
}

const DropdownButton = React.forwardRef<HTMLButtonElement, DropdownButtonProps>((props, ref) => {
  const {
    size = 'regular',
    placeholder = 'Select',
    menu = false,
    children,
    width,
    icon,
    disabled,
    inlineLabel,
    ...rest
  } = props;

  const appearance = disabled ? 'disabled' : 'default';
  const trimmedPlaceholder = placeholder.trim();
  const value = children ? children : trimmedPlaceholder ? trimmedPlaceholder : 'Select';
  const iconName = !menu ? 'keyboard_arrow_down' : icon ? icon : 'more_horiz';
  const label = inlineLabel && inlineLabel.trim();

  const buttonClass = classNames({
    ['Button']: true,
    ['Button--transparent']: true,
    ['Button--square']: !children,
    ['DropdownButton']: true,
    [`DropdownButton--${size}`]: size,
    ['DropdownButton--icon']: icon,
    ['DropdownButton--moreIcon']: menu,
    ['DropdownButton--placeholder']: !children && !menu,
    ['DropdownButton--label']: label,
  });

  const labelClass = classNames({
    ['DropdownButton-label']: true,
  });

  const style = {
    width,
  };

  return (
    <button
      ref={ref}
      value={children}
      className={buttonClass}
      disabled={disabled}
      style={menu ? {} : style}
      {...rest}
    >
      {!menu && (
        <div className="DropdownButton-wrapper">
          {label && (
            <div className={labelClass}> {label.trim().charAt(0).toUpperCase()}{label.trim().slice(1)} </div>
          )}
          {(icon && !inlineLabel) && <Icon appearance={appearance} className="mr-4" name={icon} />}
          <div className={'DropdownButton-text'}>{value && `${value.charAt(0).toUpperCase()}${value.slice(1)}`}</div>
        </div>
      )}
      <Icon appearance={appearance} name={iconName} />
    </button>
  );
});

DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;
