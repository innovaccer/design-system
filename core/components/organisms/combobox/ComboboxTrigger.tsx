import * as React from 'react';
import { ChipInput, Input } from '@/index';

export const ComboboxTrigger = (props: any) => {
  const {multiSelect} = props;
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    console.log('inside useeffect');
    // setOpenPopover(true);
  }, [inputValue]);

  if(multiSelect) {
    return <ChipInput />
  }

  return <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />;

}

export default ComboboxTrigger;
