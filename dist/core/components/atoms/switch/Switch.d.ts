import * as React from 'react';
export declare type Size = 'regular' | 'tiny' | 'large';
export declare type Appearance = 'primary' | 'alert' | 'success' | 'warning';
export interface SwitchProps {
    size?: Size;
    appearance?: Appearance;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
    onChange?: (selected: boolean) => void;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default Switch;
