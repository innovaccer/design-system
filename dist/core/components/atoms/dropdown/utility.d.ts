import { OptionSchema } from './option';
export declare const getSearchedOptions: (options: any, searchTerm: string) => any;
export declare const _isEqual: (firstList: OptionSchema[], secondList: OptionSchema[]) => boolean;
export declare const _isControlled: (selected?: OptionSchema[]) => selected is OptionSchema[];
export declare const _isOpenControlled: (open?: boolean) => open is boolean;
export declare const _showSelectedItems: (bulk: boolean, searchTerm: string, withCheckbox?: boolean) => boolean | undefined;
export declare const _isSelectAllPresent: (searchTerm: string, bulkOptions: number, withSelectAll: boolean, withCheckbox?: boolean) => boolean | undefined;
export declare const scrollTo: (element: Element, top: number) => void;
export declare const scrollIntoView: (menuElement: HTMLDivElement | null, focusedElement: HTMLElement) => void;
export declare const getSelectAll: (selected: OptionSchema[], optionsLength: number, disabledOptionsLength: number) => {
    indeterminate: boolean;
    checked: boolean;
};
export declare const scrollToOptionIndex: (scrollIndex: number, listOptions: any) => void;
export declare const groupListOptions: (listOptions: OptionSchema[]) => OptionSchema[];
