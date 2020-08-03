import * as React from 'react';
import Dropdown from '../Dropdown';
import Label from '@/components/atoms/label';
import { Uncontrolled, Controlled } from './_common_/types';

const options = [
  {
    label: 'Hindi',
    value: 'Hindi',
  },
  {
    label: 'English',
    value: 'English',
  },
  {
    label: 'French',
    value: 'French',
  }
];

// CSF format story
export const languages = () => (
  <div className="mb-11">
    <Label withInput={true}>Select Language</Label>
    <Dropdown
      options={options}
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
