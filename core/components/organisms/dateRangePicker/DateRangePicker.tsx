import * as React from 'react';
import { Calendar, SharedProps } from '../calendar/Calendar';
import { DateType, DateFormat } from '../calendar/types';
import { Position } from '@/components/molecules/popover';
import { InputMaskProps } from '@/components/molecules/inputMask';
import { Validators } from '@/utils/types';
import {
  getDateInfo,
  convertToDate,
  compareDate,
  translateToString,
  translateToDate,
} from '../calendar/utility';
import { Row, Column, InputMask, Popover, Label, Utils } from '@/index';

export type InputOptions = Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'onBlur' | 'onClick' | 'onClear' | 'error'>
  & { label?: string };

export type DateRangePickerProps = SharedProps & {
  /**
   * @argument startDate Start Date object
   * @argument endDate End Date object
   * @argument startDateVal Start Date string value as per `outputFormat`
   * @argument endDateVal End Date string value as per `outputFormat`
   */
  onRangeChange?: (startDate?: Date, endDate?: Date, startValue?: string, endValue?: string) => void;
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
  position: Position;
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
  inputOptions: InputOptions
  /**
   * Props to be used for Start date `InputMask`
   */
  startInputOptions: InputOptions
  /**
   * Props to be used for End date `InputMask`
   */
  endInputOptions: InputOptions
  /**
   * custom Validator for `DateRangePicker`
   *
   * `ValidatorFn: (val: string, format: string) => boolean`
   */
  validators: Validators;
};

interface DateRangePickerState {
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
  static defaultProps = {
    ...Calendar.defaultProps,
    monthsInView: 2,
    position: 'bottom-start',
    inputFormat: 'mm/dd/yyyy',
    outputFormat: 'mm/dd/yyyy',
    validators: [Utils.validators.date],
    inputOptions: {
      label: 'Date'
    },
    startInputOptions: {
      label: 'Start Date'
    },
    endInputOptions: {
      label: 'End Date'
    }
  };
  monthsInView: number;

  constructor(props: DateRangePickerProps) {
    super(props);

    const {
      inputFormat,
      validators
    } = props;

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
      const {
        inputFormat,
        validators
      } = this.props;

      const d = convertToDate(this.props.startDate, inputFormat, validators);
      const val = translateToString(inputFormat, d);
      this.setState({
        startDate: d,
        startValue: val
      });
    }

    if (prevProps.endDate !== this.props.endDate) {
      const {
        inputFormat,
        validators
      } = this.props;

      const d = convertToDate(this.props.endDate, inputFormat, validators);
      const val = translateToString(inputFormat, d);
      this.setState({
        endDate: d,
        endValue: val
      });
    }

    if (prevProps.open !== this.props.open) {
      this.setState({
        open: this.props.open || false
      });
    }

    if (prevProps.yearNav !== this.props.yearNav) {
      this.setState({
        yearNav: this.props.yearNav
      });
    }

    if (prevProps.monthNav !== this.props.monthNav) {
      this.setState({
        monthNav: this.props.monthNav
      });
    }

    if (prevState.startDate !== this.state.startDate || prevState.endDate !== this.state.endDate) {
      const {
        onRangeChange,
        outputFormat
      } = this.props;

      const {
        startDate,
        endDate
      } = this.state;

      const {
        startError,
        endError
      } = this.getErrors(startDate, endDate);

      this.setState({
        startError,
        endError
      });
      if (onRangeChange) {
        const inRangeError = this.getInRangeError();

        const sValue = translateToString(outputFormat, startDate);
        const eValue = translateToString(outputFormat, endDate);
        if (!inRangeError && (!startError && !endError)) {
          onRangeChange(startDate, endDate, sValue, eValue);
        } else {
          if (!startError) onRangeChange(startDate, undefined, sValue, eValue);
          else if (!endError) onRangeChange(undefined, endDate, sValue, eValue);
          else onRangeChange(undefined, undefined, sValue, eValue);
        }
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
  }

  getErrors = (startDate?: Date, endDate?: Date) => {
    const isError = (date?: Date) => {
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
    };

    let startError = isError(startDate);
    let endError = isError(endDate);

    const {
      year: eYear,
      month: eMonth,
      date: eDate
    } = getDateInfo(endDate);
    if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
      startError = true;
      endError = true;
    }

    return { startError, endError };
  }

