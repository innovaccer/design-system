import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown, { EventType } from '@/components/atoms/dropdown';
import { Uncontrolled, Controlled } from '../../_common_/types';
import Text from '@/components/atoms/text';
import { dropdownOptions } from '../../Options';

// CSF format story
export const multiSelect = () => {
  const [selectedMoreThan50, setSelectedMoreThan50] = React.useState([dropdownOptions[3]]);
  const [selectedLessThan50, setSelectedLessThan50] = React.useState([dropdownOptions[3]]);

  const getSearchedOptions = (options: any, searchTerm: string) => {
    const result = options.filter((option: any) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm: string) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise<any>(resolve => {
      setTimeout(() => {
        resolve({
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const onChangeHandler = (selectedValues: any[]) => {
    return action(`selected values length: ${selectedValues}`)();
  };

  const onSelectLessThan50 = (type: EventType, option?: any) => {
    switch (type) {
      case 'select-all':
        setSelectedLessThan50(dropdownOptions.slice(0, 50));
        return;
      case 'deselect-all':
        setSelectedLessThan50([]);
        return;
      case 'select-option':
        setSelectedLessThan50(selectedLessThan50.concat(option));
        return;
      case 'deselect-option':
        const selectedArray = selectedLessThan50.slice();
        const index = selectedArray.findIndex(item => item.value === option.value);
        selectedArray.splice(index, 1);
        setSelectedLessThan50(selectedArray);
      default:
        return;
    }
  };

  const onSelectMoreThan50 = (type: EventType, option?: any) => {
    switch (type) {
      case 'select-option':
        setSelectedMoreThan50(selectedMoreThan50.concat(option));
        return;
      case 'deselect-option':
        const selectedArray = selectedMoreThan50.slice();
        const index = selectedArray.findIndex(item => item.value === option.value);
        selectedArray.splice(index, 1);
        setSelectedMoreThan50(selectedArray);
        return;
      case 'clear-all':
        setSelectedMoreThan50([]);
        return;
      default:
        return;
    }
  };

  const onClose = (options: any[], _name: any) => {
    return action(`dropdown closed with selected values: ${options}`)();
  };

  return (
    <div className="d-flex">
      <div style={{ width: '170px' }}>
        <Text weight="strong">{'Options > 50'}</Text><br /><br />
        <Dropdown
          fetchOptions={fetchOptions}
          onUpdate={onSelectMoreThan50}
          selected={selectedMoreThan50}
          onChange={onChangeHandler}
          withCheckbox={true}
        />
      </div>
      <div style={{ width: '170px', marginLeft: '128px' }}>
        <Text weight="strong">{'Options <= 50'}</Text><br /><br />
        <Dropdown
          options={dropdownOptions.slice(0, 50)}
          onUpdate={onSelectLessThan50}
          selected={selectedLessThan50}
          onChange={onChangeHandler}
          onClose={onClose}
          withCheckbox={true}
          withSearch={true}
        />
      </div>
    </div>
  );
};

const customCode = `() => {
  const dropdownOptions =  [];
  for (let i = 1; i <= 100; i++) {
    dropdownOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      group: i >= 1 && i <= 40 ? 'Group 1' : 'Group 2',
      icon: 'events',
      subInfo: 'subInfo',
    });
  }
  const [selectedMoreThan50, setSelectedMoreThan50] = React.useState([dropdownOptions[3]]);
  const [selectedLessThan50, setSelectedLessThan50] = React.useState([dropdownOptions[3]]);

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const onChangeHandler = (selectedValues) => {
    console.log(selectedValues);
  };

  const onSelectLessThan50 = (type, option) => {
    switch (type) {
      case 'select-all':
        setSelectedLessThan50(dropdownOptions.slice(0, 50));
        return;
      case 'deselect-all':
        setSelectedLessThan50([]);
        return;
      case 'select-option':
        setSelectedLessThan50(selectedLessThan50.concat(option));
        return;
      case 'deselect-option':
        const selectedArray = selectedLessThan50.slice();
        const index = selectedArray.findIndex(item => item.value === option.value);
        selectedArray.splice(index, 1);
        setSelectedLessThan50(selectedArray);
      default:
        return;
    }
  };

  const onSelectMoreThan50 = (type, option) => {
    switch (type) {
      case 'select-option':
        setSelectedMoreThan50(selectedMoreThan50.concat(option));
        return;
      case 'deselect-option':
        const selectedArray = selectedMoreThan50.slice();
        const index = selectedArray.findIndex(item => item.value === option.value);
        selectedArray.splice(index, 1);
        setSelectedMoreThan50(selectedArray);
        return;
      case 'clear-all':
        setSelectedMoreThan50([]);
        return;
      default:
        return;
    }
  };

  const onClose = (options) => {
    console.log(options);
  }

  return (
    <div className='d-flex'>
      <div className="w-25 mb-13">
        <Text weight="strong">{'Options > 50'}</Text><br /><br />
        <Dropdown
          fetchOptions={fetchOptions}
          onUpdate={onSelectMoreThan50}
          selected={selectedMoreThan50}
          onChange={onChangeHandler}
          withCheckbox={true}
        />
      </div>
      <div className="w-25 mb-13 ml-5">
        <Text weight="strong">{'Options <= 50'}</Text><br /><br />
        <Dropdown
          options={dropdownOptions.slice(0, 50)}
          onUpdate={onSelectLessThan50}
          selected={selectedLessThan50}
          onChange={onChangeHandler}
          onClose={onClose}
          withCheckbox={true}
          withSearch={true}
        />
      </div>
    </div>
  );
}`;

export default {
  title: 'Atoms|Dropdown/Variants/ControlledDropdown',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead']
        }
      }
    }
  }
};
