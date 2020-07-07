import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Modal from '../../../Modal';
import ModalHeader from '@/components/molecules/modalHeader';
import ModalDescription from '@/components/molecules/modalDescription';
import ModalFooter from '@/components/molecules/modalFooter';
import ModalBody from '@/components/molecules/modalBody';
import { Button, PageHeader, Navigation, Text } from '@/index';

import { updateKnob } from '@/utils/storybookEventEmitter';

export const medium = () => {
  const open = boolean('open', true);
  const backdrop = boolean('backdrop', false);

  const onClose = () => {
    action('on close triggered');
    updateKnob('open', false);
  };

  const options = {
    open,
    backdrop,
    backdropClose: onClose
  };

  const modalHeaderOptions = {
    onClose,
    icon: 'pan_tool',
    heading: 'Heading',
    subHeading: 'Subheading'
  };

  const modalDescriptionOptions = {
    title: 'Description Title/Variants',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    removePadding: true
  };

  const modalDescriptionOptionsWithoutTitle = {
    description: 'Card Sections include supporting text like an article summary or a restaurant description.',
    removePadding: true
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
      <Modal dimension="medium" {...options}>
        <ModalHeader {...modalHeaderOptions} />
        <ModalBody>
          <p>Modal Body</p>
          <ModalDescription {...modalDescriptionOptions} />
          <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
        </ModalBody>
        <ModalFooter>
          <Button appearance="basic" onClick={action('Basic button click')}>Basic</Button>
          <Button appearance="primary" onClick={action('Primary button click')}>Primary</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default {
  title: 'Molecules|Modal/Variants/Dimesion',
  component: Modal,
  parameters: {
    docs: {
      docPage: {
        title: 'Modal',
        noStory: true
      }
    }
  }
};
