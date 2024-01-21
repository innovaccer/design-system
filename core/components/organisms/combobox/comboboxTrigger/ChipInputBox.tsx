import React from 'react';
import { ChipInput } from '@/index';
import { handleKeyDown } from './utils';
import { OptionType } from '@/common.type';
import { ChipInputProps } from '@/index.type';
import { ComboboxContext } from '../ComboboxProvider';

export const ChipInputBox = (props: ChipInputProps) => {
  const contextProp = React.useContext(ComboboxContext);

  const {
    chipInputValue,
    setChipInputValue,
    setOpenPopover,
    setFocusedOption,
    setInputText,
    setHighlightFirstItem,
    setHighlightLastItem,
    inputTriggerRef,
  } = contextProp;

  const onChangeHandler = (chips: (string | OptionType)[]) => {
    setFocusedOption && setFocusedOption(undefined);
    setChipInputValue && setChipInputValue(chips);
  };

  const onUpdateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputText && setInputText(event.target.value);

    if (value !== '') {
      setOpenPopover?.(true);
    }
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);
  };

  return (
    <ChipInput
      value={chipInputValue}
      onChange={onChangeHandler}
      onInputChange={onUpdateHandler}
      onKeyDown={onKeyDownHandler}
      tabIndex={-1}
      forwardedRef={inputTriggerRef}
      {...props}
    />
  );
};

export default ChipInputBox;
