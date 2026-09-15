import * as React from 'react';
import { RowData, ColumnSchema, SortType } from './Grid';
import { GridHeadProps } from './GridHead';
interface SharedCellProps {
    schema: ColumnSchema;
    colIndex: number;
    nestedRowData?: React.ReactNode;
}
type HeaderCellProps = SharedCellProps & {
    onSelectAll: GridHeadProps['onSelectAll'];
    onMenuChange: GridHeadProps['onMenuChange'];
    onFilterChange: GridHeadProps['onFilterChange'];
    updateColumnSchema: GridHeadProps['updateColumnSchema'];
    reorderColumn: GridHeadProps['reorderColumn'];
    setIsDragged: React.Dispatch<React.SetStateAction<boolean>>;
};
type BodyCellProps = SharedCellProps & {
    data: RowData;
    rowIndex: number;
    expandedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};
export type HeaderCellRendererProps = HeaderCellProps & SharedCellProps & {
    sortingList: {
        name: ColumnSchema['name'];
        type: SortType;
    }[];
};
export type CellProps = Partial<HeaderCellProps> & Partial<BodyCellProps> & SharedCellProps & {
    isHead?: boolean;
    firstCell: boolean;
};
export declare const Cell: (props: CellProps) => React.JSX.Element | null;
export default Cell;
