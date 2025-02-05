import React from 'react';
import { HorizontalNav } from '@/index';
import figma from '@figma/code-connect';

figma.connect(HorizontalNav, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1878-14928', {
  imports: ["import { HorizontalNav } from '@innovaccer/design-system'"],
  props: {
    menus: figma.enum('Variant', {
      Default: [
        {
          name: 'page_1',
          label: 'Page 1',
        },
        {
          name: 'page_2',
          label: 'Page 2',
        },
        {
          name: 'page_3',
          label: 'Page 3',
        },
      ],

      'With icon': [
        {
          name: 'text',
          label: 'Text',
          icon: 'message',
        },
        {
          name: 'voice',
          label: 'Voice',
          icon: 'mic',
        },
        {
          name: 'mail',
          label: 'Mail',
          icon: 'email',
        },
      ],

      'With count': [
        {
          name: 'text',
          label: 'Text',
          count: 15,
        },
        {
          name: 'voice',
          label: 'Voice',
          count: 10,
        },
        {
          name: 'mail',
          label: 'Mail',
          count: 5,
        },
      ],
    }),
  },
  example: (props) => <HorizontalNav {...props} />,
});
