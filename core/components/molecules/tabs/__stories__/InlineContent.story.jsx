import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Dropdown, Input, Tab, Row, Column } from '@/index';

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
    <Row>
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
        <div className="d-flex justify-content-end flex-grow-1 align-items-center">
          <div>
            <Input placeholder="Search by name" icon="search" />
          </div>
          <Column size={3}>
            <div className="ml-4">
              <Dropdown options={options} placeholder="Sort by" />
            </div>
          </Column>
        </div>
      </Tabs>
    </Row>
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
    <Row>
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
        <div className="d-flex justify-content-end flex-grow-1 align-items-center">
          <div>
            <Input placeholder="Search by name" icon="search" />
          </div>
          <Column size={3}>
              <div className="ml-4">
                <Dropdown options={options} placeholder="Sort by" />
              </div>
            </Column>
        </div>
      </Tabs>
    </Row>
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
