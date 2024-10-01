import * as React from 'react';
import { AvatarGroup, Text } from '@/index';
import { list } from './AvatarList';

export const OverflowBehavior = () => {
  return (
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Dynamic Width (Recommended)</Text>
        <div className="mt-4">
          <AvatarGroup list={list} popoverOptions={{ width: 200 }} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Truncate</Text>
        <div className="mt-4">
          <AvatarGroup list={list} />
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
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter Paxton',
      lastName: 'Wheeler'
    },
  ];

  return (
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Dynamic Width (Recommended)</Text>
        <div className="mt-4">
          <AvatarGroup list={list} popoverOptions={{ width: 200 }} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Truncate</Text>
        <div className="mt-4">
          <AvatarGroup list={list} />
        </div>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Avatar/AvatarGroup/Overflow Behavior',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
