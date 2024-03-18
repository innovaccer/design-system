import * as React from 'react';
import { Select } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const withSearch = () => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredMedicines, setFilteredMedicines] = React.useState(medicineList);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredMedicines(medicineList);
    }
    const newList = medicineList.filter((medicine) => medicine.label.toLowerCase().includes(searchTerm.toLowerCase()));

    setFilteredMedicines(newList);
    setError(newList.length === 0);
  }, [searchTerm]);

  const onChangeHandler = (value) => {
    setSearchTerm(value);
  };

  const onClearHandler = () => {
    setSearchTerm('');
  };

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption);
  };

  return (
    <Select onSelect={onSelectHandler}>
      <Select.SearchInput
        value={searchTerm}
        placeholder="Search"
        onChange={onChangeHandler}
        onClear={onClearHandler}
      ></Select.SearchInput>
      {error ? (
        <Select.EmptyTemplate
          description="Try modifying your search to find what you are looking for."
          size="small"
          title="No results found"
        ></Select.EmptyTemplate>
      ) : (
        <Select.List>
          {filteredMedicines.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          ))}
        </Select.List>
      )}
    </Select>
  );
};

const customCode = `() => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredMedicines, setFilteredMedicines] = React.useState(medicineList);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredMedicines(medicineList);
    }
    const newList = medicineList.filter((medicine) => medicine.label.toLowerCase().includes(searchTerm.toLowerCase()));

    setFilteredMedicines(newList);
    setError(newList.length === 0);
  }, [searchTerm]);

  const onChangeHandler = (value) => {
    setSearchTerm(value);
  };

  const onClearHandler = () => {
    setSearchTerm('');
  };

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };


  return (
    <Select onSelect={onSelectHandler}>
      <Select.SearchInput
        value={searchTerm}
        placeholder="Search"
        onChange={onChangeHandler}
        onClear={onClearHandler}
      ></Select.SearchInput>
      {error ? (
        <Select.EmptyTemplate
          description="Try modifying your search to find what you are looking for."
          size="small"
          title="No results found"
        ></Select.EmptyTemplate>
      ) : (
        <Select.List>
          {filteredMedicines.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          ))}
        </Select.List>
      )}
    </Select>
  );
}`;

export default {
  title: 'Components/Select/WithSearch',
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
