import * as React from 'react';
import PageHeader from '../../PageHeader';
import { Button, Text, Tab, TabsWrapper, Badge } from '@/index';
import { action } from '@storybook/addon-actions';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { number, text } from '@storybook/addon-knobs';

export const withTabs = () => {
  const activeTab = number(
    'activeTab',
    1
  );

  const title = text(
    'title',
    'Page title'
  );

  const onTabChangeHandler = (tabIndex: number) => {
    updateKnob('activeTab', tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  const options = {
    title,
    tabs: (
      <TabsWrapper
        activeTab={activeTab}
        onTabChange={onTabChangeHandler}
      >
        <Tab
          label={(
            <>
              <div className="Tab-count">
                <Badge appearance="secondary">2</Badge>
              </div>
              <Text appearance={activeTab !== 0 ? 'subtle' : undefined}>Tab 1</Text>
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
              <Text appearance={activeTab !== 1 ? 'subtle' : undefined}>Tab 2</Text>
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
              <Text appearance={activeTab !== 2 ? 'subtle' : undefined}>Tab 3</Text>
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
    <div style={{ width: '100%', padding: '16px', background: '#f4f4f4' }}>
      <PageHeader {...options} />
    </div>
  );
};

export default {
  title: 'Organisms|PageHeader/Level 0/Variants',
  component: PageHeader
};
