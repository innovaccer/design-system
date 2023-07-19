import { GridState, onSelectFn, Schema, updatePrevPageInfoFunction } from "./Grid";
export interface GridBodyProps {
    schema: Schema;
    onSelect: onSelectFn;
    prevPageInfo: GridState['prevPageInfo'];
    updatePrevPageInfo: updatePrevPageInfoFunction;
}
export declare const GridBody: (props: GridBodyProps) => any;
export default GridBody;
