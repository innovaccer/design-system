import { Data, Schema } from "./Grid";
import { Grid } from "../../../index";
export interface GridBodyProps {
    schema: Schema;
    data: Data;
    withCheckbox?: boolean;
    _this: Grid;
}
export declare const GridBody: (props: GridBodyProps) => any;
export default GridBody;
