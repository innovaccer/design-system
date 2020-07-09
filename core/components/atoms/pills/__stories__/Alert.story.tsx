import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Pills from '..';

export const alert = () => {
  const subtle = false;
  const children = text('children', 'Pills');
  return (
    <Pills
      appearance="alert"
      subtle={subtle}
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
