import React from 'react';
import { Checkbox } from '@/index';
import { CheckboxProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Checkbox, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=95-33', {
  imports: ["import { Checkbox } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
    }),
    checked: figma.enum('Type', {
      Checked: true,
      Unchecked: false,
    }),
    indeterminate: figma.enum('Type', {
      Indeterminate: true,
    }),
    helpText: figma.enum('Help Text', {
      True: 'Help text goes here',
    }),
    error: figma.boolean('Error'),
    disabled: figma.boolean('Disabled'),
  },
  example: (props) => <Checkbox label="Label" {...(props as CheckboxProps)} />,
});
