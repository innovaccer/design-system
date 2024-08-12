import React from 'react';
import { AIChip } from '@/index';
import figma from '@figma/code-connect';

figma.connect(AIChip, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=48860-176255', {
  imports: ["import { AIChip } from '@innovaccer/design-system'"],
  props: {
    disabled: figma.enum('State', {
      Disabled: true,
      Default: false,
    }),
  },
  example: (props) => <AIChip icon="edit_note" label="AI chip" {...props} />,
});
