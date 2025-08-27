import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { OptionType } from '@/common.type';
type ItemTagType = 'li' | 'div';
export interface ComboboxOptionProps extends BaseProps {
    children: React.ReactNode;
    option: OptionType;
    tagName?: ItemTagType;
    selected?: boolean;
    onClick?: (option: OptionType) => void;
    onFocus?: (event: React.FocusEvent) => void;
    onBlur?: (event: React.FocusEvent) => void;
}
export declare const ComboboxOption: (props: ComboboxOptionProps) => React.JSX.Element;
export default ComboboxOption;
