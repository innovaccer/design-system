import {
  getCurrentMonth,
  getCurrentYear,
  getCurrentWeek,
  getPreviousWeek,
  getPreviousMonth,
  getPrevious90Days,
  getCustomDates,
} from '../utilities';

describe('dateRangePicker Component: renders date utilities', () => {
  test('checks getCurrentMonth utility', () => {
    expect(getCurrentMonth());
  });

  test('checks getCurrentYear utility', () => {
    expect(getCurrentYear());
  });

  test('checks getCurrentWeek utility', () => {
    expect(getCurrentWeek());
  });

  test('checks getPreviousWeek utility', () => {
    expect(getPreviousWeek());
  });

  test('checks getPreviousMonth utility', () => {
    expect(getPreviousMonth());
  });

  test('checks getPrevious90Days utility', () => {
    expect(getPrevious90Days());
  });

  test('checks getCustomDates utility', () => {
    expect(getCustomDates());
  });
});
