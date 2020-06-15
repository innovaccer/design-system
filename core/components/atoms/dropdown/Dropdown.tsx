import * as React from 'react';
import { debounce } from 'throttle-debounce';
import DropdownList, { DropdownListProps, Option } from './DropdownList';
import { getOptions, getValuesFromSelectedObj, getLabelsFromSelectedObj } from './utility';

interface OptionType {
  offset: number;
  length: number;
  slicedOptions: any[];
}

export const useIsMount = () => {
  const isMountRef = React.useRef(true);
  React.useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

export interface DropdownProps extends DropdownListProps {
  /**
   * Number of options to be added when scroller hits top/bottom
   * @default 10
   */
  limit?: number;
  /**
   * Shows loaders when waiting for options
   */
  loading?: boolean;
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * if options in database are <= 50, `bulk` = false
   * if options in database are > 50, `bulk` = true
   * </pre>
   */
  bulk?: boolean;
  /**
   * Options to render inside `Dropdown`
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * Option: {
   *    icon?: string;
   *    subInfo?: string;
   *    label: string;
   *    value: any;
   *    group?: string;
   * }
   * </pre>
   */
  options?: Option[];
  /**
   * Label for selected options group
   * @default "Selected Items"
   */
  selectedGroupLabel?: string;
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
  fetchOptions?: (searchTerm: string, limit: number) => Promise<OptionType>;
  /**
   * Callback function called when user selects an option
   */
  onChange?: (selected: any[] | any) => void;
}

interface Selected {
  label: string[];
  value: any[];
}

const asyncLimit = 50;

export const Dropdown = (props: DropdownProps) => {
  const {
    limit = 10,
    options: dropdownItems = [],
    selectedGroupLabel = 'Selected Items',
    bulk,
    onChange,
    fetchOptions,
    ...rest
  } = props;

  const [topOffset, setTopOffset] = React.useState(-1);
  const [bottomOffset, setBottomOffset] = React.useState(-1);
  const [options, setOptions] = React.useState<Option[]>([]);
  const [dropdownOptions, setDropdownOptions] = React.useState(dropdownItems);
  const [shuffledOptions, setShuffledOptions] = React.useState(dropdownItems);
  const [topOptionsSliced, setTopOptionsSliced] = React.useState(false);
  const [bottomOptionsSliced, setBottomOptionsSliced] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [stateLimit, setStateLimit] = React.useState(2 * limit);
  const [slicedOptionLength, setSlicedOptionLength] = React.useState(0);
  const [async, setAsync] = React.useState(bulk);
  const [loading, setLoading] = React.useState(props.loading);
  const [optionsLength, setOptionsLength] = React.useState(dropdownItems.length);
  const [bufferedOption, setBufferedOption] = React.useState<Option>();
  const [searchInit, setSearchInit] = React.useState(false);
  const [selectedAll, setSelectedAll] = React.useState<Selected>();

  const isInitialRender = useIsMount();

  const debounceSearch = React.useCallback(debounce(300, (search: string, updatedAsync?: boolean) => {
    if (updatedAsync) {
      const emptyBuffer: Option = { value: '', label: '' };
      setBufferedOption(emptyBuffer);
      getFilteredOptions(search);
      setTopOffset(0);
      setBottomOffset(0);
    } else {
      setLoading(false);
      renderOptionsFromTop(search);
    }
  }), []);

  const getFilteredOptions = (search: string = '') => {
    if (fetchOptions) {
      fetchOptions(search, asyncLimit)
        .then((res: any) => {
          const { options: searchResult, count } = res;
          const searchOptions = searchResult.slice(0, asyncLimit);
          setLoading(false);
          setDropdownOptions(searchOptions);
          setShuffledOptions(searchOptions);
          setOptionsLength(count);
          setSearchInit(true);
        });
    }
  };

  const setVirtualization = (
    offset: number,
    optionsLimit: number,
    direction?: string,
    search: string = searchTerm
  ) => {
    const bufferedOptionPresent = direction === 'up' && !(offset < 0);
    const updatedLimit = direction === 'up' ? (offset < 0 ? optionsLimit : optionsLimit + 1) : optionsLimit;
    const updatedOffset = direction === 'up' ? (offset < 0 ? offset + 1 : offset) : offset;

    getOptions(updatedOffset, updatedLimit, search, dropdownOptions).then((res: any) => {
      if (updatedOffset !== undefined && direction !== undefined) {
        const { options: slicedOptions } = res;
        const len = limit - slicedOptions.length;
        const slicedLength = bufferedOptionPresent ? len + 1 : len;
        setSlicedOptionLength(slicedLength);
        updateOptionsOnScroll(slicedOptions, updatedOffset, direction, slicedLength, bufferedOptionPresent);
      } else {
        setSlicedOptionLength(0);
        setOptions(res.options);
        setBottomOffset(res.offset);
        if (!async) setOptionsLength(res.length);
      }
    });
  };

  const renderOptionsFromTop = (search: string = searchTerm) => {
    if (!loading) {
      const emptyBuffer: Option = { value: '', label: '' };
      setBufferedOption(emptyBuffer);
      setVirtualization(0, limit, undefined, search);
      setTopOffset(0);
      setBottomOffset(0);
    }
  };

  React.useEffect(() => {
    if (!isInitialRender) setStateLimit(2 * limit);
  }, [limit]);

  React.useEffect(() => {
    if (!isInitialRender) setAsync(bulk);
  }, [bulk]);

  React.useEffect(() => {
    if (!isInitialRender) {
      if (async) {
        setLoading(true);
        getFilteredOptions();
      } else {
        setDropdownOptions(dropdownItems);
        setOptionsLength(dropdownItems.length);
      }
    }
  }, [props.checkboxes]);

  React.useEffect(() => {
    const updatedAsync = bulk === undefined ? dropdownItems.length > 50 : async;
    if (bulk === undefined) setAsync(updatedAsync);
    if (updatedAsync) {
      setLoading(true);
      getFilteredOptions();
    } else {
      setDropdownOptions(dropdownItems);
      setOptionsLength(dropdownItems.length);
    }
  }, [JSON.stringify(props.options)]);

  React.useEffect(() => {
    if (!isInitialRender) renderOptionsFromTop();
  }, [JSON.stringify(dropdownOptions), limit]);

  React.useEffect(() => {
    if (!isInitialRender) {
      debounceSearch(searchTerm, async);
    }
  }, [searchTerm]);

  const onSearchChange = (search: string) => {
    setLoading(true);
    setSearchTerm(search);
    setSearchInit(false);
  };

  const updateOptionsOnScroll = (
    slicedOptions: any,
    updatedOffset: number,
    direction: string,
    slicedLength: number,
    bufferPresent: boolean
  ) => {
    if (bottomOptionsSliced) setBottomOptionsSliced(false);
    if (topOptionsSliced) setTopOptionsSliced(false);

    let updatedOptions = options.slice();
    if (direction === 'down') {
      updatedOptions = updatedOptions.concat(slicedOptions);
      const len = updatedOptions.length;
      if (len > stateLimit) {
        const bufferOption = updatedOptions[len - stateLimit - 1];
        updatedOptions = updatedOptions.slice(len - stateLimit, len);
        setBufferedOption(bufferOption);
        setTopOffset(updatedOffset - stateLimit + limit - slicedLength);
        setBottomOptionsSliced(true);
      }
      setBottomOffset(updatedOffset);
    } else {
      const bufferOption = bufferPresent ? slicedOptions[0] : {};
      const newOptions = bufferPresent ? slicedOptions.slice(1) : slicedOptions;
      const newOffset = bufferPresent ? updatedOffset + 1 : updatedOffset;
      updatedOptions = newOptions.concat(updatedOptions);
      const len = updatedOptions.length;
      if (len > stateLimit) {
        updatedOptions = updatedOptions.slice(0, stateLimit);
        setBottomOffset(newOffset + stateLimit - limit);
        setTopOptionsSliced(true);
      }
      setBufferedOption(bufferOption);
      setTopOffset(newOffset);
    }
    setOptions(updatedOptions);
  };

  const onRearrangeOptions = (selected: any[], selectedLabels: string[]) => {
    const optionsCopy = shuffledOptions.slice();
    const unselectedOptions = optionsCopy.filter(option => {
      return selected.indexOf(option.value) === -1;
    });
    const selectedOptions = selected.map((option, i) => {
      const selectedOption: Option = {
        label: selectedLabels[i],
        value: option,
        group: selectedGroupLabel,
        selectedGroup: true
      };
      return selectedOption;
    });
    const newOptions = selectedOptions.concat(unselectedOptions);
    setDropdownOptions(newOptions);
  };

  const OnScrollOptions = (direction: string) => {
    const condition = direction === 'down' ? (bottomOffset + limit > optionsLength) : (topOffset - limit < 0);
    const optionsLimit = condition ? (direction === 'down' ? optionsLength - bottomOffset : topOffset) : limit;
    const updatedOffset = direction === 'down' ? bottomOffset + optionsLimit : topOffset - optionsLimit - 1;
    const offsetInOptions = updatedOffset >= -1 && optionsLimit > 0;
    if (offsetInOptions) setVirtualization(updatedOffset, optionsLimit, direction);
  };

  const onChangeOptions = (selectedArray: any[]) => {
    if (searchInit) setSearchInit(false);
    if (onChange) onChange(selectedArray);
  };

  const onSelectAll = (selectedAllOptions: boolean) => {
    if (props.options) {
      const optionsCopy = props.options.slice();
      const selectedArray = selectedAllOptions ? getValuesFromSelectedObj(optionsCopy) : [];
      const selectedArrayLabel = selectedAllOptions ? getLabelsFromSelectedObj(optionsCopy) : [];
      setSelectedAll({ label: selectedArrayLabel, value: selectedArray });
      if (onChange && !props.showApplyButton) onChange(selectedArray);
    }
  };

  return (
    <DropdownList
      listOptions={options}
      searchInit={searchInit}
      bufferedOption={bufferedOption}
      slicedOptionsLength={slicedOptionLength}
      remainingOptions={optionsLength - dropdownOptions.length}
      loadingOptions={loading}
      async={async}
      selectedAll={selectedAll}
      searchTerm={searchTerm}
      onScroll={OnScrollOptions}
      topOptionsSliced={topOptionsSliced}
      bottomOptionsSliced={bottomOptionsSliced}
      limit={limit}
      offset={topOffset}
      optionsLength={dropdownItems.length}
      onSearchChange={onSearchChange}
      onChange={onChangeOptions}
      onSelectAll={onSelectAll}
      onRearrangeOptions={onRearrangeOptions}
      renderOptionsFromTop={renderOptionsFromTop}
      {...rest}
    />
  );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
