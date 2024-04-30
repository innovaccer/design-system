import * as React from 'react';
import { action } from '@/utils/action';
import { EditableDropdown, Label } from '@/index';

// CSF format story
const dropdownOptions = [];
for (let i = 1; i <= 100; i++) {
  dropdownOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    group: i >= 1 && i <= 40 ? 'Group 1' : 'Group 2',
    selected: i === 2,
  });
}

export const all = () => {
  const placeholder = 'Select Option';

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise((resolve) => {
      this.window.setTimeout(() => {
        resolve({
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const onChange = (selectedValues) => {
    return action(`selected values length: ${selectedValues}`)();
  };

  return (
    <div className="w-25">
      <Label withInput={true} className="ml-5">
        Editable Dropdown
      </Label>
      <EditableDropdown
        placeholder={placeholder}
        dropdownOptions={{
          fetchOptions,
          onChange,
        }}
      />
    </div>
  );
};

const customCode = `() => {
  const dropdownOptions = [];
  for (let i = 1; i <= 100; i++) {
    dropdownOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      group: i >= 1 && i <= 40 ? 'Group 1' : 'Group 2',
      selected: i === 2
    });
  };

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise(resolve => {
      this.window.setTimeout(() => {
        resolve({
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const onChange = (selectedValues) => {
    console.log(selectedValues);
  };

  return (
    <div className="w-25">
      <Label withInput={true} className="ml-5">Editable Dropdown</Label>
      <EditableDropdown
        placeholder="Select Option"
        dropdownOptions={{
          fetchOptions,
          onChange
        }}
      />
    </div>
  );
}`;

export default {
  title: 'Components/Inline Editable Fields/EditableDropdown/All',
  component: EditableDropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
