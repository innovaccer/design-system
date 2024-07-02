import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Tab, Text } from '@/index';

// CSF format story
export const size = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <div className="d-flex w-100">
      <div className="d-flex flex-column">
        <Text weight="strong" className="mb-5">
          Regular
        </Text>
        <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6 mr-10" headerClassName="pl-3">
          <Tab label="All" count={15} className="pl-6">
            <div>All</div>
          </Tab>
          <Tab label="Successful" count={5} className="pl-6">
            <div>Successful</div>
          </Tab>
          <Tab label="Declined" count={10} className="pl-6">
            <div>Declined</div>
          </Tab>
        </Tabs>
      </div>

      <div className="d-flex flex-column">
        <Text weight="strong" className="mb-5">
          Small
        </Text>
        <Tabs
          size="small"
          activeIndex={activeIndex}
          onTabChange={onTabChangeHandler}
          className="mb-6"
          headerClassName="pl-3"
        >
          <Tab label="All" count={15} className="pl-6">
            <div>All</div>
          </Tab>
          <Tab label="Successful" count={5} className="pl-6">
            <div>Successful</div>
          </Tab>
          <Tab label="Declined" count={10} className="pl-6">
            <div>Declined</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

const customCode = `
  () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const onTabChangeHandler = (tabIndex) => {
      setActiveIndex(tabIndex);
    };

    return (
      <div className="d-flex w-100">
        <div className="d-flex flex-column">
          <Text weight="strong" className="mb-5">
            Regular
          </Text>
          <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6 mr-10" headerClassName="pl-3">
            <Tab label="All" count={15} className="pl-6">
              <div>All</div>
            </Tab>
            <Tab label="Successful" count={5} className="pl-6">
              <div>Successful</div>
            </Tab>
            <Tab label="Declined" count={10} className="pl-6">
              <div>Declined</div>
            </Tab>
          </Tabs>
        </div>

        <div className="d-flex flex-column">
          <Text weight="strong" className="mb-5">
            Small
          </Text>
          <Tabs
            size="small"
            activeIndex={activeIndex}
            onTabChange={onTabChangeHandler}
            className="mb-6"
            headerClassName="pl-3"
          >
            <Tab label="All" count={15} className="pl-6">
              <div>All</div>
            </Tab>
            <Tab label="Successful" count={5} className="pl-6">
              <div>Successful</div>
            </Tab>
            <Tab label="Declined" count={10} className="pl-6">
              <div>Declined</div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
`;

export default {
  title: 'Components/Tabs/Size',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
