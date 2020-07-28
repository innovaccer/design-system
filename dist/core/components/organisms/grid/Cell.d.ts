import * as React from 'react';
import { RowData, ColumnSchema } from "./Grid";
import { Grid } from "../../../index";
interface SharedCellProps {
    _this: Grid;
    schema: ColumnSchema;
}
declare type HeaderCellProps = SharedCellProps & {
    colIndex: number;
    draggable: boolean;
};
declare type BodyCellProps = SharedCellProps & {
    data: RowData;
    rowIndex: number;
    colIndex: number;
    expandedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};
export declare type CellProps = (HeaderCellProps | BodyCellProps) & {
    head?: boolean;
    firstCell: boolean;
};
export declare const Cell: (props: CellProps) => JSX.Element | null;
export default Cell;
