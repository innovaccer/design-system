import * as React from 'react';
import { Select, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const withSections = () => {
  const medicineList = [
    { optionID: 'aspirin', label: 'Aspirin', value: 'Aspirin', group: 'Painkillers' },
    { optionID: 'paracetamol', label: 'Paracetamol', value: 'Paracetamol', group: 'Painkillers' },
    { optionID: 'lisinopril', label: 'Lisinopril', value: 'Lisinopril', group: 'Hypertension' },
    { optionID: 'simvastatin', label: 'Simvastatin', value: 'Simvastatin', group: 'Antibiotics' },
    { optionID: 'amoxicillin', label: 'Amoxicillin', value: 'Amoxicillin', group: 'Antibiotics' },
    { optionID: 'ciprofloxacin', label: 'Ciprofloxacin', value: 'Ciprofloxacin', group: 'Antibiotics' },
    { optionID: 'omeprazole', label: 'Omeprazole', value: 'Omeprazole', group: 'Painkillers' },
    { optionID: 'diazepam', label: 'Diazepam', value: 'Diazepam', group: 'Antibiotics' },
    { optionID: 'levothyroxine', label: 'Levothyroxine', value: 'Levothyroxine', group: 'Antibiotics' },
    { optionID: 'ibuprofen', label: 'Ibuprofen', value: 'Ibuprofen', group: 'Painkillers' },
    { optionID: 'prednisone', label: 'Prednisone', value: 'Prednisone', group: 'Painkillers' },
    { optionID: 'metoprolol', label: 'Metoprolol', value: 'Metoprolol', group: 'Hypertension' },
  ];

  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const groupedMedicine = medicineList.reduce((acc, item) => {
    const groupKey = item.group;
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});

  const handleSelect = (selectedOption) => {
    action('selectedOption', selectedOption);
    setSelectedOptions(selectedOption);
  };

  const onClearHandler = () => {
    setSelectedOptions([]);
  };

  return (
    <Select
      onSelect={handleSelect}
      value={selectedOptions}
      multiSelect={true}
      triggerOptions={{ onClear: onClearHandler }}
    >
      <Select.List>
        {Object.keys(groupedMedicine).map((group) => (
          <React.Fragment key={group}>
            <Text className="d-flex ml-6 mt-5 mr-5 mb-4" size="small" appearance={'subtle'}>
              {group}
            </Text>
            {groupedMedicine[group].map((item) => (
              <Select.Option
                key={item.optionID}
                option={{ label: item.label, value: item.value, optionID: item.optionID }}
              >
                {item.label}
              </Select.Option>
            ))}
          </React.Fragment>
        ))}
      </Select.List>
    </Select>
  );
};

const customCode = `() => {
  const medicineList = [
    { optionID: 'aspirin', label: 'Aspirin', value: 'Aspirin', group: 'Painkillers' },
    { optionID: 'paracetamol', label: 'Paracetamol', value: 'Paracetamol', group: 'Painkillers' },
    { optionID: 'lisinopril', label: 'Lisinopril', value: 'Lisinopril', group: 'Hypertension' },
    { optionID: 'simvastatin', label: 'Simvastatin', value: 'Simvastatin', group: 'Antibiotics' },
    { optionID: 'amoxicillin', label: 'Amoxicillin', value: 'Amoxicillin', group: 'Antibiotics' },
    { optionID: 'ciprofloxacin', label: 'Ciprofloxacin', value: 'Ciprofloxacin', group: 'Antibiotics' },
    { optionID: 'omeprazole', label: 'Omeprazole', value: 'Omeprazole', group: 'Painkillers' },
    { optionID: 'diazepam', label: 'Diazepam', value: 'Diazepam', group: 'Antibiotics' },
    { optionID: 'levothyroxine', label: 'Levothyroxine', value: 'Levothyroxine', group: 'Antibiotics' },
    { optionID: 'ibuprofen', label: 'Ibuprofen', value: 'Ibuprofen', group: 'Painkillers' },
    { optionID: 'prednisone', label: 'Prednisone', value: 'Prednisone', group: 'Painkillers' },
    { optionID: 'metoprolol', label: 'Metoprolol', value: 'Metoprolol', group: 'Hypertension' },
  ];

  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const groupedMedicine = medicineList.reduce((acc, item) => {
    const groupKey = item.group;
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});

  const handleSelect = (selectedOption) => {
    console.log('selectedOption', selectedOption);
    setSelectedOptions(selectedOption);
  };

  const onClearHandler = () => {
    setSelectedOptions([]);
  };

  return (
    <Select onSelect={handleSelect} value={selectedOptions} multiSelect={true} triggerOptions={{ onClear: onClearHandler }}>
      <Select.List>
        {Object.keys(groupedMedicine).map((group) => (
          <React.Fragment key={group}>
            <Text
              className="d-flex ml-6 mt-5 mr-5 mb-4"
              size="small"
              appearance={'subtle'}
            >
              {group}
            </Text>
            {groupedMedicine[group].map((item) => (
              <Select.Option key={item.optionID} option={{ label: item.label, value: item.value, optionID: item.optionID }}>
                {item.label}
              </Select.Option>
            ))}
          </React.Fragment>
        ))}
      </Select.List>
    </Select>
  );
}`;

export default {
  title: 'Components/Select/Multiselect/WithSections',
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
