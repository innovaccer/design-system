/// <reference types="react" />
import { Data, Schema } from './Grid';
import { Grid } from '@/index';
export interface GridBodyProps {
    schema: Schema;
    data: Data;
    withCheckbox?: boolean;
    _this: Grid;
    offset: number;
    inView: number;
    avgRowHeight: number;
}
export declare const GridBody: (props: GridBodyProps) => JSX.Element;
export default GridBody;
