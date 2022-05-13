import * as React from 'react';
import { action } from '@/utils/action';
import { Tabs, Tab, Text, Badge, Icon } from '@/index';

// CSF format story
export const customLabels = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6">
      <Tab
        label={
          <>
            <div className="Tab-count">
              <Badge appearance={activeIndex === 0 ? 'primary' : 'secondary'}>2</Badge>
            </div>
            <Text appearance={activeIndex !== 0 ? 'subtle' : 'link'}>Tab(Recommended)</Text>
          </>
        }
      >
        <div>Tab(Recommended)</div>
      </Tab>
      <Tab
        label={
          <div className="Tab-icon">
            <Icon name="south_west" appearance={activeIndex === 1 ? 'info' : 'subtle'} />
            <Text appearance={activeIndex !== 1 ? 'subtle' : 'link'}>All</Text>
          </div>
        }
      >
        <div>All</div>
      </Tab>
      <Tab
        label={
          <>
            <Text appearance={activeIndex !== 2 ? 'subtle' : undefined}>Extras</Text>
          </>
        }
        disabled={true}
      >
        <div>Extras</div>
      </Tab>
    </Tabs>
  );
};

const customCode = `() => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
    console.log(\`tab-change: \${tabIndex}\`)();
  };

  return (
    <Tabs
      activeIndex={activeIndex}
      onTabChange={onTabChangeHandler}
      className="mb-6"
    >
      <Tab
        label={(
          <>
            <div className="Tab-count">
              <Badge appearance={activeIndex === 0 ? 'primary' : 'secondary'}>2</Badge>
            </div>
            <Text appearance={activeIndex !== 0 ? 'subtle' : 'link'}>Tab(Recommended)</Text>
          </>
        )}
      >
        <div>
          Tab(Recommended)
        </div>
      </Tab>
      <Tab
        label={(
          <div className="Tab-icon">
            <Icon name="south_west" appearance={activeIndex === 1 ? 'info' : 'subtle'} />
            <Text appearance={activeIndex !== 1 ? 'subtle' : 'link'}>All</Text>
          </div>
        )}
      >
        <div>
          All
        </div>
      </Tab>
      <Tab
        label={(
          <>
            <Text appearance={activeIndex !== 2 ? 'subtle' : undefined}>Extras</Text>
          </>
        )}
        disabled={true}
      >
        <div>
          Extras
        </div>
      </Tab>
    </Tabs>
  );
}`;

export default {
  title: 'Components/Tabs/Custom Labels',
  component: Tabs,
  subcomponents: { Tab },
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
