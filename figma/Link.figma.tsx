import React from 'react';
import { Link } from '@/index';
import { LinkProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Link, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=28-6', {
  imports: ["import { Link } from '@innovaccer/design-system'"],
  props: {
    appearance: figma.enum('Type', {
      Primary: 'default',
      Subtle: 'subtle',
    }),
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
  },
  example: (props) => (
    <Link {...(props as LinkProps)} href="">
      {props.size} link
    </Link>
  ),
});
