import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
export declare type Size = 's' | 'm' | 'l' | 'xl' | 'xxl';
export declare type Appearance = 'default' | 'subtle' | 'disabled' | 'white';
export interface HeadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
    children: React.ReactText;
    appearance: Appearance;
    size: Size;
}
export declare const Heading: {
    (props: HeadingProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        size: string;
    };
};
export default Heading;
