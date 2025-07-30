import React from 'react';
import { Spinner } from '@/index';
import { SpinnerProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Spinner, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=441-1582&m=dev', {
  imports: ["import { Spinner } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      'Extra Small': 'xsmall',
      Small: 'small',
      Regular: 'medium',
      Large: 'large',
    }),
  },
  example: (props) => <Spinner {...(props as SpinnerProps)} />,
});
