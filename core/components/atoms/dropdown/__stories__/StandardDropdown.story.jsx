/* eslint-env browser */

import * as React from 'react';
import { Dropdown } from '@/index';
import { Uncontrolled, Controlled } from './_common_/types';

// CSF format story
export const standardDropdown = () => {
  const options = [
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
    },
  ];
  return <Dropdown options={options} className="w-25" placeholder="Status" aria-label="Select status" />;
};

export const DisabledWhileOpen = () => {
  const [scheduled, setScheduled] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    if (!scheduled) return;

    const timer = window.setTimeout(() => setDisabled(true), 3000);
    return () => window.clearTimeout(timer);
  }, [scheduled]);

  const options = [
    { label: 'Apple', value: 'apple', selected: true },
    { label: 'Orange', value: 'orange' },
  ];

  return (
    <>
      <button type="button" onClick={() => setScheduled(true)} disabled={scheduled}>
        Disable in 3 seconds
      </button>
      <Dropdown options={options} disabled={disabled} />
    </>
  );
};

export default {
  title: 'Components/Dropdown (Deprecated)/Standard Dropdown',
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
