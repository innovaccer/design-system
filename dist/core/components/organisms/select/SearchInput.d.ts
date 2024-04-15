import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface SelectInputProps extends BaseProps {
    onClear?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const SearchInput: (props: SelectInputProps) => JSX.Element;
export default SearchInput;
