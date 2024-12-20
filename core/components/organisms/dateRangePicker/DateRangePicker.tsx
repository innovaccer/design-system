import * as React from 'react';
import classNames from 'classnames';
import { Calendar, CalendarProps, SharedProps } from '../calendar/Calendar';
import { DateType, DateFormat } from '../calendar/types';
import { InputMaskProps, PopoverProps } from '@/index.type';
import { Validators } from '@/utils/types';
import { Trigger } from './Trigger';
import { SingleInputTrigger } from './SingleInputTrigger';
import { getDateInfo, convertToDate, compareDate, translateToString } from '../calendar/utility';
import { Popover, Utils } from '@/index';
import styles from '@css/components/dateRangePicker.module.css';
import {
  getCurrentWeek,
  getPreviousWeek,
  getPreviousMonth,
  getPrevious90Days,
  getCustomDates,
  getCurrentYear,
  getCurrentMonth,
} from './utilities';

export type InputOptions = Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'onBlur' | 'onClick' | 'onClear'> & {
  label?: string;
};

export type DateRangePickerProps = SharedProps & {
  /**
   * @argument startDate Start Date object
   * @argument endDate End Date object
   * @argument startDateVal Start Date string value as per `outputFormat`
   * @argument endDateVal End Date string value as per `outputFormat`
   */
  onRangeChange?: (startDate?: Date, endDate?: Date, startValue?: string, endValue?: string) => void;
  /**
   * Element to be rendered inside Popover
   */
  children: React.ReactNode;
  /**
   * Alignment of `children` Element
   */
  contentAlign?: 'left' | 'right';
  /**
   * Start date of `DateRangePicker`
   */
  startDate?: DateType;
  /**
   * End date of `DateRangePicker`
   */
  endDate?: DateType;
  /**
   * Allowed limit for difference in startDate and endDate
   *
   * **set `0` or `undefined` for infinite limit**
   */
  rangeLimit?: number;
  /**
   * Set if `InputMask` should be used as trigger
   */
  withInput?: boolean;
  /**
   * Set if single `InputMask` should be used as trigger
   */
  singleInput?: boolean;
  /**
   * Sets open state of `Popover`
   * @default false
   */
  open?: boolean;
  /**
   * Position of `DateRangePicker` w.r.t. `InputMask`
   */
  position: PopoverProps['position'];
  /**
   * Should be used if `date` is of type `string`
   */
  inputFormat: DateFormat;
  /**
   * Should be used to translate `date` to desired format for `onRangeChange` callback
   */
  outputFormat: DateFormat;
  /**
   * Props to be used for date of `InputMask`
   *
   * **Valid in case of single input**.
   */
  inputOptions: InputOptions;
  /**
   * Props to be used for Start date `InputMask`
   */
  startInputOptions: InputOptions;
  /**
   * Props to be used for End date `InputMask`
   */
  endInputOptions: InputOptions;
  /**
   * custom Validator for `DateRangePicker`
   *
   * `ValidatorFn: (val: string, format: string) => boolean`
   */
  validators: Validators;
  /**
   * Number of months rendered in view
   *
   * **Default set to `2` when `withInput: true`**
   */
  monthsInView?: CalendarProps['monthsInView'];
};

export interface DateRangePickerState {
  init: boolean;
  startDate?: Date;
  endDate?: Date;
  startValue: string;
  endValue: string;
  startError: boolean;
  endError: boolean;
  yearNav?: number;
  monthNav?: number;
  open: boolean;
}

export class DateRangePicker extends React.Component<DateRangePickerProps, DateRangePickerState> {
  static utils = {
    getCurrentWeek,
    getPreviousWeek,
    getPreviousMonth,
    getPrevious90Days,
    getCustomDates,
    getCurrentYear,
    getCurrentMonth,
  };
  static defaultProps = {
    ...Calendar.defaultProps,
    children: <></>,
    contentAlign: 'left',
    monthsInView: undefined,
    position: 'bottom-start',
    inputFormat: 'mm/dd/yyyy',
    outputFormat: 'mm/dd/yyyy',
    validators: [Utils.validators.date],
    inputOptions: {
      label: 'Date',
    },
    startInputOptions: {
      label: 'Start Date',
    },
    endInputOptions: {
      label: 'End Date',
    },
  };
  monthsInView: number;

