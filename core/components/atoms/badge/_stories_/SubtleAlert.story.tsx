import * as React from 'react';
import Badge from '../Badge';

export const subtleAlert = () => (
  <Badge
    appearance="alert"
    subtle={true}
  >
    {'1.41'}
  </Badge>

);

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
