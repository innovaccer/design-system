import * as React from 'react';
import { Select, Spinner } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const loadingState = () => {
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

  const [loading, setLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredMedicines, setFilteredMedicines] = React.useState(medicineList);
  const [error, setError] = React.useState(false);

  const fetchOptions = (searchTerm) => {
    const searchedOptions =
      searchTerm.trim() === ''
        ? medicineList
        : medicineList.filter((medicine) => medicine.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return new Promise((resolve) => {
      this.window.setTimeout(() => {
        resolve({ option: searchedOptions });
      }, 1000);
    });
  };

  React.useEffect(() => {
    setLoading(true);
    fetchOptions(searchTerm).then((res) => {
      const { option } = res;
      setFilteredMedicines(option);
      setError(option.length === 0);
      setLoading(false);
    });
  }, [searchTerm]);

  const onChangeHandler = (value) => setSearchTerm(value);
  const onClearHandler = () => setSearchTerm('');

  const onSelectHandler = (selectedOption) => action('selectedOption', selectedOption);

  return (
    <Select onSelect={onSelectHandler}>
      <Select.SearchInput value={searchTerm} placeholder="Search" onChange={onChangeHandler} onClear={onClearHandler} />
      {loading ? (
        <Select.EmptyTemplate>
          <Spinner />
        </Select.EmptyTemplate>
      ) : error ? (
        <Select.EmptyTemplate
          description="Try modifying your search to find what you are looking for."
          size="small"
          title="No results found"
        />
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

  const [loading, setLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredMedicines, setFilteredMedicines] = React.useState(medicineList);
  const [error, setError] = React.useState(false);

  const fetchOptions = (searchTerm) => {
    const searchedOptions =
      searchTerm.trim() === ''
        ? medicineList
        : medicineList.filter((medicine) => medicine.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ option: searchedOptions });
      }, 1000);
    });
  };

  React.useEffect(() => {
    setLoading(true);
    fetchOptions(searchTerm).then((res) => {
      const { option } = res;
      setFilteredMedicines(option);
      setError(option.length === 0);
      setLoading(false);
    });
  }, [searchTerm]);

  const onChangeHandler = (value) => setSearchTerm(value);
  const onClearHandler = () => setSearchTerm('');
  const onSelectHandler = (selectedOption) => console.log('selectedOption', selectedOption);

  return (
    <Select onSelect={onSelectHandler}>
      <Select.SearchInput
        value={searchTerm}
        placeholder="Search"
        onChange={onChangeHandler}
        onClear={onClearHandler}
      />
      {loading ? (
        <Select.EmptyTemplate>
          <Spinner />
        </Select.EmptyTemplate>
      ) : error ? (
        <Select.EmptyTemplate
          description="Try modifying your search to find what you are looking for."
          size="small"
          title="No results found"
        />
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
  title: 'Components/Select/LoadingState',
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