  getInRangeError = () => {
    const {
      rangeLimit
    } = this.props;

    if (rangeLimit) {
      const {
        startDate,
        endDate
      } = this.state;

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
  }

  onRangeChangeHandler = (sDate?: Date, eDate?: Date) => {
    const { startValue, endValue } = this.state;

    this.setState({
      init: true,
      startDate: sDate,
      endDate: eDate,
      startValue: sDate ? translateToString(this.props.inputFormat, sDate) : startValue,
      endValue: eDate ? translateToString(this.props.inputFormat, eDate) : endValue
    });
  }

  updateNav = (type: string) => {
    const {
      startDate,
      endDate
    } = this.state;

    if (type === 'start') {
      const {
        year,
        month
      } = getDateInfo(startDate);
      this.setState({
        yearNav: year,
        monthNav: month
      });
    }
    if (type === 'end') {
      const {
        year,
        month
      } = getDateInfo(endDate);

      this.setState({
        yearNav: year,
        monthNav: month
      });
    }
  }

  onDateChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string) => {
    const {
      inputFormat,
      validators,
      inputOptions
    } = this.props;

    const {
      startDate,
      endDate,
      startValue,
      endValue
    } = this.state;

    const date = val.split(' - ');
    const startVal = date[0];
    const endVal = date[1];

    const placeholderChar = inputOptions.placeholderChar || '_';

    if (startValue !== startVal && startVal && !startVal.includes(placeholderChar)) {
      const startD = translateToDate(inputFormat, startVal, validators);

      if (startD) {
        const isEndDateValid = endValue && !endValue.includes(placeholderChar);

        this.setState({
          startDate: startD,
          endDate: isEndDateValid ? endDate : undefined
        });

        if (endDate) {
          const {
            year: eYear,
            month: eMonth,
            date: eDate
          } = getDateInfo(endDate);
          if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
            this.setState({ endDate: undefined });
          }
        }
      }
    }

    if (endValue !== endVal && endVal && !endVal.includes(placeholderChar)) {
      const endD = translateToDate(inputFormat, endVal, validators);
      const isStartDateValid = startValue && !startValue.includes(placeholderChar);

      if (endD) {
        this.setState({
          endDate: endD,
          startDate: isStartDateValid ? startDate : undefined
        });
      }
    }

