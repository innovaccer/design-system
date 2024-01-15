import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { TooltipProps } from "../../../index.type";
import { AccentAppearance, AvatarSize } from "../../../common.type";
export interface AvatarProps extends BaseProps {
    appearance?: AccentAppearance;
    children?: string | React.ReactNode;
    firstName?: string;
    lastName?: string;
    withTooltip: boolean;
    tooltipPosition: TooltipProps['position'];
    size: AvatarSize;
}
export declare const Avatar: {
    (props: AvatarProps): JSX.Element;
    displayName: string;
    Icon: (props: import("./avatarIcon").AvatarIconProps) => JSX.Element;
    Image: (props: import("./avatarImage").AvatarImageProps) => JSX.Element;
    defaultProps: {
        tooltipPosition: string;
        withTooltip: boolean;
        size: string;
    };
};
export default Avatar;
