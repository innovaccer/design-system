import React from 'react';
import { Backdrop } from '@/index';
import figma from '@figma/code-connect';

figma.connect(Backdrop, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1130-44', {
  imports: ["import { Backdrop } from '@innovaccer/design-system'"],
  example: () => <Backdrop open={true} />,
});
