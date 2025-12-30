import * as React from 'react';
import { Select, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const selectedItem = () => {
  const medicineList = [
    { id: 'aspirin', label: 'Aspirin', value: 'Aspirin', group: 'Painkillers' },
    { id: 'paracetamol', label: 'Paracetamol', value: 'Paracetamol', group: 'Painkillers' },
    { id: 'lisinopril', label: 'Lisinopril', value: 'Lisinopril', group: 'Hypertension' },
    { id: 'simvastatin', label: 'Simvastatin', value: 'Simvastatin', group: 'Antibiotics' },
    { id: 'amoxicillin', label: 'Amoxicillin', value: 'Amoxicillin', group: 'Antibiotics' },
    { id: 'ciprofloxacin', label: 'Ciprofloxacin', value: 'Ciprofloxacin', group: 'Antibiotics' },
    { id: 'omeprazole', label: 'Omeprazole', value: 'Omeprazole', group: 'Painkillers' },
    { id: 'diazepam', label: 'Diazepam', value: 'Diazepam', group: 'Antibiotics' },
    { id: 'levothyroxine', label: 'Levothyroxine', value: 'Levothyroxine', group: 'Antibiotics' },
    { id: 'ibuprofen', label: 'Ibuprofen', value: 'Ibuprofen', group: 'Painkillers' },
    { id: 'prednisone', label: 'Prednisone', value: 'Prednisone', group: 'Painkillers' },
    { id: 'metoprolol', label: 'Metoprolol', value: 'Metoprolol', group: 'Hypertension' },
  ];

  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const selectRef = React.useRef(null);

  const getOptionIdentifier = (option) => (option && option.id) || (option && option.label) || '';

  const handleSelect = (selectedOption) => {
    action('selectedOption', selectedOption);
    selectRef.current.setFocusFirstItem();
    setSelectedOptions(selectedOption);
  };

  const onClearHandler = () => {
    setSelectedOptions([]);
  };

  const groupedMedicine = medicineList.reduce((acc, item) => {
    const itemIdentifier = getOptionIdentifier(item);
    const groupKey = selectedOptions.find((opt) => getOptionIdentifier(opt) === itemIdentifier)
      ? 'Selected Items'
      : item.group;
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});

  return (
    <Select
      ref={selectRef}
      onSelect={handleSelect}
      value={selectedOptions}
      multiSelect={true}
      triggerOptions={{ onClear: onClearHandler }}
    >
      <Select.List>
        {selectedOptions.length > 0 && (
          <React.Fragment>
            <Text className="d-flex ml-6 mt-5 mr-5 mb-4" size="small" appearance="subtle">
              Selected Items
            </Text>
            {selectedOptions.map((option) => (
              <Select.Option key={getOptionIdentifier(option)} option={option}>
                {option.label}
              </Select.Option>
            ))}
          </React.Fragment>
        )}
        {Object.keys(groupedMedicine).map(
          (group) =>
            group !== 'Selected Items' &&
            groupedMedicine[group].length > 0 && (
              <React.Fragment key={group}>
                <Text className="d-flex ml-6 mt-5 mr-5 mb-4" size="small" appearance={'subtle'}>
                  {group}
                </Text>
                {groupedMedicine[group].map((item) => (
                  <Select.Option
                    key={getOptionIdentifier(item)}
                    option={{ label: item.label, value: item.value, id: item.id }}
                  >
                    {item.label}
                  </Select.Option>
                ))}
              </React.Fragment>
            )
        )}
      </Select.List>
    </Select>
  );
};

const customCode = `() => {
  const medicineList = [
    { id: 'aspirin', label: 'Aspirin', value: 'Aspirin', group: 'Painkillers' },
    { id: 'paracetamol', label: 'Paracetamol', value: 'Paracetamol', group: 'Painkillers' },
    { id: 'lisinopril', label: 'Lisinopril', value: 'Lisinopril', group: 'Hypertension' },
    { id: 'simvastatin', label: 'Simvastatin', value: 'Simvastatin', group: 'Antibiotics' },
    { id: 'amoxicillin', label: 'Amoxicillin', value: 'Amoxicillin', group: 'Antibiotics' },
    { id: 'ciprofloxacin', label: 'Ciprofloxacin', value: 'Ciprofloxacin', group: 'Antibiotics' },
    { id: 'omeprazole', label: 'Omeprazole', value: 'Omeprazole', group: 'Painkillers' },
    { id: 'diazepam', label: 'Diazepam', value: 'Diazepam', group: 'Antibiotics' },
    { id: 'levothyroxine', label: 'Levothyroxine', value: 'Levothyroxine', group: 'Antibiotics' },
    { id: 'ibuprofen', label: 'Ibuprofen', value: 'Ibuprofen', group: 'Painkillers' },
    { id: 'prednisone', label: 'Prednisone', value: 'Prednisone', group: 'Painkillers' },
    { id: 'metoprolol', label: 'Metoprolol', value: 'Metoprolol', group: 'Hypertension' },
  ];

  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const selectRef = React.useRef(null);

  const handleSelect = (selectedOption) => {
    console.log('selectedOption', selectedOption);
    selectRef.current.setFocusFirstItem();
    setSelectedOptions(selectedOption);
  };

  const onClearHandler = () => {
    setSelectedOptions([]);
  };

  const getOptionIdentifier = (option) => (option && option.id) || (option && option.label) || '';

  const groupedMedicine = medicineList.reduce((acc, item) => {
    const itemIdentifier = getOptionIdentifier(item);
    const groupKey = selectedOptions.find((opt) => getOptionIdentifier(opt) === itemIdentifier)
      ? 'Selected Items'
      : item.group;
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});

  return (
    <Select
      ref={selectRef}
      onSelect={handleSelect}
      value={selectedOptions}
      multiSelect={true}
      triggerOptions={{ onClear: onClearHandler }}
    >
      <Select.List>
        {selectedOptions.length > 0 && (
          <React.Fragment>
            <Text className="d-flex ml-6 mt-5 mr-5 mb-4" size="small" appearance="subtle">
              Selected Items
            </Text>
            {selectedOptions.map((option) => (
              <Select.Option key={getOptionIdentifier(option)} option={option}>
                {option.label}
              </Select.Option>
            ))}
          </React.Fragment>
        )}
        {Object.keys(groupedMedicine).map(
          (group) =>
            group !== 'Selected Items' &&
            groupedMedicine[group].length > 0 && (
              <React.Fragment key={group}>
                <Text
                  className="d-flex ml-6 mt-5 mr-5 mb-4"
                  size="small"
                  appearance={'subtle'}
                >
                  {group}
                </Text>
                {groupedMedicine[group].map((item) => (
                  <Select.Option
                    key={getOptionIdentifier(item)}
                    option={{ label: item.label, value: item.value, id: item.id }}
                  >
                    {item.label}
                  </Select.Option>
                ))}
              </React.Fragment>
            )
        )}
      </Select.List>
    </Select>
  );
}`;

export default {
  title: 'Components/Select/Multiselect/SelectedItem',
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
