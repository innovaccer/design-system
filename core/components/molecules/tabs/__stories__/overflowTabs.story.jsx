import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Tab, Menu, Button } from '@/index';

// CSF format story
export const overflowTabs = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const tabList = [
    {
      label: 'All',
      count: 15,
      disabled: false,
    },
    {
      label: 'Pending',
      count: 5,
      disabled: false,
    },
    {
      label: 'Transferred',
      count: 3,
      disabled: false,
    },
    {
      label: 'Successful',
      count: 2,
      disabled: false,
    },
    {
      label: 'Declined',
      count: 5,
      disabled: true,
    },
    {
      label: 'On Hold',
      count: 25,
      disabled: false,
    },
    {
      label: 'Unsuccessful Transfer',
      count: 3,
      disabled: false,
    },
  ];

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <Tabs
      // tabs={tabList}
      activeIndex={activeIndex}
      onTabChange={onTabChangeHandler}
      className="mb-6"
      headerClassName="pl-3"
      isOverflow={true}
    >
      {/* <Tab label="All" count={15} className="pl-6">
        <div>All</div>
      </Tab>
      <Tab label="Pending" count={5} className="pl-6">
        <div>Pending</div>
      </Tab>
      <Tab label="Transferred" count={3} className="pl-6">
        <div>Transferred</div>
      </Tab>
      <Tab label="Successful" count={2} className="pl-6">
        <div>Successful</div>
      </Tab>
      <Tab label="Declined" disabled={true} count={5}>
        <div>Declined</div>
      </Tab> */}

      {/* <div> */}
        {tabList.map((tabInfo, index) => {
          const { label, count, disabled } = tabInfo;
          return (
            <Tab label={label} disabled={disabled} count={count} className={index === tabInfo.length - 1 ? '' : 'pl-6'}>
              <div>{label}cccccc </div>
            </Tab>
          );
        })}

        <Menu
          trigger={
            <Button
              // ref={moreButtonRef}
              aria-label="More"
              icon="expand_less"
              iconAlign="right"
              appearance="transparent"
              // className={buttonClassName}
            >
              More
            </Button>
          }
        >
          <Menu.List>
            {tabList.map((tabInfo, index) => {
              return <Menu.Item index={index}>{tabInfo.label}</Menu.Item>;
            })}
          </Menu.List>
        </Menu>
      {/* </div> */}
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
      <Tab label="Transferred" count={3} className="pl-6">
        <div>Transferred</div>
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
  title: 'Components/Tabs/Overflow Tabs',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
