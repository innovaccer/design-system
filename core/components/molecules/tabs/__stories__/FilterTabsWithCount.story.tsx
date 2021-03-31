import * as React from 'react';
import TabsWrapper from '../TabsWrapper';
import Tab from '../Tab';
import Text from '@/components/atoms/text';
import Pills from '@/components/atoms/pills';

// CSF format story
export const filterTabsWithCount = () => {
  const [active, setActive] = React.useState(0);

  const onTabChangeHandler = (tabIndex: number) => {
    setActive(tabIndex);
  };

  return (
    <TabsWrapper
      active={active}
      onTabChange={onTabChangeHandler}
    >
      <Tab
        label={(
          <>
            <div className="mr-5">
              <Pills appearance="secondary">11</Pills>
            </div>
            <Text appearance={active !== 0 ? 'subtle' : undefined}>Filter #1</Text>
          </>
        )}
      >
        <div>
          First Tab
        </div>
      </Tab>
      <Tab
        label={(
          <>
            <div className="mr-5">
              <Pills appearance="secondary">12</Pills>
            </div>
            <Text appearance={active !== 1 ? 'subtle' : undefined}>Filter #2</Text>
          </>
        )}
      >
        <div>
          Second Tab
        </div>
      </Tab>
      <Tab
        label={(
          <>
            <div className="mr-5">
              <Pills appearance="secondary">13</Pills>
            </div>
            <Text appearance={active !== 2 ? 'subtle' : undefined}>Filter #3</Text>
          </>
        )}
      >
        <div>
          Third Tab
        </div>
      </Tab>
      <Tab
        label={(
          <>
            <div className="mr-5">
              <Pills appearance="secondary">14</Pills>
            </div>
            <Text appearance={active !== 3 ? 'subtle' : undefined}>Filter #4</Text>
          </>
        )}
      >
        <div>
          Fourth Tab
        </div>
      </Tab>
      <Tab
        label={(
          <>
            <div className="mr-5">
              <Pills appearance="secondary">15</Pills>
            </div>
            <Text appearance={active !== 4 ? 'subtle' : undefined}>Filter #5</Text>
          </>
        )}
      >
        <div>
          Fifth Tab
        </div>
      </Tab>
    </TabsWrapper>
  );
};

const customCode = `() => {
  const [active, setActive] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActive(tabIndex);
  };

  return (
    <TabsWrapper
      active={active}
      onTabChange={onTabChangeHandler}
    >
      <Tab
        label={(
          <>
            <div className="mr-5">
              <Pills appearance="secondary">11</Pills>
            </div>
            <Text appearance={active !== 0 ? 'subtle' : undefined}>Filter #1</Text>
          </>
        )}
      >
        <div>
          First Tab
        </div>
      </Tab>
      <Tab
        label={(
          <>
            <div className="mr-5">
              <Pills appearance="secondary">12</Pills>
            </div>
            <Text appearance={active !== 1 ? 'subtle' : undefined}>Filter #2</Text>
          </>
        )}
      >
        <div>
          Second Tab
        </div>
      </Tab>
      <Tab
        label={(
          <>
            <div className="mr-5">
              <Pills appearance="secondary">13</Pills>
            </div>
            <Text appearance={active !== 2 ? 'subtle' : undefined}>Filter #3</Text>
          </>
        )}
      >
        <div>
          Third Tab
        </div>
      </Tab>
      <Tab
        label={(
          <>
            <div className="mr-5">
              <Pills appearance="secondary">14</Pills>
            </div>
            <Text appearance={active !== 3 ? 'subtle' : undefined}>Filter #4</Text>
          </>
        )}
      >
        <div>
          Fourth Tab
        </div>
      </Tab>
      <Tab
        label={(
          <>
            <div className="mr-5">
              <Pills appearance="secondary">15</Pills>
            </div>
            <Text appearance={active !== 4 ? 'subtle' : undefined}>Filter #5</Text>
          </>
        )}
      >
        <div>
          Fifth Tab
        </div>
      </Tab>
    </TabsWrapper>
  );
}`;

export default {
  title: 'Components/Tabs/Filter Tabs With Count',
  component: TabsWrapper,
  subcomponents: { Tab },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Tabs'
      }
    }
  }
};
