import * as React from 'react';
import classNames from 'classnames';
import Icon from '@/components/atoms/icon';
import Heading from '@/components/atoms/heading';
import Subheading from '@/components/atoms/subheading';
import Text from '@/components/atoms/text';

import config from './config';
import { Day, View, State } from './types';
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

export interface SharedProps {
  /**
   * Number of months rendered in view
   * @default 1
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
   * @default "sunday"
   */
  firstDayOfWeek?: Day;
  /**
   * Specifies initial view of `Calendar`
   * @default "date"
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
   * **use only if date, startDate and endDate are undefined**
   */
  yearNav?: number;
  /**
   * Initial month to be set for navigation
   *
   * **use only if date, startDate and endDate are undefined**
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
} & SharedProps;

export const Calendar = (props: CalendarProps) => {
  const now = Date.now();
  const {
    year: nowYear,
    month: nowMonth,
  } = getDateInfo(now);

  const {
    monthsInView = 1,
    view: viewProp = 'date',
    firstDayOfWeek = 'sunday',
    date: dateProp,
    rangePicker,
    rangeLimit,
    yearNav: yearNavProp = nowYear,
    monthNav: monthNavProp = nowMonth,
    startDate: startDateProp,
    endDate: endDateProp,
    disabledBefore,
    disabledAfter,
    onDateChange,
    onRangeChange,
  } = props;

  let {
    jumpView = true
  } = props;

  if (jumpView) {
    if (monthsInView > 1) jumpView = false;
  }

  const {
    yearBlockRange,
    yearsInRow,
    monthBlock,
    monthsInRow,
    daysInRow,
    months,
    days
  } = config;

  const [view, setView] = React.useState<View>(monthsInView > 1 ? 'date' : viewProp);
  const [state, setState] = React.useState<State>({
    year: undefined,
    month: undefined,
    date: undefined
  });
  const [currDateState, setCurrDateState] = React.useState<Date | undefined>();
  const [hoverDateState, setHoverDateState] = React.useState<Date | undefined>();
  const [startDateState, setStartDateState] = React.useState<Date | undefined>();
  const [endDateState, setEndDateState] = React.useState<Date | undefined>();
  const [yearBlockNav, setYearBlockNav] = React.useState<number>(getYearBlock(yearNavProp));
  const [yearNav, setYearNav] = React.useState<number>(yearNavProp);
  const [monthNav, setMonthNav] = React.useState<number>(monthNavProp);

  const {
    year: yearState,
    month: monthState,
    date: dateState
  } = state;

  React.useEffect(() => {
    if (dateProp) {
      const { year, month, date } = getDateInfo(dateProp);
      updateState(year, month, date);
      const d = convertToDate(dateProp);
      setCurrDateState(d);
    } else {
      setCurrDateState(undefined);
    }
  }, [dateProp]);

  React.useEffect(() => {
    if (startDateProp) {
      const d = convertToDate(startDateProp);
      setStartDateState(d);
    } else {
      setStartDateState(undefined);
    }
  }, [startDateProp]);

  React.useEffect(() => {
    if (endDateProp) {
      const d = convertToDate(endDateProp);
      setEndDateState(d);
    } else {
      setEndDateState(undefined);
    }
  }, [endDateProp]);

  React.useEffect(() => {
    if (monthsInView === 1) setView(viewProp);
    else setView('date');
  }, [monthsInView, viewProp]);

  React.useEffect(() => {
    if (currDateState) {
      if (onDateChange) onDateChange(currDateState);
      if (rangePicker) {
        if (startDateState && endDateState) {
          setEndDateState(undefined);
          setHoverDateState(undefined);
          setStartDateState(currDateState);
        } else {
          const {
            year,
            month,
            date
          } = getDateInfo(currDateState);
          if (startDateState) {
            if (compareDate(startDateState, 'more', year, month, date)) {
              setStartDateState(currDateState);
            } else {
              setEndDateState(currDateState);
            }
          } else if (endDateState) {
            if (compareDate(endDateState, 'less', year, month, date)) {
              setEndDateState(currDateState);
            } else {
              setStartDateState(currDateState);
            }
          } else {
            setStartDateState(currDateState);
          }
        }
      } else {
        setStartDateState(currDateState);
      }
    }
  }, [currDateState]);

  React.useEffect(() => {
    if (onRangeChange) onRangeChange(startDateState, endDateState);
  }, [startDateState, endDateState]);

  React.useEffect(() => {
    if (yearState !== undefined && monthsInView < 2) {
      setYearBlockNav(getYearBlock(yearState));
      setYearNav(yearState);
    }
  }, [yearState]);

  React.useEffect(() => {
    if (monthState !== undefined && monthsInView < 2) {
      setMonthNav(monthState);
    }
  }, [monthState]);

  React.useEffect(() => {
    setYearNav(yearNavProp);
    setYearBlockNav(getYearBlock(yearNavProp));
  }, [yearNavProp]);

  React.useEffect(() => {
    setMonthNav(monthNavProp);
  }, [monthNavProp]);

  const getDateValue = (year: number, month: number, date: number): Date | undefined => {
    const d = new Date(year, month, date);
    if (compareDate(disabledBefore, 'more', year, month, date)
      || compareDate(disabledAfter, 'less', year, month, date)) {
      return undefined;
    }
    return d;
  };

  const getNavDateInfo = (index: number): Record<string, any> => {
    const yearBlock = yearBlockNav;
    const month = (monthNav + index) % monthBlock;
    const year = yearNav + (index !== 0 && month < monthNav ? 1 : 0);
    return { yearBlock, year, month };
  };

  const getInRangeError = () => {
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
  };

  const updateState = (year: number, month?: number, date?: number) => {
    setState({ year, month, date });
  };

  const selectYear = (year: number) => {
    updateState(year);
    setView('month');
  };

  const selectMonth = (month: number) => {
    updateState(yearNav, month);
    setView('date');
  };

  const selectDate = (index: number, date: number) => {
    const {
      year: yearNavVal,
      month: monthNavVal
    } = getNavDateInfo(index);

    updateState(yearNavVal, monthNavVal, date);
    const d = getDateValue(yearNavVal, monthNavVal, date);
    setCurrDateState(d);
  };

  const renderJumpButton = (type: string) => {
    const navClickHandler = () => {
      switch (view) {
        case 'year':
          if (type === 'prev') setYearBlockNav(yearBlockNav - yearBlockRange);
          if (type === 'next') setYearBlockNav(yearBlockNav + yearBlockRange);
          break;

        case 'month':
          if (type === 'prev') setYearNav(yearNav - 1);
          if (type === 'next') setYearNav(yearNav + 1);
          break;

        case 'date':
          if (type === 'prev') {
            if (monthNav === 0) setYearNav(yearNav - 1);
            setMonthNav((monthBlock + monthNav - 1) % monthBlock);
          }
          if (type === 'next') {
            if (monthNav === monthBlock - 1) setYearNav(yearNav + 1);
            setMonthNav((monthNav + 1) % monthBlock);
          }
          break;
      }
    };

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
      <div className={headerIconClass}>
        <Icon
          name={`arrow_${type === 'next' ? 'forward' : 'back'}`}
          size={16}
          helpers={['p-4']}
          onClick={navClickHandler}
        />
      </div>
    );
  };

  const renderHeaderContent = (index: number) => {
    const {
      year: yearNavVal,
      month: monthNavVal
    } = getNavDateInfo(index);

    const headerContentClass = classNames({
      'Calendar-headerContent': true,
      'Calendar-headerContent--noIcon-left': index === monthsInView - 1,
      'Calendar-headerContent--noIcon-right': index === 0,
    });

    let headerContent = '';
    const onClickHandler = () => {
      if (jumpView) {
        if (view === 'year') setView('date');
        if (view === 'month') setView('year');
        if (view === 'date') setView('month');
      }
    };

    if (view === 'year') headerContent = `${yearBlockNav} - ${yearBlockNav + (yearBlockRange - 1)}`;
    if (view === 'month') headerContent = `${yearNavVal}`;
    if (view === 'date') headerContent = `${months[monthNavVal]} ${yearNavVal}`;

    return (
      <div className={headerContentClass} onClick={onClickHandler}>
        <Heading>{headerContent}</Heading>
      </div>
    );
  };

  const renderBodyYear = () => {
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
            <div className={valueClass} onClick={() => selectYear(year)}>
              <Text appearance={active ? 'white' : disabled ? 'disabled' : 'default'}>{`${year}`}</Text>
            </div>
          );
        })}
      </div>
    ));
  };

  const renderBodyMonth = () => {
    const noOfRows = Math.ceil(monthBlock / monthsInRow);

    return Array.from({ length: noOfRows }, (_y, row) => (
      <div className="Calendar-valueRow">
        {Array.from({ length: monthsInRow }, (_x, col) => {
          const month = monthsInRow * row + col;
          const disabled = compareDate(disabledBefore, 'more', yearNav, month)
            || compareDate(disabledAfter, 'less', yearNav, month);
          const active = !disabled && yearState === yearNav && monthNav === month;

          const valueClass = classNames({
            'Calendar-value': true,
            'Calendar-value--active': active,
            'Calendar-value--dummy': disabled
          });
          return (
            <div className={valueClass} onClick={() => selectMonth(month)}>
              <Text appearance={active ? 'white' : disabled ? 'disabled' : 'default'}>{months[month]}</Text>
            </div>
          );
        })}
      </div>
    ));
  };

  const renderBodyDate = (index: number) => {
    const onMouseLeaveHandler = () => {
      if (rangePicker) {
        setHoverDateState(undefined);
      }
    };

    return (
      <>
        <div className="Calendar-dayValues">
          {renderDayValues()}
        </div>
        <div className="Calendar-dateValues" onMouseLeave={onMouseLeaveHandler}>
          {renderDateValues(index)}
        </div>
      </>
    );
  };

  const renderDayValues = () => {
    return Array.from({ length: 7 }, (_x, day) => {
      const valueClass = classNames({
        'Calendar-value': true,
        'Calendar-value--dummy': true
      });
      const dayValue = (day + daysInRow + getIndexOfDay(firstDayOfWeek)) % daysInRow;

      return (
        <div className={valueClass}>
          <Subheading appearance="disabled">{days[dayValue]}</Subheading>
        </div>
      );
    });
  };

  const renderDateValues = (index: number) => {
    const {
      year: yearNavVal,
      month: monthNavVal
    } = getNavDateInfo(index);

    const dayRange = getDaysInMonth(yearNavVal, monthNavVal);
    const dayDiff = getFirstDayOfMonth(yearNavVal, monthNavVal) - getIndexOfDay(firstDayOfWeek);
    const dummyDays = (dayDiff + daysInRow) % daysInRow;
    const noOfRows = Math.ceil((dayRange + dummyDays) / daysInRow);
    const inRangeError = getInRangeError();

    const onClickHandler = (date: number) => {
      if (rangePicker) {
        if (startDateState && endDateState) {
          selectDate(index, date);
        } else {
          if (!inRangeError) selectDate(index, date);
        }
      } else {
        selectDate(index, date);
      }
    };

    const onMouseOverHandler = (date: number) => {
      if (rangePicker) {
        const d = getDateValue(yearNavVal, monthNavVal, date);
        if (!(startDateState && endDateState)) {
          setHoverDateState(d);
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
              let inRange = false;
              if (rangePicker) {
                active = !disabled
                  && (
                    compareDate(startDateState, 'equal', yearNavVal, monthNavVal, date)
                    || compareDate(endDateState, 'equal', yearNavVal, monthNavVal, date)
                  );
                if (startDateState && endDateState) {
                  inRange = !disabled
                    && compareDate(startDateState, 'less', yearNavVal, monthNavVal, date)
                    && compareDate(endDateState, 'more', yearNavVal, monthNavVal, date);
                } else if (startDateState) {
                  inRange = !disabled
                    && (
                      compareDate(hoverDateState, 'more', yearNavVal, monthNavVal, date)
                      || compareDate(hoverDateState, 'equal', yearNavVal, monthNavVal, date)
                    )
                    && compareDate(startDateState, 'less', yearNavVal, monthNavVal, date);
                } else if (endDateState) {
                  inRange = !disabled
                    && (
                      compareDate(hoverDateState, 'less', yearNavVal, monthNavVal, date)
                      || compareDate(hoverDateState, 'equal', yearNavVal, monthNavVal, date)
                    )
                    && compareDate(endDateState, 'more', yearNavVal, monthNavVal, date);
                }
              }

              const valueClass = classNames({
                'Calendar-value': true,
                'Calendar-value--active': active,
                'Calendar-value--dummy': dummy || disabled,
                'Calendar-value--disabled': disabled,
                'Calendar-value--inRange': inRange,
                'Calendar-value--inRange-error': inRange && inRangeError,
              });
              return (
                <div
                  className={valueClass}
                  onClick={() => onClickHandler(date)}
                  onMouseOver={() => onMouseOverHandler(date)}
                >
                  {!dummy && (
                    <Text appearance={active ? 'white' : disabled ? 'disabled' : 'default'}>{`${date}`}</Text>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </>
    ));
  };

  const renderCalendar = (index: number) => {
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
            renderJumpButton('prev')
          }
          {renderHeaderContent(index)}
          {index === monthsInView - 1 &&
            renderJumpButton('next')
          }
        </div>
        <div className={bodyClass}>
          {view === 'year' &&
            renderBodyYear()
          }
          {view === 'month' && (
            renderBodyMonth()
          )}
          {view === 'date' &&
            renderBodyDate(index)
          }
        </div>
      </div>
    );
  };

  return (
    <div className="d-flex">
      {Array.from({ length: monthsInView }, (_x, index) => {
        return renderCalendar(index);
      })}
    </div>
  );
};

Calendar.displayName = 'Calendar';

export default Calendar;
