import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexJustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type FlexAlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
export type FlexGap = 'spacing-10' | 'spacing-20' | 'spacing-30' | 'spacing-40' | 'spacing-60' | 'spacing-80' | 'spacing-120' | 'spacing-160';
export type ResponsiveValue<T> = T | {
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
};
export interface FlexProps extends BaseProps, Omit<BaseHtmlProps<HTMLDivElement>, 'wrap'> {
    direction?: ResponsiveValue<FlexDirection>;
    justifyContent?: ResponsiveValue<FlexJustifyContent>;
    alignItems?: ResponsiveValue<FlexAlignItems>;
    wrap?: ResponsiveValue<FlexWrap>;
    gap?: ResponsiveValue<FlexGap>;
    columnGap?: ResponsiveValue<FlexGap>;
    rowGap?: ResponsiveValue<FlexGap>;
    children?: React.ReactNode;
}
export declare const Flex: {
    (props: FlexProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        direction: string;
        justifyContent: string;
        alignItems: string;
        wrap: string;
    };
};
export default Flex;
