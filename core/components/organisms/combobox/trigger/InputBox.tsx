import * as React from 'react';
import { Input } from '@/index';
import { InputProps } from '@/index.type';
import { handleKeyDown } from './utils';
import { ComboboxContext } from '../ComboboxContext';

export const InputBox = (props: InputProps) => {
  const contextProp = React.useContext(ComboboxContext);

  const {
    inputValue,
    setInputValue,
    setFocusedOption,
    setOpenPopover,
    inputTriggerRef,
    setHighlightFirstItem,
    setHighlightLastItem,
    openPopover,
    popoverId,
  } = contextProp;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFocusedOption && setFocusedOption(undefined);
    const newValue = { label: value, value, isSelectedOption: false };
    setInputValue && setInputValue(newValue);

    if (value !== '') {
      setOpenPopover?.(true);
    }
  };

  const onClearHandler = (event: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>) => {
    event.stopPropagation();
    const newValue = { label: '', value: '', isSelectedOption: false };

    setInputValue && setInputValue(newValue);
    setOpenPopover?.(true);
    props.onClear?.(event);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);
    props.onKeyDown && props.onKeyDown(event);
  };

  return (
    <Input
      {...props}
      ref={inputTriggerRef}
      value={inputValue?.label}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      onClear={onClearHandler}
      role="combobox"
      aria-haspopup="listbox"
      aria-controls={popoverId}
      aria-label={props.placeholder || 'Combobox-Input-Trigger'}
      aria-expanded={openPopover}
      data-test="DesignSystem-Combobox-Input"
    />
  );
};

export default InputBox;
