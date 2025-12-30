import * as React from 'react';
import { Select, Row, Column, Label } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const width = () => {
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

  return (
    <Row className="mb-6">
      <Column size={6} className="mb-6">
        <Label className="mb-3">Fixed Width</Label>
        <Select width={200} onSelect={onSelectHandler}>
          <Select.List>
            {medicineList.map((item, itemKey) => {
              return (
                <Select.Option key={itemKey} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Select.Option>
              );
            })}
          </Select.List>
        </Select>
      </Column>
      <Column size={6} className="mb-6">
        <Label className="mb-3">Auto Width</Label>
        <Select
          width="auto"
          triggerOptions={{
            minWidth: '176px',
            maxWidth: '256px',
          }}
          onSelect={onSelectHandler}
        >
          <Select.List>
            {medicineList.map((item, itemKey) => {
              return (
                <Select.Option key={itemKey} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Select.Option>
              );
            })}
          </Select.List>
        </Select>
      </Column>
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

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Row className="mb-6">
      <Column size={6} className="mb-6">
        <Label className="mb-3">Fixed Width</Label>
        <Select width={200} onSelect={onSelectHandler}>
          <Select.List>
            {medicineList.map((item, itemKey) => {
              return (
                <Select.Option key={itemKey} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Select.Option>
              );
            })}
          </Select.List>
        </Select>
      </Column>
      <Column size={6} className="mb-6">
        <Label className="mb-3">Auto Width</Label>
        <Select
          width="auto"
          triggerOptions={{
            minWidth: '176px',
            maxWidth: '256px',
          }}
          onSelect={onSelectHandler}
        >
          <Select.List>
            {medicineList.map((item, itemKey) => {
              return (
                <Select.Option key={itemKey} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Select.Option>
              );
            })}
          </Select.List>
        </Select>
      </Column>
    </Row>
  );
}`;

export default {
  title: 'Components/Select/Width',
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
