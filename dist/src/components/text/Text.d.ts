import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../utils/types";
export declare type TextSize = 'small' | 'regular' | 'large';
export declare type TextAppearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled' | 'success' | 'link';
export interface TextProps extends BaseProps, BaseHtmlProps<HTMLSpanElement> {
    children: React.ReactText;
    weight?: 'strong' | 'medium';
    appearance: TextAppearance;
    size: TextSize;
}
export declare const Text: {
    (props: TextProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        size: string;
    };
};
export default Text;
