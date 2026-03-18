import * as React from 'react';
import { InputProps } from "../../../index.type";
import { BaseProps } from "../../../utils/types";
export interface TextFieldWithInputProps extends BaseProps {
    label?: string;
    helpText?: string;
}
export declare type TextFieldInputProps = TextFieldWithInputProps & InputProps;
export declare const TextFieldWithInput: {
    (props: TextFieldInputProps): React.JSX.Element;
    defaultProps: {
        minWidth: number;
    };
};
export default TextFieldWithInput;
