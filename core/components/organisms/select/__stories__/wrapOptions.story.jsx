import * as React from 'react';
import { Select, Text } from '@/index';
import { action } from '@/utils/action';
import './style.css';

// CSF format story
export const wrapBehavior = () => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril Anasthesia', value: 'Lisinopril Anasthesia' },
    { label: 'Simvastatin Anasthesia', value: 'Simvastatin Anasthesia' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption)();
  };

  return (
    <Select onSelect={onSelectHandler} triggerOptions={{ 'aria-label': 'Medication selector' }}>
      <Select.List aria-label="Medication options list">
        {medicineList.map((item, key) => {
          return (
            <Select.Option
              option={{ label: item.label, value: item.value }}
              aria-label={item.label + ' option'}
              key={key}
            >
              <Text
                className="d-block w-100 Select-Option-label"
                style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
              >
                {item.label}
              </Text>
            </Select.Option>
          );
        })}
      </Select.List>
    </Select>
  );
};

const customCode = `() => {

  /*
    .Select-Option-label {
      max-width: var(--spacing-320);
    }
  */
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril Anasthesia', value: 'Lisinopril' },
    { label: 'Simvastatin Anasthesia', value: 'Simvastatin' },
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

  return (
    <Select onSelect={onSelectHandler} triggerOptions={{ 'aria-label': 'Medication selector' }}>
      <Select.List aria-label="Medication options list">
        {medicineList.map((item, key) => {
          return (
            <Select.Option
              option={{ label: item.label, value: item.value }}
              aria-label={item.label + ' option'}
              key={key}
            >
              <Text
                className="d-block w-100 Select-Option-label"
                style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
              >
                {item.label}
              </Text>
            </Select.Option>
          );
        })}
      </Select.List>
    </Select>
  );
}`;

export default {
  title: 'Components/Select/Wrap Behavior',
  id: 'components-select-overflow-behavior-wrap',
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
