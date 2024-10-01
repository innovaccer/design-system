import React from 'react';
import { handleKeyDown } from './utils';
import { OptionType } from '@/common.type';
import { ComboboxContext } from '../ComboboxContext';
import MultiSelectTrigger, { MultiSelectTriggerProps } from './MultiselectTrigger';

export const ChipInputBox = (props: MultiSelectTriggerProps) => {
  const contextProp = React.useContext(ComboboxContext);

  const {
    chipInputValue,
    setChipInputValue,
    setOpenPopover,
    setFocusedOption,
    setChipInputText,
    setHighlightFirstItem,
    setHighlightLastItem,
    inputTriggerRef,
    openPopover,
    popoverId,
  } = contextProp;

  const onChangeHandler = (chips: OptionType[]) => {
    setFocusedOption && setFocusedOption(undefined);
    setChipInputValue && setChipInputValue(chips);

    if (chips.length === 0) {
      setOpenPopover?.(true);
    }
  };

  const onUpdateHandler = (event?: React.ChangeEvent<HTMLInputElement>) => {
    const value = event?.target?.value;

    if (!value) {
      setChipInputText?.('');
      setOpenPopover?.(true);
      inputTriggerRef?.current.focus();
      return;
    }

    setChipInputText && setChipInputText(value);

    if (value !== '') {
      setOpenPopover?.(true);
    }
  };

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);
    props.onKeyDown && props.onKeyDown(event);
  };

  return (
    <MultiSelectTrigger
      {...props}
      ref={inputTriggerRef}
      value={chipInputValue}
      onChange={onChangeHandler}
      onInputChange={onUpdateHandler}
      onKeyDown={onKeyDownHandler}
      tabIndex={-1}
      role="combobox"
      aria-haspopup="listbox"
      aria-controls={popoverId}
      aria-label={props.placeholder || 'Combobox-ChipInput-Trigger'}
      aria-expanded={openPopover}
      data-test="DesignSystem-Combobox-ChipInput"
    />
  );
};

export default ChipInputBox;
