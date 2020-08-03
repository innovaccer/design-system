import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { Uncontrolled, Controlled } from '../_common_/types';
import { dropdownOptions } from '../Options';

// CSF format story
export const bulk = () => {
  const BooleanValue = [true, false];

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

  return (
    <div style={{ display: 'flex', minHeight: '280px' }}>
      {
        BooleanValue.map((value, ind) => {
          const options = value ? dropdownOptions : dropdownOptions.slice(0, 50);
          return (
            <div key={ind} style={{ marginRight: '10%', width: '170px' }}>
              <Text weight="strong">{value ? 'Options > 50' : 'Options <= 50'}</Text> <br /><br />
              <Dropdown withSearch={true} withCheckbox={true} options={options} {...(value && { fetchOptions })} />
            </div>
          );
        })
      }
    </div>
  );
};

const customCode = `() => {
  const dropdownOptions = [];
  for (let i = 1; i <= 40; i++) {
    dropdownOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      group: 'Group 1'
    });
  }
  for (let i = 41; i <= 100; i++) {
    dropdownOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      group: 'Group 2'
    });
  }
  const BooleanValue = [true, false];

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
  return (
    <div className='d-flex' style={{ minHeight: '300px' }}>
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
  title: 'Atoms|Dropdown/Variants',
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
