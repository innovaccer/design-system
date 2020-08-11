import * as React from 'react';
import Dropdown from '../Dropdown';
import { Uncontrolled, Controlled } from './_common_/types';

const options = [
  {
    label: 'All',
    value: 'All',
    selected: true,
  },
  {
    label: 'Pending',
    value: 'Pending',
  },
  {
    label: 'Completed',
    value: 'Completed',
  }
];

// CSF format story
export const statusWithLabel = () => (
  <div className="mb-11">
    <Dropdown
      options={options}
      inlineLabel="Status"
      width={170}
    />
  </div>
);

export default {
  title: 'Atoms|Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown',
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead']
        }
      }
    }
  }
};
