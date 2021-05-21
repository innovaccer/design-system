import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { TabsWrapper, Tab, Text, Badge, Icon } from '@/index';

// CSF format story
export const customTabs = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex: number) => {
    setActiveIndex(tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  return (
    <TabsWrapper
      active={activeIndex}
      onTabChange={onTabChangeHandler}
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
          First Tab
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
          Second Tab
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
          Third Tab
        </div>
      </Tab>
    </TabsWrapper>
  );
};

const customCode = `() => {
  const [activeIndex, setActive] = React.useState(0)
  const onTabChangeHandler = (tabIndex) => {
    setActive(tabIndex)
  };
  return (
    <TabsWrapper
      active={activeIndex}
      onTabChange={onTabChangeHandler}
    >
      <Tab
        label={(
          <>
            <div className="Tab-count">
              <Badge appearance={activeIndex === 0 ? "primary" : "secondary"}>2</Badge>
            </div>
            <Text tabIndex={1} appearance={activeIndex !== 0 ? 'subtle' : 'link'}>Tab(Recommended)</Text>
          </>
        )}
      >
        <div>
          First Tab
        </div>
      </Tab>
      <Tab
        label={(
          <div className='Tab-icon'>
            <Icon name='south_west' appearance={activeIndex === 1 ? 'info' : 'subtle'}/>
            <Text tabIndex={2} appearance={activeIndex !== 1 ? 'subtle' : 'link'}>All</Text>
          </div>
        )}
      >
        <div>
          Second Tab
        </div>
      </Tab>
      <Tab
        label={(
          <>
            <Text tabIndex={3} appearance={activeIndex !== 2 ? 'subtle' : undefined}>Extras</Text>
          </>
        )}
        disabled={true}
      >
        <div>
          Third Tab
        </div>
      </Tab>
    </TabsWrapper>
  );
}`;

export default {
  title: 'Components/Tabs/Variants/Custom Tabs',
  component: TabsWrapper,
  subcomponents: { Tab },
  parameters: {
    docs: {
      docPage: {
        customCode,
      }
    }
  }
};
