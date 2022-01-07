import * as React from 'react';
import classNames from 'classnames';
import { Icon, Text } from '@/index';

export type DropDownButtonSize = 'tiny' | 'regular';

export interface TriggerProps {
  /**
   * Size of `Dropdown` trigger button
   * @default "regular"
   */
  triggerSize?: DropDownButtonSize;
  /**
   * Material icon name
   */
  icon?: string;
  /**
   * String to show inside `Dropdown trigger` when no options are selected
   * @default "Select"
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
}

export interface DropdownButtonProps extends TriggerProps {
  children?: React.ReactText;
  open?: boolean;
}

const DropdownButton = React.forwardRef<HTMLButtonElement, DropdownButtonProps>((props, ref) => {
  const {
    triggerSize = 'regular',
    placeholder = 'Select',
    menu = false,
    children,
    icon,
    disabled,
    open,
    inlineLabel,
    error,
    ...rest
  } = props;

  const buttonDisabled = disabled ? 'disabled' : 'default';
  const trimmedPlaceholder = placeholder.trim();
  const value = children ? children : trimmedPlaceholder;
  const iconName = !menu ? 'keyboard_arrow_down' : icon ? icon : 'more_horiz';

  const buttonClass = classNames({
    ['Button']: true,
    ['DropdownButton']: true,
    [`DropdownButton--${triggerSize}`]: triggerSize,
    [`DropdownButton--${triggerSize}Square`]: menu,
    ['DropdownButton--placeholder']: !children && !menu,
    ['DropdownButton--icon']: icon,
    ['DropdownButton--open']: open,
    ['DropdownButton--error']: error,
  });

  const textClass = classNames({
    ['Text']: true,
    ['Text--regular']: true,
    ['DropdownButton-text']: true,
  });

  return (
    <button
      ref={ref}
      type="button"
      value={children}
      className={buttonClass}
      disabled={disabled}
      tabIndex={0}
      data-test="DesignSystem-DropdownTrigger"
      {...rest}
    >
      {!menu && (
        <div className="DropdownButton-wrapper">
          {inlineLabel && (
            <Text appearance="subtle" className="mr-4 white-space-nowrap">
              {`${inlineLabel.trim().charAt(0).toUpperCase()}${inlineLabel.trim().slice(1)}`}
            </Text>
          )}
          {icon && !inlineLabel && (
            <Icon appearance={buttonDisabled} className="d-flex align-items-center mr-4" name={icon} />
          )}
          {value && <span className={textClass}>{value}</span>}
        </div>
      )}
      <Icon appearance={buttonDisabled} name={iconName} />
    </button>
  );
});

DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;
