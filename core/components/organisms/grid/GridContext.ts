import * as React from 'react';
import { GridProps } from '@/index.type';
import { GridRef } from './Grid';
import defaultProps from './defaultProps';

// type FetchDataFunction = ({ page, preFetchRows }: { page: number; preFetchRows: number }) => Promise<[]>;

type ContextProps = GridProps & {
  ref: GridRef;
  // updateVirtualData: FetchDataFunction;
};

const context = React.createContext<ContextProps>({
  ...defaultProps,
  updateVirtualData: async () => [],
  ref: null,
});

export const GridProvider = context.Provider;
export default context;
