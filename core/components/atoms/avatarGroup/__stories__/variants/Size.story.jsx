import * as React from 'react';
import { AvatarGroup, Text } from '@/index';

export const Size = () => {
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
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
  ];

  return (
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Regular</Text>
        <div className="mt-4">
          <AvatarGroup size="regular" list={list} />
        </div>
      </div>
      <div className="flex-column mr-9">
        <Text weight="strong">Tiny</Text>
        <div className="mt-4">
          <AvatarGroup size="tiny" list={list} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Micro</Text>
        <div className="mt-4">
          <AvatarGroup size="micro" list={list} />
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
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
  ];

  return (
    <div className="d-flex">
      <div className="flex-column mr-9">
        <Text weight="strong">Regular</Text>
        <div className="mt-4">
          <AvatarGroup size="regular" list={list} />
        </div>
      </div>
      <div className="flex-column mr-9">
        <Text weight="strong">Tiny</Text>
        <div className="mt-4">
          <AvatarGroup size="tiny" list={list} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Micro</Text>
        <div className="mt-4">
          <AvatarGroup size="micro" list={list} />
        </div>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Avatar/AvatarGroup/Variants/Size',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
