import * as React from 'react';
export interface TextAreaProps {
    name: string;
    value?: string;
    placeholder?: string;
    rows?: number;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
