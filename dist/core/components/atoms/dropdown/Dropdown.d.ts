/// <reference types="react" />
import { DropdownListProps, Option } from '@/components/atoms/dropdown/dropdownList';
export interface DropdownProps extends DropdownListProps {
    limit?: number;
    selectAll?: boolean;
    options: Option[];
    onChange?: (selected: any[] | any) => void;
}
export declare const Dropdown: {
    (props: DropdownProps): JSX.Element;
    displayName: string;
};
export default Dropdown;
