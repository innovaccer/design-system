import * as React from 'react';
import StatusHints, { Appearance } from '../StatusHints';

export const defaultStatusHints = () => {
  const appearances: Appearance[] = [
    'default'
  ];

  return (
    <div>
      {
        appearances.map((iconAppearance, i) => {
          return (
            <div key={i} style={{ marginBottom: '10px' }}>
              <StatusHints
                appearance={iconAppearance}
              >
                {iconAppearance.charAt(0).toUpperCase() + iconAppearance.slice(1)}
              </StatusHints>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|StatusHints',
  component: StatusHints,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHints'
      }
    }
  }
};
