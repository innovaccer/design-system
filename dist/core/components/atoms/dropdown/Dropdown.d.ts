/// <reference types="react" />
import { DropdownListProps, Option } from '@/components/atoms/dropdown/dropdownList';
interface OptionType {
    offset: number;
    length: number;
    slicedOptions: any[];
}
export interface DropdownProps extends DropdownListProps {
    limit?: number;
    loading?: boolean;
    async?: boolean;
    options: Option[];
    loadMoreOptions?: (offset: number, limit: number, searchTerm: string) => Promise<OptionType>;
    onChange?: (selected: any[] | any) => void;
}
export declare const Dropdown: {
    (props: DropdownProps): JSX.Element;
    displayName: string;
};
export default Dropdown;
