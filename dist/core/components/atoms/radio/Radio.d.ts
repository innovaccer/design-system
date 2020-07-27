import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type Size = 'regular' | 'tiny';
declare type MouseEvent = React.ChangeEvent<HTMLInputElement>;
export interface RadioProps extends BaseProps {
    size?: Size;
    disabled?: boolean;
    label?: string;
    name: string;
    value: string;
    defaultChecked?: boolean;
    onChange?: (event: MouseEvent) => void;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export default Radio;
