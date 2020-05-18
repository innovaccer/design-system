import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';
import StatusHints from '../StatusHints';

// CSF format story
export const all = () => {
  const children = text('children', 'Status Hints');

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
      <StatusHints
        {...options}
      >
        {children}
      </StatusHints>
    </div>
  );
};

export default {
  title: 'Atoms|StatusHints',
  component: StatusHints
};
