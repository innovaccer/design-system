import * as React from 'react';
import { DropdownListProps, SelectAll, Selected } from "./DropdownList";
import { OptionSchema } from "./option";
import { BaseProps } from "../../../utils/types";
import { ChangeEvent } from "../../../common.type";
declare type fetchOptionsFunction = (searchTerm: string) => Promise<{
    searchTerm?: string;
    count: number;
    options: OptionSchema[];
}>;
export declare type EventType = 'select-option' | 'deselect-option' | 'select-all' | 'deselect-all' | 'clear-all' | 'apply-selected' | 'cancel-selected';
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
declare type SyncDropdownProps = SyncProps & SharedDropdownProps;
declare type AsyncDropdownProps = AsyncProps & SharedDropdownProps;
export declare type UncontrolledDropdownProps = SyncDropdownProps & AsyncDropdownProps;
export declare type ControlledDropdownProps = ControlledProps & SyncDropdownProps & AsyncDropdownProps;
export declare type DropdownProps = ControlledDropdownProps & UncontrolledDropdownProps;
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
    updateOptions: (init: boolean, async?: boolean | undefined) => void;
    updateSearchTerm: (search: string) => void;
    updateOnPopperToggle: () => void;
    updateTriggerLabel: (selectedArray?: Selected[], totalOptions?: number | undefined) => string;
    updateSelectedOptions: (selectedArray: OptionSchema[], isSingleSelect: boolean, isControlled?: boolean | undefined) => void;
    onOptionSelect: (option: OptionSchema) => void;
    onSelect: (option: OptionSchema, checked: boolean) => void;
    onSelectAll: (event: ChangeEvent) => void;
    debounceSearch: import("throttle-debounce").throttle<() => void>;
    debounceClear: import("throttle-debounce").throttle<() => void>;
    onClearOptions: () => void;
    onTogglePopper: (type: string) => void;
    onCancelOptions: () => void;
    onApplyOptions: () => void;
    onToggleDropdown: (updatedOpen: boolean, type?: string | undefined) => void;
    render(): JSX.Element;
}
export default Dropdown;
