import React from 'react';
import { ChipInput } from '@/index';
import { handleKeyDown } from './utils';
import { OptionType } from '@/common.type';
import { ChipInputProps } from '@/index.type';
import { ComboboxContext } from '../ComboboxProvider';

export const ChipInputBox = (props: ChipInputProps) => {
  const contextProp = React.useContext(ComboboxContext);
  // const ref = React.useRef<HTMLInputElement>(null);

  const { chipInputValue, setChipInputValue, setOpenPopover, setFocusedOption, setInputText, inputTriggerRef } =
    contextProp;

  const onChangeHandler = (chips: (string | OptionType)[]) => {
    setFocusedOption && setFocusedOption(undefined);
    setChipInputValue && setChipInputValue(chips);
  };

  const onUpdateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText && setInputText(event.target.value);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(event, setOpenPopover);
  };

  return (
    // <div ref={inputTriggerRef} className="myclass">
    <ChipInput
      value={chipInputValue}
      onChange={onChangeHandler}
      onInputChange={onUpdateHandler}
      onKeyDown={onKeyDownHandler}
      {...props}
    />
    // </div>
  );
};

export default ChipInputBox;
