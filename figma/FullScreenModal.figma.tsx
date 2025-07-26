import React from 'react';
import { FullscreenModal, Button, Text } from '@/index';
import { FullscreenModalProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(FullscreenModal, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=7777-38161', {
  imports: ["import { FullscreenModal } from '@innovaccer/design-system'"],
  props: {
    dimension: figma.enum('Size', {
      Regular: 'medium',
      Large: 'large',
    }),
  },
  example: (props) => (
    <FullscreenModal
      {...(props as FullscreenModalProps)}
      open={true}
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
    >
      <Text>FullscreenModal Body</Text>
    </FullscreenModal>
  ),
});
