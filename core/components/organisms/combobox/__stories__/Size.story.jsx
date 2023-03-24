import * as React from 'react';
import { Combobox, Label, Text } from '@/index';

// CSF format story
export const size = () => {
  const inputSizes = ['tiny', 'regular', 'large'];
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
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
    <div className="d-flex justify-content-between">
      {inputSizes.map((size, key) => {
        return (
          <div className="w-25" key={key}>
            <Label>Medicine name</Label>
            <Combobox
              inputValue={inputValue}
              inputOptions={{ placeholder: 'Enter Name', size: size }}
              onInputChange={setInputValue}
              multiSelect={false}
            >
              <ul className="m-0 p-5 Combobox-list">
                {optionList.map((options, key) => {
                  return (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    <li
                      key={key}
                      inputValue={inputValue}
                      className="py-4 cursor-pointer"
                      onClick={() => setInputValue(options.label)}
                      onKeyDown={() => setInputValue(options.label)}
                    >
                      {options.label}
                    </li>
                  );
                })}
              </ul>
            </Combobox>
            <br />
            <Text weight="strong">{size}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Combobox/Size',
  component: Combobox,
};
