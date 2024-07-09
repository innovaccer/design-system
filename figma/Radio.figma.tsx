import React from 'react';
import { Radio } from '@/index';
import figma from '@figma/code-connect';

figma.connect(Radio, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=97-632&m=dev', {
  imports: ["import { Radio } from '@innovaccer/design-system'"],
  props: {
    checked: figma.boolean('Selected'),
    disabled: figma.enum('State', {
      Default: undefined,
      Hover: undefined,
      Active: undefined,
      Focus: undefined,
      Disabled: true,
    }),
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
    }),
    error: figma.boolean('Error'),
  },
  example: (props) => <Radio name="name of radio" value="value of radio" {...props} />,
});
