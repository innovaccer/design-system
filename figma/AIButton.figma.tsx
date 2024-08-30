import React from 'react';
import { AIButton } from '@/index';
import figma from '@figma/code-connect';

figma.connect(AIButton, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=48860-174575', {
  imports: ["import { AIButton } from '@innovaccer/design-system'"],
  props: {
    appearance: figma.enum('Appearance', {
      Primary: 'primary',
      Basic: 'basic',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
      Default: false,
    }),
  },
  example: (props) => <AIButton {...props}>Button</AIButton>,
});
