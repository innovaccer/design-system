import * as React from 'react';
import { GridProps } from "../../../index.type";
import { RowData } from "./Grid";
export interface GridNestedRowProps {
    data: RowData;
    rowIndex: number;
    expanded?: boolean;
}
export interface NestedRowProps {
    rowIndex: number;
    data: RowData;
    schema: GridProps['schema'];
    loading: GridProps['loading'];
    expanded?: boolean;
}
export declare const GridNestedRow: (props: GridNestedRowProps) => React.ReactElement<any, any> | null;
export default GridNestedRow;
