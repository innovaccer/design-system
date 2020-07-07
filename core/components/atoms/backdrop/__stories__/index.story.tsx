import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Backdrop from '../Backdrop';
import { Navigation, Button, Text, PageHeader } from '@/index';

export const all = () => {
  const open = boolean('open', true);

  const options = {
    open
  };

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

  const pageHeaderOptions = {
    title: 'Page Title',
    navigation: <Navigation menus={navigationData} onClick={action('menu-clicked')} active={{ name: 'menu_1' }} />,
    actions: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <span className="mr-4"><Text appearance="subtle">Meta data</Text></span>
        <Button appearance="primary" onClick={action('Page header primary button click')}>Primary</Button>
      </div>
    )
  };

  return (
    <div>
      <PageHeader {...pageHeaderOptions} />
      <Backdrop {...options} />
    </div>
  );
};

export default {
  title: 'Atoms|Backdrop',
  component: Backdrop,
  parameters: {
    docs: {
      docPage: {
        noStory: true,
      }
    }
  }
};
