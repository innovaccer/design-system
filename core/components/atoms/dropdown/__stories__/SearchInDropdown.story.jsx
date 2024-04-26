import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';

// CSF format story
export const searchInDropdown = () => {
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
  return <Dropdown options={options} withSearch={true} className="w-25" placeholder="Select barriers" />;
};

export default {
  title: 'Components/Dropdown (Deprecated)/Search In Dropdown',
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
