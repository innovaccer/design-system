import * as React from 'react';
import { Combobox, Listbox } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const uncontrolled = () => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const renderListOptions = (inputValue, setInputValue, setIsOptionSelected) => {
    const filterList = medicineList.filter((medicine) =>
      medicine.label.toLowerCase().includes(inputValue?.toLowerCase())
    );

    action('inputValue in renderListOptions-> ', inputValue, 'filterList', filterList)();

    const onClickHandler = (item) => {
      setInputValue(item.label);
      setIsOptionSelected(true);
    };

    return (
      <Listbox showDivider={false} type="option">
        {filterList.map((item, key) => {
          return (
            <Listbox.Item
              key={key}
              inputValue={inputValue}
              onKeyDown={() => setInputValue(item.label)}
              onClick={() => onClickHandler(item)}
            >
              {item.label}
            </Listbox.Item>
          );
        })}
      </Listbox>
    );
  };

  return (
    <Combobox
      renderListOptions={renderListOptions}
      inputOptions={{
        icon: 'places',
      }}
    />
  );
};

const customCode = `() => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const renderListOptions = (inputValue, setInputValue) => {
    const filterList = medicineList.filter((medicine) =>
      medicine.label.toLowerCase().includes(inputValue?.toLowerCase())
    );

    return (
      <Listbox showDivider={false} type="option">
        {filterList.map((item, key) => {
          return (
            <Listbox.Item
              key={key}
              inputValue={inputValue}
              onKeyDown={() => setInputValue(item.label)}
              onClick={() => setInputValue(item.label)}
            >
              {item.label}
            </Listbox.Item>
          );
        })}
      </Listbox>
    );
  };

  return (
    <Combobox
      renderListOptions={renderListOptions}
      inputOptions={{
        icon: 'places',
      }}
    />
  );
}`;

export default {
  title: 'Components/Combobox/Uncontrolled',
  component: Combobox,
  parameters: {
    docs: {
      docPage: {
        title: 'Combobox',
        customCode,
      },
    },
  },
};
