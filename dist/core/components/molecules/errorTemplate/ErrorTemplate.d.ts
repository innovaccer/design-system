import * as React from 'react';
import { HeadingProps, TextProps } from "../../../index.type";
import { BaseProps } from "../../../utils/types";
declare type Template = 'NO_CONTENT' | 'NO_SEARCH' | 'ERROR';
interface Image {
    height?: string;
    className?: string;
    src: string;
}
export interface ErrorTemplateProps extends BaseProps {
    image: Image;
    title: string;
    description: string;
    templateType: Template;
    children?: React.ReactNode;
}
export declare const defaultImageHeight: {
    NO_CONTENT: string;
    NO_SEARCH: string;
    ERROR: string;
};
export declare const HeadingSize: Record<Template, HeadingProps['size']>;
export declare const textSize: Record<Template, TextProps['size']>;
export declare const ErrorTemplate: {
    (props: ErrorTemplateProps): JSX.Element;
    displayName: string;
};
export default ErrorTemplate;
