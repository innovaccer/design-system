import * as React from 'react';
import { IconType } from '@/common.type';
export type DropDownButtonSize = 'tiny' | 'regular';
export interface TriggerProps {
    triggerSize?: DropDownButtonSize;
    icon?: string;
    iconType?: IconType;
    placeholder?: string;
    inlineLabel?: string;
    disabled?: boolean;
    menu?: boolean;
    error?: boolean;
}
export interface DropdownButtonProps extends TriggerProps {
    children?: string | number;
    open?: boolean;
}
declare const DropdownButton: React.ForwardRefExoticComponent<DropdownButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default DropdownButton;
