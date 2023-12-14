import * as React from 'react';

export function useSingleSelect() {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [openPopover, setOpenPopover] = React.useState(false);
  const [isOptionSelected, setIsOptionSelected] = React.useState(false);

  React.useEffect(() => {
    console.log('dddinputValue inside useEffect', inputValue);
    // if (inputValue === '') {
    //   setOpenPopover(true);
    // } else if (isOptionSelected) {
    //   console.log('inside this');
    //   setOpenPopover(false);
    //   setIsOptionSelected(false);
    // }

    if (isOptionSelected) {
      setOpenPopover(false);
      setIsOptionSelected(false);
    } else {
      setOpenPopover(true);
    }
  }, [inputValue]);

  return {
    inputValue,
    setInputValue,
    openPopover,
    setOpenPopover,
    isOptionSelected,
    setIsOptionSelected,
  };
}
