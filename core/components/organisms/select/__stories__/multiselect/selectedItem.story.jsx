import * as React from 'react';
import { Select, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const selectedItem = () => {
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
  const selectRef = React.useRef(null);

  const getOptionIdentifier = (option) => option?.optionID ?? option?.value;

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
                    option={{ label: item.label, value: item.value, optionID: item.optionID }}
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
  const selectRef = React.useRef(null);

  const handleSelect = (selectedOption) => {
    console.log('selectedOption', selectedOption);
    selectRef.current.setFocusFirstItem();
    setSelectedOptions(selectedOption);
  };

  const onClearHandler = () => {
    setSelectedOptions([]);
  };

  const getOptionIdentifier = (option) => option?.optionID ?? option?.value;

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
                    option={{ label: item.label, value: item.value, optionID: item.optionID }}
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
