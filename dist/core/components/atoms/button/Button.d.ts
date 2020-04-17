import * as React from 'react';
export declare type Appearance = 'basic' | 'primary' | 'success' | 'alert' | 'transparent';
export declare type Size = 'tiny' | 'regular' | 'large';
export declare type Alignment = 'left' | 'right';
export interface ButtonProps {
    size?: Size;
    appearance?: Appearance;
    disabled?: boolean;
    expanded?: boolean;
    loading?: boolean;
    icon?: string;
    iconAlign?: Alignment;
    children?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export declare const Button: React.FunctionComponent<ButtonProps>;
export default Button;
