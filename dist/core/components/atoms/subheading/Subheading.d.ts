import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
import { HeadingAppearance, TextColor } from "../../../common.type";
export interface SubheadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
    children: React.ReactText;
    appearance: HeadingAppearance;
    color?: TextColor;
}
export declare const Subheading: {
    (props: SubheadingProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
    };
};
export default Subheading;
