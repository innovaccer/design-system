import * as React from 'react';
import Legend from '../../Legend';

// CSF format story
export const labelAppearance = () => {
  const appearances = ['default', 'white', 'destructive', 'subtle', 'disabled'];
  return (
    <div>
      {appearances.map((appearance, i) => {
        return (
          <div key={i} className={`${appearance === 'white' ? 'bg-dark' : 'bg-transparent'} mb-4 w-25 `}>
            <Legend labelAppearance={appearance} iconAppearance={appearance === 'white' ? 'secondary' : 'inverse'}>
              {appearance}
            </Legend>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Legend/Variants/Label Appearance',
  component: Legend,
  parameters: {
    docs: {
      docPage: {
        title: 'Legend',
      },
    },
  },
};
