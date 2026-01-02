export interface IndicatorDimensions {
  left: number;
  width: number;
  top: number;
  height: number;
}

export interface CalculateIndicatorPositionParams {
  selectedButton: HTMLButtonElement;
  container: HTMLDivElement;
  selectedIndex: number;
  totalChildren: number;
  dividerRefs: Array<HTMLSpanElement | null>;
}

/**
 * Calculates the position and dimensions of the selection indicator
 * based on the selected button and surrounding dividers.
 */
export const calculateIndicatorPosition = (params: CalculateIndicatorPositionParams): IndicatorDimensions => {
  const { selectedButton, container, selectedIndex, totalChildren, dividerRefs } = params;

  const containerStyles = window.getComputedStyle(container);
  const borderWidth = parseFloat(containerStyles.borderLeftWidth) || 0;
  const borderTop = parseFloat(containerStyles.borderTopWidth) || 0;

  const containerRect = container.getBoundingClientRect();
  const buttonRect = selectedButton.getBoundingClientRect();

  let left = buttonRect.left - containerRect.left;
  let width = buttonRect.width;
  const top = -borderTop;
  const height = buttonRect.height + borderTop * 2;

  // Include divider widths in indicator calculation
  if (selectedIndex > 0) {
    const leftDivider = dividerRefs[selectedIndex - 1];
    if (leftDivider) {
      const dividerRect = leftDivider.getBoundingClientRect();
      left -= dividerRect.width;
      width += dividerRect.width;
    }
  }

  if (selectedIndex < totalChildren - 1) {
    const rightDivider = dividerRefs[selectedIndex];
    if (rightDivider) {
      width += rightDivider.getBoundingClientRect().width;
    }
  }

  // Adjust for borders on first and last segments
  if (selectedIndex === 0) {
    left = -borderWidth;
    width += borderWidth;
  }

  if (selectedIndex === totalChildren - 1) {
    width += borderWidth;
  }

  return { left, width, top, height };
};

export interface MeasureButtonWidthsParams {
  buttons: HTMLButtonElement[];
  maxWidth?: string | number;
}

export interface MeasureButtonWidthsResult {
  equalWidth: number | null;
  isConstrained: boolean;
}

/**
 * Measures the natural content width of all buttons and returns
 * the maximum width (constrained by maxWidth if provided).
 */
export const measureButtonWidths = (params: MeasureButtonWidthsParams): MeasureButtonWidthsResult => {
  const { buttons, maxWidth } = params;

  if (buttons.length === 0) {
    return { equalWidth: null, isConstrained: false };
  }

  // Store original styles
  const originalStyles = buttons.map((button) => ({
    width: button.style.width,
    minWidth: button.style.minWidth,
  }));

  // Temporarily reset to auto to measure natural content width
  buttons.forEach((button) => {
    button.style.width = 'auto';
    button.style.minWidth = 'auto';
  });

  // Force layout recalculation
  void buttons[0]?.offsetHeight;

  // Measure natural widths
  const widths = buttons.map((button) => button.scrollWidth);
  const maxContentWidth = Math.max(...widths);

  // Restore original styles
  buttons.forEach((button, index) => {
    button.style.width = originalStyles[index].width;
    button.style.minWidth = originalStyles[index].minWidth;
  });

  // Calculate final width
  if (maxContentWidth > 0) {
    const maxWidthValue = typeof maxWidth === 'number' ? maxWidth : parseFloat(maxWidth || '') || Infinity;
    const finalWidth = Math.min(maxContentWidth, maxWidthValue);
    const constrained = maxWidth !== undefined && maxContentWidth > maxWidthValue;
    return { equalWidth: finalWidth, isConstrained: constrained };
  }

  return { equalWidth: null, isConstrained: false };
};
