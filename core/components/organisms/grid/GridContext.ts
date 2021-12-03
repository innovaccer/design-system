import * as React from 'react';
import { GridProps } from '@/index.type';
import { GridRef } from './Grid';
import defaultProps from './defaultProps';

type ContextProps = GridProps & {
  ref: GridRef;
};
const context = React.createContext<ContextProps>({
  ...defaultProps,
  ref: null,
});

export const GridProvider = context.Provider;
export default context;
