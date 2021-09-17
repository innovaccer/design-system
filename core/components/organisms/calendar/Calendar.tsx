import * as React from 'react';
import classNames from 'classnames';
import { Button, Heading, Text } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';

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
} from './utility';

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
    const todayCompleteDate = getDateInfo(new Date());
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

    if (prevProps.startDate !== this.props.startDate) {
      const d = convertToDate(this.props.startDate);
      this.setState({
        startDate: d,
      });
    }

    if (prevProps.endDate !== this.props.endDate) {
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

    if (prevState.startDate !== this.state.startDate || prevState.endDate !== this.state.endDate) {
      const { onRangeChange } = this.props;

      const { startDate, endDate } = this.state;

      if (onRangeChange) onRangeChange(startDate, endDate);
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
    const month = (monthNav + index) % monthBlock;
    const year = yearNav + (index !== 0 && month < monthNav ? 1 : 0);
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

  selectMonth = (month: number) => () => {
    this.updateState(this.state.yearNav, month);
    this.setState({
      view: 'date',
    });
  };

  selectDate = (index: number, date: number) => {
    const { year, month } = this.getNavDateInfo(index);

    this.updateState(year, month, date);
    const d = this.getDateValue(year, month, date);
    this.setState({
      currDate: d,
    });
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
    const { disabledBefore, disabledAfter } = this.props;

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
      'Calendar-headerIcon': true,
      [`Calendar-headerIcon--${type}`]: type,
    });

    return (
      <Button
        type="button"
        className={headerIconClass}
        appearance="basic"
        icon={`arrow_${type === 'next' ? 'forward' : 'back'}`}
        disabled={disabled}
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
    const { size, monthsInView } = this.props;

    const { view, yearBlockNav } = this.state;

    const { yearBlockRange, months } = config;

    const { year: yearNavVal, month: monthNavVal } = this.getNavDateInfo(index);

    const headerContentClass = classNames({
      'Calendar-headerContent': true,
      'Calendar-headerContent--noIcon-left': index === monthsInView - 1,
      'Calendar-headerContent--noIcon-right': index === 0,
    });

    let headerContent = '';

    if (view === 'year') headerContent = `${yearBlockNav} - ${yearBlockNav + (yearBlockRange - 1)}`;
    if (view === 'month') headerContent = `${yearNavVal}`;

    const renderHeading = (content: string) => {
      if (size === 'small') {
        return <Text weight="strong">{content}</Text>;
      }
      return <Heading size="s">{content}</Heading>;
    };

    return (
      <div className={headerContentClass}>
        {view !== 'date' && <span onClick={this.onNavHeadingClickHandler(view)}>{renderHeading(headerContent)}</span>}
        {view === 'date' && (
          <>
            <span onClick={this.onNavHeadingClickHandler(view)}>{renderHeading(months[monthNavVal])}</span>
            <span className="ml-4" onClick={this.onNavHeadingClickHandler('month')}>
              {renderHeading(yearNavVal)}
            </span>
          </>
        )}
      </div>
    );
  };

  renderBodyYear = () => {
    const { yearBlockRange, yearsInRow } = config;

    const { size, rangePicker, disabledBefore, disabledAfter } = this.props;

    const { yearBlockNav } = this.state;

    const noOfRows = Math.ceil(yearBlockRange / yearsInRow);

    return Array.from({ length: noOfRows }, (_y, row) => (
      <div key={row} className="Calendar-valueRow">
        {Array.from({ length: yearsInRow }, (_x, col) => {
          const offset = yearsInRow * row + col;
          if (offset === yearBlockNav) return undefined;

          const year = yearBlockNav + offset;
          const disabled = compareDate(disabledBefore, 'more', year) || compareDate(disabledAfter, 'less', year);
          const active = !disabled && !rangePicker && year === this.state.year;

          const valueClass = classNames({
            'Calendar-value': true,
            'Calendar-value--active': active,
            'Calendar-value--disabled': disabled,
            'Calendar-yearValue': true,
            [`Calendar-yearValue--${size}`]: size,
          });

          return (
            <div
              key={`${row}-${col}`}
              data-test="DesignSystem-Calendar--yearValue"
              className={valueClass}
              onClick={this.selectYear(year)}
            >
              <Text
                size={size === 'small' ? 'small' : 'regular'}
                appearance={active ? 'white' : disabled ? 'disabled' : 'default'}
              >
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

    const { yearNav, year } = this.state;

    const noOfRows = Math.ceil(monthBlock / monthsInRow);

    return Array.from({ length: noOfRows }, (_y, row) => (
      <div key={row} className="Calendar-valueRow">
        {Array.from({ length: monthsInRow }, (_x, col) => {
          const month = monthsInRow * row + col;
          const disabled =
            compareDate(disabledBefore, 'more', yearNav, month) || compareDate(disabledAfter, 'less', yearNav, month);
          const active = !disabled && year === yearNav && month === this.state.month;

          const valueClass = classNames({
            'Calendar-value': true,
            'Calendar-value--active': active,
            'Calendar-value--dummy': disabled,
            'Calendar-monthValue': true,
            [`Calendar-monthValue--${size}`]: size,
          });

          return (
            <div
              key={`${row}-${col}`}
              data-test="DesignSystem-Calendar--monthValue"
              className={valueClass}
              onClick={this.selectMonth(month)}
            >
              <Text
                size={size === 'small' ? 'small' : 'regular'}
                appearance={active ? 'white' : disabled ? 'disabled' : 'default'}
              >
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
        <div className="Calendar-dayValues">
          {Array.from({ length: 7 }, (_x, day) => {
            const valueClass = classNames({
              'Calendar-valueWrapper': true,
            });
            const dayValue = (day + daysInRow + getIndexOfDay(firstDayOfWeek)) % daysInRow;

            return (
              <Text key={day} className={valueClass} appearance="default" weight="strong" size={textSize}>
                {days[size][dayValue]}
              </Text>
            );
          })}
        </div>
        <div className="Calendar-dateValues" onMouseLeave={this.onDateRowMouseLeaveHandler}>
          {this.renderDateValues(index)}
        </div>
      </>
    );
  };

  renderEventsIndicator(size: string, active: boolean) {
    const eventsIndicatorClass = classNames({
      'Calendar-eventsIndicator': true,
      [`Calendar-eventsIndicator--${size}`]: true,
      'Calendar-eventsIndicator--active': active,
    });
    return <span data-test="DesignSystem-Calendar-Event-Indicator" className={eventsIndicatorClass} />;
  }

  renderDateValues = (index: number) => {
    const { daysInRow } = config;

    const { size, rangePicker, firstDayOfWeek, disabledBefore, disabledAfter } = this.props;

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

    const dayRange = getDaysInMonth(yearNavVal, monthNavVal);
    const dayDiff = getFirstDayOfMonth(yearNavVal, monthNavVal) - getIndexOfDay(firstDayOfWeek);
    const dummyDays = Math.abs(dayDiff);
    const noOfRows = Math.ceil((dayRange + dummyDays) / daysInRow);
    const inRangeError = this.getInRangeError();

    const events = this.props.events;

    const onClickHandler = (date: number) => () => {
      if (rangePicker) {
        if (startDate && endDate) {
          this.selectDate(index, date);
        } else {
          if (!inRangeError) this.selectDate(index, date);
        }
      } else {
        this.selectDate(index, date);
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

    return Array.from({ length: noOfRows }, (_y, row) => {
      return (
        <div key={row} className="Calendar-valueRow">
          {Array.from({ length: daysInRow }, (_x, col) => {
            const date = daysInRow * row + col - dummyDays + 1;
            const dummy = date <= 0 || date > dayRange;
            const disabled =
              !dummy &&
              (compareDate(disabledBefore, 'more', yearNavVal, monthNavVal, date) ||
                compareDate(disabledAfter, 'less', yearNavVal, monthNavVal, date));
            let active = !disabled && yearState === yearNavVal && monthState === monthNavVal && dateState === date;
            const today =
              !rangePicker && !disabled && currYear === yearNavVal && currMonth === monthNavVal && todayDate === date;
            let startActive = false;
            let endActive = false;
            let inRange = false;
            let inRangeLast = false;
            if (rangePicker) {
              startActive = compareDate(startDate, 'equal', yearNavVal, monthNavVal, date);
              endActive = compareDate(endDate, 'equal', yearNavVal, monthNavVal, date);
              inRangeLast = compareDate(hoverDate, 'equal', yearNavVal, monthNavVal, date);
              active = !disabled && (startActive || endActive);
              if (startDate && endDate) {
                inRange =
                  !disabled &&
                  (compareDate(startDate, 'less', yearNavVal, monthNavVal, date) || startActive) &&
                  (compareDate(endDate, 'more', yearNavVal, monthNavVal, date) || endActive);
              } else if (startDate) {
                inRange =
                  !disabled &&
                  (compareDate(hoverDate, 'more', yearNavVal, monthNavVal, date) || inRangeLast) &&
                  compareDate(startDate, 'less', yearNavVal, monthNavVal, date);
              } else if (endDate) {
                inRange =
                  !disabled &&
                  (compareDate(hoverDate, 'less', yearNavVal, monthNavVal, date) || inRangeLast) &&
                  compareDate(endDate, 'more', yearNavVal, monthNavVal, date);
              }
            }

            const { year: sYear, month: sMonth, date: sDate } = getDateInfo(startDate);
            const { year: eYear, month: eMonth, date: eDate } = getDateInfo(endDate);
            const isStart =
              startActive || (endDate && inRangeLast && compareDate(hoverDate, 'less', eYear, eMonth, eDate));
            const isEnd =
              endActive || (startDate && inRangeLast && compareDate(hoverDate, 'more', sYear, sMonth, sDate));
            const isRangeError = inRange && inRangeError;

            const monthInString = `${monthNavVal + 1 > 9 ? monthNavVal + 1 : `0${monthNavVal + 1}`}`;
            const dateInString = `${date > 9 ? date : `0${date}`}`;
            const yearInString = `${yearNavVal}`;
            const completeDateString = `${monthInString}/${dateInString}/${yearInString}`;
            const isEventExist = events && typeof events === 'object' && events.hasOwnProperty(completeDateString);

            const wrapperClass = classNames({
              'Calendar-valueWrapper': true,
              'Calendar-valueWrapper--inRange': inRange || (rangePicker && active),
              'Calendar-valueWrapper--inRangeError': isRangeError,
              'Calendar-valueWrapper--start': isStart && !isEnd,
              'Calendar-valueWrapper--end': isEnd && !isStart,
              'Calendar-valueWrapper--startEnd': isStart && isEnd,
              'Calendar-valueWrapper--startError': isStart && isRangeError,
              'Calendar-valueWrapper--endError': isEnd && isRangeError,
            });

            const valueClass = classNames({
              'Calendar-value': true,
              'Calendar-value--start': isStart && !isEnd,
              'Calendar-value--end': isEnd && !isStart,
              'Calendar-value--startError': isStart && isRangeError,
              'Calendar-value--endError': isEnd && isRangeError,
              'Calendar-value--active': active,
              'Calendar-value--dummy': dummy || disabled,
              'Calendar-value--disabled': disabled,
              'Calendar-dateValue': true,
              [`Calendar-dateValue--${size}`]: size,
              'Calendar-value--currentDate': today,
            });
            return (
              <div key={`${row}-${col}`} className={wrapperClass} data-test="designSystem-Calendar-WrapperClass">
                {!dummy && (
                  <>
                    <Text
                      appearance={active ? 'white' : disabled ? 'disabled' : today ? 'link' : 'default'}
                      size={size === 'small' ? 'small' : 'regular'}
                      data-test="DesignSystem-Calendar--dateValue"
                      className={valueClass}
                      onClick={onClickHandler(date)}
                      onMouseOver={onMouseOverHandler(date)}
                    >
                      {date}
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
      ['Calendar']: true,
      [`Calendar--${view}`]: view,
      [`Calendar--${size}`]: size,
    });

    const headerClass = classNames({
      'Calendar-header': true,
    });

    const bodyClass = classNames({
      'Calendar-body': true,
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
        'Calendar-wrapper': true,
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
