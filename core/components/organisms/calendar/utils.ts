import * as React from 'react';
import config from './config';

const { daysInRow, monthBlock, monthsInRow, yearBlockRange, yearsInRow } = config;

/**
 * Data attribute for calendar date cells (used for keyboard navigation)
 */
export const DATE_CELL_SELECTOR = '[data-calendar-date-cell]';

/**
 * Data attribute for calendar month cells
 */
export const MONTH_CELL_SELECTOR = '[data-calendar-month-cell]';

/**
 * Data attribute for calendar year cells
 */
export const YEAR_CELL_SELECTOR = '[data-calendar-year-cell]';

export interface FocusedCell {
  row: number;
  col: number;
}

/**
 * Focus a date cell at the given row and column within the calendar container.
 * Used for date view grid navigation.
 * When monthIndex is provided, scopes to that calendar's date grid (for monthsInView > 1).
 */
export const focusDateCell = (container: HTMLElement, row: number, col: number, monthIndex?: number): boolean => {
  const grid =
    monthIndex !== undefined
      ? container.querySelector(`[data-calendar-index="${monthIndex}"]`)
      : container.querySelector('[data-calendar-index]') || container;
  if (!grid) return false;

  const cell = grid.querySelector(`${DATE_CELL_SELECTOR}[data-row="${row}"][data-col="${col}"]`) as HTMLElement | null;
  if (cell && !(cell as HTMLButtonElement).disabled) {
    cell.focus({ preventScroll: true });
    return true;
  }
  return false;
};

/**
 * Focus a month cell at the given index (0-11) within the calendar container.
 */
export const focusMonthCell = (container: HTMLElement, monthIndex: number): boolean => {
  const cell = container.querySelector(`${MONTH_CELL_SELECTOR}[data-month="${monthIndex}"]`) as HTMLElement | null;
  if (cell && !(cell as HTMLButtonElement).disabled) {
    cell.focus({ preventScroll: true });
    return true;
  }
  return false;
};

/**
 * Focus a year cell at the given index (0-11) within the year block.
 */
export const focusYearCell = (container: HTMLElement, yearIndex: number): boolean => {
  const cell = container.querySelector(`${YEAR_CELL_SELECTOR}[data-year-index="${yearIndex}"]`) as HTMLElement | null;
  if (cell && !(cell as HTMLButtonElement).disabled) {
    cell.focus({ preventScroll: true });
    return true;
  }
  return false;
};

/**
 * Get the row and column of the currently focused date cell.
 */
export const getFocusedDateCell = (container: HTMLElement): FocusedCell | null => {
  const focused = container.querySelector(`${DATE_CELL_SELECTOR}:focus`);
  if (!focused) return null;
  const row = focused.getAttribute('data-row');
  const col = focused.getAttribute('data-col');
  if (row !== null && col !== null) {
    return { row: parseInt(row, 10), col: parseInt(col, 10) };
  }
  return null;
};

/**
 * Compute next row/col for arrow navigation in date grid.
 * Does not skip disabled cells - that's handled by the caller.
 */
export const navigateDateGrid = (
  direction: 'up' | 'down' | 'left' | 'right',
  row: number,
  col: number,
  totalRows: number
): { row: number; col: number } | null => {
  switch (direction) {
    case 'up':
      return row > 0 ? { row: row - 1, col } : null;
    case 'down':
      return row < totalRows - 1 ? { row: row + 1, col } : null;
    case 'left':
      return col > 0 ? { row, col: col - 1 } : null;
    case 'right':
      return col < daysInRow - 1 ? { row, col: col + 1 } : null;
    default:
      return null;
  }
};

/**
 * Format date for aria-label (e.g., "March 12, 2026")
 */
export const formatDateAriaLabel = (d: Date): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
};

