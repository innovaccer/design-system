import { RowData, GridProps } from '../grid';
export declare const getUpdatedData: (data: GridProps["data"], selectedList: [], uniqueColumnName?: string, isCancelSelection?: boolean, isSelectAll?: boolean) => RowData[];
export declare const removeDuplicate: (data: RowData[], uniqueColumnName?: string) => RowData[];
