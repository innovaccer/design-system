import { StatusHintProps } from "../../../index.type";
import { ColumnSchema, RowData, GridSize } from "./Grid";
export interface CellData {
    title: string;
    metaList?: string[];
    icon?: string;
    image?: string;
    firstName?: string;
    lastName?: string;
    statusAppearance?: StatusHintProps['appearance'];
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
}
export declare const GridCell: {
    (props: GridCellProps): JSX.Element | null;
    displayName: string;
};
export default GridCell;
