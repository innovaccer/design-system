import * as React from 'react';
import { RowData, ColumnSchema } from "./Grid";
import { GridHeadProps } from "./GridHead";
interface SharedCellProps {
    schema: ColumnSchema;
    colIndex: number;
    nestedRowData?: React.ReactNode;
}
declare type HeaderCellProps = SharedCellProps & {
    onSelectAll: GridHeadProps['onSelectAll'];
    onMenuChange: GridHeadProps['onMenuChange'];
    onFilterChange: GridHeadProps['onFilterChange'];
    updateColumnSchema: GridHeadProps['updateColumnSchema'];
    reorderColumn: GridHeadProps['reorderColumn'];
    setIsDragged: React.Dispatch<React.SetStateAction<boolean>>;
};
declare type BodyCellProps = SharedCellProps & {
    data: RowData;
    rowIndex: number;
    expandedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};
export declare type HeaderCellRendererProps = HeaderCellProps & SharedCellProps;
export declare type CellProps = Partial<HeaderCellProps> & Partial<BodyCellProps> & SharedCellProps & {
    isHead?: boolean;
    firstCell: boolean;
};
export declare const Cell: (props: CellProps) => React.JSX.Element | null;
export default Cell;
