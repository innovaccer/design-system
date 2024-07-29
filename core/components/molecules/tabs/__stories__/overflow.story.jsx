import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Tab } from '@/index';

// CSF format story
export const tabLabelOverflow = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6" headerClassName="pl-3">
      <Tab label="All" count={15} className="pl-6">
        <div>All</div>
      </Tab>
      <Tab label="Pending" count={5} className="pl-6">
        <div>Pending</div>
      </Tab>
      <Tab label="A very very very very very long tab label" count={3} className="pl-6">
        <div>A very very very very very long tab label</div>
      </Tab>
      <Tab label="Successful" count={2} className="pl-6">
        <div>Successful</div>
      </Tab>
      <Tab label="Declined" disabled={true} count={5}>
        <div>Declined</div>
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
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6" headerClassName="pl-3">
      <Tab label="All" count={15} className="pl-6">
        <div>All</div>
      </Tab>
      <Tab label="Pending" count={5} className="pl-6">
        <div>Pending</div>
      </Tab>
      <Tab label="A very very very very very long tab label" count={3} className="pl-6">
        <div>A very very very very very long tab label</div>
      </Tab>
      <Tab label="Successful" count={2} className="pl-6">
        <div>Successful</div>
      </Tab>
      <Tab label="Declined" disabled={true} count={5}>
        <div>Declined</div>
      </Tab>
    </Tabs>
  );
}`;

export default {
  title: 'Components/Tabs/Tab Label Overflow',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
