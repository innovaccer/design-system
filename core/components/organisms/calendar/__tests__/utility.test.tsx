import {
  getIndexOfDay,
  getYearBlock,
  getDaysInMonth,
  getFirstDayOfMonth,
  getDateInfo,
  convertToDate,
  compareYearBlock,
  compareDate,
  translateToString,
  translateToDate,
} from '../utility';

test('call getIndexOfDay function with day args', () => {
  const day = 'monday';
  expect(getIndexOfDay(day));
});

test('call getYearBlock function with year args', () => {
  const year = 2021;
  expect(getYearBlock(year));
});

test('call getDaysInMonth function with year and month args', () => {
  const year = 2021;
  const month = 8;
  expect(getDaysInMonth(year, month));
});

test('call getFirstDayOfMonth function with year and month args', () => {
  const year = 2021;
  const month = 8;
  expect(getFirstDayOfMonth(year, month));
});

test('call getDateInfo function with date args', () => {
  const date = '08/23/2021';
  expect(getDateInfo(date));
});

test('call convertToDate function with date args', () => {
  const date = '08/23/2021';
  expect(convertToDate(date));
});

test('call compareYearBlock function with date, operator = less and current decade args', () => {
  const date = '08/23/2021';
  const operator = 'less';
  const currDecade = 2020;
  expect(compareYearBlock(date, operator, currDecade));
});

test('call compareYearBlock function with date, operator = more and current decade args', () => {
  const date = '08/23/2021';
  const operator = 'more';
  const currDecade = 2020;
  expect(compareYearBlock(date, operator, currDecade));
});

test('call compareYearBlock function with date, operator = equal and current decade args', () => {
  const date = '08/23/2021';
  const operator = 'equal';
  const currDecade = 2020;
  expect(compareYearBlock(date, operator, currDecade));
});

test('call compareDate function with date, operator, current decade, current month and current date args', () => {
  const date = '08/23/2021';
  const operator = 'less';
  const currDecade = 2020;
  const currMonth = 8;
  const currDate = 23;
  expect(compareDate(date, operator, currDecade, currMonth, currDate));
});

test('call translateToString function with format args', () => {
  const format = 'mm/dd/yyyy';
  expect(translateToString(format));
});

test('call translateToDate function with format and value args', () => {
  const format = 'mm/dd/yyyy';
  const value = '08/21/2021';
  expect(translateToDate(format, value));
});
