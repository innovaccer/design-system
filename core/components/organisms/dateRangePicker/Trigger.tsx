import * as React from 'react';
import { InputMask, Row, Column, Label, Utils } from '@/index';
import { compareDate, getDateInfo, translateToDate, translateToString } from '../calendar/utility';
import { DateRangePickerProps, DateRangePickerState } from './DateRangePicker';

type TriggerProps = {
  inputFormat: DateRangePickerProps['inputFormat'],
  startInputOptions: DateRangePickerProps['startInputOptions'],
  endInputOptions: DateRangePickerProps['endInputOptions'],
  validators: DateRangePickerProps['validators'],
  state: DateRangePickerState,
  setState: any
};

export const Trigger = (props: TriggerProps) => {
  const {
    inputFormat,
    startInputOptions,
    endInputOptions,
    validators,
    state,
    setState
  } = props;

  const {
    init,
    startDate,
    endDate,
    startError,
    endError
  } = state;

  const updateNav = (type: string) => {
    if (type === 'start') {
      const {
        year,
        month
      } = getDateInfo(startDate);
      setState({
        yearNav: year,
        monthNav: month
      });
    }
    if (type === 'end') {
      const {
        year,
        month
      } = getDateInfo(endDate);

      setState({
        yearNav: year,
        monthNav: month
      });
    }
  };

  const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => {
    setState({ open: true });

    if (type === 'start') {
      const placeholderChar = startInputOptions.placeholderChar || '_';
      if (val && !val.includes(placeholderChar)) {
        const d = translateToDate(inputFormat, val, validators);
        if (d) {
          setState({ startDate: d });
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
    }
    if (type === 'end') {
      const placeholderChar = endInputOptions.placeholderChar ? endInputOptions.placeholderChar : '_';
      if (val && !val.includes(placeholderChar)) {
        const d = translateToDate(inputFormat, val, validators);
        if (d) setState({ endDate: d });
      }
    }
  };

  const onFocusHandler = () => {
    setState({
      init: true
    });
  };

  const onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => {
    if (type === 'start') {
      const { placeholderChar = '_' } = startInputOptions;
      if (!val || val.includes(placeholderChar)) setState({ startDate: undefined });
    }
    if (type === 'end') {
      const { placeholderChar = '_' } = endInputOptions;
      if (!val || val.includes(placeholderChar)) setState({ endDate: undefined });
    }
  };

  const onClearHandler = (type: string) => {
    if (type === 'start') {
      setState({
        init: true,
        startDate: undefined
      });
      updateNav('end');
    }
    if (type === 'end') {
      setState({
        init: true,
        endDate: undefined
      });
      updateNav('start');
    }
  };

  const onClickHandler = (type: string) => {
    const { open } = state;
    if (!open) {
      updateNav(type);
    }
  };

  const mask = Utils.masks.date[inputFormat];
  const showStartError = startInputOptions.error || (startInputOptions.required && startError && init);
  const showEndError = endInputOptions.error || (endInputOptions.required && endError && init);
  const startErrorMessage = startInputOptions.caption === undefined ? 'Invalid value' : startInputOptions.caption;
  const endErrorMessage = endInputOptions.caption === undefined ? 'Invalid value' : endInputOptions.caption;
  const { label: startLabel } = startInputOptions;
  const { label: endLabel } = endInputOptions;
  const inputValidator = (val: string): boolean => {
    return Utils.validators.isValid(validators, val, inputFormat);
  };

  return (
    <Row>
      <Column size={'6'} sizeXS={'12'} className="DateRangePicker-input DateRangePicker-input--startDate">
        {startLabel && (
          <Label required={startInputOptions.required} withInput={true}>
            {startLabel}
          </Label>
        )}
        <InputMask
          icon="events"
          placeholder={inputFormat}
          {...startInputOptions}
          mask={mask}
          value={startDate ? translateToString(inputFormat, startDate) : ''}
          onFocus={onFocusHandler}
          onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
            onChangeHandler(e, val || '', 'start');
          }}
          onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
            onBlurHandler(e, val || '', 'start');
          }}
          onClear={() => onClearHandler('start')}
          onClick={() => onClickHandler('start')}
          error={showStartError}
          caption={showStartError ? startErrorMessage : ''}
          validators={[inputValidator]}
        />
      </Column>
      <Column size={'6'} sizeXS={'12'} className="DateRangePicker-input DateRangePicker-input--endDate">
        {endLabel && (
          <Label required={endInputOptions.required} withInput={true}>
            {endLabel}
          </Label>
        )}
        <InputMask
          icon="events"
          placeholder={inputFormat}
          {...endInputOptions}
          mask={mask}
          value={endDate ? translateToString(inputFormat, endDate) : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
            onChangeHandler(e, val || '', 'end');
          }}
          onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
            onBlurHandler(e, val || '', 'end');
          }}
          onClear={() => onClearHandler('end')}
          onClick={() => onClickHandler('end')}
          error={showEndError}
          caption={showEndError ? endErrorMessage : ''}
          validators={[inputValidator]}
        />
      </Column>
    </Row>
  );
};
