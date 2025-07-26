import React from 'react';
import { Pills } from '@/index';
import { PillsProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Pills, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=39-763&m=dev', {
  imports: ["import { Pills } from '@innovaccer/design-system'"],
  props: {
    appearance: figma.enum('Appearance', {
      Jal: 'primary',
      Stone: 'secondary',
      Neem: 'success',
      Haldi: 'warning',
      Mirch: 'alert',
      Tawak: 'accent1',
      Nimbu: 'accent4',
      Neel: 'accent3',
      Jamun: 'accent2',
    }),
    subtle: figma.boolean('Subtle'),
  },
  example: (props) => <Pills {...(props as PillsProps)}>PILL</Pills>,
});
