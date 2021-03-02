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

  const { placeholderChar = '_' } = inputOptions;

  const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
    setState({
      open: true
    });

    if (val && !val.includes(placeholderChar)) {
      const d = translateToDate(inputFormat, val, validators);
      setState({ date: d });
    }
  };

  const onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
    setState({
      init: true
    });

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

  const mask = Utils.masks.date[inputFormat];
  return (
    <InputMask
      icon="events"
      placeholder={inputFormat}
      {...inputOptions}
      error={showError}
      mask={mask}
      value={date
        ? translateToString(inputFormat, date)
        // @ts-ignore
        : init ? InputMask.utils.getDefaultValue(mask, placeholderChar) : ''
      }
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      onClear={onClearHandler}
      caption={showError ? errorMessage : ''}
      validators={[inputValidator]}
      clearOnEmptyBlur={false}
    />
  );
};
