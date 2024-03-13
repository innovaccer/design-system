import * as React from 'react';
import { Combobox, Label } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const sizes = () => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const [filterList, setFilterList] = React.useState(medicineList);
  const sizes = ['tiny', 'regular', 'large'];

  const onChangeHandler = (inputValue) => {
    action(' inputValue', inputValue)();
    const updatedList = medicineList.filter((medicine) =>
      medicine.label.toLowerCase().startsWith(inputValue.label?.toLowerCase())
    );

    setFilterList(updatedList);
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      {sizes.map((size) => {
        return (
          <div key={size}>
            <Label withInput={true}>Drug Name</Label>
            <Combobox onChange={onChangeHandler} placeholder="Enter drug name" size={size}>
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
      })}
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

  const [filterList, setFilterList] = React.useState(medicineList);
  const sizes = ['tiny', 'regular', 'large'];

  const onChangeHandler = (inputValue) => {
    console.log(' inputValue', inputValue);
    const updatedList = medicineList.filter((medicine) =>
      medicine.label.toLowerCase().startsWith(inputValue.label.toLowerCase())
    );

    setFilterList(updatedList);
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      {sizes.map((size) => {
        return (
          <div key={size}>
            <Label withInput={true}>Drug Name</Label>
            <Combobox onChange={onChangeHandler} placeholder="Enter drug name" size={size}>
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
      })}
    </div>
  );
}`;

export default {
  title: 'Components/Combobox/Sizes',
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
