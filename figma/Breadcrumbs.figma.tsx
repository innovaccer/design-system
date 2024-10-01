import React from 'react';
import { Breadcrumbs } from '@/index';
import figma from '@figma/code-connect';

figma.connect(Breadcrumbs, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1056-68', {
  imports: ["import { Breadcrumbs } from '@innovaccer/design-system'"],
  props: {
    list: figma.enum('Overflow', {
      False: [
        {
          label: 'Level 0',
          link: '/',
        },
        {
          label: 'Level 1',
          link: '/',
        },
        {
          label: 'Level 2',
          link: '/',
        },
        {
          label: 'Level 3',
          link: '/',
        },
      ],
      True: [
        {
          label: 'Level 0',
          link: '/',
        },
        {
          label: 'Level 1',
          link: '/',
        },
        {
          label: 'Level 2',
          link: '/',
        },
        {
          label: 'Level 3',
          link: '/',
        },
        {
          label: 'Level 4',
          link: '/',
        },
      ],
    }),
  },
  example: (props) => (
    <Breadcrumbs
      showTooltip={true}
      {...props}
    />
  ),
});
