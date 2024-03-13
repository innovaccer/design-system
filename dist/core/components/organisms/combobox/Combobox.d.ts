import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { OptionType, IconType } from "../../../common.type";
import { ContextProps } from "./ComboboxContext";
export declare type ComboboxInputSize = 'tiny' | 'regular' | 'large';
export interface ComboboxProps extends BaseProps {
    multiSelect?: boolean;
    children: React.ReactNode | ((contextProp: ContextProps) => React.ReactNode);
    maxHeight?: number;
    width?: number;
    onChange?: (option?: OptionType | OptionType[]) => void;
    onSearch?: (value?: string) => void;
    value?: OptionType;
    chipValue?: OptionType[];
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>) => void;
    icon?: string;
    iconType?: IconType;
    size?: ComboboxInputSize;
    clearButton?: boolean;
    className?: string;
}
export declare const Combobox: {
    (props: ComboboxProps): JSX.Element;
    List: {
        (props: import("./ComboboxList").ComboboxListProps): JSX.Element;
        defaultProps: {
            type: string;
            showDivider: boolean;
            tagName: string;
            size: string;
        };
    };
    Option: {
        (props: import("./ComboboxOption").ComboboxOptionProps): JSX.Element;
        defaultProps: {
            tagName: string;
        };
    };
};
export default Combobox;
