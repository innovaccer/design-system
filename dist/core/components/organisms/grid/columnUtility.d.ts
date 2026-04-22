import { GridProps } from '@/index.type';
import { ColumnSchema, Pinned, SortType, CellType, GridRef, updateColumnSchemaFunction, updateSortingListFunction } from './Grid';
type resizeColFn = (gridInfo: {
    updateColumnSchema: updateColumnSchemaFunction;
}, name: ColumnSchema['name'], el: GridRef) => void;
type sortColumnFn = (gridInfo: {
    sortingList: GridProps['sortingList'];
    updateSortingList: updateSortingListFunction;
}, name: ColumnSchema['name'], type: SortType) => void;
type pinColumnFn = (gridInfo: {
    updateColumnSchema: updateColumnSchemaFunction;
}, name: ColumnSchema['name'], type: Pinned) => void;
type hideColumnFn = (gridInfo: {
    updateColumnSchema: updateColumnSchemaFunction;
}, name: ColumnSchema['name'], value: boolean) => void;
export declare const resizeCol: resizeColFn;
export declare const sortColumn: sortColumnFn;
export declare const pinColumn: pinColumnFn;
export declare const hideColumn: hideColumnFn;
export declare function getWidth({ ref, withCheckbox }: {
    ref: GridRef;
    withCheckbox?: boolean;
}, width: string | number): string | number;
export declare function getCellSize(cellType: CellType): any;
export {};
