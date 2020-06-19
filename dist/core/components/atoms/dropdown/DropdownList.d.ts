import * as React from 'react';
import { OptionRendererProps } from './option';
export declare type Size = 'tiny' | 'regular';
export declare type DropdownAlign = 'left' | 'right';
declare type ExternalOptionType = 'DEFAULT' | 'WITH_ICON' | 'WITH_META' | 'ICON_WITH_META';
declare type CheckboxOptionType = 'WITH_CHECKBOX';
declare type AllOptionType = ExternalOptionType | CheckboxOptionType;
export declare type OptionType = ExternalOptionType;
export interface Option {
    icon?: string;
    subInfo?: string;
    group?: string;
    label: string;
    value: any;
    optionType?: OptionType;
    selectedGroup?: boolean;
}
export interface DropdownListProps extends OptionRendererProps {
    triggerSize?: Size;
    dropdownAlign?: DropdownAlign;
    icon?: string;
    loadingType?: AllOptionType;
    placeholder?: string;
    inlineLabel?: string;
    searchResultMessage?: string;
    parentCheckboxLabel?: string;
    footerLabel?: string;
    menu?: boolean;
    disabled?: boolean;
    search?: boolean;
    checkboxes?: boolean;
    closeOnSelect?: boolean;
    showApplyButton?: boolean;
    optionsWrap?: boolean;
    checkedValuesOffset?: number;
    totalOptions?: number;
    maxHeight?: number;
    selected?: Option[];
    width?: number;
    maxWidth?: number;
    onChangeTriggerLabel?: (selected: number, totalOptions?: number) => string;
    customTrigger?: (label?: string) => React.ReactElement;
}
interface OptionsProps extends DropdownListProps {
    listOptions: Option[];
    bufferedOption?: Option;
    searchTerm: string;
    bottomOptionsSliced?: boolean;
    topOptionsSliced?: boolean;
    loadingOptions?: boolean;
    searchInit?: boolean;
    async?: boolean;
    limit: number;
    slicedOptionsLength: number;
    remainingOptions: number;
    offset: number;
    optionsLength: number;
    bottomScrollOffset?: number;
    selectedAll?: any;
    onSearchChange?: (searchText: string) => void;
    onScroll?: (direction: string) => void;
    onChange?: (selected: any[] | any) => void;
    onSelectAll?: (selectedAll: boolean) => void;
    onRearrangeOptions?: (selected: any[], selectedLabels: string[]) => void;
    renderOptionsFromTop: () => void;
}
export declare const usePrevious: (value: any) => undefined;
declare const DropdownList: {
    (props: OptionsProps): JSX.Element;
    displayName: string;
};
export default DropdownList;
