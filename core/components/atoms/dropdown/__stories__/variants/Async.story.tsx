import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { dropdownOptions } from '../../utils/Options';

// CSF format story
export const async = () => {
  const BooleanValue = [true, false];

  const getSearchedOptions = (options: any, searchTerm: string) => {
    const result = options.filter((option: any) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const loadMoreOptions = (offset: number, optionsLimit: number, searchTerm: string) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise<any>(resolve => {
      setTimeout(() => {
        resolve({
          offset,
          options: searchedOptions.slice(offset, offset + optionsLimit),
          length: searchedOptions.length,
        });
      }, 2000);
    });
  };

  return (
    <div style={{ display: 'flex', minHeight: '280px' }}>
      {
        BooleanValue.map((value, ind) => {
          return (
            <div key={ind} style={{ marginRight: '10%', width: '128px' }}>
              <Text weight="strong">{value ? 'With Async' : 'Without Async'}</Text> <br /><br />
              <Dropdown async={value} options={dropdownOptions} loadMoreOptions={loadMoreOptions}/>
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
