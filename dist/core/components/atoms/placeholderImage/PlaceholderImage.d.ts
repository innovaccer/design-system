/// <reference types="react" />
export declare type Size = 'small' | 'medium' | 'large';
export interface PlaceholderImageProps {
    round?: boolean;
    size?: Size;
}
export declare const PlaceholderImage: {
    (props: PlaceholderImageProps): JSX.Element;
    displayName: string;
};
export default PlaceholderImage;
