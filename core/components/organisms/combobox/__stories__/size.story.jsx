import * as React from 'react';
import { Combobox } from '@/index';
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

  const sizes = ['tiny', 'regular', 'large'];

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption)();
  };

  const onChangeHandler = (value) => {
    action('input value', value)();
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      {sizes.map((size) => {
        return (
          <Combobox
            inputOptions={{
              size,
            }}
            key={size}
            onSelect={onSelectHandler}
            onInputChange={onChangeHandler}
          >
            {(contextProp) => {
              const filterList = medicineList.filter((medicine) =>
                medicine.label.toLowerCase().includes(contextProp?.inputValue?.toLowerCase())
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

  const sizes = ['tiny', 'regular', 'large'];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  const onChangeHandler = (value) => {
    console.log('input value', value);
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      {sizes.map((size) => {
        return (
          <Combobox
            inputOptions={{
              size,
            }}
            key={size}
            onSelect={onSelectHandler}
            onInputChange={onChangeHandler}
          >
            {(contextProp) => {
              const filterList = medicineList.filter((medicine) =>
                medicine.label.toLowerCase().includes(contextProp?.inputValue?.toLowerCase())
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
      })}
    </div>
  );
}`;

export default {
  title: 'Components/Combobox/Sizes',
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
