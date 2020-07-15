import * as React from 'react';
import Dropdown from '../Dropdown';

const options = [
  {
    label: 'Male',
    value: 'Male',
  },
  {
    label: 'Female',
    value: 'Female',
  }
];

// CSF format story
export const menu = () => (
  <div className="ml-11 mb-10" style={{ width: '128px' }}>
    <Dropdown
      options={options}
      menu={true}
      align="left"
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
