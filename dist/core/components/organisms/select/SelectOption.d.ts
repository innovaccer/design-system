import * as React from 'react';
import { OptionType } from "../../../common.type";
import { BaseProps } from "../../../utils/types";
declare type checkedType = 'checked' | 'unchecked' | 'indeterminate';
export interface SelectOptionProps extends BaseProps {
    children: React.ReactNode;
    option: OptionType;
    onClick?: (option: OptionType) => void;
    checkedState?: checkedType;
    withCheckbox?: boolean;
    disabled?: boolean;
}
export declare const SelectOption: {
    (props: SelectOptionProps): JSX.Element;
    defaultProps: {
        withCheckbox: boolean;
    };
};
export default SelectOption;
