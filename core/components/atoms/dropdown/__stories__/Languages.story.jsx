import * as React from 'react';
import Dropdown from '../Dropdown';
import Label from '@/components/atoms/label';
import { Uncontrolled, Controlled } from './_common_/types';

// CSF format story
export const languages = () => {
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
    },
  ];
  return (
    <div className="mb-11 w-25">
      <Label withInput={true}>Select Language</Label>
      <Dropdown options={options} />
    </div>
  );
};

export default {
  title: 'Components/Dropdown (Deprecated)/Languages',
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
