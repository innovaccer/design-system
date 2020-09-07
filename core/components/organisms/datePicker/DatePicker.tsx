import * as React from 'react';
import { Calendar, SharedProps } from '../calendar/Calendar';
import { DateType, DateFormat } from '../calendar/types';
import Popover, { Position } from '@/components/molecules/popover';
import InputMask, { Mask, InputMaskProps } from '@/components/molecules/inputMask';
import masks from '@/components/molecules/inputMask/masks';
import validators from '@/utils/validators';
import { convertToDate, translateToDate, translateToString, Validator, compareDate, getDateInfo } from '../calendar/utility';

type CompProps = {
  /**
   * Callback function called when date is changed
   * @argument date Date object
   * @argument dateVal Date string value as per `outputFormat`
   */
  onDateChange?: (date: Date, dateVal: string) => void;
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
   * @default "bottom-start"
   */
  position?: Position;
  /**
   * Should be used if `date` is of type `string`
   * @default "mm/dd/yyyy"
   */
  inputFormat?: DateFormat;
  /**
   * Should be used to translate `date` to desired format for `onDateChange` callback
   * @default "mm/dd/yyyy"
   */
  outputFormat?: DateFormat;
  /**
   * Props to be used for `InputMask`
   */
  inputOptions?: InputMaskProps;
  /**
   * custom Mask for the mentioned inputFormat
   */
  mask?: Mask;
  /**
   * custom Validator for the mentioned inputFormat and outputFormat
   * `(format: string, val: string) => boolean`
   */
  validator?: Validator;
  /**
   * Close Popover on date selection
   */
  closeOnSelect?: boolean;
} & SharedProps;

const defaultProps = {
  position: 'bottom-start',
  inputFormat: 'mm/dd/yyyy',
  outputFormat: 'mm/dd/yyyy',
  validator: validators.date,
  inputOptions: {},
  closeOnSelect: true
};

type DefaultProps = Readonly<typeof defaultProps>;
export type DatePickerProps = CompProps & DefaultProps;

interface DatePickerState {
  date?: Date;
  error: boolean;
  open: boolean;
}

export class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  static defaultProps = defaultProps;

  constructor(props: DatePickerProps) {
    super(props);

    const {
      inputFormat,
      validator
    } = props;

    const date = convertToDate(props.date, inputFormat, validator);

    this.state = {
      date,
      open: props.open || false,
      error: this.getError(date)
    };
  }

  componentDidUpdate(prevProps: DatePickerProps, prevState: DatePickerState) {
    if (prevProps.date !== this.props.date) {
      const {
        inputFormat,
        validator
      } = this.props;

      const d = convertToDate(this.props.date, inputFormat, validator);
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

      if (!newError && onDateChange) {
        if (date) {
          const dVal = translateToString(outputFormat, date);
          onDateChange(date, dVal);
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
    this.setState({ date: d });

    const {
      closeOnSelect
    } = this.props;

    if (closeOnSelect) this.setState({ open: false });
  }

  onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
    const {
      inputFormat,
      validator
    } = this.props;

    this.setState({
      open: true
    });

    const placeholderChar = '_';
    if (val && !val.includes(placeholderChar)) {
      const d = translateToDate(inputFormat, val, validator);
      this.setState({ date: d });
    }
  }

  onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
    const placeholderChar = '_';
    if (!val || val.includes(placeholderChar)) {
      this.setState({ date: undefined });
    }
  }

  onClearHandler = () => {
    this.setState({
      date: undefined
    });
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
      mask,
      validator,
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
        date={convertToDate(date, inputFormat, validator)}
        disabledBefore={convertToDate(disabledBefore, inputFormat, validator)}
        disabledAfter={convertToDate(disabledAfter, inputFormat, validator)}
        onDateChange={this.onDateChangeHandler}
      />
    );
  }

  render() {
    const {
      position,
      inputFormat,
      inputOptions,
      mask = masks.date[inputFormat],
      withInput
    } = this.props;

    const {
      date,
      error,
      open
    } = this.state;

    if (withInput) {
      const trigger = (
        <InputMask
          placeholder={inputFormat}
          {...inputOptions}
          error={inputOptions.required && error}
          mask={mask}
          value={date ? translateToString(inputFormat, date) : ''}
          onChange={this.onChangeHandler}
          onBlur={this.onBlurHandler}
          onClear={this.onClearHandler}
          caption={inputOptions.required && error ? inputOptions.caption || 'Invalid value' : ''}
        />
      );

      return (
        <Popover
          trigger={trigger}
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
