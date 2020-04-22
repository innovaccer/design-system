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
    children,
    width,
    placeholder,
    icon,
    disabled,
    inlineLabel,
    ...rest
  } = props;

  const buttonClass = classNames({
    ['Button']: true,
    ['Button--basic']: true,
    ['Button--square']: !children,
    ['DropdownButton']: true,
    [`DropdownButton--${size}`]: size,
    ['DropdownButton--icon']: icon,
    ['DropdownButton--moreIcon']: !placeholder && !children,
    ['DropdownButton--placeholder']: placeholder && !children,
    ['DropdownButton--label']: inlineLabel,
  });

  const labelClass = classNames({
    ['DropdownButton-label']: true,
  });

  const style = {
    minWidth: width,
    maxWidth: width,
  };

  const appearance = disabled ? 'disabled' : 'default';
  const value = children ? children : placeholder;
  const iconName = value ? 'keyboard_arrow_down' : 'more_horiz';

  return (
    <button
      ref={ref}
      value={children}
      className={buttonClass}
      disabled={disabled}
      style={!placeholder && !children ? {} : style}
      {...rest}
    >
      {value && (
        <div className="DropdownButton-wrapper">
          {(inlineLabel && !icon) && (
            <div className={labelClass}> {inlineLabel.charAt(0).toUpperCase()}{inlineLabel.slice(1)} </div>
          )}
          {(icon && !inlineLabel) && <Icon appearance={appearance} helpers={['mr-4']} name={icon} />}
          <div className={'DropdownButton-text'}>{value && `${value.charAt(0).toUpperCase()}${value.slice(1)}`}</div>
        </div>
      )}
      <Icon appearance={appearance} name={iconName} />
    </button>
  );
});

DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;
