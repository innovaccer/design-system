import * as React from 'react';
import { AvatarGroup, Text } from '@/index';
import { list } from '../AvatarList';

export const Shape = () => {
  const popoverOptions = { on: 'hover' };
  const mixedList = list.slice(0, 4).map((item, index) => (index % 2 === 0 ? { ...item, shape: 'square' } : item));

  return (
    <div className="d-flex">
      <div className="flex-column">
        <Text weight="strong">Mixed Shapes</Text>
        <div className="mt-4">
          <AvatarGroup size="regular" list={mixedList} popoverOptions={popoverOptions} />
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

  const popoverOptions = { on: 'hover' };
  const mixedList = list.slice(0, 4).map((item, index) => (index % 2 === 0 ? { ...item, shape: 'square' } : item));

  return (
    <div className="d-flex">
      <div className="flex-column">
        <Text weight="strong">Mixed Shapes</Text>
        <div className="mt-4">
          <AvatarGroup size="regular" list={mixedList} popoverOptions={popoverOptions} />
        </div>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Avatar/AvatarGroup/Variants/Shape',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
