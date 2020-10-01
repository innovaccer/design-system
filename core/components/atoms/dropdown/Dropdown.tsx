import * as React from 'react';
import { debounce } from 'throttle-debounce';
import DropdownList, { DropdownListProps, SelectAll, Selected, ChangeEvent } from './DropdownList';
import { OptionSchema as Option } from './option';
import {
  getSearchedOptions,
  getSelectAll,
  _isEqual,
  _isControlled,
  _showSelectedItems,
  _isOpenControlled
} from './utility';
import { BaseProps } from '@/utils/types';

type fetchOptionsFunction = (searchTerm: string) => Promise<{
  count: number;
  options: Option[];
}>;

export type EventType =
  'select-option' |
  'deselect-option' |
  'select-all' |
  'deselect-all' |
  'clear-all' |
  'apply-selected' |
  'cancel-selected';

interface ControlledProps {
  /**
   * Array of selected options <br/>
   *  **Denotes `Controlled Dropdown`**
   */
  selected?: Option[];
  /**
   * Callback function to handle different event types in controlled dropdown <br/>
   * **Event type here refers to `clicking on option` / `clicking on Clear, Cancel or Apply button`** <br/>
   * **Only works if `selected` is not undefined**
   *
   * | EventType | options | recentSelected |
   * | --- | --- | --- |
   * | 'select-option' | Selected Option | undefined |
   * | 'deselect-option' | Unselected Option | undefined |
   * | 'select-all' | undefined | undefined |
   * | 'deselect-all' | undefined | undefined |
   * | 'clear-all' | undefined | undefined |
   * | 'apply-selected' | Array of previously selected options | Array of recently selected options |
   * | 'cancel-selected' | Array of previously selected options | Array of recently selected options |
   */
  onUpdate?: (type: EventType, options?: Option | Option[], recentSelected?: Option[]) => void;
}

interface SyncProps {
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * OptionSchema: {
   *   label: string;
   *   value: any;
   *   icon?: string;
   *   subInfo?: string;
   *   optionType?: OptionType;
   *   selected?: boolean;
   *   group?: string;
   * }
   * </pre>
   *
   * OptionType: 'DEFAULT' | 'WITH\_ICON' | 'WITH\_META' | 'ICON\_WITH\_META'
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | label | Describes Label of the option | |
   * | value | Value of option | |
   * | icon | Name of icon inside option | |
   * | selected | Denotes default selection of option <br/>(works in case of uncontrolled component) | |
   * | group | Defines group to which the option belongs | |
   */
  options: Option[];
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * Adds loaders inside `Dropdown` when waiting for an action to complete.
   * (Loading is internally handled when options are fetched from API.)
   * </pre>
   */
  loading?: boolean;
}

interface AsyncProps {
  /**
   * Callback function to fetch options from API
   * <pre className="DocPage-codeBlock">
   * fetchOptionsFunction: (searchTerm: string) => Promise<{
   *      count: number,
   *      option: Option[],
   * }>;
   * </pre>
   *
   */
  fetchOptions?: fetchOptionsFunction;
}

interface TriggerProps {
  /**
   * Number of selected options to be shown on `Dropdown trigger`
   * @default 2
   */
  labelLimit?: number;
  /**
   * Callback function to change the label of trigger when options are selected
   */
  customLabel?: (selected: number, totalOptions?: number) => string;
  /**
   * Adds custom trigger
   */
  customTrigger?: (label: string) => React.ReactElement;
}

