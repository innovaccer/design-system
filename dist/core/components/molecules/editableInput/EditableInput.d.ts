import * as React from 'react';
import { InputProps } from "../../../index.type";
import { BaseProps } from "../../../utils/types";
export interface EditableInputProps extends BaseProps {
    value?: string;
    placeholder?: string;
    size: 'tiny' | 'regular';
    disableSaveAction?: boolean;
    error?: boolean;
    errorMessage?: string;
    inputOptions: Omit<InputProps, 'error' | 'value' | 'defaultValue' | 'size' | 'placeholder'>;
    onChange?: (value: string) => void;
}
export declare const EditableInput: {
    (props: EditableInputProps): React.JSX.Element;
    defaultProps: {
        size: string;
        placeholder: string;
        inputOptions: {};
    };
};
export default EditableInput;
