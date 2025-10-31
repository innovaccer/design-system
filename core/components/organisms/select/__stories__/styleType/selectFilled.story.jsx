import * as React from 'react';
import { Select, Row, Column, Label, Card } from '@/index';
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

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption);
  };

  return (
    <div className="bg-secondary-lightest p-6">
      <Card shadow="light" className="p-6">
        <Row>
          <Column size={3}>
            <div className="bg-light p-6 d-flex flex-column">
              <Label className="mb-3">Fill</Label>
              <Select styleType="filled" triggerOptions={{ triggerSize: 'regular' }} onSelect={onSelectHandler}>
                <Select.List size="compressed">
                  {medicineList.map((item, itemKey) => {
                    return (
                      <Select.Option key={itemKey} option={{ label: item.label, value: item.value }}>
                        {item.label}
                      </Select.Option>
                    );
                  })}
                </Select.List>
              </Select>
            </div>
          </Column>
          <Column size={3}>
            <div className="bg-secondary-lightest p-6 d-flex flex-column">
              <Label className="mb-3">Fill</Label>
              <Select styleType="filled" triggerOptions={{ triggerSize: 'regular' }} onSelect={onSelectHandler}>
                <Select.List size="compressed">
                  {medicineList.map((item, itemKey) => {
                    return (
                      <Select.Option key={itemKey} option={{ label: item.label, value: item.value }}>
                        {item.label}
                      </Select.Option>
                    );
                  })}
                </Select.List>
              </Select>
            </div>
          </Column>
        </Row>
      </Card>
    </div>
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
    <div className="bg-secondary-lightest p-6">
      <Card shadow="light" className="p-6">
        <Row>
          <Column size={3}>
            <div className="bg-light p-6 d-flex flex-column">
              <Label className="mb-3">Fill</Label>
              <Select styleType="filled" triggerOptions={{ triggerSize: 'regular' }} onSelect={onSelectHandler}>
                <Select.List size="compressed">
                  {medicineList.map((item, itemKey) => {
                    return (
                      <Select.Option key={itemKey} option={{ label: item.label, value: item.value }}>
                        {item.label}
                      </Select.Option>
                    );
                  })}
                </Select.List>
              </Select>
            </div>
          </Column>
          <Column size={3}>
            <div className="bg-secondary-lightest p-6 d-flex flex-column">
              <Label className="mb-3">Fill</Label>
              <Select styleType="filled" triggerOptions={{ triggerSize: 'regular' }} onSelect={onSelectHandler}>
                <Select.List size="compressed">
                  {medicineList.map((item, itemKey) => {
                    return (
                      <Select.Option key={itemKey} option={{ label: item.label, value: item.value }}>
                        {item.label}
                      </Select.Option>
                    );
                  })}
                </Select.List>
              </Select>
            </div>
          </Column>
        </Row>
      </Card>
    </div>
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
