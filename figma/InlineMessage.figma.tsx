import React from 'react';
import { InlineMessage } from '@/index';
import figma from '@figma/code-connect';

figma.connect(InlineMessage, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=2584-28807', {
  imports: ["import { InlineMessage, LinkButton } from '@innovaccer/design-system'"],
  props: {
    appearance: figma.enum('Appearance', {
      Info: 'info',
      Success: 'success',
      Warning: 'warning',
      Alert: 'alert',
    }),
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'small',
    }),
  },
  example: (props) => <InlineMessage description="InlineMessage goes here" {...props} />,
});
