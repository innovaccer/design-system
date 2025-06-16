import * as React from 'react';
import { HeadingProps, TextProps } from '@/index.type';
import { BaseProps } from '@/utils/types';
import { TEmptyStateSize } from '@/common.type';
export interface EmptyStateProps extends BaseProps {
    imageSrc?: string;
    title?: string;
    description?: string;
    image?: React.ReactNode;
    size?: TEmptyStateSize;
    maxWidth?: number | string;
    minWidth?: number | string;
    width?: number | string;
    children?: React.ReactNode;
}
export declare const imageHeight: {
    large: string;
    small: string;
    standard: string;
    compressed: string;
    tight: string;
};
export declare const templateWidth: {
    standard: string;
    compressed: string;
    tight: string;
    large: string;
    small: string;
};
export declare const HeadingSize: Record<TEmptyStateSize, HeadingProps['size']>;
export declare const textSize: Record<TEmptyStateSize, TextProps['size']>;
export declare const EmptyState: {
    (props: EmptyStateProps): React.JSX.Element;
    displayName: string;
    Title: (props: import("./EmptyStateTitle").EmptyDescriptionProps) => React.JSX.Element;
    Description: (props: import("./EmptyStateDescription").EmptyDescriptionProps) => React.JSX.Element;
    Image: (props: import("./EmptyStateImage").EmptyImageProps) => React.JSX.Element;
    Actions: (props: import("./EmptyStateActions").EmptyActionProps) => React.JSX.Element;
    defaultProps: {
        size: string;
    };
};
export default EmptyState;
