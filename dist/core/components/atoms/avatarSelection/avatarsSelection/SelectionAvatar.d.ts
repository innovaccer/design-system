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
}
export declare const SelectionAvatar: (props: SelectionAvatarProps) => JSX.Element;
export default SelectionAvatar;
