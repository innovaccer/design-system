import * as React from 'react';
import { BaseProps, BaseHtmlProps } from "../../../utils/types";
export declare type GridTemplateColumns = string;
export declare type GridTemplateRows = string;
export declare type GridGap = 'spacing-10' | 'spacing-20' | 'spacing-30' | 'spacing-40' | 'spacing-60' | 'spacing-80' | 'spacing-120' | 'spacing-160';
export declare type GridAutoFlow = 'row' | 'column' | 'row dense' | 'column dense';
export declare type GridJustifyItems = 'start' | 'end' | 'center' | 'stretch';
export declare type GridAlignItems = 'start' | 'end' | 'center' | 'stretch';
export declare type ResponsiveValue<T> = T | {
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
};
export interface MdsGridProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
    templateColumns?: ResponsiveValue<GridTemplateColumns>;
    templateRows?: ResponsiveValue<GridTemplateRows>;
    gap?: ResponsiveValue<GridGap>;
    columnGap?: ResponsiveValue<GridGap>;
    rowGap?: ResponsiveValue<GridGap>;
    autoFlow?: GridAutoFlow;
    justifyItems?: GridJustifyItems;
    alignItems?: GridAlignItems;
    children?: React.ReactNode;
}
export declare const MdsGrid: {
    (props: MdsGridProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        autoFlow: string;
        justifyItems: string;
        alignItems: string;
    };
    GridItem: {
        (props: import("./GridItem").GridItemProps): React.JSX.Element;
        defaultProps: {
            columnSpan: number;
            rowSpan: number;
        };
    };
};
export default MdsGrid;