interface SharedDropdownProps extends DropdownListProps, BaseProps {
  /**
   * Unique name of `Dropdown`
   */
  name?: string | number;
  /**
   * Count of options in `Dropdown`
   */
  totalOptions?: number;
  /**
   * Determines if dropdown closes on option selection (works in case of single select)
   */
  closeOnSelect: boolean;
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * TriggerProps:
   * {
   *    labelLimit?: number;
   *    customLabel?: (selected: number, totalOptions?: number) => string;
   *    customTrigger?: (label: string) => React.ReactElement;
   * }
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | labelLimit | Number of selected options <br />to be shown on `Dropdown trigger` | 2 |
   * | customLabel | Callback function to change <br/>the label of trigger when options are selected | |
   * | customTrigger | Adds custom trigger | |
   * </pre>
   */
  triggerOptions: TriggerProps;
  /**
   * Determines if the `Dropdown Popover` is open <br/>
   */
  open?: boolean;
  /**
   * Callback function called to toggle the `Dropdown Popover`
   *
   * type: 'onClick' | 'outsideClick' | 'optionClick' | 'applyClick' | 'cancelClick'
   *
   * **Works with `open` prop**
   *
   * **Type `optionClick` works in case of single select (closeOnSelect = true)**
   */
  onPopperToggle?: (open: boolean, type?: string) => void;
  /**
   * Callback to get the updated label of `Dropdown trigger`
   */
  getLabel?: (label: string) => void;
  /**
   * Callback function called when selected options are updated. <br/>
   * **In case of uncontrolled dropdown, it is called when user `clicks on option` /**
   * **`clicks on Clear,or Apply button` while in case of controlled dropdown,**
   * **it is called when selected options are updated**
   */
  onChange?: (selected: any[] | any, name?: string | number) => void;
  /**
   * Callback function called when dropdown is closed
   */
  onClose?: (selected: any[], name?: string | number) => void;
}

type SyncDropdownProps = SyncProps & SharedDropdownProps;
type AsyncDropdownProps = AsyncProps & SharedDropdownProps;

const inputRef = React.createRef<HTMLInputElement>();

export type UncontrolledDropdownProps = (SyncDropdownProps & AsyncDropdownProps);
export type ControlledDropdownProps = (ControlledProps & SyncDropdownProps & AsyncDropdownProps);

export type DropdownProps = (ControlledDropdownProps & UncontrolledDropdownProps);

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

const bulk = 50;

export const defaultProps = {
  triggerOptions: {},
  options: [],
  closeOnSelect: true
};

/**
 * ###Note:
 * 1. Dropdown props types:
 *  - async: fetchOptions
 *  - sync: options, loading
 * 2. Sync Dropdown:
 *  - Manually toggle loading state to update options (Options <= 50).
 * 3. Callback Functions
 *  - Controlled Dropdown:
 *    * onUpdate: Called when user `clicks on option` / `clicks on Clear, Cancel or Apply button`.
 *    * onChange: Called when selected options are updated.
 *  - Uncontrolled Dropdown:
 *    * onChange: Called when user `clicks on option` / `clicks on Clear, or Apply button`.
 */