export interface HandleDateViewKeyDownParams {
  event: React.KeyboardEvent;
  container: HTMLElement;
  focusedDate: Date;
  startOfWeekIndex?: number;
  isDateDisabled?: (d: Date) => boolean;
  onNavigate: (newDate: Date) => void;
  onSelect: () => void;
  onPageUp: () => void;
  onPageDown: () => void;
  onShiftPageUp: () => void;
  onShiftPageDown: () => void;
  onEscape?: () => void;
}

/**
 * Handle keyboard events in the date view grid using Date Math.
 * Returns true if the key was handled (caller should preventDefault).
 */
export const handleDateViewKeyDown = (params: HandleDateViewKeyDownParams): boolean => {
  const {
    event,
    focusedDate,
    startOfWeekIndex = 0,
    isDateDisabled,
    onNavigate,
    onSelect,
    onPageUp,
    onPageDown,
    onShiftPageUp,
    onShiftPageDown,
    onEscape,
  } = params;

  let newDate: Date | null = null;
  const currentDayIndex = focusedDate.getDay();
  const visualColumnIndex = (currentDayIndex - startOfWeekIndex + 7) % 7;

  switch (event.key) {
    case 'ArrowUp':
      newDate = new Date(focusedDate);
      newDate.setDate(focusedDate.getDate() - 7);
      break;
    case 'ArrowDown':
      newDate = new Date(focusedDate);
      newDate.setDate(focusedDate.getDate() + 7);
      break;
    case 'ArrowLeft':
      newDate = new Date(focusedDate);
      newDate.setDate(focusedDate.getDate() - 1);
      break;
    case 'ArrowRight':
      newDate = new Date(focusedDate);
      newDate.setDate(focusedDate.getDate() + 1);
      break;
    case 'Home':
      newDate = new Date(focusedDate);
      newDate.setDate(focusedDate.getDate() - visualColumnIndex);
      break;
    case 'End':
      newDate = new Date(focusedDate);
      newDate.setDate(focusedDate.getDate() + (6 - visualColumnIndex));
      break;
    case 'PageUp':
      event.preventDefault();
      if (event.shiftKey) {
        onShiftPageUp();
      } else {
        onPageUp();
      }
      return true;
    case 'PageDown':
      event.preventDefault();
      if (event.shiftKey) {
        onShiftPageDown();
      } else {
        onPageDown();
      }
      return true;
    case 'Enter':
    case ' ':
    case 'Spacebar':
      event.preventDefault();
      if (event.repeat) return true;
      if (isDateDisabled && isDateDisabled(focusedDate)) return true;
      onSelect();
      return true;
    case 'Escape':
      if (onEscape) {
        event.preventDefault();
        onEscape();
        return true;
      }
      break;
    default:
      return false;
  }

  if (newDate) {
    if (isNaN(newDate.getTime())) {
      return false;
    }

    // Check if newDate exceeds minDate or maxDate limits
    if (isDateDisabled && isDateDisabled(newDate)) {
      event.preventDefault();
      return true;
    }

    if (newDate) {
      event.preventDefault();
      onNavigate(newDate);
      return true;
    }
  }

  return false;
};

export interface HandleMonthViewKeyDownParams {
  event: React.KeyboardEvent;
  container: HTMLElement;
  focusedMonth: number;
  isMonthDisabled?: (month: number) => boolean;
  onNavigate: (month: number) => void;
  onSelect: (month: number) => void;
  onEscape?: () => void;
}

/**
 * Handle keyboard events in the month view grid (3x4).
 */
