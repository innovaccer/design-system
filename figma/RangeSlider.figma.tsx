import React from 'react';
import { RangeSlider } from '@/index';
import figma from '@figma/code-connect';

figma.connect(RangeSlider, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1614-10717&m=dev', {
  imports: ["import { RangeSlider } from '@innovaccer/design-system'"],
  props: {
    disabled: figma.enum('State', {
      Default: undefined,
      Disabled: true,
    }),
  },
  example: (props) => <RangeSlider defaultValue={[2, 4]} label="Label" {...props} />,
});
