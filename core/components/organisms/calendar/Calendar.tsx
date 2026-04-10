import * as React from 'react';
import classNames from 'classnames';
import { Button, Heading, Text, Icon } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { TextColor } from '@/common.type';
import styles from '@css/components/calendar.module.css';

import config from './config';
import {
  focusDateCell,
  focusMonthCell,
  focusYearCell,
  formatDateAriaLabel,
  handleDateViewKeyDown,
  handleMonthViewKeyDown,
  handleYearViewKeyDown,
} from './utils';
import { Size, Day, View, Events } from './types';
import {
  compareDate,
  compareYearBlock,
  getDateInfo,
  getDaysInMonth,
  getFirstDayOfMonth,
  getIndexOfDay,
  getYearBlock,
  convertToDate,
  dateComparison,
} from './utility';

type OnHover = React.MouseEvent<HTMLSpanElement> | React.MouseEvent<HTMLDivElement>;
interface hoveredDateProps {
  value: number;
  isToday: boolean;
  isDisabled: boolean;
  todayDate?: Date;
  fullDate: Date;
  date: number;
  month: string;
  year: number;
  dayName: string;
}
interface hoveredMonthProps {
  value: string;
  month: string;
  year?: number;
  isCurrentMonth: boolean;
  isDisabled: boolean;
}
interface hoveredYearProps {
  value: number;
  year: number;
  isCurrentYear: boolean;
  isDisabled: boolean;
}
export interface SharedProps extends BaseProps {
  /**
   * Size of `Calendar`
   */
  size: Size;
  /**
   * Number of months rendered in view
   */
  monthsInView: number;
  /**
   * Enables jumping to different view on clicking on Calendar Header
   *
   * **set to `false` if monthsInView > 1**
   * @default true
   */
  jumpView?: boolean;
  /**
   * Specifies first day of week to be rendered
   */
  firstDayOfWeek: Day;
  /**
   * Specifies initial view of `Calendar`
   */
  view: View;
  /**
   * Dates to be disabled before mentioned date
   */
  disabledBefore?: Date;
  /**
   * Dates to be disabled after mentioned date
   */
  disabledAfter?: Date;
  /**
   * Initial year to be set for navigation
   *
   * **use only if date, startDate and endDate are all set or undefined**
   */
  yearNav?: number;
  /**
   * Initial month to be set for navigation
   *
   * **0 indexed(0-11)**
   *
   * **use only if date, startDate and endDate are all set or undefined**
   */
  monthNav?: number;
  /**
   * Should be use to allow reverse selection in the daterangepicker
   */
  allowReverseSelection?: boolean;
  /**
   * Accessible label for calendar wrapper
   */
  'aria-label'?: string;
  /**
   * Associates calendar wrapper with an external label
   */
  'aria-labelledby'?: string;
}

export type CalendarProps = {
  /**
   * Callback function called when date is changed
   */
  onDateChange?: (date: Date) => void;
  /**
   * Callback function called when range is changed
   */
  onRangeChange?: (startDate: Date | undefined, endDate: Date | undefined) => void;
  /**
   * Callback function called when a date is hovered
   */
  onDateHover?: (dateData: hoveredDateProps, evnt: OnHover) => void;
  /**
   * Callback function called when a month is hovered
   */
  onMonthHover?: (monthData: hoveredMonthProps, evnt: OnHover) => void;
  /**
   * Callback function called when a year is hovered
   */
  onYearHover?: (yearData: hoveredYearProps, evnt: OnHover) => void;
  /**
   * Selected date
   */
  date?: Date;
  /**
   * Set if want to use as RangePicker
   */
  rangePicker?: boolean;
  /**
   * Selected startDate for RangePicker
   */
  startDate?: Date;
  /**
   * Selected endDate for RangePicker
   */
  endDate?: Date;
  /**
   * Allowed limit for difference in startDate and endDate
   *
   * **set `0` or `undefined` for infinite limit**
   */
  rangeLimit?: number;
  /**
   * Adds event highlighter to given date
   * `events: {
   *    'mm/dd/yyyy': true
   * }`
   */
  events?: Events;
} & SharedProps;

interface CalendarState {
  view: View;
  year?: number;
  month?: number;
  date?: number;
  currDate?: Date;
  hoverDate?: Date;
  startDate?: Date;
  endDate?: Date;
  yearBlockNav: number;
  yearNav: number;
  monthNav: number;
  todayDate: number;
  currMonth: number;
  currYear: number;
  focusedDateRow?: number;
  focusedDateCol?: number;
  focusedDateMonthIndex?: number;
  focusedMonth?: number;
  focusedYearIndex?: number;
  pendingFocusDate?: Date;
}

export class Calendar extends React.Component<CalendarProps, CalendarState> {
  static defaultProps = {
    size: 'large',
    monthsInView: 1,
    view: 'date',
    firstDayOfWeek: 'sunday',
    jumpView: true,
  };

  calendarWrapperRef = React.createRef<HTMLDivElement>();

  constructor(props: CalendarProps) {
    super(props);

    const { rangePicker, startDate, endDate, monthsInView, view } = this.props;

    const currDate = rangePicker ? endDate || startDate : props.date;

    const yearNav = props.yearNav !== undefined ? props.yearNav : getDateInfo(currDate || Date.now()).year;
    const monthNav = props.monthNav !== undefined ? props.monthNav : getDateInfo(currDate || Date.now()).month;
    const { year, month, date } = getDateInfo(currDate);
    const todayCompleteDate = getDateInfo(new Date(Date.now()));
    this.state = {
      currDate,
      startDate,
      endDate,
      yearNav,
      monthNav,
      year,
      month,
      date,
      todayDate: todayCompleteDate.date,
      currMonth: todayCompleteDate.month,
      currYear: todayCompleteDate.year,
      view: monthsInView > 1 ? 'date' : view,
      yearBlockNav: getYearBlock(yearNav),
      pendingFocusDate: undefined,
    };
  }

