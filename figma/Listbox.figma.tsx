import React from 'react';
import { Listbox } from '@/index';
import { ListboxProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Listbox, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=44079-22596', {
  imports: ["import { Listbox } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Standard: 'standard',
      Compressed: 'compressed',
      Tight: 'tight',
    }),
  },
  example: (props) => (
    <Listbox {...(props as ListboxProps)}>
      <Listbox.Item>List Item 1</Listbox.Item>
      <Listbox.Item>List Item 2</Listbox.Item>
      <Listbox.Item>List Item 3</Listbox.Item>
    </Listbox>
  ),
});
