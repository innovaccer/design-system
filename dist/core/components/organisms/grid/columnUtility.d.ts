/// <reference types="react" />
import { GridProps } from "../../../index.type";
import { ColumnSchema, Pinned, SortType, CellType, GridRef, updateColumnSchemaFunction, updateSortingListFunction } from "./Grid";
declare type resizeColFn = (gridInfo: {
    updateColumnSchema: updateColumnSchemaFunction;
}, name: ColumnSchema['name'], el: GridRef) => void;
declare type sortColumnFn = (gridInfo: {
    sortingList: GridProps['sortingList'];
    updateSortingList: updateSortingListFunction;
}, name: ColumnSchema['name'], type: SortType) => void;
declare type pinColumnFn = (gridInfo: {
    updateColumnSchema: updateColumnSchemaFunction;
}, name: ColumnSchema['name'], type: Pinned) => void;
declare type hideColumnFn = (gridInfo: {
    updateColumnSchema: updateColumnSchemaFunction;
}, name: ColumnSchema['name'], value: boolean) => void;
export declare const resizeCol: resizeColFn;
export declare const sortColumn: sortColumnFn;
export declare const pinColumn: pinColumnFn;
export declare const hideColumn: hideColumnFn;
export declare function getWidth({ ref, withCheckbox }: {
    ref: GridRef;
    withCheckbox?: boolean;
}, width: React.ReactText): import("react").ReactText;
export declare function getCellSize(cellType: CellType): any;
export {};
