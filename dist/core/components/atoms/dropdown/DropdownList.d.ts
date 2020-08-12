import * as React from 'react';
import { TriggerProps } from "./DropdownButton";
import { OptionRendererProps, OptionSchema } from "./option";
import { BaseProps } from "../../../utils/types";
export declare type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export declare type DropdownAlign = 'left' | 'right';
export declare type OptionType = 'DEFAULT' | 'WITH_ICON' | 'WITH_META' | 'ICON_WITH_META';
export interface Selected {
    label: string;
    value: any;
}
export interface SelectAll {
    indeterminate: boolean;
    checked: boolean;
}
declare type ListProps = TriggerProps & OptionRendererProps;
export interface DropdownListProps extends ListProps {
    align?: DropdownAlign;
    noResultMessage?: string;
    selectAllLabel?: string;
    footerLabel?: string;
    selectedSectionLabel?: string;
    withSearch?: boolean;
    withCheckbox?: boolean;
    showApplyButton?: boolean;
    truncateOption?: boolean;
    totalOptions?: number;
    maxHeight?: number;
    width?: number;
    loadersCount?: number;
}
interface OptionsProps extends DropdownListProps, BaseProps {
    listOptions: OptionSchema[];
    searchTerm: string;
    triggerLabel: string;
    loadingOptions?: boolean;
    searchInit?: boolean;
    dropdownOpen?: boolean;
    async?: boolean;
    remainingOptions: number;
    selected: OptionSchema[];
    tempSelected: OptionSchema[];
    previousSelected: OptionSchema[];
    selectAll: SelectAll;
    inputRef: React.RefObject<HTMLInputElement>;
    customTrigger?: (label: string) => React.ReactElement;
    applyOptions: () => void;
    cancelOptions: () => void;
    toggleDropdown: (open: boolean, type?: string) => void;
    onClearOptions: () => void;
    onSelectAll: (event: ChangeEvent) => void;
    onSearchChange?: (searchText: string) => void;
    onOptionSelect: (selected: any[] | any) => void;
    onSelect: (option: OptionSchema, checked: boolean) => void;
}
export declare const usePrevious: (value: any) => undefined;
declare const DropdownList: {
    (props: OptionsProps): JSX.Element;
    displayName: string;
};
export default DropdownList;
