import React, { useEffect } from 'react';
import { Popover, Input } from '@/index';
import { InputProps, PopoverProps } from '@/index.type';

const InputBox = (props: InputProps) => {
  const { value, onChange } = props;

  return <Input value={value} onChange={onChange} {...props} />;
};

export const Combobox = (props: any) => {
  const { renderItem } = props;
  const [popoverStyle, setPopoverStyle] = React.useState<PopoverProps['customStyle']>();
  const triggerRef = React.createRef<HTMLDivElement>();
  const [inputValue, setInputValue] = React.useState('hello');

  const inputOptionChange = (e: any) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const popperWidth = triggerRef.current?.clientWidth;

    const popperWrapperStyle = {
      width: popperWidth,
      maxWidth: '100%',
    };
    setPopoverStyle(popperWrapperStyle);
  }, []);

  const onClickHandler = (value: any) => {
    setInputValue(value);
  };

  return (
    <div ref={triggerRef} className="w-100 position-relative">
      <Popover
        triggerClass="w-100"
        customStyle={popoverStyle}
        className="Combobox-wrapper"
        on="click"
        trigger={<InputBox value={inputValue} onChange={inputOptionChange} />}
      >
        {renderItem(inputValue, onClickHandler)}
      </Popover>
    </div>
  );
};
