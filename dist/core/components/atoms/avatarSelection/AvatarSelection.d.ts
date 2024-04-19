import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { AvatarProps, TooltipProps } from "../../../index.type";
import { AvatarSize } from "../../../common.type";
export interface AvatarData extends Record<string, any> {
    firstName?: string;
    lastName?: string;
    appearance?: AvatarProps['appearance'];
    icon?: React.ReactNode;
    image?: React.ReactNode;
    selected?: boolean;
}
export interface AvatarSelectionProps extends BaseProps {
    list: AvatarData[];
    max: number;
    borderColor: string;
    size: AvatarSize;
    tooltipPosition: TooltipProps['position'];
    avatarRenderer?: (data: AvatarData) => JSX.Element;
    onSelect?: (data?: AvatarData) => void;
    width?: number;
    maxHeight?: number;
    minHeight?: number;
    withSearch?: boolean;
    searchPlaceholder?: string;
    searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
    children?: React.ReactNode;
    className?: string;
}
export declare const AvatarSelection: {
    (props: AvatarSelectionProps): JSX.Element;
    displayName: string;
    defaultProps: {
        max: number;
        tooltipPosition: string;
        borderColor: string;
        size: string;
        width: number;
        maxHeight: number;
    };
    Input: (props: import("../input/Input").InputProps) => JSX.Element;
    List: {
        (props: import("./avatarPopover").SelectionListProps): JSX.Element;
        defaultProps: {
            type: string;
            showDivider: boolean;
            size: string;
            tagName: string;
        };
    };
    Option: {
        (props: import("./avatarPopover").SelectionOptionProps): JSX.Element;
        defaultProps: {
            tagName: string;
        };
    };
    EmptyState: (props: import("./avatarPopover").AvatarEmptyStateProps) => JSX.Element;
};
export default AvatarSelection;
