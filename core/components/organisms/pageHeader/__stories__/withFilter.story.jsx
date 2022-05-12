import * as React from 'react';
import { Button, Tabs, PageHeader } from '@/index';

export const level0WithFilter = () => {
  const tabs = [
    {
      count: 4,
      label: 'Current',
    },
    {
      count: 4,
      label: 'Invited',
    },
    {
      count: 4,
      label: 'Inactive',
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const tab = <Tabs tabs={tabs} activeIndex={activeIndex} onTabChange={setActiveIndex} />;

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Button icon="get_app" className="mr-4">
        Download Records
      </Button>
      <Button appearance="primary">Invite users</Button>
    </div>
  );

  return (
    <div className="p-6 bg-secondary-lightest" style={{width:'900px'}}>
      <PageHeader title="Users" separator={true} tabs={tab} actions={actions} />
    </div>
  );
};

const customCode = `() => {
  const tabs = [
    {
      count: 4,
      label: 'Current'
    },
    {
      count: 4,
      label: 'Invited'
    },
    {
      count: 4,
      label: 'Inactive'
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

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Button icon="get_app" className="mr-4">Download Records</Button>
      <Button appearance="primary">Invite users</Button>
    </div>
  );

  return (
    <div className="p-6 bg-secondary-lightest" style={{width:'900px'}}>
      <PageHeader
        title="Users"
        separator={true}
        tabs={tab}
        actions={actions}
      />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 0 With Filter',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
