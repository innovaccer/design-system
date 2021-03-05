/// <reference types="react" />
import { Grid } from "../../../index";
import { ColumnSchema, Pinned, SortType, CellType } from "./Grid";
export declare const resizeCol: (_this: Grid, name: string, el: HTMLDivElement | null) => void;
export declare function sortColumn(this: Grid, name: ColumnSchema['name'], type: SortType): void;
export declare function pinColumn(this: Grid, name: ColumnSchema['name'], type: Pinned): void;
export declare function hideColumn(this: Grid, name: ColumnSchema['name'], value: boolean): void;
export declare function getWidth(this: Grid, width: React.ReactText): import("react").ReactText;
export declare function getCellSize(cellType: CellType): any;
