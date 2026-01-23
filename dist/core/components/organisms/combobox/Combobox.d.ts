import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { OptionType, IconType } from '@/common.type';
import { ContextProps } from './ComboboxContext';
export type ComboboxInputSize = 'tiny' | 'regular' | 'large';
export interface ComboboxProps extends BaseProps {
    multiSelect?: boolean;
    children: React.ReactNode | ((contextProp: ContextProps) => React.ReactNode);
    maxHeight?: number;
    minHeight?: number;
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
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    icon?: string;
    iconType?: IconType;
    size?: ComboboxInputSize;
    clearButton?: boolean;
    computeStyles?: object;
    className?: string;
}
export declare const Combobox: {
    (props: ComboboxProps): React.JSX.Element;
    List: (props: import("./ComboboxList").ComboboxListProps) => React.JSX.Element;
    Option: (props: import("./ComboboxOption").ComboboxOptionProps) => React.JSX.Element;
};
export default Combobox;
