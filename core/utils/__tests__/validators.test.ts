import { time } from '../validators';

describe('time validator', () => {
  it('should invalidate minutes over 59', () => {
    expect(time('10:60', 'hh:mm')).toBe(false);
    expect(time('10:59', 'hh:mm')).toBe(true);
  });

  it('should validate 12-hour format correctly', () => {
    expect(time('00:10 AM', 'hh:mm AM')).toBe(false);
    expect(time('13:10 AM', 'hh:mm AM')).toBe(false);
    expect(time('11:10 AM', 'hh:mm AM')).toBe(true);
  });
});
