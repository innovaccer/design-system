import * as React from 'react';
import { GridProps } from '@/index.type';
import { GridRef } from './Grid';
import defaultProps from './defaultProps';

export interface FocusedCell {
  rowIndex: number;
  colIndex: number;
}

export interface GridKeyboardContext {
  focusedCell: FocusedCell | null;
  setFocusedCell: (rowIndex: number, colIndex: number) => void;
  handleGridCellKeyDown: (e: React.KeyboardEvent, rowIndex: number, colIndex: number) => void;
  gridTotalRows: number;
  gridTotalCols: number;
}

type ContextProps = GridProps & {
  ref: GridRef;
  isSortingListUpdated: boolean;
  updateIsSortingListUpdated: () => void;
  gridKeyboard?: GridKeyboardContext;
};
const context = React.createContext<ContextProps>({
  ...defaultProps,
  ref: null,
  isSortingListUpdated: false,
  updateIsSortingListUpdated: () => {},
});

export const GridProvider = context.Provider;
export default context;
