import * as React from 'react';
import { InputMask, Row, Column, Label, Utils } from '@/index';
import { compareDate, getDateInfo, translateToDate, translateToString } from '../calendar/utility';
import { DateRangePickerProps, DateRangePickerState } from './DateRangePicker';
import styles from '@css/components/dateRangePicker.module.css';
import classNames from 'classnames';

type TriggerProps = {
  inputFormat: DateRangePickerProps['inputFormat'];
  startInputOptions: DateRangePickerProps['startInputOptions'];
  endInputOptions: DateRangePickerProps['endInputOptions'];
  validators: DateRangePickerProps['validators'];
  state: DateRangePickerState;
  setState: any;
};

export const Trigger = (props: TriggerProps) => {
  const { inputFormat, startInputOptions, endInputOptions, validators, state, setState } = props;

  const { init, startDate, endDate, startError, endError } = state;

  const updateNav = (type: string) => {
    if (type === 'start') {
      const { year, month } = getDateInfo(startDate);
      setState({
        yearNav: year,
        monthNav: month,
      });
    }
    if (type === 'end') {
      const { year, month } = getDateInfo(endDate);

      setState({
        yearNav: year,
        monthNav: month,
      });
    }
  };

  const onPasteHandler = (_e: React.ClipboardEvent<HTMLInputElement>, val: string, type: string) => {
    setState({ open: true });

    if (type === 'start') {
      const placeholderChar = startInputOptions.placeholderChar || '_';
      if (val && !val.includes(placeholderChar)) {
        const d = translateToDate(inputFormat, val, validators);
        if (d) {
          setState({ startDate: d });
          if (endDate) {
            const { year: eYear, month: eMonth, date: eDate } = getDateInfo(endDate);
            if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
              setState({ endDate: undefined });
            }
          }
          if (startInputOptions.onPaste) startInputOptions.onPaste(_e, val);
        }
      }
    }
    if (type === 'end') {
      const placeholderChar = endInputOptions.placeholderChar ? endInputOptions.placeholderChar : '_';
      if (val && !val.includes(placeholderChar)) {
        const d = translateToDate(inputFormat, val, validators);
        if (d) {
          setState({ endDate: d });
          if (endInputOptions.onPaste) endInputOptions.onPaste(_e, val);
        }
      }
    }
  };

  const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => {
    setState({ open: true });

    if (type === 'start') {
      const placeholderChar = startInputOptions.placeholderChar || '_';
      if (val && !val.includes(placeholderChar)) {
        const d = translateToDate(inputFormat, val, validators);
        if (d && !isNaN(d.getTime())) {
          setState({ startDate: d });
          if (endDate) {
            const { year: eYear, month: eMonth, date: eDate } = getDateInfo(endDate);
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
        if (d && !isNaN(d.getTime())) setState({ endDate: d });
      }
    }
  };

  const onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => {
    setState({
      init: true,
    });
    const hasNumber = /\d/;

    if (type === 'start') {
      const { placeholderChar = '_' } = startInputOptions;

      if (val && hasNumber.test(val) && val.includes(placeholderChar)) {
        setState({ startError: true });
      } else if ((val && !hasNumber.test(val)) || !val) {
        setState({ startError: false });
      }

      if (!val || val.includes(placeholderChar)) setState({ startDate: undefined });
    }

    if (type === 'end') {
      const { placeholderChar = '_' } = endInputOptions;

      if (val && hasNumber.test(val) && val.includes(placeholderChar)) {
        setState({ endError: true });
      } else if ((val && !hasNumber.test(val)) || !val) {
        setState({ endError: false });
      }

      if (!val || val.includes(placeholderChar)) setState({ endDate: undefined });
    }
  };

  const onClearHandler = (type: string) => {
    setState({
      init: true,
    });
    if (type === 'start') {
      setState({
        startDate: undefined,
      });
      updateNav('end');
    }
    if (type === 'end') {
      setState({
        endDate: undefined,
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
  const startPlaceholderChar = startInputOptions.placeholderChar || '_';
  const endPlaceholderChar = endInputOptions.placeholderChar || '_';
  const showStartError = startInputOptions.error || (startInputOptions.required && startError && init);
  const showEndError = endInputOptions.error || (endInputOptions.required && endError && init);
  const startErrorMessage = startInputOptions.caption === undefined ? 'Invalid value' : startInputOptions.caption;
  const endErrorMessage = endInputOptions.caption === undefined ? 'Invalid value' : endInputOptions.caption;
  const { label: startLabel } = startInputOptions;
  const { label: endLabel } = endInputOptions;
  const inputValidator = (val: string): boolean => {
    return Utils.validators.isValid(validators, val, inputFormat);
  };

  const StartInputClassName = classNames({
    [styles['DateRangePicker-input']]: true,
    [styles['DateRangePicker-input--startDate']]: true,
  });

  const EndInputClassName = classNames({
    [styles['DateRangePicker-input']]: true,
    [styles['DateRangePicker-input--endDate']]: true,
  });

  return (
    <Row data-test="DesignSystem-DateRangePicker-InputTrigger">
      <Column size={'6'} sizeXS={'12'} className={StartInputClassName}>
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
          value={
            startDate
              ? translateToString(inputFormat, startDate)
              : init
                ? InputMask.utils.getDefaultValue(mask, startPlaceholderChar)
                : ''
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
            onChangeHandler(e, val || '', 'start');
          }}
          onPaste={(e: React.ClipboardEvent<HTMLInputElement>, val?: string) => {
            onPasteHandler(e, val || '', 'start');
          }}
          onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
            onBlurHandler(e, val || '', 'start');
          }}
          onClear={() => onClearHandler('start')}
          onClick={() => onClickHandler('start')}
          error={showStartError}
          caption={showStartError ? startErrorMessage : ''}
          validators={[inputValidator]}
          clearOnEmptyBlur={true}
        />
      </Column>
      <Column size={'6'} sizeXS={'12'} className={EndInputClassName}>
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
          value={
            endDate
              ? translateToString(inputFormat, endDate)
              : init
                ? InputMask.utils.getDefaultValue(mask, endPlaceholderChar)
                : ''
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
            onChangeHandler(e, val || '', 'end');
          }}
          onPaste={(e: React.ClipboardEvent<HTMLInputElement>, val?: string) => {
            onPasteHandler(e, val || '', 'end');
          }}
          onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
            onBlurHandler(e, val || '', 'end');
          }}
          onClear={() => onClearHandler('end')}
          onClick={() => onClickHandler('end')}
          error={showEndError}
          caption={showEndError ? endErrorMessage : ''}
          validators={[inputValidator]}
          clearOnEmptyBlur={true}
        />
      </Column>
    </Row>
  );
};
