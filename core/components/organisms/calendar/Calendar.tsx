import * as React from 'react';
import classNames from 'classnames';
import Icon from '@/components/atoms/icon';
import Heading from '@/components/atoms/heading';
import Subheading from '@/components/atoms/subheading';
import Text from '@/components/atoms/text';
import { BaseProps, extractBaseProps } from '@/utils/types';

import config from './config';
import { Day, View } from './types';
import {
  compareDate,
  compareDecade,
  getDateInfo,
  getDaysInMonth,
  getFirstDayOfMonth,
  getIndexOfDay,
  getYearBlock,
  convertToDate
} from './utility';

export interface SharedProps extends BaseProps {
  /**
   * Number of months rendered in view
   */
  monthsInView?: number;
  /**
   * Enables jumping to different view on clicking on Calendar Header
   *
   * **set to `false` if monthsInView > 1**
   */
  jumpView?: boolean;
  /**
   * Specifies first day of week to be rendered
   */
  firstDayOfWeek?: Day;
  /**
   * Specifies initial view of `Calendar`
   */
  view?: View;
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

type CompProps = {
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
}

const defaultProps = {
  monthsInView: 1,
  view: 'date',
  firstDayOfWeek: 'sunday',
};

type DefaultProps = Readonly<typeof defaultProps>;
export type CalendarProps = CompProps & DefaultProps;

export class Calendar extends React.Component<CalendarProps, CalendarState> {
  static defaultProps = defaultProps;

  constructor(props: CalendarProps) {
    super(props);

    const {
      rangePicker,
      startDate,
      endDate,
      monthsInView,
      view
    } = this.props;

    const currDate = rangePicker ? (endDate || startDate) : props.date;

    const yearNav = props.yearNav || getDateInfo(currDate || Date.now()).year;
    const monthNav = props.monthNav || getDateInfo(currDate || Date.now()).month;
    const { year, month, date } = getDateInfo(currDate);

    this.state = {
      currDate,
      startDate,
      endDate,
      yearNav,
      monthNav,
      year,
      month,
      date,
      view: monthsInView > 1 ? 'date' : view,
      yearBlockNav: getYearBlock(yearNav),
    };
  }

