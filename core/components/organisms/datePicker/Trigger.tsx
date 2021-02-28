import * as React from 'react';
import { InputMask, Utils } from '@/index';
import { translateToDate, translateToString } from '../calendar/utility';
import { DatePickerProps, DatePickerState } from './DatePicker';

type TriggerProps = {
  inputFormat: DatePickerProps['inputFormat'],
  inputOptions: DatePickerProps['inputOptions'],
  validators: DatePickerProps['validators'],
  state: DatePickerState,
  setState: any
};

export const Trigger = (props: TriggerProps) => {
  const {
    inputFormat,
    inputOptions,
    validators,
    state,
    setState
  } = props;

  const {
    init,
    date,
    error
  } = state;

  const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
    setState({
      open: true
    });

    const { placeholderChar = '_' } = inputOptions;
    if (val && !val.includes(placeholderChar)) {
      const d = translateToDate(inputFormat, val, validators);
      setState({ date: d });
    }
  };

  const onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
    setState({
      init: true
    });

    const { placeholderChar = '_' } = inputOptions;
    if (!val || val.includes(placeholderChar)) {
      setState({ date: undefined });
    }
  };

  const onClearHandler = () => {
    setState({
      init: true,
      date: undefined
    });
  };

  const showError = inputOptions.error || (inputOptions.required && error && init);
  const errorMessage = inputOptions.caption === undefined ? 'Invalid value' : inputOptions.caption;
  const inputValidator = (val: string): boolean => {
    return Utils.validators.isValid(validators, val, inputFormat);
  };

  return (
    <InputMask
      icon="events"
      placeholder={inputFormat}
      {...inputOptions}
      error={showError}
      mask={Utils.masks.date[inputFormat]}
      value={date ? translateToString(inputFormat, date) : ''}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      onClear={onClearHandler}
      caption={showError ? errorMessage : ''}
      validators={[inputValidator]}
    />
  );
};
