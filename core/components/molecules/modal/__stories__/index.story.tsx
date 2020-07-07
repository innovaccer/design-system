import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Modal from '../Modal';
import ModalHeader from '@/components/molecules/modalHeader';
import ModalDescription from '@/components/molecules/modalDescription';
import ModalFooter from '@/components/molecules/modalFooter';
import ModalBody from '@/components/molecules/modalBody';
import Button from '@/components/atoms/button';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { Text, PageHeader, Navigation } from '@/index';

export const all = () => {
  const open = boolean('open', false);
  const backdrop = boolean('backdrop', false);
  const dimension = select(
    'dimension',
    ['small', 'medium', 'large'],
    'small'
  );

  const onClose = () => {
    updateKnob('open', false);
    action('on close triggered')();
  };

  const options = {
    open,
    backdrop,
    dimension,
    backdropClose: onClose
  };

  const modalHeaderOptions = {
    onClose,
    icon: 'pan_tool',
    heading: 'Heading',
    subHeading: 'Subheading'
  };

  const modalDescriptionOptions = {
    title: 'Description Title',
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
      <Modal {...options}>
        <ModalHeader {...modalHeaderOptions} />
        <ModalBody>
          <Text>Modal Body</Text>
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
  title: 'Molecules|Modal',
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
