import React from 'react';
import { Modal, Button, Text } from '@/index';
import { ModalProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Modal, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1878-14714', {
  imports: ["import { Modal } from '@innovaccer/design-system'"],
  props: {
    dimension: figma.enum('Size', {
      Regular: 'medium',
      Large: 'large',
      Tiny: 'small',
    }),
  },
  example: (props) => (
    <Modal
      headerOptions={{
        heading: 'Heading',
        subHeading: 'Subheading',
      }}
      footer={
        <>
          <Button appearance="basic" onClick={() => console.log('Basic button click')}>
            Basic
          </Button>
          <Button appearance="primary" className="ml-4" onClick={() => console.log('Primary button click')}>
            Primary
          </Button>
        </>
      }
      {...(props as ModalProps)}
      open={true}
    >
      <Text>Modal Body</Text>
    </Modal>
  ),
});
