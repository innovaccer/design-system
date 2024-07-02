import * as React from 'react';
import { Tabs, PageHeader, Breadcrumbs, Row, Column } from '@/index';
import { action } from '@/utils/action';

export const withTabs = () => {
  const tabs = [
    {
      count: 32,
      label: 'New',
    },
    {
      count: 4,
      label: 'Invalid',
    },
    {
      count: 2,
      label: 'Duplicate',
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const tab = <Tabs tabs={tabs} activeIndex={activeIndex} onTabChange={setActiveIndex} />;

  const breadcrumbs = (
    <Breadcrumbs
      list={[
        {
          label: 'Senders',
          link: '/Senders',
        },
      ]}
      onClick={(link) => action(`on-click: ${link}`)}
    />
  );

  return (
    <Row>
      <Column size={11}>
        <div className="bg-secondary-lightest">
          <PageHeader title="Sender creation report" separator={true} tabs={tab} breadcrumbs={breadcrumbs} />
        </div>
      </Column>
    </Row>
  );
};

const customCode = `() => {
  const tabs = [
    {
      count: 32,
      label: 'New'
    },
    {
      count: 4,
      label: 'Invalid'
    },
    {
      count: 2,
      label: 'Duplicate'
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const tab = (
    <Tabs
      tabs={tabs}
      activeIndex={activeIndex}
      onTabChange={setActiveIndex}
    />
  );

  const breadcrumbs = (
    <Breadcrumbs
      list={[{
        label: 'Senders',
        link: '/Senders'
      }]}
      onClick={link => console.log(\`on-click: \${link}\`)}
    />
  );

  return (
    <Row>
      <Column size={11}>
        <div className="bg-secondary-lightest">
          <PageHeader
            title="Sender creation report"
            separator={true}
            tabs={tab}
            breadcrumbs={breadcrumbs}
          />
        </div>
      </Column>
    </Row>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 1/With breadcrumb/With Tabs',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
