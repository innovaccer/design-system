import * as React from 'react';
import { ComboboxInputSize } from "../Combobox";
import { OptionType, IconType } from "../../../../common.type";
interface ComboboxTriggerProps {
    multiSelect?: boolean;
    value?: OptionType;
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
    chipValue?: OptionType[];
    clearButton?: boolean;
}
export declare const ComboboxTrigger: (props: ComboboxTriggerProps) => React.JSX.Element;
export default ComboboxTrigger;
