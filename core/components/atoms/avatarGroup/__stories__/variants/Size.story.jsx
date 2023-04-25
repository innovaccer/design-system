import * as React from 'react';
import { AvatarGroup } from '@/index';
import { list } from '../AvatarList';

export const size = () => {
  const colors = ['secondary', 'alert', 'warning', 'accent1'];

  return (
    <div className="d-flex">
      {colors.map((color, i) => {
        return (
          <div key={i} className="mr-9">
            <AvatarGroup size="tiny" list={list.slice(0, 4)} borderColor={`var(--${color})`} />
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
      <div className='d-flex flex-column'>
        <Text weight='strong'>Regular</Text><br/>
        <div className='d-flex'>
          <div className="mr-9">
            <AvatarGroup size='regular' list={list.slice(0, 4)}/>
          </div>
          <div className="mr-9 bg-secondary-lightest p-4" style={{color: 'var(--secondary-lightest)'}}>
            <AvatarGroup size='regular' borderColor='' list={list.slice(0, 4)} />
          </div>
        </div>
      </div>
      <div className='d-flex flex-column'>
        <Text weight='strong'>Tiny</Text><br/>
        <div className='d-flex'>
          <div className="mr-9">
            <AvatarGroup size='tiny' list={list.slice(0, 4)}/>
          </div>
          <div className="mr-9 bg-secondary-lightest p-3" style={{color: 'var(--secondary-lightest)'}}>
            <AvatarGroup size='tiny' borderColor='' list={list.slice(0, 4)} />
          </div>
        </div>
      </div>
    </div>
  )
}`;

export default {
  title: 'Components/AvatarGroup/Variants/Size',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
