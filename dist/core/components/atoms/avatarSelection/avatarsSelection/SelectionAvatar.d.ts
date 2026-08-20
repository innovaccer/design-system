import * as React from 'react';
import { AvatarSize, AvatarShape } from '@/common.type';
import { AvatarProps, TooltipProps } from '@/index.type';
interface SelectionAvatarProps {
    size?: AvatarSize;
    shape?: AvatarShape;
    appearance?: AvatarProps['appearance'];
    firstName?: string;
    lastName?: string;
    withTooltip?: boolean;
    icon?: React.ReactNode;
    image?: React.ReactNode;
    tooltipPosition?: TooltipProps['position'];
    disabled?: boolean;
    tooltipSuffix?: string;
    'aria-label'?: string;
    'aria-checked'?: boolean;
    'aria-disabled'?: boolean;
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLSpanElement>) => void;
}
export declare const SelectionAvatar: (props: SelectionAvatarProps) => React.JSX.Element;
export default SelectionAvatar;
