import * as React from 'react';
import { TEmptyStateSize } from "../../../common.type";
export declare type ContextProps = {
    size?: TEmptyStateSize;
    maxWidth?: number | string;
};
export declare const EmptyStateContext: React.Context<ContextProps>;
export default EmptyStateContext;
