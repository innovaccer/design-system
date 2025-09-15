import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { AvatarProps, TooltipProps } from '@/index.type';
import { AvatarSize } from '@/common.type';
export interface AvatarData extends Record<string, any> {
    firstName?: string;
    lastName?: string;
    appearance?: AvatarProps['appearance'];
    icon?: React.ReactNode;
    image?: React.ReactNode;
    selected?: boolean;
    disabled?: boolean;
    tooltipSuffix?: string;
    status?: React.ReactNode;
    presence?: AvatarProps['presence'];
}
export interface AvatarSelectionProps extends BaseProps {
    list: AvatarData[];
    max?: number;
    borderColor?: string;
    size?: AvatarSize;
    tooltipPosition?: TooltipProps['position'];
    avatarRenderer?: (data: AvatarData) => React.JSX.Element;
    onSelect?: (data?: AvatarData) => void;
    width?: number;
    maxHeight?: number;
    minHeight?: number;
    withSearch?: boolean;
    searchPlaceholder?: string;
    searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
    children?: React.JSX.Element;
    className?: string;
}
export declare const AvatarSelection: {
    (props: AvatarSelectionProps): React.JSX.Element;
    displayName: string;
    Input: (props: import("@/index.type").InputProps) => React.JSX.Element;
    List: (props: import("./avatarPopover").SelectionListProps) => React.JSX.Element;
    Option: (props: import("./avatarPopover").SelectionOptionProps) => React.JSX.Element;
    EmptyState: (props: import("./avatarPopover").AvatarEmptyStateProps) => React.JSX.Element;
};
export default AvatarSelection;
