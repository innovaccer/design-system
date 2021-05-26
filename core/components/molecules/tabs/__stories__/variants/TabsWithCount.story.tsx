import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Tabs } from '@/index';

// CSF format story
export const tabsWithCount = () => {
  const tabs = [
    {
      count: 10,
      label: 'Tab(Recommended)'
    },
    {
      count: 12,
      label: 'All'
    },
    {
      count: 9,
      label: 'Extras',
      disabled: true
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex: number) => {
    setActiveIndex(tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <Tabs
      tabs={tabs}
      activeIndex={activeIndex}
      onTabChange={onTabChangeHandler}
    />
  );
};

const customCode = `() => {
  const tabs = [
    {
      count: 10,
      label: 'Tab(Recommended)'
    },
    {
      count: 12,
      label: 'All'
    },
    {
      count: 9,
      label: 'Extras',
      disabled: true
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  return(
    <Tabs
      tabs={tabs}
      activeIndex={activeIndex}
      onTabChange={setActiveIndex}
    />
  );
}`;

export default {
  title: 'Components/Tabs/Variants/Tabs With Count',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      }
    }
  }
};
