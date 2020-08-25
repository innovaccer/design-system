/// <reference types="react" />
import { ExternalHeaderProps } from "../grid/Header";
import { Data, Schema, fetchDataFunction } from "../grid";
import { TableProps } from "../table";
import { BaseProps } from "../../../utils/types";
interface SyncProps {
    data?: Data;
    schema?: Schema;
    loading?: boolean;
    error?: boolean;
}
interface AsyncProps {
    fetchData?: fetchDataFunction;
}
interface SharedListProps extends BaseProps {
    type?: TableProps['type'];
    size?: TableProps['size'];
    nestedRows?: TableProps['nestedRows'];
    nestedRowRenderer?: TableProps['nestedRowRenderer'];
    withHeader?: boolean;
    headerOptions?: ExternalHeaderProps;
    withCheckbox?: TableProps['withCheckbox'];
    withPagination?: TableProps['withPagination'];
    paginationType?: TableProps['paginationType'];
    pageSize?: TableProps['pageSize'];
    loaderSchema?: TableProps['loaderSchema'];
    multipleSorting?: boolean;
    sortingList?: TableProps['sortingList'];
    filterList?: TableProps['filterList'];
    errorTemplate?: TableProps['errorTemplate'];
    onRowClick?: TableProps['onRowClick'];
    onSelect?: TableProps['onSelect'];
    onPageChange?: TableProps['onPageChange'];
    headCellTooltip?: TableProps['headCellTooltip'];
    separator?: TableProps['separator'];
}
declare type SyncListProps = SyncProps & SharedListProps;
declare type AsyncListProps = AsyncProps & SharedListProps;
export declare type ListProps = (AsyncListProps & SyncListProps);
export declare const List: (props: ListProps) => JSX.Element;
export default List;
