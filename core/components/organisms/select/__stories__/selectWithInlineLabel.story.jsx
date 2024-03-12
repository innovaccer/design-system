import * as React from 'react';
import { Select } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const withInlineLabel = () => {
  const colourList = [
    { label: 'Red', value: 'Color_Red' },
    { label: 'Blue', value: 'Color_Blue' },
    { label: 'Green', value: 'Color_Green' },
    { label: 'Yellow', value: 'Color_Yellow' },
    { label: 'Orange', value: 'Color_Orange' },
    { label: 'Purple', value: 'Color_Purple' },
    { label: 'Pink', value: 'Color_Pink' },
    { label: 'Black', value: 'Color_Black' },
    { label: 'White', value: 'Color_White' },
    { label: 'Brown', value: 'Color_Brown' },
  ];

  const onSelectHandler = (selectedOption) => {
    action('selectedOption', selectedOption);
  };

  return (
    <Select triggerOptions={{ inlineLabel: 'colour', placeholder: 'Select' }} onSelect={onSelectHandler}>
      <Select.List>
        {colourList.map((item, key) => {
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
  const colourList = [
    { label: 'Red', value: 'Color_Red' },
    { label: 'Blue', value: 'Color_Blue' },
    { label: 'Green', value: 'Color_Green' },
    { label: 'Yellow', value: 'Color_Yellow' },
    { label: 'Orange', value: 'Color_Orange' },
    { label: 'Purple', value: 'Color_Purple' },
    { label: 'Pink', value: 'Color_Pink' },
    { label: 'Black', value: 'Color_Black' },
    { label: 'White', value: 'Color_White' },
    { label: 'Brown', value: 'Color_Brown' },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };


  return (
    <Select triggerOptions={{ inlineLabel: 'colour', placeholder: 'Select' }} onSelect={onSelectHandler}>
      <Select.List>
        {colourList.map((item, key) => {
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
  title: 'Components/Select/WithInlineLabel',
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
