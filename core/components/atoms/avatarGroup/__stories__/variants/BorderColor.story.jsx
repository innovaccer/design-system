import * as React from 'react';
import { AvatarGroup } from '@/index';
import { list } from '../AvatarList';

export const BorderColor = () => {
  const popoverOptions = { on: 'hover' };

  return (
    <div className="d-flex justify-content-between align-items-center w-75">
      <AvatarGroup size="regular" list={list.slice(0, 4)} popoverOptions={popoverOptions} />
      <AvatarGroup
        size="regular"
        borderColor="var(--secondary-lightest)"
        className="bg-secondary-lightest p-4"
        list={list.slice(0, 4)}
        popoverOptions={popoverOptions}
      />
      <AvatarGroup size="tiny" list={list.slice(0, 4)} popoverOptions={popoverOptions} />
      <AvatarGroup
        size="tiny"
        borderColor="var(--secondary-lightest)"
        list={list.slice(0, 4)}
        className="bg-secondary-lightest p-4"
        popoverOptions={popoverOptions}
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

  const popoverOptions = { on: 'hover' };

  return (
    <div className='d-flex justify-content-between align-items-center w-75'>
      <AvatarGroup size="regular" list={list.slice(0, 4)} popoverOptions={popoverOptions}/>
      <AvatarGroup size="regular" borderColor="var(--secondary-lightest)" 
        className='bg-secondary-lightest p-4' list={list.slice(0, 4)} popoverOptions={popoverOptions}/>
      <AvatarGroup size="tiny" list={list.slice(0, 4)} popoverOptions={popoverOptions}/>
      <AvatarGroup size="tiny" borderColor="var(--secondary-lightest)" list={list.slice(0, 4)} 
        className='bg-secondary-lightest p-4' popoverOptions={popoverOptions}/>
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
