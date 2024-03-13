import * as React from 'react';
import { Select } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const selectWithIcon = () => {
  const stateAbbreviations = [
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'California', value: 'CA' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Illinois', value: 'IL' },
  ];

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption);
  };

  return (
    <Select triggerOptions={{ icon: 'location_on', placeholder: 'Select state' }} onSelect={onSelectHandler}>
      <Select.List>
        {stateAbbreviations.map((item, key) => {
          return (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select.List>
    </Select>
  );
};

const customCode = `() => {
  const stateAbbreviations = [
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'California', value: 'CA' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Illinois', value: 'IL' },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };


  return (
    <Select triggerOptions={{ icon: 'location_on', placeholder: 'Select state' }} onSelect={onSelectHandler}>
      <Select.List>
        {stateAbbreviations.map((item, key) => {
          return (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select.List>
    </Select>
  );
}`;

export default {
  title: 'Components/Select/SelectWithIcon',
  component: Select,
  subcomponents: {
    'Select.List': Select.List,
    'Select.Option': Select.Option,
    'Select.SearchInput': Select.SearchInput,
    'Select.EmptyTemplate': Select.EmptyTemplate,
    'Select.Footer': Select.Footer,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'Select',
        customCode,
      },
    },
  },
};
