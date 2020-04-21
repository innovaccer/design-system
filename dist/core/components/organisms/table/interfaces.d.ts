/// <reference types="react" />
declare type DivProps = JSX.IntrinsicElements['div'];
export interface Schema {
    width?: number;
    template?: React.ElementType;
    pinned?: 'LEFT';
    get?: (props: any) => any;
    header?: React.ElementType;
    name: string;
    displayName: string;
}
export interface LoadingSchema {
    width?: number;
    withImage?: boolean;
    round?: boolean;
    imageSize?: string;
    pinned?: 'LEFT';
}
export interface Cache {
    row: Record<string, {
        left: React.ReactElement | null;
        center: React.ReactElement | null;
    }>;
    height: number[];
}
export interface Props extends DivProps {
    data: Record<string, any>[];
    schema: Schema[];
    loaderSchema?: LoadingSchema[];
    rowHeight?: number;
    headerHeight?: number;
    loadMore?: () => void;
    buffer?: number;
    loading?: boolean;
    loader?: React.ReactNode;
    showOverlay?: boolean;
    overlay?: React.ReactNode;
    dynamicRowHeight?: boolean;
    pagination?: boolean;
    getGridActions?: (gridActions?: GridActions) => void;
}
export interface State {
    isScrolling: Boolean;
    position: number;
    gridMeta: {
        leftSchema: Schema[];
        centerSchema: Schema[];
        leftWidth: number;
        centerWidth: number;
        leftLoaderSchema?: LoadingSchema[];
        centerLoaderSchema?: LoadingSchema[];
    };
}
export interface TableState {
    offset: number;
    totalPages: number;
    data: any[];
}
export interface GridActions {
    refreshRows: (indexs: number[], all?: boolean) => void;
}
export {};
