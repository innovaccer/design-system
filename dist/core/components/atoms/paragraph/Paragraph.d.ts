import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
export declare type ParagraphAppearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';
export interface ParagraphProps extends BaseProps, BaseHtmlProps<HTMLParagraphElement> {
    children: React.ReactNode;
    appearance: ParagraphAppearance;
}
export declare const Paragraph: {
    (props: ParagraphProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
    };
};
export default Paragraph;
