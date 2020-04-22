import * as React from 'react';
import { Calendar, SharedProps } from '../calendar/Calendar';
import { DateType, DateFormat } from '../calendar/types';
import Text from '@/components/atoms/text';
import Popover, { Position } from '@/components/molecules/popover';
import InputMask, { Mask, InputMaskProps } from '@/components/molecules/inputMask';
import masks from '@/components/molecules/inputMask/masks';
import validators from '@/utils/validators';
import { getDateInfo, convertToDate, compareDate, translateToString, translateToDate, Validator } from '../calendar/utility';

export type RangePickerProps = {
  /**
   * @argument startDate Start Date object
   * @argument endDate End Date object
   * @argument startDateVal Start Date string value as per `outputFormat`
   * @argument endDateVal End Date string value as per `outputFormat`
   */
  onRangeChange?: (startDate: Date, endDate: Date, startValue?: string, endValue?: string) => void;
  /**
   * Start date of `RangePicker`
   */
  startDate?: DateType;
  /**
   * End date of `RangePicker`
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
   * Position of `RangePicker` w.r.t. `InputMask`
   */
  position?: Position;
  /**
   * Should be used if `date` is of type `string`
   * @default "mm/dd/yyyy"
   */
  inputFormat?: DateFormat;
  /**
   * Should be used to translate `date` to desired format for `onRangeChange` callback
   * @default "mm/dd/yyyy"
   */
  outputFormat?: DateFormat;
  /**
   * Separator to be used between the two `InputMask`
   * @default " - "
   */
  rangeSeparator?: string;
  /**
   * Props to be used for Start date `InputMask`
   */
  startInputProps?: Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'Blur' | 'onClick' | 'onClear'>;
  /**
   * Props to be used for Start date `InputMask`
   */
  endInputProps?: Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'Blur' | 'onClick' | 'onClear'>;
  /**
   * custom Mask for the mentioned inputFormat
   */
  mask?: Mask;
  /**
   * custom Validator for the mentioned inputFormat and outputFormat
   */
  validator?: Validator;
} & SharedProps;

