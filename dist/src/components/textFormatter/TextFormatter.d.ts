import * as React from 'react';
import { BaseProps, BaseHtmlProps } from "../../utils/types";
export interface TextFormatterProps extends BaseProps, BaseHtmlProps<HTMLElement> {
    children: React.ReactNode;
}
export declare const Bold: (props: TextFormatterProps) => JSX.Element;
export declare const Italic: (props: TextFormatterProps) => JSX.Element;
export declare const Underline: (props: TextFormatterProps) => JSX.Element;
export declare const Strikethrough: (props: TextFormatterProps) => JSX.Element;
