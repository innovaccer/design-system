/// <reference types="react" />
import { Schema } from './Grid';
import { Grid } from '@/index';
export interface GridHeadProps {
    schema: Schema;
    draggable?: boolean;
    withCheckbox?: boolean;
    _this: Grid;
}
export declare const GridHead: (props: GridHeadProps) => JSX.Element;
export default GridHead;
