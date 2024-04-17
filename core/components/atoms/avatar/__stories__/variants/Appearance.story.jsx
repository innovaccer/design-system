import * as React from 'react';
import { Avatar } from '@/index';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {
  const weight = 'strong';

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
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-9">
            <Text weight={weight}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            <br />
            <br />
            <Avatar firstName="John" lastName="Doe" appearance={appear} />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Avatar/Avatar/Variants/Appearance',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar',
      },
    },
  },
};
