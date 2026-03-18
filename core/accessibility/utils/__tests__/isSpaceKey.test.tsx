// isSpaceKey.test.ts
import isSpaceKey from '../isSpaceKey';

describe('isSpaceKey', () => {
  test('returns true for space character (modern browsers)', () => {
    const spaceKeyEvent = {
      key: ' ',
    } as React.KeyboardEvent;

    expect(isSpaceKey(spaceKeyEvent)).toBe(true);
  });

  test('returns true for "Space" key value', () => {
    const spaceKeyEvent = {
      key: 'Space',
    } as React.KeyboardEvent;

    expect(isSpaceKey(spaceKeyEvent)).toBe(true);
  });

  test('returns true for "Spacebar" key value (legacy browsers)', () => {
    const spaceKeyEvent = {
      key: 'Spacebar',
    } as React.KeyboardEvent;

    expect(isSpaceKey(spaceKeyEvent)).toBe(true);
  });

  test('returns false if any other key is pressed', () => {
    const enterKeyEvent = {
      key: 'Enter',
    } as React.KeyboardEvent;

    expect(isSpaceKey(enterKeyEvent)).toBe(false);
  });

  test('returns false if the key is undefined', () => {
    const undefinedKeyEvent = {
      key: undefined,
    } as unknown as React.KeyboardEvent;

    expect(isSpaceKey(undefinedKeyEvent)).toBe(false);
  });
});
