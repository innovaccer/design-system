/// <reference types="react" />
import { BaseProps } from "../../../utils/types";
import { TooltipProps } from "../../../index.type";
export declare type Appearance = 'primary' | 'secondary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';
export declare type Size = 'regular' | 'tiny';
export interface AvatarProps extends BaseProps {
    appearance?: Appearance;
    children?: string;
    firstName?: string;
    lastName?: string;
    withTooltip: boolean;
    tooltipPosition: TooltipProps['position'];
    size: Size;
}
export declare const Avatar: {
    (props: AvatarProps): JSX.Element;
    displayName: string;
    defaultProps: {
        tooltipPosition: string;
        withTooltip: boolean;
        size: string;
    };
};
export default Avatar;
