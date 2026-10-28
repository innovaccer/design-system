import * as React from 'react';
import { AvatarData } from "../AvatarSelection";
import { AvatarSize } from "../../../../common.type";
interface AvatarPopoverProps {
    hiddenAvatarList: AvatarData[];
    searchPlaceholder?: string;
    searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
    children?: React.ReactNode;
    customStyle: {
        width?: number;
        minHeight?: number;
        maxHeight?: number;
    };
    size?: AvatarSize;
}
export declare const AvatarSelectionPopover: (props: AvatarPopoverProps) => React.JSX.Element;
export default AvatarSelectionPopover;
