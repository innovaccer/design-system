import * as React from 'react';
import StatusHint, { Appearance } from '../StatusHint';
export const info = () => {
  const appearances: Appearance[] = [
    'info'
  ];

  return (
    <div>
      {
        appearances.map((iconAppearance, i) => {
          return (
            <div key={i} style={{ marginBottom: '10px' }}>
              <StatusHint
                appearance={iconAppearance}
              >
                {iconAppearance.charAt(0).toUpperCase() + iconAppearance.slice(1)}
              </StatusHint>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|StatusHint',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint'
      }
    }
  }
};
