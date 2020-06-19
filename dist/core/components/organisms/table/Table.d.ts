import * as React from 'react';
import { ExternalHeaderProps, updateSearchTermFn, HeaderProps } from '../grid/Header';
import { Data, Schema, onSelectFn, onSelectAllFn, GridProps, FetchDataOptions, fetchDataFn, RowData, updateSchemaFn, updateSortingListFn, updateFilterListFn } from '../grid';
interface SyncProps {
    data: Data;
    schema: Schema;
}
interface AsyncProps {
    fetchData: fetchDataFn;
}
interface SharedTableProps {
    showHead?: GridProps['showHead'];
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
    onPageChange?: GridProps['onPageChange'];
}
declare type SyncTableProps = SyncProps & SharedTableProps;
declare type AsyncTableProps = AsyncProps & SharedTableProps;
export declare type TableProps = (AsyncTableProps & SyncTableProps);
interface TableState {
    async: boolean;
    data: GridProps['data'];
    schema: GridProps['schema'];
    sortingList: GridProps['sortingList'];
    filterList: GridProps['filterList'];
    page: GridProps['page'];
    totalRecords: GridProps['totalRecords'];
    loading: GridProps['loading'];
    selectAll: GridProps['selectAll'];
    searchTerm: HeaderProps['searchTerm'];
}
export declare class Table extends React.Component<TableProps, TableState> {
    constructor(props: TableProps);
    static defaultProps: {
        showHead: boolean;
        headerProps: {};
        pageSize: number;
    };
    componentDidUpdate(prevProps: TableProps, prevState: TableState): void;
    updateData: import("throttle-debounce").throttle<(options: FetchDataOptions) => void>;
    onSelect: onSelectFn;
    onSelectAll: onSelectAllFn;
    onPageChange: GridProps['onPageChange'];
    updateSchema: updateSchemaFn;
    updateSortingList: updateSortingListFn;
    updateFilterList: updateFilterListFn;
    updateSearchTerm: updateSearchTermFn;
    render(): JSX.Element;
}
export default Table;
