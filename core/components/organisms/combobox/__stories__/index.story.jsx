import * as React from 'react';
import { Combobox, Label, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  // const inputSizes = ['tiny', 'regular', 'large'];
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  // const [inputValue, setInputValue] = React.useState('');
  const [optionList, setOptionList] = React.useState(medicineList);

  // React.useEffect(() => {
  //   const filterList = medicineList.filter((medicine) =>
  //     medicine.label.toLowerCase().includes(inputValue.toLowerCase())
  //   );
  //   setOptionList(filterList);
  // }, [inputValue]);

  const renderListOptions = (inputValue, setInputValue) => {
    action('inputValue in renderListOptions-> ', inputValue)();
    const filterList = medicineList.filter((medicine) =>
      medicine.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
      <ul className="m-0 p-5 Combobox-list">
        {filterList.map((options, key) => {
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
    );
  };

  return (
    <div>
      <Combobox renderListOptions={renderListOptions}></Combobox>
    </div>
  );
};

export default {
  title: 'Components/Combobox/All',
  component: Combobox,
};
