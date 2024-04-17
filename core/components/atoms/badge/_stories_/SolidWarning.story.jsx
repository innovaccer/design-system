import * as React from 'react';
import { Badge } from '@/index';

// CSF format story
export const solidWarning = () => {
  return <Badge appearance="warning">Pending</Badge>;
};

export default {
  title: 'Components/Indicators/Badge/Solid Warning',
  component: Badge,
};
