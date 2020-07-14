import * as React from 'react';
import { Calendar, SharedProps } from '../calendar/Calendar';
import { DateType, DateFormat } from '../calendar/types';
import Popover, { Position } from '@/components/molecules/popover';
import InputMask, { Mask, InputMaskProps } from '@/components/molecules/inputMask';
import masks from '@/components/molecules/inputMask/masks';
import validators from '@/utils/validators';
import { convertToDate, translateToDate, translateToString, Validator, compareDate, getDateInfo } from '../calendar/utility';

export type DatePickerProps = {
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
} & SharedProps;

export const DatePicker = (props: DatePickerProps) => {
  const {
    date: dateProp,
    open: openProp = false,
    position = 'bottom-start',
    inputFormat = 'mm/dd/yyyy',
    outputFormat = 'mm/dd/yyyy',
    inputOptions = {
      name: 'datepicker',
      placeholder: inputFormat,
      placeholderChar: '_',
      required: false,
      caption: ''
    },
    mask = masks.date[inputFormat],
    validator = validators.date,
    withInput,
    disabledBefore,
    disabledAfter,
    onDateChange,
    ...rest
  } = props;

  const [init, setInit] = React.useState<boolean>(false);
  const [date, setDate] = React.useState<Date | undefined>();
  const [error, setError] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(openProp);

  React.useEffect(() => {
    const d = convertToDate(dateProp, inputFormat, validator);
    setDate(d);
  }, [dateProp]);

  React.useEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  React.useEffect(() => {
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

    const newError = !date
      ? true
      : compareDate(date, 'less', dbYear, dbMonth, dbDate)
      || compareDate(date, 'more', daYear, daMonth, daDate);

    setError(newError);

    if (init && !newError && onDateChange) {
      if (date) {
        const dVal = translateToString(outputFormat, date);
        onDateChange(date, dVal);
      }
    }
  }, [date]);

  const onDateChangeHandler = (d?: Date) => {
    setInit(true);
    if (d) setDate(d);
  };

  if (withInput) {
    const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
      setOpen(true);
      setInit(true);
      const placeholderChar = '_';
      if (val && !val.includes(placeholderChar)) {
        const d = translateToDate(inputFormat, val, validator);
        if (d) setDate(d);
      }
    };

    const onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
      setInit(true);
      const placeholderChar = '_';
      if (!val || val.includes(placeholderChar)) {
        setDate(undefined);
      }
    };

    const onClearHandler = () => {
      setInit(true);
      setDate(undefined);
    };

    const onToggleHandler = (o: boolean, type?: string) => {
      switch (type) {
        case 'outsideClick':
          setOpen(o);
          break;
        case 'onClick':
          setOpen(true);
          break;
      }
    };

    const trigger = (
      <InputMask
        {...inputOptions}
        error={inputOptions.required && error}
        mask={mask}
        value={date ? translateToString(inputFormat, date) : ''}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onClear={onClearHandler}
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
        onToggle={onToggleHandler}
      >
        <Calendar
          {...rest}
          date={convertToDate(date, inputFormat, validator)}
          disabledBefore={convertToDate(disabledBefore, inputFormat, validator)}
          disabledAfter={convertToDate(disabledAfter, inputFormat, validator)}
          onDateChange={onDateChangeHandler}
        />
      </Popover>
    );
  }

  return (
    <Calendar
      {...rest}
      date={convertToDate(date, inputFormat, validator)}
      disabledBefore={convertToDate(disabledBefore, inputFormat, validator)}
      disabledAfter={convertToDate(disabledAfter, inputFormat, validator)}
      onDateChange={onDateChangeHandler}
    />
  );
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
