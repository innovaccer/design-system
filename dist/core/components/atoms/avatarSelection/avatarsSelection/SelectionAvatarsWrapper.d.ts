import { AvatarData } from "../AvatarSelection";
import { AvatarSize } from "../../../../common.type";
import { TooltipProps } from "../../../../index.type";
interface SelectionAvatarsWrapperProps {
    size?: AvatarSize;
    avatarList: AvatarData[];
    avatarRenderer?: (data: AvatarData) => JSX.Element;
    tooltipPosition?: TooltipProps['position'];
    avatarStyle?: {
        backgroundColor?: string;
        boxShadow?: string;
    };
}
export declare const SelectionAvatarsWrapper: (props: SelectionAvatarsWrapperProps) => JSX.Element;
export default SelectionAvatarsWrapper;
