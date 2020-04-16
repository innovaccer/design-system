import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Modal from '../../Modal';
import ModalHeader from '@/components/molecules/modalHeader';
import ModalDescription from '@/components/molecules/modalDescription';
import ModalFooter from '@/components/molecules/modalFooter';
import ModalBody from '@/components/molecules/modalBody';
import Button from '@/components/atoms/button';

import { updateKnob } from '@/utils/storybookEventEmitter';

export const large = () => {
  const open = boolean('open', true);
  const backdrop = boolean('backdrop', false);

  const onClose = () => {
    updateKnob('open', false);
  };

  const options = {
    open,
    onClose,
    backdrop,
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

  return (
    <Modal dimension="large" {...options}>
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
  );
};

export default {
  title: 'Molecules|Modal/Dimesion',
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
