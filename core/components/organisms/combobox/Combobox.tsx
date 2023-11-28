import * as React from 'react';
import { Popover } from '@/index';
import { BaseProps } from '@/utils/types';
import { PopoverProps, InputProps, ChipInputProps } from '@/index.type';
import { InputBox } from './InputBox';
import { ChipInputBox } from './ChipInputBox';

export interface ComboboxProps extends BaseProps {
  multiSelect?: boolean;
  inputOptions?: InputProps;
  inputValue?: string;
  // onInputChange?: React.Dispatch<React.SetStateAction<string>>;
  onInputChange?: any;
  chipInputOptions: ChipInputProps;
  chipInputValue?: string[];
  // children: React.ReactNode;
  renderListOptions: any;
}

const ComboboxTrigger = (props: ComboboxProps) => {
  const {
    multiSelect,
    inputOptions,
    inputValue,
    onInputChange,
    chipInputValue,
    chipInputOptions,
    // renderListOptions
  } = props;
  if (multiSelect) {
    return <ChipInputBox value={chipInputValue} {...chipInputOptions} allowDuplicates={true} />;
  }
  return <InputBox value={inputValue} {...inputOptions} onChange={onInputChange} />;
};

export const Combobox = (props: ComboboxProps) => {
  const { renderListOptions } = props;
  const [popoverStyle, setPopoverStyle] = React.useState<PopoverProps['customStyle']>();
  const [inputValue, setInputValue] = React.useState('');

  const triggerRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    const popperWidth = triggerRef.current?.clientWidth;
    console.log('popperWidth', popperWidth);

    const popperWrapperStyle = {
      width: popperWidth,
      maxWidth: '100%',
    };
    setPopoverStyle(popperWrapperStyle);
  }, []);

  const inputChangeHandler = (e: any) => {
    const onChangeFn = props?.inputOptions?.onChange;
    if (onChangeFn) {
      return onChangeFn(e);
    }
    return setInputValue;
  };

  return (
    <div ref={triggerRef} className="w-100 position-relative">
      <Popover
        // on="click"
        triggerClass="w-100"
        customStyle={popoverStyle}
        className="Combobox-wrapper"
        trigger={
          <ComboboxTrigger inputValue={inputValue} onInputChange={(e: any) => inputChangeHandler(e)} {...props} />
        }
      >
        {renderListOptions(inputValue, setInputValue)}
      </Popover>
    </div>
  );
};

export default Combobox;
