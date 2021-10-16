import * as React from 'react';
import { GridProps } from "../../../index.type";
import { RowData } from "./Grid";
export interface GridNestedRowProps {
    data: RowData;
    rowIndex: number;
}
export interface NestedRowProps {
    rowIndex: number;
    data: RowData;
    schema: GridProps['schema'];
    loading: GridProps['loading'];
}
export declare const GridNestedRow: (props: GridNestedRowProps) => React.ReactElement<any, any> | null;
export default GridNestedRow;
