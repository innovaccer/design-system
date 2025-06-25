import * as React from 'react';
import classNames from 'classnames';
import { Button, Heading, Text, Icon } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { TextColor } from '@/common.type';
import styles from '@css/components/calendar.module.css';

import config from './config';
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
}

export class Calendar extends React.Component<CalendarProps, CalendarState> {
  static defaultProps = {
    size: 'large',
    monthsInView: 1,
    view: 'date',
    firstDayOfWeek: 'sunday',
    jumpView: true,
  };

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

  selectYear = (year: number) => () => {
    this.updateState(year);
    this.setState({
      view: 'month',
    });
  };

  yearMouseOverHandler = (
    year: number,
    isCurrentYear: boolean,
    isDisabled: boolean,
    ev: React.MouseEvent<HTMLDivElement>
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

  selectMonth = (month: number) => () => {
    this.updateState(this.state.yearNav, month);
    this.setState({
      view: 'date',
    });
  };

  monthMouseOverHandler = (
    month: number,
    isCurrentMonth: boolean,
    isDisabled: boolean,
    ev: React.MouseEvent<HTMLDivElement>
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

    return (
      <Button
        type="button"
        className={headerIconClass}
        appearance="basic"
        icon={`arrow_${type === 'next' ? 'forward' : 'back'}`}
        disabled={disabled}
        size={size === 'small' ? 'tiny' : 'regular'}
        onClick={this.onNavIconClickHandler(type)}
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
          // TODO(a11y)
          //  eslint-disable-next-line
          <div
            className="d-flex justify-content-center align-items-center"
            onClick={this.onNavHeadingClickHandler(view)}
          >
            {renderHeading(headerContent)}
          </div>
        )}

        {view === 'date' && (
          <>
            {/* TODO(a11y) */}
            {/* eslint-disable-next-line */}
            <div
              onClick={this.onNavHeadingClickHandler(view)}
              className="d-flex justify-content-center align-items-center"
            >
              {renderHeading(months[monthNavVal])}
            </div>
            {/* TODO(a11y) */}
            {/* eslint-disable-next-line */}
            <div
              className="ml-4 d-flex justify-content-center align-items-center"
              onClick={this.onNavHeadingClickHandler('month')}
            >
              {renderHeading(yearNavVal)}
            </div>
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

    return Array.from({ length: noOfRows }, (_y, row) => (
      <div key={row} className={styles['Calendar-valueRow']}>
        {Array.from({ length: yearsInRow }, (_x, col) => {
          const offset = yearsInRow * row + col;
          if (offset === yearBlockNav) return undefined;

          const year = yearBlockNav + offset;
          const disabled = compareDate(disabledBefore, 'more', year) || compareDate(disabledAfter, 'less', year);
          const active = !disabled && !rangePicker && year === this.state.year;
          const isCurrentYear = () => {
            return year === currYear;
          };

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
            'primary-lighter': isCurrentYear() && disabled,
            primary: isCurrentYear(),
            'inverse-lightest': disabled,
          }) as TextColor;

          return (
            //  TODO(a11y)
            //  eslint-disable-next-line
            <div
              //  eslint-disable-next-line
              key={`${row}-${col}`}
              data-test="DesignSystem-Calendar--yearValue"
              className={valueClass}
              onClick={this.selectYear(year)}
              //  eslint-disable-next-line
              onMouseOver={this.yearMouseOverHandler.bind(this, year, isCurrentYear(), disabled)}
            >
              <Text size={size === 'small' ? 'small' : 'regular'} color={getTextColor} className={textClass}>
                {year}
              </Text>
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

    return Array.from({ length: noOfRows }, (_y, row) => (
      <div key={row} className={styles['Calendar-valueRow']}>
        {Array.from({ length: monthsInRow }, (_x, col) => {
          const month = monthsInRow * row + col;
          const disabled =
            compareDate(disabledBefore, 'more', yearNav, month) || compareDate(disabledAfter, 'less', yearNav, month);
          const active = !disabled && year === yearNav && month === this.state.month;
          const isCurrentMonth = () => {
            return currYear === yearNav && currMonth === month;
          };
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
            'primary-lighter': isCurrentMonth() && disabled,
            primary: isCurrentMonth(),
            'inverse-lightest': disabled,
          }) as TextColor;

          const textClass = classNames({
            [styles['Calendar-value--currDate']]: isCurrentMonth() && !active,
            [styles['Calendar-text']]: true,
          });

          return (
            //TODO(a11y)
            //eslint-disable-next-line
            <div
              key={`${row}-${col}`}
              data-test="DesignSystem-Calendar--monthValue"
              className={valueClass}
              onClick={this.selectMonth(month)}
              //  eslint-disable-next-line
              onMouseOver={this.monthMouseOverHandler.bind(this, month, isCurrentMonth(), disabled)}
            >
              <Text size={size === 'small' ? 'small' : 'regular'} color={getTextColor} className={textClass}>
                {months[month]}
              </Text>
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

  renderBodyDate = (index: number) => {
    const { daysInRow, days } = config;

    const { size, firstDayOfWeek } = this.props;

    const textSize = size === 'large' ? 'regular' : 'small';

    return (
      <>
        <div className={styles['Calendar-dayValues']}>
          {Array.from({ length: 7 }, (_x, day) => {
            const valueClass = classNames({
              [styles['Calendar-valueWrapper']]: true,
            });
            const dayValue = (day + daysInRow + getIndexOfDay(firstDayOfWeek)) % daysInRow;

            return (
              <Text key={day} className={valueClass} appearance="default" weight="strong" size={textSize}>
                {days[size][dayValue]}
              </Text>
            );
          })}
        </div>
        <div className={styles['Calendar-dateValues']} onMouseLeave={this.onDateRowMouseLeaveHandler}>
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

    const onClickHandler = (date: number) => () => {
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

    return Array.from({ length: noOfRows }, (_y, row) => {
      return (
        <div key={row} className={styles['Calendar-valueRow']}>
          {Array.from({ length: daysInRow }, (_x, col) => {
            const date = daysInRow * row + col - dummyDays + 1;
            const dummy = date <= 0 || date > dayRange;
            const disabled =
              compareDate(disabledBefore, 'more', yearNavVal, monthNavVal, date) ||
              compareDate(disabledAfter, 'less', yearNavVal, monthNavVal, date);
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

            const isEdgeElement = col === 0 || col === 6;
            const isValueRange = inRange || (rangePicker && (active || activeDate));

            const wrapperClass = classNames({
              [styles['Calendar-valueWrapper']]: true,
              [styles['Calendar-valueWrapper--disabled']]: disabled,
              [styles['Calendar-valueWrapper--inRange']]: !isEdgeElement && isValueRange,
              [styles['Calendar-valueWrapper--inEdgeRange']]: isValueRange && isEdgeElement,
              [styles['Calendar-valueWrapper--inRangeError']]: isRangeError,
              [styles['Calendar-valueWrapper--start']]:
                (isStart && !isEnd && col !== 6) || (rangePicker && isStartActive && col !== 6),
              [styles['Calendar-valueWrapper--end']]:
                (isEnd && !isStart && col !== 0) || (rangePicker && isEndActive && col !== 0),
              [styles['Calendar-valueWrapper--startEnd']]: isStart && isEnd,
              [styles['Calendar-valueWrapper--startError']]:
                (isStart && isRangeError) || (rangePicker && isRangeError && isStartActive),
              [styles['Calendar-valueWrapper--endError']]:
                (isEnd && isRangeError) || (rangePicker && isRangeError && isEndActive),
              [styles['Calendar-valueWrapper--dummy']]: dummy && !disabled && !activeDate,
              [styles['Calendar-valueWrapper--active-dummy']]: dummy && !disabled && activeDate,
              [styles['Calendar-valueWrapper--hoverDate']]: rangePicker && isHoverForwardLast,
              [styles['Calendar-valueWrapper--hoverEndDate']]: rangePicker && isHoverBackwardLast,
              [styles['Calendar-valueWrapper--inStartRange']]: isValueRange && col === 0 && !active && !activeDate,
              [styles['Calendar-valueWrapper--inEndRange']]: isValueRange && col === 6 && !active && !activeDate,
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
              primary: today(),
            }) as TextColor;

            return (
              <div key={`${row}-${col}`} className={wrapperClass} data-test="designSystem-Calendar-WrapperClass">
                {!dummy && (
                  <>
                    <Text
                      color={getTextColor}
                      size={size === 'small' ? 'small' : 'regular'}
                      appearance={disabled ? 'subtle' : 'default'}
                      data-test="DesignSystem-Calendar--dateValue"
                      className={valueClass}
                      onClick={onClickHandler(date)}
                      onMouseOver={onMouseOverHandler(date)}
                      onMouseEnter={onMouseEnterHandler.bind(this, date, today(), disabled)}
                    >
                      {date}
                    </Text>
                    {isEventExist && this.renderEventsIndicator(size, active)}
                  </>
                )}
                {((dummy && date > 0 && index === monthsInView - 1) || (dummy && date <= 0 && index === 0)) && (
                  <>
                    <Text
                      appearance={active || activeDate ? 'white' : today() ? 'link' : 'subtle'}
                      size={size === 'small' ? 'small' : 'regular'}
                      data-test="DesignSystem-Calendar--dateValue"
                      className={valueClass}
                      onClick={onClickHandler(date)}
                      onMouseOver={onMouseOverHandler(date)}
                      onMouseEnter={onMouseEnterHandler.bind(this, date, today(), disabled)}
                    >
                      {date <= 0 ? prevMonthDayRange + date : date - dayRange}
                    </Text>
                    {isEventExist && this.renderEventsIndicator(size, active)}
                  </>
                )}
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
      <div key={index} data-test="DesignSystem-Calendar" className={containerClass}>
        <div className={headerClass}>
          {index === 0 && this.renderJumpButton('prev')}
          {this.renderHeaderContent(index)}
          {index === monthsInView - 1 && this.renderJumpButton('next')}
        </div>
        <div className={bodyClass}>
          {view === 'year' && this.renderBodyYear()}
          {view === 'month' && this.renderBodyMonth()}
          {view === 'date' && this.renderBodyDate(index)}
        </div>
      </div>
    );
  };

  render() {
    const { monthsInView, className } = this.props;

    const baseProps = extractBaseProps(this.props);
    const classes = classNames(
      {
        [styles['Calendar-wrapper']]: true,
      },
      className
    );

    return (
      <div {...baseProps} className={classes} data-test="DesignSystem-Calendar-Wrapper">
        {Array.from({ length: monthsInView }, (_x, index) => {
          return this.renderCalendar(index);
        })}
      </div>
    );
  }
}

export default Calendar;
