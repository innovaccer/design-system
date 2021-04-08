import { Grid } from "../../../index";
import { RowData, Schema } from "./Grid";
export interface GridRowProps {
    schema: Schema;
    data: RowData;
    withCheckbox?: boolean;
    _this: Grid;
    rowIndex: number;
    className?: string;
}
export declare const GridRow: {
    (props: GridRowProps): JSX.Element;
    defaultProps: {
        data: {};
    };
};
export default GridRow;
