import { RowData, Data, ColumnSchema, Schema, FetchDataOptions } from './Grid';
export declare const updateBatchData: (data: Data, rowIndexes: number[], dataUpdate: Partial<RowData>) => Data;
export declare function translateData(schema: ColumnSchema, data: RowData): RowData;
export declare const filterData: (schema: Schema | undefined, data: Data | undefined, filterList: FetchDataOptions['filterList']) => Data;
export declare const sortData: (schema: Schema | undefined, data: Data | undefined, sortingList: FetchDataOptions['sortingList']) => Data;
export declare const paginateData: (data: Data | undefined, page: number, pageSize: number) => Data;
