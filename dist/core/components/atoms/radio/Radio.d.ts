import * as React from 'react';
import { BaseProps, OmitNativeProps } from '@/utils/types';
import { ChangeEvent } from '@/common.type';
export type RadioSize = 'regular' | 'tiny';
export type RadioProps = {
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
} & BaseProps & OmitNativeProps<HTMLInputElement, 'onChange'>;
export declare const Radio: React.ForwardRefExoticComponent<{
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
} & BaseProps & OmitNativeProps<HTMLInputElement, "onChange"> & React.RefAttributes<HTMLInputElement>>;
export default Radio;
