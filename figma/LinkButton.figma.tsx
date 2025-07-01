import React from 'react';
import { LinkButton } from '@/index';
import { LinkButtonProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(LinkButton, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=24439-128447', {
  imports: ["import { LinkButton } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    subtle: figma.boolean('Subtle'),
    icon: figma.enum('Icon', {
      'Icon Left': 'event',
      'Icon Right': 'event',
    }),
    iconAlign: figma.enum('Icon', {
      'Icon Left': 'left',
      'Icon Right': 'right',
    }),
  },
  example: (props) => <LinkButton {...(props as LinkButtonProps)}>Link Button</LinkButton>,
});
