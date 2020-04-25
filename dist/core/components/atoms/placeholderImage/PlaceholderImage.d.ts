/// <reference types="react" />
export declare type Size = 'small' | 'medium' | 'large';
export interface PlaceholderImageProps {
    round?: boolean;
    imageSize?: Size;
}
export declare const PlaceholderImage: {
    (props: PlaceholderImageProps): JSX.Element;
    displayName: string;
};
export default PlaceholderImage;
