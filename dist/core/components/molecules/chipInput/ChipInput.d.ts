import * as React from 'react';
import { ChipProps } from "../../../index.type";
import { BaseProps } from "../../../utils/types";
declare type ChipOptions = {
    icon?: ChipProps['icon'];
    type?: ChipProps['type'];
    clearButton?: ChipProps['clearButton'];
    onClick?: (value: string, index: number) => void;
};
export interface ChipInputProps extends BaseProps {
    allowDuplicates: boolean;
    chipOptions: ChipOptions;
    disabled?: boolean;
    placeholder?: string;
    value?: string[];
    defaultValue: string[];
    autoFocus: boolean;
    onChange?: (chips: string[]) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export declare const ChipInput: {
    (props: ChipInputProps): JSX.Element;
    displayName: string;
    defaultProps: {
        chipOptions: {};
        defaultValue: never[];
        allowDuplicates: boolean;
        autoFocus: boolean;
    };
};
export default ChipInput;
