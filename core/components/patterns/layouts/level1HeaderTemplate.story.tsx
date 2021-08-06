import * as React from 'react';

export const level1HeaderTemplate = () => <></>;

const customCode = `() => {
  const navigationPosition = 'center';
  const title = 'Page title';
  const navigationData = [
    {
      name: 'menu_1',
      label: 'Menu 1',
      icon: 'event',
    },
    {
      name: 'menu_2',
      label: 'Menu 2'
    },
    {
      name: 'menu_3',
      label: 'Menu 3',
      disabled: true
    }
  ];
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
    navigationPosition,
    title,
    navigation: <Navigation menus={navigationData} onClick={menu => console.log(menu)} active={{ name: 'menu_1' }} />,
    actions: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button appearance="primary">Primary</Button>
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
    )
  };

  return(
    <div className="d-flex flex-column bg-secondary-lightest vh-100">
      <PageHeader
        {...options}
      />
      <Row className="h-100 p-6">
        <Column className="h-100 bg-light" />
      </Row>
    </div>
  );
}`;

export default {
  title: 'Patterns/Layouts/Level 1 Header Template',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Level 1 Header Template',
        noProps: true,
      },
    },
  },
};
