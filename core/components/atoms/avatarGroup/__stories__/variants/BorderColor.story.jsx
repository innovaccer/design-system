import * as React from 'react';
import { AvatarGroup } from '@/index';
import { list } from '../AvatarList';

export const borderColor = () => {
  const colors = ['secondary', 'alert', 'warning', 'accent1'];

  return (
    <div className="d-flex">
      {colors.map((color, i) => {
        return (
          <div key={i} className="mr-9">
            <AvatarGroup list={list.slice(0, 4)} borderColor={`var(--${color})`} />
          </div>
        );
      })}
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
      <div className="mr-9">
        <AvatarGroup list={list.slice(0, 4)} borderColor='var(--secondary)' />
      </div>
      <div className="mr-9">
        <AvatarGroup list={list.slice(0, 4)} borderColor='var(--alert)' />
      </div>
      <div className="mr-9">
        <AvatarGroup list={list.slice(0, 4)} borderColor='var(--warning)' />
      </div>
      <div className="mr-9">
        <AvatarGroup list={list.slice(0, 4)} borderColor='var(--accent1)' />
      </div>
    </div>
  )
}`;

export default {
  title: 'Indicators/AvatarGroup/Variants/Border Color',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