  componentDidUpdate(prevProps: CalendarProps, prevState: CalendarState) {
    const { monthsInView } = this.props;

    if (prevProps.date !== this.props.date) {
      const { year, month, date } = getDateInfo(this.props.date);
      this.updateState(year, month, date);
      const d = convertToDate(this.props.date);
      this.setState({
        currDate: d,
      });
    }

    if (
      this.props.startDate &&
      !isNaN(this.props.startDate.getTime()) &&
      prevProps.startDate !== this.props.startDate
    ) {
      const d = convertToDate(this.props.startDate);
      this.setState({
        startDate: d,
      });
    }

    if (this.props.endDate && !isNaN(this.props.endDate.getTime()) && prevProps.endDate !== this.props.endDate) {
      const d = convertToDate(this.props.endDate);
      this.setState({
        endDate: d,
      });
    }

    if (prevProps.view !== this.props.view) {
      if (this.props.monthsInView === 1) {
        this.setState({
          view: this.props.view,
        });
      }
    }

    if (prevProps.yearNav !== this.props.yearNav) {
      const { yearNav } = this.props;
      if (yearNav) {
        this.setState({
          yearNav,
          yearBlockNav: getYearBlock(yearNav),
        });
      }
    }

    if (prevProps.monthNav !== this.props.monthNav) {
      const { monthNav } = this.props;
      if (monthNav) {
        this.setState({
          monthNav,
        });
      }
    }

    if (prevState.currDate !== this.state.currDate) {
      const { rangePicker, onDateChange } = this.props;

      const { currDate, startDate, endDate } = this.state;

      if (currDate) {
        if (onDateChange) onDateChange(currDate);
        if (rangePicker) {
          this.setState({
            hoverDate: undefined,
          });
          if (startDate && endDate) {
            this.setState({
              startDate: currDate,
              endDate: undefined,
            });
          } else {
            const { year, month, date } = getDateInfo(currDate);
            if (startDate) {
              if (compareDate(startDate, 'more', year, month, date)) {
                this.setState({ startDate: currDate });
              } else {
                this.setState({ endDate: currDate });
              }
            } else if (endDate) {
              if (compareDate(endDate, 'less', year, month, date)) {
                this.setState({ endDate: currDate });
              } else {
                this.setState({ startDate: currDate });
              }
            } else {
              this.setState({ startDate: currDate });
            }
          }
        } else {
          this.setState({ startDate: currDate });
        }
      }
    }

    if (
      (this.state.startDate &&
        !isNaN(this.state.startDate.getTime()) &&
        prevState.startDate?.getTime() !== this.state.startDate?.getTime()) ||
      (this.state.endDate &&
        !isNaN(this.state.endDate?.getTime()) &&
        prevState.endDate?.getTime() !== this.state.endDate?.getTime())
    ) {
      const { onRangeChange } = this.props;

      const { startDate, endDate } = this.state;

      if (onRangeChange) onRangeChange(startDate, endDate);
    }

    if (this.props.allowReverseSelection && prevState.hoverDate !== this.state.hoverDate) {
      const { hoverDate, startDate, endDate } = this.state;
      if (startDate && !endDate) {
        const { year, month, date } = getDateInfo(startDate);
        if (compareDate(hoverDate, 'less', year, month, date)) {
          this.setState({ startDate: undefined, endDate: startDate });
        }
      } else if (endDate && !startDate) {
        const { year, month, date } = getDateInfo(endDate);
        if (compareDate(hoverDate, 'more', year, month, date)) {
          this.setState({ startDate: endDate, endDate: undefined });
        }
      }
    }

    if (prevState.year !== this.state.year) {
      const { year } = this.state;
      if (year !== undefined && monthsInView === 1) {
        this.setState({
          year,
          yearBlockNav: getYearBlock(year),
          yearNav: year,
        });
      }
    }

    if (prevState.month !== this.state.month) {
      const { month } = this.state;
      if (month !== undefined && monthsInView === 1) {
        this.setState({
          monthNav: month,
        });
      }
    }

    if (this.state.pendingFocusDate) {
      // Find the grid containing the pending date and focus it
      const { pendingFocusDate } = this.state;
      const { monthsInView } = this.props;

      for (let i = 0; i < monthsInView; i++) {
        const { year, month } = this.getNavDateInfo(i);
        if (pendingFocusDate.getFullYear() === year && pendingFocusDate.getMonth() === month) {
          const pos = this.getDateGridPosition(year, month, pendingFocusDate.getDate());
          if (pos && this.calendarWrapperRef.current) {
            const focused = focusDateCell(this.calendarWrapperRef.current, pos.row, pos.col, i);
            if (focused) {
              this.setState({
                pendingFocusDate: undefined,
                focusedDateRow: pos.row,
                focusedDateCol: pos.col,
                focusedDateMonthIndex: i,
              });
              return; // Successfully focused
            }
          }
          break;
        }
      }

      // Fallback 1: Try to focus the first valid focusable date cell
      if (this.calendarWrapperRef.current) {
        const firstFocusableDate = this.calendarWrapperRef.current.querySelector(
          '[data-calendar-date-cell]:not([aria-disabled="true"]):not([disabled])'
        ) as HTMLElement | null;
        if (firstFocusableDate) {
          firstFocusableDate.focus({ preventScroll: true });
          this.setState({ pendingFocusDate: undefined });
        } else {
          // Fallback 2: Focus calendar header
          const headerBtn = this.calendarWrapperRef.current.querySelector<HTMLElement>(
            '[class*="Calendar-headerButton"]:not([disabled]), [class*="Calendar-headerIcon"]:not([disabled])'
          );
          if (headerBtn) {
            headerBtn.focus({ preventScroll: true });
          }
          this.setState({ pendingFocusDate: undefined });
        }
      }
    }

    // Restore focus when it was dropped to body after nav (e.g. Next/Prev became disabled)
    const navChanged =
      prevState.monthNav !== this.state.monthNav ||
      prevState.yearNav !== this.state.yearNav ||
      prevState.yearBlockNav !== this.state.yearBlockNav;
    if (navChanged && document.activeElement === document.body && this.calendarWrapperRef.current) {
      const headerBtn = this.calendarWrapperRef.current.querySelector<HTMLElement>(
        '[class*="Calendar-headerButton"]:not([disabled]), [class*="Calendar-headerIcon"]:not([disabled])'
      );
      if (headerBtn) {
        headerBtn.focus({ preventScroll: true });
      }
    }
  }

  updateState = (year: number, month?: number, date?: number) => {
    this.setState({
      year,
      month,
      date,
    });
  };

  getDateValue = (year: number, month: number, date: number): Date | undefined => {
    const d = new Date(year, month, date);
    return d;
  };

  getNavDateInfo = (index: number): Record<string, any> => {
    const { yearBlockNav, yearNav, monthNav } = this.state;

    const { monthBlock } = config;
    const yearBlock = yearBlockNav;
    const month = (monthNav + index) % monthBlock === -1 ? 11 : (monthNav + index) % monthBlock;
    // const year = yearNav + (index !== 0 && month < monthNav ? 1 : 0);
    let year;
    if (index >= 0) {
      year = yearNav + (index !== 0 && month < monthNav ? 1 : 0);
    } else {
      year = yearNav - (index !== 0 && month > monthNav ? 1 : 0);
    }
    return { yearBlock, year, month };
  };

  /** Compute row/col for a date in the calendar grid (for keyboard focus) */
  getDateGridPosition = (year: number, month: number, date: number): { row: number; col: number } | null => {
    const { firstDayOfWeek } = this.props;
    const { daysInRow } = config;
    const firstDayIndex = getFirstDayOfMonth(year, month);
    const desiredFirstDayIndex = getIndexOfDay(firstDayOfWeek);
    const dayDiff = (firstDayIndex - desiredFirstDayIndex + 7) % 7;
    const dummyDays = Math.abs(dayDiff);
    const position = dummyDays + date - 1;
    if (position < 0) return null;
    return { row: Math.floor(position / daysInRow), col: position % daysInRow };
  };

