import * as React from 'react';
import { AvatarSelection, Text } from '@/index';

export const Shape = () => {
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
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
    },
  ];

  const mixedList = list.map((item, index) => (index % 2 === 0 ? { ...item, shape: 'square' } : item));

  return (
    <div className="d-flex">
      <div className="flex-column">
        <Text weight="strong">Mixed Shapes</Text>
        <div className="mt-4">
          <AvatarSelection size="regular" list={mixedList} max={4} borderColor="white" tooltipPosition="bottom" />
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
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
    },
  ];

  const mixedList = list.map((item, index) => (index % 2 === 0 ? { ...item, shape: 'square' } : item));

  return (
    <div className="d-flex">
      <div className="flex-column">
        <Text weight="strong">Mixed Shapes</Text>
        <div className="mt-4">
          <AvatarSelection size="regular" list={mixedList} max={4} borderColor="white" tooltipPosition="bottom" />
        </div>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Avatar/AvatarSelection/Variants/Shape',
  component: AvatarSelection,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
