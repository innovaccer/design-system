import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
import { HeadingAppearance, TextColor } from "../../../common.type";
export declare type HeadingSize = 's' | 'm' | 'l' | 'xl' | 'xxl';
export interface HeadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
    children: React.ReactText;
    appearance?: HeadingAppearance;
    size?: HeadingSize;
    color?: TextColor;
}
export declare const Heading: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;
export default Heading;
