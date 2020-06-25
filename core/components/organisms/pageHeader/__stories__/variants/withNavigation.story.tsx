import * as React from 'react';
import PageHeader from '../..//PageHeader';
import { Navigation, Button, Text } from '@/index';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

export const withNavigation = () => {
  const title = text(
    'title',
    'Page title'
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
    title,
    navigation: <Navigation data={navigationData} onClick={action('menu-clicked')} active="menu_1" />,
    actions: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <span className="mr-4"><Text appearance="subtle">Meta data</Text></span>
        <Button appearance="primary">Primary</Button>
      </div>
    )
  };

  return (
    <div style={{ width: '100%', padding: '16px', background: '#f4f4f4' }}>
      <PageHeader {...options} />
    </div>
  );
};

export default {
  title: 'Organisms|PageHeader/Level 0/Variants',
  component: PageHeader
};
