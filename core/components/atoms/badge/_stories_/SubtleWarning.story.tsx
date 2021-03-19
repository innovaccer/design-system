import * as React from 'react';
import Badge from '../Badge';

export const subtleWarning = () => (
  <Badge
    appearance="warning"
    subtle={true}
  >
    {'Pending'}
  </Badge>

);

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      docPage: {
        title: 'Badge'
      }
    }
  }
};
