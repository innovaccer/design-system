import { Data } from './Grid';
export * from './columnUtility';
export * from './rowUtility';
export declare const moveToIndex: (arr: any[], from: number, to: number) => any[];
export declare const getTotalPages: (totalRecords: number, pageSize: number) => number;
export declare const getSelectAll: (data: Data) => {
    indeterminate: boolean;
    checked: boolean;
};
