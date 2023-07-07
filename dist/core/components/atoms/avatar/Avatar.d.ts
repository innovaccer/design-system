import { BaseProps } from "../../../utils/types";
import { TooltipProps } from "../../../index.type";
import { AccentAppearance } from "../../../common.type";
export declare type AvatarSize = 'regular' | 'tiny';
export interface AvatarProps extends BaseProps {
    appearance?: AccentAppearance;
    children?: string;
    firstName?: string;
    lastName?: string;
    withTooltip: boolean;
    tooltipPosition: TooltipProps['position'];
    size: AvatarSize;
}
export declare const Avatar: {
    (props: AvatarProps): JSX.Element;
    displayName: string;
    defaultProps: {
        tooltipPosition: string;
        withTooltip: boolean;
        size: string;
    };
};
export default Avatar;
