import React from 'react';
import { Icon } from '@/index';
import figma from '@figma/code-connect';
import { IconProps } from '@/index.type';

figma.connect(Icon, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=6-135', {
  imports: ["import { Icon } from '@innovaccer/design-system'"],
  props: {
    appearance: figma.enum('Appearance', {
      Jal: 'primary',
      Neem: 'success',
      Haldi: 'warning',
      Mirch: 'alert',
      Tawak: 'accent1',
      Nimbu: 'accent4',
      Neel: 'accent3',
      Jamun: 'accent2',
      Namak: 'white',
    }),
    size: figma.enum('Size', {
      '12x12': 12,
      '14x14': 14,
      '16x16': 16,
      '20x20': 20,
      '24x24': 24,
    }),
    type: figma.enum('Style', {
      Rounded: 'rounded',
      Outline: 'outlined',
    }),
  },
  example: (props) => <Icon name="event" {...(props as IconProps)} />,
});
