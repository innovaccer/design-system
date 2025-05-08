import React from 'react';
import { ProgressRing } from '@/index';
import { ProgressRingProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(ProgressRing, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=441-1502&m=dev', {
  imports: ["import { ProgressRing } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Small: 'small',
      Regular: 'regular',
      Large: 'large',
    }),
    value: figma.enum('Percentage', {
      '25%': 25,
      '50%': 50,
      '75%': 75,
      '100%': 100,
    }),
  },
  example: (props) => <ProgressRing {...(props as ProgressRingProps)} />,
});
