import * as React from 'react';
import Dropdown from '../Dropdown';
import Label from '@/components/atoms/label';
import { Uncontrolled, Controlled } from './_common_/types';

// CSF format story
export const gender = () => {
  const options = [
    {
      label: 'Male',
      value: 'Male',
      selected: true,
    },
    {
      label: 'Female',
      value: 'Female',
    },
  ];
  return (
    <div className="mb-10 w-25">
      <Label withInput={true}>Gender</Label>
      <Dropdown options={options} />
    </div>
  );
};

export default {
  title: 'Components/Dropdown (Deprecated)/Gender',
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
