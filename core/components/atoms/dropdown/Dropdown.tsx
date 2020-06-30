import * as React from 'react';
import { debounce } from 'throttle-debounce';
import DropdownList, { DropdownListProps, SelectAll, Selected } from './DropdownList';
import { OptionSchema as Option } from './option';
import { getSearchedOptions, getSelectAll, _isEqual } from './utility';

type fetchOptionsFnc = (searchTerm: string) => Promise<{
  count: number;
  options: Option[];
}>;

interface SyncProps {
  options?: Option[];
  loading?: boolean;
}

interface AsyncProps {
  /**
   * Callback function when async is true
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * Promise object to be returned:
   * {
   *    options: Option[]
   *    length: number
   * }
   * </pre>
   *
   */
  fetchOptions?: fetchOptionsFnc;
}

interface SharedDropdownProps extends DropdownListProps {
  /**
   * Unique name of `dropdown`
   */
  name?: string | number;
  /**
   * Number of selected options to be shown on `Dropdown button`
   * @default 2
   */
  checkedValuesOffset?: number;
  /**
   * Length of total options in Dropdown
   */
  totalOptions?: number;
  /**
   * Determines if dropdown closes on select
   * @default true
   */
  closeOnSelect?: boolean;
  /**
   * Callback function to change the label of trigger button when options are selected
   */
  onChangeTriggerLabel?: (selected: number, totalOptions?: number) => string;
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

export type DropdownProps = (AsyncDropdownProps & SyncDropdownProps);

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

const bulk = 50;

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
    closeOnSelect: true,
    checkedValuesOffset: 2,
  };

  componentDidUpdate(prevProps: DropdownProps, prevState: DropdownState) {
    if (!this.state.async) {
      const { loading, options = [] } = this.props;
      if (prevProps.loading !== loading || prevProps.options !== options) {
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
        }
      }
    }

    if (prevState.searchTerm !== this.state.searchTerm) {
      this.debounceSearch();
    }
  }

  fetchOptionsFn = (searchTerm: string) => {
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

    const updatedAsync = async === undefined ? this.state.async : async;
    const { fetchOptions, checkboxes } = this.props;
    const fetchFn = fetchOptions ? fetchOptions : this.fetchOptionsFn;

    fetchFn(searchTerm)
      .then((res: any) => {
        const { options, count } = res;

        const unSelectedGroup = checkboxes && searchTerm === '' && updatedAsync ?
          this.getUnSelectedOptions(options, init) : options;
        const selectedGroup = searchTerm === '' && updatedAsync ?
          this.getSelectedOptions(options, init) : [];

        this.setState({
          ...this.state,
          loading: false,
          async: updatedAsync,
          searchedOptionsLength: count,
          options: unSelectedGroup.slice(0, bulk),
          selected: checkboxes ? selectedGroup : [],
          optionsLength: searchTerm === '' ? count : optionsLength,
          tempSelected: init ? selectedGroup : tempSelected,
          previousSelected: init ? selectedGroup : previousSelected,
          triggerLabel: this.updateTriggerLabel(init ? selectedGroup : tempSelected),
        });
      });
  }

  updateSearchTerm = (search: string) => {
    this.setState({
      ...this.state,
      loading: true,
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

    const { checkedValuesOffset, onChangeTriggerLabel } = this.props;
    const optionsLength = this.state ? this.state.optionsLength : totalOptions;
    let label = '';

    if (checkedValuesOffset !== undefined && selectedLength <= checkedValuesOffset) {
      label = selectedArray.map(option => {
        return option.label;
      }).join(', ');
    } else {
      label = onChangeTriggerLabel ?
        onChangeTriggerLabel(selectedLength, optionsLength) : `${selectedLength} selected`;
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

  onSelectAll = (checked: boolean) => {
    const {
      onChange,
      showApplyButton
    } = this.props;

    const {
      options,
      optionsLength,
    } = this.state;

    const selectedArray = checked ? options : [];

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

  debounceSearch = debounce(300, () => this.updateOptions(false));

  onClearOptions = () => {
    const { onChange, showApplyButton } = this.props;
    this.setState({
      selected: [],
      tempSelected: [],
      triggerLabel: '',
      loading: true,
    });
    this.debounceSearch();
    if (onChange && !showApplyButton) onChange([], name);
  }

  onCancelOptions = () => {
    const { previousSelected, optionsLength, tempSelected } = this.state;
    const label = this.updateTriggerLabel(previousSelected);
    this.setState({
      ...this.state,
      tempSelected: previousSelected,
      selectAll: getSelectAll(previousSelected, optionsLength),
      triggerLabel: label,
      open: false,
    });
    if (this.props.onClose) {
      const values = tempSelected.map(option => option.value);
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
    const { showApplyButton, checkboxes, onClose, name } = this.props;
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
      selectAll
    } = this.state;

    const applyClicked = checkboxes && showApplyButton && !optionsApplied;
    const moveSelectedGroup = async && checkboxes && !_isEqual(selected, tempSelected);

    this.setState({
      ...this.state,
      tempSelected: applyClicked ? previousSelected : tempSelected,
      selectAll: applyClicked ? getSelectAll(previousSelected, optionsLength) : selectAll,
      triggerLabel: applyClicked ? this.updateTriggerLabel(previousSelected) : triggerLabel,
      open: !open,
      optionsApplied: false,
      loading: moveSelectedGroup || loading,
      searchTerm: ''
    });

    if (moveSelectedGroup) this.updateOptions(false);
    if (onClose && open) {
      const values = tempSelected.map(option => option.value);
      onClose(values, name);
    }
  }

  render() {
    const {
      options,
      async,
      open,
      searchTerm,
      loading,
      searchedOptionsLength,
      tempSelected,
      selectAll,
      selected,
      triggerLabel,
      previousSelected
    } = this.state;

    const { loadersLength, ...rest } = this.props;
    const remainingOptionsLen = searchedOptionsLength - options.length;

    return (
      <DropdownList
        listOptions={options}
        remainingOptions={remainingOptionsLen}
        loadingOptions={loading}
        async={async}
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
        {...rest}
      />
    );
  }
}

export default Dropdown;
