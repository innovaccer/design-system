import * as React from 'react';
import Badge from '../../Badge';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {
  const subtle = false;
  const weight = 'strong';
  const children = 'Badge';
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
            <Badge appearance={appear} subtle={subtle}>
              {children}
            </Badge>
            <br />
            <Text weight={weight}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Indicators/Badge/Variants/Appearance',
  component: Badge,
  parameters: {
    docs: {
      docPage: {
        title: 'Badge',
      },
    },
  },
};
