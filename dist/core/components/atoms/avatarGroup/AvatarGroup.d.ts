import { BaseProps } from "../../../utils/types";
import { AvatarProps, PopoverProps } from "../../../index.type";
interface AvatarData extends Record<string, any> {
    firstName?: string;
    lastName?: string;
    appearance?: AvatarProps['appearance'];
}
interface AvatarPopoverProps {
    popperRenderer?: (names: AvatarData[]) => JSX.Element;
    appendToBody?: PopoverProps['appendToBody'];
    dark?: PopoverProps['dark'];
    position?: PopoverProps['position'];
    on?: PopoverProps['on'];
    maxHeight?: number;
    popperClassName?: string;
}
export interface AvatarGroupProps extends BaseProps {
    list: AvatarData[];
    max: number;
    borderColor: string;
    popoverOptions: AvatarPopoverProps;
    tooltipPosition: PopoverProps['position'];
}
export declare const AvatarGroup: {
    (props: AvatarGroupProps): JSX.Element;
    displayName: string;
    defaultProps: {
        max: number;
        borderColor: string;
        tooltipPosition: string;
        popoverOptions: {};
    };
};
export default AvatarGroup;
