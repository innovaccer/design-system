import * as React from 'react';
export declare type Size = 'regular' | 'tiny';
export interface RadioProps {
    size?: Size;
    disabled?: boolean;
    label?: string;
    name: string;
    value: string;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export default Radio;
