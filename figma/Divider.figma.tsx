import React from 'react';
import { Divider } from '@/index';
import { DividerProps } from '@/index.type';
import figma from '@figma/code-connect';

// Horizontal Divider
figma.connect(Divider, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=39-336', {
  imports: ["import { Divider } from '@innovaccer/design-system'"],
  props: {
    appearance: figma.enum('Type', {
      Default: 'basic',
      'Header (Darker)': 'header',
    }),
  },
  example: (props) => <Divider {...(props as DividerProps)} />,
});

// Vertical Divider
figma.connect(Divider, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=670-1648', {
  imports: ["import { Divider } from '@innovaccer/design-system'"],
  example: (props) => <Divider vertical={true} {...props} />,
});
