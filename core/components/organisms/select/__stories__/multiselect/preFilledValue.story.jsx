import * as React from 'react';
import { Select } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const preFilledValue = () => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption);
  };

  const setLableHandler = (count) => {
    if (count > 2) {
      return `${count} Medicines`;
    }
  };

  return (
    <Select
      triggerOptions={{ setLabel: setLableHandler }}
      value={[
        { label: 'Aspirin', value: 'Aspirin' },
        { label: 'Paracetamol', value: 'Paracetamol' },
      ]}
      onSelect={onSelectHandler}
      multiSelect={true}
    >
      <Select.List>
        {medicineList.map((item, key) => {
          return (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select.List>
    </Select>
  );
};

const customCode = `() => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];
  

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  const setLableHandler = (count) => {
    if (count > 2) {
      return \`\${count} Medicines\`;
    }
  }

  return (    
  <Select
    triggerOptions={{ setLabel: setLableHandler }}
    value={[
      { label: 'Aspirin', value: 'Aspirin' },
      { label: 'Paracetamol', value: 'Paracetamol' }
    ]}
    onSelect={onSelectHandler}
    multiSelect={true}
  >
        <Select.List>
          {medicineList.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select.List>
    </Select>
  );
}`;

export default {
  title: 'Components/Select/Multiselect/PreFilledValue',
  component: Select,
  subcomponents: {
    'Select.List': Select.List,
    'Select.Option': Select.Option,
    'Select.SearchInput': Select.SearchInput,
    'Select.EmptyTemplate': Select.EmptyTemplate,
    'Select.Footer': Select.Footer,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'Select',
        customCode,
      },
    },
  },
};
