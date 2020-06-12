/// <reference types="react" />
import { ExternalHeaderProps } from '../grid/Header';
import { Data, Schema, GridProps, fetchDataFn, RowData } from '../grid';
interface SyncProps {
    data: Data;
    schema: Schema;
}
interface AsyncProps {
    fetchData: fetchDataFn;
}
interface SharedTableProps {
    type?: GridProps['type'];
    size?: GridProps['size'];
    draggable?: boolean;
    withHeader?: boolean;
    headerProps?: ExternalHeaderProps;
    withCheckbox?: GridProps['withCheckbox'];
    showMenu?: GridProps['showMenu'];
    withPagination?: GridProps['withPagination'];
    paginationType?: GridProps['paginationType'];
    pageSize?: GridProps['pageSize'];
    loaderSchema?: GridProps['loaderSchema'];
    onRowClick?: GridProps['onRowClick'];
    onSelect?: (rowIndex: number[], selected: boolean, allSelected: RowData[]) => void;
}
declare type SyncTableProps = SyncProps & SharedTableProps;
declare type AsyncTableProps = AsyncProps & SharedTableProps;
export declare type TableProps = (AsyncTableProps | SyncTableProps);
export declare const Table: (props: TableProps) => JSX.Element;
export default Table;
