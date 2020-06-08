import * as React from 'react';
import { CheckboxProps, DropdownProps, PaginationProps } from '@/index.type';
import { GridCellProps } from './GridCell';
export declare type SortType = 'asc' | 'desc';
export declare type Alignment = 'left' | 'right' | 'center';
export declare type SortFn = (a: RowData, b: RowData) => -1 | 0 | 1;
export declare type Filter = any[];
export interface FetchDataOptions {
    page?: number;
    pageSize?: number;
    filterList?: GridState['filterList'];
    sortingList?: GridState['sortingList'];
    searchTerm?: string;
}
export declare type fetchDataFn = (options: FetchDataOptions) => Promise<{
    totalRecords: number;
    data: Data;
    schema: Schema;
}>;
export declare type updateDataFn = (options: FetchDataOptions) => void;
export declare type updateSelectAllFn = (attr: GridState['selectAll']) => void;
export declare type updateColumnSchemaFn = (name: ColumnSchema['name'], schemaUpdate: Partial<ColumnSchema>) => void;
export declare type updateRowDataFn = (rowIndexes: number[], dataUpdate: Partial<RowData>) => void;
export declare type updateReorderHighlighterFn = (dim: GridState['reorderHighlighter']) => void;
export declare type sortDataFn = (sortFn: SortFn, type: SortType) => void;
export declare type reorderColFn = (from: string, to: string) => void;
export declare type onSelectFn = (rowIndex: number, selected: boolean) => void;
export declare type onSelectAllFn = (selected: boolean) => void;
export declare type onFilterChangeFn = (data: RowData, filters: Filter) => boolean;
export declare type onRowClickFn = (data: RowData) => void;
export declare type CellType = 'DEFAULT' | 'WITH_META_LIST' | 'AVATAR' | 'AVATAR_WITH_TEXT' | 'AVATAR_WITH_META_LIST' | 'IMAGE' | 'IMAGE_WITH_TEXT' | 'IMAGE_WITH_META_LIST' | 'STATUS_HINT' | 'ICON';
export declare type ColumnSchema = {
    name: string;
    displayName: string;
    width: number;
    resizable?: boolean;
    sortFn?: SortFn;
    separator?: boolean;
    pinned?: boolean;
    hidden?: boolean;
    filters?: DropdownProps['options'];
    onFilterChange?: onFilterChangeFn;
    translate?: (data: RowData) => RowData;
    cellType?: CellType;
    cellTemplate?: (props: GridCellProps) => React.ReactElement;
    align?: Alignment;
};
export declare type RowData = Record<string, any> & {
    _link?: string;
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
    loaderSchema?: Schema;
    schema: Schema;
    data: Data;
    totalRecords: number;
    loading: boolean;
    updateData?: updateDataFn;
    showHead?: boolean;
    showMenu?: boolean;
    draggable?: boolean;
    withPagination?: boolean;
    pageSize: number;
    paginationType: PaginationProps['type'];
    onPageChange?: PaginationProps['onPageChange'];
    withCheckbox?: boolean;
    onSelect?: onSelectFn;
    onSelectAll?: onSelectAllFn;
    errorTemplate?: () => React.ReactElement;
}
export interface GridState {
    init: boolean;
    prevSchema: Schema;
    schema: Schema;
    reorderHighlighter?: number;
    page: number;
    selectAll?: {
        checked: boolean;
        indeterminate: boolean;
    };
    sortingList: {
        name: ColumnSchema['name'];
        type: SortType;
    }[];
    filterList: Record<ColumnSchema['name'], Filter>;
}
export declare class Grid extends React.Component<GridProps, GridState> {
    constructor(props: GridProps);
    static defaultProps: {
        showHead: boolean;
        type: string;
        size: string;
        pageSize: number;
        paginationType: string;
        loading: boolean;
    };
    static getDerivedStateFromProps(props: GridProps, state: GridState): {
        prevSchema: Schema;
        schema: Schema;
    } | null;
    componentDidUpdate(prevProps: GridProps, prevState: GridState): void;
    gridRef: React.RefObject<HTMLDivElement>;
    updateRenderedData: (options?: Partial<FetchDataOptions> | undefined) => void;
    updateRenderedSchema: (newSchema: Schema) => void;
    updateColumnSchema: updateColumnSchemaFn;
    reorderCol: reorderColFn;
    updateReorderHighlighter: updateReorderHighlighterFn;
    updateSelectAll: updateSelectAllFn;
    updateSortingList: (sortingList: GridState['sortingList']) => void;
    onMenuChange: (name: ColumnSchema['name'], selected: any) => void;
    onFilterChange: (name: ColumnSchema['name'], selected: any) => void;
    syncScroll: (renderType: 'pinned' | 'main') => void;
    syncSelectAll: () => void;
    onSelect: onSelectFn;
    onSelectAll: CheckboxProps['onChange'];
    renderGrid(renderType: 'pinned' | 'main'): JSX.Element | null;
    render(): JSX.Element;
}
export default Grid;
