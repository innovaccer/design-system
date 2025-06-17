import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { IconType } from '@/common.type';
export type ButtonType = 'button' | 'submit' | 'reset';
export type LinkButtonSize = 'tiny' | 'regular';
export type IconAlignment = 'left' | 'right';
export interface LinkButtonProps extends BaseProps, BaseHtmlProps<HTMLButtonElement> {
    type?: ButtonType;
    size?: LinkButtonSize;
    disabled?: boolean;
    icon?: string;
    iconAlign?: IconAlignment;
    iconType?: IconType;
    children: React.ReactText;
    tabIndex?: number;
    autoFocus?: boolean;
    subtle?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export declare const LinkButton: React.ForwardRefExoticComponent<LinkButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default LinkButton;