  constructor(props: DateRangePickerProps) {
    super(props);

    const { inputFormat, validators } = props;

    const startDate = convertToDate(props.startDate, inputFormat, validators);
    const endDate = convertToDate(props.endDate, inputFormat, validators);
    const { startValue, endValue } = this.getDate(startDate, endDate);

    const { startError, endError } = this.getErrors(startDate, endDate);

    this.state = {
      startDate,
      endDate,
      startValue,
      endValue,
      startError,
      endError,
      init: false,
      open: props.open || false,
      yearNav: props.yearNav,
      monthNav: props.monthNav,
    };

    this.monthsInView = props.monthsInView || (props.withInput ? 2 : 1);
  }

  componentDidUpdate(prevProps: DateRangePickerProps, prevState: DateRangePickerState) {
    if (prevProps.startDate !== this.props.startDate) {
      const { inputFormat, validators } = this.props;

      const d = convertToDate(this.props.startDate, inputFormat, validators);
      const val = translateToString(inputFormat, d);
      this.setState({
        startDate: d,
        startValue: val,
      });
    }

    if (prevProps.endDate !== this.props.endDate) {
      const { inputFormat, validators } = this.props;

      const d = convertToDate(this.props.endDate, inputFormat, validators);
      const val = translateToString(inputFormat, d);
      this.setState({
        endDate: d,
        endValue: val,
      });
    }

    if (prevProps.open !== this.props.open) {
      this.setState({
        open: this.props.open || false,
      });
    }

    if (prevProps.yearNav !== this.props.yearNav) {
      this.setState({
        yearNav: this.props.yearNav,
      });
    }

    if (prevProps.monthNav !== this.props.monthNav) {
      this.setState({
        monthNav: this.props.monthNav,
      });
    }

    if (prevState.startDate !== this.state.startDate || prevState.endDate !== this.state.endDate) {
      const { onRangeChange, outputFormat } = this.props;

      const { startDate, endDate } = this.state;

      const { startError, endError } = this.getErrors(startDate, endDate);

      this.setState({
        startError,
        endError,
      });
      if (onRangeChange) {
        const inRangeError = this.getInRangeError();

        const sValue = translateToString(outputFormat, startDate);
        const eValue = translateToString(outputFormat, endDate);
        if (!inRangeError && !startError && !endError) {
          if (this.props.allowReverseSelection) {
            if (startDate && endDate) {
              onRangeChange(startDate, endDate, sValue, eValue);
            }
          } else {
            onRangeChange(startDate, endDate, sValue, eValue);
          }
        } else if (!this.props.allowReverseSelection) {
          if (!startError) onRangeChange(startDate, undefined, sValue, eValue);
          else if (!endError) onRangeChange(undefined, endDate, sValue, eValue);
          else onRangeChange(undefined, undefined, sValue, eValue);
        }
      }

      if (this.state.startDate && this.state.endDate) {
        this.setState({
          open: false,
        });
      }
    }
  }

  getDate = (startDate?: Date, endDate?: Date) => {
    const { inputFormat } = this.props;

    const startVal = startDate ? translateToString(inputFormat, startDate) : '';
    const endVal = endDate ? translateToString(inputFormat, endDate) : '';

    return {
      startValue: startVal,
      endValue: endVal,
    };
  };

  getErrors = (startDate?: Date, endDate?: Date) => {
    const isError = (date?: Date) => {
      const { disabledBefore, disabledAfter } = this.props;

      const { year: dbYear, month: dbMonth, date: dbDate } = getDateInfo(disabledBefore);

      const { year: daYear, month: daMonth, date: daDate } = getDateInfo(disabledAfter);

      return !date
        ? false
        : compareDate(date, 'less', dbYear, dbMonth, dbDate) || compareDate(date, 'more', daYear, daMonth, daDate);
    };

    let startError = isError(startDate);
    let endError = isError(endDate);

    const { year: eYear, month: eMonth, date: eDate } = getDateInfo(endDate);
    if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
      startError = true;
      endError = true;
    }

