import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Badge from '../Badge';

export const subtleAlert = () => {
  const ButtonSubtle = true;
  const children = text('children', 'Badge');
  return (
    <Badge
      appearance="alert"
      subtle={ButtonSubtle}
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
