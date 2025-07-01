import React from 'react';
import { Avatar, AvatarGroup } from '@/index';
import { AvatarGroupProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(AvatarGroup, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=37-593', {
  imports: ["import { AvatarGroup } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'regular',
      Small: 'tiny',
    }),
    max: figma.enum('Count', {
      'Less than three': 3,
      'More than three': 2,
    }),
    list: figma.enum('Type', {
      Initial: [
        {
          firstName: 'John',
          lastName: 'Doe',
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
        },
      ],
      Icon: [
        {
          firstName: 'Rachel',
          lastName: 'Green',
          icon: <Avatar.Icon name="person" />,
        },
        {
          firstName: 'John',
          lastName: 'Doe',
          icon: <Avatar.Icon name="person" />,
        },
      ],
      Image: [
        {
          firstName: 'John',
          lastName: 'Doe',
          image: <Avatar.Image src="url" />,
        },
        {
          firstName: 'Rachel',
          lastName: 'Green',
          image: <Avatar.Image src="url" />,
        },
      ],
    }),
  },
  example: (props) => <AvatarGroup {...(props as AvatarGroupProps)} />,
});
