import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Tabs, Heading, Dropdown, Tab } from '@/index';

// CSF format story
export const basicTabs = () => {
  const options = [
    {
      label: 'Feb 9, 2019 (recent)',
      value: 'Feb 9, 2019 (recent)',
      selected: true
    },
    {
      label: 'Feb 10, 2019',
      value: 'Feb 10, 2019'
    },
    {
      label: 'Feb 11, 2019',
      value: 'Feb 11, 2019'
    },
    {
      label: 'Feb 12, 2019',
      value: 'Feb 12, 2019'
    },
    {
      label: 'Feb 13, 2019',
      value: 'Feb 13, 2019'
    }
  ];

  const onTabChangeHandler = (tabIndex: number) => {
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <Heading size="m">Data Gaps</Heading>
        <div style={{ width: 'var(--spacing-8)' }}>
          <Dropdown options={options} />
        </div>
      </div>
      <Tabs
        onTabChange={onTabChangeHandler}
      >
        <Tab
          label="Clinical Gaps"
        >
          <div>
            Clinical Gaps
          </div>
        </Tab>
        <Tab
          label="Billing Gaps"
        >
          <div>
            Billing Gaps
          </div>
        </Tab>
        <Tab
          label="Claim Gaps"
          disabled={true}
        >
          <div>
            Claim Gaps
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

const customCode = `() => {
  const options = [
    {
      label: 'Feb 9, 2019 (recent)',
      value: 'Feb 9, 2019 (recent)',
      selected: true
    },
    {
      label: 'Feb 10, 2019',
      value: 'Feb 10, 2019'
    },
    {
      label: 'Feb 11, 2019',
      value: 'Feb 11, 2019'
    },
    {
      label: 'Feb 12, 2019',
      value: 'Feb 12, 2019'
    },
    {
      label: 'Feb 13, 2019',
      value: 'Feb 13, 2019'
    }
  ];

  return(
    <div>
      <div className="d-flex justify-content-between">
        <Heading size="m">Data Gaps</Heading>
        <div style={{width: 'var(--spacing-8)'}}>
          <Dropdown options={options} />
        </div>
      </div>
      <Tabs>
        <Tab
          label="Clinical Gaps"
        >
          <div>
            Clinical Gaps
          </div>
        </Tab>
        <Tab
          label="Billing Gaps"
        >
          <div>
            Billing Gaps
          </div>
        </Tab>
        <Tab
          label="Claim Gaps"
          disabled={true}
        >
          <div>
            Claim Gaps
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}`;

export default {
  title: 'Components/Tabs/Basic Tabs',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      }
    }
  }
};
