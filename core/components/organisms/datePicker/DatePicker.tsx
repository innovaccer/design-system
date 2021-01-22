import * as React from 'react';
import { Calendar, SharedProps } from '../calendar/Calendar';
import { DateType, DateFormat } from '../calendar/types';
import { Popover, Utils } from '@/index';
import { PopoverProps, InputMaskProps } from '@/index.type';
import { Validators } from '@/utils/types';
import { convertToDate, translateToString, compareDate, getDateInfo } from '../calendar/utility';
import { Trigger } from './Trigger';

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
  inputOptions: Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'onBlur' | 'onClear' | 'error'>;
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
};

export interface DatePickerState {
  init: boolean;
  date?: Date;
  error: boolean;
  open: boolean;
}

export class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  static defaultProps = {
    ...Calendar.defaultProps,
    position: 'bottom-start',
    inputFormat: 'mm/dd/yyyy',
    outputFormat: 'mm/dd/yyyy',
    validators: [Utils.validators.date],
    inputOptions: {},
    closeOnSelect: true
  };

  constructor(props: DatePickerProps) {
    super(props);

    const {
      inputFormat,
      validators
    } = props;

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
      const {
        inputFormat,
        validators
      } = this.props;

      const d = convertToDate(this.props.date, inputFormat, validators);
      this.setState({
        date: d
      });
    }

    if (prevProps.open !== this.props.open) {
      this.setState({
        open: this.props.open || false
      });
    }

    if (prevState.date !== this.state.date) {
      const {
        onDateChange,
        outputFormat
      } = this.props;

      const {
        date
      } = this.state;

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
    const {
      disabledBefore,
      disabledAfter
    } = this.props;

    const {
      year: dbYear,
      month: dbMonth,
      date: dbDate
    } = getDateInfo(disabledBefore);

    const {
      year: daYear,
      month: daMonth,
      date: daDate
    } = getDateInfo(disabledAfter);

    return !date ? true
      : compareDate(date, 'less', dbYear, dbMonth, dbDate)
      || compareDate(date, 'more', daYear, daMonth, daDate);
  }

  onDateChangeHandler = (d?: Date) => {
    this.setState({
      init: true,
      date: d
    });

    const {
      closeOnSelect
    } = this.props;

    if (closeOnSelect) this.setState({ open: false });
  }

  onToggleHandler = (o: boolean, type?: string) => {
    switch (type) {
      case 'outsideClick':
        this.setState({ open: o });
        break;
      case 'onClick':
        this.setState({ open: true });
        break;
    }
  }

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
      ...rest
    } = this.props;

    const {
      date
    } = this.state;

    return (
      <Calendar
        {...rest}
        date={convertToDate(date, inputFormat, validators)}
        disabledBefore={convertToDate(disabledBefore, inputFormat, validators)}
        disabledAfter={convertToDate(disabledAfter, inputFormat, validators)}
        onDateChange={this.onDateChangeHandler}
      />
    );
  }

  render() {
    const {
      position,
      withInput,
      inputFormat,
      inputOptions,
      validators
    } = this.props;

    const {
      open
    } = this.state;

    if (withInput) {
      return (
        <Popover
          trigger={(
            <Trigger
              inputFormat={inputFormat}
              inputOptions={inputOptions}
              validators={validators}
              state={this.state}
              setState={this.setState.bind(this)}
            />
          )}
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
