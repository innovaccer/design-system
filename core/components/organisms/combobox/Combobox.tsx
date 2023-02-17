import React from 'react';
import { BaseProps } from '@/utils/types';
import { Popover, ChipInput, Input } from '@/index';
import { InputProps, ChipInputProps } from '@/index.type';

export type InputSize = 'tiny' | 'regular' | 'large';
type OptionType = {
  label: string;
  value: string;
  // selected: boolean;
};

export interface ComboboxProps extends BaseProps {
  multiSelect?: boolean;
  optionList: OptionType[];
  inputOptions?: InputProps;
  chipInputOptions?: ChipInputProps;
}

const InputBox = (props: InputProps) => {
  const { placeholder, value, onChange } = props;

  return <Input placeholder={placeholder} value={value} onChange={onChange} />;
};

const ChipInputBox = (props: any) => {
  const { value } = props;
  return <ChipInput value={value} />;
};

export const Combobox = (props: ComboboxProps) => {
  const { optionList, multiSelect } = props;
  const [selectedOption, setSelectedOption] = React.useState<OptionType[]>([]);

  const onClickHandler = (options: OptionType) => {
    if (multiSelect) {
      setSelectedOption([...selectedOption, options]);
    } else {
      setSelectedOption([options]);
    }
  };

  const ComboboxTrigger = () => {
    if (multiSelect) {
      const optionList = selectedOption.map((option) => option.label);
      return <ChipInputBox value={optionList} />;
    }
    return <InputBox {...props} value={selectedOption[0]?.label} />;
  };

  return (
    <>
      <Popover
        className="p-6"
        position="bottom-start"
        // on="click"
        trigger={<ComboboxTrigger />}
        // trigger={<Button appearance="basic">Open Popover</Button>}
      >
        <ul className="px-5">
          {optionList.map((options, key) => {
            return (
              <li className="py-4 cursor-pointer" key={key} onClick={() => onClickHandler(options)}>
                {options.label}
              </li>
            );
          })}
        </ul>
      </Popover>
    </>
  );
};

Combobox.displayName = 'Combobox';

export default Combobox;
