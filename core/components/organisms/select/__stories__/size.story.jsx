import * as React from 'react';
import { Select, Row, Column, Label } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const size = () => {
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
      searchInputSize: 'tiny',
    },
    {
      label: 'Regular',
      triggerSize: 'regular',
      listSize: 'compressed',
      searchInputSize: 'regular',
    },
  ];

  const [searchTerms, setSearchTerms] = React.useState({});
  const [filteredMedicines, setFilteredMedicines] = React.useState({});

  React.useEffect(() => {
    sizeConfigs.forEach((config, index) => {
      const searchTerm = searchTerms[index] || '';
      if (searchTerm.trim() === '') {
        setFilteredMedicines((prev) => ({ ...prev, [index]: medicineList }));
      } else {
        const newList = medicineList.filter((medicine) =>
          medicine.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMedicines((prev) => ({ ...prev, [index]: newList }));
      }
    });
  }, [searchTerms]);

  const onChangeHandler = (index, value) => {
    setSearchTerms((prev) => ({ ...prev, [index]: value }));
  };

  const onClearHandler = (index) => {
    setSearchTerms((prev) => ({ ...prev, [index]: '' }));
  };

  const onSelectHandler = (selectedOption) => {
    action.log('selectedOption', selectedOption);
  };

  return (
    <>
      <Row className="mb-6">
        {sizeConfigs.map((config, key) => {
          return (
            <Column key={key} size={4}>
              <Label className="mb-3">{config.label} Select</Label>
              <Select triggerOptions={{ triggerSize: config.triggerSize }} onSelect={onSelectHandler}>
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

      <Row>
        {sizeConfigs.map((config, key) => {
          const currentMedicines = filteredMedicines[key] || medicineList;
          const searchTerm = searchTerms[key] || '';

          return (
            <Column key={key} size={4}>
              <Label className="mb-3">{config.label} Select with Search</Label>
              <Select triggerOptions={{ triggerSize: config.triggerSize }} onSelect={onSelectHandler}>
                <Select.SearchInput
                  value={searchTerm}
                  placeholder="Search medicines..."
                  size={config.searchInputSize}
                  onChange={(value) => onChangeHandler(key, value)}
                  onClear={() => onClearHandler(key)}
                />
                <Select.List size={config.listSize}>
                  {currentMedicines.map((item, itemKey) => {
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
    </>
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
      searchInputSize: 'tiny'
    },
    { 
      label: 'Regular', 
      triggerSize: 'regular',
      listSize: 'compressed',
      searchInputSize: 'regular'
    },
  ];

  const [searchTerms, setSearchTerms] = React.useState({});
  const [filteredMedicines, setFilteredMedicines] = React.useState({});

  React.useEffect(() => {
    sizeConfigs.forEach((config, index) => {
      const searchTerm = searchTerms[index] || '';
      if (searchTerm.trim() === '') {
        setFilteredMedicines(prev => ({ ...prev, [index]: medicineList }));
      } else {
        const newList = medicineList.filter((medicine) => 
          medicine.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMedicines(prev => ({ ...prev, [index]: newList }));
      }
    });
  }, [searchTerms]);

  const onChangeHandler = (index, value) => {
    setSearchTerms(prev => ({ ...prev, [index]: value }));
  };

  const onClearHandler = (index) => {
    setSearchTerms(prev => ({ ...prev, [index]: '' }));
  };

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <>
      <Row className="mb-6">
        {sizeConfigs.map((config, key) => {
          return (
            <Column key={key} size={4}>
              <Label className="mb-3">
                {config.label} Select
              </Label>
              <Select triggerOptions={{ triggerSize: config.triggerSize }} onSelect={onSelectHandler}>
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

      <Row>
        {sizeConfigs.map((config, key) => {
          const currentMedicines = filteredMedicines[key] || medicineList;
          const searchTerm = searchTerms[key] || '';

          return (
            <Column key={key} size={4}>
              <Label className="mb-3">
                {config.label} Select with Search
              </Label>
              <Select triggerOptions={{ triggerSize: config.triggerSize }} onSelect={onSelectHandler}>
                <Select.SearchInput
                  value={searchTerm}
                  placeholder="Search medicines..."
                  size={config.searchInputSize}
                  onChange={(value) => onChangeHandler(key, value)}
                  onClear={() => onClearHandler(key)}
                />
                <Select.List size={config.listSize}>
                  {currentMedicines.map((item, itemKey) => {
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
    </>
  );
}`;

export default {
  title: 'Components/Select/Size',
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
