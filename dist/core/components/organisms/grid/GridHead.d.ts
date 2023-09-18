import { onMenuChangeFn, onFilterChangeFn, updateColumnSchemaFunction, reorderColumnFunction } from "./Grid";
import { GridProps, CheckboxProps } from "../../../index.type";
export interface GridHeadProps {
    schema: GridProps['schema'];
    onSelectAll: CheckboxProps['onChange'];
    onMenuChange: onMenuChangeFn;
    onFilterChange: onFilterChangeFn;
    updateColumnSchema: updateColumnSchemaFunction;
    reorderColumn: reorderColumnFunction;
}
export declare const GridHead: (props: GridHeadProps) => JSX.Element;
export default GridHead;
