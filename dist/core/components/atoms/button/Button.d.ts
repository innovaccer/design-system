import * as React from 'react';
import { BaseProps } from '@/utils/types';
export declare type Appearance = 'basic' | 'primary' | 'success' | 'alert' | 'transparent';
export declare type Size = 'tiny' | 'regular' | 'large';
export declare type Alignment = 'left' | 'right';
export interface ButtonProps extends BaseProps {
    size?: Size;
    appearance?: Appearance;
    disabled?: boolean;
    expanded?: boolean;
    loading?: boolean;
    icon?: string;
    iconAlign?: Alignment;
    children?: string;
    tabIndex?: number;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
