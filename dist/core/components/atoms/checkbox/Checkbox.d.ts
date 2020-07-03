import * as React from 'react';
export declare type Size = 'regular' | 'tiny';
declare type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
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
    onChange?: (event: ChangeEvent) => void;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
