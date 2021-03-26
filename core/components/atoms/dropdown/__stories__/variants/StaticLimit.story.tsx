import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { Uncontrolled, Controlled } from '../_common_/types';
import { dropdownOptions } from '../Options';

// CSF format story
export const staticLimit = () => {
  const BooleanValue = [true, false];

  const getSearchedOptions = (options: any, searchTerm: string) => {
    const result = options.filter((option: any) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm: string) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise<any>(resolve => {
      window.setTimeout(() => {
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
            <div key={ind} style={{ marginRight: '10%', width: '200px' }}>
              <Text weight="strong">
                {value ? 'Options length > staticLimit' : 'Options length <= staticLimit'}
              </Text>
              <br /><br />
              <Dropdown withSearch={true} withCheckbox={true} options={options} {...(value && { fetchOptions })} />
            </div>
          );
        })
      }
    </div>
  );
};

const customCode = `() => {
  const staticLimit = 50;
  const dropdownOptions = [];
  for (let i = 1; i <= 100; i++) {
    dropdownOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      group: i <= 40 ? 'Group 1' : 'Group 2'
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
      window.setTimeout(() => {
        resolve({
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };
  return (
    <div className='d-flex'>
      <div className='mr-10 w-25'>
        <Text weight="strong">{\`Options > \${staticLimit}\`}</Text> <br /><br />
        <Dropdown
          withCheckbox={true}
          staticLimit={staticLimit}
          fetchOptions={fetchOptions}
        />
      </div>
      <div className='mr-10 w-25'>
        <Text weight="strong">{\`Options <= \${staticLimit}\`}</Text> <br /><br />
        <Dropdown
          withCheckbox={true}
          staticLimit={staticLimit}
          options={dropdownOptions.slice(0, staticLimit)}
        />
      </div>
    </div>
  )
}`;

export default {
  title: 'Components/Dropdown/Variants/Static Limit',
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