  getInRangeError = () => {
    const { rangePicker, rangeLimit } = this.props;

    const { startDate: startDateState, endDate: endDateState, hoverDate: hoverDateState } = this.state;

    if (rangePicker && rangeLimit) {
      const { year: startYear, month: startMonth, date: startDate } = getDateInfo(startDateState);

      const { year: endYear, month: endMonth, date: endDate } = getDateInfo(endDateState);

      const { year: hoverYear, month: hoverMonth, date: hoverDate } = getDateInfo(hoverDateState);

      let limitDate: Date;
      if (startDateState) {
        limitDate = new Date(startDateState);
        limitDate.setDate(startDate + rangeLimit);

        return (
          compareDate(limitDate, 'less', hoverYear, hoverMonth, hoverDate + 1) ||
          compareDate(limitDate, 'less', endYear, endMonth, endDate + 1)
        );
      }
      if (endDateState) {
        limitDate = new Date(endDateState);
        limitDate.setDate(endDate - rangeLimit);

        return (
          compareDate(limitDate, 'more', hoverYear, hoverMonth, hoverDate - 1) ||
          compareDate(limitDate, 'more', startYear, startMonth, startDate - 1)
        );
      }
    }
    return false;
  };

  selectYear = (year: number, disabled?: boolean) => () => {
    if (disabled) return;
    this.updateState(year);
    this.setState({
      view: 'month',
    });
  };

  yearMouseOverHandler = (
    year: number,
    isCurrentYear: boolean,
    isDisabled: boolean,
    ev: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { onYearHover } = this.props;
    const yearData = {
      value: year,
      year: year,
      isCurrentYear: isCurrentYear,
      isDisabled: isDisabled,
    };
    if (onYearHover) onYearHover(yearData, ev);
  };

  selectMonth = (month: number, disabled?: boolean) => () => {
    if (disabled) return;
    this.updateState(this.state.yearNav, month);
    this.setState({
      view: 'date',
    });
  };

  monthMouseOverHandler = (
    month: number,
    isCurrentMonth: boolean,
    isDisabled: boolean,
    ev: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { months } = config;
    const { onMonthHover } = this.props;
    const monthData = {
      value: months[month],
      month: months[month],
      year: this.state.year,
      isCurrentMonth: isCurrentMonth,
      isDisabled: isDisabled,
    };
    if (onMonthHover) onMonthHover(monthData, ev);
  };

  selectDate = (index: number, date: number, prevMonthDayRange: number, dayRange: number) => {
    const d = this.calculateDate(index, date, prevMonthDayRange, dayRange, false);
    this.setState({
      currDate: d,
    });
  };

  calculateDate = (
    index: number,
    date: number,
    prevMonthDayRange: number,
    dayRange: number,
    isDateHovered: boolean
  ) => {
    let neighbouringMonthIndex;
    let neighbouringMonthDate;
    let type = '';
    if (date <= 0) {
      neighbouringMonthIndex = index - 1;
      neighbouringMonthDate = prevMonthDayRange + date;
      type = 'prev';
    } else if (date > dayRange) {
      neighbouringMonthIndex = index;
      neighbouringMonthDate = date;
    } else {
      neighbouringMonthIndex = index;
      neighbouringMonthDate = date;
    }
    const { year, month } = this.getNavDateInfo(neighbouringMonthIndex);
    if (isDateHovered === false) {
      this.updateState(year, month, neighbouringMonthDate);
      this.onNavIconClickHandler(type)();
    }
    const d = this.getDateValue(year, month, neighbouringMonthDate);
    return d;
  };

  onNavIconClickHandler = (type: string) => () => {
    const { view, yearBlockNav, yearNav, monthNav } = this.state;

    const { yearBlockRange, monthBlock } = config;

    switch (view) {
      case 'year':
        if (type === 'prev') this.setState({ yearBlockNav: yearBlockNav - yearBlockRange });
        if (type === 'next') this.setState({ yearBlockNav: yearBlockNav + yearBlockRange });
        break;

      case 'month':
        if (type === 'prev') this.setState({ yearNav: yearNav - 1 });
        if (type === 'next') this.setState({ yearNav: yearNav + 1 });
        break;

      case 'date':
        if (type === 'prev') {
          if (monthNav === 0) this.setState({ yearNav: yearNav - 1 });
          this.setState({ monthNav: (monthBlock + monthNav - 1) % monthBlock });
        }
        if (type === 'next') {
          if (monthNav === monthBlock - 1) this.setState({ yearNav: yearNav + 1 });
          this.setState({ monthNav: (monthNav + 1) % monthBlock });
        }
        break;
    }
  };

  renderJumpButton = (type: string) => {
    const { disabledBefore, disabledAfter, size } = this.props;

    const { view, yearBlockNav, yearNav, monthNav } = this.state;

    let disabled = false;
    switch (view) {
      case 'year':
        if (type === 'prev') {
          disabled =
            compareYearBlock(disabledBefore, 'more', yearBlockNav) ||
            compareYearBlock(disabledBefore, 'equal', yearBlockNav);
        }
        if (type === 'next') {
          disabled =
            compareYearBlock(disabledAfter, 'less', yearBlockNav) ||
            compareYearBlock(disabledAfter, 'equal', yearBlockNav);
        }
        break;

      case 'month':
        if (type === 'prev') {
          disabled = compareDate(disabledBefore, 'more', yearNav - 1);
        }
        if (type === 'next') {
          disabled = compareDate(disabledAfter, 'less', yearNav + 1);
        }
        break;

      case 'date':
        if (type === 'prev') {
          disabled = compareDate(disabledBefore, 'more', yearNav, monthNav - 1);
        }
        if (type === 'next') {
          disabled = compareDate(disabledAfter, 'less', yearNav, monthNav + 1);
        }
        break;
    }

    const headerIconClass = classNames({
      [styles['Calendar-headerIcon']]: true,
      [styles[`Calendar-headerIcon--${type}`]]: type,
    });

    let ariaLabel = '';
    if (view === 'date') ariaLabel = type === 'prev' ? 'Previous month' : 'Next month';
    else if (view === 'month') ariaLabel = type === 'prev' ? 'Previous year' : 'Next year';
    else if (view === 'year') ariaLabel = type === 'prev' ? 'Previous year block' : 'Next year block';

    return (
      <Button
        type="button"
        className={headerIconClass}
        appearance="basic"
        icon={`arrow_${type === 'next' ? 'forward' : 'back'}`}
        disabled={disabled}
        size={size === 'small' ? 'tiny' : 'regular'}
        onClick={this.onNavIconClickHandler(type)}
        aria-label={ariaLabel}
      />
    );
  };

  onNavHeadingClickHandler = (currView: View) => () => {
    const { monthsInView } = this.props;

    let { jumpView } = this.props;

    if (jumpView) {
      if (monthsInView > 1) jumpView = false;
    }

    if (jumpView) {
      if (currView === 'year') this.setState({ view: 'date' });
      if (currView === 'month') this.setState({ view: 'year' });
      if (currView === 'date') this.setState({ view: 'month' });
    }
  };

