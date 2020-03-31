import * as React from 'react';
import axios from 'axios';
import DropdownList, { IDropdownListProps, Option } from '@/components/atoms/dropdown/dropdownList';
import { getOptions, getValuesFromSelectedObj, getIndexesFromSelectedObj, getLabelsFromInd } from './utils/utility';

export interface IDropdownProps extends IDropdownListProps {
  url?: string;
  offset?: number;
  limit?: number;
  stateLimit?: number;
  selectAll?: boolean;
  options: Option[];
  onChange?: (selected: any[] | any) => void;
}

interface Selected {
  label: string[];
  value: any[];
}

const Dropdown: React.FunctionComponent<IDropdownProps> = props => {
  const {
    url,
    offset = 0,
    limit = 10,
    stateLimit = 30,
    onChange,
    selectAll = false,
    ...rest
  } = props;

  const [topOffset, setTopOffset] = React.useState(offset);
  const [bottomOffset, setBottomOffset] = React.useState(offset);
  const [options, setOptions] = React.useState<Option[]>([]);
  const [topOptionsSliced, setTopOptionsSliced] = React.useState(false);
  const [bottomOptionsSliced, setBottomOptionsSliced] = React.useState(false);
  const [selectedAll, setSelectedAll] = React.useState(selectAll);
  const [searchTerm, setSearchTerm] = React.useState('');
  const length = (props.options) ? props.options.length : 0;
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

  const getOptionsfromAPI = (updatedOffset: number | undefined, direction: string | undefined) => {
    const optionOffset = updatedOffset ? updatedOffset : offset;
    axios.get(`${url}?offset=${optionOffset}&limit=${limit}&search=${searchTerm}`).
      then(res => {
        const { offset: newOffset, results } = res.data;
        if (updatedOffset !== undefined && direction !== undefined) {
          updateOptionsOnScroll(res.data, updatedOffset, direction);
        } else {
          setOptions(results);
          setBottomOffset(newOffset);
        }
      });
  };

  const getDropdownOptions = (updatedOffset: number | undefined, direction: string | undefined) => {
    const optionOffset = updatedOffset ? updatedOffset : offset;
    getOptions(optionOffset, limit, searchTerm, props.options).then((res: any) => {
      if (updatedOffset !== undefined && direction !== undefined) {
        updateOptionsOnScroll(res, updatedOffset, direction);
      } else {
        setOptions(res.slicedOptions);
        setBottomOffset(res.offset);
      }
    });
  };

  React.useEffect(() => {
    if (!url) {
      const selectedOptions = getSelectedFromOptions();
      setSelected(selectedOptions);
      setSelectedAll(selectAll);
      getDropdownOptions(undefined, undefined);
    }
  }, [props.options, selectAll]);

  React.useEffect(() => {
    getDropdownOptions(undefined, undefined);
  }, [searchTerm]);

  React.useEffect(() => {
    if (!props.options) {
      getOptionsfromAPI(undefined, undefined);
    }
  }, [url, searchTerm]);

  const onSearchChange = (search: string) => {
    setSearchTerm(search);
  };

  const updateOptionsOnScroll = (result: any, updatedOffset: number, direction: string) => {
    if (bottomOptionsSliced) setBottomOptionsSliced(false);
    if (topOptionsSliced) setTopOptionsSliced(false);

    const { slicedOptions } = result;
    let updatedOptions = options.slice();
    if (direction === 'down') {
      updatedOptions = updatedOptions.concat(slicedOptions);
      const len = updatedOptions.length;
      if (len > stateLimit) {
        updatedOptions = updatedOptions.slice(len - stateLimit, len);
        setTopOffset(updatedOffset - stateLimit + limit);
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
    const updatedOffset = direction === 'down' ? bottomOffset + limit : topOffset - limit;
    if (updatedOffset >= 0) {
      if (url && !props.options) {
        getOptionsfromAPI(updatedOffset, direction);
      } else {
        getDropdownOptions(updatedOffset, direction);
      }
    }
  };

  const onChangeOptions = (selectedArray: any[]) => {
    if (onChange) onChange(selectedArray);

  };

  const onSelectAll = (selectedAllOptions: boolean) => {
    if (props.options) {
      const optionsCopy = props.options.slice();
      const selectedArray = selectedAllOptions ? getValuesFromSelectedObj(optionsCopy) : [];
      const selectedArrayInd = selectedAllOptions ? getIndexesFromSelectedObj(optionsCopy) : [];
      const selectedArrayLabel = selectedAllOptions ? getLabelsFromInd(selectedArrayInd, optionsCopy) : [];
      setSelected({ label: selectedArrayLabel, value: selectedArray });
      setSelectedAll(false);
      if (onChange) onChange(selectedArray);
    }
  };

  return (
    <div>
      <DropdownList
        listOptions={options}
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