    this.setState({
      startValue: startVal,
      endValue: endVal
    });

  }

  onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => {
    const {
      inputFormat,
      startInputOptions,
      endInputOptions,
      validators,
    } = this.props;

    const {
      startDate,
      endDate
    } = this.state;

    this.setState({ open: true });

    if (type === 'start') {
      const placeholderChar = startInputOptions.placeholderChar || '_';
      if (val && !val.includes(placeholderChar)) {
        const d = translateToDate(inputFormat, val, validators);
        if (d) {
          this.setState({ startDate: d });
          if (endDate) {
            const {
              year: eYear,
              month: eMonth,
              date: eDate
            } = getDateInfo(endDate);
            if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
              this.setState({ endDate: undefined });
            }
          }
        }
      }
    }
    if (type === 'end') {
      const placeholderChar = endInputOptions.placeholderChar ? endInputOptions.placeholderChar : '_';
      if (val && !val.includes(placeholderChar)) {
        const d = translateToDate(inputFormat, val, validators);
        if (d) this.setState({ endDate: d });
      }
    }

  }

  onFocusHandler = () => {
    this.setState({
      init: true
    });
  }

  onBlurHandler = (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => {
    const {
      startInputOptions,
      endInputOptions,
      inputOptions
    } = this.props;

    if (type === 'start') {
      const placeholderChar = startInputOptions.placeholderChar || '_';
      if (!val || val.includes(placeholderChar)) this.setState({ startDate: undefined });
    }
    if (type === 'end') {
      const placeholderChar = endInputOptions.placeholderChar || '_';
      if (!val || val.includes(placeholderChar)) this.setState({ endDate: undefined });
    }
    if (type === 'start-end') {
      const placeholderChar = inputOptions.placeholderChar || '_';

      const date = val.split(' - ');
      const startVal = date[0];
      const endVal = date[1];

      if (!startVal || startVal.includes(placeholderChar)) this.setState({ startDate: undefined });
      if (!endVal || endVal.includes(placeholderChar)) this.setState({ endDate: undefined });
    }
  }

  onClearHandler = (type: string) => {
    if (type === 'start') {
      this.setState({
        init: true,
        startDate: undefined
      });
      this.updateNav('end');
    }
    if (type === 'end') {
      this.setState({
        init: true,
        endDate: undefined
      });
      this.updateNav('start');
    }
    if (type === 'start-end') {
      this.setState({
        init: true,
        startDate: undefined,
        endDate: undefined,
        yearNav: undefined,
        monthNav: undefined
      });
    }

  }

  onClickHandler = (type: string) => {
    if (!open) {
      this.updateNav(type);
    }
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

    const {
      startDate,
      endDate,
      yearNav,
      monthNav
    } = this.state;

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
      singleInput
    } = this.props;

    const {
      init,
      startDate,
      endDate,
      startValue,
      endValue,
      startError,
      endError,
      open
    } = this.state;

    if (withInput) {
      const mask = Utils.masks.date[inputFormat];
      const rangeMask = Utils.masks.rangeDate[inputFormat];
      const showStartError = startInputOptions.required && startError && init;
      const showEndError = endInputOptions.required && endError && init;
      const showError = inputOptions.required && (startError || endError) && init;

      const inputValidator = (val: string): boolean => {
        return Utils.validators.isValid(validators, val, inputFormat);
      };

      const trigger = singleInput ? (
        <Row>
          <Column>
            {inputOptions.label && (
              <Label required={inputOptions.required} withInput={true}>
                {inputOptions.label}
              </Label>
            )}
            <InputMask
              icon="events"
              placeholder={`${inputFormat} - ${inputFormat}`}
              {...inputOptions}
              mask={rangeMask}
              value={`${startValue || ''} - ${endValue || ''}`}
              onFocus={this.onFocusHandler}
              onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
                this.onDateChangeHandler(e, val || '');
              }}
              onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
                this.onBlurHandler(e, val || '', 'start-end');
              }}
              onClear={() => this.onClearHandler('start-end')}
              error={showError}
              caption={showError ? inputOptions.caption || 'Invalid value' : ''}
              validators={[inputValidator]}
            />
          </Column>
        </Row>
      ) : (
          <Row>
            <Column size={'6'} sizeXS={'12'} className="DateRangePicker-input DateRangePicker-input--startDate">
              {startInputOptions.label && (
                <Label required={startInputOptions.required} withInput={true}>
                  {startInputOptions.label}
                </Label>
              )}
              <InputMask
                icon="events"
                placeholder={inputFormat}
                {...startInputOptions}
                mask={mask}
                value={startDate ? translateToString(inputFormat, startDate) : ''}
                onFocus={this.onFocusHandler}
                onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
                  this.onChangeHandler(e, val || '', 'start');
                }}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
                  this.onBlurHandler(e, val || '', 'start');
                }}
                onClear={() => this.onClearHandler('start')}
                onClick={() => this.onClickHandler('start')}
                error={showStartError}
                caption={showStartError ? startInputOptions.caption || 'Invalid value' : ''}
                validators={[inputValidator]}
              />
            </Column>
            <Column size={'6'} sizeXS={'12'} className="DateRangePicker-input DateRangePicker-input--endDate">
              {endInputOptions.label && (
                <Label required={endInputOptions.required} withInput={true}>
                  {endInputOptions.label}
                </Label>
              )}
              <InputMask
                icon="events"
                placeholder={inputFormat}
                {...endInputOptions}
                mask={mask}
                value={endDate ? translateToString(inputFormat, endDate) : ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
                  this.onChangeHandler(e, val || '', 'end');
                }}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>, val?: string) => {
                  this.onBlurHandler(e, val || '', 'end');
                }}
                onClear={() => this.onClearHandler('end')}
                onClick={() => this.onClickHandler('end')}
                error={showEndError}
                caption={showEndError ? endInputOptions.caption || 'Invalid value' : ''}
                validators={[inputValidator]}
              />
            </Column>
          </Row>
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

export default DateRangePicker;
