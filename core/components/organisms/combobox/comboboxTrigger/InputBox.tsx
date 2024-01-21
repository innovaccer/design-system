import React from 'react';
import { Input } from '@/index';
import { InputProps } from '@/index.type';
import { handleKeyDown } from './utils';
import { ComboboxContext } from '../ComboboxProvider';

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
  } = contextProp;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFocusedOption && setFocusedOption(undefined);
    setInputValue && setInputValue(value);

    if (value !== '') {
      setOpenPopover?.(true);
    }
  };

  const onClearHandler = () => {
    setInputValue && setInputValue('');
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);
  };

  // const onFocusHandler = () => {
  //   console.log('wwwinput focus', inputValue);
  //   if (inputValue != '') {
  //     setOpenPopover?.(true);
  //   }
  // };

  return (
    <Input
      ref={inputTriggerRef}
      value={inputValue}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      onClear={onClearHandler}
      // onFocus={onFocusHandler}
      {...props}
    />
  );
};

export default InputBox;
