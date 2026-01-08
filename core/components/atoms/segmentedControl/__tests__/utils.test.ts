import { calculateIndicatorPosition, measureButtonWidths } from '../utils';

describe('SegmentedControl Utils - calculateIndicatorPosition', () => {
  let mockContainer: HTMLDivElement;
  let mockButton: HTMLButtonElement;
  let mockDivider1: HTMLSpanElement;
  let mockDivider2: HTMLSpanElement;

  beforeEach(() => {
    // Create mock elements
    mockContainer = document.createElement('div');
    mockButton = document.createElement('button');
    mockDivider1 = document.createElement('span');
    mockDivider2 = document.createElement('span');

    // Mock getBoundingClientRect for container
    mockContainer.getBoundingClientRect = jest.fn(() => ({
      left: 100,
      top: 50,
      right: 500,
      bottom: 100,
      width: 400,
      height: 50,
      x: 100,
      y: 50,
      toJSON: () => ({}),
    }));

    // Mock getBoundingClientRect for button
    mockButton.getBoundingClientRect = jest.fn(() => ({
      left: 200,
      top: 55,
      right: 300,
      bottom: 95,
      width: 100,
      height: 40,
      x: 200,
      y: 55,
      toJSON: () => ({}),
    }));

    // Mock getBoundingClientRect for dividers
    mockDivider1.getBoundingClientRect = jest.fn(() => ({
      left: 195,
      top: 55,
      right: 200,
      bottom: 95,
      width: 5,
      height: 40,
      x: 195,
      y: 55,
      toJSON: () => ({}),
    }));

    mockDivider2.getBoundingClientRect = jest.fn(() => ({
      left: 300,
      top: 55,
      right: 305,
      bottom: 95,
      width: 5,
      height: 40,
      x: 300,
      y: 55,
      toJSON: () => ({}),
    }));

    // Mock getComputedStyle
    window.getComputedStyle = jest.fn(() => ({
      borderLeftWidth: '2px',
      borderTopWidth: '2px',
      getPropertyValue: jest.fn(),
    })) as any;
  });

  it('calculates indicator position for middle segment', () => {
    const result = calculateIndicatorPosition({
      selectedButton: mockButton,
      container: mockContainer,
      selectedIndex: 1,
      totalChildren: 3,
      dividerRefs: [mockDivider1, mockDivider2],
    });

    expect(result).toEqual({
      left: 95, // 200 (button left) - 100 (container left) - 5 (left divider width)
      width: 110, // 100 (button width) + 5 (left divider) + 5 (right divider)
      top: -2, // -borderTop
      height: 44, // 40 (button height) + 2*2 (borderTop)
    });
  });

  it('calculates indicator position for first segment', () => {
    const result = calculateIndicatorPosition({
      selectedButton: mockButton,
      container: mockContainer,
      selectedIndex: 0,
      totalChildren: 3,
      dividerRefs: [mockDivider1, mockDivider2],
    });

    expect(result).toEqual({
      left: -2, // -borderWidth (first segment adjustment)
      width: 107, // 100 (button width) + 5 (right divider) + 2 (borderWidth)
      top: -2,
      height: 44,
    });
  });

  it('calculates indicator position for last segment', () => {
    const result = calculateIndicatorPosition({
      selectedButton: mockButton,
      container: mockContainer,
      selectedIndex: 2,
      totalChildren: 3,
      dividerRefs: [mockDivider1, mockDivider2],
    });

    expect(result).toEqual({
      left: 95, // 200 - 100 - 5 (left divider)
      width: 107, // 100 + 5 (left divider) + 2 (borderWidth for last segment)
      top: -2,
      height: 44,
    });
  });

  it('handles missing left divider', () => {
    const result = calculateIndicatorPosition({
      selectedButton: mockButton,
      container: mockContainer,
      selectedIndex: 1,
      totalChildren: 3,
      dividerRefs: [null, mockDivider2],
    });

    expect(result).toEqual({
      left: 100, // No left divider adjustment
      width: 105, // 100 + 5 (only right divider)
      top: -2,
      height: 44,
    });
  });

  it('handles missing right divider', () => {
    const result = calculateIndicatorPosition({
      selectedButton: mockButton,
      container: mockContainer,
      selectedIndex: 1,
      totalChildren: 3,
      dividerRefs: [mockDivider1, null],
    });

    expect(result).toEqual({
      left: 95, // 200 - 100 - 5
      width: 105, // 100 + 5 (only left divider)
      top: -2,
      height: 44,
    });
  });

  it('handles zero border width', () => {
    window.getComputedStyle = jest.fn(() => ({
      borderLeftWidth: '0px',
      borderTopWidth: '0px',
      getPropertyValue: jest.fn(),
    })) as any;

    const result = calculateIndicatorPosition({
      selectedButton: mockButton,
      container: mockContainer,
      selectedIndex: 0,
      totalChildren: 3,
      dividerRefs: [mockDivider1, mockDivider2],
    });

    // Use Object.is to handle -0 vs 0 comparison
    expect(result.left === 0 || Object.is(result.left, -0)).toBe(true);
    expect(result.top === 0 || Object.is(result.top, -0)).toBe(true);
    expect(result.width).toBe(105); // 100 + 5 (right divider) + 0 (no border)
    expect(result.height).toBe(40);
  });
});

