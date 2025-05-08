import * as React from 'react';
import { debounce } from 'throttle-debounce';
import DropdownList, { DropdownListProps, SelectAll, Selected } from './DropdownList';
import { OptionSchema } from './option';
import {
  getSearchedOptions,
  getSelectAll,
  _isEqual,
  _isControlled,
  _showSelectedItems,
  _isOpenControlled,
  _isSelectAllPresent,
  scrollToOptionIndex,
} from './utility';
import { BaseProps } from '@/utils/types';
import { ChangeEvent } from '@/common.type';

type fetchOptionsFunction = (searchTerm: string) => Promise<{
  searchTerm?: string;
  count: number;
  options: OptionSchema[];
}>;

export type ErrorType = 'DEFAULT' | 'NO_RECORDS_FOUND' | 'FAILED_TO_FETCH';

export type EventType =
  | 'select-option'
  | 'deselect-option'
  | 'select-all'
  | 'deselect-all'
  | 'clear-all'
  | 'apply-selected'
  | 'cancel-selected';

interface ControlledProps {
  /**
   * Array of selected options <br/>
   *  **Denotes `Controlled Dropdown`**
   */
  selected?: OptionSchema[];
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
  onUpdate?: (type: EventType, options?: OptionSchema | OptionSchema[], recentSelected?: OptionSchema[]) => void;
}

interface SyncProps {
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * OptionSchema: {
   *   label: string;
   *   value: React.ReactText;
   *   icon?: string;
   *   subInfo?: string | [MetaListProps]
   *    (https://mds.innovaccer.com/?path=/docs/components-metalist-all--all);
   *   optionType?: OptionType;
   *   selected?: boolean;
   *   disabled?: boolean;
   *   group?: string;
   *   iconType?: 'rounded' | 'outlined'
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
   * | disabled | Disables the option, making it unable to be pressed | |
   * | group | Defines group to which the option belongs | |
   * | iconType | Set type of Icons | |
   */
  options: OptionSchema[];
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
   *
   * <pre className="DocPage-codeBlock">
   * fetchOptionsFunction: (searchTerm: string) => Promise<{
   *      searchTerm?: string;
   *      count: number,
   *      options: Option[],
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
  customLabel?: (selected: number, totalOptions?: number, selectedOptions?: OptionSchema[]) => string;
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
   *    customLabel?: (selected: number, totalOptions?: number, selectedOptions?: Option[]) => string;
   *    customTrigger?: (label: string) => React.ReactElement;
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | labelLimit | Number of selected options <br />to be shown on `Dropdown trigger` | 2 |
   * | customLabel | Callback function to change <br/>the label of trigger when options are selected | |
   * | customTrigger | Adds custom trigger | |
   *
   */
  triggerOptions: TriggerProps;
  /**
   * Determines if the `Dropdown Popover` is open <br/>
   */
  open?: boolean;
  /**
   * Static limit of options to be rendered in the Dropdown List
   *
   * **Max value supported: 100**
   */
  staticLimit: number;
  /**
   * Debounce duration to call updateData in case of search term update
   * @default 300
   */
  searchDebounceDuration: number;
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
  /**
   * Specify the option index which needs to be focused
   */
  tabIndex?: number;
}

type SyncDropdownProps = SyncProps & SharedDropdownProps;
type AsyncDropdownProps = AsyncProps & SharedDropdownProps;

const inputRef = React.createRef<HTMLInputElement>();

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

/**
 *
 * Dropdown component has been deprecated, please use following components instead:
 *
 * - [Select](https://mds.innovaccer.com/?path=/docs/components-select-all--all)
 * - [Menu](https://mds.innovaccer.com/?path=/docs/components-menu-all--all)
 * - [Combobox](https://mds.innovaccer.com/?path=/docs/components-combobox-all--all)
 *
 * ###Note:
 * 1. Dropdown props types:
 *  - async: fetchOptions
 *  - sync: options, loading
 * 2. Sync Dropdown:
 *  - Manually toggle loading state to update options (Options <= staticLimit).
 * 3. Callback Functions
 *  - Controlled Dropdown:
 *    * onUpdate: Called when user `clicks on option` / `clicks on Clear, Cancel or Apply button`.
 *    * onChange: Called when selected options are updated.
 *  - Uncontrolled Dropdown:
 *    * onChange: Called when user `clicks on option` / `clicks on Clear, or Apply button`.
 * 4. Default errorTemplate:
 *
 *  <pre class="DocPage-codeBlock mx-6 mb-7">
 * (props) => {
 *      const { errorType = 'DEFAULT' } = props;
 *      const errorMessages = {
 *        'FAILED\_TO\_FETCH': 'Failed to fetch data',
 *        'NO\_RECORDS\_FOUND': 'No results found',
 *        'DEFAULT': 'No record available'
 *      }
 *      return(
 *        \<Heading>{errorMessages[errorType]}\</Heading>
 *      );
 * }
 * </pre>
 */
export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  staticLimit: number;

  static defaultProps = {
    triggerOptions: {},
    options: [],
    closeOnSelect: true,
    staticLimit: 50,
    searchDebounceDuration: 300,
  };

  constructor(props: DropdownProps) {
    super(props);

    const { selected = [], totalOptions, withCheckbox, loading, open, options } = props;

    this.staticLimit = Math.min(100, props.staticLimit);
    const optionsLength = totalOptions ? totalOptions : options.length;
    const async = 'fetchOptions' in this.props || optionsLength > this.staticLimit;

    const selectedGroup = !async ? this.getSelectedOptions(options, true) : [];
    const disabledOptions = this.getDisabledOptions(options);

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
      selectAll: getSelectAll(selectedGroup, optionsLength, disabledOptions.length),
      errorType: 'DEFAULT',
    };
  }

  componentDidMount() {
    const { async } = this.state;
    if (async) this.updateOptions(true);
  }

  componentDidUpdate(prevProps: DropdownProps, prevState: DropdownState) {
    if (!this.state.async) {
      const { loading, fetchOptions, options = [], withSearch } = this.props;
      const disabledOptionsCount = this.getDisabledOptions(options).length;

      if (prevProps.loading !== loading && !fetchOptions) {
        if (options.length > this.staticLimit) {
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
            selectAll: getSelectAll(selectedGroup, this.state.optionsLength, disabledOptionsCount),
          });

          if (withSearch) inputRef.current?.focus();
        }
      }
    }

