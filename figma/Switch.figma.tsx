import React from 'react';
import { Switch } from '@/index';
import { SwitchProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Switch, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=47-469&m=dev', {
  imports: ["import { Switch } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
    }),
    disabled: figma.enum('State', {
      Default: undefined,
      Hover: undefined,
      Active: undefined,
      Focus: undefined,
      Disabled: true,
    }),
    checked: figma.boolean('On'),
  },
  example: (props) => <Switch name="Name of switch" value="Value of switch" {...(props as SwitchProps)} />,
});
