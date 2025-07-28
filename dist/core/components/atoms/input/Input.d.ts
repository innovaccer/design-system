import * as React from 'react';
import { IconProps } from "../../../index.type";
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
import { AutoComplete, IconType } from "../../../common.type";
export declare type InputType = 'text' | 'password' | 'number' | 'email' | 'tel' | 'url';
export declare type InputSize = 'tiny' | 'regular' | 'large';
export interface InputProps extends BaseProps, BaseHtmlProps<HTMLInputElement> {
    name?: string;
    type?: InputType;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    size?: InputSize;
    icon?: string;
    iconType?: IconType;
    inlineLabel?: string;
    disabled?: boolean;
    required?: boolean;
    autoFocus?: boolean;
    autoComplete?: AutoComplete;
    readOnly?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    error?: boolean;
    info?: string;
    minWidth?: string;
    onClear?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onPaste?: React.ClipboardEventHandler<HTMLInputElement>;
    actionIcon?: React.ReactElement<IconProps>;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
declare const ActionInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>> & {
    ActionButton: {
        (props: import("./actionButton").ActionButtonProps): React.JSX.Element;
        displayName: string;
        defaultProps: {
            size: number;
            type: string;
        };
    };
};
export default ActionInput;
