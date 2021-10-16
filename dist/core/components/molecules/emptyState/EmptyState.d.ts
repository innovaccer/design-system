import * as React from 'react';
import { HeadingProps, TextProps } from "../../../index.type";
import { BaseProps } from "../../../utils/types";
declare type Size = 'large' | 'small';
export interface EmptyStateProps extends BaseProps {
    imageSrc?: string;
    title: string;
    description: string;
    size: Size;
    children?: React.ReactNode;
    image?: React.ReactNode;
}
export declare const imageHeight: {
    large: string;
    small: string;
};
export declare const HeadingSize: Record<Size, HeadingProps['size']>;
export declare const textSize: Record<Size, TextProps['size']>;
export declare const EmptyState: {
    (props: EmptyStateProps): JSX.Element;
    displayName: string;
};
export default EmptyState;
