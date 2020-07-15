import * as React from 'react';
import Badge from '../Badge';

export const subtleSecondary = () => (
  <Badge
    appearance="secondary"
    subtle={true}
  >
    {'Closed'}
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
