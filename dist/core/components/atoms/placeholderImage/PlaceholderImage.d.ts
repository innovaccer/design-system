/// <reference types="react" />
import { BaseProps } from "../../../utils/types";
export declare type Size = 'small' | 'medium' | 'large';
export interface PlaceholderImageProps extends BaseProps {
    round?: boolean;
    size: Size;
}
export declare const PlaceholderImage: {
    (props: PlaceholderImageProps): JSX.Element;
    displayName: string;
    defaultProps: {
        size: string;
    };
};
export default PlaceholderImage;
