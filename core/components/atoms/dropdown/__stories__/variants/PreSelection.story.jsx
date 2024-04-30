import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { Uncontrolled, Controlled } from '../_common_/types';
import { preSelectedOptions } from '../Options';

// CSF format story
export const preSelection = () => {
  const BooleanValue = [true, false];

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(preSelectedOptions, searchTerm) : preSelectedOptions;
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

  return (
    <div className="d-flex pb-14">
      {BooleanValue.map((value, ind) => {
        const options = value ? preSelectedOptions : preSelectedOptions.slice(0, 50);

        return (
          <div key={ind} className="mr-10 w-25">
            <Text weight="strong">{value ? 'Options > 50 ' : 'Options <= 50'}</Text>
            <br />
            <br />
            <Dropdown withCheckbox={true} options={options} {...(value && { fetchOptions })} />
          </div>
        );
      })}
    </div>
  );
};

const customCode = `() => {
  const dropdownOptions = [];
  for (let i = 1; i <= 100; i++) {
    dropdownOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      selected: i === 2 || i === 3
    });
  }

  const BooleanValue = [true, false];

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm, limit) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise(resolve => {
      this.window.setTimeout(() => {
        resolve({
          options: searchedOptions.slice(0, limit),
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };
  return (
    <div className='d-flex'>
      <div className='mr-10 w-25'>
        <Text weight="strong">{'Options > 50'}</Text> <br /><br />
        <Dropdown withCheckbox={true} fetchOptions={fetchOptions}/>
      </div>
      <div className='mr-10 w-25'>
        <Text weight="strong">{'Options <= 50'}</Text> <br /><br />
        <Dropdown withCheckbox={true} options={dropdownOptions.slice(0, 50)} />
      </div>
    </div>
  )
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/Pre Selection',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
