import { RowData, GridProps } from "../grid";
export declare const getUpdatedData: (data: GridProps['data'], selectedList: [], uniqueColumnName?: string | undefined, isCancelSelection?: boolean | undefined, isSelectAll?: boolean | undefined) => RowData[];
export declare const removeDuplicate: (data: RowData[], uniqueColumnName?: string | undefined) => RowData[];
