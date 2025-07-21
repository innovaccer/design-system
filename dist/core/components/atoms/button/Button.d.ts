import * as React from 'react';
import { BaseProps, BaseHtmlProps } from "../../../utils/types";
import { IconType } from "../../../common.type";
export declare type ButtonType = 'button' | 'submit' | 'reset';
export declare type ButtonAppearance = 'basic' | 'primary' | 'success' | 'alert' | 'transparent';
export declare type ButtonSize = 'tiny' | 'regular' | 'large';
export declare type ButtonAlignment = 'left' | 'right';
export interface ButtonProps extends BaseProps, BaseHtmlProps<HTMLButtonElement> {
    type?: ButtonType;
    size?: ButtonSize;
    appearance?: ButtonAppearance;
    disabled?: boolean;
    expanded?: boolean;
    selected?: boolean;
    loading?: boolean;
    tooltip?: string;
    icon?: string;
    iconAlign?: ButtonAlignment;
    largeIcon?: boolean;
    iconType?: IconType;
    children?: React.ReactText;
    tabIndex?: number;
    autoFocus?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
