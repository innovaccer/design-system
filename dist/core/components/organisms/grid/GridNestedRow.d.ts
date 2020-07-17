/// <reference types="react" />
import { Grid } from '@/index';
import { GridProps } from '@/index.type';
import { RowData } from './Grid';
export interface GridNestedRowProps {
    _this: Grid;
    data: RowData;
    rowIndex: number;
}
export interface NestedRowProps {
    rowIndex: number;
    data: RowData;
    schema: GridProps['schema'];
    loading?: boolean;
}
export declare const GridNestedRow: (props: GridNestedRowProps) => import("react").ReactElement<any, any> | null;
export default GridNestedRow;