  componentDidUpdate(prevProps: CalendarProps, prevState: CalendarState) {
    const {
      monthsInView
    } = this.props;

    if (prevProps.date !== this.props.date) {
      const { year, month, date } = getDateInfo(this.props.date);
      this.updateState(year, month, date);
      const d = convertToDate(this.props.date);
      this.setState({
        currDate: d
      });
    }

    if (prevProps.startDate !== this.props.startDate) {
      const d = convertToDate(this.props.startDate);
      this.setState({
        startDate: d
      });
    }

    if (prevProps.endDate !== this.props.endDate) {
      const d = convertToDate(this.props.endDate);
      this.setState({
        endDate: d
      });
    }

    if (prevProps.view !== this.props.view) {
      if (this.props.monthsInView === 1) {
        this.setState({
          view: this.props.view
        });
      }
    }

    if (prevProps.yearNav !== this.props.yearNav) {
      const { yearNav } = this.props;
      if (yearNav) {
        this.setState({
          yearNav,
          yearBlockNav: getYearBlock(yearNav)
        });
      }
    }

    if (prevProps.monthNav !== this.props.monthNav) {
      const { monthNav } = this.props;
      if (monthNav) {
        this.setState({
          monthNav
        });
      }
    }

    if (prevState.currDate !== this.state.currDate) {
      const {
        rangePicker,
        onDateChange
      } = this.props;

      const {
        currDate,
        startDate,
        endDate
      } = this.state;

      if (currDate) {
        if (onDateChange) onDateChange(currDate);
        if (rangePicker) {
          this.setState({
            hoverDate: undefined
          });
          if (startDate && endDate) {
            this.setState({
              startDate: currDate,
              endDate: undefined
            });
          } else {
            const {
              year,
              month,
              date
            } = getDateInfo(currDate);
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
      const {
        onRangeChange
      } = this.props;

      const {
        startDate,
        endDate
      } = this.state;

      if (onRangeChange) onRangeChange(startDate, endDate);
    }

    if (prevState.year !== this.state.year) {
      const { year } = this.state;
      if (year !== undefined && monthsInView === 1) {
        this.setState({
          year,
          yearBlockNav: getYearBlock(year)
        });
      }
    }

    if (prevState.month !== this.state.month) {
      const { month } = this.state;
      if (month !== undefined && monthsInView === 1) {
        this.setState({
          monthNav: month
        });
      }
    }
  }

  updateState = (year: number, month?: number, date?: number) => {
    this.setState({
      year,
      month,
      date
    });
  }

  getDateValue = (year: number, month: number, date: number): Date | undefined => {
    const {
      disabledBefore,
      disabledAfter
    } = this.props;

    const d = new Date(year, month, date);
    if (compareDate(disabledBefore, 'more', year, month, date)
      || compareDate(disabledAfter, 'less', year, month, date)) {
      return undefined;
    }
    return d;
  }

  getNavDateInfo = (index: number): Record<string, any> => {
    const {
      yearBlockNav,
      yearNav,
      monthNav
    } = this.state;

    const {
      monthBlock
    } = config;

    const yearBlock = yearBlockNav;
    const month = (monthNav + index) % monthBlock;
    const year = yearNav + (index !== 0 && month < monthNav ? 1 : 0);
    return { yearBlock, year, month };
  }

  getInRangeError = () => {
    const {
      rangePicker,
      rangeLimit
    } = this.props;

    const {
      startDate: startDateState,
      endDate: endDateState,
      hoverDate: hoverDateState
    } = this.state;

    if (rangePicker && rangeLimit) {
      const {
        year: startYear,
        month: startMonth,
        date: startDate
      } = getDateInfo(startDateState);

      const {
        year: endYear,
        month: endMonth,
        date: endDate
      } = getDateInfo(endDateState);

      const {
        year: hoverYear,
        month: hoverMonth,
        date: hoverDate
      } = getDateInfo(hoverDateState);

      let limitDate: Date;
      if (startDateState) {
        limitDate = new Date(startDateState);
        limitDate.setDate(startDate + rangeLimit);

        return (
          compareDate(limitDate, 'less', hoverYear, hoverMonth, hoverDate + 1)
          || compareDate(limitDate, 'less', endYear, endMonth, endDate + 1)
        );
      }
      if (endDateState) {
        limitDate = new Date(endDateState);
        limitDate.setDate(endDate - rangeLimit);

        return (
          compareDate(limitDate, 'more', hoverYear, hoverMonth, hoverDate - 1)
          || compareDate(limitDate, 'more', startYear, startMonth, startDate - 1)
        );
      }
    }
    return false;
  }

  selectYear = (year: number) => {
    this.updateState(year);
    this.setState({
      view: 'month'
    });
  }

  selectMonth = (month: number) => {
    this.updateState(this.state.yearNav, month);
    this.setState({
      view: 'date'
    });
  }

  selectDate = (index: number, date: number) => {
    const {
      year: yearNavVal,
      month: monthNavVal
    } = this.getNavDateInfo(index);

    this.updateState(yearNavVal, monthNavVal, date);
    const d = this.getDateValue(yearNavVal, monthNavVal, date);
    this.setState({
      currDate: d
    });
  }

  navClickHandler = (type: string) => {
    const {
      view,
      yearBlockNav,
      yearNav,
      monthNav
    } = this.state;

    const {
      yearBlockRange,
      monthBlock
    } = config;

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
  }

  renderJumpButton = (type: string) => {
    const {
      disabledBefore,
      disabledAfter
    } = this.props;

    const {
      view,
      yearBlockNav,
      yearNav,
      monthNav
    } = this.state;

    let disabled = false;
    switch (view) {
      case 'year':
        if (type === 'prev') {
          disabled = compareDecade(disabledBefore, 'more', yearBlockNav)
            || compareDecade(disabledBefore, 'equal', yearBlockNav);
        }
        if (type === 'next') {
          disabled = compareDecade(disabledAfter, 'less', yearBlockNav)
            || compareDecade(disabledAfter, 'equal', yearBlockNav);
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
      'Calendar-headerIcon--disabled': disabled
    });

    return (
      <Icon
        name={`arrow_${type === 'next' ? 'forward' : 'back'}`}
        className={headerIconClass}
        onClick={() => this.navClickHandler(type)}
      />
    );
  }

  renderHeaderContent = (index: number) => {
    const {
      monthsInView,
    } = this.props;

    const {
      view,
      yearBlockNav
    } = this.state;

    const {
      yearBlockRange,
      months
    } = config;

    let {
      jumpView = true
    } = this.props;

    if (jumpView) {
      if (monthsInView > 1) jumpView = false;
    }

    const {
      year: yearNavVal,
      month: monthNavVal
    } = this.getNavDateInfo(index);

    const headerContentClass = classNames({
      'Calendar-headerContent': true,
      'Calendar-headerContent--noIcon-left': index === monthsInView - 1,
      'Calendar-headerContent--noIcon-right': index === 0,
    });

    let headerContent = '';
    const onClickHandler = () => {
      if (jumpView) {
        if (view === 'year') this.setState({ view: 'date' });
        if (view === 'month') this.setState({ view: 'year' });
        if (view === 'date') this.setState({ view: 'month' });
      }
    };

    if (view === 'year') headerContent = `${yearBlockNav} - ${yearBlockNav + (yearBlockRange - 1)}`;
    if (view === 'month') headerContent = `${yearNavVal}`;
    if (view === 'date') headerContent = `${months[monthNavVal]} ${yearNavVal}`;

    return (
      <div className={headerContentClass} onClick={onClickHandler}>
        <Heading size="s">{headerContent}</Heading>
      </div>
    );
  }

  renderBodyYear = () => {
    const {
      yearBlockRange,
      yearsInRow
    } = config;

    const {
      rangePicker,
      disabledBefore,
      disabledAfter
    } = this.props;

    const {
      yearBlockNav,
      yearNav
    } = this.state;

    const noOfRows = Math.ceil(yearBlockRange / yearsInRow);

    return Array.from({ length: noOfRows }, (_y, row) => (
      <div className="Calendar-valueRow">
        {Array.from({ length: yearsInRow }, (_x, col) => {
          const offset = yearsInRow * row + col;
          if (offset === yearBlockNav) return undefined;

          const year = yearBlockNav + offset;
          const disabled = compareDate(disabledBefore, 'more', year) || compareDate(disabledAfter, 'less', year);
          const active = !disabled && !rangePicker && yearNav === year;

          const valueClass = classNames({
            'Calendar-value': true,
            'Calendar-value--active': active,
            'Calendar-value--disabled': disabled
          });

          return (
            <div className={valueClass} onClick={() => this.selectYear(year)}>
              <Text appearance={active ? 'white' : disabled ? 'disabled' : 'default'}>{`${year}`}</Text>
            </div>
          );
        })}
      </div>
    ));
  }

  renderBodyMonth = () => {
    const {
      monthBlock,
      monthsInRow,
      months
    } = config;

    const {
      disabledBefore,
      disabledAfter
    } = this.props;

    const {
      yearNav,
      monthNav,
      year
    } = this.state;

    const noOfRows = Math.ceil(monthBlock / monthsInRow);

    return Array.from({ length: noOfRows }, (_y, row) => (
      <div className="Calendar-valueRow">
        {Array.from({ length: monthsInRow }, (_x, col) => {
          const month = monthsInRow * row + col;
          const disabled = compareDate(disabledBefore, 'more', yearNav, month)
            || compareDate(disabledAfter, 'less', yearNav, month);
          const active = !disabled && year === yearNav && monthNav === month;

          const valueClass = classNames({
            'Calendar-value': true,
            'Calendar-value--active': active,
            'Calendar-value--dummy': disabled
          });
          return (
            <div className={valueClass} onClick={() => this.selectMonth(month)}>
              <Text appearance={active ? 'white' : disabled ? 'disabled' : 'default'}>{months[month]}</Text>
            </div>
          );
        })}
      </div>
    ));
  }

  renderBodyDate = (index: number) => {
    const {
      daysInRow,
      days
    } = config;

    const {
      rangePicker,
      firstDayOfWeek
    } = this.props;

    const onMouseLeaveHandler = () => {
      if (rangePicker) {
        this.setState({
          hoverDate: undefined
        });
      }
    };

    return (
      <>
        <div className="Calendar-dayValues">
          {Array.from({ length: 7 }, (_x, day) => {
            const valueClass = classNames({
              'Calendar-value': true,
              'Calendar-value--dummy': true
            });
            const dayValue = (day + daysInRow + getIndexOfDay(firstDayOfWeek)) % daysInRow;

            return (
              <Subheading className={valueClass} appearance="disabled">{days[dayValue]}</Subheading>
            );
          })}
        </div>
        <div className="Calendar-dateValues" onMouseLeave={onMouseLeaveHandler}>
          {this.renderDateValues(index)}
        </div>
      </>
    );
  }

  renderDateValues = (index: number) => {
    const {
      daysInRow
    } = config;

    const {
      rangePicker,
      firstDayOfWeek,
      disabledBefore,
      disabledAfter
    } = this.props;

    const {
      startDate,
      endDate,
      hoverDate
    } = this.state;

    const {
      year: yearState,
      month: monthState,
      date: dateState
    } = this.state;

    const {
      year: yearNavVal,
      month: monthNavVal
    } = this.getNavDateInfo(index);

    const dayRange = getDaysInMonth(yearNavVal, monthNavVal);
    const dayDiff = getFirstDayOfMonth(yearNavVal, monthNavVal) - getIndexOfDay(firstDayOfWeek);
    const dummyDays = (dayDiff + daysInRow) % daysInRow;
    const noOfRows = Math.ceil((dayRange + dummyDays) / daysInRow);
    const inRangeError = this.getInRangeError();

    const onClickHandler = (date: number) => {
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

    const onMouseOverHandler = (date: number) => {
      if (rangePicker) {
        const d = this.getDateValue(yearNavVal, monthNavVal, date);
        if (!(startDate && endDate)) {
          this.setState({
            hoverDate: d
          });
        }
      }
    };

    return Array.from({ length: noOfRows }, (_y, row) => (
      <>
        {dummyDays < daysInRow && (
          <div className="Calendar-valueRow">
            {Array.from({ length: daysInRow }, (_x, col) => {
              const date = daysInRow * row + col - dummyDays + 1;
              const dummy = date <= 0 || date > dayRange;
              const disabled = !dummy
                && (
                  compareDate(disabledBefore, 'more', yearNavVal, monthNavVal, date)
                  || compareDate(disabledAfter, 'less', yearNavVal, monthNavVal, date)
                );
              let active = !disabled && yearState === yearNavVal && monthState === monthNavVal && dateState === date;
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
                  inRange = !disabled
                    && (compareDate(startDate, 'less', yearNavVal, monthNavVal, date) || startActive)
                    && (compareDate(endDate, 'more', yearNavVal, monthNavVal, date) || endActive);
                } else if (startDate) {
                  inRange = !disabled
                    && (
                      compareDate(hoverDate, 'more', yearNavVal, monthNavVal, date)
                      || inRangeLast
                    )
                    && compareDate(startDate, 'less', yearNavVal, monthNavVal, date);
                } else if (endDate) {
                  inRange = !disabled
                    && (
                      compareDate(hoverDate, 'less', yearNavVal, monthNavVal, date)
                      || inRangeLast
                    )
                    && compareDate(endDate, 'more', yearNavVal, monthNavVal, date);
                }
              }

              const wrapperClass = classNames({
                'Calendar-valueWrapper': true,
                'Calendar-valueWrapper--start': startActive || (inRangeLast && endDate),
                'Calendar-valueWrapper--end': endActive || (inRangeLast && startDate),
                'Calendar-valueWrapper--inRange': inRange || (rangePicker && active),
                'Calendar-valueWrapper--inRange-error': inRange && inRangeError,
              });

              const valueClass = classNames({
                'Calendar-value': true,
                'Calendar-value--active': active,
                'Calendar-value--dummy': dummy || disabled,
                'Calendar-value--disabled': disabled,
              });
              return (
                <div className={wrapperClass}>
                  <span
                    className={valueClass}
                    onClick={() => onClickHandler(date)}
                    onMouseOver={() => onMouseOverHandler(date)}
                  >
                    {!dummy && (
                      <Text appearance={active ? 'white' : disabled ? 'disabled' : 'default'}>{`${date}`}</Text>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </>
    ));
  }

  renderCalendar = (index: number) => {
    const {
      monthsInView
    } = this.props;

    const {
      view
    } = this.state;

    const wrapperClass = classNames({
      ['Calendar']: true,
      [`Calendar--${view}`]: view
    });

    const headerClass = classNames({
      'Calendar-header': true
    });

    const bodyClass = classNames({
      'Calendar-body': true
    });

    return (
      <div className={wrapperClass}>
        <div className={headerClass}>
          {index === 0 &&
            this.renderJumpButton('prev')
          }
          {this.renderHeaderContent(index)}
          {index === monthsInView - 1 &&
            this.renderJumpButton('next')
          }
        </div>
        <div className={bodyClass}>
          {view === 'year' &&
            this.renderBodyYear()
          }
          {view === 'month' && (
            this.renderBodyMonth()
          )}
          {view === 'date' &&
            this.renderBodyDate(index)
          }
        </div>
      </div>
    );
  }

  render() {
    const {
      monthsInView,
      className
    } = this.props;

    const baseProps = extractBaseProps(this.props);

    return (
      <div {...baseProps} className={`Calendar-wrapper ${className}`}>
        {Array.from({ length: monthsInView }, (_x, index) => {
          return this.renderCalendar(index);
        })}
      </div>
    );
  }
}

export default Calendar;
