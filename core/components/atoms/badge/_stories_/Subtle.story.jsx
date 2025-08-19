import * as React from 'react';
import { Badge } from '@/index';

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
          <Badge key={ind} appearance={appear} subtle={true}>
            {appear}
          </Badge>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Badge/Subtle',
  component: Badge,
  parameters: {
    docs: {
      docPage: {
        title: 'Badge',
        propDescription: `Note: All the valid properties of HTML SPAN elements are acceptable as a prop`,
      },
    },
  },
};
