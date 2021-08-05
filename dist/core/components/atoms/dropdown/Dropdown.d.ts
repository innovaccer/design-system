import * as React from 'react';
import { DropdownListProps, SelectAll, Selected, ChangeEvent } from "./DropdownList";
import { OptionSchema as Option } from "./option";
import { BaseProps } from "../../../utils/types";
declare type fetchOptionsFunction = (searchTerm: string) => Promise<{
    searchTerm?: string;
    count: number;
    options: Option[];
}>;
export declare type EventType = 'select-option' | 'deselect-option' | 'select-all' | 'deselect-all' | 'clear-all' | 'apply-selected' | 'cancel-selected';
interface ControlledProps {
    selected?: Option[];
    onUpdate?: (type: EventType, options?: Option | Option[], recentSelected?: Option[]) => void;
}
interface SyncProps {
    options: Option[];
    loading?: boolean;
}
interface AsyncProps {
    fetchOptions?: fetchOptionsFunction;
}
interface TriggerProps {
    labelLimit?: number;
    customLabel?: (selected: number, totalOptions?: number, selectedOptions?: Option[]) => string;
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
}
declare type SyncDropdownProps = SyncProps & SharedDropdownProps;
declare type AsyncDropdownProps = AsyncProps & SharedDropdownProps;
export declare type UncontrolledDropdownProps = (SyncDropdownProps & AsyncDropdownProps);
export declare type ControlledDropdownProps = (ControlledProps & SyncDropdownProps & AsyncDropdownProps);
export declare type DropdownProps = (ControlledDropdownProps & UncontrolledDropdownProps);
interface DropdownState {
    async: boolean;
    searchInit: boolean;
    options: Option[];
    loading?: boolean;
    optionsApplied: boolean;
    open?: boolean;
    searchTerm: string;
    optionsLength: number;
    searchedOptionsLength: number;
    triggerLabel: string;
    selectAll: SelectAll;
    selected: Option[];
    tempSelected: Option[];
    previousSelected: Option[];
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
    getDisabledOptions: (options?: Option[]) => Option[];
    fetchOptionsFunction: (searchTerm: string) => Promise<any>;
    getUnSelectedOptions: (options: Option[], init: boolean) => Option[];
    getSelectedOptions: (options: Option[], init: boolean) => Option[];
    updateOptions: (init: boolean, async?: boolean | undefined) => void;
    updateSearchTerm: (search: string) => void;
    updateOnPopperToggle: () => void;
    updateTriggerLabel: (selectedArray?: Selected[], totalOptions?: number | undefined) => string;
    updateSelectedOptions: (selectedArray: Option[], isSingleSelect: boolean, isControlled?: boolean | undefined) => void;
    onOptionSelect: (option: Option) => void;
    onSelect: (option: Option, checked: boolean) => void;
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
