/// <reference types="react" />
import { BaseProps } from "../../../utils/types";
import { Appearance } from "../avatar";
import { Position, ActionType } from "../../molecules/popover";
export declare type Size = 'regular' | 'tiny';
interface AvatarData extends Record<string, any> {
    firstName?: string;
    lastName?: string;
    appearance?: Appearance;
}
interface PopperProps {
    popperRenderer?: (names: AvatarData[]) => JSX.Element;
    appendToBody?: boolean;
    dark?: boolean;
    position?: Position;
    on?: ActionType;
    maxHeight?: number;
    popperClassName?: string;
}
export interface AvatarGroupProps extends BaseProps {
    list: AvatarData[];
    max: number;
    borderColor: string;
    popoverOptions: PopperProps;
    tooltipPosition: Position;
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
