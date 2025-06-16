import React from 'react';
import { BaseProps } from '@/utils/types';
export interface EmptyImageProps extends BaseProps, React.ImgHTMLAttributes<HTMLImageElement> {
    children?: React.ReactNode;
    src?: string;
    alt?: string;
    height?: string | number;
    minHeight?: string | number;
    maxHeight?: string | number;
}
export declare const imageHeight: {
    standard: string;
    compressed: string;
    tight: string;
    large: string;
    small: string;
};
declare const EmptyStateImage: (props: EmptyImageProps) => React.JSX.Element;
export default EmptyStateImage;