describe('SegmentedControl Utils - measureButtonWidths', () => {
  let mockButtons: HTMLButtonElement[];

  beforeEach(() => {
    // Create mock buttons
    mockButtons = [
      document.createElement('button'),
      document.createElement('button'),
      document.createElement('button'),
    ];

    // Set initial styles and scrollWidth
    mockButtons.forEach((button, index) => {
      button.style.width = '100px';
      button.style.minWidth = '50px';
      Object.defineProperty(button, 'scrollWidth', {
        value: 80 + index * 20, // 80, 100, 120
        writable: true,
      });
      Object.defineProperty(button, 'offsetHeight', {
        value: 40,
        writable: true,
      });
    });
  });

  it('returns null for empty buttons array', () => {
    const result = measureButtonWidths({
      buttons: [],
      maxWidth: 200,
    });

    expect(result).toEqual({
      equalWidth: null,
      isConstrained: false,
    });
  });

  it('calculates equal width based on largest content', () => {
    const result = measureButtonWidths({
      buttons: mockButtons,
      maxWidth: 200,
    });

    expect(result).toEqual({
      equalWidth: 120, // Max of 80, 100, 120
      isConstrained: false,
    });
  });

  it('constrains width when maxWidth is smaller than content', () => {
    const result = measureButtonWidths({
      buttons: mockButtons,
      maxWidth: 100,
    });

    expect(result).toEqual({
      equalWidth: 100, // Constrained by maxWidth
      isConstrained: true, // 120 > 100
    });
  });

  it('handles numeric maxWidth', () => {
    const result = measureButtonWidths({
      buttons: mockButtons,
      maxWidth: 90,
    });

    expect(result).toEqual({
      equalWidth: 90,
      isConstrained: true,
    });
  });

  it('handles string maxWidth with units', () => {
    const result = measureButtonWidths({
      buttons: mockButtons,
      maxWidth: '110px',
    });

    expect(result).toEqual({
      equalWidth: 110,
      isConstrained: true, // 120 > 110
    });
  });

  it('handles undefined maxWidth as Infinity', () => {
    const result = measureButtonWidths({
      buttons: mockButtons,
      maxWidth: undefined,
    });

    expect(result).toEqual({
      equalWidth: 120,
      isConstrained: false,
    });
  });

  it('handles invalid string maxWidth', () => {
    const result = measureButtonWidths({
      buttons: mockButtons,
      maxWidth: 'invalid',
    });

    expect(result).toEqual({
      equalWidth: 120, // Falls back to Infinity
      isConstrained: false,
    });
  });

  it('restores original button styles after measurement', () => {
    const originalStyles = mockButtons.map((btn) => ({
      width: btn.style.width,
      minWidth: btn.style.minWidth,
    }));

    measureButtonWidths({
      buttons: mockButtons,
      maxWidth: 200,
    });

    mockButtons.forEach((button, index) => {
      expect(button.style.width).toBe(originalStyles[index].width);
      expect(button.style.minWidth).toBe(originalStyles[index].minWidth);
    });
  });

  it('sets button styles to auto during measurement', () => {
    const capturedStyles: Array<{ width: string; minWidth: string }> = [];

    // Spy on style setters
    mockButtons.forEach((button) => {
      const originalWidthDescriptor = Object.getOwnPropertyDescriptor(button.style, 'width');

      Object.defineProperty(button.style, 'width', {
        set: function (value: string) {
          if (value === 'auto') {
            capturedStyles.push({ width: value, minWidth: this.minWidth });
          }
          if (originalWidthDescriptor?.set) {
            originalWidthDescriptor.set.call(this, value);
          }
        },
        get: originalWidthDescriptor?.get,
      });
    });

    measureButtonWidths({
      buttons: mockButtons,
      maxWidth: 200,
    });

    // Should have set width to auto for all buttons
    expect(capturedStyles.length).toBeGreaterThan(0);
  });

  it('returns isConstrained false when content fits within maxWidth', () => {
    const result = measureButtonWidths({
      buttons: mockButtons,
      maxWidth: 150,
    });

    expect(result).toEqual({
      equalWidth: 120,
      isConstrained: false, // 120 < 150
    });
  });

  it('handles maxWidth exactly equal to content width', () => {
    const result = measureButtonWidths({
      buttons: mockButtons,
      maxWidth: 120,
    });

    expect(result).toEqual({
      equalWidth: 120,
      isConstrained: false, // 120 === 120 (not constrained)
    });
  });

  it('handles single button', () => {
    const result = measureButtonWidths({
      buttons: [mockButtons[0]],
      maxWidth: 200,
    });

    expect(result).toEqual({
      equalWidth: 80,
      isConstrained: false,
    });
  });
});
