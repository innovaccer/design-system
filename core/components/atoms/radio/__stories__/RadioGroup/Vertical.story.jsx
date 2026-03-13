import * as React from 'react';
import { ChoiceList, Radio } from '@/index';

// CSF format story
export const vertical = () => {
  return (
    <ChoiceList
      choices={[
        { label: 'Male', name: 'gender', value: 'Male', 'aria-label': 'Male' },
        { label: 'Female', name: 'gender', value: 'Female', 'aria-label': 'Female' },
        { label: 'Other', name: 'gender', value: 'Other', 'aria-label': 'Other' },
      ]}
      title="Gender"
      aria-label="Gender selection"
    />
  );
};

export default {
  title: 'Components/Radio/RadioGroup/Vertical',
  component: Radio,
  subcomponents: { ChoiceList },
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
