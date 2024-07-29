import React from 'react';
import { Label } from '@/index';
import figma from '@figma/code-connect';

figma.connect(Label, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=571-1689', {
  imports: ["import { Label } from '@innovaccer/design-system'"],
  props: {
    required: figma.boolean('Required dot'),
    optional: figma.boolean('Optional tag'),
    info: figma.enum('With info', {
      true: 'Sample info'
    }),
  },
  example: (props) => <Label {...props}>Label</Label>,
});
