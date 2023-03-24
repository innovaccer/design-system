import React, { useEffect } from 'react';
import { Popover } from '@/index';
import { BaseProps } from '@/utils/types';
import { PopoverProps, InputProps, ChipInputProps } from '@/index.type';
import { InputBox } from './InputBox';
// import { ChipInputBox } from './ChipInputBox';

export interface ComboboxProps extends BaseProps {
  multiSelect?: boolean;
  inputOptions?: InputProps;
  inputValue?: string;
  onInputChange?: () => void;
  chipInputOptions?: ChipInputProps;
  chipInputValue?: string[];
  children: React.ReactNode;
}

const ComboboxTrigger = (props: ComboboxProps) => {
  const {
    multiSelect,
    inputOptions,
    inputValue,
    onInputChange,
    // chipInputValue, chipInputOptions
  } = props;
  if (multiSelect) {
    // return <ChipInputBox value={chipInputValue} {...chipInputOptions} allowDuplicates={true} />;
  }
  return <InputBox {...inputOptions} value={inputValue} onChange={onInputChange} />;
};

export const Combobox = (props: ComboboxProps) => {
  const { children } = props;
  const [popoverStyle, setPopoverStyle] = React.useState<PopoverProps['customStyle']>();

  const triggerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const popperWidth = triggerRef.current?.clientWidth;

    const popperWrapperStyle = {
      width: popperWidth,
      maxWidth: '100%',
    };
    setPopoverStyle(popperWrapperStyle);
  }, []);

  return (
    <div ref={triggerRef} className="w-100 position-relative">
      <Popover
        triggerClass="w-100"
        customStyle={popoverStyle}
        className="Combobox-wrapper"
        trigger={<ComboboxTrigger {...props} />}
      >
        {children}
      </Popover>
    </div>
  );
};
