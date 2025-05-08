import React from 'react';
import { Sidesheet, Button, Text } from '@/index';
import { SidesheetProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Sidesheet, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1922-12538', {
  imports: ["import { Sidesheet } from '@innovaccer/design-system'"],
  props: {
    dimension: figma.enum('Size', {
      Regular: 'regular',
      Large: 'large',
    }),
  },
  example: (props) => (
    <Sidesheet
      {...(props as SidesheetProps)}
      open={true}
      headerOptions={{
        heading: 'Heading',
        subHeading: 'Subheading',
      }}
      footer={
        <>
          <Button appearance="primary" className="mr-4">
            Primary
          </Button>
          <Button appearance="basic">Basic</Button>
        </>
      }
    >
      <Text>Sidesheet Description</Text>
    </Sidesheet>
  ),
});
