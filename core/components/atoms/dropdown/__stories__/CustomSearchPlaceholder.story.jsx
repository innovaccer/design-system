import * as React from 'react';
import Dropdown from '../Dropdown';
import Label from '@/components/atoms/label';

// CSF format story
export const customSearchPlaceholder = () => {
  const options = [
    {
      label: 'Male',
      value: 'Male',
    },
    {
      label: 'Female',
      value: 'Female',
    },
    {
      label: 'Transgender',
      value: 'Transgender',
    },
    {
      label: 'Others',
      value: 'Others',
    },
  ];
  return (
    <div className="mb-10 w-25">
      <Label withInput={true}>Gender</Label>
      <Dropdown options={options} searchPlaceholder="Search Gender" withSearch={true} />
    </div>
  );
};

export default {
  title: 'Components/Dropdown (Deprecated)/Custom Search Placeholder',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        isDeprecated: true,
        title: 'Dropdown',
        props: {
          exclude: ['showHead'],
        },
      },
    },
  },
};
