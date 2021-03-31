import * as React from 'react';
import Badge from '../Badge';

export const solidAlert = () => (
  <Badge
    appearance="alert"
    subtle={false}
  >
    {'Failed'}
  </Badge>
);

export default {
  title: 'Components/Badge/Solid Alert',
  component: Badge,
  parameters: {
    docs: {
      docPage: {
        title: 'Badge'
      }
    }
  }
};
