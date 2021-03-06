import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type Appearance = 'default' | 'destructive' | 'white' | 'subtle' | 'disabled' | 'info' | 'alert' | 'warning' | 'success' | 'primary_lighter' | 'primary' | 'primary_dark' | 'alert_lighter' | 'alert_dark' | 'warning_lighter' | 'warning_dark' | 'success_lighter' | 'success_dark' | 'accent1' | 'accent1_lighter' | 'accent1_dark' | 'accent2' | 'accent2_lighter' | 'accent2_dark' | 'accent3' | 'accent3_lighter' | 'accent3_dark' | 'accent4' | 'accent4_lighter' | 'accent4_dark' | 'inverse';
export declare type IconType = 'filled' | 'outlined' | 'outline' | 'rounded' | 'round' | 'two-tone' | 'sharp';
export interface IconProps extends BaseProps {
    name?: string;
    size: number;
    type?: IconType;
    appearance?: Appearance;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    children?: React.ReactNode;
}
export declare const Icon: {
    (props: IconProps): JSX.Element;
    displayName: string;
    defaultProps: {
        size: number;
        type: string;
    };
};
export default Icon;
