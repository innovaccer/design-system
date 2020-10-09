import * as React from 'react';
import { InputMask, Utils } from '@/index';
import { InputMaskProps } from '@/index.type';
import { Validators } from '@/utils/types';

import {
  translateToTime,
  getOutputTimeString,
  placeholders,
} from './utils';

export type AMPMType = 'AM' | 'PM';
export type TimeFormat = 'hh:mm AM' | 'hh:mm';
export type TimeType = number | string;

export interface TimePickerProps {
  /**
   * Selected time
   *
   * `number` - number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC
   *
   * **`string` - Time string value as per `inputFormat`**
   */
  time?: TimeType;
  /**
   * Props to be used for `InputMask`
   */
  inputOptions: Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'validators'>;
  /**
   * Should be used if `time` is of type `string`
   *
   * Also determines mask format
   */
  inputFormat: TimeFormat;
  /**
   * Should be used to translate `time` to desired format for `onTimeChange` callback
   */
  outputFormat: TimeFormat;
  /**
   * custom Validator for `TimePicker`
   * `boolean | ((val?: string) => boolean)`
   */
  validators: Validators;
  /**
   * Callback function called when time is changed
   */
  onTimeChange?: (timeVal?: string) => void;
}

export const TimePicker = (props: TimePickerProps) => {
  const {
    validators,
    inputOptions,
    inputFormat,
    outputFormat,
    onTimeChange,
    time,
  } = props;

  const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
    const { placeholderChar = '_' } = inputOptions;

    if (onTimeChange) {
      const outputTimeStr = val && !val.includes(placeholderChar)
        ? getOutputTimeString(inputFormat, outputFormat, val)
        : undefined;

      onTimeChange(outputTimeStr);
    }
  };

  const inputValidator = (val: string): boolean => {
    return Utils.validators.isValid(validators, val, inputFormat);
  };

  return (
    <InputMask
      placeholder={placeholders[inputFormat]}
      placeholderChar="_"
      {...inputOptions}
      mask={Utils.masks.time[inputFormat]}
      value={translateToTime(inputFormat, time)}
      validators={inputValidator}
      onChange={onChangeHandler}
    />
  );
};

TimePicker.defaultProps = {
  inputFormat: 'hh:mm AM',
  outputFormat: 'hh:mm AM',
  inputOptions: {},
  validators: [Utils.validators.time]
};

TimePicker.displayName = 'TimePicker';
export default TimePicker;
