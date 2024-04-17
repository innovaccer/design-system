import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Heading, Link, Tab } from '@/index';

// CSF format story
export const tabsWithIcon = () => {
  const onTabChangeHandler = (tabIndex) => {
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <div>
      <div className="d-flex align-items-center">
        <Heading size="s" className="pl-5">
          Diabetes: Hemoglobin A1c Poor Control
        </Heading>
        <Link className="ml-4">Measure definition</Link>
      </div>
      <Tabs onTabChange={onTabChangeHandler} className="mb-6">
        <Tab label="2020" icon="warning" className="pl-5">
          <div>2020</div>
        </Tab>
        <Tab label="2019" icon="check_circle" className="pl-5">
          <div>2019</div>
        </Tab>
        <Tab label="2018" icon="warning" className="pl-5">
          <div>2018</div>
        </Tab>
        <Tab label="2017" icon="check_circle" className="pl-5">
          <div>2017</div>
        </Tab>
      </Tabs>
    </div>
  );
};

const customCode = `() => {
  return(
    <div>
      <div className="d-flex align-items-center">
        <Heading size="s" className="pl-5">Diabetes: Hemoglobin A1c Poor Control</Heading>
        <Link className="ml-4">Measure definition</Link>
      </div>
      <Tabs
        onTabChange={console.log}
        className="mb-6"
      >
        <Tab label="2020" icon="warning" className="pl-5">
          <div>2020</div>
        </Tab>
        <Tab label="2019" icon="check_circle" className="pl-5">
          <div>2019</div>
        </Tab>
        <Tab label="2018" icon="warning" className="pl-5">
          <div>2018</div>
        </Tab>
        <Tab label="2017" icon="check_circle" className="pl-5">
          <div>2017</div>
        </Tab>
      </Tabs>
    </div>
  );
}`;

export default {
  title: 'Components/Navigation/Tabs/Tabs With Icon',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
