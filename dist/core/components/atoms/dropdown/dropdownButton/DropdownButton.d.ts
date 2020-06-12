import * as React from 'react';
declare type Appearance = 'basic' | 'primary' | 'success' | 'alert' | 'transparent';
declare type ReactMouseEvent = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
export declare type Size = 'tiny' | 'regular';
export interface DropdownButtonProps {
    size?: Size;
    appearance?: Appearance;
    disabled?: boolean;
    menu?: boolean;
    icon?: string;
    inlineLabel?: string;
    placeholder?: string;
    children?: string;
    width?: React.ReactText;
    maxWidth?: number;
    onClick?: ReactMouseEvent;
    onMouseEnter?: ReactMouseEvent;
    onMouseLeave?: ReactMouseEvent;
}
declare const DropdownButton: React.ForwardRefExoticComponent<DropdownButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default DropdownButton;
