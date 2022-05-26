import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Tab } from '@/index';

// CSF format story
export const all = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6">
      <Tab label="Tab(Recommended)" count={10}>
        <div>Tab(Recommended)</div>
      </Tab>
      <Tab label="All" icon="call_received">
        <div>All</div>
      </Tab>
      <Tab label="Extras" disabled={true}>
        <div>Extras</div>
      </Tab>
    </Tabs>
  );
};

const customCode = `() => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  return(
    <Tabs
      activeIndex={activeIndex}
      onTabChange={onTabChangeHandler}
      className="mb-6"
    >
      <Tab label="Tab(Recommended)" count={10}>
        <div>Tab(Recommended)</div>
      </Tab>
      <Tab label="All" icon="call_received">
        <div>All</div>
      </Tab>
      <Tab label="Extras" disabled={true}>
        <div>Extras</div>
      </Tab>
    </Tabs>
  );
}`;

export default {
  title: 'Components/Tabs/All',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
