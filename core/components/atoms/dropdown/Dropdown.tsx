import * as React from 'react';
import DropdownList, { DropdownListProps, Option } from '@/components/atoms/dropdown/dropdownList';
import { getOptions, getValuesFromSelectedObj, getLabelsFromSelectedObj } from './utils/utility';

export interface DropdownProps extends DropdownListProps {
  /**
   * Number of options to be added when scroller hits top/bottom
   * @default 10
   */
  limit?: number;
  /**
   * Determines if all options are to be pre-selected
   * @default false
   */
  selectAll?: boolean;
  /**
   * Options to render inside `Dropdown`
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * Option: {
   *    icon?: string;
   *    subInfo?: string;
   *    label: string;
   *    value: any;
   *    selected?: boolean;
   * }
   * </pre>
   */
  options: Option[];
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
    selectAll = false,
    onChange,
    ...rest
  } = props;

  const [topOffset, setTopOffset] = React.useState(0);
  const [bottomOffset, setBottomOffset] = React.useState(0);
  const [options, setOptions] = React.useState<Option[]>([]);
  const [topOptionsSliced, setTopOptionsSliced] = React.useState(false);
  const [bottomOptionsSliced, setBottomOptionsSliced] = React.useState(false);
  const [selectedAll, setSelectedAll] = React.useState(selectAll);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [stateLimit, setStateLimit] = React.useState(2 * limit);
  const [slicedOptionLength, setSlicedOptionLength] = React.useState(0);
  const length = (props.options) ? props.options.length : 0;
  const [optionsLength, setOptionLength] = React.useState(length);
  const [selected, setSelected] = React.useState<Selected>({
    label: [],
    value: [],
  });

  const getSelectedFromOptions = () => {
    const selectedValues: any[] = [];
    const selectedLabels: string[] = [];
    const optionsArray = props.options.slice();

    const selectedFilter = (option: any) => {
      if (option.selected || (selectAll && props.checkboxes)) {
        selectedValues.push(option.value);
        selectedLabels.push(option.label);
      }
    };
    optionsArray.filter(selectedFilter);
    const result = { label: selectedLabels, value: selectedValues };
    return result;
  };

  const getDropdownOptions = (updatedOffset: number, optionsLimit: number, direction: string | undefined) => {
    getOptions(updatedOffset, optionsLimit, searchTerm, props.options).then((res: any) => {
      if (updatedOffset !== undefined && direction !== undefined) {
        const { slicedOptions } = res;
        const slicedLength = limit - slicedOptions.length;
        setSlicedOptionLength(slicedLength);
        updateOptionsOnScroll(res, updatedOffset, direction, slicedLength);
      } else {
        setSlicedOptionLength(0);
        setOptionLength(res.length);
        setOptions(res.slicedOptions);
        setBottomOffset(res.offset);
      }
    });
  };

  React.useEffect(() => {
    setStateLimit(2 * limit);
  }, [limit]);

  React.useEffect(() => {
    if (props.options.length > 0) {
      const selectedOptions = getSelectedFromOptions();
      setSelected(selectedOptions);
      setSelectedAll(selectAll);
      getDropdownOptions(0, limit, undefined);
    }
  }, [JSON.stringify(props.options), selectAll, limit]);

  React.useEffect(() => {
    getDropdownOptions(0, limit, undefined);
  }, [searchTerm]);

  const onSearchChange = (search: string) => {
    setSearchTerm(search);
  };

  const updateOptionsOnScroll = (result: any, updatedOffset: number, direction: string, slicedLength: number) => {
    if (bottomOptionsSliced) setBottomOptionsSliced(false);
    if (topOptionsSliced) setTopOptionsSliced(false);

    const { slicedOptions } = result;
    let updatedOptions = options.slice();
    if (direction === 'down') {
      updatedOptions = updatedOptions.concat(slicedOptions);
      const len = updatedOptions.length;
      if (len > stateLimit) {
        updatedOptions = updatedOptions.slice(len - stateLimit, len);
        setTopOffset(updatedOffset - stateLimit + limit - slicedLength);
        setBottomOptionsSliced(true);
      }
      setBottomOffset(updatedOffset);
    } else {
      updatedOptions = slicedOptions.concat(updatedOptions);
      const len = updatedOptions.length;
      if (len > stateLimit) {
        updatedOptions = updatedOptions.slice(0, stateLimit);
        setBottomOffset(updatedOffset + stateLimit - limit);
        setTopOptionsSliced(true);
      }
      setTopOffset(updatedOffset);
    }
    setOptions(updatedOptions);
  };

  const OnScrollOptions = (direction: string) => {
    const condition = direction === 'down' ? (bottomOffset + limit > optionsLength) : (topOffset - limit < 0);
    const optionsLimit = condition ? (direction === 'down' ? optionsLength - bottomOffset : topOffset) : limit;
    const updatedOffset = direction === 'down' ? bottomOffset + optionsLimit : topOffset - optionsLimit;
    const offsetInOptions = updatedOffset >= 0 && updatedOffset !== optionsLength && optionsLimit > 0;
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
      setSelectedAll(false);
      if (onChange) onChange(selectedArray);
    }
  };

  return (
    <div>
      <DropdownList
        listOptions={options}
        slicedOptionsLength={slicedOptionLength}
        selectAll={selectedAll}
        selected={selected}
        searchTerm={searchTerm}
        onScroll={OnScrollOptions}
        topOptionsSliced={topOptionsSliced}
        bottomOptionsSliced={bottomOptionsSliced}
        limit={limit}
        offset={topOffset}
        optionsLength={length}
        onSearchChange={onSearchChange}
        onChange={onChangeOptions}
        onSelectAll={onSelectAll}
        setSearchTerm={onSearchChange}
        {...rest}
      />
    </div>
  );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
