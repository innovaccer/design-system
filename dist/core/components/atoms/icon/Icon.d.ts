import * as React from 'react';
export declare type Appearance = 'default' | 'destructive' | 'white' | 'subtle' | 'disabled' | 'info' | 'alert' | 'warning' | 'success';
export declare type IconType = 'filled' | 'outline' | 'rounded' | 'sharp';
export interface IconProps {
    name: string;
    size?: number;
    type?: IconType;
    appearance?: Appearance;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    helpers?: string[];
}
export declare const Icon: React.FunctionComponent<IconProps>;
export default Icon;
