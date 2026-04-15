import * as React from 'react';
import { GridProps } from '@/index.type';
import { GridRef } from './Grid';
import defaultProps from './defaultProps';

type ContextProps = GridProps & {
  ref: GridRef;
  gridId: string;
  isSortingListUpdated: boolean;
  updateIsSortingListUpdated: () => void;
  mainRemainder?: number | null;
  onResizeEnd?: () => void;
};
const context = React.createContext<ContextProps>({
  ...defaultProps,
  ref: null,
  gridId: '',
  isSortingListUpdated: false,
  updateIsSortingListUpdated: () => {},
});

export const GridProvider = context.Provider;
export default context;
