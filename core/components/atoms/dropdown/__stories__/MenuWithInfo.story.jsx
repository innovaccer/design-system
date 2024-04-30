import * as React from 'react';
import Dropdown from '../Dropdown';
import { Uncontrolled, Controlled } from './_common_/types';

// CSF format story
export const dropdownAsMenuWithSubinfo = () => {
  const options = [
    { label: 'Below 18', subInfo: 'People below 18 years old', value: 'below_18', optionType: 'WITH_META' },
    { label: '19 - 35', subInfo: 'People 19-35 years old', value: '19-35', optionType: 'WITH_META' },
    { label: '36 - 55', subInfo: 'People 36-55 years old', value: '36-55', optionType: 'WITH_META' },
    { label: '56 and above', subInfo: 'People above 56 years old', value: '56_above', optionType: 'WITH_META' },
  ];
  return (
    <div className="d-flex w-50">
      <Dropdown options={options} menu={true} className="mr-5" align="right" />
      <Dropdown options={options} menu={true} className="mr-5" align="right" />
    </div>
  );
};

export default {
  title: 'Components/Dropdown (Deprecated)/Dropdown As Menu With Subinfo',
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
