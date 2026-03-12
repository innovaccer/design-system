import * as React from 'react';
import { GridProvider, GridKeyboardContext } from './GridContext';
import { useGridKeyboard } from './useGridKeyboard';
import { GridProps } from '@/index.type';
import { RowData } from './Grid';

export interface GridKeyboardProviderProps {
  baseValue: React.ComponentProps<typeof GridProvider>['value'];
  totalRows: number;
  totalCols: number;
  data: RowData[];
  type: GridProps['type'];
  onRowClick?: GridProps['onRowClick'];
  children: React.ReactNode;
}

/**
 * Provides keyboard navigation context for the Grid.
 * Uses roving tabindex and WAI-ARIA Grid pattern.
 */
export const GridKeyboardProvider = (props: GridKeyboardProviderProps) => {
  const {
    baseValue,
    totalRows,
    totalCols,
    data,
    type,
    onRowClick,
    children,
  } = props;

  const onActivate = React.useCallback(
    (rowIndex: number, colIndex: number) => {
      if (type === 'resource' && onRowClick && data[rowIndex]) {
        onRowClick(data[rowIndex], rowIndex);
      }
    },
    [type, onRowClick, data]
  );

  const keyboard = useGridKeyboard(totalRows, totalCols, onActivate);

  const gridKeyboard: GridKeyboardContext = {
    focusedCell: keyboard.focusedCell,
    setFocusedCell: keyboard.setFocusedCell,
    handleGridCellKeyDown: keyboard.handleCellKeyDown,
    gridTotalRows: keyboard.totalRows,
    gridTotalCols: keyboard.totalCols,
  };

  const mergedValue = {
    ...baseValue,
    gridKeyboard,
  };

  return <GridProvider value={mergedValue}>{children}</GridProvider>;
};

export default GridKeyboardProvider;
