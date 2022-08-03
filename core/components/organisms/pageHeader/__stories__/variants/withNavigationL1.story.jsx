import * as React from 'react';
import PageHeader from '../..//PageHeader';
import { Navigation, Button, Breadcrumbs, Badge, StatusHint, MetaList } from '@/index';
import { action } from '@/utils/action';

export const withNavigation = () => {
  const navigationPosition = 'center';
  const separator = true;
  const title = 'Page title';

  const navigationData = [
    {
      name: 'menu_1',
      label: 'Menu 1',
      icon: 'event',
    },
    {
      name: 'menu_2',
      label: 'Menu 2',
    },
    {
      name: 'menu_3',
      label: 'Menu 3',
      disabled: true,
    },
  ];

  const breadcrumbData = [
    {
      label: 'Level 0',
      link: '/level0',
    },
    {
      label: 'Level 1',
      link: '/level1',
    },
  ];

  const options = {
    navigationPosition,
    title,
    separator,
    navigation: (
      <Navigation
        menus={navigationData}
        onClick={action('menu-clicked')}
        active={{ name: 'menu_1' }}
        align={navigationPosition === 'bottom' ? 'left' : 'center'}
      />
    ),
    actions: (
      <div className="d-flex justify-content-end align-items-center">
        <Button appearance="primary">Primary</Button>
      </div>
    ),
    breadcrumbs: <Breadcrumbs list={breadcrumbData} onClick={(link) => action(`on-click: ${link}`)} />,
    badge: <Badge appearance="secondary">Badge</Badge>,
    status: <StatusHint appearance="alert">Alert</StatusHint>,
    meta: <MetaList list={[{ label: 'Meta data' }]} seperator={true} />,
  };
  return (
    <div className="w-100 py-6 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
};

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
    navigation: (
      <Navigation
        menus={navigationData}
        onClick={menu => console.log(menu)}
        active={{ name: 'menu_1' }}
        align={navigationPosition === 'bottom' ? 'left' : 'center'}
      />
    ),
    actions: (
      <div className="d-flex justify-content-end align-items-center">
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
    <div className="w-100 py-6 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 1/Variants/With Navigation',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