    if (
      this.props.selected !== undefined &&
      prevProps.selected !== this.props.selected &&
      prevProps.loading === this.props.loading
    ) {
      const isSingleSelect = !this.props.withCheckbox;
      this.updateSelectedOptions(this.props.selected, isSingleSelect, true);
    }

    if (prevState.searchTerm !== this.state.searchTerm) {
      this.debounceSearch();
    }

    if (prevProps.open !== this.props.open || prevState.open !== this.state.open) {
      if (_isOpenControlled(this.props.open) && this.props.open === this.state.open) return;
      this.updateOnPopperToggle();
    }
  }

  getDisabledOptions = (options: OptionSchema[] = []) => {
    return options.filter((option) => option.disabled);
  };

  fetchOptionsFunction = (searchTerm: string) => {
    const { options } = this.props;
    const filteredOptions = searchTerm ? getSearchedOptions(options, searchTerm) : options;
    return new Promise<any>((resolve) => {
      resolve({
        searchTerm,
        options: filteredOptions,
        count: filteredOptions.length,
      });
    });
  };

  getUnSelectedOptions = (options: OptionSchema[], init: boolean) => {
    if (options.length) {
      if (!init) {
        return options.filter(
          (option) => this.state.tempSelected.findIndex((item) => item.value === option.value) === -1
        );
      }

      const { selected = [] } = this.props;
      const unSelectedGroup = options.filter((option) =>
        _isControlled(this.props.selected)
          ? selected.findIndex((item) => item.value === option.value) === -1
          : !option.selected
      );

      return unSelectedGroup;
    }
    return options;
  };

  getSelectedOptions = (options: OptionSchema[], init: boolean) => {
    const { selected = [] } = this.props;
    if (options.length) {
      if (!init) return this.state.tempSelected;

      const selectedGroup = _isControlled(this.props.selected) ? selected : options.filter((option) => option.selected);
      return selectedGroup;
    }
    return [];
  };

  updateOptions = (init: boolean, async?: boolean) => {
    const { searchTerm, selectAll, tempSelected, previousSelected, errorType } = this.state;

    let updatedAsync = async === undefined ? this.state.async : async;
    const { fetchOptions, withCheckbox, withSearch } = this.props;
    const fetchFunction = fetchOptions ? fetchOptions : this.fetchOptionsFunction;

    fetchFunction(searchTerm)
      .then((res: any) => {
        const { options, count } = res;
        if (res.scrollToIndex) {
          setTimeout(() => {
            scrollToOptionIndex(res.scrollToIndex, options);
          }, 0);
        }
        if (!res.searchTerm || (res.searchTerm && res.searchTerm === this.state.searchTerm)) {
          updatedAsync = searchTerm === '' ? count > this.staticLimit : updatedAsync;

          const unSelectedGroup = _showSelectedItems(updatedAsync, searchTerm, withCheckbox)
            ? this.getUnSelectedOptions(options, init)
            : options;
          const selectedGroup = searchTerm === '' ? this.getSelectedOptions(options, init) : [];
          const optionsLength = searchTerm === '' ? count : this.state.optionsLength;
          const disabledOptions = this.getDisabledOptions(unSelectedGroup.slice(0, this.staticLimit));

          let errorResult = errorType;

          if (optionsLength === 0 && searchTerm === '') {
            errorResult = 'DEFAULT';
          } else if (searchTerm !== '') {
            errorResult = 'NO_RECORDS_FOUND';
          } else {
            errorResult = 'FAILED_TO_FETCH';
          }

          this.setState({
            ...this.state,
            errorType: fetchOptions ? errorResult : errorType,
            scrollIndex: res.scrollToIndex || 0,
            optionsLength,
            loading: false,
            async: updatedAsync,
            searchedOptionsLength: count,
            options: unSelectedGroup.slice(0, this.staticLimit),
            tempSelected: init ? selectedGroup : tempSelected,
            previousSelected: init ? selectedGroup : previousSelected,
            selected: _showSelectedItems(updatedAsync, searchTerm, withCheckbox) ? selectedGroup : [],
            triggerLabel: this.updateTriggerLabel(init ? selectedGroup : tempSelected),
            selectAll:
              !updatedAsync && init ? getSelectAll(selectedGroup, optionsLength, disabledOptions.length) : selectAll,
          });
          if (updatedAsync || withSearch) inputRef.current?.focus();
        }
      })
      .catch(() => {
        this.setState({
          errorType: fetchOptions ? 'FAILED_TO_FETCH' : errorType,
          loading: false,
          options: [],
        });
      });
  };

  updateSearchTerm = (search: string) => {
    this.setState({
      ...this.state,
      loading: true,
      searchInit: true,
      searchTerm: search,
      errorType: 'NO_RECORDS_FOUND',
    });
  };

  updateOnPopperToggle = () => {
    const { withCheckbox, showApplyButton, onClose, name, selected = [] } = this.props;

    const { previousSelected, tempSelected, optionsLength, async, loading, searchTerm, options } = this.state;

    const popperIsOpen = _isOpenControlled(this.props.open) ? this.props.open : this.state.open;
    const disabledOptionsCount = this.getDisabledOptions(options).length;

    if (withCheckbox && showApplyButton) {
      const temporarySelected = _isControlled(this.props.selected) ? selected : previousSelected;

      this.setState({
        tempSelected: temporarySelected,
        selectAll: getSelectAll(temporarySelected, optionsLength, disabledOptionsCount),
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
        _showSelectedItems(async, searchTerm, withCheckbox) && !_isEqual(this.state.selected, tempSelected);

      this.setState({
        loading: moveSelectedGroup || loading || searchTerm !== '',
        searchInit: searchTerm !== '',
        searchTerm: '',
      });

      if (moveSelectedGroup) this.updateOptions(false);
    }

    if (onClose && !popperIsOpen) {
      const arr =
        withCheckbox && showApplyButton
          ? _isControlled(this.props.selected)
            ? selected
            : previousSelected
          : this.state.tempSelected;

      const values = arr.map((option) => option.value);
      this.debounceOnClose(values, name);
    }
  };

  debounceOnClose = debounce(300, (values, name) => {
    const { onClose } = this.props;
    if (onClose) {
      onClose(values, name);
    }
  });

  updateTriggerLabel = (selectedArray: Selected[] = [], totalOptions?: number) => {
    const selectedLength = selectedArray.length;
    if (selectedLength === 0) return '';

    const { triggerOptions = {}, getLabel } = this.props;
    const { customLabel, labelLimit = 2 } = triggerOptions;
    const optionsLength = this.state ? this.state.optionsLength : totalOptions;
    let label = '';

    if (selectedLength <= labelLimit) {
      label = selectedArray
        .map((option) => {
          return option.label;
        })
        .join(', ');
    } else {
      label = customLabel ? customLabel(selectedLength, optionsLength, selectedArray) : `${selectedLength} selected`;
    }

    if (getLabel) getLabel(label);
    return label;
  };

  updateSelectedOptions = (selectedArray: OptionSchema[], isSingleSelect: boolean, isControlled?: boolean) => {
    const { optionsLength, previousSelected, selected, loading, open } = this.state;

    const { onChange, withCheckbox, showApplyButton, closeOnSelect, name, onPopperToggle } = this.props;

    const updatePreviousSelected = withCheckbox && showApplyButton && isControlled;
    const disabledOptions = this.getDisabledOptions(this.state.options);
    const isClearClicked =
      (selectedArray.length === 0 && selected.length > 0) ||
      (selectedArray.every((option) => option.disabled) && !selected.every((option) => option.disabled));

    this.setState({
      ...this.state,
      tempSelected: selectedArray,
      triggerLabel: this.updateTriggerLabel(selectedArray),
      selectAll: getSelectAll(selectedArray, optionsLength, disabledOptions.length),
      open: _isOpenControlled(this.props.open) || withCheckbox ? open : !closeOnSelect,
      previousSelected: updatePreviousSelected ? selectedArray : previousSelected,
      selected: isClearClicked ? selectedArray : selected,
      loading: isClearClicked ? true : loading,
    });

    if (isClearClicked) this.debounceClear();

    if (onChange && (!showApplyButton || isControlled)) {
      const values = selectedArray.map((item) => item.value);
      const selectedValues = isSingleSelect ? values[0] : values;
      onChange(selectedValues, name);
    }

    if (!withCheckbox && closeOnSelect && onPopperToggle && _isOpenControlled(this.props.open)) {
      onPopperToggle(false, 'optionClick');
    }
  };

  isValidOption = (option: OptionSchema) => {
    const { closeOnSelect, withCheckbox, open, onPopperToggle } = this.props;
    const temp = this.state.tempSelected;
    if (temp.length > 0 && !withCheckbox && temp[0].value === option['value']) {
      this.setState({
        ...this.state,
        open: _isOpenControlled(open) || !closeOnSelect,
      });
      if (!withCheckbox && closeOnSelect && onPopperToggle && _isOpenControlled(open)) {
        onPopperToggle(false, 'optionClick');
      }
      return false;
    }
    return true;
  };

  onOptionSelect = (option: OptionSchema) => {
    const { onUpdate, selected, menu } = this.props;
    if (_isControlled(selected)) {
      if (onUpdate && (this.isValidOption(option) || menu)) {
        onUpdate('select-option', option);
      }
      return;
    }
    if (this.isValidOption(option) || menu) {
      this.updateSelectedOptions([option], true);
    }
  };

  onSelect = (option: OptionSchema, checked: boolean) => {
    const { onUpdate, selected, showApplyButton } = this.props;

    if (_isControlled(selected) && !showApplyButton) {
      if (onUpdate) onUpdate(checked ? 'select-option' : 'deselect-option', option);
      return;
    }

    const { tempSelected } = this.state;

    let selectedArray = tempSelected.slice();

    if (!checked) {
      const index = selectedArray.findIndex((item) => item.value === option.value);
      selectedArray.splice(index, 1);
    }

    selectedArray = checked ? selectedArray.concat(option) : selectedArray;

    this.updateSelectedOptions(selectedArray, false);
  };

  onSelectAll = (event: ChangeEvent) => {
    const { onUpdate, selected, showApplyButton } = this.props;

    const { tempSelected, options } = this.state;

    if (_isControlled(selected) && !showApplyButton) {
      if (onUpdate) onUpdate(event.target.checked ? 'select-all' : 'deselect-all');
      return;
    }

    const selectedArr = tempSelected.slice();
    const selectedDisabledArray = selectedArr.filter((option) => option.disabled);

    const selectedArray = event.target.checked
      ? [...options.filter((option) => !option.disabled), ...selectedDisabledArray]
      : selectedDisabledArray;

    this.updateSelectedOptions(selectedArray, false);
  };

  debounceSearch = debounce(this.props.searchDebounceDuration, () => {
    this.setState(
      {
        searchInit: false,
      },
      () => {
        this.updateOptions(false);
      }
    );
  });

  reload = () => {
    this.setState(
      {
        loading: true,
      },
      () => {
        this.updateOptions(false);
      }
    );
  };

  debounceClear = debounce(250, () => this.updateOptions(false));

  onClearOptions = () => {
    const { selected, name, onUpdate, showApplyButton, onChange } = this.props;
    const { tempSelected } = this.state;
    const selectedArray = tempSelected.filter((option) => option.disabled);

    if (_isControlled(selected) && !showApplyButton) {
      if (onUpdate) onUpdate('clear-all');
      return;
    }

    this.setState({
      selected: selectedArray,
      tempSelected: selectedArray,
      triggerLabel: '',
      loading: true,
    });
    this.debounceClear();
    if (onChange && !showApplyButton) onChange(selectedArray, name);
  };

  onTogglePopper = (type: string) => {
    const { onPopperToggle } = this.props;

    if (onPopperToggle && _isOpenControlled(this.props.open)) {
      onPopperToggle(false, type);
    }
  };

  onCancelOptions = () => {
    const { previousSelected, tempSelected, optionsLength } = this.state;
    const { selected, onUpdate, onClose, name } = this.props;

    const popperIsOpen = _isOpenControlled(this.props.open) ? this.state.open : false;
    const values = previousSelected.map((option) => option.value);

    if (_isControlled(selected)) {
      if (onUpdate) onUpdate('cancel-selected', previousSelected, tempSelected);
      this.onTogglePopper('cancelClick');
      return;
    }

    const label = this.updateTriggerLabel(previousSelected);
    const disabledOptions = this.getDisabledOptions(this.state.options);

    this.setState({
      ...this.state,
      tempSelected: previousSelected,
      selectAll: getSelectAll(previousSelected, optionsLength, disabledOptions.length),
      triggerLabel: label,
      open: popperIsOpen,
    });

    if (onClose && !popperIsOpen) {
      onClose(values, name);
    }

    this.onTogglePopper('cancelClick');
  };

  onApplyOptions = () => {
    const { tempSelected, previousSelected } = this.state;

    const { onChange, selected, onUpdate, onClose, name } = this.props;

    const popperIsOpen = _isOpenControlled(this.props.open) ? this.state.open : false;
    const values = tempSelected.map((option) => option.value);

    if (_isControlled(selected)) {
      if (onUpdate) onUpdate('apply-selected', previousSelected, tempSelected);
      this.onTogglePopper('applyClick');
      return;
    }

    this.setState({
      ...this.state,
      previousSelected: tempSelected,
      optionsApplied: true,
      open: popperIsOpen,
    });

    if (onChange) {
      onChange(values, name);
    }

    if (onClose && !popperIsOpen) {
      onClose(values, name);
    }

    this.onTogglePopper('applyClick');
  };

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
  };

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
      previousSelected,
      scrollIndex,
      errorType,
    } = this.state;

    const { withSelectAll = true, withCheckbox } = this.props;

    const { triggerOptions = {}, selected, tabIndex, ...rest } = this.props;
    const remainingOptionsLen = searchedOptionsLength - options.length;

    const firstEnabledOption = tabIndex
      ? tabIndex
      : _isSelectAllPresent(searchTerm, remainingOptionsLen, withSelectAll, withCheckbox)
        ? 0
        : options.findIndex((option) => !option.disabled);

    return (
      <DropdownList
        listOptions={options}
        inputRef={inputRef}
        remainingOptions={remainingOptionsLen}
        firstEnabledOption={firstEnabledOption}
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
        scrollIndex={scrollIndex}
        updateOptions={this.reload}
        errorType={errorType}
        {...rest}
      />
    );
  }
}

export default Dropdown;
