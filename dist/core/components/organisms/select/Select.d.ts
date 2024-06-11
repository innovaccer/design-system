import * as React from 'react';
import { OptionType } from "../../../common.type";
import SelectList from "./SelectList";
import SelectOption from "./SelectOption";
import { SelectTriggerProps } from "./SelectTrigger";
import SearchInput from "./SearchInput";
import SelectEmptyTemplate from "./SelectEmptyTemplate";
import SelectFooter from "./SelectFooter";
import { BaseProps } from "../../../utils/types";
export interface SelectProps extends BaseProps {
    multiSelect?: boolean;
    onSelect: (option?: OptionType | OptionType[]) => void;
    children?: React.ReactNode;
    width?: number | string;
    popoverWidth?: number;
    maxHeight?: number;
    minHeight?: number;
    value?: OptionType | OptionType[];
    boundaryElement?: React.RefObject<HTMLElement> | Element;
    appendToBody?: boolean;
    onOutsideClick?: () => void;
    triggerOptions?: SelectTriggerProps;
}
export interface SelectMethods {
    setOpen: (open: boolean) => void;
    setFocusFirstItem: () => void;
    setFocusLastItem: () => void;
}
export interface SelectComponent extends React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<SelectMethods>> {
    Option: typeof SelectOption;
    List: typeof SelectList;
    SearchInput: typeof SearchInput;
    EmptyTemplate: typeof SelectEmptyTemplate;
    Footer: typeof SelectFooter;
}
export declare const Select: SelectComponent;
export default Select;
