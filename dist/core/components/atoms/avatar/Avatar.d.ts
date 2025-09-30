import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { TooltipProps } from "../../../index.type";
import { AccentAppearance, AvatarSize, AvatarShape } from "../../../common.type";
declare type TPresence = 'active' | 'away';
export interface AvatarProps extends BaseProps {
    appearance?: AccentAppearance;
    children?: string | React.ReactNode;
    firstName?: string;
    lastName?: string;
    withTooltip: boolean;
    tooltipPosition: TooltipProps['position'];
    tooltipSuffix?: string;
    size: AvatarSize;
    shape: AvatarShape;
    disabled?: boolean;
    role?: string;
    tabIndex?: number;
    presence?: TPresence;
    status?: React.ReactNode;
    strokeColor?: string;
}
export declare const Avatar: {
    (props: AvatarProps): React.JSX.Element;
    displayName: string;
    Icon: (props: import("./avatarIcon").AvatarIconProps) => React.JSX.Element;
    Image: (props: import("./avatarImage").AvatarImageProps) => React.JSX.Element;
    defaultProps: {
        tooltipPosition: string;
        withTooltip: boolean;
        size: string;
        shape: string;
        strokeColor: string;
    };
};
export default Avatar;
