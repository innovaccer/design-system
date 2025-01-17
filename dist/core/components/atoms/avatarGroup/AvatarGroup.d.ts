import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { AvatarProps, PopoverProps } from "../../../index.type";
import { AvatarSize } from "../../../common.type";
export interface AvatarData extends Record<string, any> {
    firstName?: string;
    lastName?: string;
    appearance?: AvatarProps['appearance'];
    icon?: React.ReactNode;
    image?: React.ReactNode;
    disabled?: boolean;
    tooltipSuffix?: string;
}
interface AvatarPopoverProps {
    popperRenderer?: (names: AvatarData[]) => JSX.Element;
    appendToBody?: PopoverProps['appendToBody'];
    dark?: PopoverProps['dark'];
    position?: PopoverProps['position'];
    popperClassName?: string;
    on?: PopoverProps['on'];
    maxHeight?: number | string;
    minHeight?: number | string;
    width?: number | string;
    withSearch?: boolean;
    searchPlaceholder?: string;
    searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
}
export interface AvatarGroupProps extends BaseProps {
    list: AvatarData[];
    max: number;
    borderColor: string;
    size: AvatarSize;
    popoverOptions: AvatarPopoverProps;
    tooltipPosition: PopoverProps['position'];
}
export declare const AvatarGroup: {
    (props: AvatarGroupProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        max: number;
        tooltipPosition: string;
        borderColor: string;
        popoverOptions: {};
        size: string;
    };
};
export default AvatarGroup;
