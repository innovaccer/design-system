import { AvatarData } from "./AvatarGroup";
interface AvatarPopperProps {
    popperRenderer?: (names: AvatarData[]) => JSX.Element;
    maxHeight?: number | string;
    minHeight?: number | string;
    width?: number | string;
    popperClassName?: string;
    hiddenAvatarList: AvatarData[];
}
declare const AvatarPopperBody: (props: AvatarPopperProps) => JSX.Element;
export default AvatarPopperBody;
