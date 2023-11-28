import * as React from 'react';
import { Combobox, Listbox } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const [inputValue, setInputValue] = React.useState('custom input value');

  const renderListOptions = (inputValue, setInputValue) => {
    action('inputValue in renderListOptions-> ', inputValue)();
    const filterList = medicineList.filter((medicine) =>
      medicine.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
      <Listbox>
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

  const onChangeHandler = (event) => {
    const updatedValue = event?.target?.value;
    console.log('insiide updated value', updatedValue);
    setInputValue(updatedValue);
  };

  return (
    <Combobox
      renderListOptions={renderListOptions}
      inputOptions={{
        icon: 'places',
        value: inputValue,
        onChange: onChangeHandler,
      }}
    ></Combobox>
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

  const [inputValue, setInputValue] = React.useState('custom input value');

  const renderListOptions = (inputValue, setInputValue) => {
    action('inputValue in renderListOptions-> ', inputValue)();
    const filterList = medicineList.filter((medicine) =>
      medicine.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
      <Listbox>
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

  const onChangeHandler = (event) => {
    console.log('insiide updated value', updatedValue);
    const updatedValue = event?.target?.value;
    setInputValue(updatedValue);
  };

  return (
    <Combobox
      renderListOptions={renderListOptions}
      inputOptions={{
        icon: 'places',
        value: inputValue,
        onChange: {(e) => onChangeHandler(e) },
      }}
    ></Combobox>
  );
}`;

export default {
  title: 'Components/Combobox/All',
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
