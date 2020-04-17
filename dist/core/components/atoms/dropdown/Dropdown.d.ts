import * as React from 'react';
import { DropdownListProps, Option } from '@/components/atoms/dropdown/dropdownList';
export interface DropdownProps extends DropdownListProps {
    limit?: number;
    selectAll?: boolean;
    options: Option[];
    onChange?: (selected: any[] | any) => void;
}
export declare const Dropdown: React.FunctionComponent<DropdownProps>;
export default Dropdown;
