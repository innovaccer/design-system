import React from 'react';
import { Meter } from '@/index';
import { MeterProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Meter, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=53851-1643', {
  imports: ["import { Meter } from '@innovaccer/design-system'"],
  props: {
    meterSize: figma.enum('Size', {
      Regular: 'regular',
      Small: 'small',
      Large: 'large',
    }),
  },
  example: (props) => <Meter {...(props as MeterProps)} />,
});
