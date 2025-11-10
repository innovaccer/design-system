import * as React from 'react';
import { Select } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const preFilledValue = () => {
  const medicineList = [
    { optionID: 'aspirin', label: 'Aspirin', value: 'Aspirin' },
    { optionID: 'paracetamol', label: 'Paracetamol', value: 'Paracetamol' },
    { optionID: 'lisinopril', label: 'Lisinopril', value: 'Lisinopril' },
    { optionID: 'simvastatin', label: 'Simvastatin', value: 'Simvastatin' },
    { optionID: 'amoxicillin', label: 'Amoxicillin', value: 'Amoxicillin' },
    { optionID: 'ciprofloxacin', label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { optionID: 'metformin', label: 'Metformin', value: 'Metformin' },
    { optionID: 'omeprazole', label: 'Omeprazole', value: 'Omeprazole' },
    { optionID: 'diazepam', label: 'Diazepam', value: 'Diazepam' },
    { optionID: 'levothyroxine', label: 'Levothyroxine', value: 'Levothyroxine' },
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
        { optionID: 'aspirin', label: 'Aspirin', value: 'Aspirin' },
        { optionID: 'paracetamol', label: 'Paracetamol', value: 'Paracetamol' },
      ]}
      onSelect={onSelectHandler}
      multiSelect={true}
    >
      <Select.List>
        {medicineList.map((item) => {
          return (
            <Select.Option
              key={item.optionID}
              option={{ label: item.label, value: item.value, optionID: item.optionID }}
            >
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
    { optionID: 'aspirin', label: 'Aspirin', value: 'Aspirin' },
    { optionID: 'paracetamol', label: 'Paracetamol', value: 'Paracetamol' },
    { optionID: 'lisinopril', label: 'Lisinopril', value: 'Lisinopril' },
    { optionID: 'simvastatin', label: 'Simvastatin', value: 'Simvastatin' },
    { optionID: 'amoxicillin', label: 'Amoxicillin', value: 'Amoxicillin' },
    { optionID: 'ciprofloxacin', label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { optionID: 'metformin', label: 'Metformin', value: 'Metformin' },
    { optionID: 'omeprazole', label: 'Omeprazole', value: 'Omeprazole' },
    { optionID: 'diazepam', label: 'Diazepam', value: 'Diazepam' },
    { optionID: 'levothyroxine', label: 'Levothyroxine', value: 'Levothyroxine' },
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
      { optionID: 'aspirin', label: 'Aspirin', value: 'Aspirin' },
      { optionID: 'paracetamol', label: 'Paracetamol', value: 'Paracetamol' }
    ]}
    onSelect={onSelectHandler}
    multiSelect={true}
  >
        <Select.List>
          {medicineList.map((item) => {
            return (
              <Select.Option key={item.optionID} option={{ label: item.label, value: item.value, optionID: item.optionID }}>
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
