import * as React from 'react';
import { InputProps } from "../../../index.type";
export interface SelectInputProps extends Omit<InputProps, 'onChange'> {
    onClear?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    onChange?: (value?: string) => void;
}
export declare const SearchInput: (props: SelectInputProps) => React.JSX.Element;
export default SearchInput;
