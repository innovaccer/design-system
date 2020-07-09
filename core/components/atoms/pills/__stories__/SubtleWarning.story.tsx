import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Pills from '../../pills';

export const subtleWarning = () => {
  const ButtonSubtle = true;
  const children = text('children', 'Pills');
  return (
    <Pills
      appearance="warning"
      subtle={ButtonSubtle}
    >
      {children}
    </Pills>
  );
};

export default {
  title: 'Atoms|Pills',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills'
      }
    }
  }
};
