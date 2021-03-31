import * as React from 'react';
import Dropdown from '../Dropdown';
import { Uncontrolled, Controlled } from './_common_/types';

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
  <div className="ml-11 mb-10">
    <Dropdown
      options={options}
      menu={true}
      align="left"
      maxWidth={130}
    />
  </div>
);

export default {
  title: 'Components/Dropdown/Menu',
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
