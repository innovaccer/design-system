import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';

const options = [
  {
    label: 'Lawson, Joy',
    value: 'Lawson_Joy',
    subInfo: 'Patient',
  },
  {
    label: 'West, Sarah',
    value: 'West_Sarah',
    subInfo: 'Primary Care Physician',
  },
  {
    label: 'Powell, Lauren',
    value: 'Powell_Lauren',
    subInfo: 'Care Manager',
  },
];

// CSF format story
export const dropdownItemsWithSubInfo = () => (
  <Dropdown options={options} optionType="WITH_META" className="w-25" placeholder="Select Recipient" />
);

export default {
  title: 'Components/Dropdown/Dropdown Items With Sub Info',
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