    return { startError, endError };
  };

  getInRangeError = () => {
    const { rangeLimit } = this.props;

    if (rangeLimit) {
      const { startDate, endDate } = this.state;

      const { year: sYear, month: sMonth, date: sDate } = getDateInfo(startDate);

      const { year: eYear, month: eMonth, date: eDate } = getDateInfo(endDate);

      let limitDate: Date;
      if (startDate) {
        limitDate = new Date(startDate);
        limitDate.setDate(sDate + rangeLimit);

        return compareDate(limitDate, 'less', eYear, eMonth, eDate + 1);
      }
      if (endDate) {
        limitDate = new Date(endDate);
        limitDate.setDate(eDate - rangeLimit);

        return compareDate(limitDate, 'more', sYear, sMonth, sDate - 1);
      }
    }
    return false;
  };

  onRangeChangeHandler = (sDate?: Date, eDate?: Date) => {
    this.setState({
      init: true,
      startDate: sDate,
      endDate: eDate,
      startValue: sDate ? translateToString(this.props.inputFormat, sDate) : '',
      endValue: eDate ? translateToString(this.props.inputFormat, eDate) : '',
    });
  };

  onToggleHandler = (o: boolean, type?: string) => {
    const { singleInput, inputOptions, startInputOptions, endInputOptions } = this.props;

    const disabled = singleInput ? inputOptions.disabled : startInputOptions.disabled || endInputOptions.disabled;

    if (disabled) return;

    switch (type) {
      case 'outsideClick':
        this.setState({ open: o });
        break;
      case 'onClick':
        this.setState({ open: true });
        break;
    }
  };

  renderCalendar() {
    const {
      startDate: startDateProp,
      endDate: endDateProp,
      yearNav: yearNavProp,
      monthNav: monthNavProp,
      open,
      inputFormat,
      outputFormat,
      startInputOptions,
      endInputOptions,
      validators,
      withInput,
      position,
      disabledBefore,
      disabledAfter,
      onRangeChange,
      rangeLimit,
      ...rest
    } = this.props;

    const { startDate, endDate, yearNav, monthNav } = this.state;

    return (
      <Calendar
        {...rest}
        monthsInView={this.monthsInView}
        rangePicker={true}
        startDate={convertToDate(startDate, inputFormat, validators)}
        endDate={convertToDate(endDate, inputFormat, validators)}
        disabledBefore={convertToDate(disabledBefore, inputFormat, validators)}
        disabledAfter={convertToDate(disabledAfter, inputFormat, validators)}
        onRangeChange={this.onRangeChangeHandler}
        yearNav={yearNav}
        monthNav={monthNav}
        rangeLimit={rangeLimit}
      />
    );
  }

  render() {
    const {
      withInput,
      startInputOptions,
      endInputOptions,
      inputOptions,
      inputFormat,
      position,
      validators,
      singleInput,
      contentAlign,
      children,
    } = this.props;

    const { open } = this.state;

    const RangePickerClass = classNames({
      [styles['DateRangePicker']]: true,
      [styles[`DateRangePicker--${contentAlign}`]]: contentAlign,
    });

    if (withInput) {
      const trigger = singleInput ? (
        <SingleInputTrigger
          inputFormat={inputFormat}
          inputOptions={inputOptions}
          validators={validators}
          state={this.state}
          setState={this.setState.bind(this)}
        />
      ) : (
        <Trigger
          inputFormat={inputFormat}
          startInputOptions={startInputOptions}
          endInputOptions={endInputOptions}
          validators={validators}
          state={this.state}
          setState={this.setState.bind(this)}
        />
      );

      return (
        <Popover
          trigger={trigger}
          triggerClass="w-100"
          className={RangePickerClass}
          position={position}
          appendToBody={true}
          open={open}
          onToggle={this.onToggleHandler}
        >
          {children}
          {this.renderCalendar()}
        </Popover>
      );
    }

    return this.renderCalendar();
  }
}

export default DateRangePicker;
