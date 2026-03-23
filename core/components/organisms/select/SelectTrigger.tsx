import * as React from 'react';
import classNames from 'classnames';
import { Icon, Text, Tooltip } from '@/index';
import { IconType } from '@/common.type';
import { SelectContext } from './SelectContext';
import { handleKeyDownTrigger, computeValue } from './utils';
import { BaseProps } from '@/utils/types';
import selectStyles from '@css/components/select.module.css';
import buttonStyles from '@css/components/button.module.css';
import textStyles from '@css/components/text.module.css';

export type SelectTriggerSize = 'small' | 'regular';

export interface SelectTriggerProps extends BaseProps {
  /**
   * Accessible label for the Select trigger button.
   * @default "Select trigger"
   */
  'aria-label'?: string;
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
   * A function used to customize the label displayed when multiple options are selected.
   *
   * The function receives the count of selected options as its argument and should return a string
   * representing the label to be displayed.
   * */
  setLabel?: (count: number) => string | undefined;
  /**
   * ID of the controlled listbox element.
   */
  'aria-controls'?: string;
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
    'aria-label': ariaLabel = 'Select trigger',
    'aria-controls': ariaControls,
    placeholder,
    withClearButton,
    icon,
    disabled,
    inlineLabel,
    iconType,
    onClear,
    setLabel,
    minWidth,
    maxWidth,
    ...rest
  } = props;

  const contextProp = React.useContext(SelectContext);
  const elementRef = React.useRef(null);
  const valueId = React.useMemo(() => `select-value-${++SelectTrigger._idCounter}`, []);

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

  const buttonDisabled = disabled ? 'disabled' : 'default';
  const trimmedPlaceholder = placeholder?.trim();

  // Name = stable field purpose (e.g. "Medicine"), Value = current selection (e.g. "Paracetamol")
  // Prefer explicit aria-label over inlineLabel so callers can provide a more specific screen-reader name
  const explicitAriaLabel = props['aria-label'];
  const triggerName = explicitAriaLabel?.trim() || inlineLabel?.trim() || ariaLabel;
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
        ref={triggerRef}
        role="combobox"
        onKeyDown={(event) => handleKeyDownTrigger(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem)}
        type="button"
        className={buttonClass}
        disabled={disabled}
        tabIndex={0}
        style={triggerStyle}
        aria-haspopup="listbox"
        aria-expanded={openPopover}
        aria-controls={ariaControls}
        aria-label={triggerName}
        aria-describedby={isOptionSelected ? valueId : undefined}
        data-test="DesignSystem-Select-trigger"
        {...rest}
      >
        {
          <div className={triggerClass}>
            {inlineLabel && (
              <Text
                aria-hidden="true"
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
              <span id={valueId} ref={elementRef} className={textClass}>
                {value}
              </span>
            )}
          </div>
        }
        {isOptionSelected && withClearButton && (
          <span>
            <Icon
              appearance={buttonDisabled}
              onClick={onClearHandler}
              className={iconClass}
              size={12}
              name="close"
              aria-label={`Clear ${triggerName}`}
              type={iconType}
              data-test="DesignSystem-Select--closeIcon"
            />
          </span>
        )}

        <Icon aria-hidden="true" appearance={buttonDisabled} name={iconName} type={iconType} />
      </button>
    </Tooltip>
  );
};

SelectTrigger._idCounter = 0;

SelectTrigger.defaultProps = {
  triggerSize: 'regular',
  placeholder: 'Select',
  withClearButton: true,
};

export default SelectTrigger;
