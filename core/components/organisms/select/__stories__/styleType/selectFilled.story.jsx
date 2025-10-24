import * as React from 'react';
import { Select, Row, Column, Label } from '@/index';
import { action } from '@/utils/action';

// CSF format story - Filled variant
export const filled = () => {
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

  const sizeConfigs = [
    {
      label: 'Small',
      triggerSize: 'small',
      listSize: 'tight',
    },
    {
      label: 'Regular',
      triggerSize: 'regular',
      listSize: 'compressed',
    },
  ];

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption);
  };

  return (
    <Row>
      {sizeConfigs.map((config, key) => {
        return (
          <Column key={key} size={4}>
            <Label className="mb-3">{config.label} Filled Select</Label>
            <Select styleType="filled" triggerOptions={{ triggerSize: config.triggerSize }} onSelect={onSelectHandler}>
              <Select.List size={config.listSize}>
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

  const sizeConfigs = [
    {
      label: 'Small',
      triggerSize: 'small',
      listSize: 'tight',
    },
    {
      label: 'Regular',
      triggerSize: 'regular',
      listSize: 'compressed',
    },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Row>
      {sizeConfigs.map((config, key) => {
        return (
          <Column key={key} size={4}>
            <Label className="mb-3">{config.label} Filled Select</Label>
            <Select
              styleType="filled"
              triggerOptions={{ triggerSize: config.triggerSize }}
              onSelect={onSelectHandler}
            >
              <Select.List size={config.listSize}>
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
        );
      })}
    </Row>
  );
}`;

export default {
  title: 'Components/Select/StyleType/Filled',
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
        title: 'Select (styleType: Filled)',
        customCode,
      },
    },
  },
};
