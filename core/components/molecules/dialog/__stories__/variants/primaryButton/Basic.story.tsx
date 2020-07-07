import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { Button, PageHeader, Navigation, Text } from '@/index';
import { action } from '@storybook/addon-actions';
import Dialog from '../../../Dialog';
import { updateKnob } from '@/utils/storybookEventEmitter';

export const basic = () => {
  const open = boolean('open', true);

  const onClose = () => {
    updateKnob('open', false);
  };

  const options = {
    open,
    onClose,
    icon: 'pan_tool',
    heading: 'Heading',
    title: 'Description Title/Variants',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    primaryButtonLabel: 'Primary',
    primaryButtonCallback: action('primary click'),
    secondaryButtonLabel: 'Secondary',
    secondaryButtonCallback: action('secondary click')
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
      <Dialog primaryButtonAppearance="basic" {...options} />
    </div>
  );
};

export default {
  title: 'Molecules|Dialog/Variants/PrimaryButton',
  component: Dialog,
  parameters: {
    docs: {
      docPage: {
        title: 'Dialog',
        noStory: true
      },
    }
  }
};
