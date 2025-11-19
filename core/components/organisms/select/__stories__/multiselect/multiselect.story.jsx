import * as React from 'react';
import { Select } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const multiSelect = () => {
  const medicineList = [
    { id: 'aspirin', label: 'Aspirin', value: 'Aspirin' },
    { id: 'paracetamol', label: 'Paracetamol', value: 'Paracetamol' },
    { id: 'lisinopril', label: 'Lisinopril', value: 'Lisinopril' },
    { id: 'simvastatin', label: 'Simvastatin', value: 'Simvastatin' },
    { id: 'amoxicillin', label: 'Amoxicillin', value: 'Amoxicillin' },
    { id: 'ciprofloxacin', label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { id: 'metformin', label: 'Metformin', value: 'Metformin' },
    { id: 'omeprazole', label: 'Omeprazole', value: 'Omeprazole' },
    { id: 'diazepam', label: 'Diazepam', value: 'Diazepam' },
    { id: 'levothyroxine', label: 'Levothyroxine', value: 'Levothyroxine' },
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
    <Select triggerOptions={{ setLabel: setLableHandler }} onSelect={onSelectHandler} multiSelect={true}>
      <Select.List>
        {medicineList.map((item) => {
          return (
            <Select.Option key={item.id} option={{ label: item.label, value: item.value, id: item.id }}>
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
    { id: 'aspirin', label: 'Aspirin', value: 'Aspirin' },
    { id: 'paracetamol', label: 'Paracetamol', value: 'Paracetamol' },
    { id: 'lisinopril', label: 'Lisinopril', value: 'Lisinopril' },
    { id: 'simvastatin', label: 'Simvastatin', value: 'Simvastatin' },
    { id: 'amoxicillin', label: 'Amoxicillin', value: 'Amoxicillin' },
    { id: 'ciprofloxacin', label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { id: 'metformin', label: 'Metformin', value: 'Metformin' },
    { id: 'omeprazole', label: 'Omeprazole', value: 'Omeprazole' },
    { id: 'diazepam', label: 'Diazepam', value: 'Diazepam' },
    { id: 'levothyroxine', label: 'Levothyroxine', value: 'Levothyroxine' },
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
    <Select triggerOptions={{ setLabel: setLableHandler }} onSelect={onSelectHandler} multiSelect={true} >
        <Select.List>
        {medicineList.map((item) => {
          return (
            <Select.Option key={item.id} option={{ label: item.label, value: item.value, id: item.id }}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select.List>
    </Select>
  );
}`;

export default {
  title: 'Components/Select/Multiselect/MultiSelect',
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
