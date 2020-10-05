import * as React from 'react';
import { InputProps } from "../../atoms/input";
import { BaseProps, SingleOrArray } from "../../../utils/types";
export declare type Mask = (string | RegExp)[];
export declare type ValidatorFn = (val: string) => boolean;
export interface MaskProps extends BaseProps {
    mask: Mask;
    placeholderChar?: string;
    caption?: string;
    validators?: SingleOrArray<ValidatorFn>;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, maskedVal: string) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>, maskedVal: string) => void;
    onClear?: (e: React.MouseEvent<HTMLElement>) => void;
}
export declare type InputMaskProps = InputProps & MaskProps;
export declare const InputMask: React.ForwardRefExoticComponent<InputProps & MaskProps & React.RefAttributes<HTMLInputElement>>;
export default InputMask;
