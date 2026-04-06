import * as React from 'react';
import { AvatarGroup } from '@/index';
import { list } from '../AvatarList';

export const BorderColor = () => {
  return (
    <div className="d-flex justify-content-between align-items-center w-75">
      <AvatarGroup size="regular" list={list.slice(0, 4)} />
      <AvatarGroup
        size="regular"
        borderColor="var(--secondary-lightest)"
        className="bg-secondary-lightest p-4"
        list={list.slice(0, 4)}
      />
      <AvatarGroup size="tiny" list={list.slice(0, 4)} />
      <AvatarGroup
        size="tiny"
        borderColor="var(--secondary-lightest)"
        list={list.slice(0, 4)}
        className="bg-secondary-lightest p-4"
      />
    </div>
  );
};

const customCode = `() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler'
    },
    {
      firstName: 'Monica',
      lastName: 'Geller'
    },
  ];

  return (
    <div className='d-flex justify-content-between align-items-center w-75'>
      <AvatarGroup size="regular" list={list.slice(0, 4)} />
      <AvatarGroup size="regular" borderColor="var(--secondary-lightest)" 
        className='bg-secondary-lightest p-4' list={list.slice(0, 4)} />
      <AvatarGroup size="tiny" list={list.slice(0, 4)} />
      <AvatarGroup size="tiny" borderColor="var(--secondary-lightest)" list={list.slice(0, 4)} 
        className='bg-secondary-lightest p-4' />
    </div>
  );
}`;

export default {
  title: 'Components/Avatar/AvatarGroup/Variants/Border Color',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
        description: 'Border color of Avatars should be same as the background color',
      },
    },
  },
};
