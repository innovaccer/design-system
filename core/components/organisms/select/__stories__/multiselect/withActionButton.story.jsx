import * as React from 'react';
import { Select, Button } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const withActionButton = () => {
  const medicineList = [
    { id: 'aspirin', label: 'Aspirin', value: 'Aspirin' },
    { id: 'paracetamol', label: 'Paracetamol', value: 'Paracetamol' },
    { id: 'lisinopril', label: 'Lisinopril', value: 'Lisinopril' },
    { id: 'simvastatin', label: 'Simvastatin', value: 'Simvastatin' },
    { id: 'amoxicillin', label: 'Amoxicillin', value: 'Amoxicillin' },
    { id: 'ciprofloxacin', label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { id: 'metformin', label: 'Metformin', value: 'Metformin' },
    { id: 'omeprazole', label: 'Omeprazole', value: 'Omeprazole' },
    { id: 'diazepam', label: 'Diazepam', value: 'Diazepam' },
    { id: 'levothyroxine', label: 'Levothyroxine', value: 'Levothyroxine' },
  ];

  const selectRef = React.useRef(null);
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [previousSelectedOptions, setPreviousSelectedOptions] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(true);

  const handleSelect = (selectedOption) => {
    setIsDisabled(false);
    action('selectedOption', selectedOption);
    setSelectedOptions(selectedOption);
  };

  const onClearHandler = () => {
    setSelectedOptions([]);
    setPreviousSelectedOptions([]);
  };

  const onApplyOptions = () => {
    action('onApply button called');
    selectRef.current.setOpen(false);
    setPreviousSelectedOptions(selectedOptions);
  };

  const onCancelOptions = () => {
    action('onApply button called');
    selectRef.current.setOpen(false);
    setSelectedOptions(previousSelectedOptions);
  };

  const onOutsideClickHandler = () => {
    setSelectedOptions(previousSelectedOptions);
  };

  React.useEffect(() => {
    setSelectedOptions(previousSelectedOptions);
  }, [previousSelectedOptions]);

  return (
    <Select
      ref={selectRef}
      onOutsideClick={onOutsideClickHandler}
      onSelect={handleSelect}
      value={selectedOptions}
      multiSelect={true}
      triggerOptions={{ onClear: onClearHandler }}
    >
      <Select.List>
        {medicineList.map((item) => {
          return (
            <Select.Option key={item.id} option={{ label: item.label, value: item.value, id: item.id }}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select.List>
      <Select.Footer>
        <Button
          size={'tiny'}
          className="mr-4"
          appearance={'basic'}
          onClick={onCancelOptions}
          data-test="DesignSystem-Select-CancelButton"
          type="button"
        >
          Cancel
        </Button>
        <Button
          appearance={'primary'}
          size={'tiny'}
          onClick={onApplyOptions}
          data-test="DesignSystem-Select-ApplyButton"
          type="button"
          disabled={isDisabled}
        >
          Apply
        </Button>
      </Select.Footer>
    </Select>
  );
};

const customCode = `() => {
  const medicineList = [
    { id: 'aspirin', label: 'Aspirin', value: 'Aspirin' },
    { id: 'paracetamol', label: 'Paracetamol', value: 'Paracetamol' },
    { id: 'lisinopril', label: 'Lisinopril', value: 'Lisinopril' },
    { id: 'simvastatin', label: 'Simvastatin', value: 'Simvastatin' },
    { id: 'amoxicillin', label: 'Amoxicillin', value: 'Amoxicillin' },
    { id: 'ciprofloxacin', label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { id: 'metformin', label: 'Metformin', value: 'Metformin' },
    { id: 'omeprazole', label: 'Omeprazole', value: 'Omeprazole' },
    { id: 'diazepam', label: 'Diazepam', value: 'Diazepam' },
    { id: 'levothyroxine', label: 'Levothyroxine', value: 'Levothyroxine' },
  ];

  const selectRef = React.useRef(null);
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [previousSelectedOptions, setPreviousSelectedOptions] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(true);

  const handleSelect = (selectedOption) => {
    setIsDisabled(false);
    console.log('selectedOption', selectedOption);
    setSelectedOptions(selectedOption);
  };

  const onClearHandler = () => {
    setSelectedOptions([]);
    setPreviousSelectedOptions([]);
  };

  const onApplyOptions = () => {
    console.log('onApply button called');
    selectRef.current.setOpen(false);
    setPreviousSelectedOptions(selectedOptions);
  };

  const onCancelOptions = () => {
    console.log('onApply button called');
    selectRef.current.setOpen(false);
    setSelectedOptions(previousSelectedOptions);
  };

  const onOutsideClickHandler = () => {
    setSelectedOptions(previousSelectedOptions);
  };

  React.useEffect(() => {
    setSelectedOptions(previousSelectedOptions);
  }, [previousSelectedOptions]);

  return (
    <Select
      ref={selectRef}
      onOutsideClick={onOutsideClickHandler}
      onSelect={handleSelect}
      value={selectedOptions}
      multiSelect={true}
      triggerOptions={{ onClear: onClearHandler }}
    >
      <Select.List>
        {medicineList.map((item) => {
          return (
            <Select.Option key={item.id} option={{ label: item.label, value: item.value, id: item.id }}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select.List>
      <Select.Footer>
        <Button
          size={'tiny'}
          className="mr-4"
          appearance={'basic'}
          onClick={onCancelOptions}
          data-test="DesignSystem-Select-CancelButton"
          type="button"
        >
          Cancel
        </Button>
        <Button
          appearance={'primary'}
          size={'tiny'}
          onClick={onApplyOptions}
          data-test="DesignSystem-Select-ApplyButton"
          type="button"
          disabled={isDisabled}
        >
          Apply
        </Button>
      </Select.Footer>
    </Select>
  );
}`;

export default {
  title: 'Components/Select/Multiselect/WithActionButton',
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
