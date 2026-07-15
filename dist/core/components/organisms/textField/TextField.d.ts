import * as React from 'react';
import { TextFieldTextareaProps } from './TextFieldWithTextarea';
import { TextFieldInputProps } from './TextFieldWithInput';
export type TextFieldProps = TextFieldTextareaProps & TextFieldInputProps;
export declare const TextField: {
    (props: TextFieldProps): React.JSX.Element;
    displayName: string;
};
export default TextField;
