import React from 'react';
import { Avatar, AvatarSelection } from '@/index';
import figma from '@figma/code-connect';
import { AvatarSelectionProps } from '@/index.type';

figma.connect(AvatarSelection, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=32683-7747', {
  imports: ["import { AvatarSelection } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
    }),
    max: figma.enum('Count', {
      Six: 6,
      'More than six': 6,
    }),
    withSearch: figma.enum('Search', {
      False: false,
      True: true,
    }),
    list: figma.enum('Type', {
      Initial: [
        {
          firstName: 'John',
          lastName: 'Doe',
          selected: true,
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          selected: true,
        },
      ],
      Icon: [
        {
          firstName: 'Rachel',
          lastName: 'Green',
          selected: true,
          icon: <Avatar.Icon name="person" />,
        },
        {
          firstName: 'John',
          lastName: 'Doe',
          selected: true,
          icon: <Avatar.Icon name="person" />,
        },
      ],
      Image: [
        {
          firstName: 'John',
          lastName: 'Doe',
          selected: true,
          image: <Avatar.Image src="url" />,
        },
        {
          firstName: 'Rachel',
          lastName: 'Green',
          selected: true,
          image: <Avatar.Image src="url" />,
        },
      ],
    }),
  },
  example: (props) => <AvatarSelection {...(props as AvatarSelectionProps)} />,
});
