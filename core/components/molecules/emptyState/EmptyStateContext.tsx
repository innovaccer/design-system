import * as React from 'react';
import { TEmptyStateSize } from '@/common.type';

export type ContextProps = {
  size?: TEmptyStateSize;
  maxWidth?: number | string;
};

export const EmptyStateContext = React.createContext<ContextProps>({});

export default EmptyStateContext;
