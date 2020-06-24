import * as React from 'react';
import PageHeader from '../../PageHeader';
import { Button, BreadcrumbsWrapper, Breadcrumb, Link, Badge, StatusHints, Tab, TabsWrapper, Text } from '@/index';
import { action } from '@storybook/addon-actions';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { number, select } from '@storybook/addon-knobs';

export const withTabs = () => {
  const activeTab = number(
    'activeTab',
    1
  );

  const onTabChangeHandler = (tabIndex: number) => {
    updateKnob('activeTab', tabIndex);
    return action(`tab-change: ${tabIndex}`)();
  };

  const options = {
    title: 'Page title',
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
        <Button appearance="primary">Primary</Button>
      </div>
    ),
    breadcrumb: (
      <BreadcrumbsWrapper
        heading=""
      >
        <Breadcrumb>
          <div className="Breadcrumb-link">
            <Link>Test</Link>
          </div>
        </Breadcrumb>
        <Breadcrumb>
          <div className="Breadcrumb-link">
            <Link>Test Again</Link>
          </div>
        </Breadcrumb>
      </BreadcrumbsWrapper>
    ),
    badge: (
      <Badge appearance="secondary">Badge</Badge>
    ),
    status: (
      <StatusHints appearance="alert">Alert</StatusHints>
    ),
    meta: (
      <StatusHints appearance="default">Meta Data</StatusHints>
    )
  };
  return (
    <div style={{ width: '100%', padding: '16px', background: '#f4f4f4' }}>
      <PageHeader {...options} />
    </div>
  );
};

export default {
  title: 'Organisms|PageHeader/Level1/Variants',
  component: PageHeader
};
