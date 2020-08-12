import { OptionSchema as Option } from "./option";
export declare const getSearchedOptions: (options: any, searchTerm: string) => any;
export declare const _isEqual: (arr1: Option[], arr2: Option[]) => boolean;
export declare const _isControlled: (selected?: Option[] | undefined) => boolean;
export declare const _isOpenControlled: (open?: boolean | undefined, selected?: Option[] | undefined) => boolean;
export declare const _showSelectedItems: (bulk: boolean, searchTerm: string, withCheckbox?: boolean | undefined) => boolean | undefined;
export declare const scrollTo: (element: Element, top: number) => void;
export declare const scrollIntoView: (menuElement: HTMLDivElement | null, focusedElement: HTMLElement) => void;
export declare const getSelectAll: (selected: Option[], optionsLength: number) => {
    checked: boolean;
    indeterminate: boolean;
};
