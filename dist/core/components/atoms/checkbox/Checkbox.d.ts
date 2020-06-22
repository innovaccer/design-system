import * as React from 'react';
export declare type Size = 'regular' | 'tiny';
export interface CheckboxProps {
    size?: Size;
    defaultChecked?: boolean;
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    label?: string;
    name?: string;
    value?: string | number;
    tabIndex?: number;
    onChange?: (checked: boolean, name?: string, value?: string | number, indeterminate?: boolean) => void;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
