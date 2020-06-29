import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';
import StatusHint from '../StatusHint';

// CSF format story
export const all = () => {
  const children = text('children', 'Status Hint');

  const appearance = select(
    'Appearance',
    ['default', 'alert', 'info', 'warning', 'success'],
    undefined
  );

  const options = {
    appearance,
  };

  return (
    <div>
      <StatusHint
        {...options}
      >
        {children}
      </StatusHint>
    </div>
  );
};

export default {
  title: 'Atoms|StatusHint',
  component: StatusHint
};
