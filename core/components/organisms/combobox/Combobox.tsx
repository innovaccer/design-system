import * as React from 'react';
import { Popover } from '@/index';
import { BaseProps } from '@/utils/types';
import { PopoverProps, InputProps, ChipInputProps } from '@/index.type';
import { InputBox } from './InputBox';
import { ChipInputBox } from './ChipInputBox';

export interface ComboboxProps extends BaseProps {
  multiSelect?: boolean;
  renderListOptions: any;
  inputOptions?: InputProps;
  chipInputOptions: ChipInputProps;
  // chipInputValue?: string[];
  // inputValue?: string;
  // onInputChange?: React.Dispatch<React.SetStateAction<string>>;
  // onInputChange?: any;
  // children: React.ReactNode;
}

interface ComboboxTriggerProps {
  inputValue?: string;
  onInputChange?: any;
  chipInputValue?: string[];
}

const ComboboxTrigger = (props: ComboboxTriggerProps & ComboboxProps) => {
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
  // const [showPopover, setShowPopover] = React.useState(false);
  const [open, setOpen] = React.useState(false);

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

  // React.useEffect(() => {
  //   console.log('inputValue inside useEffect', inputValue);
  //   if (inputValue === '') {
  //     setOpen(true);
  //   } else {
  //     setOpen(false);
  //   }
  // }, [inputValue]);

  // React.useEffect(() => {
  //   setShowPopover(true);
  // }, [inputValue]);

  return (
    <div ref={triggerRef} className="w-100 position-relative">
      <Popover
        on="click"
        // open={open}
        // open={showPopover}
        triggerClass="w-100"
        customStyle={popoverStyle}
        className="Combobox-wrapper"
        trigger={
          <ComboboxTrigger
            inputValue={inputValue}
            onInputChange={props?.inputOptions?.onChange || setInputValue}
            //  onInputChange={(e: any) => inputChangeHandler(e)}
            {...props}
          />
        }
      >
        {renderListOptions(inputValue, setInputValue)}
      </Popover>
    </div>
  );
};

export default Combobox;
