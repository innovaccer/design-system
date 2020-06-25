import Grid, { Data, Schema } from './Grid';
export * from './columnUtility';
export * from './rowUtility';
export declare const moveToIndex: (arr: any[], from: number, to: number) => any[];
export declare const getTotalPages: (totalRecords: number, pageSize: number) => number;
export declare const getSelectAll: (data: Data) => {
    indeterminate: boolean;
    checked: boolean;
};
export declare const getInit: (_this: Grid) => boolean;
export declare const getSchema: (_this: Grid) => Schema;
