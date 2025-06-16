import * as React from 'react';
import { AvatarData } from './AvatarGroup';
interface AvatarPopperProps {
    popperRenderer?: (names: AvatarData[]) => JSX.Element;
    maxHeight?: number | string;
    minHeight?: number | string;
    width?: number | string;
    popperClassName?: string;
    hiddenAvatarList: AvatarData[];
    withSearch?: boolean;
    searchPlaceholder?: string;
    searchComparator?: (searchValue: string, avatarData: AvatarData) => boolean;
    size?: AvatarData['size'];
}
declare const AvatarPopperBody: (props: AvatarPopperProps) => React.JSX.Element;
export default AvatarPopperBody;
