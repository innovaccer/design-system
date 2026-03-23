import * as React from 'react';
import classNames from 'classnames';
import { Icon, Text, Tooltip } from '@/index';
import { IconType } from '@/common.type';
import { SelectContext } from './SelectContext';
import { handleKeyDownTrigger, computeValue } from './utils';
import { BaseProps } from '@/utils/types';
import useComponentId from '@/utils/useComponentId';
import selectStyles from '@css/components/select.module.css';
import buttonStyles from '@css/components/button.module.css';
import textStyles from '@css/components/text.module.css';

export type SelectTriggerSize = 'small' | 'regular';

const joinAriaIds = (...ids: Array<string | undefined>) => {
  const validIds = ids.filter((id): id is string => Boolean(id && id.trim()));

  return validIds.length > 0 ? validIds.join(' ') : undefined;
};

export interface SelectTriggerProps extends BaseProps {
  /**
   * Accessible label for the Select trigger button.
   * @default "Select trigger"
   */
  'aria-label'?: string;
  /**
   * Associates the Select trigger button with an external label.
   */
  'aria-labelledby'?: string;
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
   * Custom accessible label for the clear button.
   * Defaults to "Clear {inlineLabel || placeholder || 'selection'}"
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
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    placeholder,
    withClearButton,
    icon,
    disabled,
    inlineLabel,
    iconType,
    onClear,
    clearButtonAriaLabel,
    setLabel,
    minWidth,
    maxWidth,
    ...rest
  } = props;

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

  const displayValue = computeValue(multiSelect, selectValue, setLabel);
  const hasVisibleValue = isOptionSelected && displayValue.length > 0;
  const inlineLabelId = useComponentId('select-trigger-inline-label');
  const trimmedInlineLabel = inlineLabel?.trim();
  const resolvedAccessibleLabel = ariaLabel?.trim() || trimmedInlineLabel || placeholder?.trim() || 'Select';
  const resolvedAriaLabel = !ariaLabelledby ? resolvedAccessibleLabel : undefined;
  const resolvedAriaLabelledBy = ariaLabelledby
    ? joinAriaIds(ariaLabelledby, !ariaLabelledby && trimmedInlineLabel ? inlineLabelId : undefined)
    : trimmedInlineLabel && hasVisibleValue
    ? inlineLabelId
    : undefined;

  const buttonDisabled = disabled ? 'disabled' : 'default';
  const trimmedPlaceholder = placeholder?.trim();
  const value = hasVisibleValue ? displayValue : trimmedPlaceholder;
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
  const clearLabel = clearButtonAriaLabel || `Clear ${inlineLabel || ariaLabel || placeholder || 'selection'}`;

  return (
    <Tooltip
      showOnTruncation={true}
      showTooltip={!openPopover}
      tooltip={value}
      elementRef={elementRef}
      triggerClass="w-100"
    >
      <div
        ref={triggerRef}
        onKeyDown={(event) => {
          if (disabled) return;
          if (event.currentTarget !== event.target) return;
          if (
            !openPopover &&
            isOptionSelected &&
            (event.key === 'Backspace' || event.key === 'Delete') &&
            withClearButton
          ) {
            event.preventDefault();
            onClearHandler(event as any);
            return;
          }
          handleKeyDownTrigger(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);
        }}
        className={buttonClass}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : 0}
        style={triggerStyle}
        data-test="DesignSystem-Select-trigger"
        {...rest}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={openPopover}
        aria-label={resolvedAriaLabel}
        aria-labelledby={resolvedAriaLabelledBy}
        aria-controls={rest['aria-controls']}
      >
        {
          <div className={triggerClass}>
            {inlineLabel && (
              <Text
                id={!ariaLabelledby && hasVisibleValue ? inlineLabelId : undefined}
                appearance="subtle"
                className={`${inlineLabelClass} mr-4`}
                size={triggerTextSize}
              >
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
              />
            )}
            {value && (
              <span ref={elementRef} className={textClass}>
                {value}
              </span>
            )}
          </div>
        }
        {isOptionSelected && withClearButton && (
          <button
            type="button"
            className={iconClass}
            aria-label={clearLabel}
            disabled={disabled}
            onClick={onClearHandler}
            data-test="DesignSystem-Select--closeIcon"
          >
            <Icon appearance={buttonDisabled} name="close" size={12} type={iconType} aria-hidden />
          </button>
        )}

        <Icon appearance={buttonDisabled} name={iconName} type={iconType} aria-hidden />
      </div>
    </Tooltip>
  );
};

SelectTrigger.defaultProps = {
  triggerSize: 'regular',
  placeholder: 'Select',
  withClearButton: true,
};

export default SelectTrigger;
