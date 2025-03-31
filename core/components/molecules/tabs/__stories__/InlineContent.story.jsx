import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Select, Input, Tab } from '@/index';

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
      <Tab label="Active User" count={3} className="pl-5">
        <div>Active User</div>
      </Tab>
      <Tab label="Inactive User" count={9} className="pl-5">
        <div>Inactive User</div>
      </Tab>
      <div className="d-flex justify-content-end flex-grow-1">
        <div style={{ width: 'var(--spacing-640)' }} className="ml-8">
          <Input placeholder="Search by name" icon="search" />
        </div>
        <div style={{ width: 'var(--spacing-440)' }} className="ml-4">
          <Select
            triggerOptions={{
              withClearButton: false,
              placeholder: 'Sort by',
            }}
          >
            <Select.List>
              {options.map((item, key) => {
                return (
                  <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                    {item.label}
                  </Select.Option>
                );
              })}
            </Select.List>
          </Select>
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
      <Tab label="Active User" count={3} className="pl-5">
        <div>Active User</div>
      </Tab>
      <Tab label="Inactive User" count={9} className="pl-5">
        <div>Inactive User</div>
      </Tab>
      <div className="d-flex justify-content-end flex-grow-1">
        <div style={{ width: 'var(--spacing-640)' }} className="ml-8">
          <Input placeholder="Search by name" icon="search" />
        </div>
        <div style={{ width: 'var(--spacing-440)' }} className="ml-4">
          <Select
            triggerOptions={{ 
              withClearButton: false,
              placeholder: 'Sort by',
            }}
          >
            <Select.List>
              {options.map((item, key) => {
                return (
                  <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                    {item.label}
                  </Select.Option>
                )
              })}
            </Select.List>
          </Select>
        </div>
      </div>
    </Tabs>
  );
}`;

export default {
  title: 'Components/Tabs/Inline Content',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
