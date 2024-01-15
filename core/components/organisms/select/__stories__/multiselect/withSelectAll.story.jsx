import * as React from 'react';
import { Select } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const withSelectAll = () => {
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

  const [selectedValue, setSelectedValue] = React.useState([]);
  const [checkedState, setCheckedState] = React.useState('unchecked');

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption);
    setSelectedValue(selectedOption);
  };

  const onClickHandler = (selectedOption) => {
    action(selectedOption, 'onClickHandler');
    if (checkedState === 'checked') {
      setCheckedState('unchecked');
      setSelectedValue([]);
    } else {
      setCheckedState('checked');
      setSelectedValue(medicineList);
    }
  };

  const onClearHandler = () => {
    setCheckedState('unchecked');
    setSelectedValue([]);
  };

  React.useEffect(() => {
    if (selectedValue.length === medicineList.length) {
      setCheckedState('checked');
    } else if (selectedValue.length === 0) {
      setCheckedState('unchecked');
    } else {
      setCheckedState('indeterminate');
    }
    action('Selected Value Changed:', selectedValue);
  }, [checkedState, selectedValue]);

  return (
    <Select
      onSelect={onSelectHandler}
      value={selectedValue}
      multiSelect={true}
      triggerOptions={{ onClear: onClearHandler }}
    >
      <Select.List>
        <Select.Option
          checkedState={checkedState}
          onClick={onClickHandler}
          option={{ label: 'SelectAll', value: 'SelectAll' }}
        >
          Select All
        </Select.Option>
        {medicineList.map((item, key) => {
          return (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select.List>
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

    const [selectedValue, setSelectedValue] = React.useState([]);
    const [checkedState, setCheckedState] = React.useState('unchecked');

    const onSelectHandler = (selectedOption) => {
        console.log('selectedOption', selectedOption);
        setSelectedValue(selectedOption);
    };

    const onClickHandler = (selectedOption) => {
        console.log(selectedOption, 'onClickHandler');
        if(checkedState === 'checked'){
            setCheckedState('unchecked');
            setSelectedValue([]);
        } else {
            setCheckedState('checked');
            setSelectedValue(medicineList);
        }
    }

    const onClearHandler = () => {
        setCheckedState('unchecked');
        setSelectedValue([]);
    }
    
    React.useEffect(() => {
        if(selectedValue.length === medicineList.length ){
            setCheckedState('checked')
        } else if(selectedValue.length === 0){
            setCheckedState('unchecked')
        } else {
            setCheckedState('indeterminate')
        }
        console.log('Selected Value Changed:', selectedValue);
    }, [checkedState, selectedValue]);

    return (
        <Select 
        onSelect={onSelectHandler} 
        value={selectedValue} 
        multiSelect={true} 
        triggerOptions={{ onClear: onClearHandler }}
        >
            <Select.List>
                <Select.Option checkedState={checkedState} onClick={onClickHandler} option={{ label: 'SelectAll', value: 'SelectAll' }}>
                    Select All
                </Select.Option>
            {medicineList.map((item, key) => {
                return (
                <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                    {item.label}
                </Select.Option>
                );
            })}
            </Select.List>
        </Select>
    );
}`;

export default {
  title: 'Components/Select/Multiselect/WithSelectAll',
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
