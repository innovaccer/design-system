import * as React from 'react';
import Legend from '../../Legend';

// CSF format story
export const iconAppearance = () => {
  const appearances = [
    'primary',
    'secondary',
    'success',
    'alert',
    'warning',
    'accent1',
    'accent2',
    'accent3',
    'accent4',
    'inverse',
  ];

  return (
    <div>
      {appearances.map((appearance, i) => {
        return (
          <div key={i} className="mb-4">
            <Legend iconAppearance={appearance}>{appearance}</Legend>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Legend/Variants/Icon Appearance',
  component: Legend,
  parameters: {
    docs: {
      docPage: {
        title: 'Legend',
      },
    },
  },
};
