// isSpaceKey.test.ts
import isSpaceKey from '../isSpaceKey';

describe('isSpaceKey', () => {
  test('returns true if the space key is pressed', () => {
    // Create a mock React keyboard event with 'Space' as the key
    const spaceKeyEvent = {
      key: 'Space',
    } as React.KeyboardEvent;

    // Assert that isSpaceKey returns true for the space key event
    expect(isSpaceKey(spaceKeyEvent)).toBe(true);
  });

  test('returns false if any other key is pressed', () => {
    // Create a mock React keyboard event with a non-space key
    const enterKeyEvent = {
      key: 'Enter',
    } as React.KeyboardEvent;

    // Assert that isSpaceKey returns false for a non-space key event
    expect(isSpaceKey(enterKeyEvent)).toBe(false);
  });

  test('returns false if the key is undefined', () => {
    // Create a mock React keyboard event with an undefined key
    const undefinedKeyEvent = {
      key: undefined,
    } as unknown as React.KeyboardEvent;

    // Assert that isSpaceKey returns false for an undefined key event
    expect(isSpaceKey(undefinedKeyEvent)).toBe(false);
  });

  // Add more test cases if you want to cover more scenarios, such as empty string, null, etc.
});
