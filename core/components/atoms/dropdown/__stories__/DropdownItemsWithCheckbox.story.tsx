import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';

const options = [
  {
    label: 'Below 18',
    value: 'below_18',
  },
  {
    label: '19 - 35',
    value: '19-35',
  },
  {
    label: '36 - 55',
    value: '36-55',
  },
  {
    label: '56 and above',
    value: '56_above',
  },
];

// CSF format story
export const dropdownItemsWithCheckbox = () => (
  <Dropdown options={options} withCheckbox={true} className="w-25" placeholder="Select" />
);

export default {
  title: 'Components/Dropdown/Dropdown Items With Checkbox',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown',
        props: {
          components: { Uncontrolled, Controlled },
        },
      },
    },
  },
};
