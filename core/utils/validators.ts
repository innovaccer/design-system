export const dateValidator = (format: string, val: string): boolean => {
  const validate = (date: number, month: number, year: number): boolean => {
    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12)
      return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
      monthLength[1] = 29;

    // Check the range of the day
    return date > 0 && date <= monthLength[month - 1];
  }

  switch (format) {
    case 'dd/mm/yy':
      var p = val.split('/');
      var date = +p[0];
      var month = +p[1];
      var year = +p[2];
      return validate(date, month, year);

    case 'mm/dd/yy':
      var p = val.split('/');
      var date = +p[1];
      var month = +p[0];
      var year = +p[2];
      return validate(date, month, year);

    case 'yy/mm/dd':
      var p = val.split('/');
      var date = +p[2];
      var month = +p[1];
      var year = +p[0];
      return validate(date, month, year);

    case 'dd-mm-yy':
      var p = val.split('-');
      var date = +p[0];
      var month = +p[1];
      var year = +p[2];
      return validate(date, month, year);

    case 'mm-dd-yy':
      var p = val.split('-');
      var date = +p[1];
      var month = +p[0];
      var year = +p[2];
      return validate(date, month, year);

    case 'yy-mm-dd':
      var p = val.split('-');
      var date = +p[2];
      var month = +p[1];
      var year = +p[0];
      return validate(date, month, year);

    default:
      return false;
  }
}

const e: Record<string, any> = {
  date: dateValidator
}
export default e;