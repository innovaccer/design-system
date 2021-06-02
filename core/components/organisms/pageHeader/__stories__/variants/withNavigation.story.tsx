import * as React from 'react';
import PageHeader from '../..//PageHeader';
import { Navigation, Button, Text } from '@/index';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

export const withNavigation = () => {
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
  const separator = boolean('separator', true);

  const options = {
    title,
    separator,
    navigation: <Navigation menus={navigationData} onClick={action('menu-clicked')} active={{ name: 'menu_1' }} />,
    actions: (
      <div className="d-flex justify-content-end align-items-center">
        <span className="mr-4"><Text appearance="subtle">Meta data</Text></span>
        <Button appearance="primary">Primary</Button>
      </div>
    )
  };

  return (
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
};

const customCode = `() => {
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

  const options = {
    title,
    navigation: <Navigation menus={navigationData} onClick={(menu) => console.log(menu)} active={{ name: 'menu_1' }} />,
    actions: (
      <div className="d-flex justify-content-end align-items-center">
        <span className="mr-4"><Text appearance="subtle">Meta data</Text></span>
        <Button appearance="primary">Primary</Button>
      </div>
    )
  };

  return (
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 0/Variants/With Navigation',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
