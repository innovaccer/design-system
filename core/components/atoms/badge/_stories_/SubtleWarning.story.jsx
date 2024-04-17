import * as React from 'react';
import { Badge } from '@/index';

// CSF format story
export const subtleWarning = () => {
  return (
    <Badge appearance="warning" subtle={true}>
      Pending
    </Badge>
  );
};

export default {
  title: 'Components/Badge/Subtle Warning',
  component: Badge,
};
