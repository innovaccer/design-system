import * as React from 'react';
import { Select, Row, Column, Label } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const size = () => {
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

  const list = [
    { label: 'Small', value: 'small' },
    { label: 'Regular', value: 'regular' },
  ];

  const onSelectHandler = (selectedOption) => {
    action.log('selectedOption', selectedOption);
  };

  return (
    <Row>
      {list.map((size, key) => {
        return (
          <Column key={key} size={4}>
            <Label withInput={true}>{size.label}</Label>
            <Select triggerOptions={{ triggerSize: size.value }} onSelect={onSelectHandler}>
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
          </Column>
        );
      })}
    </Row>
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

  const list = [
    { label: 'Small', value: 'small' },
    { label: 'Regular', value: 'regular' },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Row>
      {list.map((size, key) => {
        return (
          <Column key={key} size={4}>
            <Label withInput={true}>{size.label}</Label>
            <Select triggerOptions={{ triggerSize: size.value }} onSelect={onSelectHandler}>
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
          </Column>
        );
      })}
    </Row>
  );
}`;

export default {
  title: 'Components/Select/Size',
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
