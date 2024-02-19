import { Schema } from "../../organisms/grid";
export declare const spaceSchema: Schema;
export declare const getSchema: (property: string, text: string, classnames?: string | undefined, css?: object | undefined) => ({
    name: string;
    displayName: string;
    width: string;
    resizable: boolean;
    sorting: boolean;
    cellRenderer: (props: any) => JSX.Element;
} | {
    name: string;
    displayName: string;
    width: string;
    resizable: boolean;
    sorting: boolean;
    cellRenderer?: undefined;
})[];
