import * as React from 'react';
import { OmitNativeProps, BaseProps } from '@/utils/types';
import { ChangeEvent } from '@/common.type';
export type SwitchSize = 'regular' | 'tiny' | 'large';
export type SwitchAppearance = 'primary' | 'alert' | 'success' | 'warning';
type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
export interface SwitchProps extends BaseProps, OmitNativeProps<HTMLInputElement, 'onChange'> {
    size?: SwitchSize;
    appearance?: SwitchAppearance;
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
    onChange?: (event: ChangeEvent | KeyboardEvent, selected: boolean) => void;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default Switch;
