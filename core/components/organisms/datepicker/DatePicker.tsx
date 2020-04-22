import * as React from 'react';
import { Calendar, SharedProps } from '../calendar/Calendar';
import { DateType, DateFormat } from '../calendar/types';
import Popover, { Position } from '@/components/molecules/popover';
import InputMask, { Mask, InputMaskProps } from '@/components/molecules/inputMask';
import masks from '@/components/molecules/inputMask/masks';
import validators from '@/utils/validators';
import { convertToDate, translateToDate, translateToString, Validator } from '../calendar/utility';

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
   * Position of `DatePicker` w.r.t. `InputMask`
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
  inputProps?: InputMaskProps;
  /**
   * custom Mask for the mentioned inputFormat
   */
  mask?: Mask;
  /**
   * custom Validator for the mentioned inputFormat and outputFormat
   */
  validator?: Validator;
} & SharedProps;

export const DatePicker = (props: DatePickerProps) => {
  const {
    date: dateProp,
    inputFormat = 'mm/dd/yyyy',
    outputFormat = 'mm/dd/yyyy',
    inputProps = {
      name: 'datepicker',
      placeholder: inputFormat,
      placeholderChar: '_'
    },
    mask = masks.date[inputFormat],
    validator = validators.date,
    withInput,
    position,
    disabledBefore,
    disabledAfter,
    onDateChange,
    ...rest
  } = props;

  const [date, setDate] = React.useState<Date | undefined>();
  const [error, setError] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const d = convertToDate(dateProp, inputFormat, validator);
    setDate(d);
  }, [dateProp]);

  React.useEffect(() => {
    setError(!date);

    if (onDateChange) {
      if (date) {
        const dVal = translateToString(outputFormat, date);
        onDateChange(date, dVal);
      }
    }
  }, [date]);

  const onDateChangeHandler = (d?: Date) => {
    if (d) setDate(d);
  };

  if (withInput) {
    const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
      setOpen(true);
      const placeholderChar = '_';
      if (val && !val.includes(placeholderChar)) {
        const d = translateToDate(inputFormat, val, validator);
        if (d) setDate(d);
      }
    };

    const onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
      const placeholderChar = '_';
      if (!val || val.includes(placeholderChar)) {
        setDate(undefined);
      }
    };

    const onClearHandler = () => {
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
        {...inputProps}
        error={error}
        mask={mask}
        value={date ? translateToString(inputFormat, date) : ''}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onClear={onClearHandler}
      />
    );

    return (
      <Popover
        trigger={trigger}
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
