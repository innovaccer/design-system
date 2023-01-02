import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
import { HeadingAppearance } from "../../../common.type";
export interface SubheadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
    children: React.ReactText;
    appearance: HeadingAppearance;
}
export declare const Subheading: {
    (props: SubheadingProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
    };
};
export default Subheading;
