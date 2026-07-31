import * as React from 'react';
import { InputMask, Utils } from '@/index';
import { translateToDate, translateToString } from '../calendar/utility';
import { DatePickerProps, DatePickerState } from './DatePicker';

type TriggerProps = {
  inputFormat: DatePickerProps['inputFormat'];
  inputOptions: DatePickerProps['inputOptions'];
  validators: DatePickerProps['validators'];
  state: DatePickerState;
  setState: any;
  inputRef?: React.Ref<HTMLInputElement>;
  onInputKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Trigger = (props: TriggerProps) => {
  const { inputFormat, inputOptions, validators, state, setState, inputRef, onInputKeyDown } = props;

  const { init, date, error } = state;

  const { placeholderChar = '_' } = inputOptions;

  const onPasteHandler = (_e: React.ClipboardEvent<HTMLInputElement>, val?: string) => {
    const { onPaste } = inputOptions;
    setState({
      open: true,
    });

    if (val && !val.includes(placeholderChar)) {
      const d = translateToDate(inputFormat, val, validators);
      setState({ date: d });
    }

    if (onPaste) onPaste(_e, val);
  };

  const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
    const { onChange } = inputOptions;
    setState({
      open: true,
    });

    if (val && !val.includes(placeholderChar)) {
      const d = translateToDate(inputFormat, val, validators);
      setState({ date: d });
    }

    if (onChange) onChange(_e);
  };

  const onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
    const { onBlur } = inputOptions;
    setState({
      init: true,
    });

    const hasNumber = /\d/;

    if (val && hasNumber.test(val) && val.includes(placeholderChar)) {
      setState({ error: true });
    } else if ((val && !hasNumber.test(val)) || !val) {
      setState({ error: false });
    }

    if (onBlur) onBlur(_e, val || '');
  };

  const onClearHandler = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    const { onClear } = inputOptions;
    setState({
      init: true,
      date: undefined,
    });

    if (onClear) onClear(e);
  };

  const showError = inputOptions.error || (inputOptions.required && error && init);
  const errorMessage = inputOptions.caption === undefined ? 'Invalid value' : inputOptions.caption;
  const inputValidator = (val: string): boolean => {
    return Utils.validators.isValid(validators, val, inputFormat);
  };

  const mask = Utils.masks.date[inputFormat];
  const { onKeyDown: optionsKeyDown, ...inputRest } = inputOptions;

  return (
    <InputMask
      icon="events"
      placeholder={inputFormat}
      {...inputRest}
      ref={inputRef}
      error={showError}
      mask={mask}
      value={
        date ? translateToString(inputFormat, date) : init ? InputMask.utils.getDefaultValue(mask, placeholderChar) : ''
      }
      onChange={onChangeHandler}
      onPaste={onPasteHandler}
      onBlur={onBlurHandler}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
        // Consumer first so preventDefault can cancel picker Tab/ArrowDown focus moves.
        optionsKeyDown?.(e);
        if (!e.defaultPrevented) {
          onInputKeyDown?.(e);
        }
      }}
      onClear={onClearHandler}
      caption={showError ? errorMessage : ''}
      validators={[inputValidator]}
      clearOnEmptyBlur={true}
      useDefaultValueOnEmpty={true}
    />
  );
};
