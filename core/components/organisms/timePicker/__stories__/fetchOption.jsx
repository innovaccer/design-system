import * as React from 'react';
import { TimePicker } from '@/index';
import { TimePickerAsDropdown, TimePickerAsInput } from './_common_/types';

// CSF format story
export const FetchOption = () => {
  const dropdownOptions = [];
  for (let i = 1; i <= 100; i++) {
    dropdownOptions.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      group: i >= 1 && i <= 40 ? 'Group 1' : 'Group 2',
      icon: 'events',
      subInfo: 'subInfo',
    });
  }

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (props) => {
    console.log('propsss', props);
    const { searchTerm } = props;
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve({
          searchTerm,
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  return (
    <div className="w-25" style={{ minHeight: '280px' }}>
      <TimePicker fetchOptions={fetchOptions} />
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

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (props) => {
    console.log('propsss', props);
    const { searchTerm } = props;
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve({
          searchTerm,
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  return (
    <div className='w-25' style={{ minHeight: '280px' }}>
      <Dropdown
        fetchOptions={fetchOptions}
      />
    </div>
  );
}`;

export default {
  title: 'Components/TimePicker/Fetch Option',
  component: TimePicker,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TimePicker',
        props: {
          components: { TimePickerAsInput, TimePickerAsDropdown },
        },
      },
    },
  },
};
