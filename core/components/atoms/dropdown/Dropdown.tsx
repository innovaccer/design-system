import * as React from 'react';
import { debounce } from 'throttle-debounce';
import DropdownList, { DropdownListProps, SelectAll, Selected, ChangeEvent } from './DropdownList';
import { OptionSchema as Option } from './option';
import { getSearchedOptions, getSelectAll, _isEqual } from './utility';
import { BaseProps } from '@/utils/types';

type fetchOptionsFunction = (searchTerm: string) => Promise<{
  count: number;
  options: Option[];
}>;

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
   * | selected | Denotes default selection of option | |
   * | group | Defines group to which the option belongs | |
   */
  options?: Option[];
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
   * @default true
   */
  closeOnSelect?: boolean;
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
  triggerOptions?: TriggerProps;
  /**
   * Callback function called when user selects an option
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

export type DropdownProps = (SyncDropdownProps & AsyncDropdownProps);

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

/**
 * ###Note:
 * 1. Dropdown props types:
 *  - async: fetchOptions
 *  - sync: options, loading
 * 2. Sync Dropdown:
 *  - Manually toggle loading state to update options.
 */

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);

    const {
      totalOptions,
      loading,
      options = [],
    } = props;

    const optionsLength = totalOptions ? totalOptions : options.length;
    const async = 'fetchOptions' in this.props
      || optionsLength > bulk;

    const selectedGroup = !async ? this.getSelectedOptions(options, true) : [];

    this.state = {
      async,
      optionsLength,
      searchInit: false,
      searchedOptionsLength: optionsLength,
      optionsApplied: false,
      options: options || [],
      loading: async ? true : loading,
      searchTerm: '',
      selected: [],
      tempSelected: selectedGroup,
      previousSelected: selectedGroup,
      triggerLabel: this.updateTriggerLabel(selectedGroup, optionsLength),
      selectAll: getSelectAll(selectedGroup, optionsLength)
    };

    if (async) this.updateOptions(true);
  }

  static defaultProps = {
    triggerOptions: {},
    closeOnSelect: true,
  };

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
      const unSelectedGroup = options.filter(option => (
        init ? !option.selected : this.state.tempSelected.findIndex(item => item.value === option.value) === -1
      ));

      return unSelectedGroup;
    }
    return options;
  }

  getSelectedOptions = (options: Option[], init: boolean) => {
    if (options.length) {
      const selectedGroup = init ? options.filter(option => option.selected) : this.state.tempSelected;
      return selectedGroup;
    }
    return [];
  }

  updateOptions = (init: boolean, async?: boolean) => {
    const {
      searchTerm,
      tempSelected,
      optionsLength,
      previousSelected,
    } = this.state;

    let updatedAsync = async === undefined ? this.state.async : async;
    const { fetchOptions, withCheckbox, withSearch } = this.props;
    const fetchFunction = fetchOptions ? fetchOptions : this.fetchOptionsFunction;

    fetchFunction(searchTerm)
      .then((res: any) => {
        const { options, count } = res;
        updatedAsync = searchTerm === '' ? count > bulk : updatedAsync;

        const unSelectedGroup = withCheckbox && searchTerm === '' && updatedAsync ?
          this.getUnSelectedOptions(options, init) : options;
        const selectedGroup = searchTerm === '' ?
          this.getSelectedOptions(options, init) : [];

        this.setState({
          ...this.state,
          loading: false,
          async: updatedAsync,
          searchedOptionsLength: count,
          options: unSelectedGroup.slice(0, bulk),
          selected: withCheckbox && updatedAsync ? selectedGroup : [],
          optionsLength: searchTerm === '' ? count : optionsLength,
          tempSelected: init ? selectedGroup : tempSelected,
          previousSelected: init ? selectedGroup : previousSelected,
          triggerLabel: this.updateTriggerLabel(init ? selectedGroup : tempSelected),
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

  onOptionSelect = (selectedArray: Option) => {
    const { onChange, closeOnSelect } = this.props;
    const { label } = selectedArray;

    this.setState({
      ...this.state,
      tempSelected: [selectedArray],
      triggerLabel: label,
      open: !closeOnSelect
    });
    if (onChange) onChange(selectedArray.value, name);
  }

  updateTriggerLabel = (selectedArray: Selected[] = [], totalOptions?: number) => {
    const selectedLength = selectedArray.length;
    if (selectedLength === 0) return '';

    const { triggerOptions = {} } = this.props;
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
    return label;
  }

  onSelect = (option: Option, checked: boolean) => {
    const {
      tempSelected,
      optionsLength
    } = this.state;

    const {
      onChange,
      showApplyButton,
    } = this.props;

    let selectedArray = tempSelected.slice();

    if (!checked) {
      const index = selectedArray.findIndex(item => item.value === option.value);
      selectedArray.splice(index, 1);
    }

    selectedArray = checked ? selectedArray.concat(option) : selectedArray;

    this.setState({
      ...this.state,
      tempSelected: selectedArray,
      triggerLabel: this.updateTriggerLabel(selectedArray),
      selectAll: getSelectAll(selectedArray, optionsLength)
    });

    if (onChange && !showApplyButton) {
      const values = selectedArray.map(item => item.value);
      onChange(values, name);
    }
  }

  onSelectAll = (event: ChangeEvent) => {
    const {
      onChange,
      showApplyButton
    } = this.props;

    const {
      options,
      optionsLength,
    } = this.state;

    const selectedArray = event.target.checked ? options : [];

    this.setState({
      ...this.state,
      tempSelected: selectedArray,
      triggerLabel: this.updateTriggerLabel(selectedArray),
      selectAll: getSelectAll(selectedArray, optionsLength)
    });

    if (onChange && !showApplyButton) {
      const values = selectedArray.map(option => option.value);
      onChange(values, name);
    }
  }

  debounceSearch = debounce(300, () => {
    this.setState({
      searchInit: false,
    }, () => {
      this.updateOptions(false);
    });
  });

  debounceClear = debounce(100, () => this.updateOptions(false));

  onClearOptions = () => {
    const { onChange, showApplyButton } = this.props;
    this.setState({
      selected: [],
      tempSelected: [],
      triggerLabel: '',
      loading: true,
    });
    this.debounceClear();
    if (onChange && !showApplyButton) onChange([], name);
  }

  onCancelOptions = () => {
    const { previousSelected, optionsLength } = this.state;
    const label = this.updateTriggerLabel(previousSelected);
    this.setState({
      ...this.state,
      tempSelected: previousSelected,
      selectAll: getSelectAll(previousSelected, optionsLength),
      triggerLabel: label,
      open: false,
    });
    if (this.props.onClose) {
      const values = previousSelected.map(option => option.value);
      this.props.onClose(values, name);
    }
  }

  onApplyOptions = () => {
    const {
      tempSelected,
    } = this.state;

    const { onChange, onClose } = this.props;

    this.setState({
      ...this.state,
      previousSelected: tempSelected,
      optionsApplied: true,
      open: false,
    });

    const values = tempSelected.map(option => option.value);

    if (onChange) {
      onChange(values, name);
    }
    if (onClose) {
      onClose(values, name);
    }
  }

  onToggleDropdown = () => {
    if (this.props.disabled) {
      return;
    }
    const { showApplyButton, withCheckbox, onClose, name } = this.props;
    const {
      triggerLabel,
      optionsApplied,
      previousSelected,
      tempSelected,
      optionsLength,
      open,
      async,
      selected,
      loading,
      selectAll,
      searchTerm
    } = this.state;

    const applyClicked = withCheckbox && showApplyButton && !optionsApplied;
    const moveSelectedGroup = async && searchTerm === '' && withCheckbox && !_isEqual(selected, tempSelected);

    this.setState({
      ...this.state,
      tempSelected: applyClicked ? previousSelected : tempSelected,
      selectAll: applyClicked ? getSelectAll(previousSelected, optionsLength) : selectAll,
      triggerLabel: applyClicked ? this.updateTriggerLabel(previousSelected) : triggerLabel,
      open: !open,
      optionsApplied: false,
      loading: moveSelectedGroup || loading || searchTerm !== '',
      searchInit: searchTerm !== '',
      searchTerm: ''
    });

    if (moveSelectedGroup) this.updateOptions(false);
    if (onClose && open) {
      const arr = applyClicked ? previousSelected : tempSelected;
      const values = arr.map(option => option.value);
      onClose(values, name);
    }
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
      selected,
      triggerLabel,
      previousSelected
    } = this.state;

    const { triggerOptions = {}, ...rest } = this.props;
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
        selected={selected}
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