  renderHeaderContent = (index: number) => {
    const { size, monthsInView, rangePicker } = this.props;

    const { view, yearBlockNav } = this.state;

    const { yearBlockRange, months } = config;

    const { year: yearNavVal, month: monthNavVal } = this.getNavDateInfo(index);

    const headerContentClass = classNames({
      [styles['Calendar-headerContent']]: true,
      [styles['Calendar-headerContent--noIcon-left']]: index === monthsInView - 1,
      [styles['Calendar-headerContent--noIcon-right']]: index === 0,
    });

    let headerContent = '';

    if (view === 'year') headerContent = `${yearBlockNav} - ${yearBlockNav + (yearBlockRange - 1)}`;
    if (view === 'month') headerContent = `${yearNavVal}`;

    const renderHeading = (content: string) => {
      if (size === 'small') {
        return (
          <>
            <Text weight="strong">{content}</Text>
            {view !== 'year' && !rangePicker && (
              <Icon appearance="inverse" className="pl-3" name="keyboard_arrow_down" />
            )}
          </>
        );
      }
      return (
        <>
          <Heading size="s">{content}</Heading>
          {view !== 'year' && !rangePicker && <Icon appearance="inverse" className="pl-3" name="keyboard_arrow_down" />}
        </>
      );
    };

    return (
      <div className={headerContentClass}>
        {view !== 'date' && (
          <button
            type="button"
            className={styles['Calendar-headerButton']}
            onClick={this.onNavHeadingClickHandler(view)}
            aria-label={view === 'year' ? 'Select date' : 'Select year'}
          >
            {renderHeading(headerContent)}
          </button>
        )}

        {view === 'date' && (
          <>
            <button
              type="button"
              className={styles['Calendar-headerButton']}
              onClick={this.onNavHeadingClickHandler(view)}
              aria-label="Select month"
            >
              {renderHeading(months[monthNavVal])}
            </button>
            <button
              type="button"
              className={classNames(styles['Calendar-headerButton'], 'ml-4')}
              onClick={this.onNavHeadingClickHandler('month')}
              aria-label="Select year"
            >
              {renderHeading(yearNavVal)}
            </button>
          </>
        )}
      </div>
    );
  };

  renderBodyYear = () => {
    const { yearBlockRange, yearsInRow } = config;

    const { size, rangePicker, disabledBefore, disabledAfter } = this.props;

    const { yearBlockNav, currYear } = this.state;

    const noOfRows = Math.ceil(yearBlockRange / yearsInRow);

    const calculatedIndex = this.state.year !== undefined ? this.state.year - yearBlockNav : 0;
    const defaultIndex = calculatedIndex >= 0 && calculatedIndex <= 11 ? calculatedIndex : 0;

    let targetIndex = this.state.focusedYearIndex ?? defaultIndex;
    if (targetIndex < 0 || targetIndex > 11) {
      targetIndex = defaultIndex;
    }

    const targetYear = yearBlockNav + targetIndex;
    const isTargetDisabled =
      compareDate(disabledBefore, 'more', targetYear) || compareDate(disabledAfter, 'less', targetYear);

    if (isTargetDisabled) {
      for (let i = 0; i < 12; i++) {
        const y = yearBlockNav + i;
        if (!(compareDate(disabledBefore, 'more', y) || compareDate(disabledAfter, 'less', y))) {
          targetIndex = i;
          break;
        }
      }
    }

    const effectiveFocusedYearIndex = targetIndex;

    return Array.from({ length: noOfRows }, (_y, row) => (
      <div key={row} role="row" className={styles['Calendar-valueRow']}>
        {Array.from({ length: yearsInRow }, (_x, col) => {
          const offset = yearsInRow * row + col;
          if (offset === yearBlockNav) return undefined;

          const year = yearBlockNav + offset;
          const disabled = compareDate(disabledBefore, 'more', year) || compareDate(disabledAfter, 'less', year);
          const active = !disabled && !rangePicker && year === this.state.year;
          const isCurrentYear = () => {
            return year === currYear;
          };

          const wrapperClass = classNames({
            [styles['Calendar-yearValueWrapper']]: true,
            [styles['Calendar-valueWrapper--disabled']]: disabled,
          });

          const valueClass = classNames({
            [styles['Calendar-value']]: true,
            [styles['Calendar-value--active']]: active,
            [styles['Calendar-value--disabled']]: disabled,
            [styles['Calendar-yearValue']]: true,
            [styles[`Calendar-yearValue--${size}`]]: size,
            [styles['Calendar-value--currDateMonthYear']]: isCurrentYear(),
          });

          const textClass = classNames({
            [styles['Calendar-value--currDate']]: isCurrentYear() && !active,
            [styles['Calendar-text']]: true,
          });

          const getTextColor = classNames({
            inverse: !active && !isCurrentYear() && !disabled,
            white: active,
            'primary-dark': isCurrentYear(),
          }) as TextColor;

          const getTextAppearance = (): 'default' | 'subtle' => (disabled ? 'subtle' : 'default');

          const isFocused = effectiveFocusedYearIndex === offset;

          return (
            <div key={`${row}-${col}`} className={wrapperClass}>
              <button
                type="button"
                role="gridcell"
                data-test="DesignSystem-Calendar--yearValue"
                data-calendar-year-cell
                data-year-index={offset}
                className={valueClass}
                tabIndex={isFocused ? 0 : -1}
                aria-label={year.toString()}
                aria-disabled={disabled}
                aria-selected={active}
                onClick={this.selectYear(year, disabled)}
                onKeyDown={(ev) => this.handleYearCellKeyDown(ev, year, offset, disabled)}
                onFocus={() => this.setState({ focusedYearIndex: offset })}
                onMouseOver={this.yearMouseOverHandler.bind(this, year, isCurrentYear(), disabled)}
              >
                <Text
                  size={size === 'small' ? 'small' : 'regular'}
                  color={getTextAppearance() === 'default' || isCurrentYear() ? getTextColor : undefined}
                  appearance={getTextAppearance()}
                  className={textClass}
                  weight={active ? 'strong' : undefined}
                >
                  {year}
                </Text>
              </button>
            </div>
          );
        })}
      </div>
    ));
  };

