import * as React from 'react';
import PageHeader from '../../PageHeader';
import { Button, Breadcrumbs, Badge, StatusHint, Tab, TabsWrapper, Text, MetaList } from '@/index';
import { action } from '@storybook/addon-actions';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { number, text, boolean } from '@storybook/addon-knobs';

export const withTabs = () => {
  const active = number(
    'active',
    1
  );
  const separator = boolean('separator', true);
  const title = text(
    'title',
    'Page title'
  );

  const onTabChangeHandler = (tabIndex: number) => {
    updateKnob('active', tabIndex);
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
    separator,
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
      <div className="d-flex justify-content-end align-items-center">
        <Button type="button" appearance="primary">Primary</Button>
      </div>
    ),
    breadcrumbs: (
      <Breadcrumbs
        list={breadcrumbData}
        onClick={link => action(`on-click: ${link}`)}
      />
    ),
    badge: (
      <Badge appearance="secondary">Badge</Badge>
    ),
    status: (
      <StatusHint appearance="alert">Alert</StatusHint>
    ),
    meta: (
      <MetaList
        list={[{ label: 'Meta data' }]}
        seperator={true}
      />
    )
  };
  return (
    <div className="w-100 p-6 bg-secondary-lightest">
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
      <div className="d-flex justify-content-end align-items-center">
        <Button type="button" appearance="primary">Primary</Button>
      </div>
    ),
    breadcrumbs: (
      <Breadcrumbs
        list={breadcrumbData}
        onClick={link => console.log(link)}
      />
    ),
    badge: (
      <Badge appearance="secondary">Badge</Badge>
    ),
    status: (
      <StatusHint appearance="alert">Alert</StatusHint>
    ),
    meta: (
      <MetaList
        list={[{ label: 'Meta data' }]}
        seperator={true}
      />
    )
  };
  return (
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 1/Variants/With Tabs',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
