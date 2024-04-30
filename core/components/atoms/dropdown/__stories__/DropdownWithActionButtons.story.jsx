import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';

// CSF format story
export const dropdownWithActionButtons = () => {
  const options = [
    {
      label: 'Cardiovascular',
      value: 'Cardiovascular',
    },
    {
      label: 'Communication impediments: hearing and vision loss, low literacy',
      value: 'Communication impediments: hearing and vision loss, low literacy',
    },
    {
      label: 'Community resource availability',
      value: 'Community resource availability',
    },
    {
      label: 'Depression and anxiety screenings',
      value: 'Depression and anxiety screenings',
    },
    {
      label: 'Obesity',
      value: 'Obesity',
    },
    {
      label: 'Diabetes',
      value: 'Diabetes',
    },
    {
      label: 'Gastrointestinal system',
      value: 'Gastrointestinal system',
    },
    {
      label: 'Patient has suicidal thoughts',
      value: 'Patient has suicidal thoughts',
    },
    {
      label: 'LTSS needs',
      value: 'LTSS needs',
    },
    {
      label: 'Medication regimen',
      value: 'Medication regimen',
    },
  ];
  return (
    <Dropdown
      options={options}
      withSearch={true}
      className="w-25"
      placeholder="Select problem"
      withCheckbox={true}
      showApplyButton={true}
    />
  );
};

export default {
  title: 'Components/Dropdown (Deprecated)/Dropdown With Action Buttons',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown',
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
        },
      },
    },
  },
};
