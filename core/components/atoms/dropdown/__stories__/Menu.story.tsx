import * as React from 'react';
import Dropdown from '../Dropdown';
import { Uncontrolled, Controlled } from './_common_/types';

const options = [
  {
    label: 'Edit',
    value: 'edit',
  },
  {
    label: 'Export',
    value: 'export',
  },
  {
    label: 'Delete',
    value: 'delete',
  },
];

// CSF format story
export const dropdownAsMenu = () => (
  <div className="d-flex w-50">
    <Dropdown options={options} menu={true} className="mr-5" align="right" maxWidth={130} />
    <Dropdown options={options} menu={true} align="left" className="mr-5" maxWidth={130} />
  </div>
);

export default {
  title: 'Components/Dropdown/Dropdown As Menu',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown',
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
