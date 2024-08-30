import React from 'react';
import { PlaceholderImage } from '@/index';
import figma from '@figma/code-connect';

figma.connect(
  PlaceholderImage,
  'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=441-1652&m=dev',
  {
    imports: ["import { PlaceholderImage } from '@innovaccer/design-system'"],
    props: {
      round: figma.enum('Shape', {
        Round: true,
        Square: false,
      }),
    },
    example: (props) => <PlaceholderImage {...props} />,
  }
);
