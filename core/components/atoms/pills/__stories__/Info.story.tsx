import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Pills from '../Pills';

export const info = () => {
  const subtle = false;
  const children = text('children', 'Pills');
  return (
    <Pills
      appearance="primary"
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
