import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { TooltipProps } from '@/index.type';
import { AccentAppearance, AvatarSize, AvatarShape } from '@/common.type';
type TPresence = 'active' | 'away';
export type AvatarProps = {
    appearance?: AccentAppearance;
    children?: string | React.ReactNode;
    firstName?: string;
    lastName?: string;
    withTooltip?: boolean;
    tooltipPosition?: TooltipProps['position'];
    tooltipSuffix?: string;
    size?: AvatarSize;
    shape?: AvatarShape;
    disabled?: boolean;
    role?: string;
    tabIndex?: number;
    presence?: TPresence;
    status?: React.ReactNode;
    strokeColor?: string;
} & BaseProps;
export declare const Avatar: {
    (props: AvatarProps): React.JSX.Element;
    displayName: string;
    Icon: (props: import("@/index.type").AvatarIconProps) => React.JSX.Element;
    Image: (props: import("@/index.type").AvatarImageProps) => React.JSX.Element;
};
export default Avatar;
