import * as React from 'react';
import { InputMask, Row, Column, Label, Utils } from '@/index';
import { compareDate, getDateInfo, translateToDate } from '../calendar/utility';
import { DateRangePickerProps, DateRangePickerState } from './DateRangePicker';

type TriggerProps = {
  inputFormat: DateRangePickerProps['inputFormat'],
  inputOptions: DateRangePickerProps['startInputOptions'],
  validators: DateRangePickerProps['validators'],
  state: DateRangePickerState,
  setState: any
};

export const SingleInputTrigger = (props: TriggerProps) => {
  const {
    inputFormat,
    inputOptions,
    validators,
    state,
    setState
  } = props;

  const {
    init,
    startDate,
    endDate,
    startValue,
    endValue,
    startError,
    endError
  } = state;

  const mask = Utils.masks.rangeDate[inputFormat];
  const showError = inputOptions.required && (startError || endError) && init;
  const { label } = inputOptions;
  const { placeholderChar = '_' } = inputOptions;
  // @ts-ignore
  const defaultValue = InputMask.utils.getDefaultValue(mask, placeholderChar).split(' - ');
  const sValue = startValue || defaultValue[0];
  const eValue = endValue || defaultValue[1];
  const inputValidator = (val: string): boolean => {
    return Utils.validators.isValid(validators, val, inputFormat);
  };

  const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string) => {
    const date = val.split(' - ');
    const startVal = date[0];
    const endVal = date[1];

    if (startValue !== startVal && startVal && !startVal.includes(placeholderChar)) {
      const startD = translateToDate(inputFormat, startVal, validators);

      if (startD) {
        const isEndDateValid = endValue && !endValue.includes(placeholderChar);

        setState({
          startDate: startD,
          endDate: isEndDateValid ? endDate : undefined
        });

        if (endDate) {
          const {
            year: eYear,
            month: eMonth,
            date: eDate
          } = getDateInfo(endDate);
          if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
            setState({ endDate: undefined });
          }
        }
      }
    }

    if (endValue !== endVal && endVal && !endVal.includes(placeholderChar)) {
      const endD = translateToDate(inputFormat, endVal, validators);
      const isStartDateValid = startValue && !startValue.includes(placeholderChar);

      if (endD) {
        setState({
          endDate: endD,
          startDate: isStartDateValid ? startDate : undefined
        });
      }
    }

    setState({
      startValue: startVal,
      endValue: endVal
    });
  };

  const onFocusHandler = () => {
    setState({
      init: true
    });
  };

  const onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string) => {
    const date = val.split(' - ');
    const startVal = date[0];
    const endVal = date[1];

    if (!startVal || startVal.includes(placeholderChar)) setState({ startDate: undefined });
    if (!endVal || endVal.includes(placeholderChar)) setState({ endDate: undefined });
  };

  const onClearHandler = () => {
    setState({
      init: true,
      startDate: undefined,
      endDate: undefined,
      yearNav: undefined,
      monthNav: undefined
    });
  };

  return (
    <Row>
      <Column>
        {label && (
          <Label required={inputOptions.required} withInput={true}>
            {label}
          </Label>
        )}
        <InputMask
          icon="events"
          placeholder={`${inputFormat} - ${inputFormat}`}
          {...inputOptions}
          mask={mask}
          value={!startDate && !endDate && !init ? undefined : `${sValue} - ${eValue}`}
          onFocus={onFocusHandler}
          onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
            onChangeHandler(e, val || '');
          }}
          onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
            onBlurHandler(e, val || '');
          }}
          onClear={onClearHandler}
          error={showError}
          caption={showError ? inputOptions.caption || 'Invalid value' : ''}
          validators={[inputValidator]}
        />
      </Column>
    </Row>
  );
};
