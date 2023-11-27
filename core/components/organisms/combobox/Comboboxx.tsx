import * as React from 'react';
import { Popover, Input } from '@/index';
import { PopoverProps } from '@/index.type';
import ComboboxTrigger from './ComboboxTrigger';
// import { BaseProps } from '@/utils/types';
// import { InputBox } from './InputBox';
// import { ChipInputBox } from './ChipInputBox';

export const Combobox = (props: any) => {
  const { renderListOptions } = props;
  const [popoverStyle, setPopoverStyle] = React.useState<PopoverProps['customStyle']>();
  const [inputValue, setInputValue] = React.useState('');
  const [openPopover, setOpenPopover] = React.useState(false);

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

  React.useEffect(() => {
    console.log('inside useeffect');
    setOpenPopover(true);
  }, [inputValue]);

  return (
    <div ref={triggerRef} className="w-100 position-relative">
      <Popover
        on="click"
        triggerClass="w-100"
        customStyle={popoverStyle}
        className="Combobox-wrapper"
        open={openPopover}
        // trigger={<Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />}
        trigger={<ComboboxTrigger />}
      >
        {renderListOptions(inputValue, setInputValue)}
      </Popover>
    </div>
  );
};

export default Combobox;
