import * as React from 'react';
import { Breadcrumbs, Text, StatusHint, HorizontalNav, AvatarGroup, PageHeader, Dropdown } from '@/index';
import { action } from '@/utils/action';

export const Responsiveness = () => {
  const navigationData = [
    {
      name: 'menu_1',
      label: 'Interventions',
    },
    {
      name: 'menu_2',
      label: 'No Linked Activites',
    },
  ];

  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      appearance: 'accent2',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
      appearance: 'accent3',
    },
  ];

  const options = [
    {
      icon: 'print',
      label: 'Edit',
      value: 'Edit',
    },
    {
      icon: 'assignment_turned_in',
      label: 'Complete',
      value: 'Complete',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1',
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text appearance="subtle" className="mr-4">
        Updated 1 day ago
      </Text>
      <AvatarGroup borderColor="var(--secondary-lightest)" className="mr-5" list={list} />
      <div>
        <Dropdown menu={true} optionType="WITH_ICON" icon="more_horiz" options={options} align="left" />
      </div>
    </div>
  );

  const breadcrumbs = (
    <Breadcrumbs
      list={[
        {
          label: 'Care potential',
          link: '/Care potential',
        },
      ]}
      onClick={(link) => action(`on-click: ${link}`)}
    />
  );

  const status = <StatusHint appearance="info">Ongoing</StatusHint>;

  const navigation = <HorizontalNav menus={navigationData} onClick={onClickHandler} active={active} />;

  return (
    <div className="w-100 bg-secondary-lightest">
      <PageHeader
        navigationPosition="bottom"
        title="Pac Follow-Up Protocol"
        separator={false}
        navigation={navigation}
        actions={actions}
        breadcrumbs={breadcrumbs}
        status={status}
      />
    </div>
  );
};

const customCode = `() => {
  const navigationData = [
    {
      name: 'menu_1',
      label: 'Interventions',
    },
    {
      name: 'menu_2',
      label: 'No Linked Activites'
    }
  ];

  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      appearance: 'accent2',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
      appearance: 'accent3',
    }
  ];

  const options = [
    {
      icon: 'print',
      label: 'Edit',
      value: 'Edit',
    },
    {
      icon: 'assignment_turned_in',
      label: 'Complete',
      value: 'Complete',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1'
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
    <Text appearance="subtle" className="mr-4">Updated 1 day ago</Text>
    <AvatarGroup borderColor="var(--secondary-lightest)" className="mr-5" list={list}/>
    <div>
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List>
            <Menu.Item className="d-flex align-items-center">
              <Icon name="print" className="mr-4 my-2" />
              <Text>Edit</Text>
            </Menu.Item>
            <Menu.Item className="d-flex align-items-center">
              <Icon name="assignment_turned_in" className="mr-4 my-2" />
              <Text>Complete</Text>
            </Menu.Item>
          </Menu.List>
      </Menu>
    </div>
    </div>
  );

  const breadcrumbs = (
    <Breadcrumbs
      list={[{
        label: 'Care potential',
        link: '/Care potential'
      }]}
      onClick={link => console.log(\`on-click: \${link}\`)}
    />
  );

  const status = (
    <StatusHint appearance="info">Ongoing</StatusHint>
  );

  const navigation = (
    <HorizontalNav 
      menus={navigationData}
      onClick={onClickHandler}
      active={active}
    />
  );

  return (
    <div className="bg-secondary-lightest">
      <PageHeader
        navigationPosition="bottom"
        title="Pac Follow-Up Protocol"
        separator={false}
        navigation={navigation}
        actions={actions}
        breadcrumbs={breadcrumbs}
        status={status}
      />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Responsiveness',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
