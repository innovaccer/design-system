import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
export type GridColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridRowSpan = 1 | 2 | 3 | 4 | 5 | 6;
export type GridJustifySelf = 'start' | 'end' | 'center' | 'stretch';
export type GridAlignSelf = 'start' | 'end' | 'center' | 'stretch';
export interface GridItemProps extends BaseProps, Omit<BaseHtmlProps<HTMLDivElement>, 'rowSpan'> {
    columnSpan?: GridColumnSpan;
    rowSpan?: GridRowSpan;
    columnStart?: number;
    rowStart?: number;
    justifySelf?: GridJustifySelf;
    alignSelf?: GridAlignSelf;
    children?: React.ReactNode;
}
export declare const GridItem: {
    (props: GridItemProps): React.JSX.Element;
    defaultProps: {
        columnSpan: number;
        rowSpan: number;
    };
};
export default GridItem;
