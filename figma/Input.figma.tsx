import React from 'react';
import { Input } from '@/index';
import { InputProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Input, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=531-1731', {
  imports: ["import { Input } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
      Large: 'large',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    readOnly: figma.enum('State', {
      'Read only': true,
    }),
    error: figma.enum('State', {
      'Error - Focus': true,
    }),
  },
  example: (props) => <Input {...(props as InputProps)}></Input>,
});
