import { createContext } from 'react';
import { TEmptyStateSize } from '@/common.type';

export type ContextProps = {
  size?: TEmptyStateSize;
  maxWidth?: number | string;
};

export const EmptyStateContext = createContext<ContextProps>({});

export default EmptyStateContext;
