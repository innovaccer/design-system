import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
import { HeadingAppearance, TextColor } from "../../../common.type";
export interface SubheadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
    children: React.ReactText;
    appearance?: HeadingAppearance;
    color?: TextColor;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
}
export declare const Subheading: React.ForwardRefExoticComponent<SubheadingProps & React.RefAttributes<HTMLHeadingElement>>;
export default Subheading;
