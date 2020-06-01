import * as React from 'react';
import { debounce } from 'throttle-debounce';
import DropdownList, { DropdownListProps, Option } from '@/components/atoms/dropdown/dropdownList';
import { getOptions, getValuesFromSelectedObj, getLabelsFromSelectedObj } from './utils/utility';

interface OptionType {
  offset: number;
  length: number;
  slicedOptions: any[];
}

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
   * Load options from an API when user scrolls.
   * @default false
   */
  async?: boolean;
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
  options: Option[];
  /**
   * Callback function when user hits the top or bottom
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * Promise object to be returned:
   * {
   *    offset?: number
   *    options: Option[]
   *    length: number
   * }
   * </pre>
   *
   */
  loadMoreOptions?: (offset: number, limit: number, searchTerm: string) => Promise<OptionType>;
  /**
   * Callback function called when user selects an option
   */
  onChange?: (selected: any[] | any) => void;
}

interface Selected {
  label: string[];
  value: any[];
}

export const Dropdown = (props: DropdownProps) => {
  const {
    limit = 10,
    async = false,
    onChange,
    loadMoreOptions,
    ...rest
  } = props;

  const [topOffset, setTopOffset] = React.useState(-1);
  const [bottomOffset, setBottomOffset] = React.useState(-1);
  const [options, setOptions] = React.useState<Option[]>([]);
  const [topOptionsSliced, setTopOptionsSliced] = React.useState(false);
  const [bottomOptionsSliced, setBottomOptionsSliced] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [stateLimit, setStateLimit] = React.useState(2 * limit);
  const [slicedOptionLength, setSlicedOptionLength] = React.useState(0);
  const [loadingMoreUp, setLoadingMoreUp] = React.useState(false);
  const [loadingMoreDown, setLoadingMoreDown] = React.useState(false);
  const [loading, setLoading] = React.useState(props.loading);
  const [optionsLength, setOptionLength] = React.useState(props.options.length);
  const [bufferedOption, setBufferedOption] = React.useState<Option>();
  const [selected, setSelected] = React.useState<Selected>({
    label: [],
    value: [],
  });

  const debounceSearch = React.useCallback(debounce(300, (search: string) => {
    renderOptionsFromTop(search);
  }), []);

  const getDropdownOptions = (
    offset: number,
    optionsLimit: number,
    direction?: string,
    search: string = searchTerm
  ) => {
    const bufferedOptionPresent = direction === 'up' && !(offset < 0);
    const updatedLimit = direction === 'up' ? (offset < 0 ? optionsLimit : optionsLimit + 1) : optionsLimit;
    const updatedOffset = direction === 'up' ? (offset < 0 ? offset + 1 : offset) : offset;

    let getPaginatedOptions = async && (direction || search) ? loadMoreOptions : getOptions;
    if (props.options.length < optionsLimit && async && loadMoreOptions) {
      getPaginatedOptions = loadMoreOptions;
    }

    if (getPaginatedOptions) {
      if (async && direction === 'up') setLoadingMoreUp(true);
      if (async && direction === 'down') setLoadingMoreDown(true);
      if (getPaginatedOptions === loadMoreOptions && !direction) setLoading(true);

      getPaginatedOptions(updatedOffset, updatedLimit, search, props.options).then((res: any) => {
        if (async && direction === 'up') setLoadingMoreUp(false);
        if (async && direction === 'down') setLoadingMoreDown(false);
        if (getPaginatedOptions === loadMoreOptions && !direction) setLoading(false);

        if (updatedOffset !== undefined && direction !== undefined) {
          const { options: slicedOptions, length } = res;
          const len = limit - slicedOptions.length;
          const slicedLength = bufferedOptionPresent ? len + 1 : len;
          if (!search && optionsLength !== length) setOptionLength(length);
          setSlicedOptionLength(slicedLength);
          updateOptionsOnScroll(slicedOptions, updatedOffset, direction, slicedLength, bufferedOptionPresent);
        } else {
          setOptionLength(res.length);
          setSlicedOptionLength(0);
          setOptions(res.options);
          setBottomOffset(res.offset);
        }
      });
    }
  };

  const renderOptionsFromTop = (search: string = searchTerm) => {
    if (props.options.length > 0) {
      const emptyBuffer: Option = { value: '', label: '' };
      setBufferedOption(emptyBuffer);
      getDropdownOptions(0, limit, undefined, search);
      setTopOffset(0);
      setBottomOffset(0);
    }
  };

  React.useEffect(() => {
    setStateLimit(2 * limit);
  }, [limit]);

  React.useEffect(() => {
    renderOptionsFromTop();
  }, [JSON.stringify(props.options), limit]);

  React.useEffect(() => {
    debounceSearch(searchTerm);
  }, [searchTerm]);

  const onSearchChange = (search: string) => {
    setSearchTerm(search);
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

  const OnScrollOptions = (direction: string) => {
    const condition = direction === 'down' ? (bottomOffset + limit > optionsLength) : (topOffset - limit < 0);
    const optionsLimit = condition ? (direction === 'down' ? optionsLength - bottomOffset : topOffset) : limit;
    const updatedOffset = direction === 'down' ? bottomOffset + optionsLimit : topOffset - optionsLimit - 1;
    const offsetInOptions = updatedOffset >= -1 && optionsLimit > 0;
    if (offsetInOptions) getDropdownOptions(updatedOffset, optionsLimit, direction);
  };

  const onChangeOptions = (selectedArray: any[]) => {
    if (onChange) onChange(selectedArray);
  };

  const onSelectAll = (selectedAllOptions: boolean) => {
    if (props.options) {
      const optionsCopy = props.options.slice();
      const selectedArray = selectedAllOptions ? getValuesFromSelectedObj(optionsCopy) : [];
      const selectedArrayLabel = selectedAllOptions ? getLabelsFromSelectedObj(optionsCopy) : [];
      setSelected({ label: selectedArrayLabel, value: selectedArray });
      if (onChange && !props.showApplyButton) onChange(selectedArray);
    }
  };

  return (
    <DropdownList
      listOptions={options}
      bufferedOption={bufferedOption}
      slicedOptionsLength={slicedOptionLength}
      loadingMoreUp={loadingMoreUp}
      loadingMoreDown={loadingMoreDown}
      loadingOptions={loading}
      async={async}
      selected={selected}
      searchTerm={searchTerm}
      onScroll={OnScrollOptions}
      topOptionsSliced={topOptionsSliced}
      bottomOptionsSliced={bottomOptionsSliced}
      limit={limit}
      offset={topOffset}
      optionsLength={props.options.length}
      onSearchChange={onSearchChange}
      onChange={onChangeOptions}
      onSelectAll={onSelectAll}
      setSearchTerm={onSearchChange}
      renderOptionsFromTop={renderOptionsFromTop}
      {...rest}
    />
  );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
