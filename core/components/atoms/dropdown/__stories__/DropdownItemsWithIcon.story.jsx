import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';

// CSF format story
export const dropdownItemsWithIcon = () => {
  const options = [
    {
      label: 'Not yet helped',
      value: 'not_yet_helped',
      icon: 'more_horiz',
    },
    {
      label: 'Eligible',
      value: 'eligible',
      icon: 'add',
    },
    {
      label: 'Not Eligible',
      value: 'not_eligible',
      icon: 'horizontal_rule',
    },
    {
      label: 'Got help',
      value: 'got_help',
      icon: 'check',
    },
  ];
  return <Dropdown options={options} optionType="WITH_ICON" className="w-25" placeholder="Select status" />;
};

export default {
  title: 'Components/Dropdown (Deprecated)/Dropdown Items With Icon',
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
