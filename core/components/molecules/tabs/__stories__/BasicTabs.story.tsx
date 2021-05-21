import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Tabs, Heading, Dropdown } from '@/index';

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

  const tabs = [
    {
      label: 'Clinical Gaps'
    },
    {
      label: 'Claim Gaps'
    },
    {
      label: 'Billing Gaps'
    },
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
        tabs={tabs}
        withSeperator={true}
        onTabChange={onTabChangeHandler}
      />
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

  const tabs = [
    {
      label: 'Clinical Gaps'
    },
    {
      label: 'Claim Gaps'
    },
    {
      label: 'Billing Gaps'
    },
  ];

  return(
    <div>
      <div className="d-flex justify-content-between">
        <Heading size="m">Data Gaps</Heading>
        <div style={{width: 'var(--spacing-8)'}}>
          <Dropdown options={options} />
        </div>
      </div>
      <Tabs
        tabs={tabs}
        withSeperator={true}
        onTabChange={console.log}
      />
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
