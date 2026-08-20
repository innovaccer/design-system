import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { HeadingAppearance, TextColor } from '@/common.type';
export type SubheadingProps = {
    children: string | number;
    appearance?: HeadingAppearance;
    color?: TextColor;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
} & BaseProps & BaseHtmlProps<HTMLHeadingElement>;
export declare const Subheading: React.ForwardRefExoticComponent<{
    children: string | number;
    appearance?: HeadingAppearance;
    color?: TextColor;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
} & BaseProps & BaseHtmlProps<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
export default Subheading;
