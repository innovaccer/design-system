import React from 'react';
import { Avatar } from '@/index';
import figma from '@figma/code-connect';

figma.connect(
  Avatar,
  'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/branch/0LPEpuAwooHbyZ1UgPWZfq/MDS---Web?node-id=37-592&m=dev',
  {
    imports: ["import { Avatar } from '@innovaccer/design-system'"],
    props: {
      appearance: figma.enum('Appearance', {
        Jal: 'primary',
        Stone: 'secondary',
        Neem: 'success',
        Haldi: 'warning',
        Mirch: 'alert',
        Tawak: 'accent1',
        Nimbu: 'accent4',
        Neel: 'accent3',
        Jamun: 'accent4',
      }),
      size: figma.enum('Size', {
        Regular: 'regular',
        Small: 'tiny',
      }),
      shape: figma.enum('Shape', {
        Round: 'round',
        Square: 'square',
      }),
    },
    example: (props) => <Avatar {...props} />,
  }
);
