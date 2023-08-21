import * as React from 'react';
import { InputMask, Utils } from '@/index';
import { InputMaskProps } from '@/index.type';
import { Validators } from '@/utils/types';

import { translateToTime, getOutputTimeString, placeholders, isPlaceholderPresent } from './utils';

export type AMPMType = 'AM' | 'PM';
export type InputFormat = 'hh:mm AM' | 'hh:mm';
export type TimeType = number | string;

export interface TimePickerInputProps {
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
  inputOptions: Omit<InputMaskProps, 'mask' | 'value' | 'validators'>;
  /**
   * Should be used if `time` is of type `string`
   *
   * Also determines mask format
   */
  inputFormat: InputFormat;
  /**
   * Should be used to translate `time` to desired format for `onTimeChange` callback
   */
  outputFormat: InputFormat;
  /**
   * custom Validator for `TimePicker`
   * `boolean | ((val?: string) => boolean)`
   */
  validators: Validators;
  /**
   * Callback function called when input field is blurred
   */
  onTimeChange?: (timeVal?: string) => void;
  /**
   * Shows error state in case of failed validation
   */
  error?: boolean;
}

export const TimePickerWithInput = (props: TimePickerInputProps) => {
  const { validators, inputOptions, inputFormat, outputFormat, onTimeChange, time: timeProp, error } = props;

  const [time, setTime] = React.useState(timeProp);
  const [init, setInit] = React.useState(false);
  const { placeholderChar = '_' } = inputOptions;

  React.useEffect(() => {
    const timeStr = translateToTime(inputFormat, time);
    const updatedTime = timeProp === undefined && timeStr.includes(placeholderChar) ? time : timeProp;

    setTime(updatedTime);
  }, [timeProp]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, val = '') => {
    const updatedTime = val?.toUpperCase();
    setTime(updatedTime);

    if (inputOptions.onChange) {
      inputOptions.onChange(e, val);
    }
  };

  const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>, val = '') => {
    const updatedTime = translateToTime(inputFormat, time);
    setInit(true);

    if (onTimeChange) {
      const outputTimeStr =
        updatedTime && !isPlaceholderPresent(placeholderChar, updatedTime)
          ? getOutputTimeString(inputFormat, outputFormat, updatedTime)
          : undefined;

      onTimeChange(outputTimeStr);
    }

    if (inputOptions.onBlur) inputOptions.onBlur(e, val);
  };

  const onClearHandler = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    const updatedTime = '';
    setInit(true);

    if (onTimeChange) onTimeChange(updatedTime);
    if (inputOptions.onClear) inputOptions.onClear(e);
  };

  const inputValidator = (val: string): boolean => {
    return Utils.validators.isValid(validators, val, inputFormat);
  };

  const mask = Utils.masks.time[inputFormat];
  return (
    <InputMask
      placeholder={placeholders[inputFormat]}
      placeholderChar={placeholderChar}
      {...inputOptions}
      mask={mask}
      value={
        time ? translateToTime(inputFormat, time) : init ? InputMask.utils.getDefaultValue(mask, placeholderChar) : ''
      }
      validators={inputValidator}
      onChange={onChangeHandler}
      onClear={onClearHandler}
      onBlur={onBlurHandler}
      error={error}
      id="parent-TimePicker"
    />
  );
};

TimePickerWithInput.defaultProps = {
  inputFormat: 'hh:mm AM',
  outputFormat: 'hh:mm AM',
  inputOptions: {},
  validators: [Utils.validators.time],
};

TimePickerWithInput.displayName = 'TimePickerWithInput';
export default TimePickerWithInput;
