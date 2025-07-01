import React from 'react';
import { Badge } from '@/index';
import { BadgeProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Badge, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=41-0&m=dev', {
  imports: ["import { Badge } from '@innovaccer/design-system'"],
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
      Jamun: 'accent2',
    }),
    subtle: figma.boolean('Subtle'),
  },
  example: (props) => <Badge {...(props as BadgeProps)}>badge</Badge>,
});
