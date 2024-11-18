import * as React from 'react';
import { Tabs, Button, AvatarGroup, Text, PageHeader, Menu } from '@/index';
import '../../style.css';

export const withTabs = () => {
  const options = [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 2',
      value: 'Option 2',
    },
    {
      label: 'Option 3',
      value: 'Option 3',
    },
  ];

  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
  ];

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

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text className="mr-4">Few minutes ago</Text>
      <AvatarGroup
        borderColor="var(--secondary-lightest)"
        className="mr-4"
        list={list}
        popoverOptions={{ dark: true, on: 'hover', position: 'bottom' }}
      />
      <div className="mr-4">
        <Menu>
          <Menu.List>
            {options.map((item, key) => {
              const { label } = item;
              return <Menu.Item key={key}>{label}</Menu.Item>;
            })}
          </Menu.List>
        </Menu>
      </div>
      <Button appearance="subtle" className="mr-4">
        Finish later
      </Button>
      <Button appearance="primary">Next</Button>
    </div>
  );

  const button = <Button icon="arrow_back" size="tiny" largeIcon={true} />;

  return (
    <div className="bg-secondary-lightest Pageheader-longWrapper">
      <PageHeader title="Sender creation report" tabs={tab} actions={actions} button={button} />
    </div>
  );
};

const customCode = `/*
// style.css
.Pageheader-longWrapper {
    width: 1200px;
}

*/

() => {
  const options = [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 2',
      value: 'Option 2',
    },
    {
      label: 'Option 3',
      value: 'Option 3',
    },
  ];

  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
  ];

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

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text appearance="subtle" className="mr-4">Few minutes ago</Text>
      <AvatarGroup borderColor="var(--secondary-lightest)" className="mr-4" list={list} popoverOptions={{ dark: true, on: 'hover', position: 'bottom' }} />
      <div className="mr-4">
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List>
            {
              options.map((item, key) => {
                const { label } = item;
                return (
                  <Menu.Item key={key}>
                    {label}
                  </Menu.Item>
                );
              })
            }
          </Menu.List>
        </Menu>
      </div>
      <Button className="mr-4">Finish later</Button>
      <Button appearance="primary">Next</Button>
    </div>
  );

  const button = <Button icon="arrow_back" size="tiny" largeIcon={true} />;

  return (
    <div className="bg-secondary-lightest Pageheader-longWrapper">
      <PageHeader
        title="Sender creation report"
        tabs={tab}
        actions={actions}
        button={button}
      />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 1/With back button/With Tabs',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
