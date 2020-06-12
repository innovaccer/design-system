import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { dropdownOptions } from '../../utils/Options';

// CSF format story
export const bulk = () => {
  const BooleanValue = [true, false];

  const getSearchedOptions = (options: any, searchTerm: string) => {
    const result = options.filter((option: any) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm: string, limit: number) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise<any>(resolve => {
      setTimeout(() => {
        resolve({
          options: searchedOptions.slice(0, limit),
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
              <Dropdown checkboxes={true} bulk={value} options={options} fetchOptions={fetchOptions}/>
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

  const fetchOptions = (searchTerm, limit) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          options: searchedOptions.slice(0, limit),
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };
  return (
    <div style={{ display: 'flex', minHeight: '300px' }}>
      {
        BooleanValue.map((value, ind) => {
          const options = value ? dropdownOptions : dropdownOptions.slice(0, 50);
          return (
            <div key={ind} style={{ marginRight: '10%', width: '170px' }}>
              <Text weight="strong">{value ? 'Options > 50' : 'Options <= 50'}</Text> <br /><br />
              <Dropdown checkboxes={true} bulk={value} options={options} fetchOptions={fetchOptions}/>
            </div>
          );
        })
      }
    </div>
  )
}`;

export default {
  title: 'Atoms|Dropdown/Variants',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
