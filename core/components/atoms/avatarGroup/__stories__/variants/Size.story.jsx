import * as React from 'react';
import { AvatarGroup, Text } from '@/index';
import { list } from '../AvatarList';

export const size = () => {
  return (
    <div className="d-flex">
      <div className="d-flex flex-column">
        <Text weight="strong">Regular</Text>
        <div className="d-flex">
          <div className="mr-9 mt-4">
            <AvatarGroup size="regular" list={list.slice(0, 4)} />
          </div>
          <div className="mr-9 bg-secondary-lightest p-4 ">
            <AvatarGroup size="regular" borderColor="var(--secondary-lightest)" list={list.slice(0, 4)} />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        <Text weight="strong">Tiny</Text>
        <div className="d-flex">
          <div className="mr-9 mt-4">
            <AvatarGroup size="tiny" list={list.slice(0, 4)} />
          </div>
          <div className="mr-9 bg-secondary-lightest p-3 mt-3 ">
            <AvatarGroup size="tiny" borderColor="var(--secondary-lightest)" list={list.slice(0, 4)} />
          </div>
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
      <div className="d-flex flex-column">
        <Text weight="strong">Regular</Text>
        <div className="d-flex">
          <div className="mr-9 mt-4">
            <AvatarGroup size="regular" list={list.slice(0, 4)} />
          </div>
          <div className="mr-9 bg-secondary-lightest p-4">
            <AvatarGroup size="regular" borderColor="var(--secondary-lightest)" list={list.slice(0, 4)} />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        <Text weight="strong">Tiny</Text>
        <div className="d-flex">
          <div className="mr-9 mt-4">
            <AvatarGroup size="tiny" list={list.slice(0, 4)} />
          </div>
          <div className="mr-9 bg-secondary-lightest p-3 mt-3">
            <AvatarGroup size="tiny" borderColor="var(--secondary-lightest)" list={list.slice(0, 4)} />
          </div>
        </div>
      </div>
    </div>
  );
}`;

export default {
  title: 'Indicators/AvatarGroup/Variants/Size',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
