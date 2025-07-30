import React from 'react';
import { ProgressBar } from '@/index';
import { ProgressBarProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(ProgressBar, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=441-1443&m=dev', {
  imports: ["import { ProgressBar } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'small',
    }),
    value: figma.enum('Percentage', {
      '10%': 10,
      '20%': 20,
      '30%': 30,
      '40%': 40,
      '50%': 50,
      '60%': 60,
      '70%': 70,
      '80%': 80,
      '90%': 90,
      '100%': 100,
    }),
  },
  example: (props) => <ProgressBar {...(props as ProgressBarProps)} />,
});
