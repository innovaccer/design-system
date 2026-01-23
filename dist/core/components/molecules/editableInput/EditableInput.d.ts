import * as React from 'react';
import { InputProps } from '@/index.type';
import { BaseProps } from '@/utils/types';
export type EditableInputProps = {
    value?: string;
    placeholder?: string;
    size?: 'tiny' | 'regular';
    disableSaveAction?: boolean;
    error?: boolean;
    errorMessage?: string;
    inputOptions?: Omit<InputProps, 'error' | 'value' | 'defaultValue' | 'size' | 'placeholder'>;
    onChange?: (value: string) => void;
} & BaseProps;
export declare const EditableInput: (props: EditableInputProps) => React.JSX.Element;
export default EditableInput;
