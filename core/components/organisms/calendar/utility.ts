import { DateObject, DateType, Day } from './types';
import config from './config';
import { Validators } from '@/utils/types';
import { isValid } from '@/utils/validators';

type Operator = 'less' | 'more' | 'equal';

const { yearBlockRange } = config;

export const getIndexOfDay = (day: Day): number =>
  ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].indexOf(day);

export const getYearBlock = (year: number): number => year - (year % yearBlockRange);

export const getDaysInMonth = (year: number, month: number): number => new Date(year, month + 1, 0).getDate();

export const getFirstDayOfMonth = (year: number, month: number): number => new Date(year, month).getDay();

export const getDateInfo = (d?: DateType): Record<string, any> => {
  if (d) {
    const dateVal = convertToDate(d);
    if (dateVal) {
      const year = dateVal.getFullYear();
      const month = dateVal.getMonth();
      const day = dateVal.getDay();
      const date = dateVal.getDate();
      const decadeYear = getYearBlock(year);

      return { decadeYear, year, month, day, date };
    } else {
      return {};
    }
  }
  return {};
};

export const convertToDate = (
  d?: DateType | DateObject,
  format?: string,
  validators?: Validators
): Date | undefined => {
  let dateVal;

  if (d) {
    if (typeof d === 'number') {
      dateVal = new Date(d);
    } else if (typeof d === 'string') {
      return format ? translateToDate(format, d, validators) : undefined;
    } else if (!(d instanceof Date)) {
      const { year, month, date } = d as DateObject;
      dateVal = new Date(year, month, date, 0, 0, 0);
    } else {
      dateVal = d;
    }
  }

  return dateVal;
};

export const compareYearBlock = (d: DateType | undefined, operator: Operator, currDecade: number): boolean => {
  if (d) {
    const { decadeYear: limitDecade } = getDateInfo(d);

    switch (operator) {
      case 'less':
        if (limitDecade < currDecade) return true;
        break;

      case 'more':
        if (limitDecade > currDecade) return true;
        break;

      case 'equal':
        if (limitDecade === currDecade) return true;
        break;
    }
  }
  return false;
};

export const compareDate = (
  d: DateType | undefined,
  operator: Operator,
  currYear: number,
  currMonth?: number,
  currDate?: number
): boolean => {
  if (d) {
    const { year: limitYear, month: limitMonth, date: limitDate } = getDateInfo(d);

    switch (operator) {
      case 'less':
        if (limitYear < currYear) return true;
        if (limitYear > currYear) return false;
        if (currMonth !== undefined) {
          if (limitMonth < currMonth) return true;
          if (limitMonth > currMonth) return false;
        }
        if (currDate !== undefined && limitDate < currDate) return true;
        break;

      case 'more':
        if (limitYear > currYear) return true;
        if (limitYear < currYear) return false;
        if (currMonth !== undefined) {
          if (limitMonth > currMonth) return true;
          if (limitMonth < currMonth) return false;
        }
        if (currDate !== undefined && limitDate > currDate) return true;
        break;

      case 'equal':
        if (currDate !== undefined) {
          if (limitYear === currYear && limitMonth === currMonth && limitDate === currDate) return true;
        } else if (currMonth !== undefined) {
          if (limitYear === currYear && limitMonth === currMonth) return true;
        } else if (limitYear === currYear) return true;
    }
  }
  return false;
};

export const translateToString = (format: string, d?: Date): string => {
  if (format && d) {
    const { year, month, date } = getDateInfo(d);

    const separator = format.includes('/') ? '/' : '-';
    const f = format.split(separator);
    const val = f.reduce((out, curr, i) => {
      switch (curr) {
        case 'mm':
          out += (month < 9 && '0') + (month + 1);
          break;
        case 'yyyy':
          out += year;
          break;
        case 'dd':
          out += (date < 10 && '0') + date;
          break;
      }
      if (i !== f.length - 1) out += separator;
      return out;
    }, '');

    return val;
  }
  return '';
};

export const translateToDate = (format: string, val: string, validators: Validators = []): Date | undefined => {
  if (isValid(validators, val, format)) {
    const separator = format.includes('/') ? '/' : '-';

    let year = -1,
      month = -1,
      date = -1;
    const v = val.split(separator);
    format.split(separator).forEach((f, i) => {
      switch (f) {
        case 'mm':
          month = +v[i] - 1;
          break;
        case 'yyyy':
          year = +v[i];
          break;
        case 'dd':
          date = +v[i];
          break;
      }
    });
    const d = convertToDate({ year, month, date });
    return d;
  } else {
    return undefined;
  }
};

export const dateComparison = (
  date: Date | undefined,
  operator: Operator,
  currDate: string,
  currMonth: string,
  currYear: string
): boolean => {
  const currentDate = new Date(`${currYear}-${currMonth}-${currDate}`);

  if (date) {
    switch (operator) {
      case 'less':
        return date <= currentDate;

      case 'equal':
        return date.toDateString() === currentDate.toDateString();

      case 'more':
        return date >= currentDate;

      default:
        return false;
    }
  }
  return false;
};
