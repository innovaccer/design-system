import * as React from 'react';
import { BaseProps, Validators, Mask } from "../../../utils/types";
import { InputProps } from "../../../index.type";
export interface MaskProps extends BaseProps {
    mask: Mask;
    placeholderChar?: string;
    caption?: string;
    validators?: Validators;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, maskedVal: string) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>, maskedVal: string) => void;
    onClear?: (e: React.MouseEvent<HTMLElement>) => void;
}
export declare type InputMaskProps = InputProps & MaskProps;
export declare const InputMask: React.ForwardRefExoticComponent<InputProps & MaskProps & React.RefAttributes<HTMLInputElement>>;
export default InputMask;
