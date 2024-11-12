import * as React from 'react';
import { Avatar } from '@/index';

// CSF format story
export const subtle = () => {
  const appearances = [
    'primary',
    'secondary',
    'alert',
    'warning',
    'success',
    'accent1',
    'accent2',
    'accent3',
    'accent4',
  ];

  return (
    <div className="d-flex justify-content-between">
      {appearances.map((appear, ind) => {
        return (
          <Avatar key={ind} appearance={appear} subtle={true}>
            {appear}
          </Avatar>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Avatar/Avatar/Variants/Subtle',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar',
      },
    },
  },
};
