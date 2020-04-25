import * as React from 'react';
export declare type Size = 'tiny' | 'regular';
export declare type DropdownAlign = 'left' | 'right';
export interface Option {
    icon?: string;
    subInfo?: string;
    label: string;
    value: any;
    selected?: boolean;
}
export interface Options {
    items: Option[];
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
    disabled?: boolean;
    search?: boolean;
    checkboxes?: boolean;
    closeOnSelect?: boolean;
    showApplyButton?: boolean;
    optionsWrap?: boolean;
    loadingOptions?: boolean;
    checkedValuesOffset?: number;
    subheading?: Subheading;
    maxHeight?: number;
    style?: React.CSSProperties;
}
interface OptionsProps extends DropdownListProps {
    listOptions: Option[];
    searchTerm: string;
    bottomOptionsSliced?: boolean;
    topOptionsSliced?: boolean;
    selectAll: boolean;
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
}
declare const DropdownList: {
    (props: OptionsProps): JSX.Element;
    displayName: string;
};
export default DropdownList;
