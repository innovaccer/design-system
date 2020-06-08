import { RowData, Data, ColumnSchema, Schema, FetchDataOptions } from './Grid';
export declare const updateBatchData: (data: Data, rowIndexes: number[], dataUpdate: Partial<RowData>) => Data;
export declare function translateData(schema: ColumnSchema, data: RowData): RowData;
export declare const filterData: (schema: Schema, data: Data, filterList: FetchDataOptions['filterList']) => Data;
export declare const sortData: (schema: Schema, data: Data, sortingList: FetchDataOptions['sortingList']) => Data;
export declare const paginateData: (data: Data, page: number, pageSize: number) => RowData[];
