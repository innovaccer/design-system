import * as React from 'react';
import { Combobox } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const multiselect = () => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption)();
  };

  const onChangeHandler = (value) => {
    action('input value', value)();
  };

  const isElementPresent = (list, value) => {
    let result = false;
    list.forEach((listItem) => {
      if (listItem?.label === value) {
        result = true;
      }
    });
    return result;
  };

  return (
    <Combobox
      chipInputOptions={{
        chipOptions: {
          clearButton: true,
        },
      }}
      onSelect={onSelectHandler}
      onInputChange={onChangeHandler}
      multiSelect={true}
    >
      {(contextProp) => {
        const filterList = medicineList.filter(
          (medicine) =>
            medicine.label.toLowerCase().includes(contextProp.inputText.toLowerCase()) &&
            !isElementPresent(contextProp.chipInputValue, medicine.label)
        );

        return (
          <Combobox.List>
            {filterList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        );
      }}
    </Combobox>
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

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  const onChangeHandler = (value) => {
    console.log('input value', value);
  };

  const isElementPresent = (list, value) => {
    let result = false;
    list.forEach((listItem) => {
      if (listItem.label === value) {
        result = true;
      }
    });
    return result;
  };

  return (
    <Combobox
      chipInputOptions={{
        chipOptions: {
          clearButton: true,
        },
      }}
      onSelect={onSelectHandler}
      onInputChange={onChangeHandler}
      multiSelect={true}
    >
      {(contextProp) => {
        const filterList = medicineList.filter(
          (medicine) =>
            medicine.label.toLowerCase().includes(contextProp.inputText.toLowerCase()) &&
            !isElementPresent(contextProp.chipInputValue, medicine.label)
        );

        return (
          <Combobox.List>
            {filterList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        );
      }}
    </Combobox>
  );
}`;

export default {
  title: 'Components/Combobox/Multiselect',
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
