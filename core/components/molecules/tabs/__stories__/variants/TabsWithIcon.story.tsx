import * as React from 'react';
import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Tabs } from '@/index';
import { updateKnob } from '@/utils/storybookEventEmitter';

// CSF format story
export const tabsWithIcon = () => {
  const tabs = [
    {
      icon: 'warning',
      label: 'Tab(Recommended)'
    },
    {
      icon: 'check_circle',
      label: 'All'
    },
    {
      icon: 'warning',
      label: 'Extras',
      disabled: true
    },
  ];

  const active = number(
    'active',
    0
  );

  const onTabChangeHandler = (tabIndex: number) => {
    updateKnob('active', tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <Tabs
      tabs={tabs}
      active={active}
      onTabChange={onTabChangeHandler}
    />
  );
};

const customCode = `() => {
  const tabs = [
    {
      icon: 'warning',
      label: 'Tab(Recommended)'
    },
    {
      icon: 'check_circle',
      label: 'All'
    },
    {
      icon: 'warning',
      label: 'Extras',
      disabled: true
    },
  ];

  const [active, setActive] = React.useState(0);

  return(
    <Tabs
      tabs={tabs}
      active={active}
      onTabChange={setActiveIndex}
    />
  );
}`;

export default {
  title: 'Components/Tabs/Variants/Tabs With Icon',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      }
    }
  }
};
