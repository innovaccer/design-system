import * as React from 'react';
import { DropdownProps, CheckboxProps, GridCellProps } from "../../../index.type";
import { HeaderCellRendererProps } from "./Cell";
import { BaseProps } from "../../../utils/types";
import { NestedRowProps } from "./GridNestedRow";
export declare type SortType = 'asc' | 'desc' | 'unsort';
export declare type Pinned = 'left' | 'right' | 'unpin';
export declare type Alignment = 'left' | 'right' | 'center';
export declare type Comparator = (a: RowData, b: RowData) => -1 | 0 | 1;
export declare type Filter = any[];
export declare type GridRef = HTMLDivElement | null;
export declare type PageInfo = {
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
export declare type reorderColumnFunction = (from: string, to: string) => void;
export declare type onSelectFn = (rowIndex: number, selected: boolean) => void;
export declare type onFilterChangeFn = (name: ColumnSchema['name'], selected: any) => void;
export declare type onSelectAllFunction = (selected: boolean, selectAll?: boolean) => void;
export declare type onFilterChangeFunction = (data: RowData, filters: Filter) => boolean;
export declare type onRowClickFunction = (data: RowData, rowIndex?: number) => void;
export declare type onMenuChangeFn = (name: ColumnSchema['name'], selected: any) => void;
export declare type updatePrevPageInfoFunction = (value: PageInfo) => void;
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
    headerCellRenderer?: React.FC<HeaderCellRendererProps>;
    cellRenderer?: React.FC<GridCellProps>;
    align?: Alignment;
    tooltip?: boolean;
};
export declare type RowData = Record<string, any> & {
    _selected?: boolean;
    disabled?: boolean;
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
}
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
    syncScroll: (type: string) => () => void;
    updateRenderedSchema: (newSchema: Schema) => void;
    updateColumnSchema: updateColumnSchemaFunction;
    reorderColumn: reorderColumnFunction;
    updateSortingList: (sortingList: GridProps['sortingList']) => void;
    updateFilterList: (filterList: GridProps['filterList']) => void;
    onMenuChange: onMenuChangeFn;
    onFilterChange: onFilterChangeFn;
    onSelect: onSelectFn;
    onSelectAll: CheckboxProps['onChange'];
    updatePrevPageInfo: updatePrevPageInfoFunction;
    render(): JSX.Element;
}
export default Grid;
