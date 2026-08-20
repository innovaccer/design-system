import * as React from 'react';
import { TEmptyStateSize } from '@/common.type';
export type ContextProps = {
    size?: TEmptyStateSize;
    maxWidth?: number | string;
};
export declare const EmptyStateContext: React.Context<ContextProps>;
export default EmptyStateContext;
