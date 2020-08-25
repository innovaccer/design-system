import * as React from 'react';
import classNames from 'classnames';
import Icon from '@/components/atoms/icon';

export type Size = 'tiny' | 'regular';

export interface TriggerProps {
  /**
   * Size of `Dropdown` trigger button
   * @default "regular"
   */
  triggerSize?: Size;
  /**
   * Material icon name
   */
  icon?: string;
  /**
   * String to show inside `Dropdown trigger` when no options are selected
   */
  placeholder?: string;
  /**
   * Label inside `Dropdown trigger button`
   */
  inlineLabel?: string;
  /**
   * Determines if `Dropdown` is disabled
   */
  disabled?: boolean;
  /**
   * Determines if type of `dropdown` is a menu
   * @default false
   */
  menu?: boolean;
  /**
   * Determines if `Dropdown` has error
   */
  error?: boolean;
  /**
   * Adds max width to `Dropdown`
   */
  maxWidth?: number;
}

export interface DropdownButtonProps extends TriggerProps {
  children?: React.ReactText;
}

const DropdownButton = React.forwardRef<HTMLButtonElement, DropdownButtonProps>((props, ref) => {
  const {
    triggerSize = 'regular',
    placeholder = 'Select',
    menu = false,
    children,
    maxWidth,
    icon,
    disabled,
    inlineLabel,
    error,
    ...rest
  } = props;

  const buttonDisabled = disabled ? 'disabled' : 'default';
  const trimmedPlaceholder = placeholder.trim();
  const value = children ? children : trimmedPlaceholder ? trimmedPlaceholder : 'Select';
  const iconName = !menu ? 'keyboard_arrow_down' : icon ? icon : 'more_horiz';
  const label = inlineLabel && inlineLabel.trim();

  const buttonClass = classNames({
    ['Button']: true,
    ['Button--basic']: true,
    ['Button--square']: !children,
    ['DropdownTrigger']: true,
    ['DropdownButton']: true,
    [`DropdownButton--${triggerSize}`]: triggerSize,
    ['DropdownButton--icon']: icon,
    ['DropdownButton--moreIcon']: menu,
    ['DropdownButton--placeholder']: !children && !menu,
    ['DropdownButton--label']: label,
    ['DropdownButton--error']: error,
  });

  const labelClass = classNames({
    ['DropdownButton-label']: true,
  });

  return (
    <button
      ref={ref}
      type="button"
      value={children}
      className={buttonClass}
      disabled={disabled}
      style={{ maxWidth: maxWidth ? maxWidth : '100%' }}
      tabIndex={0}
      {...rest}
    >
      {!menu && (
        <div className="DropdownButton-wrapper">
          {label && (
            <div className={labelClass}> {label.trim().charAt(0).toUpperCase()}{label.trim().slice(1)} </div>
          )}
          {(icon && !inlineLabel) && <Icon appearance={buttonDisabled} className="mr-4" name={icon} />}
          <div className={'DropdownButton-text'}>{value && `${value}`}</div>
        </div>
      )}
      <Icon appearance={buttonDisabled} name={iconName} />
    </button>
  );
});

DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;
