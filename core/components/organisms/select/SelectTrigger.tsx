import * as React from 'react';
import classNames from 'classnames';
import { Icon, Text, Tooltip } from '@/index';
import { IconType } from '@/common.type';
import { SelectContext } from './SelectContext';
import { handleKeyDownTrigger, computeValue, getLabelTextFromElement } from './utils';
import { BaseProps } from '@/utils/types';
import selectStyles from '@css/components/select.module.css';
import buttonStyles from '@css/components/button.module.css';
import textStyles from '@css/components/text.module.css';

export type SelectTriggerSize = 'small' | 'regular';

export interface SelectTriggerProps extends BaseProps {
  /**
   * `id` for the trigger button; pair with a visible `<Label htmlFor={id}>`.
   */
  id?: string;
  /**
   * Accessible label for the Select trigger button.
   * @default "Select trigger"
   */
  'aria-label'?: string;
  /**
   * Associates the trigger with a visible label element (preferred over `aria-label`).
   */
  'aria-labelledby'?: string;
  /**
   * Ids of supplementary description or help text (space-separated).
   */
  'aria-describedby'?: string;
  /**
   * Id of the element that describes the validation error for this control.
   */
  'aria-errormessage'?: string;
  /**
   * Invalid state for assistive tech; when context `error` is true this becomes `true` automatically.
   */
  'aria-invalid'?: boolean | 'true' | 'false' | 'grammar' | 'spelling';
  /**
   * Id of the listbox element controlled by this combobox trigger.
   */
  'aria-controls'?: string;
  /**
   * Specifies the size of the Select trigger button.
   * @default "regular"
   */
  triggerSize?: SelectTriggerSize;
  /**
   * Specifies the name of the icon to be displayed in the trigger button
   */
  icon?: string;
  /**
   * Specifies the type of icon to be displayed in the trigger button
   */
  iconType?: IconType;
  /**
   * Placeholder text to display in the Select trigger when no options are selected
   * @default "Select"
   */
  placeholder?: string;
  /**
   * Optional label displayed inline inside the Select trigger button
   */
  inlineLabel?: string;
  /**
   * Indicates whether the Select trigger is disabled
   */
  disabled?: boolean;
  /**
   * Determines whether the clear icon should be displayed in the trigger
   * @default true
   */
  withClearButton?: boolean;
  /**
   * Handler called when the clear button within the Select trigger is clicked
   */
  onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /**
   * Accessible name for the clear button. Defaults to `Clear {field label}` when the
   * trigger has `aria-label` or `aria-labelledby`.
   */
  clearButtonAriaLabel?: string;
  /**
   * A function used to customize the label displayed when multiple options are selected.
   *
   * The function receives the count of selected options as its argument and should return a string
   * representing the label to be displayed.
   * */
  setLabel?: (count: number) => string | undefined;
  /**
   * Minimum width of the Select trigger button.
   */
  minWidth?: number | string;
  /**
   * Maximum width of the Select trigger button.
   */
  maxWidth?: number | string;
}

