import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { Button, PageHeader, Navigation, Text } from '@/index';
import { action } from '@storybook/addon-actions';
import Dialog from '../Dialog';
import { updateKnob } from '@/utils/storybookEventEmitter';

export const all = () => {
  const open = boolean('open', false);
  const dimension = select(
    'dimension',
    ['small', 'medium', 'large'],
    'small'
  );

  const primaryButtonAppearance = select(
    'primaryButtonAppearance',
    ['basic', 'primary', 'success', 'alert', 'transparent'],
    'primary'
  );

  const secondaryButtonAppearance = select(
    'secondaryButtonAppearance',
    ['basic', 'primary', 'success', 'alert', 'transparent'],
    'basic'
  );

  const onClose = () => {
    updateKnob('open', false);
  };

  const options = {
    open,
    onClose,
    dimension,
    primaryButtonAppearance,
    secondaryButtonAppearance,
    icon: 'pan_tool',
    heading: 'Heading',
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    primaryButtonLabel: 'Primary',
    primaryButtonCallback: action('primary click'),
    secondaryButtonLabel: 'Basic',
    secondaryButtonCallback: action('basic click')
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
      <Dialog {...options} />
    </div>
  );
};

export default {
  title: 'Molecules|Dialog',
  component: Dialog,
  parameters: {
    docs: {
      docPage: {
        noStory: true
      }
    }
  }
};
