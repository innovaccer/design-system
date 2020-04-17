import * as React from 'react';
export declare type Size = 'small' | 'medium' | 'large';
export interface PlaceholderImageProps {
    round?: boolean;
    imageSize?: Size;
}
export declare const PlaceholderImage: React.FunctionComponent<PlaceholderImageProps>;
export default PlaceholderImage;
