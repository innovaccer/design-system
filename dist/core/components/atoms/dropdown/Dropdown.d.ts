import * as React from 'react';
import { debounce } from 'throttle-debounce';
import { DropdownListProps, SelectAll, Selected } from './DropdownList';
import { OptionSchema } from './option';
import { BaseProps } from '@/utils/types';
import { ChangeEvent } from '@/common.type';
type fetchOptionsFunction = (searchTerm: string) => Promise<{
    searchTerm?: string;
    count: number;
    options: OptionSchema[];
}>;
export type ErrorType = 'DEFAULT' | 'NO_RECORDS_FOUND' | 'FAILED_TO_FETCH';
export type EventType = 'select-option' | 'deselect-option' | 'select-all' | 'deselect-all' | 'clear-all' | 'apply-selected' | 'cancel-selected';
interface ControlledProps {
    selected?: OptionSchema[];
    onUpdate?: (type: EventType, options?: OptionSchema | OptionSchema[], recentSelected?: OptionSchema[]) => void;
}
interface SyncProps {
    options: OptionSchema[];
    loading?: boolean;
}
interface AsyncProps {
    fetchOptions?: fetchOptionsFunction;
}
interface TriggerProps {
    labelLimit?: number;
    customLabel?: (selected: number, totalOptions?: number, selectedOptions?: OptionSchema[]) => string;
    customTrigger?: (label: string) => React.ReactElement;
}
interface SharedDropdownProps extends DropdownListProps, BaseProps {
    name?: string | number;
    totalOptions?: number;
    closeOnSelect: boolean;
    triggerOptions: TriggerProps;
    open?: boolean;
    staticLimit: number;
    searchDebounceDuration: number;
    onPopperToggle?: (open: boolean, type?: string) => void;
    getLabel?: (label: string) => void;
    onChange?: (selected: any[] | any, name?: string | number) => void;
    onClose?: (selected: any[], name?: string | number) => void;
    tabIndex?: number;
}
type SyncDropdownProps = SyncProps & SharedDropdownProps;
type AsyncDropdownProps = AsyncProps & SharedDropdownProps;
export type UncontrolledDropdownProps = SyncDropdownProps & AsyncDropdownProps;
export type ControlledDropdownProps = ControlledProps & SyncDropdownProps & AsyncDropdownProps;
export type DropdownProps = ControlledDropdownProps & UncontrolledDropdownProps;
interface DropdownState {
    async: boolean;
    searchInit: boolean;
    options: OptionSchema[];
    loading?: boolean;
    optionsApplied: boolean;
    open?: boolean;
    searchTerm: string;
    optionsLength: number;
    searchedOptionsLength: number;
    triggerLabel: string;
    selectAll: SelectAll;
    selected: OptionSchema[];
    tempSelected: OptionSchema[];
    previousSelected: OptionSchema[];
    scrollIndex?: number;
    errorType: ErrorType;
}
export declare class Dropdown extends React.Component<DropdownProps, DropdownState> {
    staticLimit: number;
    static defaultProps: {
        triggerOptions: {};
        options: never[];
        closeOnSelect: boolean;
        staticLimit: number;
        searchDebounceDuration: number;
    };
    constructor(props: DropdownProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: DropdownProps, prevState: DropdownState): void;
    getDisabledOptions: (options?: OptionSchema[]) => OptionSchema[];
    fetchOptionsFunction: (searchTerm: string) => Promise<any>;
    getUnSelectedOptions: (options: OptionSchema[], init: boolean) => OptionSchema[];
    getSelectedOptions: (options: OptionSchema[], init: boolean) => OptionSchema[];
    updateOptions: (init: boolean, async?: boolean) => void;
    updateSearchTerm: (search: string) => void;
    updateOnPopperToggle: () => void;
    debounceOnClose: debounce<(values: any, name: any) => void>;
    updateTriggerLabel: (selectedArray?: Selected[], totalOptions?: number) => string;
    updateSelectedOptions: (selectedArray: OptionSchema[], isSingleSelect: boolean, isControlled?: boolean) => void;
    isValidOption: (option: OptionSchema) => boolean;
    onOptionSelect: (option: OptionSchema) => void;
    onSelect: (option: OptionSchema, checked: boolean) => void;
    onSelectAll: (event: ChangeEvent) => void;
    debounceSearch: debounce<() => void>;
    reload: () => void;
    debounceClear: debounce<() => void>;
    onClearOptions: () => void;
    onTogglePopper: (type: string) => void;
    onCancelOptions: () => void;
    onApplyOptions: () => void;
    onToggleDropdown: (updatedOpen: boolean, type?: string) => void;
    render(): React.JSX.Element;
}
export default Dropdown;
