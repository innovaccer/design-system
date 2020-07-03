import * as React from 'react';
import { CheckboxProps, DropdownProps, PaginationProps } from '@/index.type';
import { GridCellProps } from './GridCell';
export declare type SortType = 'asc' | 'desc';
export declare type Pinned = 'left' | 'right';
export declare type Alignment = 'left' | 'right' | 'center';
export declare type SortFn = (a: RowData, b: RowData) => -1 | 0 | 1;
export declare type Filter = any[];
export interface FetchDataOptions {
    page?: number;
    pageSize?: number;
    filterList?: GridProps['filterList'];
    sortingList?: GridProps['sortingList'];
    searchTerm?: string;
}
export declare type fetchDataFn = (options: FetchDataOptions) => Promise<{
    count: number;
    data: Data;
    schema: Schema;
}>;
export declare type updateSortingListFn = (newSortingList: GridProps['sortingList']) => void;
export declare type updateFilterListFn = (newFilterList: GridProps['filterList']) => void;
export declare type updateDataFn = (options: FetchDataOptions) => void;
export declare type updateSchemaFn = (newSchema: Schema) => void;
export declare type updateSelectAllFn = (attr: GridProps['selectAll']) => void;
export declare type updateColumnSchemaFn = (name: ColumnSchema['name'], schemaUpdate: Partial<ColumnSchema>) => void;
export declare type updateRowDataFn = (rowIndexes: number[], dataUpdate: Partial<RowData>) => void;
export declare type updateReorderHighlighterFn = (dim: GridState['reorderHighlighter']) => void;
export declare type sortDataFn = (sortFn: SortFn, type: SortType) => void;
export declare type reorderColFn = (from: string, to: string) => void;
export declare type onSelectFn = (rowIndex: number, selected: boolean) => void;
export declare type onSelectAllFn = (selected: boolean, selectAll?: boolean) => void;
export declare type onFilterChangeFn = (data: RowData, filters: Filter) => boolean;
export declare type onRowClickFn = (data: RowData, rowIndex?: number) => void;
export declare type CellType = 'DEFAULT' | 'WITH_META_LIST' | 'AVATAR' | 'AVATAR_WITH_TEXT' | 'AVATAR_WITH_META_LIST' | 'IMAGE' | 'IMAGE_WITH_TEXT' | 'IMAGE_WITH_META_LIST' | 'STATUS_HINT' | 'ICON';
export declare type ColumnSchema = {
    name: string;
    displayName: string;
    width: number;
    resizable?: boolean;
    sortFn?: SortFn;
    separator?: boolean;
    pinned?: Pinned;
    hidden?: boolean;
    filters?: DropdownProps['options'];
    onFilterChange?: onFilterChangeFn;
    translate?: (data: RowData) => RowData;
    cellType?: CellType;
    cellRenderer?: (props: GridCellProps) => React.ReactElement;
    align?: Alignment;
};
export declare type RowData = Record<string, any> & {
    _selected?: boolean;
};
export declare type GridSize = 'comfortable' | 'standard' | 'compressed' | 'tight';
export declare type GridType = 'resource' | 'data';
export declare type Data = RowData[];
export declare type Schema = ColumnSchema[];
export interface GridProps {
    size: GridSize;
    type: GridType;
    onRowClick?: onRowClickFn;
    loaderSchema: Schema;
    schema: Schema;
    data: Data;
    totalRecords: number;
    loading: boolean;
    error: boolean;
    updateData?: updateDataFn;
    updateSchema?: updateSchemaFn;
    showHead?: boolean;
    showMenu?: boolean;
    draggable?: boolean;
    withPagination?: boolean;
    page: number;
    pageSize: number;
    paginationType: PaginationProps['type'];
    onPageChange?: PaginationProps['onPageChange'];
    withCheckbox?: boolean;
    onSelect?: onSelectFn;
    onSelectAll?: onSelectAllFn;
    errorTemplate?: () => React.ReactElement;
    sortingList: {
        name: ColumnSchema['name'];
        type: SortType;
    }[];
    updateSortingList?: updateSortingListFn;
    filterList: Record<ColumnSchema['name'], Filter>;
    updateFilterList?: updateFilterListFn;
    selectAll?: {
        checked: boolean;
        indeterminate: boolean;
    };
}
export interface GridState {
    reorderHighlighter?: number;
}
export declare class Grid extends React.Component<GridProps, GridState> {
    constructor(props: GridProps);
    static defaultProps: {
        showHead: boolean;
        loaderSchema: never[];
        schema: never[];
        data: never[];
        type: string;
        size: string;
        page: number;
        pageSize: number;
        paginationType: string;
        loading: boolean;
        error: boolean;
        sortingList: never[];
        filterList: {};
    };
    componentDidUpdate(prevProps: GridProps, _prevState: GridState): void;
    gridRef: React.RefObject<HTMLDivElement>;
    updateRenderedData: import("throttle-debounce").throttle<(options?: Partial<FetchDataOptions> | undefined) => void>;
    updateRenderedSchema: (newSchema: Schema) => void;
    updateColumnSchema: updateColumnSchemaFn;
    reorderCol: reorderColFn;
    updateReorderHighlighter: updateReorderHighlighterFn;
    updateSortingList: (sortingList: GridProps['sortingList']) => void;
    updateFilterList: (filterList: GridProps['filterList']) => void;
    onMenuChange: (name: ColumnSchema['name'], selected: any) => void;
    onFilterChange: (name: ColumnSchema['name'], selected: any) => void;
    onSelect: onSelectFn;
    onSelectAll: CheckboxProps['onChange'];
    render(): JSX.Element;
}
export default Grid;