export const handleMonthViewKeyDown = (params: HandleMonthViewKeyDownParams): boolean => {
  const { event, focusedMonth, isMonthDisabled, onNavigate, onSelect, onEscape } = params;

  const row = Math.floor(focusedMonth / monthsInRow);
  const col = focusedMonth % monthsInRow;
  const totalRows = Math.ceil(monthBlock / monthsInRow);

  let nextMonth: number | null = null;

  switch (event.key) {
    case 'ArrowUp': {
      if (row > 0) nextMonth = focusedMonth - monthsInRow;
      break;
    }
    case 'ArrowDown': {
      if (row < totalRows - 1) nextMonth = focusedMonth + monthsInRow;
      break;
    }
    case 'ArrowLeft': {
      if (col > 0) nextMonth = focusedMonth - 1;
      break;
    }
    case 'ArrowRight': {
      if (col < monthsInRow - 1) nextMonth = focusedMonth + 1;
      break;
    }
    case 'Home':
      nextMonth = 0;
      break;
    case 'End':
      nextMonth = 11;
      break;
    case 'Enter':
    case ' ':
    case 'Spacebar':
      event.preventDefault();
      // Prevent auto-repeat: only process first keydown
      if (event.repeat) return true;
      onSelect(focusedMonth);
      return true;
    case 'Escape':
      if (onEscape) {
        event.preventDefault();
        onEscape();
        return true;
      }
      break;
    default:
      break;
  }

  if (nextMonth !== null) {
    if (isMonthDisabled && isMonthDisabled(nextMonth)) {
      event.preventDefault();
      return true;
    }
    event.preventDefault();
    onNavigate(nextMonth);
    return true;
  }

  return false;
};

export interface HandleYearViewKeyDownParams {
  event: React.KeyboardEvent;
  container: HTMLElement;
  focusedYearIndex: number;
  yearBlockStart: number;
  isYearDisabled?: (year: number) => boolean;
  onNavigate: (yearIndex: number) => void;
  onSelect: (year: number) => void;
  onPageUp: () => void;
  onPageDown: () => void;
  onEscape?: () => void;
}

/**
 * Handle keyboard events in the year view grid.
 * focusedYearIndex is the offset within the current 12-year block (0-11).
 */
export const handleYearViewKeyDown = (params: HandleYearViewKeyDownParams): boolean => {
  const {
    event,
    focusedYearIndex,
    yearBlockStart,
    isYearDisabled,
    onNavigate,
    onSelect,
    onPageUp,
    onPageDown,
    onEscape,
  } = params;

  const row = Math.floor(focusedYearIndex / yearsInRow);
  const col = focusedYearIndex % yearsInRow;
  const totalRows = Math.ceil(yearBlockRange / yearsInRow);

  let nextYearIndex: number | null = null;

  switch (event.key) {
    case 'ArrowUp': {
      if (row > 0) nextYearIndex = focusedYearIndex - yearsInRow;
      break;
    }
    case 'ArrowDown': {
      if (row < totalRows - 1) nextYearIndex = focusedYearIndex + yearsInRow;
      break;
    }
    case 'ArrowLeft': {
      if (col > 0) nextYearIndex = focusedYearIndex - 1;
      break;
    }
    case 'ArrowRight': {
      if (col < yearsInRow - 1) nextYearIndex = focusedYearIndex + 1;
      break;
    }
    case 'Home':
      nextYearIndex = 0;
      break;
    case 'End':
      nextYearIndex = yearBlockRange - 1;
      break;
    case 'PageUp':
      event.preventDefault();
      onPageUp();
      return true;
    case 'PageDown':
      event.preventDefault();
      onPageDown();
      return true;
    case 'Enter':
    case ' ':
    case 'Spacebar':
      event.preventDefault();
      // Prevent auto-repeat: only process first keydown
      if (event.repeat) return true;
      onSelect(yearBlockStart + focusedYearIndex);
      return true;
    case 'Escape':
      if (onEscape) {
        event.preventDefault();
        onEscape();
        return true;
      }
      break;
    default:
      break;
  }

  if (nextYearIndex !== null) {
    if (isYearDisabled && isYearDisabled(yearBlockStart + nextYearIndex)) {
      event.preventDefault();
      return true;
    }
    event.preventDefault();
    onNavigate(nextYearIndex);
    return true;
  }

  return false;
};
