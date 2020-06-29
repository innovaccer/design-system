import * as React from 'react';
export declare type Appearance = 'default' | 'destructive' | 'white' | 'subtle' | 'disabled' | 'info' | 'alert' | 'warning' | 'success';
export declare type IconType = 'filled' | 'outline' | 'rounded' | 'sharp';
export interface IconProps {
    name: string;
    size?: number;
    type?: IconType;
    appearance?: Appearance;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    className?: string;
}
export declare const Icon: {
    (props: IconProps): JSX.Element;
    defaultProps: {
        appearance: string;
        type: string;
        size: number;
    };
    displayName: string;
};
export default Icon;
