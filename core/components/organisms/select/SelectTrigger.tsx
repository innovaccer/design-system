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
}

const SelectTrigger = (props: SelectTriggerProps) => {
  const {
    triggerSize,
    placeholder,
    withClearButton,
    icon,
    disabled,
    inlineLabel,
    iconType,
    onClear,
    setLabel,
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
  } = contextProp;

  const buttonDisabled = disabled ? 'disabled' : 'default';
  const trimmedPlaceholder = placeholder?.trim();
  const displayValue = computeValue(multiSelect, selectValue, setLabel);
  const value = isOptionSelected && displayValue.length > 0 ? displayValue : trimmedPlaceholder;
  const iconName = openPopover ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
  const triggerStyle = {
    width: width,
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
    [selectStyles['Select-trigger--icon']]: icon,
    [selectStyles['Select-trigger--open']]: openPopover,
  });

  const textClass = classNames({
    [textStyles['Text']]: true,
    [textStyles['Text--regular']]: true,
    [selectStyles['Select-trigger--text']]: true,
  });

  const triggerClass = classNames([selectStyles['Select-trigger-wrapper']], 'ellipsis--noWrap');

  const iconClass = classNames('align-items-center', 'mr-2', 'ml-3', selectStyles['Select-crossButton']);

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
        onKeyDown={(event) => handleKeyDownTrigger(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem)}
        type="button"
        className={buttonClass}
        disabled={disabled}
        tabIndex={0}
        style={triggerStyle}
        aria-haspopup="listbox"
        aria-expanded={openPopover}
        aria-label="trigger"
        data-test="DesignSystem-Select-trigger"
        {...rest}
      >
        {
          <div className={triggerClass}>
            {inlineLabel && (
              <Text appearance="subtle" className="mr-4 white-space-nowrap">
                {`${inlineLabel.trim().charAt(0).toUpperCase()}${inlineLabel.trim().slice(1)}`}
              </Text>
            )}
            {icon && !inlineLabel && (
              <Icon
                appearance={buttonDisabled}
                className="d-flex align-items-center mr-4"
                name={icon}
                type={iconType}
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
          <Icon
            appearance={buttonDisabled}
            onClick={onClearHandler}
            className={iconClass}
            size={12}
            name="close"
            aria-label="clear selected"
            type={iconType}
            data-test="DesignSystem-Select--closeIcon"
          />
        )}

        <Icon appearance={buttonDisabled} name={iconName} type={iconType} />
      </button>
    </Tooltip>
  );
};

SelectTrigger.defaultProps = {
  triggerSize: 'regular',
  placeholder: 'Select',
  withClearButton: true,
};

export default SelectTrigger;
