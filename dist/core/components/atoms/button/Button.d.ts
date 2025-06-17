import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { IconType } from '@/common.type';
export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonAppearance = 'basic' | 'primary' | 'success' | 'alert' | 'transparent';
export type ButtonSize = 'tiny' | 'regular' | 'large';
export type ButtonAlignment = 'left' | 'right';
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