  renderBodyMonth = () => {
    const { monthBlock, monthsInRow, months } = config;

    const { size, disabledBefore, disabledAfter } = this.props;

    const { yearNav, year, currYear, currMonth } = this.state;

    const noOfRows = Math.ceil(monthBlock / monthsInRow);

    const defaultMonth = this.state.month ?? 0;
    let targetMonth = this.state.focusedMonth ?? defaultMonth;

    if (targetMonth < 0 || targetMonth > 11) {
      targetMonth = defaultMonth;
    }

    const isTargetDisabled =
      compareDate(disabledBefore, 'more', yearNav, targetMonth) ||
      compareDate(disabledAfter, 'less', yearNav, targetMonth);

    if (isTargetDisabled) {
      for (let m = 0; m < monthBlock; m++) {
        if (!(compareDate(disabledBefore, 'more', yearNav, m) || compareDate(disabledAfter, 'less', yearNav, m))) {
          targetMonth = m;
          break;
        }
      }
    }

    const effectiveFocusedMonth = targetMonth;

    return Array.from({ length: noOfRows }, (_y, row) => (
      <div key={row} role="row" className={styles['Calendar-valueRow']}>
        {Array.from({ length: monthsInRow }, (_x, col) => {
          const month = monthsInRow * row + col;
          const disabled =
            compareDate(disabledBefore, 'more', yearNav, month) || compareDate(disabledAfter, 'less', yearNav, month);
          const active = !disabled && year === yearNav && month === this.state.month;
          const isCurrentMonth = () => {
            return currYear === yearNav && currMonth === month;
          };
          const wrapperClass = classNames({
            [styles['Calendar-monthValueWrapper']]: true,
            [styles['Calendar-valueWrapper--disabled']]: disabled,
          });

          const valueClass = classNames({
            [styles['Calendar-value']]: true,
            [styles['Calendar-value--active']]: active,
            [styles['Calendar-value--disabled']]: disabled,
            [styles['Calendar-monthValue']]: true,
            [styles[`Calendar-monthValue--${size}`]]: size,
            [styles['Calendar-value--currDateMonthYear']]: isCurrentMonth(),
          });

          const getTextColor = classNames({
            inverse: !active && !isCurrentMonth() && !disabled,
            white: active,
            'primary-dark': isCurrentMonth(),
          }) as TextColor;

          const getTextAppearance = (): 'default' | 'subtle' => (disabled ? 'subtle' : 'default');

          const textClass = classNames({
            [styles['Calendar-value--currDate']]: isCurrentMonth() && !active,
            [styles['Calendar-text']]: true,
          });

          const isFocused = effectiveFocusedMonth === month;

          return (
            <div key={`${row}-${col}`} className={wrapperClass}>
              <button
                type="button"
                role="gridcell"
                data-test="DesignSystem-Calendar--monthValue"
                data-calendar-month-cell
                data-month={month}
                className={valueClass}
                tabIndex={isFocused ? 0 : -1}
                aria-label={months[month]}
                aria-disabled={disabled}
                aria-selected={active}
                onClick={this.selectMonth(month, disabled)}
                onKeyDown={(ev) => this.handleMonthCellKeyDown(ev, month, disabled)}
                onFocus={() => this.setState({ focusedMonth: month })}
                onMouseOver={this.monthMouseOverHandler.bind(this, month, isCurrentMonth(), disabled)}
              >
                <Text
                  size={size === 'small' ? 'small' : 'regular'}
                  color={getTextAppearance() === 'default' || isCurrentMonth() ? getTextColor : undefined}
                  appearance={getTextAppearance()}
                  className={textClass}
                  weight={active ? 'strong' : undefined}
                >
                  {months[month]}
                </Text>
              </button>
            </div>
          );
        })}
      </div>
    ));
  };

  onDateRowMouseLeaveHandler = () => {
    const { rangePicker } = this.props;

    if (rangePicker) {
      this.setState({
        hoverDate: undefined,
      });
    }
  };

