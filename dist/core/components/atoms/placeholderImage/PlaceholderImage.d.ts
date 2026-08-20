import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type PlaceholderImageSize = 'small' | 'medium' | 'large';
export type PlaceholderImageProps = {
    round?: boolean;
    size?: PlaceholderImageSize;
} & BaseProps;
export declare const PlaceholderImage: {
    (props: PlaceholderImageProps): React.JSX.Element;
    displayName: string;
};
export default PlaceholderImage;
