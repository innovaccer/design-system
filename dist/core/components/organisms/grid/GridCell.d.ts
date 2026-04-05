import * as React from 'react';
import { StatusHintProps } from '@/index.type';
import { ColumnSchema, RowData, GridSize } from './Grid';
export interface CellData {
    title: string;
    metaList?: string[];
    icon?: string;
    image?: string;
    firstName?: string;
    lastName?: string;
    statusAppearance?: StatusHintProps['appearance'];
    highlightCell?: boolean;
}
export interface PartialCellProps {
    data: RowData;
    schema: ColumnSchema;
    loading?: boolean;
    expanded?: boolean;
}
export interface GridCellProps extends PartialCellProps {
    size?: GridSize;
    rowIndex?: number;
    colIndex?: number;
    searchTerm?: string;
}
export declare const GridCell: {
    (props: GridCellProps): React.JSX.Element | null;
    displayName: string;
};
export default GridCell;
