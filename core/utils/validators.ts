import { Validators } from '@/utils/types';
import { getTimeObjFromStr, isFormat12hour } from '@/components/organisms/timePicker/utils';

export const isValid = (validators: Validators, ...value: any[]) => {
  const iterator = Array.isArray(validators) ? validators : [validators];

  return iterator.every((validator) => validator(...value));
};

export const date = (val: string, format: string): boolean => {
  const validate = (date: number, month: number, year: number): boolean => {
    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

    // Check the range of the day
    return month <= 12 && date <= monthLength[month - 1];
  };

  if (val) {
    switch (format) {
      case 'dd/mm/yyyy': {
        const p = val.split('/');
        const date = +p[0] || 1;
        const month = +p[1] || 1;
        const year = +p[2] || 1900;
        return validate(date, month, year);
      }
      case 'mm/dd/yyyy': {
        const p = val.split('/');
        const date = +p[1] || 1;
        const month = +p[0] || 1;
        const year = +p[2] || 1900;
        return validate(date, month, year);
      }

      case 'yyyy/mm/dd': {
        const p = val.split('/');
        const date = +p[2] || 1;
        const month = +p[1] || 1;
        const year = +p[0] || 1900;
        return validate(date, month, year);
      }
      case 'dd-mm-yyyy': {
        const p = val.split('-');
        const date = +p[0] || 1;
        const month = +p[1] || 1;
        const year = +p[2] || 1900;
        return validate(date, month, year);
      }

      case 'mm-dd-yyyy': {
        const p = val.split('-');
        const date = +p[1] || 1;
        const month = +p[0] || 1;
        const year = +p[2] || 1900;
        return validate(date, month, year);
      }

      case 'yyyy-mm-dd': {
        const p = val.split('-');
        const date = +p[2] || 1;
        const month = +p[1] || 1;
        const year = +p[0] || 1900;
        return validate(date, month, year);
      }
      default:
        return false;
    }
  }
  return false;
};

export const time = (val: string, format: string): boolean => {
  const { hours, minutes } = getTimeObjFromStr(format, val);
  const hoursCond = isFormat12hour(format) ? hours <= 12 : hours < 24;

  return hoursCond && minutes <= 60;
};

export const isNaturalNumber = (val: number | string): boolean => {
  if (
    (typeof val === 'string' && /[^0-9]/.test(val)) ||
    (typeof val === 'number' && (val <= 0 || val - Math.floor(val) !== 0))
  ) {
    return false;
  }

  return true;
};
