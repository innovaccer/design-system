import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Badge from '../Badge';

export const success = () => {
  const subtle = false;
  const children = text('children', 'Badge');
  return (
    <Badge
      appearance="success"
      subtle={subtle}
    >
      {children}
    </Badge>
  );
};

export default {
  title: 'Atoms|Badge',
  component: Badge,
  parameters: {
    docs: {
      docPage: {
        title: 'Badge'
      }
    }
  }
};