  handleMonthCellKeyDown = (event: React.KeyboardEvent, _month: number, disabled: boolean) => {
    if (disabled) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
      }
      if (
        event.key !== 'ArrowUp' &&
        event.key !== 'ArrowDown' &&
        event.key !== 'ArrowLeft' &&
        event.key !== 'ArrowRight' &&
        event.key !== 'Home' &&
        event.key !== 'End'
      ) {
        return;
      }
    }

    const container = this.calendarWrapperRef.current;
    if (!container) return;

    const focusedMonth = _month;

    const handled = handleMonthViewKeyDown({
      event,
      container,
      focusedMonth,
      isMonthDisabled: (m: number) => {
        return (
          compareDate(this.props.disabledBefore, 'more', this.state.yearNav, m) ||
          compareDate(this.props.disabledAfter, 'less', this.state.yearNav, m)
        );
      },
      onNavigate: (newMonth: number) => {
        const didFocus = focusMonthCell(container, newMonth);
        if (didFocus) {
          this.setState({ focusedMonth: newMonth });
        }
      },
      onSelect: (m: number) => {
        this.selectMonth(m)();
      },
    });

    if (handled) {
      event.stopPropagation();
    }
  };

  handleYearCellKeyDown = (event: React.KeyboardEvent, _year: number, _offset: number, disabled: boolean) => {
    if (disabled) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
      }
      if (
        event.key !== 'ArrowUp' &&
        event.key !== 'ArrowDown' &&
        event.key !== 'ArrowLeft' &&
        event.key !== 'ArrowRight' &&
        event.key !== 'Home' &&
        event.key !== 'End' &&
        event.key !== 'PageUp' &&
        event.key !== 'PageDown'
      ) {
        return;
      }
    }

    const container = this.calendarWrapperRef.current;
    if (!container) return;

    const { yearBlockNav } = this.state;
    const focusedYearIndex = _offset;

    const handled = handleYearViewKeyDown({
      event,
      container,
      focusedYearIndex,
      yearBlockStart: yearBlockNav,
      isYearDisabled: (y: number) => {
        return compareDate(this.props.disabledBefore, 'more', y) || compareDate(this.props.disabledAfter, 'less', y);
      },
      onNavigate: (newYearIndex: number) => {
        const didFocus = focusYearCell(container, newYearIndex);
        if (didFocus) {
          this.setState({ focusedYearIndex: newYearIndex });
        }
      },
      onSelect: (y: number) => {
        this.selectYear(y)();
      },
      onPageUp: () => this.onNavIconClickHandler('prev')(),
      onPageDown: () => this.onNavIconClickHandler('next')(),
    });

    if (handled) {
      event.stopPropagation();
    }
  };

  handleDateCellKeyDown = (
    ev: React.KeyboardEvent,
    index: number,
    _row: number,
    _col: number,
    _noOfRows: number,
    date: number,
    prevMonthDayRange: number,
    dayRange: number,
    inRangeError: boolean,
    rangePicker: boolean,
    startDate?: Date,
    endDate?: Date
  ) => {
    const container = this.calendarWrapperRef.current;
    if (!container) return;

    const { year: yearNavVal, month: monthNavVal } = this.getNavDateInfo(index);
    const displayDate = date <= 0 ? prevMonthDayRange + date : date > dayRange ? date - dayRange : date;
    const focusedDate =
      this.calculateDate(index, date, prevMonthDayRange, dayRange, true) ||
      this.getDateValue(yearNavVal, monthNavVal, displayDate) ||
      new Date();

    const handled = handleDateViewKeyDown({
      event: ev,
      container,
      focusedDate,
      startOfWeekIndex: getIndexOfDay(this.props.firstDayOfWeek),
      isDateDisabled: (d: Date) => {
        return (
          compareDate(this.props.disabledBefore, 'more', d.getFullYear(), d.getMonth(), d.getDate()) ||
          compareDate(this.props.disabledAfter, 'less', d.getFullYear(), d.getMonth(), d.getDate())
        );
      },
      onNavigate: (newDate: Date) => {
        // Here we need to check if newDate falls out of bounds of current view
        const { yearNav, monthNav } = this.state;
        const { monthsInView } = this.props;

        const isVisible = (target: Date) => {
          for (let i = 0; i < monthsInView; i++) {
            const { year, month } = this.getNavDateInfo(i);
            if (target.getFullYear() === year && target.getMonth() === month) {
              return { visible: true, monthIndex: i };
            }
          }
          return { visible: false };
        };

        const targetVisibility = isVisible(newDate);

        if (targetVisibility.visible) {
          // Date is in view, we can just jump focus to it directly
          const pos = this.getDateGridPosition(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
          if (pos) {
            const didFocus = focusDateCell(container, pos.row, pos.col, targetVisibility.monthIndex);
            if (didFocus) {
              this.setState({
                focusedDateRow: pos.row,
                focusedDateCol: pos.col,
                focusedDateMonthIndex: targetVisibility.monthIndex,
              });
            }
          }
        } else {
          // Date is NOT in view. We need to shift the view.
          // For now, let's just trigger a month nav forward/back based on the direction.
          const currentVisibleStart = this.getDateValue(yearNav, monthNav, 1)!;

          if (newDate < currentVisibleStart) {
            // Need to navigate backward
            this.setState({
              monthNav: (config.monthBlock + monthNav - 1) % config.monthBlock,
              yearNav: monthNav === 0 ? yearNav - 1 : yearNav,
              pendingFocusDate: newDate,
            });
          } else {
            // Need to navigate forward
            this.setState({
              monthNav: (monthNav + 1) % config.monthBlock,
              yearNav: monthNav === config.monthBlock - 1 ? yearNav + 1 : yearNav,
              pendingFocusDate: newDate,
            });
          }
        }
      },
      onSelect: () => {
        if (rangePicker) {
          if (startDate && endDate) {
            this.selectDate(index, date, prevMonthDayRange, dayRange);
          } else if (!inRangeError) {
            this.selectDate(index, date, prevMonthDayRange, dayRange);
          }
        } else {
          this.selectDate(index, date, prevMonthDayRange, dayRange);
        }
      },
      onPageUp: () => this.onNavIconClickHandler('prev')(),
      onPageDown: () => this.onNavIconClickHandler('next')(),
      onShiftPageUp: () => {
        const { yearNav } = this.state;
        this.setState({ yearNav: yearNav - 1, yearBlockNav: getYearBlock(yearNav - 1) });
      },
      onShiftPageDown: () => {
        const { yearNav } = this.state;
        this.setState({ yearNav: yearNav + 1, yearBlockNav: getYearBlock(yearNav + 1) });
      },
    });

    if (handled) {
      ev.stopPropagation();
    }
  };

  renderBodyDate = (index: number) => {
    const { daysInRow, days } = config;

    const { size, firstDayOfWeek } = this.props;

    const textSize = size === 'large' ? 'regular' : 'small';

    return (
      <>
        <div className={styles['Calendar-dayValues']} role="row">
          {Array.from({ length: 7 }, (_x, day) => {
            const valueClass = classNames({
              [styles['Calendar-valueWrapper']]: true,
            });
            const dayValue = (day + daysInRow + getIndexOfDay(firstDayOfWeek)) % daysInRow;

            return (
              <div key={day} role="columnheader" className={valueClass}>
                <Text appearance="default" weight="strong" size={textSize}>
                  {days[size][dayValue]}
                </Text>
              </div>
            );
          })}
        </div>
        <div className={styles['Calendar-dateValues']} role="rowgroup" onMouseLeave={this.onDateRowMouseLeaveHandler}>
          {this.renderDateValues(index)}
        </div>
      </>
    );
  };

  renderEventsIndicator(size: string, active: boolean) {
    const eventsIndicatorClass = classNames({
      [styles['Calendar-eventsIndicator']]: true,
      [styles[`Calendar-eventsIndicator--${size}`]]: true,
      [styles['Calendar-eventsIndicator--active']]: active,
    });
    return <span data-test="DesignSystem-Calendar-Event-Indicator" className={eventsIndicatorClass} />;
  }

  renderDateValues = (index: number) => {
    const { daysInRow, monthBlock } = config;

    const { size, rangePicker, firstDayOfWeek, disabledBefore, disabledAfter, monthsInView, onDateHover } = this.props;

    const {
      startDate,
      endDate,
      hoverDate,
      year: yearState,
      month: monthState,
      date: dateState,
      currMonth,
      currYear,
      todayDate,
      focusedDateRow,
      focusedDateCol,
      focusedDateMonthIndex,
    } = this.state;

    const { year: yearNavVal, month: monthNavVal } = this.getNavDateInfo(index);

    const prevMonth = monthNavVal - 1;
    const prevYear = yearNavVal;
    const prevMonthDayRange = getDaysInMonth(prevYear, prevMonth);

    const dayRange = getDaysInMonth(yearNavVal, monthNavVal);
    const firstDayIndex = getFirstDayOfMonth(yearNavVal, monthNavVal);
    const desiredFirstDayIndex = getIndexOfDay(firstDayOfWeek);
    const dayDiff = (firstDayIndex - desiredFirstDayIndex + 7) % 7;
    const dummyDays = Math.abs(dayDiff);
    let noOfRows = Math.ceil((dayRange + dummyDays) / daysInRow);

    // if(noOfRows !== 6 && monthsInView <= 1) ?
    if (noOfRows === 6) {
    } else if (monthsInView > 1) {
    } else {
      noOfRows = noOfRows + 1;
    }
    const inRangeError = this.getInRangeError();

    const events = this.props.events;

    const onClickHandler = (date: number, disabled: boolean) => () => {
      if (disabled) return;
      if (rangePicker) {
        if (startDate && endDate) {
          this.selectDate(index, date, prevMonthDayRange, dayRange);
        } else {
          if (!inRangeError) this.selectDate(index, date, prevMonthDayRange, dayRange);
        }
      } else {
        this.selectDate(index, date, prevMonthDayRange, dayRange);
      }
    };

    const onMouseOverHandler = (date: number) => () => {
      if (rangePicker) {
        const d = this.getDateValue(yearNavVal, monthNavVal, date);
        if (!startDate || !endDate) {
          this.setState({
            hoverDate: d,
          });
        }
      }
    };

    const onMouseEnterHandler = (
      date: number,
      isToday: boolean,
      isDisabled: boolean,
      ev: React.MouseEvent<HTMLSpanElement>
    ) => {
      const d = this.calculateDate(index, date, prevMonthDayRange, dayRange, true) || new Date();
      const { months, days } = config;
      const dayName = days.large[d.getDay()];
      const dateData = {
        value: d.getDate(),
        isToday: isToday,
        isDisabled: isDisabled,
        todayDate: this.state.currDate,
        fullDate: d,
        date: d.getDate(),
        month: months[d.getMonth()],
        year: d.getFullYear(),
        dayName: dayName,
      };
      if (onDateHover) onDateHover(dateData, ev);
    };

    const selectedPos =
      yearState === yearNavVal && monthState === monthNavVal && dateState
        ? this.getDateGridPosition(yearNavVal, monthNavVal, dateState)
        : null;
    const effectiveRow = focusedDateRow ?? selectedPos?.row ?? 0;
    const effectiveCol = focusedDateCol ?? selectedPos?.col ?? 0;
    const effectiveMonthIndex =
      focusedDateMonthIndex ??
      (selectedPos && selectedPos.row >= 0 && selectedPos.col >= 0 ? index : index === 0 ? 0 : -1);

    const maxValidRow = noOfRows - 1;
    const clampedRow = Math.min(effectiveRow, maxValidRow);

    let finalFocusRow = clampedRow;
    let finalFocusCol = effectiveCol;

    if (effectiveMonthIndex === index) {
      const isValidFocus = (r: number, c: number) => {
        const d = daysInRow * r + c - dummyDays + 1;
        const isDummy = d <= 0 || d > dayRange;
        let renders = !isDummy;
        if (isDummy) {
          if (monthsInView === 1) renders = true;
          else if (index === 0) renders = d <= 0;
          else if (index === monthsInView - 1) renders = d > dayRange;
        }
        if (!renders) return false;
        const actualD = this.getDateValue(yearNavVal, monthNavVal, d) || new Date();
        const disabled =
          compareDate(disabledBefore, 'more', actualD.getFullYear(), actualD.getMonth(), actualD.getDate()) ||
          compareDate(disabledAfter, 'less', actualD.getFullYear(), actualD.getMonth(), actualD.getDate());
        return !disabled;
      };

      if (!isValidFocus(clampedRow, effectiveCol)) {
        let found = false;
        if (yearState === yearNavVal && monthState === monthNavVal && dateState) {
          const pos = this.getDateGridPosition(yearNavVal, monthNavVal, dateState);
          if (pos && isValidFocus(pos.row, pos.col)) {
            finalFocusRow = pos.row;
            finalFocusCol = pos.col;
            found = true;
          }
        }
        if (!found) {
          for (let d = 1; d <= dayRange; d++) {
            const pos = this.getDateGridPosition(yearNavVal, monthNavVal, d);
            if (pos && isValidFocus(pos.row, pos.col)) {
              finalFocusRow = pos.row;
              finalFocusCol = pos.col;
              found = true;
              break;
            }
          }
        }
        if (!found) {
          for (let r = 0; r < noOfRows; r++) {
            for (let c = 0; c < daysInRow; c++) {
              if (isValidFocus(r, c)) {
                finalFocusRow = r;
                finalFocusCol = c;
                found = true;
                break;
              }
            }
            if (found) break;
          }
        }
      }
    }

    return Array.from({ length: noOfRows }, (_y, row) => {
      return (
        <div key={row} role="row" className={styles['Calendar-valueRow']}>
          {Array.from({ length: daysInRow }, (_x, colIndex) => {
            const date = daysInRow * row + colIndex - dummyDays + 1;
            const dummy = date <= 0 || date > dayRange;
            const actualDateObj = this.getDateValue(yearNavVal, monthNavVal, date) || new Date();
            const disabled =
              compareDate(
                disabledBefore,
                'more',
                actualDateObj.getFullYear(),
                actualDateObj.getMonth(),
                actualDateObj.getDate()
              ) ||
              compareDate(
                disabledAfter,
                'less',
                actualDateObj.getFullYear(),
                actualDateObj.getMonth(),
                actualDateObj.getDate()
              );
            let active = !disabled && yearState === yearNavVal && monthState === monthNavVal && dateState === date;
            const today = () => {
              let boolVal;
              if (date <= 0) {
                boolVal =
                  currYear === yearNavVal && currMonth === monthNavVal - 1 && todayDate === prevMonthDayRange + date;
              } else if (date > dayRange) {
                boolVal = currYear === yearNavVal && currMonth === monthNavVal + 1 && todayDate === date - dayRange;
              } else {
                boolVal = currYear === yearNavVal && currMonth === monthNavVal && todayDate === date;
              }
              return boolVal;
            };
            let startActive = false;
            let endActive = false;
            let inRange = false;
            let inRangeLast = false;

            const { year: sYear, month: sMonth, date: sDate } = getDateInfo(startDate);
            const { year: eYear, month: eMonth, date: eDate } = getDateInfo(endDate);
            const isStart =
              startActive || (endDate && inRangeLast && compareDate(hoverDate, 'less', eYear, eMonth, eDate));
            const isEnd =
              endActive || (startDate && inRangeLast && compareDate(hoverDate, 'more', sYear, sMonth, sDate));

            const dateInString = `${date <= 0 ? prevMonthDayRange + date : date > dayRange ? date - dayRange : date}`;
            const monthInString = `${
              date <= 0
                ? monthNavVal === 0
                  ? monthNavVal + monthBlock
                  : ((monthNavVal - 1) % monthBlock) + 1
                : date > dayRange
                ? ((monthNavVal + 1) % monthBlock) + 1
                : monthNavVal + 1
            }`;
            const yearInString = `${
              date <= 0 && monthNavVal + 1 === 1
                ? yearNavVal - 1
                : date > dayRange && monthNavVal + 1 === 12
                ? yearNavVal + 1
                : yearNavVal
            }`;
            const completeDateString = `${monthInString.length === 2 ? monthInString : `0${monthInString}`}/${
              dateInString.length === 2 ? dateInString : `0${dateInString}`
            }/${yearInString}`;

            const isEventExist = events && typeof events === 'object' && events.hasOwnProperty(completeDateString);

            if (rangePicker) {
              startActive = compareDate(startDate, 'equal', yearNavVal, monthNavVal, date);
              endActive = compareDate(endDate, 'equal', yearNavVal, monthNavVal, date);
              inRangeLast = compareDate(hoverDate, 'equal', yearNavVal, monthNavVal, date);
              active = !disabled && (startActive || endActive);
              if (startDate && endDate) {
                inRange =
                  !disabled &&
                  ((dateComparison(startDate, 'less', dateInString, monthInString, yearInString) &&
                    dateComparison(endDate, 'more', dateInString, monthInString, yearInString)) ||
                    startActive ||
                    endActive);
              } else if (startDate) {
                inRange =
                  !disabled &&
                  (dateComparison(hoverDate, 'more', dateInString, monthInString, yearInString) || inRangeLast) &&
                  dateComparison(startDate, 'less', dateInString, monthInString, yearInString);
              } else if (endDate) {
                inRange =
                  !disabled &&
                  (dateComparison(hoverDate, 'less', dateInString, monthInString, yearInString) || inRangeLast) &&
                  dateComparison(endDate, 'more', dateInString, monthInString, yearInString);
              }
            }

            const isRangeError = inRange && inRangeError;

            const isStartActive =
              startDate && dateComparison(startDate, 'equal', dateInString, monthInString, yearInString);

            const isEndActive = endDate && dateComparison(endDate, 'equal', dateInString, monthInString, yearInString);

            const activeDate = startDate && endDate && (isStartActive || isEndActive);
            const isHoverBackwardLast =
              this.props.allowReverseSelection &&
              dateComparison(hoverDate, 'equal', dateInString, monthInString, yearInString) &&
              hoverDate &&
              ((startDate && hoverDate < startDate) || (endDate && hoverDate < endDate));

            const isHoverForwardLast =
              dateComparison(hoverDate, 'equal', dateInString, monthInString, yearInString) &&
              hoverDate &&
              startDate &&
              hoverDate >= startDate;

            const isEdgeElement = colIndex === 0 || colIndex === 6;
            const isValueRange = inRange || (rangePicker && (active || activeDate));

            const wrapperClass = classNames({
              [styles['Calendar-valueWrapper']]: true,
              [styles['Calendar-valueWrapper--disabled']]: disabled,
              [styles['Calendar-valueWrapper--inRange']]: !isEdgeElement && isValueRange,
              [styles['Calendar-valueWrapper--inEdgeRange']]: isValueRange && isEdgeElement,
              [styles['Calendar-valueWrapper--inRangeError']]: isRangeError,
              [styles['Calendar-valueWrapper--start']]:
                (isStart && !isEnd && colIndex !== 6) || (rangePicker && isStartActive && colIndex !== 6),
              [styles['Calendar-valueWrapper--end']]:
                (isEnd && !isStart && colIndex !== 0) || (rangePicker && isEndActive && colIndex !== 0),
              [styles['Calendar-valueWrapper--startEnd']]: isStart && isEnd,
              [styles['Calendar-valueWrapper--startError']]:
                (isStart && isRangeError) || (rangePicker && isRangeError && isStartActive),
              [styles['Calendar-valueWrapper--endError']]:
                (isEnd && isRangeError) || (rangePicker && isRangeError && isEndActive),
              [styles['Calendar-valueWrapper--dummy']]: dummy && !disabled && !active && !activeDate,
              [styles['Calendar-valueWrapper--active-dummy']]: dummy && !disabled && (active || activeDate),
              [styles['Calendar-valueWrapper--hoverDate']]: rangePicker && isHoverForwardLast,
              [styles['Calendar-valueWrapper--hoverEndDate']]: rangePicker && isHoverBackwardLast,
              [styles['Calendar-valueWrapper--inStartRange']]: isValueRange && colIndex === 0 && !active && !activeDate,
              [styles['Calendar-valueWrapper--inEndRange']]: isValueRange && colIndex === 6 && !active && !activeDate,
            });

            const valueClass = classNames({
              [styles['Calendar-value']]: true,
              [styles['Calendar-inRangeValue']]: !isStart && !isEnd && !active && !activeDate,
              [styles['Calendar-value--start']]: isStart && !isEnd,
              [styles['Calendar-value--end']]: isEnd && !isStart,
              [styles['Calendar-value--startError']]: isStart && isRangeError,
              [styles['Calendar-value--endError']]: isEnd && isRangeError,
              [styles['Calendar-value--active']]: active || activeDate,
              [styles['Calendar-value--disabled']]: disabled,
              [styles['Calendar-dateValue']]: true,
              [styles[`Calendar-dateValue--${size}`]]: size,
              [styles['Calendar-value--currDateMonthYear']]: today(),
              [styles['Calendar-value--currDate']]: today() && !active && !activeDate,
            });

            const getTextColor = classNames({
              inverse: !active && !today() && !disabled && !activeDate,
              white: active || activeDate,
              'primary-dark': today(),
            }) as TextColor;

            const getTextAppearance = (): 'default' | 'subtle' =>
              disabled ? 'subtle' : active || activeDate ? 'default' : dummy ? 'subtle' : 'default';

            const displayDate = !dummy ? date : date <= 0 ? prevMonthDayRange + date : date - dayRange;
            const fullDate =
              this.calculateDate(index, date, prevMonthDayRange, dayRange, true) ||
              this.getDateValue(yearNavVal, monthNavVal, displayDate) ||
              new Date();
            const isFocused = effectiveMonthIndex === index && finalFocusRow === row && finalFocusCol === colIndex;

            const dateCellContent = (
              <>
                <button
                  type="button"
                  role="gridcell"
                  data-calendar-date-cell
                  data-row={row}
                  data-col={colIndex}
                  data-test="DesignSystem-Calendar--dateValue"
                  className={valueClass}
                  tabIndex={isFocused ? 0 : -1}
                  aria-label={formatDateAriaLabel(fullDate)}
                  aria-disabled={disabled}
                  aria-selected={Boolean(active || activeDate)}
                  onClick={onClickHandler(date, disabled)}
                  onKeyDown={(ev) =>
                    this.handleDateCellKeyDown(
                      ev,
                      index,
                      row,
                      colIndex,
                      noOfRows,
                      date,
                      prevMonthDayRange,
                      dayRange,
                      inRangeError,
                      !!rangePicker,
                      startDate,
                      endDate
                    )
                  }
                  onFocus={() =>
                    this.setState({
                      focusedDateRow: row,
                      focusedDateCol: colIndex,
                      focusedDateMonthIndex: index,
                    })
                  }
                  onMouseOver={onMouseOverHandler(date)}
                  onMouseEnter={onMouseEnterHandler.bind(this, date, today(), disabled)}
                >
                  <Text
                    color={getTextAppearance() === 'default' || today() ? getTextColor : undefined}
                    appearance={getTextAppearance()}
                    size={size === 'small' ? 'small' : 'regular'}
                    weight={active || activeDate ? 'strong' : undefined}
                  >
                    {displayDate}
                  </Text>
                </button>
                {isEventExist && this.renderEventsIndicator(size, active)}
              </>
            );

            // Only render dummy dates on outer edges in multi-month view
            // In monthsInView > 1, prevent duplicate rendering of boundary dates
            const { monthsInView = 1 } = this.props;
            let shouldRenderDummy = !dummy;
            if (dummy) {
              if (monthsInView === 1) {
                shouldRenderDummy = true;
              } else if (index === 0) {
                shouldRenderDummy = date <= 0; // Only leading dummies
              } else if (index === monthsInView - 1) {
                shouldRenderDummy = date > dayRange; // Only trailing dummies
              }
            }

            return (
              <div key={`${row}-${colIndex}`} className={wrapperClass} data-test="designSystem-Calendar-WrapperClass">
                {shouldRenderDummy && dateCellContent}
              </div>
            );
          })}
        </div>
      );
    });
  };

  renderCalendar = (index: number) => {
    const { size, monthsInView } = this.props;

    const { view } = this.state;

    const containerClass = classNames({
      [styles['Calendar']]: true,
      [styles[`Calendar-${view}--${size}`]]: view,
      [styles[`Calendar--${size}`]]: size,
    });

    const headerClass = classNames({
      [styles[`Calendar-header--${size}`]]: size,
    });

    const bodyClass = classNames({
      [styles['Calendar-body']]: true,
    });

    return (
      <div key={index} data-test="DesignSystem-Calendar" data-calendar-index={index} className={containerClass}>
        <div className={headerClass}>
          {index === 0 && this.renderJumpButton('prev')}
          {this.renderHeaderContent(index)}
          {index === monthsInView - 1 && this.renderJumpButton('next')}
        </div>
        <div className={bodyClass} role="grid">
          {view === 'year' && this.renderBodyYear()}
          {view === 'month' && this.renderBodyMonth()}
          {view === 'date' && this.renderBodyDate(index)}
        </div>
      </div>
    );
  };

  render() {
    const { monthsInView, className, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy } = this.props;

    const baseProps = extractBaseProps(this.props);
    const classes = classNames(
      {
        [styles['Calendar-wrapper']]: true,
      },
      className
    );

    const defaultAriaLabel = ariaLabelledBy ? undefined : 'Calendar';

    return (
      <div
        {...baseProps}
        ref={this.calendarWrapperRef}
        className={classes}
        data-test="DesignSystem-Calendar-Wrapper"
        aria-label={ariaLabel || defaultAriaLabel}
        aria-labelledby={ariaLabelledBy}
      >
        {Array.from({ length: monthsInView }, (_x, index) => {
          return this.renderCalendar(index);
        })}
      </div>
    );
  }
}

export default Calendar;
