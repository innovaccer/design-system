/// <reference types="react" />
import { Grid } from '@/index';
import { RowData } from './Grid';
export interface GridExtendedRowProps {
    _this: Grid;
    data: RowData;
}
export declare const GridExtendedRow: (props: GridExtendedRowProps) => JSX.Element | null;
export default GridExtendedRow;
