import * as React from 'react';
import { BaseProps } from '@/utils/types';
export declare type Appearance = 'default' | 'destructive' | 'white' | 'subtle' | 'disabled' | 'info' | 'alert' | 'warning' | 'success';
export declare type IconType = 'filled' | 'outline' | 'rounded' | 'sharp';
export interface IconProps extends BaseProps {
    name: string;
    size?: number;
    type?: IconType;
    appearance?: Appearance;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export declare const Icon: {
    (props: IconProps): JSX.Element;
    defaultProps: {
        appearance: string;
        size: number;
    };
    displayName: string;
};
export default Icon;
