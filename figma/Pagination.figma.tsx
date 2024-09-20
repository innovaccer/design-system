import React from 'react';
import { Pagination } from '@/index';
import figma from '@figma/code-connect';

figma.connect(Pagination, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=312-1512', {
  imports: ["import { Pagination } from '@innovaccer/design-system'"],
  props: {
    type: figma.enum('Jump', {
      True: 'jump',
      False: 'basic',
    }),
  },
  example: (props) => <Pagination {...props} onPageChange={() => {}} />,
});
