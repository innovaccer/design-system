import React, { useEffect } from 'react';
import { BaseProps } from '@/utils/types';
import { Popover, ChipInput, Input } from '@/index';
import { InputProps, ChipInputProps, PopoverProps } from '@/index.type';

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
  const { value, onChange } = props;

  return <Input value={value} onChange={onChange} {...props} />;
};

const ChipInputBox = (props: any) => {
  const { value } = props;
  return <ChipInput {...props} value={value} />;
};

const Listbox = (props: any) => {
  const { optionList, onClickHandler } = props;
  return (
    <ul className="m-0 p-5 Combobox-list">
      {optionList.map((options: OptionType, key: number) => {
        return (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            className="py-4 cursor-pointer"
            key={key}
            onClick={() => onClickHandler(options)}
            onKeyDown={() => onClickHandler(options)}
          >
            {options.label}
          </li>
        );
      })}
    </ul>
  );
};

export const Combobox = (props: ComboboxProps) => {
  const { optionList, multiSelect } = props;
  const [selectedOption, setSelectedOption] = React.useState<OptionType[]>([]);
  const [popoverStyle, setPopoverStyle] = React.useState<PopoverProps['customStyle']>();
  const [count, setCount] = React.useState(0);
  const triggerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const popperWidth = triggerRef.current?.clientWidth;

    const popperWrapperStyle = {
      width: popperWidth,
      maxWidth: '100%',
    };
    setPopoverStyle(popperWrapperStyle);
  }, []);

  const onClickHandler = (options: OptionType) => {
    if (multiSelect) {
      setSelectedOption([...selectedOption, options]);
    } else {
      setSelectedOption([options]);
    }
    setCount(count + 1);
  };

  const ComboboxTrigger = () => {
    if (multiSelect) {
      const optionList = selectedOption.map((option) => option.label);
      return <ChipInputBox value={optionList} {...props.chipInputOptions} />;
    }
    return <InputBox {...props.inputOptions} value={selectedOption[0]?.label} />;
  };

  return (
    <div ref={triggerRef} className="w-100 position-relative">
      <Popover
        triggerClass="w-100"
        customStyle={popoverStyle}
        className="Combobox-wrapper"
        trigger={<ComboboxTrigger />}
        key={count}
      >
        <Listbox optionList={optionList} onClickHandler={onClickHandler} />
      </Popover>
    </div>
  );
};

Combobox.displayName = 'Combobox';

export default Combobox;
