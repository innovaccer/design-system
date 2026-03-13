import * as React from 'react';

export interface FocusedCell {
  rowIndex: number;
  colIndex: number;
}

export interface GridKeyboardConfig {
  focusedCell: FocusedCell | null;
  setFocusedCell: (rowIndex: number, colIndex: number) => void;
  handleCellKeyDown: (e: React.KeyboardEvent, rowIndex: number, colIndex: number) => void;
  totalRows: number;
  totalCols: number;
}

/**
 * Hook to handle WAI-ARIA Grid keyboard navigation.
 * Implements roving tabindex pattern with arrow keys, Home/End, Ctrl+Home/End.
 */
export function useGridKeyboard(
  totalRows: number,
  totalCols: number,
  onActivate?: (rowIndex: number, colIndex: number) => void
): GridKeyboardConfig {
  const [focusedCell, setFocusedCellState] = React.useState<FocusedCell | null>(null);

  const setFocusedCell = React.useCallback((rowIndex: number, colIndex: number) => {
    const safeRow = Math.max(0, Math.min(rowIndex, totalRows - 1));
    const safeCol = Math.max(0, Math.min(colIndex, totalCols - 1));
    setFocusedCellState({ rowIndex: safeRow, colIndex: safeCol });
  }, [totalRows, totalCols]);

  const handleCellKeyDown = React.useCallback(
    (e: React.KeyboardEvent, rowIndex: number, colIndex: number) => {
      let handled = false;
      let nextRow = rowIndex;
      let nextCol = colIndex;

      switch (e.key) {
        case 'ArrowDown':
          nextRow = Math.min(rowIndex + 1, totalRows - 1);
          handled = nextRow !== rowIndex;
          break;
        case 'ArrowUp':
          nextRow = Math.max(rowIndex - 1, 0);
          handled = nextRow !== rowIndex;
          break;
        case 'ArrowLeft':
          nextCol = Math.max(colIndex - 1, 0);
          handled = nextCol !== colIndex;
          break;
        case 'ArrowRight':
          nextCol = Math.min(colIndex + 1, totalCols - 1);
          handled = nextCol !== colIndex;
          break;
        case 'Home':
          if (e.ctrlKey || e.metaKey) {
            nextRow = 0;
            nextCol = 0;
          } else {
            nextCol = 0;
          }
          handled = true;
          break;
        case 'End':
          if (e.ctrlKey || e.metaKey) {
            nextRow = totalRows - 1;
            nextCol = totalCols - 1;
          } else {
            nextCol = totalCols - 1;
          }
          handled = true;
          break;
        case 'Enter':
        case ' ':
          if (onActivate) {
            e.preventDefault();
            onActivate(rowIndex, colIndex);
          }
          return;
        default:
          break;
      }

      if (handled) {
        e.preventDefault();
        setFocusedCellState({ rowIndex: nextRow, colIndex: nextCol });
        // Focus will be applied via useEffect when tabIndex switches
      }
    },
    [totalRows, totalCols, onActivate]
  );

  return {
    focusedCell,
    setFocusedCell,
    handleCellKeyDown,
    totalRows,
    totalCols,
  };
}
