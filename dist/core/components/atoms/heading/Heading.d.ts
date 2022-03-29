import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
import { HeadingAppearance } from "../../../common.type";
export declare type HeadingSize = 's' | 'm' | 'l' | 'xl' | 'xxl';
export interface HeadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
    children: React.ReactText;
    appearance: HeadingAppearance;
    size: HeadingSize;
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
