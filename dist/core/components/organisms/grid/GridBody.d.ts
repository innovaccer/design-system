import * as React from 'react';
import { GridState, onSelectFn, Schema, updatePrevPageInfoFunction } from "./Grid";
import { GridProps } from "../../../index.type";
export interface GridBodyProps {
    schema: Schema;
    onSelect: onSelectFn;
    prevPageInfo: GridState['prevPageInfo'];
    updatePrevPageInfo: updatePrevPageInfoFunction;
    virtualRowOptions: GridProps['virtualRowOptions'];
    infiniteScrollOptions: GridProps['infiniteScrollOptions'];
    enableInfiniteScroll?: GridProps['enableInfiniteScroll'];
    onScroll?: GridProps['onScroll'];
    fetchDataOnScroll?: GridProps['fetchDataOnScroll'];
    enableRowVirtualization?: GridProps['enableRowVirtualization'];
}
export declare const GridBody: (props: GridBodyProps) => React.JSX.Element;
export default GridBody;
