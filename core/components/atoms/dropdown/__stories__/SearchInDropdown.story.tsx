import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';

const options = [
  {
    label: 'Financial',
    value: 'financial',
  },
  {
    label: 'Homeless',
    value: 'homeless',
  },
  {
    label: 'Lack of Benefits',
    value: 'lack_of_benefits',
  },
  {
    label: 'Lack of Employment',
    value: 'lack_of_employment',
  },
  {
    label: 'Lack of Understanding',
    value: 'lack_of_understanding',
  },
];

// CSF format story
export const searchInDropdown = () => (
  <Dropdown options={options} withSearch={true} className="w-25" placeholder="Select barriers" />
);

export default {
  title: 'Components/Dropdown/Search In Dropdown',
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
