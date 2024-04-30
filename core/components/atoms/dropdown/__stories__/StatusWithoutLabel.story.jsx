import * as React from 'react';
import Dropdown from '../Dropdown';
import { Uncontrolled, Controlled } from './_common_/types';

// CSF format story
export const statusWithoutLabel = () => {
  const options = [
    {
      label: 'All',
      value: 'All',
    },
    {
      label: 'Pending',
      value: 'Pending',
    },
    {
      label: 'Completed',
      value: 'Completed',
    },
  ];
  return (
    <div className="mb-11 w-25">
      <Dropdown options={options} placeholder="All Categories" />
    </div>
  );
};

export default {
  title: 'Components/Dropdown (Deprecated)/Status Without Label',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown',
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
