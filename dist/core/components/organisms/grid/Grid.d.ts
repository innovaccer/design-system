import * as React from 'react';
import { CheckboxProps, DropdownProps } from "../../../index.type";
import { GridCellProps } from "./GridCell";
import { BaseProps } from "../../../utils/types";
import { NestedRowProps } from "./GridNestedRow";
export declare type SortType = 'asc' | 'desc' | 'unsort';
export declare type Pinned = 'left' | 'right' | 'unpin';
export declare type Alignment = 'left' | 'right' | 'center';
export declare type Comparator = (a: RowData, b: RowData) => -1 | 0 | 1;
export declare type Filter = any[];
export interface FetchDataOptions {
    page?: number;
    pageSize?: number;
    filterList?: GridProps['filterList'];
    sortingList?: GridProps['sortingList'];
    searchTerm?: string;
}
export declare type fetchDataFunction = (options: FetchDataOptions) => Promise<{
    searchTerm?: string;
    count: number;
    data: Data;
    schema: Schema;
}>;
export declare type updateSortingListFunction = (newSortingList: GridProps['sortingList']) => void;
export declare type updateFilterListFunction = (newFilterList: GridProps['filterList']) => void;
export declare type updateSchemaFunction = (newSchema: Schema) => void;
export declare type updateSelectAllFunction = (attr: GridProps['selectAll']) => void;
export declare type updateColumnSchemaFunction = (name: ColumnSchema['name'], schemaUpdate: Partial<ColumnSchema>) => void;
export declare type updateRowDataFunction = (rowIndexes: number[], dataUpdate: Partial<RowData>) => void;
export declare type sortDataFunction = (comparator: Comparator, type: SortType) => void;
export declare type reorderColFunction = (from: string, to: string) => void;
export declare type onSelectFunction = (rowIndex: number, selected: boolean) => void;
export declare type onSelectAllFunction = (selected: boolean, selectAll?: boolean) => void;
export declare type onFilterChangeFunction = (data: RowData, filters: Filter) => boolean;
export declare type onRowClickFunction = (data: RowData, rowIndex?: number) => void;
export declare type CellType = 'DEFAULT' | 'WITH_META_LIST' | 'AVATAR' | 'AVATAR_WITH_TEXT' | 'AVATAR_WITH_META_LIST' | 'STATUS_HINT' | 'ICON';
export declare type ColumnSchema = {
    name: string;
    displayName: string;
    width?: React.ReactText;
    minWidth?: React.ReactText;
    maxWidth?: React.ReactText;
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
    cellRenderer?: React.FC<GridCellProps>;
    align?: Alignment;
    tooltip?: boolean;
};
export declare type RowData = Record<string, any> & {
    _selected?: boolean;
};
export declare type GridSize = 'comfortable' | 'standard' | 'compressed' | 'tight';
export declare type GridType = 'resource' | 'data';
export declare type Data = RowData[];
export declare type Schema = ColumnSchema[];
export interface GridProps extends BaseProps {
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
    onSelect?: onSelectFunction;
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
}
interface GridState {
    init: boolean;
}
export declare class Grid extends React.Component<GridProps, GridState> {
    currPageInfo: {
        page: number;
        scrollTop: number;
    };
    prevPageInfo: {
        page: number;
        scrollTop: number;
    };
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
        loading: boolean;
        error: boolean;
        sortingList: never[];
        filterList: {};
        showFilters: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: GridProps): void;
    gridRef: HTMLDivElement | null;
    isHeadSyncing: boolean;
    isBodySyncing: boolean;
    addScrollListeners(): void;
    removeScrollListeners(): void;
    syncScroll: (type: string) => () => void;
    updateRenderedSchema: (newSchema: Schema) => void;
    updateColumnSchema: updateColumnSchemaFunction;
    reorderCol: reorderColFunction;
    updateSortingList: (sortingList: GridProps['sortingList']) => void;
    updateFilterList: (filterList: GridProps['filterList']) => void;
    onMenuChange: (name: ColumnSchema['name'], selected: any) => void;
    onFilterChange: (name: ColumnSchema['name'], selected: any) => void;
    onSelect: onSelectFunction;
    onSelectAll: CheckboxProps['onChange'];
    render(): JSX.Element;
}
export default Grid;
