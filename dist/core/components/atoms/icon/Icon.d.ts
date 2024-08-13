import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type IconAppearance = 'default' | 'destructive' | 'white' | 'subtle' | 'disabled' | 'info' | 'alert' | 'warning' | 'success' | 'primary_lighter' | 'primary' | 'primary_dark' | 'primary_darker' | 'alert_lighter' | 'alert_dark' | 'alert_darker' | 'warning_lighter' | 'warning_dark' | 'warning_darker' | 'success_lighter' | 'success_dark' | 'success_darker' | 'accent1' | 'accent1_lighter' | 'accent1_dark' | 'accent1_darker' | 'accent2' | 'accent2_lighter' | 'accent2_dark' | 'accent2_darker' | 'accent3' | 'accent3_lighter' | 'accent3_dark' | 'accent3_darker' | 'accent4' | 'accent4_lighter' | 'accent4_dark' | 'accent4_darker' | 'inverse';
export declare type IconType = 'filled' | 'outlined' | 'outline' | 'rounded' | 'round' | 'two-tone' | 'sharp';
export interface IconProps extends BaseProps {
    name?: string;
    size: number;
    type?: IconType;
    appearance?: IconAppearance;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    children?: React.ReactNode;
    tabIndex?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>['tabIndex'];
}
export declare const Icon: {
    (props: IconProps): JSX.Element;
    displayName: string;
    defaultProps: {
        size: number;
    };
};
export default Icon;
