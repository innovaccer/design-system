import React, { useEffect } from 'react';
import { Popover, Input } from '@/index';
import { PopoverProps } from '@/index.type';
// import { BaseProps } from '@/utils/types';
// import { InputBox } from './InputBox';
// import { ChipInputBox } from './ChipInputBox';

export const Combobox = (props: any) => {
  const { renderListOptions } = props;
  const [popoverStyle, setPopoverStyle] = React.useState<PopoverProps['customStyle']>();
  const [inputValue, setInputValue] = React.useState('');

  const triggerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const popperWidth = triggerRef.current?.clientWidth;
    console.log('popperWidth', popperWidth);

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
        trigger={<Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />}
      >
        {renderListOptions(inputValue, setInputValue)}
      </Popover>
    </div>
  );
};

export default Combobox;
