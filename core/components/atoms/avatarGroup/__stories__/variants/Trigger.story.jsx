import * as React from 'react';
import { AvatarGroup, Text } from '@/index';
import { list } from '../AvatarList';

export const Trigger = () => {
  return (
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Hover</Text>
        <div className="mt-4">
          <AvatarGroup size="regular" list={list.slice(0, 4)} popoverOptions={{ on: 'hover' }} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Click</Text>
        <div className="mt-4">
          <AvatarGroup list={list.slice(0, 4)} popoverOptions={{ on: 'click' }} />
        </div>
      </div>
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
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Hover</Text>
        <div className="mt-4">
          <AvatarGroup list={list.slice(0, 4)} popoverOptions={{ on: 'hover' }} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Click</Text>
        <div className="mt-4">
          <AvatarGroup list={list.slice(0, 4)} popoverOptions={{ on: 'click' }} />
        </div>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Avatar/AvatarGroup/Variants/Trigger',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
