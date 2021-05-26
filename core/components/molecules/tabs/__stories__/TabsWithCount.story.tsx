import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Tabs, Heading, Dropdown, Button, Input } from '@/index';

// CSF format story
export const tabsWithCount = () => {
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

  const tabs = [
    {
      count: 12,
      label: 'All'
    },
    {
      count: 3,
      label: 'Active'
    },
    {
      count: 9,
      label: 'Inactive'
    },
  ];

  const onTabChangeHandler = (tabIndex: number) => {
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <Heading size="m">Strategy</Heading>
        <Button appearance="primary">New Strategy</Button>
      </div>
      <div className="d-flex align-items-center mt-3" style={{ borderBottom: 'var(--border)' }}>
        <Tabs
          tabs={tabs}
          onTabChange={onTabChangeHandler}
        />
        <div style={{ width: 'var(--spacing-9)' }} className="ml-8">
          <Input placeholder="Search by name" icon="search" />
        </div>
        <div style={{ width: 'var(--spacing-8)' }} className="ml-4">
          <Dropdown options={options} placeholder="Sort by" />
        </div>
      </div>
    </div>
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

  const tabs = [
    {
      count: 12,
      label: 'All'
    },
    {
      count: 3,
      label: 'Active'
    },
    {
      count: 9,
      label: 'Inactive'
    },
  ];

  return(
    <div>
      <div className="d-flex justify-content-between">
        <Heading size="m">Strategy</Heading>
        <Button appearance="primary">New Strategy</Button>
      </div>
      <div className="d-flex align-items-center mt-3" style={{ borderBottom: 'var(--border)' }}>
        <Tabs
          tabs={tabs}
          onTabChange={console.log}
        />
        <div style={{ width: 'var(--spacing-9)' }} className="ml-8">
          <Input placeholder="Search by name" icon="search" />
        </div>
        <div style={{ width: 'var(--spacing-8)' }} className="ml-4">
          <Dropdown options={options} placeholder="Sort by" />
        </div>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Tabs/Tabs With Count',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      }
    }
  }
};
