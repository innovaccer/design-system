import * as React from 'react';
import { DropdownProps, CheckboxProps, GridCellProps } from '@/index.type';
import { HeaderCellRendererProps } from './Cell';
import { BaseProps } from '@/utils/types';
import { NestedRowProps } from './GridNestedRow';
export type SortType = 'asc' | 'desc' | 'unsort';
export type Pinned = 'left' | 'right' | 'unpin';
export type Alignment = 'left' | 'right' | 'center';
export type Comparator = (a: RowData, b: RowData) => -1 | 0 | 1;
export type Filter = any[];
export type GridRef = HTMLDivElement | null;
export type PageInfo = {
    page: number;
    scrollTop: number;
};
export interface FetchDataOptions {
    page?: number;
    pageSize?: number;
    filterList?: GridProps['filterList'];
    sortingList?: GridProps['sortingList'];
    searchTerm?: string;
}
export type fetchDataFunction = (options: FetchDataOptions) => Promise<{
    searchTerm?: string;
    count: number;
    data: Data;
    schema: Schema;
    totalRowsCount?: number;
}>;
export type updateSortingListFunction = (newSortingList: GridProps['sortingList']) => void;
export type updateFilterListFunction = (newFilterList: GridProps['filterList']) => void;
export type updateSchemaFunction = (newSchema: Schema) => void;
export type updateSelectAllFunction = (attr: GridProps['selectAll']) => void;
export type updateColumnSchemaFunction = (name: ColumnSchema['name'], schemaUpdate: Partial<ColumnSchema>) => void;
export type updateRowDataFunction = (rowIndexes: number[], dataUpdate: Partial<RowData>) => void;
export type sortDataFunction = (comparator: Comparator, type: SortType) => void;
export type reorderColumnFunction = (from: string, to: string) => void;
export type onSelectFn = (rowIndex: number, selected: boolean) => void;
export type onFilterChangeFn = (name: ColumnSchema['name'], selected: any) => void;
export type onSelectAllFunction = (selected: boolean, selectAll?: boolean, headerCheckbox?: boolean) => void;
export type onFilterChangeFunction = (data: RowData, filters: Filter) => boolean;
export type onRowClickFunction = (data: RowData, rowIndex?: number) => void;
export type onMenuChangeFn = (name: ColumnSchema['name'], selected: any) => void;
export type updatePrevPageInfoFunction = (value: PageInfo) => void;
export type CellType = 'DEFAULT' | 'WITH_META_LIST' | 'AVATAR' | 'AVATAR_WITH_TEXT' | 'AVATAR_WITH_META_LIST' | 'STATUS_HINT' | 'ICON';
export type ColumnSchema = {
    name: string;
    displayName: string;
    width?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number;
    resizable?: boolean;
    sorting?: boolean;
    comparator?: Comparator;
    separator?: boolean;
    pinned?: Pinned;
    hidden?: boolean;
    filters?: DropdownProps['options'];
    onFilterChange?: onFilterChangeFunction;
    translate?: (data: RowData) => RowData;
    cellType?: CellType;
    headerCellRenderer?: React.FC<HeaderCellRendererProps>;
    cellRenderer?: React.FC<GridCellProps>;
    align?: Alignment;
    verticalAlign?: 'top' | 'center' | 'bottom';
    tooltip?: boolean;
    highlightCell?: boolean;
};
export type RowData = Record<string, any> & {
    _selected?: boolean;
    disabled?: boolean;
    _expandNestedRow?: boolean;
    _activated?: boolean;
};
export type GridSize = 'comfortable' | 'standard' | 'compressed' | 'tight';
export type GridType = 'resource' | 'data';
export type Data = RowData[];
export type Schema = ColumnSchema[];
export type thresholdTypes = 'early' | 'balanced' | 'lazy' | 'at-end';
export interface VirtualRowProps {
    visibleRows?: number;
    buffer?: number;
}
export interface InfiniteScrollProps {
    fetchRowsCount: number;
    fetchThreshold: thresholdTypes;
    fetchErrorRenderer?: (fetchNextRowsFn: () => Promise<void>) => React.ReactNode;
    retryFetchRenderer?: () => React.ReactNode;
}
export type GridProps = BaseProps & {
    size: GridSize;
    type: GridType;
    onRowClick?: onRowClickFunction;
    loaderSchema: Schema;
    schema: Schema;
    data: Data;
    totalRecords: number;
    loading: boolean;
    error: boolean;
    updateData?: () => void;
    updateSchema?: updateSchemaFunction;
    showHead?: boolean;
    showMenu?: boolean;
    draggable?: boolean;
    nestedRows?: boolean;
    nestedRowRenderer?: React.FC<NestedRowProps>;
    withPagination?: boolean;
    page: number;
    pageSize: number;
    withCheckbox?: boolean;
    checkboxAlignment?: 'top' | 'center' | 'bottom';
    onSelect?: onSelectFn;
    onSelectAll?: onSelectAllFunction;
    errorTemplate?: React.FunctionComponent | React.ReactNode;
    sortingList: {
        name: ColumnSchema['name'];
        type: SortType;
    }[];
    updateSortingList?: updateSortingListFunction;
    filterList: Record<ColumnSchema['name'], Filter>;
    updateFilterList?: updateFilterListFunction;
    selectAll?: {
        checked: boolean;
        indeterminate: boolean;
    };
    headCellTooltip?: boolean;
    separator?: boolean;
    showFilters: boolean;
    enableRowVirtualization?: boolean;
    virtualRowOptions: VirtualRowProps;
    enableInfiniteScroll?: boolean;
    infiniteScrollOptions: InfiniteScrollProps;
    onScroll?: (event: Event) => void;
    fetchDataOnScroll?: (props: {
        page: number;
        rowsCount: number;
    }) => Promise<Data>;
    searchTerm?: string;
    highlightRegex?: (searchTerm: string) => RegExp;
    showNestedRowTrigger?: boolean;
};
export interface GridState {
    init: boolean;
    prevPageInfo: PageInfo;
}
export declare class Grid extends React.Component<GridProps, GridState> {
    static defaultProps: GridProps;
    gridRef: GridRef;
    isHeadSyncing: boolean;
    isBodySyncing: boolean;
    constructor(props: GridProps);
    componentDidMount(): void;
    forceRerender(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: GridProps, prevState: GridState): void;
    addScrollListeners(): void;
    removeScrollListeners(): void;
    adjustPaddingRight(): void;
    syncScroll: (type: string) => () => void;
    updateRenderedSchema: (newSchema: Schema) => void;
    updateColumnSchema: updateColumnSchemaFunction;
    reorderColumn: reorderColumnFunction;
    updateSortingList: (sortingList: GridProps["sortingList"]) => void;
    updateFilterList: (filterList: GridProps["filterList"]) => void;
    onMenuChange: onMenuChangeFn;
    onFilterChange: onFilterChangeFn;
    onSelect: onSelectFn;
    onSelectAll: CheckboxProps['onChange'];
    updatePrevPageInfo: updatePrevPageInfoFunction;
    render(): React.JSX.Element;
}
export default Grid;
