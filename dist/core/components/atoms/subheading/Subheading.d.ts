import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
export declare type Appearance = 'default' | 'subtle' | 'disabled' | 'white';
export interface SubheadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
    children: React.ReactText;
    appearance: Appearance;
}
export declare const Subheading: {
    (props: SubheadingProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
    };
};
export default Subheading;
