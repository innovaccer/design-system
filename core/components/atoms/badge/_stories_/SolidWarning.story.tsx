import * as React from 'react';
import Badge from '../Badge';

export const solidWarning = () => (
  <Badge
    appearance="warning"
    subtle={false}
  >
    {'Disapproved'}
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
