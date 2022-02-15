import * as React from 'react';
import PageHeader from '../../PageHeader';
import { Button, Text, Tab, TabsWrapper, Pills } from '@/index';
import { action } from '@storybook/addon-actions';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { number, text, boolean } from '@storybook/addon-knobs';

export const withTabs = () => {
  const active = number('active', 1);
  const separator = boolean('separator', true);
  const title = text('title', 'Page title');

  const onTabChangeHandler = (tabIndex: number) => {
    updateKnob('active', tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  const options = {
    title,
    separator,
    tabs: (
      <TabsWrapper active={active} onTabChange={onTabChangeHandler}>
        <Tab
          label={
            <>
              <div className="Tab-count">
                <Pills appearance="secondary">2</Pills>
              </div>
              <Text appearance={active !== 0 ? 'subtle' : undefined}>Tab 1</Text>
            </>
          }
        >
          {null}
        </Tab>
        <Tab
          label={
            <>
              <div className="Tab-count">
                <Pills appearance="secondary">12</Pills>
              </div>
              <Text appearance={active !== 1 ? 'subtle' : undefined}>Tab 2</Text>
            </>
          }
        >
          {null}
        </Tab>
        <Tab
          label={
            <>
              <div className="Tab-count">
                <Pills appearance="secondary">5</Pills>
              </div>
              <Text appearance={active !== 2 ? 'subtle' : undefined}>Tab 3</Text>
            </>
          }
        >
          {null}
        </Tab>
      </TabsWrapper>
    ),
    actions: (
      <div className="d-flex justify-content-end align-items-center">
        <span className="mr-4">
          <Text appearance="subtle">Meta data</Text>
        </span>
        <Button appearance="primary">Primary</Button>
      </div>
    ),
  };

  return (
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
};

const customCode = `() => {
  const active = 1;

  const title = 'Page title';

  const onTabChangeHandler = (tabIndex) => {
    console.log(tabIndex);
  };

  const options = {
    title,
    tabs: (
      <TabsWrapper
        active={active}
        onTabChange={onTabChangeHandler}
      >
        <Tab
          label={(
            <>
              <div className="Tab-count">
                <Pills appearance="secondary">2</Pills>
              </div>
              <Text appearance={active !== 0 ? 'subtle' : undefined}>Tab 1</Text>
            </>
          )}
        >
          {null}
        </Tab>
        <Tab
          label={(
            <>
              <div className="Tab-count">
                <Pills appearance="secondary">12</Pills>
              </div>
              <Text appearance={active !== 1 ? 'subtle' : undefined}>Tab 2</Text>
            </>
          )}
        >
          {null}
        </Tab>
        <Tab
          label={(
            <>
              <div className="Tab-count">
                <Pills appearance="secondary">5</Pills>
              </div>
              <Text appearance={active !== 2 ? 'subtle' : undefined}>Tab 3</Text>
            </>
          )}
        >
          {null}
        </Tab>
      </TabsWrapper>
    ),
    actions: (
      <div className="d-flex justify-content-end align-items-center">
        <span className="mr-4"><Text appearance="subtle">Meta data</Text></span>
        <Button appearance="primary">Primary</Button>
      </div>
    )
  };

  return (
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 0/Variants/With Tabs',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
