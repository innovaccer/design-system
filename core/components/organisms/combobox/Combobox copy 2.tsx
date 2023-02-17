import React from 'react';
import { BaseProps } from '@/utils/types';
import { Popover, ChipInput, Input } from '@/index';

export type InputSize = 'tiny' | 'regular' | 'large';
type OptionType = {
  label: string;
  value: string;
  // selected: boolean;
};

const InputBox = (props: any) => {
  const { placeholder, value, onChange } = props;
  console.log('value inputbox', value);

  return <Input placeholder={placeholder} value={value} onChange={onChange} />;
};

export interface ComboboxProps extends BaseProps {
  size?: InputSize;
  multiSelect?: boolean;
  optionList: OptionType[];
  placeholder?: string;
}

export const Combobox = (props: ComboboxProps) => {
  const { optionList, multiSelect } = props;
  const [selectedOption, setSelectedOption] = React.useState<OptionType[]>([]);
  const [displayList, setDisplayList] = React.useState(optionList);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const onInputChange = (e) => {
    const value = e.target.value;
    // e.stopPropagation();
    console.log('inputVal-> ', value);
    const filterList = optionList.filter((item) => {
      console.log('item-> ', item);
      return item.value.toString().toLowerCase().includes(value.toLowerCase());
    });
    console.log('filterList', filterList);
    // setDisplayList(filterList);
    // setCount(count + 1);
    // setInputValue(value);
    // setOpen(true);
  };

  const onClickHandler = (options: OptionType) => {
    console.log('e.value', options);
    if (multiSelect) {
      setSelectedOption([...selectedOption, options]);
    } else {
      setSelectedOption([options]);
      setInputValue(options.label);
    }
  };

  const ComboboxTrigger = () => {
    // const { multiSelect } = props;
    if (multiSelect) {
      return <ChipInput />;
    }
    return <InputBox {...props} selectedOption={selectedOption} value={inputValue} onChange={onInputChange} />;
  };

  return (
    <Popover
      className="p-6"
      position="bottom-start"
      // on="click"
      trigger={<ComboboxTrigger />}
      open={open}
      // trigger={<Button appearance="basic">Open Popover</Button>}
    >
      <ul className="px-5">
        {displayList.map((options, key) => {
          return (
            <li className="py-4 cursor-pointer" key={key} onClick={() => onClickHandler(options)}>
              {options.label}
            </li>
          );
        })}
      </ul>
    </Popover>
  );
};

Combobox.displayName = 'Combobox';

export default Combobox;
