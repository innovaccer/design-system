import * as React from 'react';
import { BaseProps } from '@/utils/types';
export declare type Size = 'regular' | 'tiny';
declare type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export interface CheckboxProps extends BaseProps {
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
