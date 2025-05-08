import React from 'react';
import { Dropzone } from '@/index';
import { DropzoneProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Dropzone, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1085-2320', {
  imports: ["import { Dropzone } from '@innovaccer/design-system'"],
  props: {
    type: figma.enum('Size', {
      Standard: 'standard',
      Compressed: 'compressed',
      Tight: 'tight',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
  },
  example: (props) => (
    <Dropzone
      {...(props as DropzoneProps)}
      accept="application/pdf"
      formatLabel="Accepted formats: PDF"
      sizeLabel="Maximum size: 25 MB"
    />
  ),
});
