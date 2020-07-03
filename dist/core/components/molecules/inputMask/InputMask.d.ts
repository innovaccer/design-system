import * as React from 'react';
import { InputProps } from '@/components/atoms/input';
import { BaseProps } from '@/utils/types';
export declare type Mask = (string | RegExp)[];
export interface MaskProps extends BaseProps {
    mask: Mask;
    placeholderChar?: string;
    caption?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, val?: string) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>, val?: string) => void;
    onClear?: (e: React.MouseEvent<HTMLElement>) => void;
}
export declare type InputMaskProps = InputProps & MaskProps;
export declare const InputMask: React.ForwardRefExoticComponent<InputProps & MaskProps & React.RefAttributes<HTMLInputElement>>;
export default InputMask;
