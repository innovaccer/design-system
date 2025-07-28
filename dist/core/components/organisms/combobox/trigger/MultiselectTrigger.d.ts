import * as React from 'react';
import { ChipProps } from "../../../../index.type";
import { BaseProps } from "../../../../utils/types";
import { OptionType } from "../../../../common.type";
declare type ChipOptions = {
    icon?: ChipProps['icon'];
    type?: ChipProps['type'];
    iconType?: ChipProps['iconType'];
    clearButton?: ChipProps['clearButton'];
    onClick?: (value: OptionType, index: number) => void;
};
export interface MultiSelectTriggerProps extends BaseProps {
    allowDuplicates?: boolean;
    chipOptions: ChipOptions;
    disabled?: boolean;
    error?: boolean;
    placeholder?: string;
    value?: OptionType[];
    defaultValue: OptionType[];
    autoFocus?: boolean;
    onChange?: (chips: OptionType[]) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onInputChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
    tabIndex?: number;
    forwardedRef?: React.Ref<HTMLInputElement>;
    role?: React.AriaRole;
}
export declare const MultiSelectTrigger: React.ForwardRefExoticComponent<MultiSelectTriggerProps & React.RefAttributes<HTMLElement>>;
export default MultiSelectTrigger;
