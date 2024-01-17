import * as React from 'react';
import { AvatarGroup, Avatar } from '@/index';

export const withImage = () => {
  const list = [
    {
      firstName: 'Satyam',
      lastName: 'Yadav',
      image: <Avatar.Image src="https://avatars.githubusercontent.com/u/3583587?v=4" />,
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://avatars.githubusercontent.com/u/46045493?v=4" />,
    },
    {
      firstName: 'Shivaansh',
      lastName: 'Sharma',
      image: <Avatar.Image src="https://design.innovaccer.com/images/github.png" />,
    },
  ];
  return <AvatarGroup list={list} />;
};

const customCode = `() => {
  const list = [
    {
      firstName: 'Satyam',
      lastName: 'Yadav',
      image: <Avatar.Image src="https://avatars.githubusercontent.com/u/3583587?v=4" />,
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://avatars.githubusercontent.com/u/46045493?v=4" />,
    },
    {
      firstName: 'Shivaansh',
      lastName: 'Sharma',
      image: <Avatar.Image src="https://design.innovaccer.com/images/github.png" />,
    },
  ];
  return <AvatarGroup list={list} />;

}`;

export default {
  title: 'Indicators/AvatarGroup/With Image',
  component: AvatarGroup,
  subcomponents: { 'Avatar.Image': Avatar.Image, 'Avatar.Icon': Avatar.Icon },
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
