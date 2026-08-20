import * as React from 'react';
import { OmitNativeProps, BaseProps } from '@/utils/types';
import { ChangeEvent } from '@/common.type';
export type SwitchSize = 'regular' | 'tiny' | 'large';
export type SwitchAppearance = 'primary' | 'alert' | 'success' | 'warning';
type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
export type SwitchProps = {
    size?: SwitchSize;
    appearance?: SwitchAppearance;
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
    onChange?: (event: ChangeEvent | KeyboardEvent, selected: boolean) => void;
} & BaseProps & OmitNativeProps<HTMLInputElement, 'onChange'>;
export declare const Switch: React.ForwardRefExoticComponent<{
    size?: SwitchSize;
    appearance?: SwitchAppearance;
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
    onChange?: (event: ChangeEvent | KeyboardEvent, selected: boolean) => void;
} & BaseProps & OmitNativeProps<HTMLInputElement, "onChange"> & React.RefAttributes<HTMLInputElement>>;
export default Switch;
