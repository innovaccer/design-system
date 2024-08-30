import React from 'react';
import { StatusHint } from '@/index';
import figma from '@figma/code-connect';

figma.connect(StatusHint, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=20-25&m=dev', {
  imports: ["import { StatusHint } from '@innovaccer/design-system'"],
  props: {
    appearance: figma.enum('Appearance', {
      Default: 'default',
      Info: 'info',
      Success: 'success',
      Warning: 'warning',
      Alert: 'alert',
    }),
  },
  example: (props) => <StatusHint {...props}> Status Hint</StatusHint>,
});
