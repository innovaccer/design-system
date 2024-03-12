import * as React from 'react';
import { Select, Text } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const addOption = () => {
  const [medicineList, setMedicineList] = React.useState([
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
  ]);

  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredMedicines, setFilteredMedicines] = React.useState(medicineList);
  const [showAddOption, setShowAddOption] = React.useState(false);
  const selectRef = React.useRef(null);

  React.useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredMedicines(medicineList);
      setShowAddOption(false);
    } else {
      const newList = medicineList.filter((medicine) =>
        medicine.label.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const searchTearmFilter = medicineList.filter(
        (medicine) => medicine.label.toLowerCase() === searchTerm.toLowerCase()
      );

      setFilteredMedicines(newList);
      setShowAddOption(searchTearmFilter.length === 0);
    }
  }, [searchTerm, medicineList]);

  const onChangeHandler = (value) => {
    setSearchTerm(value);
  };

  const onClearHandler = () => {
    setSearchTerm('');
  };

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption);
  };

  const onAddMedicine = () => {
    const newMedicine = { label: searchTerm, value: searchTerm };
    setMedicineList((prevList) => [...prevList, newMedicine]);
    selectRef.current.setFocusFirstItem();
    setSearchTerm('');
  };

  return (
    <Select ref={selectRef} onSelect={onSelectHandler}>
      <Select.SearchInput value={searchTerm} placeholder="Search" onChange={onChangeHandler} onClear={onClearHandler} />
      <Select.List>
        {filteredMedicines.map((item, key) => (
          <Select.Option key={key} option={item}>
            {item.label}
          </Select.Option>
        ))}
        {showAddOption && (
          <Select.Option onClick={onAddMedicine} option={{ label: 'Add new medicine', value: 'add_new' }}>
            <Text color="primary"> Add "{searchTerm}" </Text>
          </Select.Option>
        )}
      </Select.List>
    </Select>
  );
};

const customCode = `() => {
    const [medicineList, setMedicineList] = React.useState([
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
    ]);
  
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filteredMedicines, setFilteredMedicines] = React.useState(medicineList);
    const [showAddOption, setShowAddOption] = React.useState(false);
    const selectRef = React.useRef(null);
  
    React.useEffect(() => {
      if (searchTerm.trim() === '') {
        setFilteredMedicines(medicineList);
        setShowAddOption(false);
      } else {
        const newList = medicineList.filter((medicine) =>
          medicine.label.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const searchTearmFilter = medicineList.filter((medicine) =>
          medicine.label.toLowerCase() === searchTerm.toLowerCase()
        );
  
        setFilteredMedicines(newList);
        setShowAddOption(searchTearmFilter.length === 0);
      }
    }, [searchTerm, medicineList]);
  
    const onChangeHandler = (value) => {
      setSearchTerm(value);
    };
  
    const onClearHandler = () => {
      setSearchTerm('');
    };
  
    const onSelectHandler = (selectedOption) => {
      console.log('selectedOption', selectedOption);
    };
  
    const onAddMedicine = () => {
      const newMedicine = { label: searchTerm, value: searchTerm };
      setMedicineList((prevList) => [...prevList, newMedicine]);
      selectRef.current.setFocusFirstItem();
      setSearchTerm('');
    };
  
    return (
      <Select ref={selectRef} onSelect={onSelectHandler}>
        <Select.SearchInput
          value={searchTerm}
          placeholder="Search"
          onChange={onChangeHandler}
          onClear={onClearHandler}
        />
        <Select.List>
          {filteredMedicines.map((item, key) => (
            <Select.Option key={key} option={item}>
              {item.label}
            </Select.Option>
          ))}
          {showAddOption && (
            <Select.Option onClick={onAddMedicine} option={{ label: 'Add new medicine', value: 'add_new' }}> 
              <Text color="primary"> Add "{searchTerm}" </Text>
            </Select.Option>
          )}
        </Select.List>
      </Select>
    );
  }`;

export default {
  title: 'Components/Select/AddOption',
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
