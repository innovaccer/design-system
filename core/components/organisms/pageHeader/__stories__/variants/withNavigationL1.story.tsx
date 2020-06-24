import * as React from 'react';
import PageHeader from '../..//PageHeader';
import { select } from '@storybook/addon-knobs';
import { Navigation, Button, BreadcrumbsWrapper, Breadcrumb, Link, Badge, StatusHints, Text } from '@/index';
import { action } from '@storybook/addon-actions';

export const withNavigation = () => {
  const type = select(
    'type',
    ['small', 'large'],
    'large'
  );

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

  const options = {
    type,
    title: 'Page title',
    navigation: <Navigation data={navigationData} onClick={action('menu-clicked')} active="menu_1" />,
    actions: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button appearance="primary">Primary</Button>
      </div>
    ),
    breadcrumb: (
      <BreadcrumbsWrapper
        heading=""
      >
        <Breadcrumb>
          <div className="Breadcrumb-link">
            <Link>Test</Link>
          </div>
        </Breadcrumb>
        <Breadcrumb>
          <div className="Breadcrumb-link">
            <Link>Test Again</Link>
          </div>
        </Breadcrumb>
      </BreadcrumbsWrapper>
    ),
    badge: (
      <Badge appearance="secondary">Badge</Badge>
    ),
    status: (
      <StatusHints appearance="alert">Alert</StatusHints>
    ),
    meta: (
      <StatusHints appearance="default">Meta Data</StatusHints>
    )
  };
  return (
    <div style={{ width: '100%', padding: '16px', background: '#f4f4f4' }}>
      <PageHeader {...options} />
    </div>
  );
};

export default {
  title: 'Organisms|PageHeader/Level1/Variants',
  component: PageHeader
};
