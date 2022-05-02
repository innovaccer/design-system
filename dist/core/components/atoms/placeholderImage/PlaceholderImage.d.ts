import { BaseProps } from "../../../utils/types";
export declare type PlaceholderImageSize = 'small' | 'medium' | 'large';
export interface PlaceholderImageProps extends BaseProps {
    round?: boolean;
    size: PlaceholderImageSize;
}
export declare const PlaceholderImage: {
    (props: PlaceholderImageProps): JSX.Element;
    displayName: string;
    defaultProps: {
        size: string;
    };
};
export default PlaceholderImage;
