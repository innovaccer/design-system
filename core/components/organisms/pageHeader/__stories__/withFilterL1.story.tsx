import * as React from 'react';
import { Tabs, PageHeader, Breadcrumbs } from '@/index';
import { action } from '@storybook/addon-actions';

export const level1WithFilter = () => {
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
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader title="Sender creation report" separator={true} tabs={tab} breadcrumbs={breadcrumbs} />
    </div>
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
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader
        title="Sender creation report"
        separator={true}
        tabs={tab}
        breadcrumbs={breadcrumbs}
      />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 1 With Filter',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
