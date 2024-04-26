import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';

const options = [];
for (let i = 1; i <= 100; i++) {
  options.push({
    label: `Option ${i}`,
    value: `Option${i}`,
  });
}

// CSF format story
export const dropdownOptionsMoreThan50 = () => {
  const getSearchedOptions = (opts, searchTerm) => {
    const result = opts.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(options, searchTerm) : options;
    return new Promise((resolve) => {
      this.window.setTimeout(() => {
        resolve({
          searchTerm,
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  return <Dropdown fetchOptions={fetchOptions} withCheckbox={true} className="w-25" placeholder="Select" />;
};

const customCode = `() => {
  const options = [];
  for (let i=1; i <= 100; i++) {
    options.push({
      label: \`Option \${i}\`,
      value: \`Option\${i}\`
    })
  }

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(options, searchTerm) : options;
    return new Promise(resolve => {
      this.window.setTimeout(() => {
        resolve({
          searchTerm,
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  return (
    <Dropdown
      fetchOptions={fetchOptions}
      withCheckbox={true}
      className="w-25"
      placeholder="Select"
  />
  );
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Dropdown Options More Than 50',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Dropdown',
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
        },
      },
    },
  },
};
