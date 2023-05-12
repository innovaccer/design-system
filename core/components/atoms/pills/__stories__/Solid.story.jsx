import * as React from 'react';
import { Pills, Text } from '@/index';

// CSF format story
export const solid = () => {
  const subtle = false;
  const weight = 'strong';
  const children = 10;
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
            <Pills appearance={appear} subtle={subtle}>
              {children}
            </Pills>
            <br />
            <Text weight={weight}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Pills/Solid',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills',
      },
    },
  },
};
