import * as React from 'react';
import classNames from 'classnames';
import { Icon, Text } from '@/index';
import { IconType } from '@/common.type';
import dropdownButtonStyles from '@css/components/dropdownButton.module.css';
import buttonStyles from '@css/components/button.module.css';
import textStyles from '@css/components/text.module.css';

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
   * Set type of Icon
   */
  iconType?: IconType;
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
  children?: string | number;
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
    iconType,
    ...rest
  } = props;

  const buttonDisabled = disabled ? 'disabled' : 'default';
  const trimmedPlaceholder = placeholder.trim();
  const value = children ? children : trimmedPlaceholder;
  const iconName = !menu ? 'keyboard_arrow_down' : icon ? icon : 'more_horiz';

  const buttonClass = classNames({
    [buttonStyles['Button']]: true,
    [dropdownButtonStyles.DropdownButton]: true,
    [dropdownButtonStyles[`DropdownButton--${triggerSize}`]]: triggerSize,
    [dropdownButtonStyles[`DropdownButton--${triggerSize}Square`]]: menu,
    [dropdownButtonStyles['DropdownButton--placeholder']]: !children && !menu,
    [dropdownButtonStyles['DropdownButton--icon']]: icon,
    [dropdownButtonStyles['DropdownButton--open']]: open,
    [dropdownButtonStyles['DropdownButton--error']]: error,
  });

  const textClass = classNames({
    [textStyles['Text']]: true,
    [textStyles['Text--regular']]: true,
    [dropdownButtonStyles['DropdownButton-text']]: true,
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
        <div className={dropdownButtonStyles['DropdownButton-wrapper']}>
          {inlineLabel && (
            <Text appearance="subtle" className="mr-4 white-space-nowrap">
              {`${inlineLabel.trim().charAt(0).toUpperCase()}${inlineLabel.trim().slice(1)}`}
            </Text>
          )}
          {icon && !inlineLabel && (
            <Icon appearance={buttonDisabled} className="d-flex align-items-center mr-4" name={icon} type={iconType} />
          )}
          {value && <span className={textClass}>{value}</span>}
        </div>
      )}
      <Icon appearance={buttonDisabled} name={iconName} type={iconType} />
    </button>
  );
});

DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;
