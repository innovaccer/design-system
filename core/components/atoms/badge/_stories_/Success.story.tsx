import * as React from 'react';
import Badge from '../Badge';

export const success = () => (
    <Badge
      appearance="success"
      subtle={false}
    >
      {'Badge'}
    </Badge>
  );

export default {
  title: 'Components/Badge/Success',
  component: Badge,
  parameters: {
    docs: {
      docPage: {
        title: 'Badge'
      }
    }
  }
};
