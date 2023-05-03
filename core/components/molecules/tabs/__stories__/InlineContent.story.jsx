import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Dropdown, Input, Tab } from '@/index';

// CSF format story
export const inlineContent = () => {
  const options = [
    {
      label: 'Increasing',
      value: 'Increasing',
    },
    {
      label: 'Decreasing',
      value: 'Decreasing',
    },
  ];

  const onTabChangeHandler = (tabIndex) => {
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <Tabs onTabChange={onTabChangeHandler} className="mb-6">
      <Tab label="All" count={12}>
        <div>All</div>
      </Tab>
      <Tab label="Active" count={3}>
        <div>Active</div>
      </Tab>
      <Tab label="Inactive" count={9}>
        <div>Inactive</div>
      </Tab>
      <div className="d-flex justify-content-end flex-grow-1">
        <div style={{ width: 'var(--spacing-9)' }} className="ml-8">
          <Input placeholder="Search by name" icon="search" />
        </div>
        <div style={{ width: 'var(--spacing-8)' }} className="ml-4">
          <Dropdown options={options} placeholder="Sort by" />
        </div>
      </div>
    </Tabs>
  );
};

const customCode = `() => {
  const options = [
    {
      label: 'Increasing',
      value: 'Increasing',
    },
    {
      label: 'Decreasing',
      value: 'Decreasing'
    },
  ];

  return(
    <Tabs
      onTabChange={console.log}
      className="mb-6"
    >
      <Tab label="All" count={12}>
        <div>All</div>
      </Tab>
      <Tab label="Active" count={3}>
        <div>Active</div>
      </Tab>
      <Tab label="Inactive" count={9}>
        <div>Inactive</div>
      </Tab>
      <div className="d-flex justify-content-end flex-grow-1">
        <div style={{ width: 'var(--spacing-9)' }} className="ml-8">
          <Input placeholder="Search by name" icon="search" />
        </div>
        <div style={{ width: 'var(--spacing-8)' }} className="ml-4">
          <Dropdown options={options} placeholder="Sort by" />
        </div>
      </div>
    </Tabs>
  );
}`;

export default {
  title: 'Navigation/Tabs/Inline Content',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
