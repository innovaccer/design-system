/// <reference types="react" />
import { DropdownProps } from "../../../index.type";
import { BaseProps } from "../../../utils/types";
export interface EditableDropdownProps extends BaseProps {
    placeholder: string;
    dropdownOptions: Omit<DropdownProps, 'getLabel' | 'placeholder'>;
}
export declare const EditableDropdown: {
    (props: EditableDropdownProps): JSX.Element;
    defaultProps: {
        placeholder: string;
        dropdownOptions: {};
    };
};
export default EditableDropdown;
