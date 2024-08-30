import React from 'react';
import { MetaList } from '@/index';
import figma from '@figma/code-connect';

figma.connect(MetaList, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=4384-30464&m=dev', {
  imports: ["import { MetaList } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'small',
    }),
    list: figma.enum('Icon left', {
      true: [
        { icon: 'assessment', label: 'Meta data' },
        { icon: 'assessment', label: 'Meta data' },
      ],
      false: [{ label: 'Meta data' }, { label: 'Meta data' }],
    }),
  },
  example: (props) => <MetaList {...props} />,
});
