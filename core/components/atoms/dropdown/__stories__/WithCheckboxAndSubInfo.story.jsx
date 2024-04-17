import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';

// CSF format story
export const dropdownItemsWithCheckboxAndSubinfo = () => {
  const options = [
    {
      label: 'Below 18',
      value: 'below_18',
      subInfo: 'People below 18 years old',
    },
    {
      label: '19 - 35',
      value: '19-35',
      subInfo: 'People 19-35 years old',
    },
    {
      label: '36 - 55',
      value: '36-55',
      subInfo: 'People 36-55 years old',
    },
    {
      label: '56 and above',
      value: '56_above',
      subInfo: 'People above 56 years old',
    },
  ];
  return <Dropdown options={options} withCheckbox={true} className="w-25" placeholder="Select" />;
};

export default {
  title: 'Components/Dropdown (Deprecated)/Dropdown Items With Checkbox And Subinfo',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown',
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
        },
      },
    },
  },
};
