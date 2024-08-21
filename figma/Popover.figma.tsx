import React from 'react';
import { Popover, Text, Button } from '@/index';
import figma from '@figma/code-connect';

figma.connect(Popover, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=102-641', {
  imports: ["import { Popover } from '@innovaccer/design-system'"],
  props: {
    dark: figma.enum('Appearance', {
      Light: false,
      Dark: true,
    }),
  },
  example: (props) => (
    <Popover {...props} on="click" trigger={<Button appearance="basic">Open Popover</Button>}>
      <Text>Popover Content</Text>
    </Popover>
  ),
});
