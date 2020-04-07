import * as React from 'react';
import Calendar from '../calendar/Calendar';
import { View, Day, DateType, DateFormat } from '../calendar/types';
import Popover, { Position } from '@/components/molecules/popover';
import InputMask, { Mask, InputMaskProps } from '@/components/molecules/inputMask';
import masks from '@/components/molecules/inputMask/masks';
import validators from '@/utils/validators';
import { convertToDate, translateToDate, translateToString, Validator } from '../calendar/utility';

export interface DatePickerProps {
  /**
   * Callback function called when date is changed
   */
  onDateChange?: (date: Date, dateVal?: string) => void;
  jumpView?: boolean;
  /**
   * Selected date
   */
  date?: DateType;
  /**
   * Specifies first day of week to be rendered
   */
  firstDayOfWeek?: Day;
  /**
   * View inside `calendar`
   */
  view?: View;
  disabledBefore?: DateType;
  disabledAfter?: DateType;
  yearNav?: number;
  monthNav?: number;
  withInput?: boolean;
  /**
   * Position of `date picker`
   */
  position?: Position;
  inputFormat?: DateFormat;
  outputFormat?: DateFormat;
  inputProps?: InputMaskProps;
  mask?: Mask;
  validator?: Validator;
}

export const DatePicker: React.FunctionComponent<DatePickerProps> = props => {
  const {
    date: dateProp,
    withInput = false,
    inputFormat = 'dd/mm/yy',
    outputFormat = 'mm/dd/yy',
    inputProps = {
      name: 'datepicker',
      placeholder: inputFormat,
      placeholderChar: '_'
    },
    mask = masks.date[inputFormat],
    validator = validators.date,
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

export default DatePicker;
