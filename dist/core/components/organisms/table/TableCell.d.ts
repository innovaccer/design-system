/// <reference types="react" />
import { StateSchema, StateData, TableSize, TableProps } from './Table';
export interface ImageProps {
    src: string;
    size?: number;
}
export interface StatusProps extends PartialCellProps {
    appearanceMapper?: TableProps['statusMapper'];
}
export interface PartialCellProps {
    data: StateData;
    schema: StateSchema;
    loading: boolean;
}
export declare const Image: (props: ImageProps) => JSX.Element;
export declare const AvatarCell: (props: PartialCellProps) => JSX.Element | null;
export interface TableCellProps extends PartialCellProps {
    size: TableSize;
    rowIndex: number;
    statusMapper?: TableProps['statusMapper'];
}
export declare const TableCell: {
    (props: TableCellProps): JSX.Element;
    displayName: string;
};
export default TableCell;
