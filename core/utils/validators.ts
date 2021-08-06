import { Validators } from '@/utils/types';
import { getTimeObjFromStr, isFormat12hour } from '@/components/organisms/timePicker/utils';

export const isValid = (validators: Validators, ...value: any[]) => {
  const iterator = Array.isArray(validators) ? validators : [validators];

  return iterator.every((validator) => validator(...value));
};

export const date = (val: string, format: string): boolean => {
  const validate = (date: number, month: number, year: number): boolean => {
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

    // Check the range of the day
    return month <= 12 && date <= monthLength[month - 1];
  };

  switch (format) {
    case 'dd/mm/yyyy':
      var p = val.split('/');
      var date = +p[0] || 1;
      var month = +p[1] || 1;
      var year = +p[2] || 1900;
      return validate(date, month, year);

    case 'mm/dd/yyyy':
      var p = val.split('/');
      var date = +p[1] || 1;
      var month = +p[0] || 1;
      var year = +p[2] || 1900;
      return validate(date, month, year);

    case 'yyyy/mm/dd':
      var p = val.split('/');
      var date = +p[2] || 1;
      var month = +p[1] || 1;
      var year = +p[0] || 1900;
      return validate(date, month, year);

    case 'dd-mm-yyyy':
      var p = val.split('-');
      var date = +p[0] || 1;
      var month = +p[1] || 1;
      var year = +p[2] || 1900;
      return validate(date, month, year);

    case 'mm-dd-yyyy':
      var p = val.split('-');
      var date = +p[1] || 1;
      var month = +p[0] || 1;
      var year = +p[2] || 1900;
      return validate(date, month, year);

    case 'yyyy-mm-dd':
      var p = val.split('-');
      var date = +p[2] || 1;
      var month = +p[1] || 1;
      var year = +p[0] || 1900;
      return validate(date, month, year);

    default:
      return false;
  }
};

export const time = (val: string, format: string): boolean => {
  const { hours, minutes } = getTimeObjFromStr(format, val);
  const hoursCond = isFormat12hour(format) ? hours <= 12 : hours < 24;

  return hoursCond && minutes <= 60;
};
