import * as React from 'react';
import StatusHint from '../../StatusHint';
import { MessageAppearance } from '../../../../../commonTypes';

// CSF format story
export const appearance = () => {
  const appearances: MessageAppearance[] = ['info', 'success', 'alert', 'warning', 'default'];

  return (
    <div>
      {appearances.map((iconAppearance, i) => {
        return (
          <div key={i} className="mb-4">
            <StatusHint appearance={iconAppearance}>{iconAppearance}</StatusHint>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/StatusHint/Variants/Appearance',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint',
      },
    },
  },
};
