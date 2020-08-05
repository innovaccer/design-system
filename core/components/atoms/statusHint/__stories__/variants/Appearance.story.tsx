import * as React from 'react';
import StatusHint, { Appearance } from '../../StatusHint';

// CSF format story
export const appearance = () => {
  const appearances: Appearance[] = [
    'info',
    'success',
    'alert',
    'warning',
    'default',
  ];

  return (
    <div>
      {
        appearances.map((iconAppearance, i) => {
          return (
            <div key={i} className="mb-4">
              <StatusHint
                appearance={iconAppearance}
              >
                {iconAppearance}
              </StatusHint>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|StatusHint/Variants',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint'
      }
    }
  }
};
