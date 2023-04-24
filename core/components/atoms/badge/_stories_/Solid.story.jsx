import * as React from 'react';
import { Badge } from '@/index';

// CSF format story
export const solid = () => {
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
          <Badge key={ind} appearance={appear}>
            {appear}
          </Badge>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Badge/Solid',
  component: Badge,
  parameters: {
    docs: {
      docPage: {
        title: 'Badge',
      },
    },
  },
};
