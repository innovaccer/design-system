import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Tab, Button } from '@/index';

// CSF format story
export const dismissibleTabs = () => {
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
    <div>
      <Button className="mb-7" onClick={() => setDismissList([])}>
        Reset
      </Button>
      <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6" key={dismissList}>
        {!dismissList.includes('All') && (
          <Tab label="All" count={24} className="pl-5">
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
        {!dismissList.includes('Transferred') && (
          <Tab
            label="Transferred"
            className="pl-5"
            count={2}
            isDismissible={true}
            onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
          >
            <div>Transferred</div>
          </Tab>
        )}
        {!dismissList.includes('Unsuccessful Transfer') && (
          <Tab
            label="Unsuccessful Transfer"
            className="pl-5"
            count={3}
            isDismissible={true}
            onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
          >
            <div>Unsuccessful Transfer</div>
          </Tab>
        )}
        {!dismissList.includes('On Hold') && (
          <Tab
            label="On Hold"
            className="pl-5"
            count={4}
            isDismissible={true}
            onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
          >
            <div>On Hold</div>
          </Tab>
        )}
        {!dismissList.includes('Successful') && (
          <Tab label="Successful" count={1} isDismissible={true} onDismiss={(tabInfo) => onDismissHandler(tabInfo)}>
            <div>Successful</div>
          </Tab>
        )}
      </Tabs>
    </div>
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
    <div>
      <Button className="mb-7" onClick={() => setDismissList([])}>
        Reset
      </Button>
      <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6" key={dismissList}>
        {!dismissList.includes('All') && (
          <Tab label="All" count={24} className="pl-5">
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
        {!dismissList.includes('Transferred') && (
          <Tab
            label="Transferred"
            className="pl-5"
            count={2}
            isDismissible={true}
            onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
          >
            <div>Transferred</div>
          </Tab>
        )}
        {!dismissList.includes('Unsuccessful Transfer') && (
          <Tab
            label="Unsuccessful Transfer"
            className="pl-5"
            count={3}
            isDismissible={true}
            onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
          >
            <div>Unsuccessful Transfer</div>
          </Tab>
        )}
        {!dismissList.includes('On Hold') && (
          <Tab
            label="On Hold"
            className="pl-5"
            count={4}
            isDismissible={true}
            onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
          >
            <div>On Hold</div>
          </Tab>
        )}
        {!dismissList.includes('Successful') && (
          <Tab label="Successful" count={1} isDismissible={true} onDismiss={(tabInfo) => onDismissHandler(tabInfo)}>
            <div>Successful</div>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}`;

export default {
  title: 'Components/Tabs/Overflow Tab/Dismissible Tabs',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
