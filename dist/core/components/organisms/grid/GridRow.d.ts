import { Grid } from "../../../index";
import { RowData, Schema } from "./Grid";
export interface GridRowProps {
    schema: Schema;
    data: RowData;
    withCheckbox?: boolean;
    _this: Grid;
    rowIndex: number;
}
export declare const GridRow: (props: GridRowProps) => JSX.Element;
export default GridRow;
