import * as React from 'react';
import { AvatarSize } from "../../../../common.type";
import { AvatarProps, TooltipProps } from "../../../../index.type";
interface SelectionAvatarProps {
    size?: AvatarSize;
    appearance?: AvatarProps['appearance'];
    firstName?: string;
    lastName?: string;
    withTooltip?: boolean;
    icon?: React.ReactNode;
    image?: React.ReactNode;
    tooltipPosition?: TooltipProps['position'];
    disabled?: boolean;
    tooltipSuffix?: string;
}
export declare const SelectionAvatar: (props: SelectionAvatarProps) => React.JSX.Element;
export default SelectionAvatar;
