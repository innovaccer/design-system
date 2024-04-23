import React from 'react';
import isEnterKey from '../isEnterKey';

describe('isEnterKey', () => {
  it('returns true when Enter key is pressed', () => {
    // Create a mock event object for the 'Enter' key
    const enterKeyEvent = {
      key: 'Enter',
    } as React.KeyboardEvent;

    // Check if the isEnterKey function correctly detects the 'Enter' key
    expect(isEnterKey(enterKeyEvent)).toBe(true);
  });

  it('returns false when any other key is pressed', () => {
    // Create a mock event object for a non-'Enter' key
    const nonEnterKeyEvent = {
      key: 'Escape',
    } as React.KeyboardEvent;

    // Check if the isEnterKey function correctly identifies non-'Enter' keys
    expect(isEnterKey(nonEnterKeyEvent)).toBe(false);
  });
});
