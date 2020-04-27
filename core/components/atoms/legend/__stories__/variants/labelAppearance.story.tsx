import * as React from 'react';
import { Appearance } from '@/components/atoms/text';
import Legend from '../../Legend';

// CSF format story
export const labelAppearance = () => {
  const appearances: Appearance[] = ['default', 'white', 'destructive', 'subtle', 'disabled'];

  const style = {
    width: '100px',
    marginBottom: '10px'
  };

  return (
    <div>
      {
        appearances.map((appearance, i) => {
          return (
            <div key={i} style={{ background: appearance === 'white' ? 'black' : 'transparent', ...style }}>
              <Legend
                label={appearance.charAt(0).toUpperCase() + appearance.slice(1)}
                labelAppearance={appearance}
                iconAppearance={appearance === 'white' ? 'secondary' : 'inverse'}
              />
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Legend/Variants',
  component: Legend,
  parameters: {
    docs: {
      docPage: {
        title: 'Legend'
      }
    }
  }
};
