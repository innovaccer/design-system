import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';
import Label from '../../label';

const options = [
  {
    label: 'All',
    value: 'all',
    selected: true
  },
  {
    label: 'Draft',
    value: 'draft',
  },
  {
    label: 'In Progress',
    value: 'in_progress',
  },
  {
    label: 'Sent',
    value: 'sent',
  },
  {
    label: 'Scheduled',
    value: 'scheduled',
  },
  {
    label: 'Partially Failed',
    value: 'partially_failed',
  },
  {
    label: 'Completely Failed',
    value: 'completely_failed',
  }
];

// CSF format story
export const labelPositionInDropdown = () => (
  <div>
    <div className="w-25 mb-9">
      <Label withInput={true}>Status</Label>
      <Dropdown
        options={options}
        className="w-100"
        withCheckbox={true}
      />
    </div>
    <Dropdown
      options={options}
      className="w-25"
      inlineLabel="Status"
      withCheckbox={true}
    />
  </div>
);

export default {
  title: 'Components/Dropdown/Label Position In Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown',
        props: {
          components: { Uncontrolled, Controlled },
        }
      }
    }
  }
};
