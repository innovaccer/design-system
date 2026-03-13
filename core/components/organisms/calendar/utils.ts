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
  focusedRow: number;
  focusedCol: number;
  totalRows: number;
  monthIndex: number;
  onNavigate: (row: number, col: number) => void;
  onSelect: () => void;
  onPageUp: () => void;
  onPageDown: () => void;
  onShiftPageUp: () => void;
  onShiftPageDown: () => void;
  onEscape?: () => void;
}

/**
 * Handle keyboard events in the date view grid.
 * Returns true if the key was handled (caller should preventDefault).
 */
export const handleDateViewKeyDown = (params: HandleDateViewKeyDownParams): boolean => {
  const {
    event,
    container,
    focusedRow,
    focusedCol,
    totalRows,
    monthIndex,
    onNavigate,
    onSelect,
    onPageUp,
    onPageDown,
    onShiftPageUp,
    onShiftPageDown,
    onEscape,
  } = params;

  switch (event.key) {
    case 'ArrowUp': {
      const up = navigateDateGrid('up', focusedRow, focusedCol, totalRows);
      if (up) {
        event.preventDefault();
        onNavigate(up.row, up.col);
        return true;
      }
      break;
    }
    case 'ArrowDown': {
      const down = navigateDateGrid('down', focusedRow, focusedCol, totalRows);
      if (down) {
        event.preventDefault();
        onNavigate(down.row, down.col);
        return true;
      }
      break;
    }
    case 'ArrowLeft': {
      const left = navigateDateGrid('left', focusedRow, focusedCol, totalRows);
      if (left) {
        event.preventDefault();
        onNavigate(left.row, left.col);
        return true;
      }
      break;
    }
    case 'ArrowRight': {
      const right = navigateDateGrid('right', focusedRow, focusedCol, totalRows);
      if (right) {
        event.preventDefault();
        onNavigate(right.row, right.col);
        return true;
      }
      break;
    }
    case 'Home':
      event.preventDefault();
      onNavigate(focusedRow, 0);
      return true;
    case 'End':
      event.preventDefault();
      onNavigate(focusedRow, daysInRow - 1);
      return true;
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
      event.preventDefault();
      onSelect();
      return true;
    case ' ':
    case 'Spacebar':
      event.preventDefault();
      // Prevent auto-repeat: only process first keydown
      if (event.repeat) return true;
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
      break;
  }
  return false;
};

export interface HandleMonthViewKeyDownParams {
  event: React.KeyboardEvent;
  container: HTMLElement;
  focusedMonth: number;
  onNavigate: (month: number) => void;
  onSelect: (month: number) => void;
  onEscape?: () => void;
}

/**
 * Handle keyboard events in the month view grid (3x4).
 */
export const handleMonthViewKeyDown = (params: HandleMonthViewKeyDownParams): boolean => {
  const { event, container, focusedMonth, onNavigate, onSelect, onEscape } = params;

  const row = Math.floor(focusedMonth / monthsInRow);
  const col = focusedMonth % monthsInRow;
  const totalRows = Math.ceil(monthBlock / monthsInRow);

  switch (event.key) {
    case 'ArrowUp': {
      if (row > 0) {
        event.preventDefault();
        onNavigate(focusedMonth - monthsInRow);
        return true;
      }
      break;
    }
    case 'ArrowDown': {
      if (row < totalRows - 1) {
        event.preventDefault();
        onNavigate(focusedMonth + monthsInRow);
        return true;
      }
      break;
    }
    case 'ArrowLeft': {
      if (col > 0) {
        event.preventDefault();
        onNavigate(focusedMonth - 1);
        return true;
      }
      break;
    }
    case 'ArrowRight': {
      if (col < monthsInRow - 1) {
        event.preventDefault();
        onNavigate(focusedMonth + 1);
        return true;
      }
      break;
    }
    case 'Home':
      event.preventDefault();
      onNavigate(0);
      return true;
    case 'End':
      event.preventDefault();
      onNavigate(11);
      return true;
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
  return false;
};

export interface HandleYearViewKeyDownParams {
  event: React.KeyboardEvent;
  container: HTMLElement;
  focusedYearIndex: number;
  yearBlockStart: number;
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
  const { event, focusedYearIndex, onNavigate, onSelect, onPageUp, onPageDown, onEscape } = params;

  const row = Math.floor(focusedYearIndex / yearsInRow);
  const col = focusedYearIndex % yearsInRow;
  const totalRows = Math.ceil(yearBlockRange / yearsInRow);

  switch (event.key) {
    case 'ArrowUp': {
      if (row > 0) {
        event.preventDefault();
        onNavigate(focusedYearIndex - yearsInRow);
        return true;
      }
      break;
    }
    case 'ArrowDown': {
      if (row < totalRows - 1) {
        event.preventDefault();
        onNavigate(focusedYearIndex + yearsInRow);
        return true;
      }
      break;
    }
    case 'ArrowLeft': {
      if (col > 0) {
        event.preventDefault();
        onNavigate(focusedYearIndex - 1);
        return true;
      }
      break;
    }
    case 'ArrowRight': {
      if (col < yearsInRow - 1) {
        event.preventDefault();
        onNavigate(focusedYearIndex + 1);
        return true;
      }
      break;
    }
    case 'Home':
      event.preventDefault();
      onNavigate(0);
      return true;
    case 'End':
      event.preventDefault();
      onNavigate(yearBlockRange - 1);
      return true;
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
      onSelect(params.yearBlockStart + focusedYearIndex);
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
  return false;
};
