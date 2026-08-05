import React from 'react';
import { BaseProps } from '@/utils/types';
export type EmptyImageProps = {
    children?: React.ReactNode;
    src?: string;
    alt?: string;
    height?: string | number;
    minHeight?: string | number;
    maxHeight?: string | number;
} & BaseProps & React.ImgHTMLAttributes<HTMLImageElement>;
export declare const imageHeight: {
    standard: string;
    compressed: string;
    tight: string;
    large: string;
    small: string;
};
declare const EmptyStateImage: (props: EmptyImageProps) => React.JSX.Element;
export default EmptyStateImage;
