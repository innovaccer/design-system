import * as React from 'react';
import {
  HorizontalNav,
  Breadcrumbs,
  Badge,
  MetaList,
  PageHeader,
  StatusHint,
  Button,
  AvatarGroup,
  Text,
  Menu,
} from '@/index';
import { action } from '@/utils/action';
import '../../style.css';

export const withNavigation = () => {
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

  const navigationData = [
    {
      name: 'menu_1',
      label: 'Performance',
    },
    {
      name: 'menu_2',
      label: 'Recipients',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1',
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const navigation = <HorizontalNav menus={navigationData} onClick={onClickHandler} active={active} />;
  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text appearance="subtle" className="mr-4">
        Few minutes ago
      </Text>
      <AvatarGroup
        className="mr-4"
        list={list}
        borderColor="var(--secondary-lightest)"
        popoverOptions={{ dark: true, on: 'hover', position: 'bottom' }}
      />
      <div className="mr-4">
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List>
            {options.map((item, key) => {
              const { label } = item;
              return <Menu.Item key={key}>{label}</Menu.Item>;
            })}
          </Menu.List>
        </Menu>
      </div>
      <Button className="mr-4">Finish later</Button>
      <Button appearance="primary">Next</Button>
    </div>
  );
  const breadcrumbs = (
    <Breadcrumbs
      list={[
        {
          label: 'Outreach',
          link: '/Outreach',
        },
      ]}
      onClick={(link) => action(`on-click: ${link}`)}
    />
  );
  const badge = (
    <Badge subtle={true} appearance="success">
      Sent
    </Badge>
  );
  const meta = <MetaList list={[{ label: 'Text' }, { label: 'Email' }]} />;

  const status = <StatusHint appearance="info">Ongoing</StatusHint>;

  return (
    <div className="bg-secondary-lightest Pageheader-longWrapper">
      <PageHeader
        title="Covid-19"
        separator={false}
        navigationPosition="center"
        navigation={navigation}
        actions={actions}
        breadcrumbs={breadcrumbs}
        badge={badge}
        status={status}
        meta={meta}
      />
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

  const navigationData = [
    {
      name: 'menu_1',
      label: 'Performance',
    },
    {
      name: 'menu_2',
      label: 'Recipients'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1'
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const navigation = (
    <HorizontalNav
      menus={navigationData}
      onClick={onClickHandler}
      active={active}
    />
  );
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
  const breadcrumbs = (
    <Breadcrumbs
      list={[{
        label: 'Outreach',
        link: '/Outreach'
      }]}
      onClick={link => console.log(\`on-click: \${link}\`)}
    />
  );
  const badge = (
    <Badge subtle={true} appearance="success">Sent</Badge>
  );
  const meta = (
    <MetaList
      list={[{ label: 'Text' }, { label: 'Email' }]}
    />
  );

  const status = <StatusHint appearance="info">Ongoing</StatusHint>;

  return (
    <div className="bg-secondary-lightest Pageheader-longWrapper">
      <PageHeader
        title="Covid-19"
        separator={false}
        navigationPosition="center"
        navigation={navigation}
        actions={actions}
        breadcrumbs={breadcrumbs}
        badge={badge}
        status={status}
        meta={meta}
      />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 1/With breadcrumb/With Navigation',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
