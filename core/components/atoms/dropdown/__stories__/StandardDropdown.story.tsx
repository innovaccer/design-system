import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';

const options = [
  {
    label: 'Draft',
    value: 'draft',
  },
  {
    label: 'In Progress',
    value: 'in_progress',
  },
  {
    label: 'Sent',
    value: 'sent',
  },
  {
    label: 'Scheduled',
    value: 'scheduled',
  },
  {
    label: 'Partially Failed',
    value: 'partially_failed',
  },
  {
    label: 'Completely Failed',
    value: 'completely_failed',
  },
];

// CSF format story
export const standardDropdown = () => <Dropdown options={options} className="w-25" placeholder="Status" />;

export default {
  title: 'Components/Dropdown/Standard Dropdown',
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
