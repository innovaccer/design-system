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
    time: timeProp
  } = props;

  const [time, setTime] = React.useState(timeProp);

  React.useEffect(() => {
    setTime(timeProp);
  }, [timeProp]);

  const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
    const updatedTime = val?.toUpperCase();

    const { placeholderChar = '_' } = inputOptions;
    setTime(updatedTime);

    if (onTimeChange) {
      const outputTimeStr = updatedTime && !updatedTime.includes(placeholderChar)
        ? getOutputTimeString(inputFormat, outputFormat, updatedTime)
        : undefined;

      onTimeChange(outputTimeStr);
    }
  };

  const onClearHandler = () => {
    if (onTimeChange) onTimeChange(undefined);
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
      onClear={onClearHandler}
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
