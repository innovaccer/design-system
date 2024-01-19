import React from 'react';
import { Input } from '@/index';
import { InputProps } from '@/index.type';
import { handleKeyDown } from './utils';
import { ComboboxContext } from '../ComboboxProvider';

export const InputBox = (props: InputProps) => {
  const contextProp = React.useContext(ComboboxContext);

  const { inputValue, setInputValue, setFocusedOption, setOpenPopover, inputTriggerRef } = contextProp;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFocusedOption && setFocusedOption(undefined);
    setInputValue && setInputValue(event.target.value);
  };

  const onClearHandler = () => {
    setInputValue && setInputValue('');
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(event, setOpenPopover, setFocusedOption);
  };

  return (
    <Input
      ref={inputTriggerRef}
      value={inputValue}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      onClear={onClearHandler}
      {...props}
    />
  );
};

export default InputBox;
