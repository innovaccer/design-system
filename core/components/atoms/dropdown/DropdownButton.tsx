import * as React from 'react';
import classNames from 'classnames';
import { Icon, Text } from '@/index';
import { IconType } from '@/common.type';
import useComponentId from '@/utils/useComponentId';
import dropdownButtonStyles from '@css/components/dropdownButton.module.css';
import buttonStyles from '@css/components/button.module.css';
import textStyles from '@css/components/text.module.css';

export type DropDownButtonSize = 'tiny' | 'regular';

const visuallyHiddenStyles: React.CSSProperties = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
};

const joinAriaIds = (...ids: Array<string | undefined>) => {
  const validIds = ids.filter((id): id is string => Boolean(id && id.trim()));

  return validIds.length > 0 ? validIds.join(' ') : undefined;
};

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
  /**
   * Accessible name for dropdown trigger button.
   */
  'aria-label'?: string;
  /**
   * Associates dropdown trigger with an external label.
   */
  'aria-labelledby'?: string;
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
    iconType,
    ...rest
  } = props;

  const buttonDisabled = disabled ? 'disabled' : 'default';
  const trimmedPlaceholder = placeholder.trim();
  const value = children ? children : trimmedPlaceholder;
  const iconName = !menu ? 'keyboard_arrow_down' : icon ? icon : 'more_horiz';
  const trimmedInlineLabel = inlineLabel?.trim();

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

  const valueId = useComponentId('dropdown-trigger-value');
  const inlineLabelId = useComponentId('dropdown-trigger-inline-label');
  const assistiveLabelId = useComponentId('dropdown-trigger-label');
  const hasVisibleValue = !!children;
  const resolvedAccessibleLabel = props['aria-label']?.trim() || trimmedInlineLabel || trimmedPlaceholder;
  const shouldUseAssistiveLabel = hasVisibleValue && !props['aria-labelledby'] && !trimmedInlineLabel;
  const ariaLabel =
    !hasVisibleValue && !props['aria-labelledby'] ? props['aria-label']?.trim() || trimmedInlineLabel : undefined;
  const ariaLabelledBy = hasVisibleValue
    ? joinAriaIds(
        props['aria-labelledby'],
        !props['aria-labelledby'] && trimmedInlineLabel ? inlineLabelId : undefined,
        shouldUseAssistiveLabel ? assistiveLabelId : undefined,
        valueId
      )
    : props['aria-labelledby'];

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
      aria-haspopup={menu ? 'menu' : 'listbox'}
      aria-expanded={open}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {shouldUseAssistiveLabel && (
        <span id={assistiveLabelId} style={visuallyHiddenStyles}>
          {resolvedAccessibleLabel}
        </span>
      )}
      {!menu && (
        <div className={dropdownButtonStyles['DropdownButton-wrapper']}>
          {inlineLabel && (
            <Text
              id={!props['aria-labelledby'] && hasVisibleValue ? inlineLabelId : undefined}
              appearance="subtle"
              className="mr-4 white-space-nowrap"
            >
              {`${inlineLabel.trim().charAt(0).toUpperCase()}${inlineLabel.trim().slice(1)}`}
            </Text>
          )}
          {icon && !inlineLabel && (
            <Icon appearance={buttonDisabled} className="d-flex align-items-center mr-4" name={icon} type={iconType} />
          )}
          {value && (
            <span id={hasVisibleValue ? valueId : undefined} className={textClass}>
              {value}
            </span>
          )}
        </div>
      )}
      <Icon appearance={buttonDisabled} name={iconName} type={iconType} />
    </button>
  );
});

DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;
