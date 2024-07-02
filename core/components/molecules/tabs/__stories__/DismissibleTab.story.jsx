import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Tab } from '@/index';

// CSF format story
export const dismissibleTab = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [dismissList, setDismissList] = React.useState([]);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  const onDismissHandler = (tabInfo) => {
    action(`tab-change: ${tabInfo}`)();
    let newList = [...dismissList];
    newList.push(tabInfo.label);
    setDismissList(newList);
  };

  return (
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6">
      {!dismissList.includes('All') && (
        <Tab label="All" count={15} className="pl-5">
          <div>All</div>
        </Tab>
      )}
      {!dismissList.includes('Pending') && (
        <Tab
          label="Pending"
          className="pl-5"
          count={10}
          isDismissible={true}
          onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
        >
          <div>Pending</div>
        </Tab>
      )}
      {!dismissList.includes('Declined') && (
        <Tab
          label="Declined"
          className="pl-5"
          count={4}
          isDismissible={true}
          onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
        >
          <div>Declined</div>
        </Tab>
      )}
      <Tab label="Successful" disabled={true} count={1} isDismissible={true}>
        <div>Successful</div>
      </Tab>
    </Tabs>
  );
};

const customCode = `() => {
  
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [dismissList, setDismissList] = React.useState([]);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  const onDismissHandler = (tabInfo) => {
    let newList = [...dismissList];
    newList.push(tabInfo.label);
    setDismissList(newList);
  };

  return (
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6">
      {!dismissList.includes('All') && (
        <Tab label="All" count={15} className="pl-5">
          <div>All</div>
        </Tab>
      )}
      {!dismissList.includes('Pending') && (
        <Tab
          label="Pending"
          className="pl-5"
          count={10}
          isDismissible={true}
          onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
        >
          <div>Pending</div>
        </Tab>
      )}
      {!dismissList.includes('Declined') && (
        <Tab
          label="Declined"
          className="pl-5"
          count={4}
          isDismissible={true}
          onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
        >
          <div>Declined</div>
        </Tab>
      )}
      <Tab label="Successful" disabled={true} count={1} isDismissible={true}>
        <div>Successful</div>
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
