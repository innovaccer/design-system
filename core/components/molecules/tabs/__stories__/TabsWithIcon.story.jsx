import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Heading, Link, Tab } from '@/index';

// CSF format story
export const tabsWithIcon = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
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
      <Tabs onTabChange={onTabChangeHandler} className="mb-6" activeIndex={activeIndex}>
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
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  return(
    <div>
      <div className="d-flex align-items-center">
        <Heading size="s" className="pl-5">Diabetes: Hemoglobin A1c Poor Control</Heading>
        <Link className="ml-4">Measure definition</Link>
      </div>
      <Tabs
        activeIndex={activeIndex}
        onTabChange={onTabChangeHandler}
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
  title: 'Components/Tabs/Tabs With Icon',
  component: Tabs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
