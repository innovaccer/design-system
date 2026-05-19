import * as React from 'react';
import { BaseProps, OmitNativeProps } from "../../../utils/types";
import { ChangeEvent } from "../../../common.type";
export declare type RadioSize = 'regular' | 'tiny';
export interface RadioProps extends BaseProps, OmitNativeProps<HTMLInputElement, 'onChange'> {
    size?: RadioSize;
    disabled?: boolean;
    label?: string;
    helpText?: string;
    name: string;
    value: string;
    defaultChecked?: boolean;
    checked?: boolean;
    error?: boolean;
    onChange?: (event: ChangeEvent) => void;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export default Radio;
