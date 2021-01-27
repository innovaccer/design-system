import * as React from 'react';
import { Dropdown } from "../../../index";
import { DropdownProps } from "../../../index.type";
import { BaseProps, MakeOptional } from "../../../utils/types";
declare type DropdownOptions = MakeOptional<DropdownProps, keyof typeof Dropdown['defaultProps']>;
export interface EditableDropdownProps extends BaseProps {
    placeholder: string;
    dropdownOptions: Omit<DropdownOptions, 'getLabel' | 'placeholder'>;
    customTriggerRenderer?: (label: string) => React.ReactNode;
}
export declare const EditableDropdown: {
    (props: EditableDropdownProps): JSX.Element;
    defaultProps: {
        placeholder: string;
        dropdownOptions: {};
    };
};
export default EditableDropdown;
