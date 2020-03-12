import { DateType, Day } from './DatePicker';
import config from './config';

type Operator = 'less' | 'more' | 'equal';

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
    const year = dateVal.getFullYear();
    const month = dateVal.getMonth();
    const day = dateVal.getDay();
    const date = dateVal.getDate();
    const decadeYear = getYearBlock(year);

    return { decadeYear, year, month, day, date };
  }
  return {};
};

export const convertToDate = (d: DateType): Date => {
  let dateVal = d;
  if (typeof dateVal === 'number') {
    dateVal = new Date(dateVal);
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

    switch(operator) {
      case 'less':
        if (limitYear < currYear) return true;
        if (limitYear > currYear) return false;
        if (currMonth !== undefined) {
          if(limitMonth < currMonth) return true;
          if(limitMonth > currMonth) return false;
        }
        if (currDate !== undefined && limitDate < currDate) return true;
        break;

      case 'more':
        if (limitYear > currYear) return true;
        if (limitYear < currYear) return false;
        if (currMonth !== undefined) {
          if(limitMonth > currMonth) return true;
          if(limitMonth < currMonth) return false;
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