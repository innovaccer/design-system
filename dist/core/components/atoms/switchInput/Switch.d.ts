import * as React from 'react';
import { OmitNativeProps, BaseProps } from "../../../utils/types";
export declare type Size = 'regular' | 'tiny' | 'large';
export declare type Appearance = 'primary' | 'alert' | 'success' | 'warning';
declare type MouseEvent = React.ChangeEvent<HTMLInputElement>;
export interface SwitchProps extends BaseProps, OmitNativeProps<HTMLInputElement, 'onChange'> {
    size?: Size;
    appearance?: Appearance;
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
    onChange?: (event: MouseEvent, selected: boolean) => void;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default Switch;
