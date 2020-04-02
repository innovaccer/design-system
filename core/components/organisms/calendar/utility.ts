import { DateObject, DateType, Day } from './types';
import config from './config';

type Operator = 'less' | 'more' | 'equal';
export type Validator = (format: string, val: string) => boolean;

const {
  yearBlockRange
} = config;

export const getIndexOfDay = (day: Day): number => ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].indexOf(day);

export const getYearBlock = (year: number): number => year - (year % yearBlockRange);

export const getDaysInMonth = (year: number, month: number): number => new Date(year, month + 1, 0).getDate();

export const getFirstDayOfMonth = (year: number, month: number): number => new Date(year, month).getDay();

export const getDateInfo = (d?: DateType): Record<string, any> => {
  if (d) {
    const dateVal = convertToDate(d);
    if(dateVal) {
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

export const convertToDate = (d?: DateType | DateObject, format?: string, validator?: Validator): Date | undefined => {
  let dateVal;

  if(d) {
    if (typeof d === 'number') {
      dateVal = new Date(d);
    } else if (typeof d === 'string') {
      return format ? translateToDate(format, d, validator) : undefined;
    } else if (!(d instanceof Date)) {
      const { year, month, date } = d as DateObject;
      dateVal = new Date();
      dateVal.setDate(date);
      dateVal.setMonth(month);
      dateVal.setFullYear(year);
    } else {
      dateVal = d;
    }
  }

  return dateVal;
};

export const compareDecade = (d: DateType | undefined, operator: Operator, currDecade: number): boolean => {
  if (d) {
    const {
      decadeYear: limitDecade
    } = getDateInfo(d);

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
    const {
      year: limitYear,
      month: limitMonth,
      date: limitDate
    } = getDateInfo(d);

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
        }
        else if (currMonth !== undefined) {
          if (limitYear === currYear && limitMonth === currMonth) return true;
        }
        else if (limitYear === currYear) return true;
    }
  }
  return false;
};

export const translateToString = (format: string, d: Date): string => {
  const {
    year,
    month,
    date
  } = getDateInfo(d);

  const separator = format.includes('/') ? '/' : '-';
  const f = format.split(separator);
  const val = f.reduce((out, curr, i) => {
    switch (curr) {
      case 'mm':
        out += (month < 10 && '0') + (month + 1);
        break;
      case 'yy':
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

export const translateToDate = (format: string, val: string, validator?: Validator): Date | undefined => {
  const isValid = validator ? validator(format, val) : true;
  if (isValid) {
    const separator = format.includes('/') ? '/' : '-';

    let year: number = -1,
      month: number = -1,
      date: number = -1;
    const v = val.split(separator);
    format.split(separator).forEach((f, i) => {
      switch (f) {
        case 'mm':
          month = +v[i] - 1;
          break;
        case 'yy':
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