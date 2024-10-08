import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Dropdown, Input, Tab } from '@/index';

// CSF format story
export const inlineContent = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

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
    setActiveIndex(tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6">
      <Tab label="All" count={12} className="pl-5">
        <div>All</div>
      </Tab>
      <Tab label="Active" count={6} className="pl-5">
        <div>Active User</div>
      </Tab>
      <Tab label="Inactive" count={3} className="pl-5">
        <div>Inactive User</div>
      </Tab>
      <Tab label="Locked" count={2} className="pl-5">
        <div>Locked</div>
      </Tab>
      <Tab label="New Account" count={1} className="pl-5">
        <div>New Account</div>
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
  const [activeIndex, setActiveIndex] = React.useState(0);

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

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  return(
    <Tabs
      onTabChange={onTabChangeHandler}
      className="mb-6"
      activeIndex={activeIndex}
    >
      <Tab label="All" count={12} className="pl-5">
        <div>All</div>
      </Tab>
      <Tab label="Active" count={6} className="pl-5">
        <div>Active User</div>
      </Tab>
      <Tab label="Inactive" count={3} className="pl-5">
        <div>Inactive User</div>
      </Tab>
      <Tab label="Locked" count={2} className="pl-5">
        <div>Locked</div>
      </Tab>
      <Tab label="New Account" count={1} className="pl-5">
        <div>New Account</div>
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
  title: 'Components/Tabs/Overflow Tab/Inline Content',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
