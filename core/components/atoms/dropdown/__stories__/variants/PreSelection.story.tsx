import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { dropdownOptions } from '../../utils/Options';

// CSF format story
export const preSelection = () => {
  const BooleanValue = [true, false];

  const selected = [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 3',
      value: 'Option 3',
    }
  ];

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
              <Text weight="strong">
                {value ? 'Options > 50 ' : 'Options <= 50'}
              </Text>
              <br /><br />
              <Dropdown
                checkboxes={true}
                bulk={value}
                options={options}
                fetchOptions={fetchOptions}
                selected={selected}
              />
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Dropdown/Variants',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown'
      }
    }
  }
};
