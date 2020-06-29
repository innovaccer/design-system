import * as React from 'react';
import { TriggerProps } from './DropdownButton';
import { OptionRendererProps, OptionSchema } from './option';
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
    dropdownAlign?: DropdownAlign;
    loadingType?: OptionType;
    searchResultMessage?: string;
    parentCheckboxLabel?: string;
    footerLabel?: string;
    selectedGroupLabel?: string;
    search?: boolean;
    checkboxes?: boolean;
    showApplyButton?: boolean;
    optionsWrap?: boolean;
    totalOptions?: number;
    maxHeight?: number;
    width?: number;
    loadersLength?: number;
    customTrigger?: (label?: string) => React.ReactElement;
}
interface OptionsProps extends DropdownListProps {
    listOptions: OptionSchema[];
    searchTerm: string;
    triggerLabel: string;
    loadingOptions?: boolean;
    dropdownOpen?: boolean;
    async?: boolean;
    remainingOptions: number;
    selected: OptionSchema[];
    tempSelected: OptionSchema[];
    previousSelected: OptionSchema[];
    selectAll: SelectAll;
    applyOptions: () => void;
    cancelOptions: () => void;
    toggleDropdown: () => void;
    onClearOptions: () => void;
    onSelectAll: (selectedAll: boolean) => void;
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
