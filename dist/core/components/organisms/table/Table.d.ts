import * as React from 'react';
import { IconProps, InputProps, DropdownProps, PaginationProps, StatusHintsProps } from '@/index.type';
import { TableCellProps } from './TableCell';
export declare type SortType = 'asc' | 'desc';
export declare type Alignment = 'left' | 'right' | 'center';
export declare type SortFn = (a: Data, b: Data) => -1 | 0 | 1;
export declare type Filter = any[];
export interface FetchDataOptions {
    page?: number;
    pageSize?: number;
    filterList?: Record<CellSchema['name'], Filter>;
    sortingList?: TableState['sortingList'];
}
export declare type fetchDataFn = (options: FetchDataOptions) => Promise<{
    totalRecords: number;
    data: Data[];
    schema: CellSchema[];
}>;
export declare type updateDataFn = (options: FetchDataOptions) => void;
export declare type updateSelectAllFn = (attr: TableState['selectAll']) => void;
export declare type updateCellSchemaFn = (name: CellSchema['name'], schemaUpdate: Partial<StateSchema>) => void;
export declare type updateRowDataFn = (rowIndexes: number[], dataUpdate: Partial<StateData>) => void;
export declare type updateReorderHighlighterFn = (dim: TableState['reorderHighlighter']) => void;
export declare type sortDataFn = (sortFn: SortFn, type: SortType) => void;
export declare type reorderSchemaFn = (from: string, to: string) => void;
export declare type onSelectFn = (rowIndex: number, selected: boolean) => void;
export declare type onSelectAllFn = (page: number, selected: boolean) => void;
export declare type onFilterChangeFn = (data: Data, filters: Filter) => boolean;
export declare type onRowClickFn = (data: Data) => void;
export declare type CellSchema = {
    name: string;
    displayName: string;
    resize?: boolean;
    sortFn?: SortFn;
    width: number;
    separator?: boolean;
    pinned?: boolean;
    selected?: boolean;
    hidden?: boolean;
    filters?: DropdownProps['options'];
    onFilterChange?: onFilterChangeFn;
    translate?: (data: Data) => Data;
    cellTemplate?: (props: TableCellProps) => React.ReactElement;
    align?: Alignment;
    avatar?: boolean;
    status?: boolean;
    icon?: IconProps['name'];
    image?: string;
    dropdown?: DropdownProps;
    input?: InputProps;
};
export declare type Data = Record<string, any>;
export declare type TableSize = 'comfortable' | 'standard' | 'compressed' | 'tight';
export declare type TableType = 'resource' | 'data';
export interface TableProps {
    loaderSchema?: CellSchema[];
    data: Data[];
    updateData?: updateDataFn;
    schema: CellSchema[];
    totalRecords: number;
    loading?: boolean;
    showHeader?: boolean;
    showMenu?: boolean;
    draggable?: boolean;
    withPagination?: boolean;
    pageSize?: number;
    paginationType?: PaginationProps['type'];
    onPageChange?: PaginationProps['onPageChange'];
    withCheckbox?: boolean;
    onSelect?: onSelectFn;
    onSelectAll?: onSelectAllFn;
    errorTemplate?: () => React.ReactElement;
    size?: TableSize;
    onRowClick?: onRowClickFn;
    type?: TableType;
    statusMapper?: (value: any) => StatusHintsProps['appearance'];
}
export declare type StateSchema = CellSchema;
export declare type StateData = Data & {
    _selected?: boolean;
    _expanded?: {
        schema: CellSchema[];
        data?: Data[];
        showHeader?: boolean;
    };
};
export interface TableState {
    init: boolean;
    schema: StateSchema[];
    data: StateData[];
    reorderHighlighter?: number;
    page: number;
    selectAll?: {
        checked: boolean;
        indeterminate: boolean;
    };
    loading: boolean;
    sortingList: {
        name: StateSchema['name'];
        type: SortType;
    }[];
}
export declare class Table extends React.Component<TableProps, TableState> {
    type: TableType;
    size: TableSize;
    pageSize: number;
    paginationType: PaginationProps['type'];
    showMenu: boolean;
    constructor(props: TableProps);
    componentDidUpdate(prevProps: TableProps, prevState: TableState): void;
    tableRef: React.RefObject<HTMLDivElement>;
    updateRenderedData: (options?: Partial<FetchDataOptions> | undefined) => void;
    updateCellSchema: updateCellSchemaFn;
    updateRowData: updateRowDataFn;
    updateReorderHighlighter: updateReorderHighlighterFn;
    updateSelectAll: updateSelectAllFn;
    updateSortedList: (sortingList: TableState['sortingList']) => void;
    onMenuChange: (name: StateSchema['name'], selected: any) => void;
    onFilterChange: (name: StateSchema['name'], selected: any) => void;
    reorderSchema: reorderSchemaFn;
    syncScroll: (renderType: 'pinned' | 'main') => void;
    syncSelectAll: () => void;
    onSelect: onSelectFn;
    onSelectAll: onSelectAllFn;
    renderTable(renderType: 'pinned' | 'main'): JSX.Element | null;
    render(): JSX.Element;
}
export default Table;
