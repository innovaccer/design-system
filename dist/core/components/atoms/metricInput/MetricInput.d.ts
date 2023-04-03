import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
import { AutoComplete } from "../../../common.type";
export declare type MetricInputSize = 'regular' | 'large';
export interface MetricInputProps extends BaseProps, BaseHtmlProps<HTMLInputElement> {
    name?: string;
    value?: React.ReactText;
    defaultValue?: React.ReactText;
    placeholder?: string;
    size?: MetricInputSize;
    icon?: string;
    prefix?: string;
    suffix?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    autoComplete?: AutoComplete;
    readOnly?: boolean;
    min?: number;
    max?: number;
    error?: boolean;
    showActionButton?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export declare const MetricInput: React.ForwardRefExoticComponent<MetricInputProps & React.RefAttributes<HTMLInputElement>>;
export default MetricInput;
