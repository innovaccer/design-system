/// <reference types="react" />
import { TableProps } from "../../../index.type";
import { SyncTableProps, AsyncTableProps } from "../table";
export declare type ListProps = Omit<TableProps, 'showHead' | 'draggable' | 'showMenu' | 'headCellTooltip'>;
export declare type SyncListProps = Omit<SyncTableProps, 'showHead' | 'draggable' | 'showMenu' | 'headCellTooltip'>;
export declare type AsyncListProps = Omit<AsyncTableProps, 'showHead' | 'draggable' | 'showMenu' | 'headCellTooltip'>;
export declare const List: {
    (props: ListProps): JSX.Element;
    defaultProps: {
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
        errorTemplate: (props: import("../table").ErrorTemplateProps) => JSX.Element;
    };
};
export default List;
