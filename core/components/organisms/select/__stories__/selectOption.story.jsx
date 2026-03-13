import * as React from 'react';
import { Select } from '@/index';
import { action } from '@/utils/action';

export const all = () => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
  ];

  return (
    <Select onSelect={(option) => action('selected', option)()}>
      <Select.List>
        {medicineList.map((item, key) => (
          <Select.Option key={key} option={item} aria-label={item.label}>
            {item.label}
          </Select.Option>
        ))}
      </Select.List>
    </Select>
  );
};

const customCode = `() => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
  ];

  return (
    <Select onSelect={(option) => console.log('selected', option)}>
      <Select.List>
        {medicineList.map((item, key) => (
          <Select.Option key={key} option={item} aria-label={item.label}>
            {item.label}
          </Select.Option>
        ))}
      </Select.List>
    </Select>
  );
}`;

export default {
  title: 'Components/Select/Select.Option',
  component: Select.Option,
  parameters: {
    docs: {
      docPage: {
        title: 'Select.Option',
        customCode,
        a11yPropsTable: ['aria-label'],
      },
    },
  },
};
