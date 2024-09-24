import * as React from 'react';
import { Calendar, SharedProps } from '../calendar/Calendar';
import { DateType, DateFormat } from '../calendar/types';
import { Popover, Utils, Chip } from '@/index';
import { PopoverProps, InputMaskProps } from '@/index.type';
import { Validators } from '@/utils/types';
import { convertToDate, translateToString, compareDate, getDateInfo } from '../calendar/utility';
import { Trigger } from './Trigger';
import config from '../calendar/config';
import classNames from 'classnames';

export type DatePickerProps = SharedProps & {
  /**
   * Callback function called when date is changed
   * @argument date Date object
   * @argument dateVal Date string value as per `outputFormat`
   */
  onDateChange?: (date: Date | undefined, dateVal?: string) => void;
  /**
   * Selected date
   *
   * `number` - number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC
   *
   * `string` - Date string value as per `inputFormat`
   */
  date?: DateType;
  /**
   * Set if `InputMask` should be used as trigger
   */
  withInput?: boolean;
  /**
   * Sets open state of `Popover`
   * @default false
   */
  open?: boolean;
  /**
   * Position of `DatePicker` with respect to `InputMask`
   */
  position: PopoverProps['position'];
  /**
   * Should be used if `date` is of type `string`
   */
  inputFormat: DateFormat;
  /**
   * Should be used to translate `date` to desired format for `onDateChange` callback
   */
  outputFormat: DateFormat;
  /**
   * Props to be used for `InputMask`
   */
  inputOptions: Omit<InputMaskProps, 'mask' | 'value'>;
  /**
   * custom Validator for `DatePicker`
   *
   * `ValidatorFn = (val: string, format: string) => boolean`
   */
  validators: Validators;
  /**
   * Close Popover on date selection
   */
  closeOnSelect: boolean;
  /**
   * Add or remove the select today's date chip from DatePicker Footer
   */
  showTodayDate?: boolean;
  /**
   * Element to be rendered inside Popover
   */
  children?: React.ReactNode;
  /**
   * Callback function called when date is invalid
   * @argument date Date object
   * @argument dateVal Date string value as per `outputFormat`
   */
  onError?: (date: Date | undefined, dateVal?: string) => void;
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * PopoverOptions:
   * {
   *    appendToBody?: boolean;
   *    hideOnReferenceEscape?: boolean;
   *    boundaryElement?: Element;
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | appendToBody | Appends `Datepicker` inside body element | true |
   * | hideOnReferenceEscape | Hides the `Datepicker` when its reference element is outside the boundaries | true |
   * | boundaryElement | Boundary of Popover | |
   *
   */
  popoverOptions?: PopoverOptions;
};

export interface DatePickerState {
  init: boolean;
  date?: Date;
  error: boolean;
  open: boolean;
}

interface PopoverOptions {
  appendToBody?: PopoverProps['appendToBody'];
  hideOnReferenceEscape?: PopoverProps['hideOnReferenceEscape'];
  boundaryElement?: PopoverProps['boundaryElement'];
}

export class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  static defaultProps = {
    ...Calendar.defaultProps,
    position: 'bottom-start',
    inputFormat: 'mm/dd/yyyy',
    outputFormat: 'mm/dd/yyyy',
    validators: [Utils.validators.date],
    inputOptions: {},
    closeOnSelect: true,
  };

  constructor(props: DatePickerProps) {
    super(props);

    const { inputFormat, validators } = props;

    const date = convertToDate(props.date, inputFormat, validators);
    const error = this.getError(date);

    this.state = {
      date,
      error,
      init: false,
      open: props.open || false,
    };
  }

  componentDidUpdate(prevProps: DatePickerProps, prevState: DatePickerState) {
    if (prevProps.date !== this.props.date) {
      const { inputFormat, validators } = this.props;

      const d = convertToDate(this.props.date, inputFormat, validators);
      this.setState({
        date: d,
      });
    }

    if (prevProps.open !== this.props.open) {
      this.setState({
        open: this.props.open || false,
      });
    }

    if (prevState.date !== this.state.date) {
      const { onDateChange, outputFormat } = this.props;

      const { date } = this.state;

      const newError = this.getError(date);

      this.setState({ error: newError });

      if (onDateChange) {
        if (!newError) {
          const dVal = translateToString(outputFormat, date);
          onDateChange(date, dVal);
        } else {
          onDateChange(undefined, '');
        }
      }
    }
  }

  getError = (date?: Date) => {
    const { disabledBefore, disabledAfter, outputFormat, onError } = this.props;

    if (!date) return false;

    const { year: dbYear, month: dbMonth, date: dbDate } = getDateInfo(disabledBefore);
    const { year: daYear, month: daMonth, date: daDate } = getDateInfo(disabledAfter);

    if (compareDate(date, 'less', dbYear, dbMonth, dbDate) || compareDate(date, 'more', daYear, daMonth, daDate)) {
      if (onError) {
        const dVal = translateToString(outputFormat, date);
        onError(date, dVal);
      }
      return true;
    }
    return false;
  };

  onDateChangeHandler = (d?: Date) => {
    this.setState({
      init: true,
      date: d,
    });

    const { closeOnSelect } = this.props;

    if (closeOnSelect) this.setState({ open: false });
  };

  onToggleHandler = (o: boolean, type?: string) => {
    const { disabled } = this.props.inputOptions;
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
      date: dateProp,
      open,
      position,
      inputFormat,
      outputFormat,
      inputOptions,
      validators,
      withInput,
      disabledBefore,
      disabledAfter,
      onDateChange,
      closeOnSelect,
      size,
      showTodayDate = true,
      children = <></>,
      view,
      ...rest
    } = this.props;

    const { date } = this.state;
    const { months } = config;
    const todayDate = new Date(Date.now());
    const todayMonthAndDate = `${months[todayDate.getMonth()]} ${todayDate.getDate()}`;
    const currDate = convertToDate(date, inputFormat, validators);
    const dateDisabledBefore = convertToDate(disabledBefore, inputFormat, validators);
    const dateDisabledAfter = convertToDate(disabledAfter, inputFormat, validators);

    const isSameDay = (date1: Date, date2: Date) => {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    };

    const isTodayDisabled = () => {
      if (
        (dateDisabledBefore && isSameDay(todayDate, dateDisabledBefore)) ||
        (dateDisabledAfter && isSameDay(todayDate, dateDisabledAfter))
      ) {
        return false;
      }

      const isTodayDateDisabled =
        (dateDisabledBefore && todayDate < dateDisabledBefore) || (dateDisabledAfter && todayDate > dateDisabledAfter);

      return isTodayDateDisabled;
    };

    const todayChipClass = classNames({
      'd-flex justify-content-center': true,
      'pb-5': size === 'small',
      'pb-6': size === 'large',
      'pt-3': size === 'large' && view === 'year',
    });

    return (
      <div>
        <div className="d-flex">
          {children}
          <Calendar
            {...rest}
            size={size}
            date={currDate}
            view={view}
            disabledBefore={dateDisabledBefore}
            disabledAfter={dateDisabledAfter}
            onDateChange={this.onDateChangeHandler}
          />
        </div>
        {showTodayDate && (
          <div className={todayChipClass} data-test="DesignSystem-Select--TodaysDate-wrapper">
            <Chip
              label={`Today, ${todayMonthAndDate}`}
              name="chip"
              type="action"
              disabled={isTodayDisabled()}
              onClick={() => this.onDateChangeHandler(new Date())}
            />
          </div>
        )}
      </div>
    );
  }

  render() {
    const { position, withInput, inputFormat, inputOptions, validators, popoverOptions } = this.props;

    const { open } = this.state;

    if (withInput) {
      return (
        <Popover
          trigger={
            <Trigger
              inputFormat={inputFormat}
              inputOptions={inputOptions}
              validators={validators}
              state={this.state}
              setState={this.setState.bind(this)}
            />
          }
          {...popoverOptions}
          triggerClass="w-100"
          position={position}
          appendToBody={true}
          open={open}
          onToggle={this.onToggleHandler}
        >
          {this.renderCalendar()}
        </Popover>
      );
    }

    return this.renderCalendar();
  }
}

export default DatePicker;
