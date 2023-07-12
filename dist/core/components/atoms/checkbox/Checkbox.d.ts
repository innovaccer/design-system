import * as React from 'react';
import { BaseProps, OmitNativeProps } from "../../../utils/types";
import { ChangeEvent } from "../../../common.type";
export declare type CheckBoxSize = 'regular' | 'tiny';
export interface CheckboxProps extends BaseProps, OmitNativeProps<HTMLInputElement, 'onChange'> {
    size?: CheckBoxSize;
    defaultChecked?: boolean;
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    label?: string;
    helpText?: string;
    name?: string;
    value?: string | number;
    tabIndex?: number;
    onChange?: (event: ChangeEvent) => void;
    error?: boolean;
    id?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
