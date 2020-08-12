import * as React from 'react';
export declare type Size = 'tiny' | 'regular';
export interface TriggerProps {
    triggerSize?: Size;
    icon?: string;
    placeholder?: string;
    inlineLabel?: string;
    disabled?: boolean;
    menu?: boolean;
    error?: boolean;
    maxWidth?: number;
}
export interface DropdownButtonProps extends TriggerProps {
    children?: React.ReactText;
}
declare const DropdownButton: React.ForwardRefExoticComponent<DropdownButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default DropdownButton;
