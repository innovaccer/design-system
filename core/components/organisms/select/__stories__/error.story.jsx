import * as React from 'react';
import { Select, HelpText } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const error = () => {
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

  const [selectedValue, setSelectedValue] = React.useState();
  const [hasError, setHasError] = React.useState(true);

  const onSelectHandler = (selectedOption) => {
    setSelectedValue(selectedOption);
    setHasError(false);
    action('selectedOption', selectedOption);
  };

  const medicationFieldMessageId = 'medication-select-message';

  return (
    <div>
      <Select
        error={hasError}
        value={selectedValue}
        onSelect={onSelectHandler}
        aria-describedby={medicationFieldMessageId}
        aria-errormessage={hasError ? medicationFieldMessageId : undefined}
        triggerOptions={{ 'aria-label': 'Medication selector with error' }}
      >
        <Select.List aria-label="Medication options list">
          {medicineList.map((item, key) => {
            return (
              <Select.Option
                key={key}
                option={{ label: item.label, value: item.value }}
                aria-label={`${item.label} option`}
              >
                {item.label}
              </Select.Option>
            );
          })}
        </Select.List>
      </Select>
      <HelpText
        id={medicationFieldMessageId}
        error={hasError}
        message={hasError ? 'Please select a medication from the list' : 'Pick a medication from the list.'}
      />
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

  const [selectedValue, setSelectedValue] = React.useState();
  const [hasError, setHasError] = React.useState(true);

  const onSelectHandler = (selectedOption) => {
    setSelectedValue(selectedOption);
    setHasError(false);
    console.log('selectedOption', selectedOption);
  };

  const medicationFieldMessageId = 'medication-select-message';

  return (
    <div>
    <Select
      error={hasError}
      value={selectedValue}
      onSelect={onSelectHandler}
      aria-describedby={medicationFieldMessageId}
      aria-errormessage={hasError ? medicationFieldMessageId : undefined}
      triggerOptions={{ 'aria-label': 'Medication selector with error' }}
    >
      <Select.List aria-label="Medication options list">
        {medicineList.map((item, key) => {
          return (
            <Select.Option
              key={key}
              option={{ label: item.label, value: item.value }}
              aria-label={\`\${item.label} option\`}
            >
              {item.label}
            </Select.Option>
          );
        })}
      </Select.List>
    </Select>
    <HelpText
      id={medicationFieldMessageId}
      error={hasError}
      message={
        hasError ? 'Please select a medication from the list' : 'Pick a medication from the list.'
      }
    />
    </div>
  );
}`;

export default {
  title: 'Components/Select/Error',
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
        title: 'Select with Error',
        customCode,
      },
    },
  },
};
