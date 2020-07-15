import * as React from 'react';
import Dropdown from '../Dropdown';

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
  }
];

// CSF format story
export const statusWithoutLabel = () => (
  <div className="mb-11">
    <Dropdown
      options={options}
      placeholder="All Categories"
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
        title: 'Dropdown'
      }
    }
  }
};
