import * as React from 'react';
import { Input, Popover, Combobox, Listbox, ListboxItem, Text } from '@/index';

export const ComboboxTrigger = ({ inputValue, onChange }) => {
  return <Input placeholder="Select Medicine Name" value={inputValue} onChange={(e) => onChange(e.target.value)} />;
};

export const select = () => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const triggerRef = React.createRef();
  const [popoverStyle, setPopoverStyle] = React.useState();
  const [inputValue, setInputValue] = React.useState('');
  const [optionList, setOptionList] = React.useState(medicineList);

  React.useEffect(() => {
    const filterList = medicineList.filter((medicine) =>
      medicine.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setOptionList(filterList);
  }, [inputValue]);

  React.useEffect(() => {
    const popperWidth = triggerRef.current?.clientWidth;

    const popperWrapperStyle = {
      width: popperWidth,
      maxWidth: '100%',
    };
    setPopoverStyle(popperWrapperStyle);
  }, []);

  return (
    <div className="w-25">
      <div ref={triggerRef} className="w-100 position-relative">
        <Popover
          on="click"
          triggerClass="w-100"
          customStyle={popoverStyle}
          className="Combobox-wrapper"
          trigger={<ComboboxTrigger inputValue={inputValue} onChange={setInputValue} />}
        >
          {optionList.length > 0 ? (
            <Listbox showDivider={false} size="compressed" className="Combobox-list">
              {optionList.map((options, key) => {
                return (
                  <ListboxItem key={key} id={key} onClick={() => setInputValue(options.label)}>
                    {options.label}
                  </ListboxItem>
                );
              })}
            </Listbox>
          ) : (
            <Text>No Result Found</Text>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Combobox/Select',
  component: Combobox,
};
