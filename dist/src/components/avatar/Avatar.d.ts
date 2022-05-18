import { BaseProps } from "../../utils/types";
import { AccentAppearance } from "../../common.type";
export declare type AvatarSize = 'regular' | 'tiny';
export interface AvatarProps extends BaseProps {
    appearance?: AccentAppearance;
    text?: string;
    icon?: string;
    image?: {
        src: string;
        altText: string;
    };
    tooltip?: string;
    size: AvatarSize;
}
export declare const Avatar: {
    (props: AvatarProps): JSX.Element;
    displayName: string;
    defaultProps: {
        size: string;
    };
};
export default Avatar;
