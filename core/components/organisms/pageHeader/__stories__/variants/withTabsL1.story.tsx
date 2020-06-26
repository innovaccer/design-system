import * as React from 'react';
import PageHeader from '../../PageHeader';
import { Button, Breadcrumbs, Badge, StatusHints, Tab, TabsWrapper, Text } from '@/index';
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

  const breadcrumbData = [
    {
      label: 'Level 0',
      link: '/level0'
    },
    {
      label: 'Level 1',
      link: '/level1'
    }
  ];

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
        <Button appearance="primary">Primary</Button>
      </div>
    ),
    breadcrumb: (
      <Breadcrumbs
        list={breadcrumbData}
        onClick={link => action(`on-click: ${link}`)}
      />
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

const customCode = `() => {
  const activeTab = 1;

  const title = 'Page title';

  const onTabChangeHandler = (tabIndex) => {
    console.log(tabIndex);
  };

  const breadcrumbData = [
    {
      label: 'Level 0',
      link: '/level0'
    },
    {
      label: 'Level 1',
      link: '/level1'
    }
  ];

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
        <Button appearance="primary">Primary</Button>
      </div>
    ),
    breadcrumb: (
      <Breadcrumbs
        list={breadcrumbData}
        onClick={link => console.log(link)}
      />
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
}`;

export default {
  title: 'Organisms|PageHeader/Level 1/Variants',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
