import React from 'react';
import { Chip } from '@/index';
import figma from '@figma/code-connect';

// Selection Chip
figma.connect(Chip, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=98-720', {
  imports: ["import { Chip } from '@innovaccer/design-system'"],
  props: {
    clearButton: figma.boolean('Removable'),
    selected: figma.boolean('Selected'),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
  },
  example: (props) => <Chip label="Selection" name="Chip Name" type="selection" {...props} />,
});

// Action Chip
figma.connect(Chip, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=98-721', {
  imports: ["import { Chip } from '@innovaccer/design-system'"],
  props: {
    disabled: figma.enum('State', {
      Disabled: true,
    }),
  },
  example: (props) => <Chip label="Action" name="Chip Name" type="action" {...props} />,
});

// Input Chip
figma.connect(Chip, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=98-719', {
  imports: ["import { Chip } from '@innovaccer/design-system'"],
  props: {
    disabled: figma.enum('State', {
      Disabled: true,
    }),
  },
  example: (props) => <Chip label="Input" name="Chip Name" type="input" {...props} />,
});
