import * as React from 'react';
import { ExternalHeaderProps, updateSearchTermFunction, HeaderProps } from '../grid/Header';
import { Data, Schema, onSelectFunction, onSelectAllFunction, GridProps, FetchDataOptions, fetchDataFunction, RowData, updateSchemaFunction, updateSortingListFunction, updateFilterListFunction } from '../grid';
import { BaseProps } from '@/utils/types';
interface SyncProps {
    data: Data;
    schema: Schema;
    loading?: boolean;
    error?: boolean;
    onSearch?: (data: RowData, searchTerm: string) => boolean;
}
interface AsyncProps {
    fetchData: fetchDataFunction;
}
interface SharedTableProps extends BaseProps {
    showHead?: GridProps['showHead'];
    type?: GridProps['type'];
    size?: GridProps['size'];
    draggable?: boolean;
    withHeader?: boolean;
    headerOptions?: ExternalHeaderProps;
    withCheckbox?: GridProps['withCheckbox'];
    showMenu?: GridProps['showMenu'];
    withPagination?: GridProps['withPagination'];
    paginationType?: GridProps['paginationType'];
    pageSize?: GridProps['pageSize'];
    loaderSchema?: GridProps['loaderSchema'];
    multipleSorting?: boolean;
    sortingList?: GridProps['sortingList'];
    filterList?: GridProps['filterList'];
    errorTemplate?: GridProps['errorTemplate'];
    onRowClick?: GridProps['onRowClick'];
    onSelect?: (rowIndexes: number[], selected: boolean, allSelected: RowData[], selectAll?: boolean) => void;
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
    selectAll: GridProps['selectAll'];
    searchTerm: HeaderProps['searchTerm'];
    loading: GridProps['loading'];
    error: GridProps['error'];
}
export declare class Table extends React.Component<TableProps, TableState> {
    constructor(props: TableProps);
    static defaultProps: {
        type: string;
        showHead: boolean;
        multipleSorting: boolean;
        headerOptions: {};
        pageSize: number;
        loading: boolean;
        draggable: boolean;
    };
    componentDidUpdate(prevProps: TableProps, prevState: TableState): void;
    updateData: import("throttle-debounce").throttle<(_options: FetchDataOptions) => void>;
    onSelect: onSelectFunction;
    onSelectAll: onSelectAllFunction;
    onPageChange: GridProps['onPageChange'];
    updateSchema: updateSchemaFunction;
    updateSortingList: updateSortingListFunction;
    updateFilterList: updateFilterListFunction;
    updateSearchTerm: updateSearchTermFunction;
    render(): JSX.Element;
}
export default Table;
