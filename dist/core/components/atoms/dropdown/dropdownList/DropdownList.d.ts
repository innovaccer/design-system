import * as React from 'react';
export declare type Size = 'tiny' | 'regular';
export declare type DropdownAlign = 'left' | 'right';
export interface Option {
    icon?: string;
    subInfo?: string;
    group?: string;
    label: string;
    value: any;
    selected?: boolean;
}
export interface Subheading {
    [key: number]: string;
}
export interface DropdownListProps {
    size?: Size;
    dropdownAlign?: DropdownAlign;
    icon?: string;
    placeholder?: string;
    inlineLabel?: string;
    searchResultMessage?: string;
    menu?: boolean;
    disabled?: boolean;
    search?: boolean;
    checkboxes?: boolean;
    closeOnSelect?: boolean;
    showApplyButton?: boolean;
    optionsWrap?: boolean;
    checkedValuesOffset?: number;
    maxHeight?: number;
    style?: React.CSSProperties;
}
interface OptionsProps extends DropdownListProps {
    listOptions: Option[];
    bufferedOption?: Option;
    subheading?: Subheading;
    searchTerm: string;
    bottomOptionsSliced?: boolean;
    topOptionsSliced?: boolean;
    loadingMoreUp?: boolean;
    loadingOptions?: boolean;
    loadingMoreDown?: boolean;
    async?: boolean;
    limit: number;
    slicedOptionsLength: number;
    offset: number;
    optionsLength: number;
    bottomScrollOffset?: number;
    selected?: any;
    onSearchChange?: (searchText: string) => void;
    onScroll?: (direction: string) => void;
    onChange?: (selected: any[] | any) => void;
    onSelectAll?: (selectedAll: boolean) => void;
    setSearchTerm?: (searchTerm: string) => void;
    renderOptionsFromTop: () => void;
}
export declare const usePrevious: (value: any) => undefined;
declare const DropdownList: {
    (props: OptionsProps): JSX.Element;
    displayName: string;
};
export default DropdownList;
