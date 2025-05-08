import React from 'react';
import { MetricInput } from '@/index';
import { MetricInputProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(MetricInput, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=572-1969&m=dev', {
  imports: ["import { MetricInput } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Large: 'large',
    }),
    prefix: figma.enum('Prefix', {
      True: 'Prefix',
      False: undefined,
    }),
    suffix: figma.enum('Suffix', {
      True: 'Suffix',
      False: undefined,
    }),
    showActionButton: figma.boolean('Actions'),
  },
  example: (props) => <MetricInput {...(props as MetricInputProps)} />,
});
