import * as React from 'react';
import classNames from 'classnames';
import Icon from '@/components/atoms/icon';
import Heading from '@/components/atoms/heading';
import Subheading from '@/components/atoms/subheading';
import Text from '@/components/atoms/text';

import config from './config';
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

export type View = 'date' | 'month' | 'year';
export type Day = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
export type DateType = number | Date;
export type State = {
  year?: number,
  month?: number,
  date?: number
};

export interface IDatePickerProps {
  onDateChange?: (date?: Date) => void;
  onRangeChange?: (startDate?: Date, endDate?: Date) => void;
  monthsInView?: number;
  jumpView?: boolean;
  date?: DateType;
  firstDayOfWeek?: Day;
  view?: View;
  disabledBefore?: DateType;
  disabledAfter?: DateType;
  rangePicker?: boolean;
  startDate?: DateType;
  endDate?: DateType;
  rangeLimit?: number;
  yearNav?: number;
  monthNav?: number;
}

export const DatePicker: React.FunctionComponent<IDatePickerProps> = props => {
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
    setYearNav(yearNavProp);
    setYearBlockNav(getYearBlock(yearNavProp));
  }, [yearNavProp]);

  React.useEffect(() => {
    setMonthNav(monthNavProp);
  }, [monthNavProp]);

  React.useEffect(() => {
    if (dateProp) {
      const { year, month, date } = getDateInfo(dateProp);
      updateState(year, month, date);
      const d = convertToDate(dateProp);
      setCurrDateState(d);
    }
  }, [dateProp]);

  React.useEffect(() => {
    if (startDateProp) {
      const { year, month, date } = getDateInfo(startDateProp);
      updateState(year, month, date);
      const d = convertToDate(startDateProp);
      setStartDateState(d);
    }
  }, [startDateProp]);

  React.useEffect(() => {
    if (startDateProp && endDateProp) {
      const { year, month, date } = getDateInfo(endDateProp);
      updateState(year, month, date);
      const d = convertToDate(endDateProp);
      setEndDateState(d);
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
        if (!startDateState) setStartDateState(currDateState);
        if (startDateState) {
          const {
            year,
            month,
            date
          } = getDateInfo(currDateState);
          if (compareDate(startDateState, 'less', year, month, date)) {
            setEndDateState(currDateState);
          } else {
            setStartDateState(currDateState);
          }
        }
        if (endDateState) {
          setEndDateState(undefined);
          setHoverDateState(undefined);
          setStartDateState(currDateState);
        }
      } else {
        setStartDateState(currDateState);
      }
    }
  }, [currDateState]);

  React.useEffect(() => {
    if (endDateState) {
      const inRangeError = getInRangeError();
      if (onRangeChange && !inRangeError) onRangeChange(startDateState, endDateState);
    }
  }, [endDateState]);

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
    if (rangePicker && rangeLimit && startDateState) {
      const {
        date: startDate
      } = getDateInfo(startDateState);

      const nextLimitDate = new Date(startDateState);
      nextLimitDate.setDate(startDate + rangeLimit);

      const {
        year: hoverYear,
        month: hoverMonth,
        date: hoverDate
      } = getDateInfo(hoverDateState);
      const {
        year: endYear,
        month: endMonth,
        date: endDate
      } = getDateInfo(endDateState);

      return (
        compareDate(nextLimitDate, 'less', hoverYear, hoverMonth, hoverDate + 1)
        || compareDate(nextLimitDate, 'less', endYear, endMonth, endDate + 1)
      );
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
      'DatePicker-headerIcon': true,
      'DatePicker-headerIcon--disabled': disabled
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
      'DatePicker-headerContent': true,
      'DatePicker-headerContent--noIcon-left': index === monthsInView - 1,
      'DatePicker-headerContent--noIcon-right': index === 0,
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
      <div className="DatePicker-valueRow">
        {Array.from({ length: yearsInRow }, (_x, col) => {
          const offset = yearsInRow * row + col;
          if (offset === yearBlockNav) return undefined;

          const year = yearBlockNav + offset;
          const disabled = compareDate(disabledBefore, 'more', year) || compareDate(disabledAfter, 'less', year);
          const active = !disabled && yearNav === year;

          const valueClass = classNames({
            'DatePicker-value': true,
            'DatePicker-value--active': active,
            'DatePicker-value--disabled': disabled
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
      <div className="DatePicker-valueRow">
        {Array.from({ length: monthsInRow }, (_x, col) => {
          const month = monthsInRow * row + col;
          const disabled = compareDate(disabledBefore, 'more', yearNav, month)
            || compareDate(disabledAfter, 'less', yearNav, month);
          const active = !disabled && yearState === yearNav && monthNav === month;

          const valueClass = classNames({
            'DatePicker-value': true,
            'DatePicker-value--active': active,
            'DatePicker-value--dummy': disabled
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
    return (
      <>
        <div className="DatePicker-dayValues">
          {renderDayValues()}
        </div>
        <div className="DatePicker-dateValues">
          {renderDateValues(index)}
        </div>
      </>
    );
  };

  const renderDayValues = () => {
    return Array.from({ length: 7 }, (_x, day) => {
      const valueClass = classNames({
        'DatePicker-value': true,
        'DatePicker-value--dummy': true
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
    let inRangeError = false;

    if (rangePicker) {
      if (rangeLimit && startDateState) {
        inRangeError = getInRangeError();
      }
    }

    const onClickHandler = (date: number) => {
      if (rangePicker) {
        if (!inRangeError) selectDate(index, date);
        if (endDateState) selectDate(index, date);
      } else {
        selectDate(index, date);
      }
    };

    const onMouseOverHandler = (date: number) => {
      if (rangePicker) {
        if (!endDateState) {
          const d = getDateValue(yearNavVal, monthNavVal, date);
          setHoverDateState(d);
        }
      }
    };

    return Array.from({ length: noOfRows }, (_y, row) => (
      <>
        {dummyDays < daysInRow && (
          <div className="DatePicker-valueRow">
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
                if (startDateState) {
                  inRange = !disabled
                    && (
                      compareDate(hoverDateState, 'more', yearNavVal, monthNavVal, date)
                      || compareDate(hoverDateState, 'equal', yearNavVal, monthNavVal, date)
                    )
                    && compareDate(startDateState, 'less', yearNavVal, monthNavVal, date);
                }
                if (endDateState) {
                  active = !disabled
                    && (
                      compareDate(startDateState, 'equal', yearNavVal, monthNavVal, date)
                      || compareDate(endDateState, 'equal', yearNavVal, monthNavVal, date)
                    );
                  inRange = !disabled
                    && (
                      compareDate(startDateState, 'less', yearNavVal, monthNavVal, date)
                      && compareDate(endDateState, 'more', yearNavVal, monthNavVal, date)
                    );
                }
              }

              const valueClass = classNames({
                'DatePicker-value': true,
                'DatePicker-value--active': active,
                'DatePicker-value--dummy': dummy || disabled,
                'DatePicker-value--disabled': disabled,
                'DatePicker-value--inRange': inRange,
                'DatePicker-value--inRange-error': inRange && inRangeError,
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

  const renderDatePicker = (index: number) => {
    const wrapperClass = classNames({
      ['DatePicker']: true,
      [`DatePicker--${view}`]: view
    });

    const headerClass = classNames({
      'DatePicker-header': true
    });

    const bodyClass = classNames({
      'DatePicker-body': true
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
    <div className="RangePicker">
      {Array.from({ length: monthsInView }, (_x, index) => {
        return renderDatePicker(index);
      })}
    </div>
  );
};

export default DatePicker;
