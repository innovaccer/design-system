import * as React from 'react';
import { BaseProps, Validators, Mask } from "../../../utils/types";
import { InputProps } from "../../../index.type";
import { getDefaultValue } from "./utilites";
export interface MaskProps extends BaseProps {
    mask: Mask;
    placeholderChar?: string;
    caption?: string;
    validators?: Validators;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, maskedVal: string) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>, maskedVal: string) => void;
    onClear?: (e: React.MouseEvent<HTMLElement>) => void;
    clearOnEmptyBlur?: boolean;
    helpText?: string;
}
export declare type InputMaskProps = InputProps & MaskProps;
declare type InputMaskType = React.ForwardRefExoticComponent<InputProps & MaskProps & React.RefAttributes<HTMLInputElement>> & {
    utils: {
        getDefaultValue: typeof getDefaultValue;
    };
};
declare const X: InputMaskType;
export { X as InputMask };
declare const _default: InputMaskType;
export default _default;
