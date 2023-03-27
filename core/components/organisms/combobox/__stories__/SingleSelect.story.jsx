import * as React from 'react';
import { Combobox, Label, Listbox, ListboxItem, Text } from '@/index';

// CSF format story
export const singleSelect = () => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const [inputValue, setInputValue] = React.useState('');
  const [optionList, setOptionList] = React.useState(medicineList);

  React.useEffect(() => {
    const filterList = medicineList.filter((medicine) =>
      medicine.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setOptionList(filterList);
  }, [inputValue]);

  return (
    <div className="w-25">
      <Label>Medicine name</Label>
      <Combobox
        inputValue={inputValue}
        inputOptions={{ placeholder: 'Enter Name' }}
        onInputChange={setInputValue}
        multiSelect={false}
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
      </Combobox>
    </div>
  );
};

export default {
  title: 'Components/Combobox/Single Select',
  component: Combobox,
};
