import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type Appearance = 'default' | 'destructive' | 'white' | 'subtle' | 'disabled' | 'info' | 'alert' | 'warning' | 'success';
export declare type IconType = 'filled' | 'outlined' | 'outline' | 'rounded' | 'round' | 'two-tone' | 'sharp';
export interface IconProps extends BaseProps {
    name: string;
    size: number;
    type?: IconType;
    appearance: Appearance;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export declare const Icon: {
    (props: IconProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        size: number;
    };
};
export default Icon;