const SelectTrigger = (props: SelectTriggerProps) => {
  const {
    triggerSize = 'regular',
    'aria-label': ariaLabelProp,
    'aria-labelledby': ariaLabelledBy,
    placeholder,
    withClearButton,
    icon,
    disabled,
    inlineLabel,
    iconType,
    onClear,
    clearButtonAriaLabel: clearButtonAriaLabelProp,
    setLabel,
    minWidth,
    maxWidth,
    'aria-invalid': ariaInvalid,
    'aria-controls': ariaControls,
    ...rest
  } = props;

  const ariaLabel = ariaLabelledBy ? undefined : ariaLabelProp ?? 'Select trigger';

  const contextProp = React.useContext(SelectContext);
  const elementRef = React.useRef(null);

  const {
    openPopover,
    selectValue,
    setSelectValue,
    isOptionSelected,
    setIsOptionSelected,
    multiSelect,
    setOpenPopover,
    setHighlightFirstItem,
    setHighlightLastItem,
    triggerRef,
    width,
    styleType,
    error,
  } = contextProp;

  const hidePlaceholderFromA11y = !isOptionSelected && !!(ariaLabelledBy || ariaLabelProp);

  const [labelledByText, setLabelledByText] = React.useState<string>();

  React.useLayoutEffect(() => {
    if (!ariaLabelledBy) {
      setLabelledByText(undefined);
      return;
    }

    const labelId = ariaLabelledBy.split(/\s+/)[0];
    const labelEl = document.getElementById(labelId);
    setLabelledByText(labelEl ? getLabelTextFromElement(labelEl) : undefined);
  }, [ariaLabelledBy]);

  const clearButtonAriaLabel =
    clearButtonAriaLabelProp ??
    (ariaLabelledBy && labelledByText ? `Clear ${labelledByText}` : undefined) ??
    (ariaLabelProp && ariaLabelProp !== 'Select trigger' ? `Clear ${ariaLabelProp}` : undefined) ??
    'Clear selection';

  const buttonDisabled = disabled ? 'disabled' : 'default';
  const trimmedPlaceholder = placeholder?.trim();
  const displayValue = computeValue(multiSelect, selectValue, setLabel);
  const value = isOptionSelected && displayValue.length > 0 ? displayValue : trimmedPlaceholder;
  const iconName = openPopover ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
  const triggerStyle = {
    width: width,
    ...(minWidth !== undefined && { minWidth }),
    ...(maxWidth !== undefined && { maxWidth }),
  };

  const onClearHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const emptyValue = multiSelect ? [] : { label: '', value: '' };
    setSelectValue?.(emptyValue);
    setIsOptionSelected?.(false);
    if (onClear) {
      onClear(event);
    }
    triggerRef?.current?.focus({ preventScroll: true });
  };

  const buttonClass = classNames({
    [buttonStyles['Button']]: true,
    [selectStyles['Select-trigger']]: true,
    [selectStyles[`Select-trigger--${triggerSize}`]]: triggerSize,
    [selectStyles['Select-trigger--placeholder']]: !isOptionSelected,
    [selectStyles[`Select-trigger--${styleType}Placeholder`]]: !isOptionSelected && !!styleType,
    [selectStyles['Select-trigger--icon']]: icon,
    [selectStyles[`Select-trigger--${styleType}Open`]]: openPopover && !!styleType,
    [selectStyles[`Select-trigger--${styleType}`]]: !!styleType,
    [selectStyles['Select-trigger--error']]: !!error,
  });

  const textClass = classNames({
    [textStyles['Text']]: true,
    [textStyles['Text--regular']]: true,
    [selectStyles['Select-trigger--text']]: true,
    [selectStyles['Select-trigger--textSmall']]: triggerSize === 'small',
  });

  const triggerClass = classNames([selectStyles['Select-trigger-wrapper']], 'ellipsis--noWrap');

  const inlineLabelClass = classNames({
    'white-space-nowrap': true,
  });

  const iconClass = classNames('align-items-center', 'mr-2', 'ml-3', 'p-3-5', selectStyles['Select-crossButton']);
  const iconSize = triggerSize === 'small' ? 14 : 16;
  const triggerTextSize = triggerSize === 'small' ? 'small' : 'regular';
  return (
    <Tooltip
      showOnTruncation={true}
      showTooltip={!openPopover}
      tooltip={value}
      elementRef={elementRef}
      triggerClass="w-100"
    >
      <button
        ref={triggerRef as React.RefObject<HTMLButtonElement>}
        onKeyDown={(event) => handleKeyDownTrigger(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem)}
        type="button"
        className={buttonClass}
        disabled={disabled}
        tabIndex={0}
        style={triggerStyle}
        role="combobox"
        aria-controls={ariaControls}
        aria-expanded={openPopover}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        data-test="DesignSystem-Select-trigger"
        {...rest}
      >
        {
          <div className={triggerClass}>
            {inlineLabel && (
              <Text appearance="subtle" className={`${inlineLabelClass} mr-4`} size={triggerTextSize}>
                {`${inlineLabel.trim().charAt(0).toUpperCase()}${inlineLabel.trim().slice(1)}`}
              </Text>
            )}
            {icon && !inlineLabel && (
              <Icon
                appearance={buttonDisabled}
                className="d-flex align-items-center mr-4"
                name={icon}
                type={iconType}
                size={iconSize}
                aria-hidden={true}
              />
            )}
            {value && (
              <span ref={elementRef} className={textClass} aria-hidden={hidePlaceholderFromA11y || undefined}>
                {value}
              </span>
            )}
          </div>
        }
        {isOptionSelected && withClearButton && (
          <button
            type="button"
            className={iconClass}
            onClick={onClearHandler}
            onKeyDown={(e) => e.stopPropagation()}
            aria-label={clearButtonAriaLabel}
            data-test="DesignSystem-Select--closeIcon"
          >
            <Icon appearance={buttonDisabled} size={12} name="close" type={iconType} aria-hidden={true} />
          </button>
        )}

        <Icon appearance={buttonDisabled} name={iconName} type={iconType} aria-hidden={true} />
      </button>
    </Tooltip>
  );
};

/* eslint-enable jsx-a11y/role-supports-aria-props */

SelectTrigger.defaultProps = {
  triggerSize: 'regular',
  placeholder: 'Select',
  withClearButton: true,
};

export default SelectTrigger;
