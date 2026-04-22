import * as React from 'react';
import { InputProps } from '@/index.type';
import { BaseProps } from '@/utils/types';
export interface TextFieldWithInputProps extends BaseProps {
    label?: string;
    helpText?: string;
}
export type TextFieldInputProps = TextFieldWithInputProps & InputProps;
export declare const TextFieldWithInput: (props: TextFieldInputProps) => React.JSX.Element;
export default TextFieldWithInput;
