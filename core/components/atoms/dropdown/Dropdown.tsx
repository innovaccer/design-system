import * as React from 'react';
import axios from 'axios';
import DropdownList, { IDropdownListProps, Option } from '@/components/atoms/dropdown/dropdownList';
import { getOptions } from './utils/utility';

export interface IDropdownProps extends IDropdownListProps {
  url?: string; //
  offset?: number;
  limit?: number;
  stateLimit?: number;
  options?: Option[];
  onChange?: (selected: any[] | any) => void;
}

const Dropdown: React.FunctionComponent<IDropdownProps> = props => {
  const {
    url,
    offset = 0,
    limit = 10,
    stateLimit = 30,
    onChange,
    ...rest
  } = props;

  const [topOffset, setTopOffset] = React.useState(offset);
  const [bottomOffset, setBottomOffset] = React.useState(offset);
  const [options, setOptions] = React.useState<Option[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [topOptionsSliced, setTopOptionsSliced] = React.useState(false);
  const [bottomOptionsSliced, setBottomOptionsSliced] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');

  const getOptionsfromAPI = (updatedOffset: number | undefined, direction: string | undefined) => {
    const optionOffset = updatedOffset ? updatedOffset : offset;
    setLoading(true);
    axios.get(`${url}?offset=${optionOffset}&limit=${limit}&search=${searchTerm}`).
      then(res => {
        const { offset: newOffset, results } = res.data;
        if (updatedOffset !== undefined && direction !== undefined) {
          updateOptionsOnScroll(res.data, updatedOffset, direction);
        } else {
          setOptions(results);
          setBottomOffset(newOffset);
          setLoading(false);
        }
      }).
      catch(error => {
        console.log(error);
        setLoading(false);
      });
  };

  const getDropdownOptions = (updatedOffset: number | undefined, direction: string | undefined) => {
    const optionOffset = updatedOffset ? updatedOffset : offset;

    getOptions(optionOffset, limit, props.options).then((res: any) => {
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
      getDropdownOptions(undefined, undefined);
    }
  }, [props.options]);

  React.useEffect(() => {
    if (!props.options) {
      getOptionsfromAPI(undefined, undefined);
    }
  }, [url, searchTerm]);

  React.useEffect(() => {
    if (loading) {
      const loadingArray = Array(limit).fill({ loading: true });
      setOptions(options.concat(loadingArray));
    }
  }, [loading]);

  const onSearchChange = (search: string) => {
    setSearchTerm(search);
  };

  const updateOptionsOnScroll = (result: any, updatedOffset: number, direction: string) => {
    if (bottomOptionsSliced) setBottomOptionsSliced(false);
    if (topOptionsSliced) setTopOptionsSliced(false);

    const { slicedOptions } = result;
    let updatedOptions = options.slice();
    updatedOptions = (url && !props.options) ? updatedOptions.slice(0, updatedOptions.length - limit) : updatedOptions;
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

  return (
    <div>
      <DropdownList
        listOptions={options}
        onScroll={OnScrollOptions}
        topOptionsSliced={topOptionsSliced}
        bottomOptionsSliced={bottomOptionsSliced}
        limit={limit}
        offset={topOffset}
        onSearchChange={onSearchChange}
        onChange={onChangeOptions}
        {...rest}
      />
    </div>
  );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
