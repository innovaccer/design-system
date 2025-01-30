import * as React from 'react';
import { ExternalHeaderProps, updateSearchTermFunction, HeaderProps } from "./Header";
import { Data, onSelectFn, onSelectAllFunction, GridProps, fetchDataFunction, RowData, updateSchemaFunction, updateSortingListFunction, updateFilterListFunction } from "../grid";
import { BaseProps } from "../../../utils/types";
import { PaginationProps } from "../../molecules/pagination";
export interface ErrorTemplateProps {
    errorType?: TableProps['errorType'];
}
export declare type FilterPosition = 'GRID' | 'HEADER';
interface TableSyncProps {
    data: GridProps['data'];
    schema: GridProps['schema'];
    loading: GridProps['loading'];
    error: GridProps['error'];
    errorType?: string;
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
    pageJumpDebounceDuration: PaginationProps['pageJumpDebounceDuration'];
    paginationType: PaginationProps['type'];
    pageSize: GridProps['pageSize'];
    loaderSchema: GridProps['loaderSchema'];
    multipleSorting: boolean;
    sortingList: GridProps['sortingList'];
    filterList: GridProps['filterList'];
    errorTemplate?: React.FunctionComponent<ErrorTemplateProps>;
    searchDebounceDuration: number;
    onRowClick?: GridProps['onRowClick'];
    onSelect?: (rowIndexes: number[], selected: boolean, allSelected: RowData[], selectAll?: boolean) => void;
    onPageChange?: PaginationProps['onPageChange'];
    headCellTooltip?: GridProps['headCellTooltip'];
    separator?: GridProps['headCellTooltip'];
    filterPosition: FilterPosition;
    selectDisabledRow?: boolean;
    uniqueColumnName?: string;
    checkboxAlignment?: 'top' | 'center' | 'bottom';
}
export declare type SyncTableProps = SharedTableProps & TableSyncProps;
export declare type AsyncTableProps = SharedTableProps & AsyncProps;
export declare type TableProps = AsyncTableProps & SyncTableProps;
interface TableState {
    async: boolean;
    data: TableProps['data'];
    displayData: TableProps['data'];
    schema: TableProps['schema'];
    sortingList: TableProps['sortingList'];
    filterList: TableProps['filterList'];
    page: TableProps['page'];
    totalRecords: GridProps['totalRecords'];
    selectAll: GridProps['selectAll'];
    searchTerm: HeaderProps['searchTerm'];
    loading: TableProps['loading'];
    error: TableProps['error'];
    errorType?: TableProps['errorType'];
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
    displayData: never[];
    schema: never[];
    loading: boolean;
    error: boolean;
    loaderSchema: never[];
    sortingList: never[];
    filterList: {};
    filterPosition: string;
    searchDebounceDuration: number;
    pageJumpDebounceDuration: number;
    errorTemplate: (props: ErrorTemplateProps) => React.JSX.Element;
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
        displayData: never[];
        schema: never[];
        loading: boolean;
        error: boolean;
        loaderSchema: never[];
        sortingList: never[];
        filterList: {};
        filterPosition: string;
        searchDebounceDuration: number;
        pageJumpDebounceDuration: number;
        errorTemplate: (props: ErrorTemplateProps) => React.JSX.Element;
    };
    debounceUpdate: () => void;
    selectedRowsRef: React.MutableRefObject<any>;
    clearSelectionRef: React.MutableRefObject<any>;
    selectAllRef: React.MutableRefObject<any>;
    constructor(props: TableProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: TableProps, prevState: TableState): void;
    updateData: (searchUpdate?: boolean | undefined) => void;
    updateDataFn: () => void;
    onSelect: onSelectFn;
    onSelectAll: onSelectAllFunction;
    onPageChange: PaginationProps['onPageChange'];
    updateSchema: updateSchemaFunction;
    updateSortingList: updateSortingListFunction;
    updateFilterList: updateFilterListFunction;
    updateSearchTerm: updateSearchTermFunction;
    onClearSelection: () => void;
    resetClearSelection: () => void;
    onSelectAllRows: () => void;
    render(): React.JSX.Element;
}
export default Table;
