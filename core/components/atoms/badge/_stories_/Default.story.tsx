import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Badge from '../Badge';

export const defaultbadge = () => {
  const subtle = false;
  const children = text('children', 'Badge');
  return (
    <Badge
      appearance="secondary"
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
