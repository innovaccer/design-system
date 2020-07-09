import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Badge from '../Badge';

export const warning = () => {
  const subtle = false;
  const children = text('children', 'Badge');

  return (
    <Badge
      appearance="warning"
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
