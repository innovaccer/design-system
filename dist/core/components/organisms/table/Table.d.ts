import * as React from 'react';
import { ExternalHeaderProps, updateSearchTermFunction, HeaderProps } from "../grid/Header";
import { Data, onSelectFunction, onSelectAllFunction, GridProps, fetchDataFunction, RowData, updateSchemaFunction, updateSortingListFunction, updateFilterListFunction } from "../grid";
import { BaseProps } from "../../../utils/types";
import { PaginationProps } from "../../molecules/pagination";
interface SyncProps {
    data: GridProps['data'];
    schema: GridProps['schema'];
    loading: GridProps['loading'];
    error: GridProps['error'];
    onSearch?: (data: Data, searchTerm: string) => Data;
}
interface AsyncProps {
    fetchData?: fetchDataFunction;
}
interface SharedTableProps extends BaseProps {
    showHead: GridProps['showHead'];
    type: GridProps['type'];
    size: GridProps['size'];
    draggable: GridProps['draggable'];
    nestedRows?: GridProps['nestedRows'];
    nestedRowRenderer?: GridProps['nestedRowRenderer'];
    withHeader?: boolean;
    headerOptions?: ExternalHeaderProps;
    withCheckbox?: GridProps['withCheckbox'];
    showMenu?: GridProps['showMenu'];
    withPagination: GridProps['withPagination'];
    page: GridProps['page'];
    paginationType: PaginationProps['type'];
    pageSize: GridProps['pageSize'];
    loaderSchema: GridProps['loaderSchema'];
    multipleSorting: boolean;
    sortingList: GridProps['sortingList'];
    filterList: GridProps['filterList'];
    errorTemplate?: GridProps['errorTemplate'];
    onRowClick?: GridProps['onRowClick'];
    onSelect?: (rowIndexes: number[], selected: boolean, allSelected: RowData[], selectAll?: boolean) => void;
    onPageChange?: PaginationProps['onPageChange'];
    headCellTooltip?: GridProps['headCellTooltip'];
    separator?: GridProps['headCellTooltip'];
}
export declare type SyncTableProps = SyncProps & SharedTableProps;
export declare type AsyncTableProps = AsyncProps & SharedTableProps;
export declare type TableProps = (AsyncTableProps & SyncTableProps);
interface TableState {
    async: boolean;
    data: GridProps['data'];
    schema: GridProps['schema'];
    sortingList: GridProps['sortingList'];
    filterList: GridProps['filterList'];
    page: GridProps['page'];
    totalRecords: GridProps['totalRecords'];
    selectAll: GridProps['selectAll'];
    searchTerm: HeaderProps['searchTerm'];
    loading: GridProps['loading'];
    error: GridProps['error'];
}
export declare const defaultProps: {
    type: string;
    size: string;
    showHead: boolean;
    showMenu: boolean;
    multipleSorting: boolean;
    headerOptions: {};
    withPagination: boolean;
    paginationType: string;
    page: number;
    pageSize: number;
    draggable: boolean;
    data: never[];
    schema: never[];
    loading: boolean;
    error: boolean;
    loaderSchema: never[];
    sortingList: never[];
    filterList: {};
};
export declare class Table extends React.Component<TableProps, TableState> {
    static defaultProps: {
        type: string;
        size: string;
        showHead: boolean;
        showMenu: boolean;
        multipleSorting: boolean;
        headerOptions: {};
        withPagination: boolean;
        paginationType: string;
        page: number;
        pageSize: number;
        draggable: boolean;
        data: never[];
        schema: never[];
        loading: boolean;
        error: boolean;
        loaderSchema: never[];
        sortingList: never[];
        filterList: {};
    };
    constructor(props: TableProps);
    componentDidUpdate(prevProps: TableProps, prevState: TableState): void;
    updateData: () => void;
    debounceUpdate: import("throttle-debounce").throttle<() => void>;
    onSelect: onSelectFunction;
    onSelectAll: onSelectAllFunction;
    onPageChange: PaginationProps['onPageChange'];
    updateSchema: updateSchemaFunction;
    updateSortingList: updateSortingListFunction;
    updateFilterList: updateFilterListFunction;
    updateSearchTerm: updateSearchTermFunction;
    render(): JSX.Element;
}
export default Table;