export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  static defaultProps = defaultProps;

  constructor(props: DropdownProps) {
    super(props);

    const {
      selected = [],
      totalOptions,
      withCheckbox,
      loading,
      open,
      options,
    } = props;

    const optionsLength = totalOptions ? totalOptions : options.length;
    const async = 'fetchOptions' in this.props
      || optionsLength > bulk;

    const selectedGroup = !async ? this.getSelectedOptions(options, true) : [];

    this.state = {
      async,
      optionsLength,
      open,
      searchInit: false,
      searchedOptionsLength: optionsLength,
      optionsApplied: false,
      options: options || [],
      loading: async ? true : loading,
      searchTerm: '',
      tempSelected: selectedGroup,
      previousSelected: selectedGroup,
      selected: _showSelectedItems(async, '', withCheckbox) ? selected : [],
      triggerLabel: this.updateTriggerLabel(selectedGroup, optionsLength),
      selectAll: getSelectAll(selectedGroup, optionsLength)
    };

    if (async) this.updateOptions(true);
  }

  componentDidUpdate(prevProps: DropdownProps, prevState: DropdownState) {
    if (!this.state.async) {
      const { loading, fetchOptions, options = [], withSearch } = this.props;
      if (prevProps.loading !== loading && !fetchOptions) {
        if (options.length > bulk) {
          this.updateOptions(true, true);
        } else {
          const selectedGroup = this.getSelectedOptions(options, true);
          this.setState({
            ...this.state,
            options,
            loading,
            tempSelected: selectedGroup,
            previousSelected: selectedGroup,
            optionsLength: options.length,
            searchedOptionsLength: options.length,
            triggerLabel: this.updateTriggerLabel(selectedGroup),
            selectAll: getSelectAll(selectedGroup, this.state.optionsLength)
          });

          if (withSearch) inputRef.current?.focus();
        }
      }
    }

    if (this.props.selected !== undefined
      && prevProps.selected !== this.props.selected
      && prevProps.loading === this.props.loading
    ) {
      const isSingleSelect = !this.props.withCheckbox;
      this.updateSelectedOptions(this.props.selected, isSingleSelect, true);
    }

    if (prevProps.open !== this.props.open
      || prevState.open !== this.state.open
    ) {
      if (_isOpenControlled(this.props.open) && this.props.open === this.state.open) return;
      this.updateOnPopperToggle();
    }

    if (prevState.searchTerm !== this.state.searchTerm) {
      this.debounceSearch();
    }
  }

  fetchOptionsFunction = (searchTerm: string) => {
    const { options } = this.props;
    const filteredOptions = searchTerm ? getSearchedOptions(options, searchTerm) : options;
    return new Promise<any>(resolve => {
      resolve({
        options: filteredOptions,
        count: filteredOptions.length,
      });
    });
  }

  getUnSelectedOptions = (options: Option[], init: boolean) => {
    if (options.length) {
      if (!init) {
        return options.filter(option => (
          this.state.tempSelected.findIndex(item => item.value === option.value) === -1
        ));
      }

      const { selected = [] } = this.props;
      const unSelectedGroup = options.filter(option => (
        _isControlled(this.props.selected) ?
          selected.findIndex(item => item.value === option.value) === -1 : !option.selected
      ));

      return unSelectedGroup;
    }
    return options;
  }

  getSelectedOptions = (options: Option[], init: boolean) => {
    const { selected = [] } = this.props;
    if (options.length) {
      if (!init) return this.state.tempSelected;

      const selectedGroup = _isControlled(this.props.selected) ? selected : options.filter(option => option.selected);
      return selectedGroup;
    }
    return [];
  }

  updateOptions = (init: boolean, async?: boolean) => {
    const {
      searchTerm,
      selectAll,
      tempSelected,
      previousSelected,
    } = this.state;

    let updatedAsync = async === undefined ? this.state.async : async;
    const { fetchOptions, withCheckbox, withSearch } = this.props;
    const fetchFunction = fetchOptions ? fetchOptions : this.fetchOptionsFunction;

    fetchFunction(searchTerm)
      .then((res: any) => {
        const { options, count } = res;
        updatedAsync = searchTerm === '' ? count > bulk : updatedAsync;

        const unSelectedGroup = _showSelectedItems(updatedAsync, searchTerm, withCheckbox) ?
          this.getUnSelectedOptions(options, init) : options;
        const selectedGroup = searchTerm === '' ?
          this.getSelectedOptions(options, init) : [];
        const optionsLength = searchTerm === '' ? count : this.state.optionsLength;

        this.setState({
          ...this.state,
          optionsLength,
          loading: false,
          async: updatedAsync,
          searchedOptionsLength: count,
          options: unSelectedGroup.slice(0, bulk),
          tempSelected: init ? selectedGroup : tempSelected,
          previousSelected: init ? selectedGroup : previousSelected,
          selected: _showSelectedItems(updatedAsync, searchTerm, withCheckbox) ? selectedGroup : [],
          triggerLabel: this.updateTriggerLabel(init ? selectedGroup : tempSelected),
          selectAll: !updatedAsync && init ? getSelectAll(selectedGroup, optionsLength) : selectAll
        });
        if (updatedAsync || withSearch) inputRef.current?.focus();
      });
  }

  updateSearchTerm = (search: string) => {
    this.setState({
      ...this.state,
      loading: true,
      searchInit: true,
      searchTerm: search
    });
  }

  updateOnPopperToggle = () => {
    const {
      withCheckbox,
      showApplyButton,
      onClose,
      name,
      selected = []
    } = this.props;

    const {
      previousSelected,
      tempSelected,
      optionsLength,
      async,
      loading,
      searchTerm
    } = this.state;

    const popperIsOpen = _isOpenControlled(this.props.open) ? this.props.open : this.state.open;

    if (withCheckbox && showApplyButton) {
      const temporarySelected = _isControlled(this.props.selected) ? selected : previousSelected;

      this.setState({
        tempSelected: temporarySelected,
        selectAll: getSelectAll(temporarySelected, optionsLength),
        triggerLabel: this.updateTriggerLabel(temporarySelected),
      });
    }

    if (_isOpenControlled(this.props.open)) {
      this.setState({
        open: popperIsOpen,
      });
    }

    if (popperIsOpen) {
      const moveSelectedGroup =
        _showSelectedItems(async, searchTerm, withCheckbox) &&
        !_isEqual(this.state.selected, tempSelected);

      this.setState({
        loading: moveSelectedGroup || loading || searchTerm !== '',
        searchInit: searchTerm !== '',
        searchTerm: ''
      });

      if (moveSelectedGroup) this.updateOptions(false);
    }

    if (onClose && !popperIsOpen) {
      const arr = withCheckbox && showApplyButton
        ? _isControlled(this.props.selected) ? selected : previousSelected
        : this.state.tempSelected;

      const values = arr.map(option => option.value);
      onClose(values, name);
    }
  }

  updateTriggerLabel = (selectedArray: Selected[] = [], totalOptions?: number) => {
    const selectedLength = selectedArray.length;
    if (selectedLength === 0) return '';

    const { triggerOptions = {}, getLabel } = this.props;
    const { customLabel, labelLimit = 2 } = triggerOptions;
    const optionsLength = this.state ? this.state.optionsLength : totalOptions;
    let label = '';

    if (selectedLength <= labelLimit) {
      label = selectedArray.map(option => {
        return option.label;
      }).join(', ');
    } else {
      label = customLabel ?
        customLabel(selectedLength, optionsLength) : `${selectedLength} selected`;
    }

    if (getLabel) getLabel(label);
    return label;
  }

  updateSelectedOptions = (
    selectedArray: Option[],
    isSingleSelect: boolean,
    isControlled?: boolean,
  ) => {
    const {
      optionsLength,
      previousSelected,
      selected,
      loading,
      open,
    } = this.state;

    const {
      onChange,
      withCheckbox,
      showApplyButton,
      closeOnSelect,
      name,
      onPopperToggle
    } = this.props;

    const isClearClicked = selectedArray.length === 0 && selected.length > 0;
    const updatePreviousSelected = withCheckbox && showApplyButton && isControlled;

    this.setState({
      ...this.state,
      tempSelected: selectedArray,
      triggerLabel: this.updateTriggerLabel(selectedArray),
      selectAll: getSelectAll(selectedArray, optionsLength),
      open: _isOpenControlled(this.props.open) || withCheckbox ? open : !closeOnSelect,
      previousSelected: updatePreviousSelected ? selectedArray : previousSelected,
      selected: isClearClicked ? selectedArray : selected,
      loading: isClearClicked ? true : loading
    });

    if (isClearClicked) this.debounceClear();

    if (onChange && (!showApplyButton || isControlled)) {
      const values = selectedArray.map(item => item.value);
      const selectedValues = isSingleSelect ? values[0] : values;
      onChange(selectedValues, name);
    }

    if (!withCheckbox
      && closeOnSelect
      && onPopperToggle
      && _isOpenControlled(this.props.open)
    ) {
      onPopperToggle(false, 'optionClick');
    }
  }

  onOptionSelect = (option: Option) => {
    const {
      onUpdate,
      selected,
    } = this.props;

    if (_isControlled(selected)) {
      if (onUpdate) onUpdate('select-option', option);
      return;
    }

    this.updateSelectedOptions([option], true);
  }

  onSelect = (option: Option, checked: boolean) => {
    const {
      onUpdate,
      selected,
      showApplyButton
    } = this.props;

    if (_isControlled(selected) && !showApplyButton) {
      if (onUpdate) onUpdate(checked ? 'select-option' : 'deselect-option', option);
      return;
    }

    const {
      tempSelected,
    } = this.state;

    let selectedArray = tempSelected.slice();

    if (!checked) {
      const index = selectedArray.findIndex(item => item.value === option.value);
      selectedArray.splice(index, 1);
    }

    selectedArray = checked ? selectedArray.concat(option) : selectedArray;

    this.updateSelectedOptions(selectedArray, false);
  }

  onSelectAll = (event: ChangeEvent) => {
    const {
      onUpdate,
      selected,
      showApplyButton
    } = this.props;

    if (_isControlled(selected) && !showApplyButton) {
      if (onUpdate) onUpdate(event.target.checked ? 'select-all' : 'deselect-all');
      return;
    }

    const selectedArray = event.target.checked ? this.state.options : [];

    this.updateSelectedOptions(selectedArray, false);
  }

  debounceSearch = debounce(300, () => {
    this.setState({
      searchInit: false,
    }, () => {
      this.updateOptions(false);
    });
  });

  debounceClear = debounce(250, () => this.updateOptions(false));

  onClearOptions = () => {
    const { selected, name, onUpdate, showApplyButton, onChange } = this.props;

    if (_isControlled(selected) && !showApplyButton) {
      if (onUpdate) onUpdate('clear-all');
      return;
    }

    this.setState({
      selected: [],
      tempSelected: [],
      triggerLabel: '',
      loading: true,
    });
    this.debounceClear();
    if (onChange && !showApplyButton) onChange([], name);
  }

  onTogglePopper = (type: string) => {
    const { onPopperToggle } = this.props;

    if (onPopperToggle && _isOpenControlled(this.props.open)) {
      onPopperToggle(false, type);
    }
  }

  onCancelOptions = () => {
    const { previousSelected, tempSelected, optionsLength } = this.state;
    const { selected, onUpdate, onClose, name } = this.props;

    const popperIsOpen = _isOpenControlled(this.props.open) ? this.state.open : false;
    const values = previousSelected.map(option => option.value);

    if (_isControlled(selected)) {
      if (onUpdate) onUpdate('cancel-selected', previousSelected, tempSelected);
      this.onTogglePopper('cancelClick');
      return;
    }

    const label = this.updateTriggerLabel(previousSelected);
    this.setState({
      ...this.state,
      tempSelected: previousSelected,
      selectAll: getSelectAll(previousSelected, optionsLength),
      triggerLabel: label,
      open: popperIsOpen,
    });

    if (onClose && !popperIsOpen) {
      onClose(values, name);
    }

    this.onTogglePopper('cancelClick');
  }

  onApplyOptions = () => {
    const {
      tempSelected,
      previousSelected,
    } = this.state;

    const { onChange, selected, onUpdate, onClose, name } = this.props;

    const popperIsOpen = _isOpenControlled(this.props.open) ? this.state.open : false;
    const values = tempSelected.map(option => option.value);

    if (_isControlled(selected)) {
      if (onUpdate) onUpdate('apply-selected', previousSelected, tempSelected);
      this.onTogglePopper('applyClick');
      return;
    }

    this.setState({
      ...this.state,
      previousSelected: tempSelected,
      optionsApplied: true,
      open: popperIsOpen
    });

    if (onChange) {
      onChange(values, name);
    }

    if (onClose && !popperIsOpen) {
      onClose(values, name);
    }

    this.onTogglePopper('applyClick');

  }

  onToggleDropdown = (updatedOpen: boolean, type?: string) => {
    if (this.props.disabled) {
      return;
    }

    const { onPopperToggle } = this.props;

    if (onPopperToggle && _isOpenControlled(this.props.open)) {
      onPopperToggle(updatedOpen, type);
      return;
    }

    this.setState({
      open: updatedOpen,
    });

  }

  render() {
    const {
      options,
      async,
      open,
      searchTerm,
      searchInit,
      loading,
      searchedOptionsLength,
      tempSelected,
      selectAll,
      triggerLabel,
      previousSelected
    } = this.state;

    const { triggerOptions = {}, selected, ...rest } = this.props;
    const remainingOptionsLen = searchedOptionsLength - options.length;

    return (
      <DropdownList
        listOptions={options}
        inputRef={inputRef}
        remainingOptions={remainingOptionsLen}
        loadingOptions={loading}
        async={async}
        searchInit={searchInit}
        dropdownOpen={open}
        searchTerm={searchTerm}
        triggerLabel={triggerLabel}
        tempSelected={tempSelected}
        previousSelected={previousSelected}
        selected={this.state.selected}
        applyOptions={this.onApplyOptions}
        cancelOptions={this.onCancelOptions}
        toggleDropdown={this.onToggleDropdown}
        onClearOptions={this.onClearOptions}
        onSelect={this.onSelect}
        selectAll={selectAll}
        onSearchChange={this.updateSearchTerm}
        onOptionSelect={this.onOptionSelect}
        onSelectAll={this.onSelectAll}
        customTrigger={triggerOptions.customTrigger}
        {...rest}
      />
    );
  }
}

export default Dropdown;
