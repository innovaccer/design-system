import React from 'react';
import { Sara } from '@/index';
import { SaraProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Sara, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=48860-181639', {
  imports: ["import { Sara } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      '32': 32,
      '48': 48,
      '64': 64,
      Custom: 64,
    }),
    state: figma.enum('States', {
      Default: 'default',
      Resting: 'resting',
    }),
  },
  example: (props) => <Sara {...(props as SaraProps)} />,
});
