import * as React from 'react';
import { RowData, ColumnSchema } from "./Grid";
import { GridHeadProps } from "./GridHead";
interface SharedCellProps {
    schema: ColumnSchema;
    colIndex: number;
}
declare type HeaderCellProps = SharedCellProps & {
    onSelectAll: GridHeadProps['onSelectAll'];
    onMenuChange: GridHeadProps['onMenuChange'];
    onFilterChange: GridHeadProps['onFilterChange'];
    updateColumnSchema: GridHeadProps['updateColumnSchema'];
    reorderColumn: GridHeadProps['reorderColumn'];
};
declare type BodyCellProps = SharedCellProps & {
    data: RowData;
    rowIndex: number;
    expandedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};
export declare type CellProps = Partial<HeaderCellProps> & Partial<BodyCellProps> & SharedCellProps & {
    isHead?: boolean;
    firstCell: boolean;
};
export declare const Cell: (props: CellProps) => JSX.Element | null;
export default Cell;
