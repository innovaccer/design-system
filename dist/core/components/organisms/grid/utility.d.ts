import { Data, Schema } from "./Grid";
import { GridProps } from "../../../index.type";
export * from "./columnUtility";
export * from "./rowUtility";
export declare const moveToIndex: (arr: any[], from: number, to: number) => any[];
export declare const getTotalPages: (totalRecords: number, pageSize: number) => number;
export declare const getSelectAll: (data: Data) => {
    indeterminate: boolean;
    checked: boolean;
};
export declare const hasSchema: (schema: Schema) => boolean;
export declare const getSchema: (schema: GridProps['schema'], loading: GridProps['loading'], loaderSchema: GridProps['loaderSchema']) => GridProps['schema'];
export declare const getPluralSuffix: (count: number) => "" | "s";
