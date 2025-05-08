import React from 'react';
import { Combobox } from '@/index';
import { ComboboxProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Combobox, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=14373-48206', {
  imports: ["import { Combobox } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Input size', {
      Regular: 'regular',
      Small: 'tiny',
      Large: 'large',
    }),
  },
  example: (props) => {
    return (
      <Combobox {...(props as ComboboxProps)}>
        <Combobox.List>
          <Combobox.Option option={{ label: 'label 1', value: 'value 1' }}>label 1</Combobox.Option>
          <Combobox.Option option={{ label: 'label 2', value: 'value 1' }}>label 2</Combobox.Option>
          <Combobox.Option option={{ label: 'label 3', value: 'value 1' }}>label 3</Combobox.Option>
        </Combobox.List>
      </Combobox>
    );
  },
});
