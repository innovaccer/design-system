import * as React from 'react';
import PageHeader from '../../PageHeader';
import { Button, Text, Tab, TabsWrapper, Badge } from '@/index';
import { action } from '@storybook/addon-actions';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { number, text, boolean } from '@storybook/addon-knobs';

export const withTabs = () => {
  const active = number(
    'active',
    1
  );
  const seperator = boolean('seperator', true);
  const title = text(
    'title',
    'Page title'
  );

  const onTabChangeHandler = (tabIndex: number) => {
    updateKnob('active', tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  const options = {
    title,
    seperator,
    tabs: (
      <TabsWrapper
        active={active}
        onTabChange={onTabChangeHandler}
      >
        <Tab
          label={(
            <>
              <div className="Tab-count">
                <Badge appearance="secondary">2</Badge>
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
                <Badge appearance="secondary">12</Badge>
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
                <Badge appearance="secondary">5</Badge>
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
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <span className="mr-4"><Text appearance="subtle">Meta data</Text></span>
        <Button appearance="primary">Primary</Button>
      </div>
    )
  };

  return (
    <div className="w-100 p-6" style={{ background: '#f4f4f4' }}>
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
                <Badge appearance="secondary">2</Badge>
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
                <Badge appearance="secondary">12</Badge>
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
                <Badge appearance="secondary">5</Badge>
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
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <span className="mr-4"><Text appearance="subtle">Meta data</Text></span>
        <Button appearance="primary">Primary</Button>
      </div>
    )
  };

  return (
    <div className="w-100 p-6" style={{ background: '#f4f4f4' }}>
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
        customCode
      }
    }
  }
};
