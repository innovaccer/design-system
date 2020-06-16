/// <reference types="react" />
import { DropdownListProps, Option } from './DropdownList';
interface OptionType {
    offset: number;
    length: number;
    slicedOptions: any[];
}
export declare const useIsMount: () => boolean;
export interface DropdownProps extends DropdownListProps {
    limit?: number;
    loading?: boolean;
    bulk?: boolean;
    options?: Option[];
    selectedGroupLabel?: string;
    fetchOptions?: (searchTerm: string, limit: number) => Promise<OptionType>;
    onChange?: (selected: any[] | any) => void;
}
export declare const Dropdown: {
    (props: DropdownProps): JSX.Element;
    displayName: string;
};
export default Dropdown;
