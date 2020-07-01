import * as React from 'react';
import PageHeader from '../..//PageHeader';
import { select, text } from '@storybook/addon-knobs';
import { Navigation, Button, Breadcrumbs, Badge, StatusHint } from '@/index';
import { action } from '@storybook/addon-actions';

export const withNavigation = () => {
  const type = select(
    'type',
    ['small', 'large'],
    'large'
  );

  const title = text(
    'title',
    'Page title'
  );

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
    type,
    title,
    navigation: <Navigation data={navigationData} onClick={action('menu-clicked')} active="menu_1" />,
    actions: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button appearance="primary">Primary</Button>
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
      <StatusHint appearance="default">Meta Data</StatusHint>
    )
  };
  return (
    <div style={{ width: '100%', padding: '16px', background: '#f4f4f4' }}>
      <PageHeader {...options} />
    </div>
  );
};

const customCode = `() => {
  const type = 'large';

  const title = 'Page title';

  const navigationData = [
    {
      id: 'menu_1',
      name: 'Menu 1',
      icon: 'event'
    },
    {
      id: 'menu_2',
      name: 'Menu 2'
    },
    {
      id: 'menu_3',
      name: 'Menu 3',
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
    type,
    title,
    navigation: <Navigation data={navigationData} onClick={menu => console.log(menu)} active="menu_1" />,
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
    ),
    status: (
      <StatusHint appearance="alert">Alert</StatusHint>
    ),
    meta: (
      <StatusHint appearance="default">Meta Data</StatusHint>
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
