import * as React from 'react';
import { DropdownListProps, SelectAll, Selected, ChangeEvent } from './DropdownList';
import { OptionSchema as Option } from './option';
declare type fetchOptionsFnc = (searchTerm: string) => Promise<{
    count: number;
    options: Option[];
}>;
interface SyncProps {
    options?: Option[];
    loading?: boolean;
}
interface AsyncProps {
    fetchOptions?: fetchOptionsFnc;
}
interface TriggerProps {
    labelLimit?: number;
    customLabel?: (selected: number, totalOptions?: number) => string;
    customTrigger?: (label: string) => React.ReactElement;
}
interface SharedDropdownProps extends DropdownListProps {
    name?: string | number;
    totalOptions?: number;
    closeOnSelect?: boolean;
    triggerOptions?: TriggerProps;
    onChange?: (selected: any[] | any, name?: string | number) => void;
    onClose?: (selected: any[], name?: string | number) => void;
}
declare type SyncDropdownProps = SyncProps & SharedDropdownProps;
declare type AsyncDropdownProps = AsyncProps & SharedDropdownProps;
export declare type DropdownProps = (SyncDropdownProps & AsyncDropdownProps);
interface DropdownState {
    async: boolean;
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
    constructor(props: DropdownProps);
    static defaultProps: {
        triggerOptions: {};
        closeOnSelect: boolean;
    };
    componentDidUpdate(prevProps: DropdownProps, prevState: DropdownState): void;
    fetchOptionsFn: (searchTerm: string) => Promise<any>;
    getUnSelectedOptions: (options: Option[], init: boolean) => Option[];
    getSelectedOptions: (options: Option[], init: boolean) => Option[];
    updateOptions: (init: boolean, async?: boolean | undefined) => void;
    updateSearchTerm: (search: string) => void;
    onOptionSelect: (selectedArray: Option) => void;
    updateTriggerLabel: (selectedArray?: Selected[], totalOptions?: number | undefined) => string;
    onSelect: (option: Option, checked: boolean) => void;
    onSelectAll: (event: ChangeEvent) => void;
    debounceSearch: import("throttle-debounce").throttle<() => void>;
    onClearOptions: () => void;
    onCancelOptions: () => void;
    onApplyOptions: () => void;
    onToggleDropdown: () => void;
    render(): JSX.Element;
}
export default Dropdown;
