import * as React from 'react';
import { ComboboxContext } from './ComboboxContext';
import { Listbox } from '@/index';
import { BaseProps } from '@/utils/types';
import { OptionType } from '@/common.type';
import { handleKeyDown } from './utils';
import { resolveListboxOptionFromEvent } from '../listbox/utils';

type ItemTagType = 'li' | 'div';

export interface ComboboxOptionProps extends BaseProps {
  /**
   * React Element to be added inside `Option Item`
   */
  children: React.ReactNode;
  /**
   * Provide value to the `Option Item`
   *
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * OptionType: {
   *    label: string;
   *    value: any;
   *    isSelectedOption?: boolean;
   * }
   * </pre>
   */
  option: OptionType;
  /**
   * Set a custom element for `Option Item`
   */
  tagName: ItemTagType;
  /**
   * Shows `Option Item` in selected state <br />
   */
  selected?: boolean;
  /**
   * Handler to be called when `Option Item` is clicked
   */
  onClick?: (option: OptionType) => void;
  /**
   * Handler to be called when `Option Item` is focused
   */
  onFocus?: (event: React.FocusEvent) => void;
  /**
   * Handler to be called when `Option Item` is blurred
   */
  onBlur?: (event: React.FocusEvent) => void;
}

export const ComboboxOption = (props: ComboboxOptionProps) => {
  const { children, option, onClick, onFocus, onBlur, ...rest } = props;

  const contextProp = React.useContext(ComboboxContext);

  const {
    onOptionClick,
    inputValue,
    focusedOption,
    setFocusedOption,
    setOpenPopover,
    inputTriggerRef,
    setHighlightFirstItem,
    setHighlightLastItem,
    multiSelect,
    listRef,
  } = contextProp;

  const onClickHandler = (e: React.MouseEvent) => {
    const optionEl = resolveListboxOptionFromEvent(e, e.currentTarget as HTMLElement);
    setFocusedOption?.(optionEl);
    if (onClick) {
      return onClick(option);
    }

    return onOptionClick && onOptionClick({ ...option, isSelectedOption: true });
  };

  const handleFocus = (event: React.FocusEvent) => {
    const optionEl = resolveListboxOptionFromEvent(event, event.currentTarget as HTMLElement);
    setFocusedOption?.(optionEl);
    onFocus?.(event);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOption,
      setOpenPopover,
      inputTriggerRef,
      setHighlightFirstItem,
      setHighlightLastItem,
      multiSelect,
      listRef
    );
  };

  return (
    <Listbox.Item
      {...rest}
      onClick={onClickHandler}
      selected={option.label === inputValue?.label}
      onFocus={handleFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDownHandler}
      tabIndex={-1}
      role="option"
      data-test="DesignSystem-Combobox-Option"
    >
      {children}
    </Listbox.Item>
  );
};

ComboboxOption.defaultProps = {
  tagName: 'li',
};

export default ComboboxOption;