export const RangePicker = (props: RangePickerProps) => {
  const {
    startDate: startDateProp,
    endDate: endDateProp,
    yearNav: yearNavProp,
    monthNav: monthNavProp,
    inputFormat = 'mm/dd/yyyy',
    outputFormat = 'mm/dd/yyyy',
    rangeSeparator = ' - ',
    startInputProps = {
      name: 'rangePicker-start',
      label: 'Start Date',
      placeholderChar: '_',
      placeholder: inputFormat
    },
    endInputProps = {
      name: 'rangePicker-end',
      label: 'End Date',
      placeholderChar: '_',
      placeholder: inputFormat,
    },
    mask = masks.date[inputFormat],
    validator = validators.date,
    withInput,
    position,
    disabledBefore,
    disabledAfter,
    onRangeChange,
    rangeLimit,
    ...rest
  } = props;

  const [startDate, setStartDate] = React.useState<Date | undefined>();
  const [endDate, setEndDate] = React.useState<Date | undefined>();
  const [yearNav, setYearNav] = React.useState<number | undefined>(yearNavProp);
  const [monthNav, setMonthNav] = React.useState<number | undefined>(monthNavProp);
  const [open, setOpen] = React.useState<boolean>(false);
  const [startError, setStartError] = React.useState<boolean>(false);
  const [endError, setEndError] = React.useState<boolean>(false);

  React.useEffect(() => {
    const d = startDateProp ? convertToDate(startDateProp, inputFormat, validator) : undefined;
    setStartDate(d);
  }, [startDateProp]);

  React.useEffect(() => {
    const d = endDateProp ? convertToDate(endDateProp, inputFormat, validator) : undefined;
    setEndDate(d);
  }, [endDateProp]);

  React.useEffect(() => {
    setYearNav(yearNavProp);
  }, [yearNavProp]);

  React.useEffect(() => {
    setMonthNav(monthNavProp);
  }, [monthNavProp]);

  React.useEffect(() => {
    let sError = !startDate;
    let eError = !endDate;

    const {
      year: sYear,
      month: sMonth,
    } = getDateInfo(startDate);
    const {
      year: eYear,
      month: eMonth,
      date: eDate
    } = getDateInfo(endDate);
    if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
      sError = true;
      eError = true;
    }

    if (startDate) {
      setYearNav(sYear);
      setMonthNav(sMonth);
    }
    if (endDate) {
      setYearNav(eYear);
      setMonthNav(eMonth);
    }

    setStartError(sError);
    setEndError(eError);
    if (onRangeChange) {
      if (startDate && endDate) {
        const inRangeError = getInRangeError();
        if (!inRangeError && !sError && !eError) {
          const sValue = translateToString(outputFormat, startDate);
          const eValue = translateToString(outputFormat, endDate);
          onRangeChange(startDate, endDate, sValue, eValue);
        }
      }
    }
  }, [startDate, endDate]);

  const getInRangeError = () => {
    if (rangeLimit) {
      const {
        year: sYear,
        month: sMonth,
        date: sDate
      } = getDateInfo(startDate);

      const {
        year: eYear,
        month: eMonth,
        date: eDate
      } = getDateInfo(endDate);

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

  const onRangeChangeHandler = (sDate?: Date, eDate?: Date) => {
    if (sDate) setStartDate(sDate);
    if (eDate) setEndDate(eDate);
  };

  if (withInput) {
    const updateNav = (type: string) => {
      if (type === 'start') {
        const {
          year,
          month
        } = getDateInfo(startDate);
        setYearNav(year);
        setMonthNav(month);
      }
      if (type === 'end') {
        const {
          year,
          month
        } = getDateInfo(endDate);
        setYearNav(year);
        setMonthNav(month);
      }
    };

    const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => {
      setOpen(true);

      if (type === 'start') {
        const placeholderChar = startInputProps.placeholderChar ? startInputProps.placeholderChar : '_';
        if (val && !val.includes(placeholderChar)) {
          const d = translateToDate(inputFormat, val, validator);
          if (d) {
            setStartDate(d);
            if (endDate) {
              const {
                year: eYear,
                month: eMonth,
                date: eDate
              } = getDateInfo(endDate);
              if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
                setEndDate(undefined);
              }
            }
          }
        }
      }
      if (type === 'end') {
        const placeholderChar = endInputProps.placeholderChar ? endInputProps.placeholderChar : '_';
        if (val && !val.includes(placeholderChar)) {
          const d = translateToDate(inputFormat, val, validator);
          if (d) setEndDate(d);
        }
      }
    };

    const onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => {
      if (type === 'start') {
        const placeholderChar = startInputProps.placeholderChar ? startInputProps.placeholderChar : '_';
        if (!val || val.includes(placeholderChar)) setStartDate(undefined);
      }
      if (type === 'end') {
        const placeholderChar = endInputProps.placeholderChar ? endInputProps.placeholderChar : '_';
        if (!val || val.includes(placeholderChar)) setEndDate(undefined);
      }
    };

    const onClearHandler = (type: string) => {
      if (type === 'start') {
        setStartDate(undefined);
        updateNav('end');
      }
      if (type === 'end') {
        setEndDate(undefined);
        updateNav('start');
      }
    };

    const onClickHandler = (type: string) => {
      if (!open) {
        updateNav(type);
      }
    };

    const trigger = (
      <div className="RangePicker-input">
        <InputMask
          {...startInputProps}
          mask={mask}
          value={startDate ? translateToString(inputFormat, startDate) : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => onChangeHandler(e, val || '', 'start')}
          onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => onBlurHandler(e, val || '', 'start')}
          onClear={() => onClearHandler('start')}
          onClick={() => onClickHandler('start')}
          error={startError}
        />
        <div className="RangePicker-rangeSeparator">
          <Text>{rangeSeparator}</Text>
        </div>
        <InputMask
          {...endInputProps}
          mask={mask}
          value={endDate ? translateToString(inputFormat, endDate) : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => onChangeHandler(e, val || '', 'end')}
          onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => onBlurHandler(e, val || '', 'end')}
          onClear={() => onClearHandler('end')}
          onClick={() => onClickHandler('end')}
          error={endError}
        />
      </div>
    );

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
          rangePicker={true}
          startDate={convertToDate(startDate, inputFormat, validator)}
          endDate={convertToDate(endDate, inputFormat, validator)}
          disabledBefore={convertToDate(disabledBefore, inputFormat, validator)}
          disabledAfter={convertToDate(disabledAfter, inputFormat, validator)}
          onRangeChange={onRangeChangeHandler}
          yearNav={yearNav}
          monthNav={monthNav}
          rangeLimit={rangeLimit}
        />
      </Popover>
    );
  }
  return (
    <Calendar
      {...rest}
      rangePicker={true}
      startDate={convertToDate(startDate, inputFormat, validator)}
      endDate={convertToDate(endDate, inputFormat, validator)}
      disabledBefore={convertToDate(disabledBefore, inputFormat, validator)}
      disabledAfter={convertToDate(disabledAfter, inputFormat, validator)}
      onRangeChange={onRangeChangeHandler}
      yearNav={yearNav}
      monthNav={monthNav}
      rangeLimit={rangeLimit}
    />
  );
};

RangePicker.displayName = 'RangePicker';

export default RangePicker;
