import * as React from 'react';
declare type ReactMouseEvent = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
export declare type Size = 'tiny' | 'regular';
export interface DropdownButtonProps {
    size?: Size;
    disabled?: boolean;
    menu?: boolean;
    icon?: string;
    inlineLabel?: string;
    placeholder?: string;
    children?: string;
    width?: React.ReactText;
    onClick?: ReactMouseEvent;
    onMouseEnter?: ReactMouseEvent;
    onMouseLeave?: ReactMouseEvent;
}
declare const DropdownButton: React.ForwardRefExoticComponent<DropdownButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default DropdownButton;
