import * as React from 'react';
import { Calendar, SharedProps } from '../calendar/Calendar';
import { DateType, DateFormat } from '../calendar/types';
import Popover, { Position } from '@/components/molecules/popover';
import InputMask, { Mask, InputMaskProps } from '@/components/molecules/inputMask';
import masks from '@/components/molecules/inputMask/masks';
import validators from '@/utils/validators';
import { getDateInfo, convertToDate, compareDate, translateToString, translateToDate, Validator } from '../calendar/utility';
import { Row, Column } from '@/index';

export type DateRangePickerProps = {
  /**
   * @argument startDate Start Date object
   * @argument endDate End Date object
   * @argument startDateVal Start Date string value as per `outputFormat`
   * @argument endDateVal End Date string value as per `outputFormat`
   */
  onRangeChange?: (startDate: Date, endDate: Date, startValue?: string, endValue?: string) => void;
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
   * Sets open state of `Popover`
   * @default false
   */
  open?: boolean;
  /**
   * Position of `DateRangePicker` w.r.t. `InputMask`
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
   * Props to be used for Start date `InputMask`
   */
  startInputOptions?: Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'Blur' | 'onClick' | 'onClear'>;
  /**
   * Props to be used for Start date `InputMask`
   */
  endInputOptions?: Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'Blur' | 'onClick' | 'onClear'>;
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

export const DateRangePicker = (props: DateRangePickerProps) => {
  const {
    startDate: startDateProp,
    endDate: endDateProp,
    yearNav: yearNavProp,
    monthNav: monthNavProp,
    open: openProp = false,
    inputFormat = 'mm/dd/yyyy',
    outputFormat = 'mm/dd/yyyy',
    startInputOptions = {
      name: 'dateDateRangePicker-start',
      label: 'Start Date',
      placeholderChar: '_',
      placeholder: inputFormat,
      required: false,
      caption: ''
    },
    endInputOptions = {
      name: 'dateDateRangePicker-end',
      label: 'End Date',
      placeholderChar: '_',
      placeholder: inputFormat,
      required: false,
      caption: ''
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

  const [init, setInit] = React.useState<boolean>(false);
  const [startDate, setStartDate] = React.useState<Date | undefined>();
  const [endDate, setEndDate] = React.useState<Date | undefined>();
  const [yearNav, setYearNav] = React.useState<number | undefined>(yearNavProp);
  const [monthNav, setMonthNav] = React.useState<number | undefined>(monthNavProp);
  const [open, setOpen] = React.useState<boolean>(openProp);
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
    setOpen(openProp);
  }, [openProp]);

  React.useEffect(() => {
    let sError = false;
    let eError = false;
    if (init) {
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

      sError = !startDate ? true :
        compareDate(startDate, 'less', dbYear, dbMonth, dbDate)
        || compareDate(startDate, 'more', daYear, daMonth, daDate);
      eError = !endDate ? true :
        compareDate(endDate, 'less', dbYear, dbMonth, dbDate)
        || compareDate(endDate, 'more', daYear, daMonth, daDate);
    }

    const {
      year: eYear,
      month: eMonth,
      date: eDate
    } = getDateInfo(endDate);
    if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
      sError = true;
      eError = true;
    }

    setStartError(sError);
    setEndError(eError);
    if (onRangeChange) {
      if (startDate && endDate) {
        const inRangeError = getInRangeError();
        if (init && !inRangeError && !sError && !eError) {
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
    if (sDate && eDate) {
      if (!init) setInit(true);
    }
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
      setInit(true);
      setOpen(true);

      if (type === 'start') {
        const placeholderChar = startInputOptions.placeholderChar ? startInputOptions.placeholderChar : '_';
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
        const placeholderChar = endInputOptions.placeholderChar ? endInputOptions.placeholderChar : '_';
        if (val && !val.includes(placeholderChar)) {
          const d = translateToDate(inputFormat, val, validator);
          if (d) setEndDate(d);
        }
      }
    };

    const onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => {
      setInit(true);
      if (type === 'start') {
        const placeholderChar = startInputOptions.placeholderChar ? startInputOptions.placeholderChar : '_';
        if (!val || val.includes(placeholderChar)) setStartDate(undefined);
      }
      if (type === 'end') {
        const placeholderChar = endInputOptions.placeholderChar ? endInputOptions.placeholderChar : '_';
        if (!val || val.includes(placeholderChar)) setEndDate(undefined);
      }
    };

    const onClearHandler = (type: string) => {
      setInit(true);
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
      <Row>
        <Column size={'6'} sizeXS={'12'} className="DateRangePicker-input DateRangePicker-input--startDate">
          <InputMask
            {...startInputOptions}
            mask={mask}
            value={startDate ? translateToString(inputFormat, startDate) : ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => onChangeHandler(e, val || '', 'start')}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => onBlurHandler(e, val || '', 'start')}
            onClear={() => onClearHandler('start')}
            onClick={() => onClickHandler('start')}
            error={startError}
            caption={startInputOptions.required && startError ? startInputOptions.caption || 'Invalid value' : ''}
          />
        </Column>
        <Column size={'6'} sizeXS={'12'} className="DateRangePicker-input DateRangePicker-input--endDate">
          <InputMask
            {...endInputOptions}
            mask={mask}
            value={endDate ? translateToString(inputFormat, endDate) : ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => onChangeHandler(e, val || '', 'end')}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => onBlurHandler(e, val || '', 'end')}
            onClear={() => onClearHandler('end')}
            onClick={() => onClickHandler('end')}
            error={endError}
            caption={endInputOptions.required && endError ? endInputOptions.caption || 'Invalid value' : ''}
          />
        </Column>
      </Row>
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

DateRangePicker.displayName = 'DateRangePicker';

export default DateRangePicker;
