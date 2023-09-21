import * as React from 'react';
import { Combobox, Label } from '@/index';
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

  const [filterList, setFilterList] = React.useState([]);

  const onSearchHandler = (value) => {
    const newList = medicineList.filter((medicine) => medicine.label.toLowerCase().startsWith(value.toLowerCase()));
    setFilterList(newList);
    action('searchOption', value, newList)();
  };

  const onChangeHandler = (selectedOption) => {
    const newList = medicineList.filter((medicine) => !isElementPresent(selectedOption, medicine.label));
    setFilterList(newList);
    action('input value', selectedOption)();
  };

  const isElementPresent = (list, value) => {
    let result = false;
    list &&
      list.forEach((listItem) => {
        if (listItem.label === value) {
          result = true;
        }
      });
    return result;
  };

  return (
    <div>
      <Label withInput={true}>Drug Name</Label>
      <Combobox onSearch={onSearchHandler} onChange={onChangeHandler} multiSelect={true} clearButton={true}>
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        )}
      </Combobox>
    </div>
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

  const [filterList, setFilterList] = React.useState([]);

  const onSearchHandler = (value) => {
    const newList = medicineList.filter((medicine) => medicine.label.toLowerCase().startsWith(value.toLowerCase()));
    setFilterList(newList);
    console.log('searchOption', value, newList);
  };

  const onChangeHandler = (selectedOption) => {
    const newList = medicineList.filter((medicine) => !isElementPresent(selectedOption, medicine.label));
    setFilterList(newList);
    console.log('input value', selectedOption);
  };

  const isElementPresent = (list, value) => {
    let result = false;
    list &&
      list.forEach((listItem) => {
        if (listItem.label === value) {
          result = true;
        }
      });
    return result;
  };

  return (
    <div>
      <Label withInput={true}>Drug Name</Label>
      <Combobox onSearch={onSearchHandler} onChange={onChangeHandler} multiSelect={true} clearButton={true}>
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        )}
      </Combobox>
    </div>
  );
}`;

export default {
  title: 'Components/Combobox/MultiSelect/All',
  component: Combobox,
  subcomponents: { 'Combobox.List': Combobox.List, 'Combobox.Option': Combobox.Option },
  parameters: {
    docs: {
      docPage: {
        title: 'Combobox',
        customCode,
      },
    },
  },
};
