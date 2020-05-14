import * as React from 'react';
import { throttle } from 'throttle-debounce';
import { State, Props, Cache, Schema, GridActions, LoadingSchema } from './interfaces';
interface GridProps extends Props {
    totalPages: number;
    offset: number;
    onPageChange?: (pageNo: number) => void;
}
declare class Grid extends React.PureComponent<GridProps, State> {
    centerGridRef: React.RefObject<HTMLDivElement>;
    centerScrollRef: React.RefObject<HTMLDivElement>;
    centerHeaderRef: React.RefObject<HTMLDivElement>;
    gridRef: React.RefObject<HTMLDivElement>;
    calculatedRowHeight: number[];
    calculatedRowTopPosition: number[];
    calculateRowHeight: boolean;
    totalPages: number;
    rowHeight: number;
    headerHeight: number;
    loadMoreDataPosition: {
        position: number;
        end: number;
    };
    cache: Cache;
    static defaultProps: {
        buffer: number;
        virtualization: boolean;
        pagination: boolean;
    };
    constructor(props: GridProps);
    componentDidUpdate(prevProps: GridProps, prevState: State): void;
    isColumnActive: () => boolean;
    refreshRows: GridActions['refreshRows'];
    getClientHeight: (element: Element) => number;
    calulateRowHeightAndRender: () => void;
    getVisibleRowsCount: () => number;
    getScrollPosition: () => number;
    sync: throttle<(scrollLeft: number, scrollTarget: any) => void>;
    syncHorizontalScroll: (event: any) => void;
    updateSchema: (schema: Schema[], loaderSchema: LoadingSchema[]) => {
        leftSchema: Schema[];
        centerSchema: Schema[];
        leftWidth: number;
        centerWidth: number;
        leftLoaderSchema: LoadingSchema[] | undefined;
        centerLoaderSchema: LoadingSchema[] | undefined;
    };
    handleGridScroll: (event: any) => void;
    debouncedSetScroll: throttle<(isScrolling: boolean) => void>;
    isScrollEnd: () => boolean;
    loadMoreData: (currentPosition: number, visibleCount: number, dataLength: number) => void;
    getHiddenRowStyling: (index: number) => React.CSSProperties;
    createRow: ({ index, row, schema, dynamicRowHeight, }: {
        index: number;
        rowHeight: number;
        row: GridProps['data'][0];
        schema: GridProps['schema'];
        dynamicRowHeight: boolean;
    }) => JSX.Element;
    getVirtualList: (state: State, props: GridProps) => {
        leftGrid: (React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null)[];
        centerGrid: (React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null)[];
    };
    getTopPosition: (index: number) => number;
    getHeaderRef: (ref: React.RefObject<HTMLDivElement>) => void;
    getGridHeight: () => number;
    onPageChange: (pageNo: number) => void;
    render(): JSX.Element;
}
export default Grid;
