import * as React from 'react';
import { Combobox } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const controlled = () => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const [selectedOption, setSelectedOption] = React.useState({ label: 'my custom value', value: '1' });

  const onInputChangeHandler = (e) => {
    setSelectedOption({ label: e.target.value, value: '1' });
    action('trigger custom input change handler', e.target.value)();
  };

  const onClickHandler = (option) => {
    setSelectedOption(option);
  };

  return (
    <Combobox
      inputOptions={{
        icon: 'places',
        value: selectedOption.label,
        onChange: onInputChangeHandler,
      }}
    >
      {(contextProp) => {
        const filterList = medicineList.filter((medicine) =>
          medicine.label.toLowerCase().includes(selectedOption.label.toLowerCase())
        );

        return (
          <Combobox.List>
            {filterList.map((item, key) => {
              const option = { label: item.label, value: item.value };
              return (
                <Combobox.Option key={key} option={option} onClick={(option) => onClickHandler(option, contextProp)}>
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

  const [selectedOption, setSelectedOption] = React.useState({ label: 'Acetaminophen', value: 'Acetaminophen' });

  const onInputChangeHandler = (e) => {
    setSelectedOption({ label: e.target.value, value: 'e.target.value' });
    action('trigger custom input change handler', e.target.value)();
  };

  const onClickHandler = (option) => {
    setSelectedOption(option);
  };

  return (
    <Combobox
      inputOptions={{
        icon: 'places',
        value: selectedOption.label,
        onChange: onInputChangeHandler,
      }}
    >
      {(contextProp) => {
        const filterList = medicineList.filter((medicine) =>
          medicine.label.toLowerCase().includes(selectedOption.label.toLowerCase())
        );

        return (
          <Combobox.List>
            {filterList.map((item, key) => {
              const option = { label: item.label, value: item.value };
              return (
                <Combobox.Option key={key} option={option} onClick={(option) => onClickHandler(option, contextProp)}>
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
  title: 'Components/Combobox/Single Select/Controlled',
  component: Combobox,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Combobox',
      },
    },
  },
};
