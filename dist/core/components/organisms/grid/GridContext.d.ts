import React from 'react';
import { GridProps } from "../../../index.type";
import { GridRef } from "./Grid";
declare type ContextProps = GridProps & {
    ref: GridRef;
};
declare const context: React.Context<ContextProps>;
export declare const GridProvider: React.Provider<ContextProps>;
export default context;
