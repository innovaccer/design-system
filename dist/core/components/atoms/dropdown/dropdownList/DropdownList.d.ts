/// <reference types="react" />
export declare type TriggerAppearance = 'basic' | 'transparent';
export declare type Size = 'tiny' | 'regular';
export declare type DropdownAlign = 'left' | 'right';
export interface Option {
    icon?: string;
    subInfo?: string;
    group?: string;
    label: string;
    value: any;
    selectedGroup?: boolean;
}
export interface DropdownListProps {
    triggerSize?: Size;
    dropdownAlign?: DropdownAlign;
    buttonAppearance?: TriggerAppearance;
    icon?: string;
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
