import * as React from 'react';
import { InputProps } from "../../../index.type";
export interface SelectInputProps extends InputProps {
    onClear?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const SearchInput: (props: SelectInputProps) => JSX.Element;
export default SearchInput;
