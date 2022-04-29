import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Tab } from '@/index';

// CSF format story
export const dismissibleTab = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [hideTab, setHideTab] = React.useState(false);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  const onDismissHandler = (tabInfo) => {
    setHideTab(true);
  };

  return (
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler}>
      {!hideTab && (
        <Tab
          label="Tab(Recommended)"
          count={10}
          isDismissible={true}
          onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
        >
          <div>Tab(Recommended)</div>
        </Tab>
      )}
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
  const [hideTab, setHideTab] = React.useState(false);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  const onDismissHandler = (tabInfo) => {
    setHideTab(true);
  };

  return(
    <Tabs
      activeIndex={activeIndex}
      onTabChange={onTabChangeHandler}
    >
      {!hideTab && (
        <Tab
          label="Tab(Recommended)"
          count={10}
          isDismissible={true}
          onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
        >
          <div>Tab(Recommended)</div>
        </Tab>
      )}
      <Tab label="All" icon="call_received" isDismissible={true} onDismiss={(tabInfo)=>{console.log(tabInfo)}}>
        <div>All</div>
      </Tab>
      <Tab label="Extras" disabled={true} isDismissible={true} onDismiss={(tabInfo)=>{console.log(tabInfo)}}>
        <div>Extras</div>
      </Tab>
    </Tabs>
  );
}`;

export default {
  title: 'Components/Tabs/Dismissible Tab ',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
