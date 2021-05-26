import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Tabs, Heading, Link } from '@/index';

// CSF format story
export const tabsWithIcon = () => {
  const tabs = [
    {
      icon: 'warning',
      label: '2020'
    },
    {
      icon: 'check_circle',
      label: '2019'
    },
    {
      icon: 'warning',
      label: '2018'
    },
    {
      icon: 'check_circle',
      label: '2017'
    },
  ];

  const onTabChangeHandler = (tabIndex: number) => {
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <div>
      <div className="d-flex align-items-center">
        <Heading size="s">Diabetes: Hemoglobin A1c Poor Control</Heading>
        <Link className="ml-4">Measure definition</Link>
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
  const tabs = [
    {
      icon: 'warning',
      label: '2020'
    },
    {
      icon: 'check_circle',
      label: '2019'
    },
    {
      icon: 'warning',
      label: '2018'
    },
    {
      icon: 'check_circle',
      label: '2017'
    },
  ];

  return(
    <div>
      <div className="d-flex align-items-center">
        <Heading size="s">Diabetes: Hemoglobin A1c Poor Control</Heading>
        <Link className="ml-4">Measure definition</Link>
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
  title: 'Components/Tabs/Tabs With Icon',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      }
    }
  }
};
