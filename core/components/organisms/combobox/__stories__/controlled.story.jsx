import * as React from 'react';
import { Combobox, Label } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const preFilledValues = () => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const [filterList, setFilterList] = React.useState([]);
  const [selectedOption, setSelectedOption] = React.useState({ label: 'Acetaminophen', value: 'Acetaminophen' });

  const onChangeHandler = (item) => {
    const newList = medicineList.filter((medicine) =>
      medicine.label?.toLowerCase().startsWith(item.label?.toLowerCase())
    );
    setFilterList(newList);
    setSelectedOption(item);
    action('item', item)();
  };

  return (
    <div>
      <Label withInput={true}>Drug Name</Label>
      <Combobox icon="search" value={selectedOption} onChange={onChangeHandler}>
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              const option = { label: item.label, value: item.value };
              return (
                <Combobox.Option key={key} option={option}>
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
  const [selectedOption, setSelectedOption] = React.useState({ label: 'Acetaminophen', value: 'Acetaminophen' });

  const onChangeHandler = (item) => {
    const newList = medicineList.filter((medicine) =>
      medicine.label.toLowerCase().startsWith(item.label.toLowerCase())
    );
    setFilterList(newList);
    setSelectedOption(item);
    console.log('item', item);
  };

  return (
    <div>
      <Label withInput={true}>Drug Name</Label>
      <Combobox icon="search" value={selectedOption} onChange={onChangeHandler}>
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              const option = { label: item.label, value: item.value };
              return (
                <Combobox.Option key={key} option={option}>
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
  title: 'Components/Combobox/Pre Filled Values',
  component: Combobox,
  subcomponents: { 'Combobox.List': Combobox.List, 'Combobox.Option': Combobox.Option },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Combobox',
      },
    },
  },
};
