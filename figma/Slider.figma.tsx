import React from 'react';
import { Slider } from '@/index';
import figma from '@figma/code-connect';

figma.connect(Slider, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1042-897&m=dev', {
  imports: ["import { Slider } from '@innovaccer/design-system'"],
  props: {
    disabled: figma.enum('State', {
      Default: undefined,
      Disabled: true,
    }),
  },
  example: (props) => <Slider defaultValue={5} {...props} />,
});
